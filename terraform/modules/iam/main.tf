# GitHub Actions OIDC Provider
resource "aws_iam_openid_connect_provider" "github_actions_oidc" {
  url            = "https://token.actions.githubusercontent.com"
  client_id_list = ["sts.amazonaws.com"]
  thumbprint_list = [
    "6938fd4d98bab03faadb97b34396831e3780aea1",
    "1c58a3a8518e8759bf075b76b750d4f2df264fcd"
  ]
}

# IAM Role for GitHub Actions
resource "aws_iam_role" "github_actions_role" {
  name = "GithubActions"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          Federated = aws_iam_openid_connect_provider.github_actions_oidc.arn
        },
        Action = "sts:AssumeRoleWithWebIdentity",
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
          },
          StringLike = {
            #https://github.com/AVI-6/Amalitech-Training-College-MS.git
            "token.actions.githubusercontent.com:sub" = "repo:AVI-6/Amalitech-Training-College-MS:*"
          }
        }
      }
    ]
  })

  lifecycle {
    prevent_destroy = false
  }
}

# IAM Policy — ECR + ECS full access only
data "aws_region" "current" {}
data "aws_caller_identity" "current" {}

resource "aws_iam_role_policy" "github_actions_access_policy" {
  name = "github-actions-access-policy"
  role = aws_iam_role.github_actions_role.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [

      # ECR Full Access 
      {
        Sid    = "ECRFullAccess"
        Effect = "Allow"
        Action = [
          "ecr:GetAuthorizationToken",

          "ecr:CreateRepository",
          "ecr:DeleteRepository",
          "ecr:DescribeRepositories",
          "ecr:ListTagsForResource",
          "ecr:TagResource",
          "ecr:UntagResource",

          "ecr:BatchCheckLayerAvailability",
          "ecr:BatchDeleteImage",
          "ecr:BatchGetImage",
          "ecr:CompleteLayerUpload",
          "ecr:DeleteLifecyclePolicy",
          "ecr:DeleteRepositoryPolicy",
          "ecr:DescribeImageScanFindings",
          "ecr:DescribeImages",
          "ecr:GetDownloadUrlForLayer",
          "ecr:GetLifecyclePolicy",
          "ecr:GetLifecyclePolicyPreview",
          "ecr:GetRepositoryPolicy",
          "ecr:InitiateLayerUpload",
          "ecr:ListImages",
          "ecr:PutImage",
          "ecr:PutLifecyclePolicy",
          "ecr:SetRepositoryPolicy",
          "ecr:StartImageScan",
          "ecr:StartLifecyclePolicyPreview",
          "ecr:UploadLayerPart"
        ]
        Resource = "arn:aws:ecr:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:repository/${var.ecr_name}"
      },

      #ECS Full Access 
      {
        Sid    = "ECSFullAccess"
        Effect = "Allow"
        Action = [
          "ecs:CreateCluster",
          "ecs:CreateService",
          "ecs:CreateTaskSet",
          "ecs:DeleteCluster",
          "ecs:DeleteService",
          "ecs:DeleteTaskSet",
          "ecs:DeregisterContainerInstance",
          "ecs:DeregisterTaskDefinition",
          "ecs:DescribeClusters",
          "ecs:DescribeContainerInstances",
          "ecs:DescribeServices",
          "ecs:DescribeTaskDefinition",
          "ecs:DescribeTaskSets",
          "ecs:DescribeTasks",
          "ecs:ExecuteCommand",
          "ecs:ListAttributes",
          "ecs:ListClusters",
          "ecs:ListContainerInstances",
          "ecs:ListServices",
          "ecs:ListTagsForResource",
          "ecs:ListTaskDefinitionFamilies",
          "ecs:ListTaskDefinitions",
          "ecs:ListTasks",
          "ecs:PutAttributes",
          "ecs:PutClusterCapacityProviders",
          "ecs:RegisterContainerInstance",
          "ecs:RegisterTaskDefinition",
          "ecs:RunTask",
          "ecs:StartTask",
          "ecs:StopTask",
          "ecs:TagResource",
          "ecs:UntagResource",
          "ecs:UpdateCluster",
          "ecs:UpdateClusterSettings",
          "ecs:UpdateContainerAgent",
          "ecs:UpdateContainerInstancesState",
          "ecs:UpdateService",
          "ecs:UpdateServicePrimaryTaskSet",
          "ecs:UpdateTaskSet"
        ]
        Resource = "arn:aws:ecs:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:*"
      },

      # IAM PassRole (ECS needs this to assign task/execution roles)
      {
        Sid      = "IAMPassRoleForECS"
        Effect   = "Allow"
        Action   = "iam:PassRole"
        Resource = "*"
        Condition = {
          StringLike = {
            "iam:PassedToService" = "ecs-tasks.amazonaws.com"
          }
        }
      }
    ]
  })

  lifecycle {
    prevent_destroy = false
  }
}
