---
type: course
course: Cloud Computing
title: Week 01-03 Summary — Introduction, Virtualisation, Cloud Infrastructure
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Weeks 01-03 Summary — Cloud Foundations, Virtualisation, Infrastructure Mechanisms

> **Source:** [[Week 01-03]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Lecturer:** Haimin Zhang

---

## What We Covered (3 Lectures in 1 PDF)

### Lecture 1: Introduction to Cloud Computing

- **NIST definition of cloud computing** (2011) — the standard definition: on-demand, ubiquitous network access to a shared pool of configurable resources, rapidly provisioned and released with minimal management effort. Five essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service.
- **Thomas Erl definition** — cloud computing as a specialised form of distributed computing with utilisation models for remotely provisioning scalable and measurable resources.
- **Cloud terminology:** Cloud service, cloud provider, cloud consumer, cloud service owner, cloud resource administrator, cloud carrier.
- **Three service models:**
  - **IaaS:** Consumer manages OS+ (runtime, middleware, apps, data). Provider manages hardware, networking, storage, hypervisor. Example: AWS EC2.
  - **PaaS:** Consumer manages apps+data. Provider manages OS, middleware, runtime, hardware. Consumer is intentionally shielded from platform details. Example: Azure App Service.
  - **SaaS:** Consumer manages nothing (just usage). Provider manages everything. Example: Office 365.
- **VMware physical data centre topology:** Physical servers → hypervisors (ESXi) → VMs. All hypervisors jointly controlled by VIM (vCenter). SAN storage shared across servers. Network connects everything.

### Lecture 2: Virtualisation Technologies

- **Virtualisation = abstraction of computer resources.** Goal: maximise utilisation, reduce cost.
- **Four types:**
  1. **Processor virtualisation:** Share a processor across multiple application instances (vCPUs scheduled on physical cores).
  2. **Memory virtualisation:** Aggregate memory into a pool, manage on behalf of multiple apps (virtual RAM → physical frames mapped by hypervisor).
  3. **Network virtualisation:** Virtual IP management and segmentation (vNIC, vSwitch, VLANs).
  4. **Storage virtualisation:** Abstraction layer for physical storage (VM sees virtual disks, physical details hidden).
- **Virtual Machines:** Isolated instances of app + guest OS running like a separate computer. Encapsulate virtual hardware, virtual disks, metadata. Connect to peripherals like physical computers.
- **Hypervisor (VMM):** Manages guest OSs and their use of system resources (CPU, memory, storage). Supports isolation of multiple VMs. Provides logical CPU, memory, storage blocks, network resources to each VM.
  - **Functions:** Create/manage VMs, allocate hardware resources from virtualised pool, monitor VM status, move VMs between systems (live migration).
- **Types of Hypervisors — EXAM CRITICAL:**
  | | **Type 1 (Bare-metal)** | **Type 2 (Hosted)** |
  |---|---|---|
  | Runs on | Directly on hardware | On top of host OS |
  | Examples | ESXi, Hyper-V, Xen, KVM | VMware Workstation, VirtualBox |
  | Performance | Higher (direct hardware) | Lower (extra layer) |
  | Use | Production cloud/DC | Desktop/testing |
- **Typical cloud architecture:** VMs + hypervisors + physical servers + networks + SAN storage + VIM (vCenter). VIM jointly controls all hypervisors.
- **Storage hardware — three types:**
  - **DAS (Direct Attached Storage):** Directly connected to server via HBA. No network.
  - **NAS (Network-Attached Storage):** File-level storage over network (NFS, SMB).
  - **SAN (Storage Area Network):** Block-level storage over dedicated network (Fibre Channel, iSCSI, FCoE).
- **Storage virtualisation:** "Presenting a logical view of physical storage as a single pool." Two types: block-level (below OS/file-system) and file-level (at file-system level). Three methods: network-based, host-based, array-based.
- **VMware storage architecture:** VMs see virtual SCSI disks connected to vHBA. Disks provisioned from Datastores — abstraction hides physical storage type.
- **VMware network architecture:** VMs communicate via vNIC (virtual NIC, unique MAC, decoupled from hardware). Port groups aggregate ports under common config.

### Lecture 3: Cloud Infrastructure/Management Mechanisms and Architectures

- **4 foundations of cloud service provider infrastructure:**
  1. Broadband Networks and Internet Architecture (ISPs, packet switching, routing)
  2. Data Center Technology (facilities, computing, storage, network hardware)
  3. (Modern) Virtualisation Technology (servers, storage, network, power all virtualised)
  4. Web Technology and Service Technology (web as medium/interface, services as keystone — WSDL, XML, SOAP, UDDI, REST, service agents)
- **6 Cloud Infrastructure Mechanisms:**
  1. **Logical Network Perimeter:** Isolation of a network from rest of communications network. Two perimeters — consumer side and provider side.
  2. **Virtual Server:** Emulates a physical server. Hosts active cloud service. Accessed by consumer for admin.
  3. **Cloud Storage Device:** Storage designed for cloud provisioning. Different consumers use different technologies to interface with virtualised storage.
  4. **Cloud Usage Monitor:** Autonomous software collecting/processing IT resource usage data. Three agent types: Monitoring Agent, Polling Agent, Resource Agent.
  5. **Resource Replication:** Creating multiple instances of same IT resource. Hypervisor replicates VMs from stored virtual server image.
  6. **Ready-made Environment:** Defining component of PaaS. Complete SDK. Consumer accesses ready-made environment on virtual server.
- **4 Cloud Management Mechanisms:**
  1. **Remote Administration System:** Admins configure leased VMs, provision new services via self-service portal, manage remotely. Interacts with other management systems.
  2. **Resource Management System:** Consumer admin uses external portal. Provider admin uses native VIM UI. Two perspectives — external (consumer) and internal (provider).
  3. **SLA Management System:** SLA monitor polls cloud service with polling request messages. Records "up" time and "down" time in log database. Tracks availability against SLA commitments.
  4. **Billing Management System:** Pay-per-use monitor tracks usage, collects billing data, forwards to billing repository. System calculates consolidated fees, generates invoice for consumer (via portal).
- **8 Cloud Security Mechanisms:**
  1. Encryption (confidentiality)
  2. Hashing (integrity — one-way digest, tampering detection)
  3. Digital Signatures (authenticity, non-repudiation)
  4. Public Key Infrastructure (PKI) (certifies and manages keys)
  5. Identity and Access Management (IAM) (who can access what)
  6. Single Sign-On (SSO) (one login, multiple systems)
  7. Cloud-Based Security Groups (firewall rules at cloud level)
  8. Hardened Virtual Server Images (pre-configured secure VM images)
- **4 Fundamental Cloud Architectures:**
  1. **Workload Distribution Architecture:** Redundant copy of service on another server. Load balancer distributes requests evenly across servers. Redundancy + load balancing.
  2. **Resource Pooling Architecture:** Multiple consumers share pooled IT resources. Resources dynamically assigned/reassigned. Multi-tenancy, improved utilisation, reduced cost.
  3. **Dynamic Scalability Architecture:** Dynamic horizontal scaling — system automatically adds/removes resources based on demand. (a) baseline, (b) demand triggers scaling, (c) scaled.
  4. **Service Load Balancing Architecture:** Load balancer intercepts consumer messages, forwards to virtual servers for horizontal scaling. Service implementation includes built-in load balancing logic distributing requests to neighbouring implementations.
- **Hosts, Clusters, Resource Pools:**
  - **Host:** Single physical server with hypervisor and VMs.
  - **Cluster:** Multiple hosts grouped — resource pooling, HA (VMs restart on other hosts), load balancing across hosts.
  - **Resource Pool:** Abstracted pool of CPU/memory/storage/network drawn from cluster. VMs draw from pool, not specific hardware — abstraction is key.
- **vCenter Management Architecture — 5 components:**
  1. User Access Control
  2. Core Services
  3. Distributed Services
  4. Plug-ins
  5. Interfaces
- **VMotion (Live Migration) — 6 steps:**
  1. VM experiences workload increase
  2. VIM decides host is full (other VMs using it)
  3. Hypervisor on busy host **suspends** VM execution
  4. VIM commands **instantiation** of VM on idle physical server
  5. State info (dirty memory pages, processor registers) **synchronised**
  6. VIM commands hypervisor on new host to **resume** VM processing

---

## Key Takeaways

1. **NIST definition is THE definition.** Know the 5 characteristics: on-demand, broad access, pooling, elasticity, measured service.
2. **Service models are a spectrum of control vs convenience.** IaaS = most control (you manage OS+), SaaS = least (you manage nothing). PaaS is in the middle.
3. **Type 1 vs Type 2 hypervisor is a guaranteed exam question.** Type 1 = bare-metal, production (ESXi). Type 2 = hosted on OS, testing (VirtualBox).
4. **DAS vs NAS vs SAN** — know what each stands for and the difference (direct vs file-level network vs block-level network).
5. **Cloud mechanisms — 6 infrastructure, 4 management, 8 security.** Know the names and what each does. This is from cloudpatterns.org — very examinable.
6. **4 fundamental architectures** — workload distribution, resource pooling, dynamic scalability, service load balancing. Know what each does.
7. **VMotion is live migration** — 6 steps: workload increase → VIM decision → suspend → instantiate → synchronise → resume. The state synchronisation is the technical enabler.
8. **vCenter = VIM** — jointly controls all hypervisors. 5 components: access control, core services, distributed services, plug-ins, interfaces.

---

## What's Next (Week 04)

- Network virtualisation — VXLAN, NVGRE, overlay networks
- Data centre network design — ToR switches, VM problems (isolation, connectivity)
- Network-as-a-Service (NaaS)
- ISP hierarchy (Tier-1, Tier-2, Tier-3)

---

## Questions to Think About

1. Why is the NIST definition's "measured service" characteristic essential for cloud economics?
2. Why would you choose Type 1 over Type 2 hypervisor for a production cloud? When is Type 2 acceptable?
3. How does storage virtualisation enable live migration (VMotion)? What would break if storage wasn't virtualised?
4. Why are there 6 infrastructure mechanisms, 4 management mechanisms, and 8 security mechanisms? What does this categorisation tell us about cloud architecture?
5. What's the difference between workload distribution and service load balancing architectures? Why have both?

---

## Related

- [[Week 01-03]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Weeks 01-03 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 04 Summary]] — next week
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
