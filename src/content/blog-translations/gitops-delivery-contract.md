---
title: "GitOps: define the delivery contract before choosing the tool"
description: "What to establish about versions, review and recovery before adding a controller to your cluster."
---

GitOps is easier to understand when we start with the delivery problem. We want to know which version should be running, who approved the change and how to return to a known configuration.

## The repository as a technical conversation

In the EKS lab design, declarative configuration has a repository separate from application code. An image change becomes a reviewable diff. That separation is a design choice rather than a universal requirement: a small team may organize things differently.

A review should explain what changes and how it will be checked. Valid YAML can still describe an application that cannot start or a memory limit that is too small.

## Build and delivery boundaries

The build pipeline produces an identifiable artifact. Configuration records which artifact should be deployed. The controller reconciles that state with the cluster. Separating these responsibilities helps define each component's permissions.

Operational decisions remain. Data migrations, dependency order and diagnosing degraded applications require additional procedures.

## A rollback you can explain

Returning to an earlier configuration is only part of recovery. Before promising automatic rollback, I would test a failing image and document what happens to traffic and data.

The portfolio presents that sequence as a lab plan. The next iteration should provide manifests and a reproducible run. Its value will come from showing the change, failure and recovery, rather than a screenshot of a green dashboard.
