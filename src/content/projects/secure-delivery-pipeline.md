---
{
  "title": "Secure Delivery Pipeline",
  "titleEs": "Pipeline de entrega segura",
  "tech": "GitHub Actions · OIDC · Trivy",
  "description": "A DevSecOps release design with scoped cloud access, container checks and explicit deployment approvals.",
  "descriptionEs": "Un diseño DevSecOps con acceso cloud acotado, revisión de contenedores y aprobaciones explícitas de despliegue.",
  "category": "DevSecOps",
  "featured": false,
  "pubDate": "2026-11-11",
  "image": "/projects/secure-delivery-pipeline.svg",
  "outcomes": [
    {
      "value": "OIDC",
      "label": "Scoped cloud identity",
      "labelEs": "Identidad cloud acotada"
    },
    {
      "value": "Digest",
      "label": "Traceable artifacts",
      "labelEs": "Artefactos trazables"
    },
    {
      "value": "Approval",
      "label": "Controlled promotion",
      "labelEs": "Promoción controlada"
    }
  ]
}
---

## The scenario

A fictional team shares a permanent AWS key between build and deployment jobs. Releases use mutable image tags, so it is difficult to establish which artifact is running.

## Architecture

The proposed workflow tests the service, scans source and container configuration, builds an image and records its digest. A protected environment gates deployment. The deployment job exchanges a GitHub OIDC token for a temporary AWS session scoped to the target environment.

## Key decisions

Build and deployment jobs have different permissions. Actions should be pinned to reviewed revisions. Scan findings need a triage policy, an owner and an expiry for exceptions; a green scan alone is not proof of security.

## Validation plan

Test that a non-approved branch cannot assume the deployment role. Introduce a known failing check and confirm deployment is blocked. Record the source revision, image digest and environment for each rehearsal release.

## Trade-offs

Stricter checks can add friction if ownership is unclear. Keep the deployment path small, make exceptions visible and reserve production permissions for the job that actually needs them.

## Next iteration

Publish a sample repository and failure demonstrations. The diagram and narrative describe a fictional design rather than an audited production security posture.
