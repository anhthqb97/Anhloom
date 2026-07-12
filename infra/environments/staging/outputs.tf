output "alb_dns_name" {
  description = "Public ALB DNS name"
  value       = module.alb.dns_name
}

output "site_url" {
  description = "Configured public site URL"
  value       = var.site_url
}

output "frontend_ecr_repository_url" {
  value = module.ecr.frontend_repository_url
}

output "backend_ecr_repository_url" {
  value = module.ecr.backend_repository_url
}

output "ecs_cluster_name" {
  value = module.ecs.cluster_name
}

output "frontend_service_name" {
  value = module.ecs.frontend_service_name
}

output "backend_service_name" {
  value = module.ecs.backend_service_name
}

output "backend_internal_url" {
  value = module.ecs.backend_internal_url
}

output "github_deploy_role_arn" {
  value = module.iam.github_deploy_role_arn
}

output "rds_endpoint" {
  value = module.rds.endpoint
}

output "redis_endpoint" {
  value = module.elasticache.endpoint
}
