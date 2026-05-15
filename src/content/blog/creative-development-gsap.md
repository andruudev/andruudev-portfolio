---
title: "Why I Ditched Excel Reports for Power BI Dashboards"
date: "2025-10-21"
tag: "Data"
description: "After years of maintaining sprawling Excel reports, here's why migrating to Power BI was the most impactful decision I made — and what the migration actually looks like in practice."
---

# Why I Ditched Excel Reports for Power BI Dashboards

After spending two years maintaining a 47-tab Excel workbook that powered the monthly financial reports for a mid-sized company, I finally convinced leadership to let me migrate everything to Power BI. This is what I learned.

## The Breaking Point

The workbook was a monster. It had `VLOOKUP` chains 5 levels deep, circular references that had been there "since forever", and a refresh process that took 20 minutes and required you to update 3 different source files in the right order. If you got the order wrong, the numbers were just wrong — and sometimes you wouldn't notice until the meeting.

The month I showed up to the executive review with February data when we were already in March was the month I started the migration.

## Why Power BI

A few things made Power BI the right call for my use case:

**1. A real query layer (Power Query / M)**  
Instead of `VLOOKUP` spaghetti, I could write readable, documented transformation steps in Power Query. When something breaks, you can actually debug it.

**2. DAX is actually powerful**  
Yes, DAX has a learning curve. But once you understand evaluation context, you can write calculations that would be impossible in Excel — like rolling 90-day averages that respect dimension filters, or YoY comparisons that automatically handle calendar quirks.

**3. Row-Level Security**  
This alone justified the migration. I could give each branch manager a link to the same report, and they'd only see their data. In Excel, that meant maintaining 5 separate copies of the same workbook.

## The Migration Process

I didn't try to recreate the Excel report in Power BI. That's the trap. Instead, I:

1. **Started from the questions, not the data** — What does the CFO actually need to know? What decisions does this report inform?
2. **Built a proper data model** — Star schema, fact tables, dimension tables. No flat denormalized tables.
3. **Rewrote transformations in Power Query** — Every step documented, no magic numbers hardcoded.
4. **Ran both in parallel for 2 months** — This is non-negotiable. You need to be able to show that the numbers match before anyone trusts the new system.

## What I'd Do Differently

If I were starting over, I'd push for a proper SQL backend earlier. Power BI's in-memory model is great for small-to-medium datasets, but once you're above ~10M rows, you start hitting performance walls. For anything serious, put your data in SQL Server or Azure Synapse and let Power BI be the presentation layer — not the transformation engine.

## The Result

The report that used to take 20 minutes to refresh now auto-refreshes 3 times a day via the Power BI service. The CFO has it bookmarked. No one has asked me to email a PDF since.

That's the win.
