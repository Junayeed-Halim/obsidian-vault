---
type: course
course: Cloud Computing
title: Week 06 Summary — Management of Data Center
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 06 Summary — Management of Data Center

> **Source:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 06]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Lecturer:** Haimin Zhang

---

## What We Covered

### Background of Data Center — Key Benefits

| Benefit | Description |
|---------|-------------|
| **Cost and energy saving** | Consolidated infrastructure = less power, less cooling, less physical space, fewer servers to manage = lower TCO |
| **Reduced server downtime** | Redundancy, clustering, live migration, managed failover — designed to minimise unplanned outages |
| **Increased productivity** | Centralised management, automation, faster provisioning, self-service portals — IT staff spends time on value, not manual tasks |
| **Improved security** | Physical security (access control, surveillance), network security (firewalls, segmentation), data security (encryption) — all managed centrally |
| **Compliance** | Meeting regulatory requirements (data protection laws, industry standards, audit requirements) — DC design and operations support compliance |
| **Etc.** | Other benefits as applicable |

These benefits are interconnected — cost saving from consolidation; reduced downtime from redundancy; productivity from automation. They all feed the business case for proper data center investment.

### Data Center Design Standards

| Standard | Origin | Focus |
|----------|--------|-------|
| **Uptime Institute Tier Standard** | Uptime Institute (USA) | Performance-based methodology — 4 tiers based on redundancy/fault tolerance |
| **TIA-942 Standard** | Telecommunications Industry Association (TIA, USA) | DC facility/infrastructure standards — more IT cable and network oriented, origins from Uptime's four-tiered approach |
| **Energy Star (USA)** | EPA (USA) | Energy efficiency certification for DC equipment and facilities |
| **Data Center Star Audit (Germany)** | German regulatory/standards body | DC energy efficiency audit and certification |

### Uptime Institute Tier Standard — MUST KNOW

**Performance-based methodology** — 4 tiers based on increasing redundancy, fault tolerance, expected availability.

| Tier | Name | Description |
|------|------|-------------|
| **Tier I** | Basic Capacity | Provides dedicated site infrastructure to support IT systems. Basic infrastructure, no redundancy. Single path for power and cooling. |
| **Tier II** | Redundant Capacity Components | Provides maintenance and safety opportunities. Adds redundant capacity components — N+1 redundancy for key components. Still single path for power/cooling distribution. |
| **Tier III** | Concurrently Maintainable | **Requires NO shut down for maintenance.** Multiple power/cooling distribution paths but only one active at a time. Includes redundant components (N+1). |
| **Tier IV** | Fault Tolerant | **Prevents interruptions.** Multiple active power/cooling distribution paths. Includes redundant components (2(N+1); i.e., 2 UPS). Handles any single worst-case unplanned event with no critical load impact. |

### Tier Requirements Summary — Exam Table

| Tier | Redundancy | Power/Cooling Paths | Components | Maintenance | Fault Tolerance |
|------|-----------|---------------------|------------|-------------|-----------------|
| **Tier I** | None (N) | Single path | No redundant components | Requires shutdown | No — any failure causes outage |
| **Tier II** | N+1 | Single path | Redundant components (N+1) | Some maintenance possible | Basic — component failure handled, path failure still causes outage |
| **Tier III** | N+1 | Multiple (one active) | Redundant components (N+1) | NO shutdown — concurrent maintainability | Handles single path failure — maintain one path while other carries load |
| **Tier IV** | 2(N+1) | Multiple active paths | Redundant components (2(N+1); 2 UPS) | NO shutdown | Fault tolerant — handles worst unplanned event with no critical load impact |

### Tier Downtime Figures

| Tier | Annual Downtime |
|------|-----------------|
| Tier I | ~28.8 hours |
| Tier II | ~22 hours |
| Tier III | ~1.6 hours |
| Tier IV | ~0.4 hours (24 minutes) |

**Exam tip:** These figures illustrate practical availability difference. Tier I = nearly 3.5 days downtime/year. Tier IV = 24 minutes. Massive difference.

### TIA-942 Standards

- Developed by **Telecommunications Industry Association (TIA)**
- More **IT cable and network oriented** than Uptime Institute's focus
- Origins from Uptime Institute's four-tiered approach — uses similar tier structure adapted for TIA's scope
- Construction cost varies from tier to tier — higher tiers cost significantly more

| TIA-942 Tier | Description |
|--------------|-------------|
| **Tier I — Basic server room** | Susceptible to disruptions. Single path for power/cooling. No redundant components (N). May/may not have raised floors, UPS, generator. ~28.8 hours downtime. Complete shutdown for maintenance. |
| **Tier II — Redundant components** | Less susceptible. Single path. Includes redundant components (N+1). Includes raised floors, UPS, generator. ~22 hours downtime. Shutdown for power path maintenance. |
| **Tier III — Concurrently maintainable** | Planned activities run without disruptions; unplanned still cause disruptions. Multiple power/cooling distribution paths but only one active. Includes N+1. ~1.6 hours downtime. Raised floors, sufficient capacity/distribution to carry load on one path while maintaining other. |
| **Tier IV — Fault tolerance** | Planned activity does not disrupt; can handle one worst unplanned event with no critical load impact. Multiple active power/cooling paths. Includes 2(N+1) (2 UPS). ~0.4 hours (24 min) downtime. |

### Uptime vs TIA-942 — Key Differences

| Aspect | Uptime Institute | TIA-942 |
|--------|-----------------|---------|
| Focus | Performance-based methodology — tier rating based on demonstrated capability | Facility and infrastructure standards — cable, network, physical |
| Orientation | Infrastructure capability and availability | IT cable and network oriented |
| Origin | Independent institute | Telecommunications industry association |
| Cost | Not primary focus | Construction cost varies from tier to tier |

### Key Management Areas

| Area | Description |
|------|-------------|
| **Capacity Management** | Planning/managing capacity of IT resources — servers, storage, network, power, cooling. Forecasting, utilisation monitoring, scaling planning. Ensuring enough capacity for current and projected demand. |
| **Service Delivery** | How IT services delivered to consumers — SLAs, service provisioning, service catalogue, availability guarantees, performance targets. Operational side of meeting commitments. |
| **Resource Management** | Managing IT resources — inventory, allocation, utilisation, optimisation, lifecycle management. Ensuring resources used efficiently and effectively. |
| **Asset Management** | Tracking/managing IT assets throughout lifecycle — procurement, deployment, maintenance, upgrade, retirement, disposal. Physical assets (servers, disks, network gear) and software assets (licenses, subscriptions). |

**Additional implied management areas:**
- Rack space management (plan from start, finite resource, organised layout)
- Power management (monitoring, capacity planning, redundancy, efficiency — PUE)
- Cooling management (adequate capacity, hot/cold aisle design, monitoring temp/humidity)
- Security management (physical access, network security, data security, compliance)
- Change management (new equipment, config changes, maintenance windows)
- Disaster recovery management (DR planning, backup strategies, replication, failover testing)

### Data Center Management Challenges

1. **Capacity planning:** Predicting future demand. Over-provision = waste. Under-provision = can't meet demand.
2. **Energy efficiency:** DCs consume enormous power. PUE = total facility power / IT equipment power. Target close to 1.0. Cooling is major component.
3. **Physical space:** Racks, floor space, weight limits, cabling. Urban DCs have space constraints.
4. **Redundancy vs cost:** Higher tiers cost exponentially more. Justifying Tier IV vs III vs II depends on business requirements.
5. **Lifecycle management:** Hardware depreciates, software licenses expire, technology obsolete. Managing refresh cycles, migration, disposal.
6. **Security and compliance:** Physical and logical security, regulatory requirements, audit trails.
7. **Skills gap:** Virtualisation, cloud, automation require new skills. Legacy staff may not have skills for modern DC management.
8. **Integration:** Converged infrastructure, hybrid cloud — managing integrated systems from multiple vendors, APIs, automation.
9. **Monitoring and alerting:** Knowing when something is wrong before it causes outage. Power, temperature, utilisation, performance, security events.
10. **Cost control:** TCO — power, cooling, space, hardware, software licenses, staff, maintenance. Managing cost while meeting requirements.

### Hardening Steps for Data Center Management

1. **Implement proper tier design:** Assess business requirements, design to appropriate tier (I-IV). Don't over-engineer (waste) or under-engineer (unacceptable downtime).
2. **Add redundancy where needed:** N+1 for components, multiple paths for Tier III+, 2(N+1) for Tier IV. Redundancy where cost of downtime justifies it.
3. **Implement monitoring:** Power, temperature, utilisation, security. Know state of DC at all times.
4. **Implement automation:** Automated provisioning, automated failover, automated alerts, automated scaling. Reduce manual intervention = reduce human error.
5. **Optimise energy efficiency:** Improve PUE — efficient cooling design, hot/cold aisle containment, variable speed fans, efficient UPS, right-sizing.
6. **Harden security:** Physical access controls, surveillance, biometric access, network segmentation, firewalls, encryption, IAM, compliance frameworks.
7. **Plan for DR:** Backup strategies, replication, DR site, tested recovery procedures. DR only as good as testing.
8. **Manage lifecycle:** Proactive hardware refresh, software updates, license management, depreciation planning.
9. **Document everything:** As-built docs, network diagrams, rack layouts, cable schedules, procedures, SLAs, contacts. If not documented, not managed.
10. **Test regularly:** Test failover, test backups (restore, not just backup), test DR procedures, test alerting. Untested systems give false confidence.

---

## Key Takeaways

1. **Uptime Institute Tiers — critical exam table.** Know all 4 tiers: names, redundancy, power/cooling paths, maintenance requirements, approximate downtime.
2. **Tier I → II:** adds redundant components (N+1). Tier II → III: adds multiple paths + concurrent maintainability (NO shutdown). Tier III → IV: adds multiple ACTIVE paths + 2(N+1) = fault tolerance.
3. **TIA-942** = similar 4-tier structure but more IT cable/network oriented. Both have same tier names but different focus.
4. **Key Management Areas — 4 names:** Capacity Management, Service Delivery, Resource Management, Asset Management.
5. **Data centre benefits** — memorise the 5+ benefits listed in the lecture.

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 06]] — full notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Week 06 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 05 Summary]] — Week 5 (what DC IS)
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 03 Summary]] — Week 3 (cloud management mechanisms — parallel concepts)
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
