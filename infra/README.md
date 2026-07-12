# AWS Staging Infrastructure (Terraform)

Terraform modules for deploying the full Anhloom stack to **AWS ECS Fargate**:

- **Frontend** — Next.js (port 3000) behind ALB
- **Backend** — FastAPI (port 8000) on private service discovery (`backend.company-web.local`)
- **RDS** — PostgreSQL 16
- **ElastiCache** — Redis 7
- **ECR** — Container registries
- **Secrets Manager** — API keys and DB credentials
- **IAM** — ECS roles + GitHub OIDC deploy role

## Architecture

```
Internet → ALB (HTTP/HTTPS) → ECS Frontend (private subnet)
                                    ↓ INTERNAL_API_URL
                              ECS Backend (private subnet)
                                    ├── RDS PostgreSQL
                                    └── ElastiCache Redis
```

## Directory layout

```
infra/
├── bootstrap/           # One-time S3 + DynamoDB for TF state
├── environments/
│   └── staging/         # Staging root module
└── modules/
    ├── vpc/
    ├── ecr/
    ├── secrets/
    ├── rds/
    ├── elasticache/
    ├── alb/
    ├── ecs/
    └── iam/
```

## Prerequisites

- AWS CLI configured (`aws configure`)
- Terraform >= 1.6
- Docker (for image builds)
- GitHub repo with Actions enabled

## 1. Bootstrap remote state (one time)

```bash
cd infra/bootstrap
terraform init
terraform apply
```

Creates:
- S3 bucket: `anhloom-terraform-state`
- DynamoDB table: `anhloom-terraform-locks`

## 2. Provision staging infrastructure

```bash
cd infra/environments/staging
cp terraform.tfvars.example terraform.tfvars
```

Set secrets via environment variables (do not commit `terraform.tfvars` with secrets):

```bash
export TF_VAR_internal_api_key="your-secret-key"
export TF_VAR_openai_api_key="sk-..."
export TF_VAR_anthropic_api_key="..."
export TF_VAR_sanity_read_token="..."
export TF_VAR_sanity_project_id="..."
export TF_VAR_site_url="http://<alb-dns-after-first-apply>"
```

Initial apply (services scaled to 0 until images exist):

```bash
terraform init
terraform plan
terraform apply
```

Note outputs:

```bash
terraform output alb_dns_name
terraform output github_deploy_role_arn
terraform output frontend_ecr_repository_url
terraform output backend_ecr_repository_url
```

## 3. Configure GitHub secrets

| Secret | Description |
|--------|-------------|
| `AWS_DEPLOY_ROLE_ARN` | Output `github_deploy_role_arn` from Terraform |
| `AWS_PROVISION_ROLE_ARN` | Admin/power-user role for one-time `terraform apply` (or run locally) |
| `INTERNAL_API_KEY` | Same value as `TF_VAR_internal_api_key` |
| `OPENAI_API_KEY` | Optional — AI features |
| `ANTHROPIC_API_KEY` | Optional — AI fallback |
| `SANITY_API_READ_TOKEN` | Sanity CMS read token |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `STAGING_SITE_URL` | Public URL, e.g. `https://staging.anhloom.com` or `http://<alb-dns>` |

## 4. Deploy via GitHub Actions

### One-time: Provision infrastructure

Run the **Provision AWS Staging** workflow (or `infra/scripts/provision-staging.sh` locally).

### Ongoing: Deploy images

Push to `main` or run **Deploy AWS Staging** workflow manually.

The deploy workflow:
1. Builds and pushes Docker images to ECR
2. Registers new ECS task definitions with updated image tags
3. Updates services and waits for stability

## 5. Manual image push (alternative)

```bash
AWS_REGION=ap-southeast-1
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
REGISTRY="${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"

aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $REGISTRY

docker build -t $REGISTRY/company-web-frontend:latest .
docker build -t $REGISTRY/company-web-backend:latest ./backend
docker push $REGISTRY/company-web-frontend:latest
docker push $REGISTRY/company-web-backend:latest

cd infra/environments/staging
terraform apply -var="service_desired_count=1"
```

## HTTPS (optional)

1. Request ACM certificate for `staging.anhloom.com` in `ap-southeast-1`
2. Set `acm_certificate_arn` in `terraform.tfvars`
3. Point Route53 A/ALIAS record to ALB DNS name
4. Update `site_url` to `https://staging.anhloom.com`

## Cost estimate (staging)

| Resource | Approx. monthly |
|----------|-----------------|
| ECS Fargate (2 tasks) | ~$15–25 |
| RDS db.t4g.micro | ~$12 |
| ElastiCache cache.t4g.micro | ~$12 |
| ALB + NAT Gateway | ~$35–45 |
| **Total** | **~$75–95** |

## Destroy staging

```bash
cd infra/environments/staging
terraform destroy
```
