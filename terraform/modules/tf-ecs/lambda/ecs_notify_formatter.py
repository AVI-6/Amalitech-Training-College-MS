import json
import boto3
import os
from datetime import datetime, timezone

sns = boto3.client("sns")
SNS_TOPIC_ARN = os.environ["SNS_TOPIC_ARN"]


def format_time(iso_str):
    if not iso_str:
        return "N/A"
    try:
        dt = datetime.fromisoformat(iso_str.replace("Z", "+00:00"))
        return dt.strftime("%Y-%m-%d %H:%M:%S UTC")
    except Exception:
        return iso_str


def handle_task_state_change(detail, region, account):
    cluster = detail.get("clusterArn", "").split("/")[-1]
    task_id = detail.get("taskArn", "").split("/")[-1]
    last_status = detail.get("lastStatus", "UNKNOWN")
    desired_status = detail.get("desiredStatus", "UNKNOWN")
    group = detail.get("group", "N/A")          # e.g. service:avi-ecs-service
    launch_type = detail.get("launchType", "N/A")
    task_def = detail.get("taskDefinitionArn", "").split("/")[-1]  # name:revision
    started_at = format_time(detail.get("startedAt"))
    updated_at = format_time(detail.get("updatedAt"))

    # Container info
    containers = detail.get("containers", [])
    container_lines = []
    for c in containers:
        name = c.get("name", "unknown")
        status = c.get("lastStatus", "unknown")
        image = c.get("image", "unknown").split("/")[-1]   # just repo:tag
        container_lines.append(f"  • {name}  [{status}]  image: {image}")
    containers_str = "\n".join(container_lines) if container_lines else "  N/A"

    # Stop reason (only present when STOPPED)
    stop_reason = detail.get("stoppedReason", "")
    stop_section = f"\nStop reason : {stop_reason}" if stop_reason else ""

    # Choose emoji by status
    emoji = {"RUNNING": "✅", "STOPPED": "🛑", "PENDING": "⏳"}.get(last_status, "ℹ️")

    subject = f"{emoji} ECS Task {last_status} — {cluster}"

    body = f"""
{emoji} ECS Task State Change
{'=' * 30}
Event        : {detail.get('eventName', 'UNKNOWN')}
Cluster      : {cluster}
Task ID      : {task_id}
Status       : {last_status}  (desired: {desired_status}){stop_section}
Service      : {group}
Task def     : {task_def}
Launch type  : {launch_type}
Region       : {region}
Account      : {account}

Containers:
{containers_str}

Timeline:
  Started    : {started_at}
  Updated    : {updated_at}
{'=' * 50}
""".strip()

    return subject, body


def handle_deployment_state_change(detail, region, account):
    event_name = detail.get("eventName", "UNKNOWN")
    reason = detail.get("reason", "")
    service = detail.get("deploymentId", "N/A")
    updated_at = format_time(detail.get("updatedAt"))

    emoji = "✅" if "SUCCEEDED" in event_name else "❌"
    status_label = "succeeded" if "SUCCEEDED" in event_name else "FAILED"

    # Extract cluster/service from any ARN in the event (best effort)
    resources = detail.get("clusterArn", "")
    cluster = resources.split("/")[-1] if resources else "unknown"

    subject = f"{emoji} ECS Deployment {status_label.upper()} — {cluster}"

    body = f"""
{emoji} ECS Deployment State Change
{'=' * 50}
Event        : {event_name}
Cluster      : {cluster}
Deployment ID: {service}
Region       : {region}
Account      : {account}
Updated at   : {updated_at}
{f"Reason       : {reason}" if reason else ""}
{'=' * 50}
""".strip()

    return subject, body


def lambda_handler(event, context):
    try:
        # EventBridge wraps the payload — parse it
        message_str = event.get("Records", [{}])[0].get("Sns", {}).get("Message", "")
        if message_str:
            # Came via SNS → Lambda (if you wired it that way later)
            payload = json.loads(message_str)
        else:
            # Came directly from EventBridge → Lambda
            payload = event

        detail_type = payload.get("detail-type", "")
        detail = payload.get("detail", {})
        region = payload.get("region", "unknown")
        account = payload.get("account", "unknown")

        if detail_type == "ECS Task State Change":
            subject, body = handle_task_state_change(detail, region, account)
        elif detail_type == "ECS Deployment State Change":
            subject, body = handle_deployment_state_change(detail, region, account)
        else:
            subject = f"ECS Notification: {detail_type}"
            body = json.dumps(payload, indent=2)

        sns.publish(
            TopicArn=SNS_TOPIC_ARN,
            Subject=subject[:100],   # SNS subject max 100 chars
            Message=body,
        )

        return {"statusCode": 200, "body": "Notification sent"}

    except Exception as e:
        print(f"ERROR: {e}")
        raise
