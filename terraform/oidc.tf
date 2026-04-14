module "oidc-gitactions" {
  source   = "./modules/iam"
  ecr_name = "avi-school-ms"
  region   = "eu-north-1"
}
