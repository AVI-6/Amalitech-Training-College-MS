locals {
  len_public_subnets      =length(var.public_subnets)
  len_private_subnets     = length(var.private_subnets)


  max_subnet_length = max(
    local.len_private_subnets,
    local.len_public_subnets,
  )
  
vpc_id = one(aws_vpc.avi-vpc[*].id)

  create_vpc = var.create_vpc
  create_public_subnets = local.create_vpc && local.len_public_subnets > 0
  create_private_subnets = local.create_vpc && local.len_private_subnets > 0
  nat_gateway_count = var.single_nat_gateway ? 1 : var.one_nat_gateway_per_az ? length(var.azs) : local.max_subnet_length
  nat_gateway_ips   = var.reuse_nat_ips ? var.external_nat_ip_ids : try(aws_eip.nat[*].id, [])
}
