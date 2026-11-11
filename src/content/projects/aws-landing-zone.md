---
{
  "title": "AWS Landing Zone",
  "titleEs": "Landing Zone en AWS",
  "tech": "Terraform · AWS · GitHub Actions",
  "description": "A repeatable AWS foundation with isolated environments, scoped identity and infrastructure changes reviewed as code.",
  "descriptionEs": "Una base reproducible en AWS con entornos aislados, identidad acotada y cambios de infraestructura revisados como código.",
  "category": "Infrastructure as Code",
  "featured": true,
  "pubDate": "2026-11-11",
  "image": "/projects/aws-landing-zone.svg",
  "outcomes": [
    {
      "value": "3 AZ",
      "label": "Network design",
      "labelEs": "Diseño de red"
    },
    {
      "value": "OIDC",
      "label": "Temporary credentials",
      "labelEs": "Credenciales temporales"
    },
    {
      "value": "IaC",
      "label": "Repeatable environments",
      "labelEs": "Entornos reproducibles"
    }
  ]
}
---

## The scenario

A fictional product team needs separate development and production environments. Manual console changes make environments drift and ownership difficult to trace.

## Architecture

The proposed foundation separates environment accounts, places workloads in private subnets across three Availability Zones, and exposes only an application entry point. Terraform modules describe networking, IAM and shared logging. An S3 backend stores versioned state with native lock files.

## Key decisions

GitHub Actions assumes a narrowly scoped AWS role through OIDC. The trust policy restricts the repository and deployment environment. Plan review happens before an approved apply. Each environment has its own state and deployment role to limit blast radius.

## Validation plan

The validation plan checks module formatting and validation, unintended public subnets, state-lock contention and a second plan after apply. A deliberate drift exercise tests whether a changed security-group rule appears in the next plan.

## Trade-offs

A managed NAT gateway per Availability Zone improves failure isolation but increases baseline cost. A small lab can use a cheaper topology; that compromise must be explicit before calling the design production-ready.

## Next iteration

Build the modules, attach a reproducible test run and measure provision time and monthly cost. No customer deployment or measured business result is claimed in this design study.
