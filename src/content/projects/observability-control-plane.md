---
{
  "title": "Observability Control Plane",
  "titleEs": "Plano de observabilidad",
  "tech": "OpenTelemetry · Prometheus · Grafana",
  "description": "A reliability lab that connects service metrics, structured logs and traces to an actionable incident workflow.",
  "descriptionEs": "Un laboratorio de confiabilidad que conecta métricas, logs estructurados y trazas con una respuesta operativa útil.",
  "category": "Site Reliability",
  "featured": false,
  "pubDate": "2026-11-11",
  "image": "/projects/observability-control-plane.svg",
  "outcomes": [
    {
      "value": "3 signals",
      "label": "Correlated telemetry",
      "labelEs": "Telemetría correlacionada"
    },
    {
      "value": "SLO",
      "label": "Service objective",
      "labelEs": "Objetivo de servicio"
    },
    {
      "value": "Runbooks",
      "label": "Actionable response",
      "labelEs": "Respuesta operativa"
    }
  ]
}
---

## The scenario

A fictional service exposes dashboards but no clear path from an alert to a diagnosis. Engineers inspect unrelated logs without knowing which requests were affected.

## Architecture

An instrumented service emits metrics, traces and structured logs through an OpenTelemetry Collector. The design uses Prometheus for metrics, Loki for logs and Tempo for traces, with Grafana as the investigation surface. Trace identifiers connect a slow request to its downstream spans and related logs.

## Key decisions

Alerts describe user-visible failure conditions and link to a runbook. Cardinality limits, sampling and attribute filtering are explicit design choices. Sensitive payloads are excluded from telemetry.

## Validation plan

Inject a slow dependency and an elevated error rate in the lab. Follow the alert to a dashboard, a trace and a relevant log. Confirm the alert clears after recovery and that the documented first response matches the observed failure.

## Trade-offs

More telemetry is not automatically more useful. Storage cost, label cardinality and sampling can change the investigation experience. A small set of service questions should guide instrumentation.

## Next iteration

Attach dashboards and runbooks to a working demo, then time repeated incident exercises. No reduction in real customer incident time is claimed.
