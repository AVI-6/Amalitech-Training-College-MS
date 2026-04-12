module "ecr" {
  source   = "./modules/tf-ecr"
  ecr_name = var.ecr-name
}