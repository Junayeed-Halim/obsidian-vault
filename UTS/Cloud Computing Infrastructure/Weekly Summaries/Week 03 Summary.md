---
type: course
course: Cloud Computing
title: Week 03 Summary — Cloud Infrastructure/Management Mechanisms and Architectures
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 03 Summary — Cloud Infrastructure/Management Mechanisms and Architectures

> **Source:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 03]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Lecturer:** Haimin Zhang

---

## What We Covered

### 4 Foundations of Cloud Service Provider Infrastructure

1. **Broadband Networks and Internet Architecture:**
   - All cloud must connect to a network — remote provisioning depends on it
   - ISPs interconnect: Tier-1 (backbone, international), Tier-2 (regional/national), Tier-3 (local/last mile)
   - Connectionless packet switching (datagram networks) — data divided into packets, routed independently
   - Router-based interconnectivity — routers arrange packets into messages

2. **Data Center Technology:**
   - Facilities: housing, racks, cabling, power, HVAC, fire protection
   - Computing hardware: servers, blade servers
   - Storage hardware: hard disk arrays, SAN, NAS
   - Network hardware: load balancing, LAN/SAN fabric, NAS gateways

3. **(Modern) Virtualisation Technology:**
   - Servers: physical → virtual server
   - Storage: physical → virtual storage device/disk
   - Network: physical routers/switches → logical network fabrics (VLANs)
   - Power: physical UPS → virtual UPS

4. **Web Technology and Service Technology:**
   - Web as implementation medium AND management interface
   - Service technology as keystone: web services, WSDL, XML schema, SOAP, UDDI, REST, service agents, service middleware

### 6 Cloud Infrastructure Mechanisms (Memorise Names)

| # | Mechanism | Description |
|---|-----------|-------------|
| 1 | **Logical Network Perimeter** | Isolation of a network from rest of communications network. Two perimeters — consumer side and provider side |
| 2 | **Virtual Server** | Emulates physical server. Hosts active cloud service. Accessed by cloud consumer for admin |
| 3 | **Cloud Storage Device** | Storage designed for cloud provisioning. Different consumers use different technologies to interface |
| 4 | **Cloud Usage Monitor** | Autonomous software collecting/processing IT resource usage data. Three agent types: Monitoring, Polling, Resource |
| 5 | **Resource Replication** | Creating multiple instances of same IT resource. Hypervisor replicates VMs from stored image |
| 6 | **Ready-made Environment** | Defining component of PaaS. Complete SDK. Consumer accesses ready-made environment on virtual server |

### 4 Cloud Management Mechanisms (Memorise Names)

| # | Mechanism | Description |
|---|-----------|-------------|
| 1 | **Remote Administration System** | Admins configure leased VMs, provision new services via self-service portal, manage remotely. Interacts with other management systems |
| 2 | **Resource Management System** | Consumer admin uses external portal. Provider admin uses native VIM UI. Two perspectives — external (consumer) and internal (provider) |
| 3 | **SLA Management System** | SLA monitor polls service with request messages. Records "up" time and "down" time. Tracks availability against SLA commitments |
| 4 | **Billing Management System** | Pay-per-use monitor tracks usage, collects billing data. Calculates fees, generates invoice (via portal) |

### 8 Cloud Security Mechanisms (Memorise Names)

1. Encryption — confidentiality
2. Hashing — integrity (one-way digest, tampering detection)
3. Digital Signatures — authenticity, non-repudiation
4. Public Key Infrastructure (PKI) — manages certificates and key pairs
5. Identity and Access Management (IAM) — who can access what
6. Single Sign-On (SSO) — one login, multiple systems
7. Cloud-Based Security Groups — firewall rules at cloud level
8. Hardened Virtual Server Images — pre-configured secure VM images

### 4 Fundamental Cloud Architectures

1. **Workload Distribution Architecture:** Redundant copy of service on another server. Load balancer distributes requests evenly. Redundancy + load balancing.

2. **Resource Pooling Architecture:** Multiple consumers share pooled IT resources. Resources dynamically assigned/reassigned. Multi-tenancy, improved utilisation, reduced cost.

3. **Dynamic Scalability Architecture:** Dynamic horizontal scaling — system automatically adds/removes resources based on demand. Baseline → demand triggers scaling → scaled.

4. **Service Load Balancing Architecture:** Load balancer intercepts consumer messages, forwards to virtual servers. Service implementation includes built-in load balancing logic distributing requests to neighbouring implementations.

### Hosts, Clusters, Resource Pools

- **Host:** Single physical server with hypervisor and VMs
- **Cluster:** Multiple hosts grouped — resource pooling, HA (VMs restart on other hosts if one fails), load balancing
- **Resource Pool:** Abstracted pool of CPU/memory/storage/network drawn from cluster. VMs draw from pool — abstraction from specific hardware

### vCenter Management Server Architecture — 5 Components

1. User Access Control
2. Core Services
3. Distributed Services
4. Plug-ins
5. Interfaces

### VMotion (Live Migration) — 6 Steps

1. VM experiences workload increase
2. VIM decides host is full (other VMs using it)
3. Hypervisor on busy host **suspends** VM execution
4. VIM commands **instantiation** of VM on idle physical server
5. State info (dirty memory pages, processor registers) **synchronised**
6. VIM commands hypervisor on new host to **resume** VM processing

**Key technical enabler:** State synchronisation — dirty memory pages and processor registers transferred and consistent before VM resumes on new host. Happens during brief suspension (sub-second in practice).

---

## Key Takeaways

1. **Cloud mechanisms — 6+4+8 — this is a guaranteed memory test.** Know all 18 mechanism names and what each does.
2. **4 architectures** — workload distribution, resource pooling, dynamic scalability, service load balancing.
3. **VMotion** — live migration without downtime. 6 steps. State synchronisation is the enabler.
4. **vCenter = VIM** — jointly controls all hypervisors. 5 components.
5. **Resource pooling and dynamic scalability** are the architectural foundations of cloud elasticity.

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 03]] — full notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Weeks 01-03 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 02 Summary]] — Week 2
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 04 Summary]] — Week 4
