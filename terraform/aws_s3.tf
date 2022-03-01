resource "aws_s3_bucket" "snapshot_bucket" {
    bucket = "${local.service_name}-snapshot-bucket"
    region = var.region
    force_destroy = true

    versioning {
        enabled = true
    }

server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
  tags = {
    Name = "${local.service_name}_snapshot_bucket"
  }
}
resource "aws_s3_bucket_public_access_block" "public_access_block" {
    bucket = aws_s3_bucket.snapshot_bucket.id
    # block_public_acls = false
    # ignore_public_acls = false
    # block_public_policy = true
    restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "bucket_ownership_controls" {
  bucket = aws_s3_bucket.snapshot_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}



