resource "aws_elasticache_subnet_group" "this" {
  name       = "${var.project_name}-${var.environment}-redis"
  subnet_ids = var.subnet_ids

  tags = var.tags
}

resource "aws_elasticache_cluster" "this" {
  cluster_id           = "${var.project_name}-${var.environment}-redis"
  engine               = "redis"
  engine_version       = "7.1"
  node_type            = var.node_type
  num_cache_nodes      = 1
  port                 = 6379
  subnet_group_name    = aws_elasticache_subnet_group.this.name
  security_group_ids   = [var.security_group_id]
  apply_immediately  = true

  tags = var.tags
}
