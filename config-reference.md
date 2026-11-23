# Configuration reference

## config/feature-flags.yaml

```yaml
# Feature flags for the trends pipeline. Every flag defaults to off; set it per environment.

flags:
  # Splits the summary tables by region. Waiting on the v2 schema (TRND-118) before prod.
  trends_regional_split:
    staging: true
    prod: false
  # Writes the v2 column layout alongside v1 for the duration of the schema migration.
  trends_v2_dual_write:
    staging: true
    prod: true
  # Drops queries seen fewer than 50 times from the published tables.
  trends_min_count_floor:
    staging: true
    prod: true
```

## config/service.yaml

```yaml
# Search trends ingest: service configuration.

service:
  name: trends-ingest
  # Primary reader; the replica takes over during the Sunday maintenance window.
  warehouse_host: trends-wh-01.prod.internal
  warehouse_replica: trends-wh-02.prod.internal
  warehouse_port: 9440
  # Summary tables are written here and served to the dashboard by the API below.
  publish_host: trends-publish.svc.prod.internal
  dashboard_api: https://trends-api.svc.prod.internal/v1

schedule:
  # 03:00 UTC keeps clear of the nightly compaction (NOTES.md, 2026-06-02).
  summary_cron: "0 3 * * *"
  backfill_batch_days: 7

queue:
  # Kafka topic the collectors publish raw weekly aggregates to.
  brokers:
    - kafka-trends-01.prod.internal:9092
    - kafka-trends-02.prod.internal:9092
  topic: search-trends-weekly
  consumer_group: trends-ingest-v3

limits:
  # Raised from 4 after INFRA-2291 (replica lag during backfills).
  max_parallel_queries: 6
  query_timeout_s: 120
```
