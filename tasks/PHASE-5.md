# Phase 5 — AWS Infrastructure (SDD Step 3: Tasks)

> **SDD chain:** [constitution](../docs/sdd/constitution.md) → [spec](../docs/sdd/spec.md) → [plan](../docs/sdd/plan.md) → **tasks** → implement → validate
> **41 tasks** · ~30–60 min each · Progress: [PROGRESS.md](../PROGRESS.md)
> **AI:** Follow [AGENTS.md](../AGENTS.md)

| Field | Value |
|-------|-------|
| **Spec refs** | Infrastructure, Deliverables, Production Deployment |
| **Plan refs** | §7 Architecture, §7.3 Docker, AWS + Terraform |
| **Weeks** | W15–W18 |
| **Gate** | M5 — staging + production on AWS via Terraform |

**Goal:** Provision, deploy, and operate the full stack on AWS using Terraform (ECS Fargate, RDS, ElastiCache, ALB, ECR).

**Progress:** `████░░░░░░` **44%** (18 / 41)

> Closes the remaining M4 gate item: *API deployed on AWS with Docker* ([PHASE-4.md](./PHASE-4.md) §Gate).

---

### 5.1 Terraform Foundation `5/6`

> **Spec:** Infrastructure · **Plan:** §7 Architecture

- [x] **P5-001** Create `infra/` directory layout (`modules/`, `environments/`, `bootstrap/`)
- [x] **P5-002** Bootstrap module — S3 state bucket + DynamoDB lock table
- [x] **P5-003** Staging environment root module (`environments/staging/`)
- [x] **P5-004** `terraform.tfvars.example` + secrets documentation
- [x] **P5-005** Provider lock file (`.terraform.lock.hcl`) + `infra/.gitignore`
- [ ] **P5-006** Apply bootstrap to AWS (remote state live)

### 5.2 Core AWS Modules `8/8`

> **Spec:** AWS, Docker, Terraform · **Plan:** §7.3 Docker Architecture

- [x] **P5-007** VPC module — public/private subnets, NAT, security groups
- [x] **P5-008** ECR module — `company-web-frontend` + `company-web-backend` repos
- [x] **P5-009** Secrets Manager module — API keys + DB credentials
- [x] **P5-010** RDS module — PostgreSQL 16 in private subnet
- [x] **P5-011** ElastiCache module — Redis 7 in private subnet
- [x] **P5-012** ALB module — HTTP listener + frontend target group
- [x] **P5-013** ECS module — Fargate cluster, frontend + backend services, service discovery
- [x] **P5-014** IAM module — ECS execution/task roles + GitHub OIDC deploy role

### 5.3 Staging Provisioning `3/6`

- [ ] **P5-015** Apply staging `terraform apply` (services at `desired_count=0`)
- [ ] **P5-016** Configure GitHub secrets (`AWS_DEPLOY_ROLE_ARN`, `INTERNAL_API_KEY`, etc.)
- [x] **P5-017** `infra/scripts/provision-staging.sh` helper script
- [x] **P5-018** `infra/README.md` — full Terraform reference
- [x] **P5-019** `docs/aws-staging.md` — deployment guide
- [ ] **P5-020** Verify outputs — ALB DNS, ECR URLs, RDS/Redis endpoints

### 5.4 Staging CI/CD `2/5`

- [x] **P5-021** `provision-aws-staging.yml` — one-time Terraform apply workflow
- [x] **P5-022** `deploy-aws-staging.yml` — build, ECR push, ECS rolling deploy
- [ ] **P5-023** First ECR image push (frontend + backend `:latest`)
- [ ] **P5-024** ECS services scaled to 1 and reach stable state
- [ ] **P5-025** Smoke test staging — health, `/api/search`, `/api/estimate`

### 5.5 DNS & HTTPS `0/5`

- [ ] **P5-026** DNS module — Route53 hosted zone + ALB alias record
- [ ] **P5-027** ACM certificate for staging domain (e.g. `staging.anhloom.com`)
- [ ] **P5-028** ALB HTTPS listener + HTTP→HTTPS redirect
- [ ] **P5-029** Update `site_url`, `CORS_ORIGINS`, and `STAGING_SITE_URL` secret for HTTPS
- [ ] **P5-030** Verify HTTPS end-to-end (browser + API proxies)

### 5.6 Production Environment `0/6`

- [ ] **P5-031** `environments/production/` root module (reuse staging modules)
- [ ] **P5-032** Production sizing — multi-AZ RDS, larger Fargate tasks, deletion protection
- [ ] **P5-033** Production secrets + `terraform.tfvars.example`
- [ ] **P5-034** `deploy-aws-production.yml` GitHub workflow
- [ ] **P5-035** Apply production infrastructure
- [ ] **P5-036** Production smoke test + DNS (`anhloom.com` or `www`)

### 5.7 Observability & Security `0/5`

- [ ] **P5-037** CloudWatch alarms — ECS CPU/memory, ALB 5xx, RDS free storage
- [ ] **P5-038** SNS topic + email/Slack notifications for alarms
- [ ] **P5-039** Security group audit — least-privilege ingress review
- [ ] **P5-040** `terraform-plan.yml` — plan on PRs touching `infra/`
- [ ] **P5-041** Document runbook — rollback, scale, destroy (`docs/aws-ops.md`)

### Phase 5 Gate `0/8` — SDD Step 5: Validate

> Verify against [spec.md](../docs/sdd/spec.md) Infrastructure, Deliverables.
> Guide: [aws-staging.md](../docs/aws-staging.md)

- [ ] Staging full stack reachable on AWS (frontend + backend + RDS + Redis)
- [ ] HTTPS enabled on staging domain
- [ ] CI/CD deploys new images on push to `main`
- [ ] Production environment provisioned and reachable
- [ ] RDS automated backups enabled (retention ≥ 7 days prod)
- [ ] All secrets in Secrets Manager — none in Terraform state plaintext
- [ ] CloudWatch alarms firing correctly on synthetic failure
- [ ] M4 AWS gate closed — API live on AWS with Docker

---

## Weekly Plan (Phase 5)

| Week | Groups | Tasks |
|------|--------|-------|
| **W15** | 5.1, 5.2 | 14 |
| **W16** | 5.3, 5.4 | 11 |
| **W17** | 5.5, 5.7 | 10 |
| **W18** | 5.6, Gate | 14 |

---

*SDD: [README](../docs/sdd/README.md) · Prev: [PHASE-4.md](./PHASE-4.md)*
