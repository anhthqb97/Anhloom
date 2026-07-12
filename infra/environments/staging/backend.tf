terraform {
  required_version = ">= 1.6.0"

  backend "s3" {
    bucket         = "anhloom-terraform-state"
    key            = "company-web/staging/terraform.tfstate"
    region         = "ap-southeast-1"
    dynamodb_table = "anhloom-terraform-locks"
    encrypt        = true
  }
}
