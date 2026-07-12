# AWS Staging Deployment Guide

This guide closes the remaining M4 gate item: **API deployed on AWS with Docker**.

## Quick start checklist

- [ ] Run `infra/bootstrap` to create Terraform state bucket
- [ ] Run `terraform apply` in `infra/environments/staging`
- [ ] Add GitHub secrets (see below)
- [ ] Trigger **Deploy AWS Staging** workflow
- [ ] Verify `https://<staging-url>/health` via frontend proxy
- [ ] Verify AI endpoints via browser smoke test

## What gets deployed

| Component | AWS service | Notes |
|-----------|-------------|-------|
| Next.js frontend | ECS Fargate | Public via ALB |
| FastAPI backend | ECS Fargate | Private, service discovery DNS |
| PostgreSQL | RDS 16 | Private subnet |
| Redis | ElastiCache 7 | Private subnet |
| Secrets | Secrets Manager | API keys, DB password |
| Images | ECR | `company-web-frontend`, `company-web-backend` |
| CI/CD | GitHub Actions + OIDC | No long-lived AWS keys |

## Environment wiring

Inside ECS, the frontend container uses:

| Variable | Value |
|----------|-------|
| `INTERNAL_API_URL` | `http://backend.company-web.local:8000` |
| `NEXT_PUBLIC_API_URL` | Public staging URL |
| `INTERNAL_API_KEY` | From Secrets Manager |

The backend container uses:

| Variable | Source |
|----------|--------|
| `DATABASE_URL` | Built from RDS endpoint + Secrets Manager password |
| `REDIS_URL` | ElastiCache endpoint |
| `CORS_ORIGINS` | Public staging URL |

## GitHub secrets required

```
AWS_PROVISION_ROLE_ARN    # for one-time terraform apply (or run locally)
AWS_DEPLOY_ROLE_ARN       # from: terraform output github_deploy_role_arn
INTERNAL_API_KEY          # shared FE↔BE secret
STAGING_SITE_URL          # e.g. http://company-web-staging-xxx.ap-southeast-1.elb.amazonaws.com
NEXT_PUBLIC_SANITY_PROJECT_ID
SANITY_API_READ_TOKEN
OPENAI_API_KEY            # optional
ANTHROPIC_API_KEY         # optional
```

## Validation after deploy

```bash
STAGING_URL="http://<alb-dns>"

# Frontend
curl -I "$STAGING_URL"

# Backend health (via Next.js proxy)
curl -X POST "$STAGING_URL/api/search" \
  -H "Content-Type: application/json" \
  -d '{"query":"kubernetes cost","limit":2}'

# Estimate
curl -X POST "$STAGING_URL/api/estimate" \
  -H "Content-Type: application/json" \
  -d '{"project_type":"MVP / Prototype","features":["User authentication"],"timeline":"4-8 weeks","team_size":"2-3 engineers","notes":""}'
```

## Troubleshooting

### ECS tasks fail to start
- Check CloudWatch log groups: `/ecs/company-web/staging/frontend` and `.../backend`
- Ensure ECR images exist (`aws ecr describe-images`)
- Set `service_desired_count = 1` only after images are pushed

### Frontend 500 on `/api/*`
- Verify `INTERNAL_API_URL` resolves inside the task (service discovery)
- Check backend security group allows port 8000 from frontend SG

### Terraform state lock
```bash
terraform force-unlock <lock-id>
```

## Related docs

- [infra/README.md](../infra/README.md) — full Terraform reference
- [phase4-validation.md](./phase4-validation.md) — local Docker validation results
