---
type: lecture-notes
course: Cloud Computing
title: Week 06 — Management of Data Center
status: processed
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-06
  - exam-prep
---

# Week 06 — Management of Data Center

> **Source:** [[Week6_CloudLecture-2.pdf]] (extracted via pdftotext -raw)
> **Lecturer:** Haimin Zhang
> **Status:** Processed from PDF — exam-ready notes

---

## Contents (from slide)

1. Background of Data Center
   - Key benefits
2. Data Center Design Standards
   - Uptime Institute's Tier Standard
   - TIA-942 Standard
3. Key Management Areas
4. Data Center Management Challenges
5. Hardening Steps for Data Center Management

---

## 1. Background of Data Center

### What is a Data Center? (Recap from Week 5)

A facility that houses critical computing resources in controlled environments under centralized management. Computing resources include: mainframes, web and application servers, file and print servers, messaging servers, application software and OS, storage subsystems, and network infrastructure.

### Key Benefits of Data Center

| Benefit | Description |
|---------|-------------|
| **Cost and energy saving** | Consolidated infrastructure = less power, less cooling, less physical space, fewer servers to manage = lower total cost of ownership |
| **Reduced server downtime** | Redundancy, clustering, live migration, managed failover — designed to minimise unplanned outages |
| **Increased productivity** | Centralised management, automation, faster provisioning, self-service portals — IT staff spends time on value, not manual tasks |
| **Improved security** | Physical security (access control, surveillance), network security (firewalls, segmentation), data security (encryption) — all managed centrally |
| **Compliance** | Meeting regulatory requirements (data protection laws, industry standards, audit requirements) — data centre design and operations support compliance |
| **Etc.** | Other benefits as applicable to the organisation |

**Exam note:** These benefits are interconnected — cost saving comes from consolidation; reduced downtime comes from redundancy; productivity comes from automation. They all feed into the business case for investing in a proper data center.

---

## 2. Data Center Design Standards

### Overview of Standards

| Standard | Origin | Focus |
|----------|--------|-------|
| **Uptime Institute's Tier Standard** | Uptime Institute (USA) | Performance-based methodology for data centre infrastructure — tiers based on redundancy and fault tolerance |
| **TIA-942 Standards** | Telecommunications Industry Association (TIA, USA) | Data centre facility and infrastructure standards — more IT cable and network oriented, origins from Uptime Institute's four-tiered approach |
| **Energy Star (USA)** | EPA (USA) | Energy efficiency certification for data centre equipment and facilities |
| **Data Center Star Audit (Germany)** | German regulatory/standards body | Data centre energy efficiency audit and certification |

---

## 3. Uptime Institute's Tier Standard

### Overview

- Develops a **performance-based methodology** for evaluating data center infrastructure
- Four tiers based on increasing levels of redundancy, fault tolerance, and expected availability
- Each tier defines what infrastructure capabilities are required

### Tier Definitions

| Tier | Name | Description |
|------|------|-------------|
| **Tier I** | Basic Capacity | Provides dedicated site infrastructure to support IT systems. Basic infrastructure with no redundancy. Single path for power and cooling. |
| **Tier II** | Redundant Capacity Components | Provides maintenance and safety opportunities. Adds redundant capacity components — N+1 redundancy for key components. Single path for power and cooling distribution still. |
| **Tier III** | Concurrently Maintainable | **Requires NO shut down for maintenance.** Multiple power and cooling distribution paths but only one path active at a time. Includes redundant components (N+1). |
| **Tier IV** | Fault Tolerant | **Prevents interruptions.** Multiple active power and cooling distribution paths. Includes redundant components (2(N+1); i.e., 2 UPS). Designed to handle any single worst-case unplanned event with no critical load impact. |

### Tier Requirements Summary

| Tier | Redundancy | Power/Cooling Paths | Components | Maintenance | Fault Tolerance |
|------|-----------|---------------------|------------|-------------|-----------------|
| **Tier I** | None (N) | Single path | No redundant components | Requires shutdown | No — any failure causes outage |
| **Tier II** | N+1 | Single path | Redundant components (N+1) | Some maintenance possible | Basic — component failure handled, path failure still causes outage |
| **Tier III** | N+1 | Multiple paths (one active) | Redundant components (N+1) | NO shutdown — concurrent maintainability | Handles single path failure — can maintain one path while other carries load |
| **Tier IV** | 2(N+1) | Multiple active paths | Redundant components (2(N+1); 2 UPS) | NO shutdown | Fault tolerant — handles worst-case unplanned event with no critical load impact |

### Key Distinctions — Exam Important

- **Tier I vs Tier II:** Tier II adds redundant components (N+1). Tier I has no redundancy.
- **Tier II vs Tier III:** Tier III adds multiple distribution paths and concurrent maintainability. Tier II still has single path.
- **Tier III vs Tier IV:** Tier IV adds multiple ACTIVE paths and 2(N+1) redundancy. Tier III has multiple paths but only one active. Tier IV is fault tolerant; Tier III is concurrently maintainable but not fault tolerant.

### Tier Availability / Downtime

(Associated data often tested)

| Tier | Annual Downtime (approx.) | Maintenance Requirement |
|------|--------------------------|------------------------|
| Tier I | ~28.8 hours | Complete shut down for maintenance |
| Tier II | ~22 hours | Shut down for power path maintenance |
| Tier III | ~1.6 hours | Planned activities run without disruptions; unplanned still cause disruptions |
| Tier IV | ~0.4 hours (24 minutes) | Planned activity does not disrupt; can handle one worst unplanned event |

**Exam tip:** Know the approximate downtime figures — they illustrate the practical difference between tiers. Tier I = nearly 3.5 days of downtime per year. Tier IV = 24 minutes. That's a massive difference in availability.

---

## 4. TIA-942 Standards

### Overview

- Developed by the **Telecommunications Industry Association (TIA)**
- More of **IT cable and network oriented** than Uptime Institute's focus
- Origins from Uptime Institute's four-tiered approach — uses similar tier structure but adapted for TIA's scope
- Construction cost varies from tier to tier — higher tiers cost significantly more

### TIA-942 Tier Standards

| Tier | Description |
|------|-------------|
| **Tier I — Basic server room** | Susceptible to disruptions from planned and unplanned activities. Single path for power and cooling distribution. No redundant components (N). May or may not have raised floors, UPS, or generator. Annual downtime of 28.8 hours. Complete shut down for maintenance. |
| **Tier II — Redundant components** | Less susceptible to disruptions from planned and unplanned activities. Single path for power and cooling distribution. Includes redundant components (N+1). Includes raised floors, UPS, and generator. Annual downtime of 22 hours. Shut down for power path maintenance. |
| **Tier III — Concurrently maintainable** | Planned activities run without disruptions but unplanned cause disruptions. Multiple power and cooling distribution paths but with only one path active. Includes redundant components (N+1). Annual downtime of 1.6 hours. Includes raised floors and sufficient capacity and distribution to carry load on one path while performing maintenance on the other. |
| **Tier IV — Fault tolerance** | Planned activity does not disrupt and can handle one worst unplanned event with no critical load impact. Multiple active power and cooling distribution paths. Includes redundant components (2(N+1); i.e., 2 UPS). Annual downtime of 0.4 hours (24 minutes). |

### Uptime vs TIA-942 — Key Differences

| Aspect | Uptime Institute | TIA-942 |
|--------|-----------------|---------|
| Focus | Performance-based methodology — tier rating based on demonstrated capability | Facility and infrastructure standards — cable, network, physical infrastructure |
| Orientation | Infrastructure capability and availability | IT cable and network oriented |
| Origin | Independent institute | Telecommunications industry association |
| Cost variance | Not the primary focus | Construction cost varies from tier to tier |

**Exam note:** Know that both have 4 tiers with similar names (Tier I-IV) but different focus. Uptime = performance methodology. TIA-942 = facility/cable/network standards. Both are commonly referenced in data center design discussions.

---

## 5. Key Management Areas

From the lecture slide:

| Area | Description |
|------|-------------|
| **Capacity Management** | Planning and managing the capacity of IT resources — servers, storage, network, power, cooling. Ensuring enough capacity for current and projected demand. Includes forecasting, utilisation monitoring, and scaling planning. |
| **Service Delivery** | How IT services are delivered to consumers — service level agreements (SLAs), service provisioning, service catalogue, availability guarantees, performance targets. The operational side of meeting commitments to users. |
| **Resource Management** | Managing the IT resources themselves — inventory, allocation, utilisation, optimisation, lifecycle management. Ensuring resources are used efficiently and effectively. |
| **Asset Management** | Tracking and managing IT assets throughout their lifecycle — procurement, deployment, maintenance, upgrade, retirement, disposal. Includes physical assets (servers, disks, network gear) and software assets (licenses, subscriptions). |

**Additional management areas implied by the syllabus/lecture context:**

- **Rack space management:** Plan from start and manage throughout. Physical space in racks is a finite resource. Organised rack layout, cable management, power distribution per rack.
- **Power management:** Monitoring power usage, planning power capacity, redundancy (UPS, generators), efficiency (PUE — Power Usage Effectiveness).
- **Cooling management:** Ensuring adequate cooling capacity, hot/cold aisle design, monitoring temperature and humidity, efficiency.
- **Security management:** Physical access, network security, data security, compliance auditing.
- **Change management:** Managing changes to the data center — new equipment, configuration changes, maintenance windows. Minimising disruption from changes.
- **Disaster recovery management:** DR planning, backup strategies, failover testing, recovery procedures.

---

## 6. Data Center Management Challenges

Common challenges in managing a data centre (these are typical topics that exams ask about):

1. **Capacity planning:** Predicting future demand accurately. Over-provision = waste. Under-provision = inability to meet demand.
2. **Energy efficiency:** Data centres consume enormous amounts of power. PUE (Power Usage Effectiveness) = total facility power / IT equipment power. Target PUE is close to 1.0. Cooling is a major component.
3. **Physical space:** Racks, floor space, weight limits, cabling. Urban data centres have space constraints.
4. **Redundancy vs cost:** Higher tiers cost exponentially more. Justifying Tier IV vs Tier III vs Tier II depends on business requirements. How much availability is enough?
5. **Lifecycle management:** Hardware depreciates, software licenses expire, technology becomes obsolete. Managing refresh cycles, migration, disposal.
6. **Security and compliance:** Physical and logical security, meeting regulatory requirements, audit trails.
7. **Skills gap:** Virtualisation, cloud, automation require new skills. Legacy staff may not have the skills for modern data centre management.
8. **Integration:** Converged infrastructure, hybrid cloud — managing integrated systems from multiple vendors, APIs, automation.
9. **Monitoring and alerting:** Knowing when something is wrong before it causes an outage. Monitoring power, temperature, utilisation, performance, security events.
10. **Cost control:** TCO (Total Cost of Ownership) — power, cooling, space, hardware, software licenses, staff, maintenance. Managing the cost while meeting requirements.

---

## 7. Hardening Steps for Data Center Management

"Hardening" refers to improving the data centre's resilience, security, and efficiency. Typical hardening steps (from the context of the lecture):

1. **Implement proper tier design:** Assess business requirements and design to the appropriate tier (I-IV). Don't over-engineer (waste) or under-engineer (unacceptable downtime).
2. **Add redundancy where needed:** N+1 for components, multiple paths for Tier III+, 2(N+1) for Tier IV. Redundancy where the cost of downtime justifies it.
3. **Implement monitoring:** Power monitoring, temperature monitoring, utilisation monitoring, security monitoring. Know the state of the data centre at all times.
4. **Implement automation:** Automated provisioning, automated failover, automated alerts, automated scaling. Reduce manual intervention = reduce human error.
5. **Optimise energy efficiency:** Improve PUE — efficient cooling design, hot/cold aisle containment, variable speed fans, efficient UPS, right-sizing.
6. **Harden security:** Physical access controls, surveillance, biometric access, network segmentation, firewalls, encryption, IAM, compliance frameworks.
7. **Plan for disaster recovery:** Backup strategies, replication, DR site, tested recovery procedures. DR is only as good as the testing.
8. **Manage lifecycle:** Proactive hardware refresh, software updates, license management, depreciation planning.
9. **Document everything:** As-built documentation, network diagrams, rack layouts, cable schedules, procedures, SLAs, contacts. If it's not documented, it's not managed.
10. **Test regularly:** Test failover, test backups (restore, not just backup), test DR procedures, test alerting. Untested systems give false confidence.

---

## Exam-Ready Summary — Week 6

### Key Benefits of Data Centre (Memorise)

1. Cost and energy saving
2. Reduced server downtime
3. Increased productivity
4. Improved security
5. Compliance
6. Etc.

### Data Center Design Standards

| Standard | Origin | Focus |
|----------|--------|-------|
| Uptime Institute Tier Standard | Uptime Institute | Performance-based methodology, 4 tiers |
| TIA-942 | Telecommunications Industry Association (TIA) | IT cable and network oriented, 4 tiers |
| Energy Star | EPA (USA) | Energy efficiency certification |
| Data Center Star Audit | Germany | Energy efficiency audit |

### Uptime Institute Tiers — The Critical Table

| Tier | Name | Redundancy | Power/Cooling Paths | Maintenance | Annual Downtime (approx.) |
|------|------|-----------|---------------------|-------------|--------------------------|
| Tier I | Basic Capacity | None (N) | Single path | Complete shutdown | ~28.8 hours |
| Tier II | Redundant Capacity Components | N+1 | Single path | Shutdown for power path | ~22 hours |
| Tier III | Concurrently Maintainable | N+1 | Multiple (one active) | NO shutdown | ~1.6 hours |
| Tier IV | Fault Tolerant | 2(N+1) | Multiple active | NO shutdown | ~0.4 hours (24 min) |

**Key distinctions:**
- Tier I → II: adds redundant components (N+1)
- Tier II → III: adds multiple distribution paths + concurrent maintainability (NO shutdown)
- Tier III → IV: adds multiple ACTIVE paths + 2(N+1) redundancy = fault tolerance

### TIA-942 Tiers

Same 4-tier structure (Tier I-IV) with similar descriptions, but TIA-942 is more IT cable and network oriented. TIA-942 focuses on facility infrastructure standards; Uptime Institute focuses on performance-based methodology.

### Key Management Areas (Memorise Names)

1. Capacity Management
2. Service Delivery
3. Resource Management
4. Asset Management

(Plus implied areas: rack space, power, cooling, security, change management, DR management)

### Hardening Steps (Conceptual)

-capacity planning, redundancy implementation, monitoring, automation, energy efficiency optimisation, security hardening, DR planning, lifecycle management, documentation, regular testing

---

## Connections to Previous Weeks

- **Week 5** covered what a data centre IS — physical facilities, architecture, virtualisation layers. Week 6 covers how to MANAGE it.
- **Week 3** covered cloud management mechanisms (SLA Management, Billing Management, Resource Management, Remote Administration) — Week 6's management areas are the data centre analogue of those cloud mechanisms.
- **Week 4** covered network virtualisation — Week 6's management includes managing the virtualised network infrastructure.

---

## Related

- [[Week 05]] — Week 5 Data Centre fundamentals and virtualisation
- [[UTS/Cloud Computing Infrastructure/Notes/Week 03]] — Week 3 cloud management mechanisms (parallel concepts)
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Week 06 Quiz Prep]] — practice questions
