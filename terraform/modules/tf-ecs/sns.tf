resource "aws_sns_topic" "mail_notifications" {
    name = "ecs-mail-notifications"
    display_name = "avi-ecs-mail-notifications"
}


resource "aws_sns_topic_subscription" "email_alert" {
  topic_arn = aws_sns_topic.mail_notifications.arn
  protocol  = "email"
  endpoint  = "lesliekofiameg@gmail.com"  
}



# EventBridge Rule for ECS Task State Changes
resource "aws_cloudwatch_event_rule" "ecs_task_state_change" {
  name        = "ecs-task-state-change"
  description = "Capture ECS task state changes"
  event_pattern = jsonencode({
    "source" : ["aws.ecs"],
    "detail-type" : ["ECS Task State Change"],
    "detail" : {
      "lastStatus" : ["RUNNING", "STOPPED", "PENDING"]
    }
  })
}

resource "aws_cloudwatch_event_target" "ecs_task_state_change_target" {
  rule      = aws_cloudwatch_event_rule.ecs_task_state_change.name
  target_id = "send-to-sns"
  arn       = aws_sns_topic.mail_notifications.arn
}

# EventBridge Rule for ECS Deployment State Changes
resource "aws_cloudwatch_event_rule" "ecs_deployment_state_change" {
  name        = "ecs-deployment-state-change"
  description = "Capture ECS deployment state changes"
  event_pattern = jsonencode({
    "source" : ["aws.ecs"],
    "detail-type" : ["ECS Deployment State Change"],
    "detail" : {
      "eventName" : ["SERVICE_DEPLOYMENT_SUCCEEDED", "SERVICE_DEPLOYMENT_FAILED"]
    }
  })
}

resource "aws_cloudwatch_event_target" "ecs_deployment_state_change_target" {
  rule      = aws_cloudwatch_event_rule.ecs_deployment_state_change.name
  target_id = "send-to-sns"
  arn       = aws_sns_topic.mail_notifications.arn
}

# Permission for CloudWatch Events to Publish to SNS Topic
resource "aws_sns_topic_policy" "sns_topic_policy" {
  arn = aws_sns_topic.mail_notifications.arn
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid : "Allow_CloudWatch_Events",
        Effect : "Allow",
        Principal : {
          Service : "events.amazonaws.com"
        },
        Action : ["sns:Publish"],
        Resource : aws_sns_topic.mail_notifications.arn
      }
    ]
  })
}