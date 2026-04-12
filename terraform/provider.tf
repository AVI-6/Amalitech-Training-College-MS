terraform {
  backend "s3" {
    bucket       = "avi-tf-file"
    key          = "avi/school-ms/ecr/terraform.tfstate"
    region       = "eu-north-1"
    use_lockfile = true
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=5.39.0"
    }
  }
}






