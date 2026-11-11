---
title: "AWS from zero: a starting guide for developers"
description: "A first AWS lab with a small scope, private origin access and cost awareness built into the design."
---

The best way to begin with AWS is to solve a small problem and explain every resource that appears in the account. A static site is a good lab: it lets you practice storage, content delivery, permissions and deployment without starting with a Kubernetes cluster.

![AWS cloud services illustration](../../assets/blog/aws-basics.png)

## Choose a service around a need

For learning, separate four questions: where code runs, where data lives, how requests arrive and who can perform each operation. This approach is more useful than memorizing names.

EC2 provides virtual machines. S3 stores objects. RDS offers managed database engines. Lambda runs functions using a managed execution model. The application and its context determine which service fits.

## Design for cost before deploying

I would not assume that a small lab will be free. Free Tier conditions, available credits and eligibility depend on the account and current offers. Check those conditions with AWS, estimate the required resources and choose a budget appropriate for the exercise.

AWS Budgets can notify you about actual and forecasted spending. Its data is not instantaneous: a budget notification should not be confused with a switch that prevents every additional charge. A procedure for removing lab resources is also necessary.

## A static site with a private origin

The proposed architecture is **browser → CloudFront → private S3 bucket**. Use a regular S3 origin, keep public access blocked and configure Origin Access Control (OAC). The bucket policy should limit reads to the corresponding distribution.

An S3 website-hosting endpoint is a different origin type and does not support OAC. Understanding this distinction avoids mixing instructions for two architectures in one tutorial.

The lab sequence would be:

1. Create a dedicated bucket and upload a test page.
2. Create a distribution using a regular S3 origin and an OAC that signs requests.
3. Apply the AWS-documented bucket access policy for that distribution.
4. Configure HTTPS for visitors and test the page through CloudFront.
5. Verify that unauthorized direct access to the S3 object is denied.
6. Document how to update and then remove the environment.

## Evidence to keep

A diagram, reviewable configuration, a successful access test and a denied-access test. Then measure cost and note which decisions would change for a real application. This record turns a step-by-step tutorial into a learning case you can explain.

### References

- [CloudFront: restricting S3 origin access with OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
- [AWS Budgets: cost tracking and notifications](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
- [AWS Free Tier: current conditions](https://aws.amazon.com/free/)
