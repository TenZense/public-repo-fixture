INTERNAL — H2 2026 Platform Roadmap (draft)

Themes: reliability, search quality, on-device AI.

Q3:
- Migrate ranking service to new feature store (owner: Platform). Target: Aug.
- Roll out on-device summarization beta to 5% (owner: Apps/AI). Target: Sep.
- Cut p99 latency on autocomplete by 20% (owner: Search Infra).

Q4:
- General availability for summarization (owner: Apps/AI).
- Multi-region failover for query pipeline (owner: SRE).
- Deprecate legacy index shards v3 (owner: Search Infra).

Dependencies: feature-store migration blocks summarization GA. Staffing gap on SRE (2 open reqs).
