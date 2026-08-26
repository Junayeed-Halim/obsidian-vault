---
type: lecture-notes
course: Cloud Computing
title: Week 03 — Advanced IaaS, High Availability, Disaster Recovery
status: to_process
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-03
---

# Week 03 — Advanced IaaS, High Availability, Disaster Recovery

> **Source:** [[Week3_CloudLecture-3.pdf]]
> **Status:** TODO — Process this PDF in Open Notebook, then fill in your extracted notes below.

---

## TODO — Process in Open Notebook First

1. Open Open Notebook
2. Import `[[Week3_CloudLecture-3.pdf]]`
3. Ask: "What are the key concepts, definitions, and exam-relevant points about HA, DR, and advanced IaaS?"
4. Copy output below and rewrite in your own words

---

## Key Concepts

### High Availability (HA)

- **Definition:** System remains operational even when components fail.
- **Availability zones (AZs)** — physically separate data centres within a region. Deploy across AZs for HA.
- **Regions** — geographic areas containing multiple AZs. Choose region for latency, compliance, service availability.
- **Load balancing across AZs** — distribute traffic to healthy instances.
- **Health checks** — detect failed instances and route around them.

### Disaster Recovery (DR)

- **RTO (Recovery Time Objective):** Maximum acceptable downtime. How fast must you be back up?
- **RPO (Recovery Point Objective):** Maximum acceptable data loss. How much data can you afford to lose?
- **Backup strategies** — snapshots, cross-region replication, automated backups.
- **DR patterns:**
  - **Backup and restore** — lowest cost, highest RTO/RPO. Restore from backups when disaster hits.
  - **Pilot light** — critical services running minimal in secondary region. Faster recovery.
  - **Warm standby** — scaled-down version of full environment running in secondary. Faster still.
  - **Multi-site active-active** — full environment in multiple regions. Best RTO/RPO, highest cost.

### Auto Scaling

- **Scale out/in** — add/remove instances based on demand.
- **Scaling policies** — target tracking (keep CPU at 50%), step scaling (add 2 when CPU > 70%), scheduled (scale up at 9am).
- **Launch templates / configurations** — define what instances to create.

---

## Definitions to Memorise

| Term | Definition |
|------|------------|
| Availability Zone | |
| Region | |
| RTO | |
| RPO | |
| HA | |
| DR | |
| Multi-region | |
| Multi-AZ | |

---

## RTO/RPO Tradeoff

| DR Strategy | RTO | RPO | Cost |
|-------------|-----|-----|------|
| Backup & Restore | High (hours-days) | High (last backup) | Low |
| Pilot Light | Medium | Low | Medium |
| Warm Standby | Low | Low | Medium-High |
| Active-Active | Near-zero | Near-zero | High |

---

## Connections to Other Weeks

- Week 5: *(serverless is inherently highly available — no servers to fail)*
- Week 6: *(DR costs money — cost optimization vs DR preparedness)*

---

## Related

- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam preparation hub
