terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = local.common_tags
  }
}

locals {
  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "terraform"
  }

  database_url = "postgresql://postgres:${random_password.db.result}@${module.rds.address}:${module.rds.port}/${module.rds.database_name}"
}

resource "random_password" "db" {
  length  = 24
  special = false
}

module "vpc" {
  source = "../../modules/vpc"

  project_name       = var.project_name
  environment        = var.environment
  vpc_cidr           = var.vpc_cidr
  availability_zones = var.availability_zones
  tags               = local.common_tags
}

module "ecr" {
  source = "../../modules/ecr"

  project_name = var.project_name
  environment  = var.environment
  tags         = local.common_tags
}

module "secrets" {
  source = "../../modules/secrets"

  project_name      = var.project_name
  environment       = var.environment
  internal_api_key  = var.internal_api_key
  openai_api_key    = var.openai_api_key
  anthropic_api_key = var.anthropic_api_key
  sanity_read_token = var.sanity_read_token
  db_password       = random_password.db.result
  tags              = local.common_tags
}

module "rds" {
  source = "../../modules/rds"

  project_name      = var.project_name
  environment       = var.environment
  vpc_id            = module.vpc.vpc_id
  subnet_ids        = module.vpc.private_subnet_ids
  security_group_id = module.vpc.database_security_group_id
  db_password       = random_password.db.result
  instance_class    = var.rds_instance_class
  tags              = local.common_tags
}

module "elasticache" {
  source = "../../modules/elasticache"

  project_name      = var.project_name
  environment       = var.environment
  subnet_ids        = module.vpc.private_subnet_ids
  security_group_id = module.vpc.database_security_group_id
  node_type         = var.redis_node_type
  tags              = local.common_tags
}

module "alb" {
  source = "../../modules/alb"

  project_name      = var.project_name
  environment       = var.environment
  vpc_id            = module.vpc.vpc_id
  subnet_ids        = module.vpc.public_subnet_ids
  security_group_id = module.vpc.alb_security_group_id
  certificate_arn = var.acm_certificate_arn
  tags              = local.common_tags
}

module "iam" {
  source = "../../modules/iam"

  project_name               = var.project_name
  environment                = var.environment
  aws_region                 = var.aws_region
  github_org                 = var.github_org
  github_repo                = var.github_repo
  app_secret_arn             = module.secrets.app_secret_arn
  db_secret_arn              = module.secrets.db_secret_arn
  frontend_ecr_arn           = module.ecr.frontend_repository_arn
  backend_ecr_arn            = module.ecr.backend_repository_arn
  create_github_oidc_provider = var.create_github_oidc_provider
  tags                       = local.common_tags
}

module "ecs" {
  source = "../../modules/ecs"

  project_name               = var.project_name
  environment                = var.environment
  aws_region                 = var.aws_region
  vpc_id                     = module.vpc.vpc_id
  private_subnet_ids         = module.vpc.private_subnet_ids
  frontend_security_group_id = module.vpc.frontend_security_group_id
  backend_security_group_id  = module.vpc.backend_security_group_id
  frontend_target_group_arn  = module.alb.frontend_target_group_arn
  frontend_image             = coalesce(var.frontend_image, "${module.ecr.frontend_repository_url}:latest")
  backend_image              = coalesce(var.backend_image, "${module.ecr.backend_repository_url}:latest")
  execution_role_arn         = module.iam.ecs_execution_role_arn
  task_role_arn              = module.iam.ecs_task_role_arn
  app_secret_arn             = module.secrets.app_secret_arn
  database_url               = local.database_url
  redis_url                  = module.elasticache.redis_url
  site_url                   = var.site_url
  sanity_project_id          = var.sanity_project_id
  sanity_dataset             = var.sanity_dataset
  desired_count              = var.service_desired_count
  tags                       = local.common_tags
}
