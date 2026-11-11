---
title: "GitHub Actions and AWS: designing deployments with OIDC"
description: "Temporary identity, scoped trust policies and a clear boundary between building and deploying."
---

A pipeline does not need to become a store of permanent credentials to deploy to AWS. OIDC offers a trust relationship between GitHub Actions and an IAM role. The important questions become which workflow can assume that role and what it can do afterwards.

## Two policies, two responsibilities

The trust policy determines who can assume the role. The permissions policy determines what the resulting session can do. Restricting trust cannot compensate for excessive permissions, and minimal permissions are not enough if any repository can obtain them.

AWS requires conditions on the `sub` when trusting GitHub's OIDC provider. In the lab design, I would limit the repository and deployment environment and validate the expected audience. The exact values depend on whether the workflow uses branches, pull requests or GitHub environments.

## Building and deploying have different needs

A job that runs tests and builds an image needs different permissions from a job that updates a service. Separating them reduces how much code receives access to the target environment. An image digest precisely identifies the artifact being promoted.

The `id-token: write` permission lets a workflow request an OIDC token; it does not itself grant AWS permissions. Those depend on the role's trust and permission policies.

## Test denied access too

A useful test verifies that an unauthorized branch cannot assume the role. Another confirms that a build job has no deployment permissions. Both teach us more about actual boundaries than a single successful run.

For production, I would also document environment approvals, workflow change review and the strategy for pinning actions to reviewed revisions. Temporary identity reduces reliance on permanent secrets but does not remove the need to review code and permissions.

## Evidence to attach

One allowed run, one denied run and the relationship between commit, image and environment. This portfolio presents the pipeline as a design; execution records can be added when an executable lab exists.

### References

- [AWS IAM: creating a role for OIDC federation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html)
- [AWS Actions: configuring credentials and OIDC](https://github.com/aws-actions/configure-aws-credentials)
