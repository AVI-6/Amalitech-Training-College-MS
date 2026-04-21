resource "aws_lambda_function" "ecs_notify_formatter" {
  function_name = "${var.name}-ecs-notify-formatter"
  description = "Fomatter for ECS notifications sent to SNS"
  role         = aws_iam_role.ecs_notify_lambda_role.arn
  handler = "ecs_notify_formatter.lambda_handler"
  runtime = "python3.9"
  filename         = "${path.module}/lambda/ecs_notify_formatter.py.zip"
  source_code_hash = filebase64sha256("${path.module}/lambda/ecs_notify_formatter.py.zip")
  timeout = 10

  environment {
    variables = {
      SNS_TOPIC_ARN= aws_sns_topic.mail_notifications.arn
    }
  }

}

resource "aws_lambda_permission" "allow_eventbridge_task" {
    statement_id = "AllowEventBridgeTaskStateChange"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.ecs_notify_formatter.function_name
    principal = "events.amazonaws.com"
    source_arn = aws_cloudwatch_event_rule.ecs_task_state_change.arn 
}


resource "aws_lambda_permission" "allow_eventbridge_deployment" {
    statement_id = "AllowEventBridgeDeploymentStateChange"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.ecs_notify_formatter.function_name
    principal = "events.amazonaws.com"
    source_arn = aws_cloudwatch_event_rule.ecs_deployment_state_change.arn
  
}


