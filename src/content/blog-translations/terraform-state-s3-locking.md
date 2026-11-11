---
title: "Terraform as a team: remote state, locking and reviewable changes"
description: "Designing an S3 backend, separating environments and keeping concurrent operations from competing for the same state."
---

A `terraform apply` that works on a laptop is a good start. Teamwork raises other questions: where does state live, who can change it, and how do we prevent simultaneous operations? The backend belongs in the delivery architecture rather than being an afterthought.

## State needs its own design

The S3 backend documentation supports native lock files through `use_lockfile`. DynamoDB-based locking is marked as deprecated in that documentation. Check the Terraform version and your team's requirements before copying an older tutorial.

This configuration is illustrative. The bucket must already exist and the names need to match your environment:

```hcl
terraform {
  backend "s3" {
    bucket       = "example-terraform-state"
    key          = "development/network/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
```

The backend does not create the bucket or enable versioning. Those decisions belong to the initial setup. Access permissions must cover both the state and its lock file.

## Separate environments, separate blast radius

The landing-zone lab proposes separate accounts, roles and state files. This allows a development change to be reviewed without implicitly granting production access. Repository structure depends on the team; the important thing is being able to explain which environment each plan affects.

## A useful concurrency test

In a disposable environment, start an operation that holds the lock and attempt a second operation against the same state. Then check recovery when the first operation finishes. This documents behavior; having the option in a file is not enough.

Keep a reviewable plan and check that a second plan after apply, without external changes, proposes no unexpected modifications. Avoid disabling locking as an automatic response to an error.

## What to document

State location, the authorized role, recovery steps and the person responsible for approving changes. State files can contain sensitive information and need explicit access and retention controls.

### References

- [S3 backend: options, permissions and native locking](https://developer.hashicorp.com/terraform/language/backend/s3)
- [Terraform state locking](https://developer.hashicorp.com/terraform/language/state/locking)
