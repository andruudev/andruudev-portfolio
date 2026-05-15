---
title: "Sales Intelligence Dashboard"
tech: "Power BI + SQL Server"
description: "End-to-end BI solution consolidating sales data from 5 regional branches into a single Power BI dashboard, enabling real-time KPI monitoring and reducing reporting time by 65%."
pubDate: 2025-03-15
image: "/projects/sales-intelligence.png"
---

## The Challenge

A mid-sized retail company operating across 5 regional branches in Ecuador had no unified view of sales performance. Each branch maintained separate Excel workbooks, and generating a consolidated monthly report took the finance team 3–4 days of manual work.

## Solution

Designed and deployed a full Business Intelligence solution from scratch:

### Data Modeling
- Built a **star schema** in SQL Server with fact tables for `sales`, `returns`, and `targets`, and dimension tables for `products`, `customers`, `time`, and `branches`
- Wrote optimized **T-SQL stored procedures** to handle incremental data loads, reducing query time from 45s to under 3s

### ETL Pipeline
- Developed automated ETL scripts in **Python (Pandas + pyodbc)** to extract data from Excel sources, apply business transformations, and load into SQL Server
- Scheduled daily runs via **Windows Task Scheduler**, eliminating all manual imports

### Power BI Dashboard
- Created an interactive executive dashboard with drill-through reports by branch, product category, and sales rep
- Implemented **DAX measures** for YoY growth, rolling 3-month averages, and target vs actual variance
- Applied **Row-Level Security (RLS)** so each branch manager only sees their own data

## Results

- **65% reduction** in time spent generating monthly reports (from 3–4 days to ~4 hours)
- **Real-time visibility** into sales KPIs for 12 executives and 5 branch managers
- **Zero manual errors** after automating the ETL pipeline

## Stack

`Power BI` · `SQL Server` · `T-SQL` · `Python` · `DAX` · `Power Query (M)`
