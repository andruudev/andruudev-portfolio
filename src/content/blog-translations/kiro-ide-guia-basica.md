---
title: "Getting started with Kiro IDE: from zero to your first coding agent"
description: "Beyond copying code from a chat window: exploring spec-driven development with AI agents inside your editor."
---

If you are anything like me, you spend much of your day in a code editor. If you have been using AI for programming, your workflow may look familiar: open a browser, describe a problem to ChatGPT or Claude, copy the generated code, return to the editor, paste it, discover that something broke and repeat.

I decided to try **Kiro IDE**, an agentic development environment from AWS, to explore a different way of collaborating with AI.

![A developer collaborating with an AI agent in Kiro IDE](../../assets/blog/kiro-basics.png)

## What is an agentic IDE?

Code-completion tools suggest the next word or line. An **agentic IDE** goes further: an agent can inspect a project and carry out multi-step tasks under your supervision. Examples include:

- “Investigate why this database endpoint is failing and fix it.”
- “Add unit tests for the functions in this helper file and run them.”

The workflow brings file inspection, edits and test execution into the development environment rather than requiring you to move every code block manually.

## The key idea: spec-driven development

Vague instructions make it easier for AI-generated code to drift from the intended design. A specification gives the work a clearer contract.

Instead of jumping straight into code, the workflow is:

1. **The idea:** describe what you want to build in natural language.
2. **The specification:** inspect the project and draft requirements and an architectural approach.
3. **The task list:** break the change into individual steps.
4. **Execution:** delegate tasks to the agent and review its progress.

This structure makes assumptions and scope easier to review before implementation.

## A familiar editor foundation

One concern when trying a new IDE is losing Git extensions, custom keyboard shortcuts and familiar settings. Kiro's VS Code foundation makes the transition more familiar.

> Importing existing editor settings can help you start with a familiar workspace. Review the imported configuration and extension compatibility for your setup.

## Trying a date helper

To explore the workflow, I asked Kiro to create a date-formatting utility in a Node.js project. Rather than treating the response as a code block to paste, I reviewed a plan describing the proposed files and edits.

The change involved `src/utils/dateHelper.ts`, imports in the consuming files and a set of Jest unit tests. Reviewing the plan before execution made it easier to see how the small utility would fit the existing project.

That is the interesting shift: collaborating around a plan, a diff and a test result, rather than evaluating an isolated chat response.

## Is it worth exploring?

For repetitive work such as straightforward refactors, boilerplate and test authoring, an agent integrated into the editor can be useful. The developer still needs to review scope, behavior and the resulting changes.

The next article explores **Agent Hooks**, **Model Context Protocol (MCP)** and verification workflows for connecting agents to more of the development environment.
