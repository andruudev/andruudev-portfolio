---
{
  "title": "Serverless Event Platform",
  "titleEs": "Plataforma serverless de eventos",
  "tech": "Lambda · EventBridge · DynamoDB",
  "description": "An event-processing design built around idempotency, bounded retries and recoverable failures.",
  "descriptionEs": "Un diseño de procesamiento de eventos con idempotencia, reintentos limitados y fallos recuperables.",
  "category": "Serverless Architecture",
  "featured": false,
  "pubDate": "2026-11-11",
  "image": "/projects/serverless-event-platform.svg",
  "outcomes": [
    {
      "value": "DLQ",
      "label": "Failure isolation",
      "labelEs": "Aislamiento de fallos"
    },
    {
      "value": "Idempotency",
      "label": "Safe event handling",
      "labelEs": "Procesamiento seguro"
    },
    {
      "value": "Pay per use",
      "label": "Capacity model",
      "labelEs": "Modelo de capacidad"
    }
  ]
}
---

## The scenario

A fictional order service must accept bursts without coupling the API response to downstream processing. A consumer failure must not silently lose an order or create a duplicate effect.

## Architecture

The API validates requests and publishes domain events. EventBridge routes events to an SQS buffer consumed by Lambda. Conditional DynamoDB writes record an event identifier so repeated delivery can be detected. Dead-letter handling and a documented redrive procedure make failures visible.

## Key decisions

The design assumes messages may be delivered more than once. Idempotency covers the business side effect, not just the handler invocation. Queue retention, timeout and concurrency limits are chosen together rather than treated as independent defaults.

## Validation plan

Replay the same identifier, send an invalid payload and temporarily fail the consumer. Check duplicate suppression, dead-letter visibility, backlog recovery and alarms. Record latency and cost under a stated load profile before publishing any performance number.

## Trade-offs

Asynchronous work improves decoupling but introduces eventual consistency and more operational states. A request being accepted does not mean its downstream work is finished.

## Next iteration

Implement the handlers and replay harness, then document recovery behavior with sample traces. This fictional architecture has no live public API attached.
