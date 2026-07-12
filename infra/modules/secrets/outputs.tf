output "app_secret_arn" {
  value = aws_secretsmanager_secret.app.arn
}

output "db_secret_arn" {
  value = aws_secretsmanager_secret.db.arn
}
