module "ecr" {
  source     = "./modules/tf-ecr"
  ecr_name   = var.ecr-name
  depends_on = [module.vpc]

}

module "vpc" {
  source          = "./modules/tf-vpc"
  region          = var.region
  short_region    = var.short_region
  cidr            = var.vpc_ip_cidr
  account_name    = var.name
  private_subnets = flatten([for name, subnet in var.vpc_subnets_map["private"] : keys(subnet) if name == "general"])
  public_subnets  = flatten([for name, subnet in var.vpc_subnets_map["public"] : keys(subnet) if name == "general"])
  tags            = var.tags


}


module "ecs" {
  source             = "./modules/tf-ecs"
  account_name       = var.account_name
  app_count          = 2
  app_port           = 80
  aws_region         = "eu-north-1"
  container_cpu      = 1024
  container_memory   = 2048
  container_name     = "avi-school-ecs-container"
  health_check_path  = "/"
  image              = "chriscloudaz/netflix:latest"
  name               = var.name
  private_subnet_ids = module.vpc.private_subnet_ids
  public_subnets_ids = module.vpc.public_subnet_ids
  vpc_id             = module.vpc.vpc_id
  vpc_ip_cidr        = var.vpc_ip_cidr

  depends_on = [module.vpc]
}
