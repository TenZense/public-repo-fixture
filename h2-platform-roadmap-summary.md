# H2 2026 Platform Roadmap — Summary

Themes: reliability, search quality, on-device AI.

## Q3
- Migrate ranking service to new feature store (Platform) — target Aug
- Roll out on-device summarization beta to 5% (Apps/AI) — target Sep
- Cut p99 autocomplete latency by 20% (Search Infra)

## Q4
- General availability of summarization (Apps/AI)
- Multi-region failover for query pipeline (SRE)
- Deprecate legacy index shards v3 (Search Infra)

## Dependencies and risks
- Feature-store migration blocks summarization GA.
- SRE staffing gap (2 open reqs).
