---
type: course
course: Cloud Computing
title: Week 03 Summary — High Availability, Disaster Recovery, Auto Scaling
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 03 Summary — High Availability, Disaster Recovery, Auto Scaling

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 03]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]

---

## What We Covered

### 1. High Availability (HA) — Staying Up When Things Fail

- **Definition:** The ability of a system to remain operational and accessible even when individual components (servers, disks, network links, data centres) fail. The system recovers automatically without user-visible downtime.
- **Availability Zones (AZs):** Physically separate data centres within the same geographic region. Each AZ has independent power, cooling, networking. They're close enough for low-latency communication but separate enough that a failure in one doesn't affect the others. **This is the foundation of HA in the cloud.**
- **Regions:** Geographic areas (e.g., us-east-1, eu-west-1, ap-southeast-2) that contain multiple AZs. Choose region for: user proximity (latency), service availability (not all services exist in all regions), compliance (data residency laws), and cost (some regions are more expensive).
- **Multi-AZ deployment:** Deploy instances across at least two AZs. If one AZ fails, traffic shifts to the surviving AZ. Load balancers distribute traffic and health-check each instance.
- **Health checks:** The mechanism that makes HA work. The load balancer periodically checks if each instance is healthy (HTTP 200, TCP connection, custom endpoint). Unhealthy instances are removed from the rotation until they recover.
- **Stateful vs stateless HA:** Stateless apps (web servers, APIs) are easy to make highly available — any instance can handle any request. Stateful apps (databases) need more care — data must be replicated across AZs, failover must be coordinated. Managed services (RDS Multi-AZ, Azure SQL Geo-Replication) handle this for you.

### 2. Disaster Recovery (DR) — When an Entire Region Fails

- **DR is about surviving catastrophic events** — region-wide outages, natural disasters, large-scale infrastructure failures. HA handles component failure; DR handles region failure.
- **RTO — Recovery Time Objective:** Maximum acceptable time to restore service after a disaster. "We must be back up within 4 hours." Drives the DR strategy choice.
- **RPO — Recovery Point Objective:** Maximum acceptable data loss. "We can afford to lose up to 1 hour of data." Drives backup/replication frequency.
- **DR strategies (cost vs recovery speed tradeoff):**

| Strategy | Description | RTO | RPO | Cost |
|----------|-------------|-----|-----|------|
| **Backup & Restore** | Regularly back up data. When disaster strikes, provision new infrastructure and restore from backups. | Hours to days | Hours (last backup) | Lowest |
| **Pilot Light** | Critical services (database, core app) run at minimal capacity in secondary region. On disaster, scale up. | Minutes to hours | Low (continuous replication) | Low-Medium |
| **Warm Standby** | Full environment runs at reduced capacity in secondary region. On disaster, scale up to full capacity. | Minutes | Low | Medium-High |
| **Active-Active (Multi-site)** | Full environment runs in multiple regions simultaneously. Traffic distributed across regions. | Near zero | Near zero | Highest |

- **Choosing a strategy:** RTO and RPO drive the choice. Near-zero RTO/RPO = expensive. Hours of downtime and data loss acceptable = backup & restore is fine. Most businesses fall between pilot light and warm standby.
- **Backup best practices:** Automated, frequent, cross-region replication, tested restores (a backup you haven't tested restoring from isn't a backup — it's a hope).

### 3. Auto Scaling — Matching Capacity to Demand

- **Why auto scaling:** Fixed capacity means either wasted money (over-provisioned for peak) or poor performance (under-provisioned for spike). Auto scaling adjusts capacity to match actual demand, within defined bounds.
- **Scaling types:**
  - **Scale out / up:** Add capacity when demand increases. More instances, or larger instances.
  - **Scale in / down:** Remove capacity when demand decreases. Terminate instances, or shrink instances. Saves money.
- **Scaling policies:**
  - **Target tracking:** Keep a metric at a target value. "Keep average CPU at 50%." The simplest and most common policy. Add instances when CPU exceeds target, remove when below.
  - **Step scaling:** Add a specific number of instances when a metric crosses a threshold. "If CPU > 70%, add 2 instances. If CPU > 90%, add 5 instances." More granular control.
  - **Scheduled scaling:** Scale based on a known schedule. "Scale up to 10 instances at 9am, scale down to 2 at 6pm." Good for predictable patterns (business hours, paydays).
  - **Predictive scaling:** Uses ML to forecast demand and scale ahead of time. (AWS predictive scaling.)
- **Launch templates / configurations:** Define what instances to create — AMI, instance type, security groups, user data (bootstrap scripts), storage, tags. Auto scaling uses this template to create new instances.
- **Scaling boundaries:** Minimum, maximum, and desired capacity. Min = floor (always keep at least this many running). Max = ceiling (never exceed, prevents runaway costs). Desired = current target (auto scaling moves toward this).

### 4. Putting It All Together — A Highly Available, Auto-Scaling Web Application

```
Internet → Route 53 (DNS, latency-based routing) → CloudFront (CDN, edge caching)
       → Application Load Balancer (cross-zone, health checks)
         → Auto Scaling Group (min 2, max 20, desired varies)
           → EC2 instances distributed across 2+ Availability Zones
             → Database: RDS Multi-AZ (primary in AZ-1, standby in AZ-2)
             → Cache: ElastiCache cluster across AZs
             → Static assets: S3 + CloudFront
```

- If one AZ fails: instances in that AZ are terminated, ASG launches replacements in surviving AZ, load balancer routes traffic to healthy instances. User sees no downtime.
- If traffic spikes: ASG scales out, load balancer distributes new traffic.
- If traffic drops: ASG scales in, costs decrease.

---

## Key Takeaways

1. **HA = multiple AZs + load balancing + health checks.** The standard pattern. Understand each component's role.
2. **RTO and RPO are the DR coordinates.** Know what they mean and how they map to DR strategies.
3. **DR strategy = cost vs Recovery speed tradeoff.** Backup & restore (cheapest, slowest), pilot light, warm standby, active-active (most expensive, fastest).
4. **Auto scaling keeps you performant AND cost-efficient.** Scale out for demand, scale in when idle. Set min/max boundaries.
5. **Stateful services need special attention.** Databases, caches — replication and failover are harder than for stateless web servers. Use managed services where possible.

---

## What's Next (Week 04)

- Advanced VPC networking (peering, transit gateway, VPN)
- CDN — content delivery at the edge
- DNS routing policies in the cloud

---

## Questions to Think About

1. What's the difference between high availability and disaster recovery? Can you have one without the other?
2. A company's RTO is 4 hours and RPO is 1 hour. Which DR strategy fits? What if RTO was 5 minutes?
3. Why does auto scaling need both a minimum and maximum capacity? What happens if you only set a maximum?

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 03]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Weeks 01-03 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 04 Summary]] — next week
