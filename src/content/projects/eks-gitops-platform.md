---
{
  "title": "EKS GitOps Platform",
  "titleEs": "Plataforma GitOps en EKS",
  "tech": "Kubernetes · Argo CD · Helm",
  "description": "A container delivery platform with declarative releases, health checks and a rehearsed rollback path.",
  "descriptionEs": "Una plataforma de entrega de contenedores con releases declarativos, controles de salud y una ruta de rollback ensayable.",
  "category": "Platform Engineering",
  "featured": false,
  "pubDate": "2026-11-11",
  "image": "/projects/eks-gitops-platform.svg",
  "outcomes": [
    {
      "value": "GitOps",
      "label": "Declarative delivery",
      "labelEs": "Entrega declarativa"
    },
    {
      "value": "3",
      "label": "Probe types",
      "labelEs": "Tipos de probes"
    },
    {
      "value": "Git revert",
      "label": "Rollback strategy",
      "labelEs": "Estrategia de rollback"
    }
  ]
}
---

## The scenario

A fictional team deploys containers by hand. Release history lives in chat messages, and recovering the previous version depends on someone remembering an image tag.

## Architecture

CI builds and scans a container image, records its immutable digest and proposes a change to a separate configuration repository. Argo CD reconciles Helm manifests into an EKS namespace. Application startup, readiness and liveness checks have separate responsibilities.

## Key decisions

The application pipeline never needs cluster-admin credentials. Delivery permissions are separated from build permissions. A previous configuration can be restored through a reviewed Git revert; database migrations still require a separately designed compatibility strategy.

## Validation plan

The lab plan deploys a healthy image, a slow-starting image and an image that fails readiness. It observes rollout progress, verifies that unready pods do not receive Service traffic, and tests recovery to the previous digest.

## Trade-offs

GitOps adds a controller and repository conventions to maintain. Automatic reconciliation should not be confused with automatic recovery from every application failure. Readiness probes, resource limits and alerting remain part of the platform contract.

## Next iteration

Add a small service, publish its manifests and capture a failed rollout and recovery. Release-time improvements remain a hypothesis until repeated runs produce evidence.
