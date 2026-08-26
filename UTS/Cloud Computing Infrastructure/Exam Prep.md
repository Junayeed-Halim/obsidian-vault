---
type: course
course: Cloud Computing
title: Exam Prep — Cloud Computing Infrastructure
status: in_progress
created: 2026-08-26
updated: 2026-08-26
tags:
  - UTS
  - cloud
  - exam-prep
  - cloud-computing
---

# Exam Prep — Cloud Computing Infrastructure

> **Exam focus:** Weeks 1-6 lectures — all content from the 6 PDFs
> **Lecturer:** Haimin Zhang (Haimin.zhang@uts.edu.au)
> **Last updated:** 2026-08-26

---

## 📋 Assignment 1 — Important

- **Released:** Week 2
- **Due:** Week 5, Friday 28 August 2026, 17:00
- **Weight:** 20%
- **Late penalty:** 20% per working day
- **Special consideration deadline:** Week 4 (with formal documentation)

---

## 🔑 High-Yield Topics — Start Here

These topics appear across multiple weeks and are very likely exam questions.

### Topic 1: NIST Definition of Cloud Computing (Week 1)

The standard definition (2011):

> "Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction."

**Five essential characteristics:**
1. **On-demand self-service:** Consumer provisions computing capabilities automatically without human interaction with provider
2. **Broad network access:** Available over network, accessed through standard mechanisms (phones, tablets, laptops, workstations)
3. **Resource pooling:** Provider's resources pooled to serve multiple consumers using multi-tenant model, dynamically assigned/reassigned
4. **Rapid elasticity:** Capabilities elastically provisioned and released to scale rapidly outward/inward commensurate with demand
5. **Measured service:** Cloud systems automatically control and optimise resource use leveraging metering (pay-per-use)

**Thomas Erl definition (secondary):**
> "Cloud computing is a specialized form of distributed computing that introduces utilization models for remotely provisioning scalable and measurable resources."

**Exam tip:** You may be asked to explain the NIST definition in your own words or identify which characteristic applies to a scenario.

### Topic 2: Cloud Service Models — IaaS, PaaS, SaaS (Week 1-2)

| Model | Consumer Manages | Provider Manages | Example |
|-------|-----------------|-----------------|---------|
| **IaaS** | OS, middleware, runtime, applications, data | Hardware, networking, storage, hypervisor | AWS EC2, Azure VMs |
| **PaaS** | Applications, data | OS, middleware, runtime, hardware, hypervisor | Azure App Service, AWS Elastic Beanstalk |
| **SaaS** | Nothing (usage/config only) | Everything | Office 365, Salesforce |

**Key distinction:**
- IaaS: "I manage the OS and above"
- PaaS: "I manage the app and data only — platform handles the rest"
- SaaS: "I just use it — everything is managed for me"

**Exam tip:** Given a scenario, identify which service model fits. Look at what the consumer manages vs what the provider manages.

### Topic 3: Virtualisation — Types, Hypervisors, VMs (Week 2)

**Virtualisation definition:** Abstraction of computer resources to maximise utilisation and reduce cost.

**Four types:**
1. **Processor virtualisation:** Share processor across multiple app instances (vCPUs)
2. **Memory virtualisation:** Aggregate memory into pool, manage on behalf of multiple apps
3. **Network virtualisation:** Virtual IP management and segmentation
4. **Storage virtualisation:** Abstraction layer for physical storage

**Virtual Machines:**
- Isolated instances of app + guest OS
- Encapsulate virtual hardware, virtual disks, metadata
- Can connect to peripherals like physical computers

**Hypervisor (VMM):**
- Manages guest OSs and their use of system resources
- Supports isolation of multiple VMs
- Provides logical CPU, memory, storage blocks, network resources to VMs

**Hypervisor functions (4):**
1. Creating and managing VMs
2. Allocating hardware resources from virtualised pool
3. Monitoring VM status
4. Moving VMs between systems (live migration)

**Types of Hypervisors — EXAM GUARANTEED:**

| | **Type 1 (Bare-metal)** | **Type 2 (Hosted)** |
|---|---|---|
| Runs on | Directly on hardware (no host OS) | On top of host OS |
| Examples | ESXi, Hyper-V, Xen, KVM | VMware Workstation, VirtualBox |
| Performance | Higher (direct hardware access) | Lower (extra host OS layer) |
| Use | Production cloud/data centre | Desktop testing, development |

### Topic 4: Storage Types — DAS, NAS, SAN (Week 2)

| Type | Full Name | Description | Access Level | Connection |
|------|-----------|-------------|-------------|------------|
| **DAS** | Direct Attached Storage | Storage directly connected to server via HBA | Block-level | Direct cable, inside server |
| **NAS** | Network-Attached Storage | File-level storage over network | File-level (NFS, SMB) | Ethernet |
| **SAN** | Storage Area Network | Block-level storage over dedicated storage network | Block-level | Fibre Channel, iSCSI, FCoE, ATAoE |

**Exam tip:** Know what each acronym stands for, the access level (block vs file), and the connection type.

### Topic 5: Storage Virtualisation (Week 2)

**Definition:** Presenting a logical view of physical storage resources as a single pool.

**Two types:**
- **Block-level:** Abstraction below OS/file-system
- **File-level:** Virtualisation at file-system level (NFS/SMB)

**Three methods:**
- **Network-based:** Appliance on network between servers and storage
- **Host-based:** Host OS/hypervisor manages it (VMFS, LVM)
- **Array-based:** Storage array itself provides virtualisation

### Topic 6: Cloud Infrastructure Mechanisms — 6 Types (Week 3)

**These are guaranteed memory/test questions.**

| # | Mechanism | Description |
|---|-----------|-------------|
| 1 | **Logical Network Perimeter** | Isolation of a network from rest of communications network (consumer and provider each have one) |
| 2 | **Virtual Server** | Emulates physical server, hosts active cloud service, accessed by consumer for admin |
| 3 | **Cloud Storage Device** | Storage designed for cloud provisioning; different consumers use different technologies to interface |
| 4 | **Cloud Usage Monitor** | Autonomous software collecting/processing IT resource usage data (Monitoring Agent, Polling Agent, Resource Agent) |
| 5 | **Resource Replication** | Creating multiple instances of same IT resource (hypervisor replicates VMs from stored image) |
| 6 | **Ready-made Environment** | Defining component of PaaS — complete SDK, consumer accesses ready-made environment on virtual server |

### Topic 7: Cloud Management Mechanisms — 4 Types (Week 3)

**Also very examinable.**

| # | Mechanism | Description |
|---|-----------|-------------|
| 1 | **Remote Administration System** | Admins configure leased VMs, provision new services via self-service portal, manage remotely |
| 2 | **Resource Management System** | Consumer admin uses external portal; provider admin uses native VIM UI (two perspectives) |
| 3 | **SLA Management System** | SLA monitor polls service, records "up"/"down" time, tracks availability against SLA commitments |
| 4 | **Billing Management System** | Pay-per-use monitor tracks usage, calculates fees, generates invoice (via portal) |

### Topic 8: Cloud Security Mechanisms — 8 Types (Week 3)

**All 8 are potentially examinable.**

1. **Encryption** — confidentiality (scrambling data)
2. **Hashing** — integrity (one-way digest, tampering detection)
3. **Digital Signatures** — authenticity, non-repudiation
4. **Public Key Infrastructure (PKI)** — manages digital certificates and key pairs
5. **Identity and Access Management (IAM)** — controls who can access what
6. **Single Sign-On (SSO)** — one authentication, multiple systems
7. **Cloud-Based Security Groups** — firewall rules at cloud level
8. **Hardened Virtual Server Images** — pre-configured VM images with security best practices

### Topic 9: 4 Fundamental Cloud Architectures (Week 3)

1. **Workload Distribution Architecture:** Redundant copy of service on another server; load balancer distributes requests evenly
2. **Resource Pooling Architecture:** Multiple consumers share pooled IT resources; dynamic assignment/reassignment; multi-tenancy
3. **Dynamic Scalability Architecture:** Dynamic horizontal scaling — automatic add/remove resources based on demand
4. **Service Load Balancing Architecture:** Load balancer + built-in LB logic in service distributes requests to neighbouring implementations

**Exam tip:** Know the difference between Workload Distribution (external load balancer + redundancy) and Service Load Balancing (service itself has built-in LB logic).

### Topic 10: vCenter / VIM Architecture (Week 3)

**vCenter Management Server — 5 components:**
1. User Access Control
2. Core Services
3. Distributed Services
4. Plug-ins
5. Interfaces

**VMotion (Live Migration) — 6 steps:**
1. VM experiences workload increase
2. VIM decides host is full
3. Hypervisor on busy host **suspends** VM
4. VIM commands **instantiation** on idle host
5. State info (dirty memory pages, processor registers) **synchronised**
6. VIM commands hypervisor on new host to **resume** VM

### Topic 11: Network Virtualisation — VXLAN, Overlay Networks (Week 4)

**Network virtualisation definition:** Creation of multiple virtual networks on same physical substrate. Each virtual network is a collection of virtual nodes/links, co-existing with but isolated from others.

**Two problems solved:**
1. **Isolation problem:** All VMs can talk by default — need tenant isolation
2. **Connectivity problem:** VMs in same DC use L2 (MAC); VMs in different DCs need L3 (IP) which must be globally routable

**Solution: Tunneling + Overlay Networks**

**VXLAN:**
- UDP-based encapsulation of L2 frames
- 24-bit VNI (Virtual Network Identifier) = 16 million segments
- Contrast with VLAN: 12-bit = 4096 limit
- Can extend L2 across L3 boundaries (across data centres)

**NVGRE:**
- Network Virtualization using GRE
- Guest VSID for segmentation

**Overlay vs Underlay:**
- **Overlay:** Virtual network on top — VMs see this (L2)
- **Underlay:** Physical network carrying encapsulated traffic — routes on outer IP headers (L3)
- Decoupled — change one without affecting other

**VMware virtual networking components:**
- **vNIC:** Virtual NIC — software-emulated, unique MAC, decoupled from hardware
- **vSwitch:** Software switch — forwards based on destination MAC, VM-VM or VM-Uplink
- **Port groups:** Logical connection points with common configuration

**ISP Hierarchy:**
- **Tier-1:** Internet backbone, international, no transit purchase (Verizon, AT&T)
- **Tier-2:** Regional/national, peer with other Tier-2, purchase from Tier-1
- **Tier-3:** Local/organisation, last mile to end users

### Topic 12: Data Center Fundamentals (Week 5)

**Data centre definition:** Facility housing critical computing resources in controlled environments under centralised management.

**DC goals:** Business continuance, increased security, storage consolidation, application/server/DC consolidation.

**DC design criteria:** Availability, scalability, security, performance, manageability.

**DC facilities:** Power capacity, cooling capacity, cabling, temperature/humidity, fire/smoke, physical security, rack space/raised floors, modularity/flexibility.

**Why virtualise? Evolution:**
1. Originally: Run multiple workloads on single host (server consolidation)
2. Later: Clone existing machine easier than build from scratch (DR, dev, test)
3. Today: Workload mobilisation — without it there is no Cloud

**Kusnetzky Group Model — 5 layers:**

| Layer | What | Standards/Examples |
|-------|------|-------------------|
| **Network** | Hardware + software network resources into software-based management entity | VXLAN, NVGRE, 802.1q (VLANs) |
| **Storage** | Physical storage components, presented consistently | SAN, Block-level, File-level (NFS, SMB) |
| **Processing** | Physical hardware from system services/OS/apps | Hypervisors — one-to-many or many-to-one |
| **Application** | Application from underlying OS/hardware | Java Framework, .NET |
| **Access** | Any device access any application | VDI, RDP, ICA |

### Topic 13: SAN — Storage Area Network (Week 5)

- Storage device accessed over storage network
- Virtualises multiple physical storage devices into logical storage volumes (**LUNs**)
- Keeps track of mappings between logical and physical storage blocks
- Provides translation layer
- Allows general-purpose server to access data on range of storage devices
- Accessed over: Fibre Channel, iSCSI, FCoE, ATAoE

### Topic 14: Virtualisation Platforms Comparison (Week 5)

| Platform | Characteristics |
|----------|----------------|
| **VMware** | Largest enterprise market share. Seamless uplift from physical. Automatic VM movement for LB/DR. Clone for Dev/Test/DR. All X86 OS supported. |
| **Hyper-V** | Growing market share. **No support for physical uplift** (cannot clone production). |
| **Amazon EC2** | "Holy Grail of enterprise" despite small market share. No automated physical uplift. |
| **Xen** | Open source, popular with Linux users in Asia. All X86 OS. |
| **Virtual Box** | Open source (Oracle). Only complete vertical offering (IaaS+PaaS+SaaS). All X86 OS. |

**Migration compatibility — key facts:**
- VMware ↔ Hyper-V: Full Motion Compatible
- EC2: requires Convert or Rebuild from most platforms
- Xen ↔ EC2: Compatible
- VMware is the most compatible migration target

### Topic 15: Data Center Design Standards — Uptime Institute Tiers (Week 6)

**Uptime Institute Tier Standard — performance-based methodology, 4 tiers:**

| Tier | Name | Redundancy | Power/Cooling Paths | Maintenance | Annual Downtime (approx.) |
|------|------|-----------|---------------------|-------------|--------------------------|
| **I** | Basic Capacity | None (N) | Single path | Complete shutdown | ~28.8 hours |
| **II** | Redundant Capacity Components | N+1 | Single path | Shutdown for power path | ~22 hours |
| **III** | Concurrently Maintainable | N+1 | Multiple (one active) | **NO shutdown** | ~1.6 hours |
| **IV** | Fault Tolerant | 2(N+1) | Multiple active | **NO shutdown** | ~0.4 hours (24 min) |

**Tier progression:**
- I → II: adds redundant components (N+1)
- II → III: adds multiple distribution paths + concurrent maintainability
- III → IV: adds multiple ACTIVE paths + 2(N+1) = fault tolerance

**TIA-942:** Similar 4-tier structure but more IT cable and network oriented. Developed by Telecommunications Industry Association.

**Other standards:** Energy Star (EPA, energy efficiency), Data Center Star Audit (Germany, energy efficiency audit).

### Topic 16: Data Center Management Areas (Week 6)

| Area | Description |
|------|-------------|
| **Capacity Management** | Planning/managing capacity of IT resources — forecasting, utilisation monitoring, scaling |
| **Service Delivery** | How IT services delivered — SLAs, provisioning, service catalogue, availability/performance targets |
| **Resource Management** | Managing IT resources — inventory, allocation, utilisation, optimisation, lifecycle |
| **Asset Management** | Tracking/managing IT assets throughout lifecycle — procurement, deployment, maintenance, retirement, disposal |

### Topic 17: Data Center Hardening (Week 6)

Steps to improve DC resilience, security, efficiency:
1. Implement proper tier design
2. Add redundancy where needed
3. Implement monitoring (power, temp, utilisation, security)
4. Implement automation (provisioning, failover, alerts, scaling)
5. Optimise energy efficiency (improve PUE)
6. Harden security (physical access, surveillance, network segmentation, encryption, IAM)
7. Plan for DR (backup strategies, replication, tested recovery)
8. Manage lifecycle (hardware refresh, software updates, license management)
9. Document everything (as-built, diagrams, procedures, SLAs)
10. Test regularly (failover, backups, DR, alerting)

---

## 📝 Definitions to Memorise (Full List)

### Week 1
- **Cloud computing (NIST):** On-demand, ubiquitous network access to shared pool of configurable resources, rapidly provisioned/released with minimal management effort
- **Cloud service:** Any IT resource made remotely accessible via a cloud
- **Cloud provider:** Company/third-party offering cloud computing services
- **Cloud consumer:** Organisation/person with formal contract with cloud provider
- **Cloud service owner:** Person/organisation legally owning a cloud service
- **Cloud resource administrator:** Person/organisation responsible for administering cloud-based IT resources
- **Cloud carrier:** Provides connectivity between cloud consumers and cloud providers

### Week 2
- **Virtualisation:** Abstraction of computer resources to maximise utilisation and reduce cost
- **Hypervisor (VMM):** Manages guest OSs and their use of system resources; supports isolation of multiple VMs
- **Type 1 Hypervisor:** Bare-metal, runs directly on hardware (ESXi, Hyper-V, Xen, KVM)
- **Type 2 Hypervisor:** Hosted, runs on top of host OS (VMware Workstation, VirtualBox)
- **DAS:** Direct Attached Storage — storage directly connected to server via HBA
- **NAS:** Network-Attached Storage — file-level storage over network
- **SAN:** Storage Area Network — block-level storage over dedicated network
- **Storage virtualisation:** Presenting logical view of physical storage as single pool

### Week 3
- **Logical Network Perimeter:** Isolation of a network from rest of communications network
- **Cloud Usage Monitor:** Autonomous software collecting/processing IT resource usage data
- **Resource Replication:** Creating multiple instances of same IT resource
- **Ready-made Environment:** Defining component of PaaS, complete SDK
- **SLA Management:** Tracking service availability against SLA commitments via polling
- **VMotion:** Live migration of running VM between physical hosts without downtime

### Week 4
- **Network virtualisation:** Creating multiple virtual networks on same physical substrate, isolated from each other
- **vNIC:** Virtual NIC — software-emulated, unique MAC, decoupled from hardware
- **vSwitch:** Software switch forwarding frames based on destination MAC
- **Overlay network:** Virtual layer of network topologies on top of physical network infrastructure
- **VXLAN:** Virtual eXtensible LAN — UDP-based L2 encapsulation, 24-bit VNI (16M segments)
- **NaaS:** Network-as-a-Service — network capabilities as on-demand cloud service

### Week 5
- **Data Center:** Facility housing critical computing resources in controlled environments under centralised management
- **PUE (Power Usage Effectiveness):** Total facility power / IT equipment power — measure of energy efficiency
- **Kusnetzky Group Model:** 5-layer virtualisation taxonomy (Network, Storage, Processing, Application, Access)
- **SAN (Storage Area Network):** Storage device accessed over storage network; virtualises physical disks into LUNs
- **Block-level virtualisation:** Abstraction of logical storage below OS/file-system
- **File-level virtualisation:** Virtualisation at file-system level (NFS, SMB)
- **Processing virtualisation:** Abstracts physical hardware from system services/OS/apps
- **Application virtualisation:** Allows software to run on variety of OS/hardware platforms
- **Access virtualisation:** Any device access any application (VDI, RDP, ICA)

### Week 6
- **Uptime Institute Tier Standard:** Performance-based methodology for DC infrastructure, 4 tiers based on redundancy/fault tolerance
- **TIA-942:** DC facility/infrastructure standard, more IT cable and network oriented
- **Concurrently Maintainable:** Can perform maintenance without shutting down (Tier III)
- **Fault Tolerant:** Can handle unplanned events with no critical load impact (Tier IV)
- **Capacity Management:** Planning/managing capacity of IT resources
- **Service Delivery:** How IT services delivered to consumers
- **Resource Management:** Managing IT resources — inventory, allocation, utilisation, lifecycle
- **Asset Management:** Tracking/managing IT assets throughout lifecycle

---

## 📊 Comparison Tables — Exam Ready

### Service Models — Responsibility Matrix

| Layer | IaaS | PaaS | SaaS |
|-------|------|------|------|
| Applications | You | You | Provider |
| Data | You | You | Provider |
| Runtime | You | Provider | Provider |
| Middleware | You | Provider | Provider |
| OS | You | Provider | Provider |
| Virtualisation | Provider | Provider | Provider |
| Servers/Storage/Network | Provider | Provider | Provider |

### Hypervisor Types

| Feature | Type 1 (Bare-metal) | Type 2 (Hosted) |
|---------|-------------------|-----------------|
| Runs on | Hardware directly | Host OS |
| Examples | ESXi, Hyper-V, Xen, KVM | VMware Workstation, VirtualBox |
| Performance | Higher | Lower |
| Use case | Production cloud | Desktop/testing |

### Storage Types

| Feature | DAS | NAS | SAN |
|---------|-----|-----|-----|
| Access level | Block | File (NFS/SMB) | Block |
| Connection | Direct cable | Ethernet | Fibre Channel, iSCSI, FCoE |
| Network | No network | Standard network | Dedicated storage network |

### Uptime Institute Tiers

| Tier | Name | Redundancy | Paths | Maintenance | Downtime/yr |
|------|------|-----------|-------|-------------|-------------|
| I | Basic Capacity | N | Single | Shutdown | ~28.8 hrs |
| II | Redundant Capacity | N+1 | Single | Shutdown (power path) | ~22 hrs |
| III | Concurrently Maintainable | N+1 | Multiple (1 active) | No shutdown | ~1.6 hrs |
| IV | Fault Tolerant | 2(N+1) | Multiple active | No shutdown | ~0.4 hrs |

### 3 DC Architecture Approaches

| Approach | Entry Cost | Scalability | Notes |
|----------|-----------|-------------|-------|
| Separate (traditional) | Moderate | Easy (add each independently) | Less integrated |
| DC in a Box (EcoPod) | High | Finite | Immediate use, mobile |
| Converged (Nutanix) | Low | High (mesh) | Used by Google |

### Virtualisation Platforms — Migration

| From ↓ / To → | VMware | Hyper-V | EC2 | Xen |
|---------------|--------|---------|-----|-----|
| VMware | — | Full Motion | Convert | Convert |
| Hyper-V | Full Motion | — | Convert | Compatible |
| EC2 | Convert | Rebuild | — | Compatible |
| Xen | Rebuild | Rebuild | Compatible | — |

### ISP Hierarchy

| Tier | Coverage | Relationship |
|------|----------|--------------|
| Tier-1 | International backbone | No transit purchase |
| Tier-2 | Regional/national | Peer with Tier-2, buy from Tier-1 |
| Tier-3 | Local/last mile | Connects end users |

---

## 🎯 Exam Strategy

### Types of Questions to Expect

1. **Define X** — Know all definitions in the list above. Practice writing them out in your own words.
2. **Compare X and Y** — Service models, hypervisor types, storage types, DC tiers, virtualisation platforms. Use the comparison tables.
3. **Scenario questions** — "A company wants X. Which service model / architecture / tier / storage type should they use? Explain why."
4. **Describe the process** — VMotion (6 steps), cloud mechanisms, how VXLAN works, how network virtualisation solves isolation/connectivity.
5. **List/names** — 6 infrastructure mechanisms, 4 management mechanisms, 8 security mechanisms, 5 Kusnetzky layers, 5 vCenter components. These are pure memory tests.
6. **Explain the difference** — Workload distribution vs service load balancing, overlay vs underlay, block vs file level storage virtualisation, Type 1 vs Type 2.

### Study Priority Order

1. **NIST definition + 5 characteristics** — Week 1, foundational
2. **Service models (IaaS/PaaS/SaaS)** — Week 1-2, used throughout
3. **Type 1 vs Type 2 hypervisor** — Week 2, guaranteed question
4. **DAS/NAS/SAN** — Week 2, storage is a major topic
5. **Cloud mechanisms — 6+4+8** — Week 3, pure memory, very examinable
6. **4 cloud architectures** — Week 3, understand each
7. **VMotion 6 steps** — Week 3, process question
8. **Network virtualisation — VXLAN/overlay/ISP tiers** — Week 4, newer topic
9. **Kusnetzky 5 layers** — Week 5, taxonomy question
10. **Virtualisation platforms comparison** — Week 5, comparison question
11. **Uptime Institute Tiers** — Week 6, guaranteed table question
12. **DC management areas** — Week 6, names and descriptions

### Active Recall Method

1. Read a topic in the Sources notes
2. Close the note
3. Write down everything you remember
4. Open the note and check what you missed
5. Repeat until you can recall the key points without looking

Use the Quiz Prep questions for self-testing. Cover the `<details>` answers and try to answer first.

---

## Related

- [[Week 01-03]] — Weeks 1-3 full notes
- [[UTS/Cloud Computing Infrastructure/Lecture - Notes/Week 02]] — Week 2 full notes
- [[UTS/Cloud Computing Infrastructure/Lecture - Notes/Week 03]] — Week 3 full notes
- [[Week 04]] — Week 4 full notes
- [[Week 05]] — Week 5 full notes
- [[Week 06]] — Week 6 full notes
