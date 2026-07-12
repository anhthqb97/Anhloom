#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
STAGING_DIR="$ROOT_DIR/infra/environments/staging"

if [[ ! -f "$STAGING_DIR/terraform.tfvars" ]]; then
  echo "Copy terraform.tfvars.example to terraform.tfvars and configure secrets first."
  exit 1
fi

cd "$STAGING_DIR"
terraform init -input=false
terraform plan -out=tfplan
terraform apply tfplan

echo ""
echo "Staging infrastructure provisioned."
echo "ALB DNS:        $(terraform output -raw alb_dns_name)"
echo "Deploy role:    $(terraform output -raw github_deploy_role_arn)"
echo "Frontend ECR:   $(terraform output -raw frontend_ecr_repository_url)"
echo "Backend ECR:    $(terraform output -raw backend_ecr_repository_url)"
