# H2 2026 platform roadmap summary

This draft roadmap focuses on reliability, search quality, and on-device AI.

## Q3 milestones

- Migrate the ranking service to a new feature store by August (Platform).
- Roll out an on-device summarization beta to 5% by September (Apps/AI).
- Reduce autocomplete p99 latency by 20% (Search Infra).

## Q4 milestones

- Make summarization generally available (Apps/AI).
- Implement multi-region failover for the query pipeline (SRE).
- Deprecate legacy index shards v3 (Search Infra).

The feature-store migration blocks summarization general availability. SRE has a staffing gap, with two open requisitions.

Source: [H2 platform roadmap](https://app.asana.com/1/137249556945/project/1215350234153850/task/1215350949678983) (draft).
