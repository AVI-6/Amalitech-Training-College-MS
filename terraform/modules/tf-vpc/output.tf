output "vpc_id" {
  description = "The ID of the VPC"
  value       = local.vpc_id  
  # resolves to: one(aws_vpc.avi-vpc[*].id)
}

output "private_subnet_ids" {
  description = "List of private subnet IDs"
  value       = aws_subnet.private[*].id
}

output "public_subnet_ids" {
  description = "List of public subnet IDs"
  value       = aws_subnet.public[*].id
}

output "nat_gateway_ids" {
  description = "List of NAT gateway IDs"
  value       = aws_eip.nat[*].id
}
