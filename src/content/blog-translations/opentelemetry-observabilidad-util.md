---
title: "Useful observability: start with a concrete question"
description: "Connecting metrics, logs and traces to investigate failures without turning telemetry into noise."
---

Before installing another dashboard, I would ask what we need to understand: did errors increase, which part of a request became slow, and what changed around the incident? A tool helps when instrumentation can answer those questions.

## Three complementary signals

OpenTelemetry provides mechanisms to collect, process and export signals. For a small service, I would start with request and error metrics, traces of key operations and structured logs with enough context for investigation.

These signals contain different information. Metrics reveal patterns, a trace describes an operation's path, and a log records an event with context. Their value increases when they can be connected during an investigation.

## A Collector as a control point

A Collector can receive and process telemetry before exporting it. In this portfolio's design, I would use it for filtering, batching and shared export configuration. Choosing the storage backend remains a separate decision.

It also introduces an operational component that needs configuration, limits and monitoring. A central component should not become an unobserved point of failure.

## Fewer labels, better questions

I would avoid user or request identifiers as metric labels. Besides exposing information, uncontrolled cardinality complicates operations and cost. Choose attributes based on concrete questions, with explicit rules about information removed before export.

## Test the investigation path

The proposed exercise introduces a slow dependency in a disposable environment. Starting from a degradation signal, find an affected trace and related logs. Then remove the fault and check recovery.

Document which evidence helped and what was missing. An attractive dashboard does not prove that a team can diagnose a problem.

## The next improvement

With an instrumented service and repeatable exercises, we could measure diagnosis time. Until then, the portfolio case describes architecture and a validation plan without claiming real results.

### References

- [OpenTelemetry signals](https://opentelemetry.io/docs/concepts/signals/)
- [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/)
