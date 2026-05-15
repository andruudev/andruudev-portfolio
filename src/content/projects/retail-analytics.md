---
title: "Retail ETL Pipeline"
tech: "Python + Azure Data Factory"
description: "Automated end-to-end ETL pipeline on Azure that processes 2M+ daily records from retail POS systems into a centralized data warehouse, enabling inventory optimization and demand forecasting."
pubDate: 2025-05-10
image: "/projects/retail-analytics.png"
---

## The Challenge

A retail chain with 20+ stores was losing revenue due to stockouts and overstock. Their POS systems generated thousands of transactions daily, but the data lived in isolated on-premise databases with no integration layer — making demand forecasting impossible.

## Solution

Built a cloud-native ETL pipeline on **Azure** to unify all data sources and enable predictive inventory management.

### Ingestion Layer
- Connected to 20+ store POS systems using **Azure Data Factory** pipelines with REST and ODBC connectors
- Implemented **incremental load patterns** using watermark timestamps — processing only new/changed records per run
- Handled schema drift and malformed records with built-in ADF data flows

### Transformation Layer
- Built Python-based transformation scripts running on **Azure Databricks** (PySpark)
- Applied business rules: category normalization, duplicate removal, currency conversion, and outlier flagging
- Generated aggregated metrics: daily/weekly sell-through rates, days-of-supply, ABC classification

### Storage & Serving Layer
- Loaded clean data into **Azure Synapse Analytics** (formerly SQL DW) partitioned by store and date
- Created **Synapse SQL views** consumed directly by Power BI for inventory and replenishment dashboards

## Results

- **2M+ records processed daily** with a pipeline runtime under 25 minutes
- **18% reduction in stockout events** in the first quarter after deployment
- **~$120K estimated savings** per year in excess inventory carrying costs
- Achieved **99.2% pipeline uptime** over 6 months

## Stack

`Python` · `PySpark` · `Azure Data Factory` · `Azure Databricks` · `Azure Synapse Analytics` · `SQL` · `Power BI`
