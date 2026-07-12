variable "aws_region" {
  type    = string
  default = "ap-southeast-1"
}

variable "project_name" {
  type    = string
  default = "company-web"
}

variable "environment" {
  type    = string
  default = "staging"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "availability_zones" {
  type    = list(string)
  default = ["ap-southeast-1a", "ap-southeast-1b"]
}

variable "site_url" {
  type        = string
  description = "Public staging URL, e.g. https://staging.anhloom.com or http://<alb-dns>"
}

variable "github_org" {
  type = string
}

variable "github_repo" {
  type = string
}

variable "acm_certificate_arn" {
  type        = string
  default     = ""
  description = "Optional ACM cert ARN for HTTPS on ALB"
}

variable "internal_api_key" {
  type      = string
  sensitive = true
}

variable "openai_api_key" {
  type      = string
  sensitive = true
  default   = ""
}

variable "anthropic_api_key" {
  type      = string
  sensitive = true
  default   = ""
}

variable "sanity_read_token" {
  type      = string
  sensitive = true
  default   = ""
}

variable "sanity_project_id" {
  type    = string
  default = ""
}

variable "sanity_dataset" {
  type    = string
  default = "production"
}

variable "frontend_image" {
  type        = string
  default     = null
  description = "Override frontend ECR image URI"
}

variable "backend_image" {
  type        = string
  default     = null
  description = "Override backend ECR image URI"
}

variable "service_desired_count" {
  type        = number
  default     = 0
  description = "Set to 1 after first images are pushed to ECR"
}

variable "rds_instance_class" {
  type    = string
  default = "db.t4g.micro"
}

variable "redis_node_type" {
  type    = string
  default = "cache.t4g.micro"
}

variable "create_github_oidc_provider" {
  type        = bool
  default     = true
  description = "Set false if GitHub OIDC provider already exists in the AWS account"
}
