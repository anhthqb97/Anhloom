variable "project_name" {
  type = string
}

variable "environment" {
  type = string
}

variable "aws_region" {
  type = string
}

variable "github_org" {
  type = string
}

variable "github_repo" {
  type = string
}

variable "app_secret_arn" {
  type = string
}

variable "db_secret_arn" {
  type = string
}

variable "frontend_ecr_arn" {
  type = string
}

variable "backend_ecr_arn" {
  type = string
}

variable "create_github_oidc_provider" {
  type    = bool
  default = true
}

variable "tags" {
  type    = map(string)
  default = {}
}
