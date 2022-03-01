terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
#   backend "s3" {
#     bucket = "s3-bucket-name"
#     region = "ap-northeast-1"
#     key = "terraform.tfstate"
#   }
}



provider "aws" {
  profile = "default"
  region  = var.region
}
