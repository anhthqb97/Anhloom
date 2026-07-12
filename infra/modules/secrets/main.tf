resource "aws_secretsmanager_secret" "app" {
  name = "${var.project_name}/${var.environment}/app"

  tags = var.tags
}

resource "aws_secretsmanager_secret_version" "app" {
  secret_id = aws_secretsmanager_secret.app.id

  secret_string = jsonencode({
    INTERNAL_API_KEY    = var.internal_api_key
    OPENAI_API_KEY      = var.openai_api_key
    ANTHROPIC_API_KEY   = var.anthropic_api_key
    SANITY_API_READ_TOKEN = var.sanity_read_token
    DB_PASSWORD         = var.db_password
  })
}

resource "aws_secretsmanager_secret" "db" {
  name = "${var.project_name}/${var.environment}/database"

  tags = var.tags
}

resource "aws_secretsmanager_secret_version" "db" {
  secret_id = aws_secretsmanager_secret.db.id

  secret_string = jsonencode({
    username = "postgres"
    password = var.db_password
    dbname   = "company_web"
  })
}
