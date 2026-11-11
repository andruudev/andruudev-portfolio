---
title: "Kubernetes: three probes, three different questions"
description: "Startup, readiness and liveness: keeping a health check from amplifying an incident."
---

A running container does not guarantee that an application can receive traffic. Nor does every error mean that restarting will help. Kubernetes probes answer different questions and should be designed alongside the application.

## Startup: has initialization finished?

A startup probe gives an application time to initialize. Until it succeeds, Kubernetes does not run that container's readiness or liveness probes. This helps distinguish a legitimately slow startup from a stuck process.

## Readiness: can it receive traffic?

When readiness fails, the container keeps running, but the pod is not ready to receive traffic through Services selecting ready pods. This temporarily removes an instance without restarting it.

The endpoint should represent the ability to serve requests. Making it depend indiscriminately on every external service could cause a shared dependency to remove all replicas at once.

## Liveness: would a restart help?

A failing liveness probe can restart the container after its configured threshold. Its criterion needs to be more specific than something responding slowly. Restarting every instance will not repair an unavailable database and may add load during recovery.

## Rehearse a rollout

The GitOps case study proposes three application variants: healthy, slow to start and failing readiness. I would observe which pods receive traffic, how long the rollout takes and what happens when restoring the previous version.

Timing and thresholds should come from application tests. Copying `initialDelaySeconds` from another service without measuring startup turns an arbitrary value into an operational decision.

## Before closing the change

Check each endpoint's behavior, resource limits and the rollback procedure. Also check whether the new deployment depends on an incompatible migration. Returning to an earlier image does not automatically undo data changes.

The lab's goal is to explain failure and recovery with evidence before promising availability or uninterrupted deployments.

### Reference

- [Kubernetes: liveness, readiness and startup probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)
