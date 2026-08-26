---
type: course
course: Cloud Computing
title: Quiz Prep - Weeks 01-03
status: ready
created: 2026-08-26
tags:
  - UTS
  - cloud
  - quiz
  - cloud-computing
  - quiz-prep
---

# Quiz Prep — Weeks 01-03

> **Based on actual lecture content:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Covers:** Lecture 1 (introduction, service models), Lecture 2 (virtualisation, hypervisors, storage), Lecture 3 (cloud mechanisms, architectures, VMotion)

---

## Key Definitions — Memorise These

| Term | Definition |
|------|------------|
| **Cloud computing (NIST)** | A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort or service provider interaction |
| **IaaS** | Cloud model where consumer manages OS and above; provider manages hardware, networking, storage, hypervisor |
| **PaaS** | Cloud model where consumer manages applications and data; provider manages OS, middleware, runtime, hardware |
| **SaaS** | Cloud model where consumer manages nothing (usage/configuration only); provider manages everything |
| **Virtualisation** | Abstraction of computer resources to maximise utilisation and reduce cost |
| **Hypervisor (VMM)** | Software that manages guest OSs and their use of system resources; supports isolation of multiple VMs |
| **Type 1 Hypervisor** | Bare-metal hypervisor that runs directly on hardware (no host OS). Examples: ESXi, Hyper-V, Xen, KVM |
| **Type 2 Hypervisor** | Hosted hypervisor that runs on top of a host operating system. Examples: VMware Workstation, VirtualBox |
| **DAS** | Direct Attached Storage — storage directly connected to a server via HBA, no network |
| **NAS** | Network-Attached Storage — file-level storage accessed over network (NFS, SMB) |
| **SAN** | Storage Area Network — block-level storage accessed over dedicated storage network (Fibre Channel, iSCSI) |
| **Storage virtualisation** | Presenting a logical view of physical storage resources as a single pool |
| **VMotion** | Live migration of a running VM between physical hosts without downtime |
| **VIM** | Virtual Infrastructure Manager — jointly controls all hypervisors across physical servers (e.g., vCenter) |

---

## Practice Questions

### Q1 — NIST Definition

**List the five essential characteristics of cloud computing according to the NIST definition.**

<details>
<summary>Answer</summary>

1. **On-demand self-service:** Consumer provisions computing capabilities automatically without human interaction with the provider
2. **Broad network access:** Capabilities available over the network and accessed through standard mechanisms (phones, tablets, laptops, workstations)
3. **Resource pooling:** Provider's computing resources pooled to serve multiple consumers using a multi-tenant model, dynamically assigned and reassigned
4. **Rapid elasticity:** Capabilities can be elastically provisioned and released to scale rapidly outward and inward commensurate with demand
5. **Measured service:** Cloud systems automatically control and optimise resource use by leveraging a metering capability (pay-per-use)
</details>

---

### Q2 — Service Model Identification

**A startup wants to deploy a web application. They want to write the application code and manage the data, but they don't want to worry about the operating system, runtime, or the underlying servers. Which cloud service model should they choose?**

A) IaaS
B) PaaS
C) SaaS
D) On-premises

<details>
<summary>Answer</summary>

**B) PaaS**

- **IaaS:** They would need to manage the OS and runtime — not what they want
- **PaaS:** They manage applications and data; the platform handles OS, middleware, runtime, and hardware. They're intentionally shielded from implementation details.
- **SaaS:** They'd manage nothing — just use the software. But they're writing their own application, so this doesn't fit.
- **On-premises:** They'd manage everything — worst option for what they want.
</details>

---

### Q3 — Hypervisor Types

**Explain the difference between Type 1 and Type 2 hypervisors. Give one example of each and explain when you would use each.**

<details>
<summary>Answer</summary>

**Type 1 (Bare-metal):**
- Runs directly on hardware — no host OS
- Examples: VMware ESXi, Microsoft Hyper-V (as role), Xen, KVM
- Higher performance — direct hardware access, minimal overhead
- Used in production data centres and cloud environments where performance and reliability matter

**Type 2 (Hosted):**
- Runs on top of a host operating system
- Examples: VMware Workstation, Oracle VirtualBox
- Lower performance — extra layer (host OS) between hypervisor and hardware
- Used for desktop testing, development, personal use — when convenience matters more than performance

**Key difference:** Type 1 = production; Type 2 = testing/desktop. Type 1 has no host OS; Type 2 runs on a host OS.
</details>

---

### Q4 — Storage Types

**A company needs shared storage that multiple servers can access simultaneously. They need file-level access (they want to read/write files, not raw blocks) over the existing Ethernet network. Which storage type should they use?**

A) DAS
B) NAS
C) SAN
D) VDI

<details>
<summary>Answer</summary>

**B) NAS (Network-Attached Storage)**

- **NAS:** File-level storage accessed over network using standard protocols like NFS or SMB. Multiple servers can access simultaneously. Uses existing Ethernet network. Fits all requirements.
- **DAS:** Direct Attached Storage — directly connected to one server via HBA. Not shared, not over network.
- **SAN:** Block-level storage over dedicated network (Fibre Channel, iSCSI). Provides raw blocks, not files. Requires dedicated storage network typically.
- **VDI:** Virtual Desktop Infrastructure — not a storage type.
</details>

---

### Q5 — Storage Virtualisation

**Explain the difference between block-level and file-level storage virtualisation. Give an example of when you would use each.**

<details>
<summary>Answer</summary>

**Block-level virtualisation:**
- Abstraction of logical storage **below** the OS or file-system level
- Presents logical blocks that map to physical blocks
- The OS sees a block device (like a disk)
- Example: A SAN presents LUNs to a server — the server sees block devices, and the SAN virtualises the physical disks into logical volumes

**File-level virtualisation:**
- Virtualisation at the **file-system** level
- Typically uses a network file system (NFS, SMB)
- The client sees a file system, not raw blocks
- Example: A NAS shares folders over NFS — clients mount the file system and read/write files

**Key difference:** Block-level = below OS (OS sees disk); file-level = at file-system level (client sees files/folders).
</details>

---

### Q6 — Cloud Mechanisms — Memory

**List the 6 cloud infrastructure mechanisms.**

<details>
<summary>Answer</summary>

1. Logical Network Perimeter
2. Virtual Server
3. Cloud Storage Device
4. Cloud Usage Monitor
5. Resource Replication
6. Ready-made Environment

(Reference: cloudpatterns.org/mechanisms/overview)
</details>

---

### Q7 — Cloud Mechanisms — Understanding

**What is a "Ready-made Environment" and which cloud service model is it a defining component of?**

<details>
<summary>Answer</summary>

A **Ready-made Environment** is a defining component of the **PaaS (Platform as a Service)** cloud delivery model. It is equipped with a complete software development kit (SDK). The cloud consumer accesses a ready-made environment hosted on a virtual server — they don't need to build the development platform from scratch, they just use what's provided.

This fits PaaS because in PaaS, the consumer is intentionally shielded from implementation details and provided with a ready-to-use platform.
</details>

---

### Q8 — Cloud Architectures

**Explain the difference between Workload Distribution Architecture and Service Load Balancing Architecture.**

<details>
<summary>Answer</summary>

**Workload Distribution Architecture:**
- A redundant copy of the cloud service is implemented on a second virtual server
- An **external load balancer** intercepts consumer requests and distributes them evenly across both virtual servers
- The load balancer is a separate component
- Provides redundancy + load balancing

**Service Load Balancing Architecture:**
- The load balancer intercepts messages from cloud service consumers and forwards them to virtual servers
- BUT the cloud service **implementation itself includes built-in load balancing logic**
- The service is capable of distributing requests to neighbouring implementations on other virtual servers
- The load balancing is partially built into the service itself, not just an external component

**Key difference:** In workload distribution, the load balancer is purely external. In service load balancing, the service has built-in load balancing logic that participates in distributing requests.
</details>

---

### Q9 — VMotion

**Describe the VMotion (live migration) process. List all 6 steps.**

<details>
<summary>Answer</summary>

1. **Workload increase:** A virtual server capable of auto-scaling experiences an increase in its workload
2. **Decision:** The VIM decides that the virtual server cannot scale up because its underlying physical server host is being used by other virtual servers
3. **Suspend:** The VIM commands the hypervisor on the busy physical server to **suspend execution** of the virtual server
4. **Instantiate:** The VIM then commands the instantiation of the virtual server on the **idle physical server**
5. **Synchronise:** State information (such as dirty memory pages and processor registers) is **synchronised** between source and destination
6. **Resume:** The VIM commands the hypervisor at the new physical server to **resume** the virtual server processing

**Key technical enabler:** Step 5 — state synchronisation of dirty memory pages and processor registers. This happens during a very brief suspension (sub-second in practice).
</details>

---

### Q10 — Cloud Security Mechanisms

**List the 8 cloud security mechanisms and briefly explain what each one does.**

<details>
<summary>Answer</summary>

1. **Encryption:** Protects data confidentiality — scrambles data so only authorised parties can read it
2. **Hashing:** Ensures data integrity — one-way function producing a fixed-size digest; detects if data has been tampered with
3. **Digital Signatures:** Verifies authenticity and provides non-repudiation — proves who created the data and that it hasn't been altered
4. **Public Key Infrastructure (PKI):** Manages digital certificates and public/private key pairs — foundation for secure communications and identity verification
5. **Identity and Access Management (IAM):** Controls who can access what resources — authentication (who are you) and authorisation (what can you do)
6. **Single Sign-On (SSO):** One authentication grants access to multiple systems — improves usability and centralises access control
7. **Cloud-Based Security Groups:** Firewall rules at the cloud level — control inbound and outbound traffic to/from cloud resources (like AWS Security Groups or Azure NSGs)
8. **Hardened Virtual Server Images:** Pre-configured VM images with security best practices applied — reduces the attack surface of new deployments

(Reference: cloudpatterns.org/mechanisms/overview)
</details>

---

### Q11 — Cloud Management Mechanisms

**A cloud provider needs to track how much their customers are using their services so they can bill them accurately. Which cloud management mechanism handles this?**

A) Remote Administration System
B) Resource Management System
C) SLA Management System
D) Billing Management System

<details>
<summary>Answer</summary>

**D) Billing Management System**

- **Billing Management System:** A pay-per-use monitor keeps track of usage and collects data relevant to billing. This data is forwarded to a billing repository. The system periodically calculates the consolidated cloud service usage fees and generates an invoice for the cloud consumer.
- **Remote Administration System:** Enables admins to configure VMs, provision services via self-service portal, and manage remotely — not about billing.
- **Resource Management System:** Manages IT resources — inventory, allocation, utilisation. Consumer admin uses external portal; provider admin uses native VIM UI.
- **SLA Management System:** Tracks service availability against SLA commitments by polling the service and recording "up" and "down" time — not about billing.
</details>

---

### Q12 — Virtual Machines

**What is a virtual machine and what does it encapsulate?**

<details>
<summary>Answer</summary>

A **virtual machine (VM)** is an isolated instance of application software and guest operating system that runs like a separate computer.

It **encapsulates**:
- The **virtual hardware** (vCPU, vRAM, vNIC, virtual disks)
- The **virtual disks** (storage)
- The **metadata** associated with the application

VMs can connect to peripheral devices and function just like physical computers — they have their own identity (IP, MAC, OS) and behave independently of other VMs on the same physical host.
</details>

---

### Q13 — vCenter Architecture

**List the 5 components of the vCenter Management Server architecture.**

<details>
<summary>Answer</summary>

1. **User Access Control** — manages who can access what within vCenter
2. **Core Services** — fundamental vCenter functionality (inventory, task management, etc.)
3. **Distributed Services** — services that span multiple vCenter instances or extend across the infrastructure
4. **Plug-ins** — extend vCenter functionality, add features, integrate with other systems
5. **Interfaces** — how users and systems interact with vCenter (client UI, web interface, APIs)

(Reference: Week 3 slide — vCenter Management Server Architecture)
</details>

---

## Exam Tips

- **Type 1 vs Type 2 hypervisor is a guaranteed question.** Know the difference, examples, and use cases.
- **NIST definition's 5 characteristics** — list all 5 and understand each.
- **Service models** — know what consumer manages vs what provider manages for each.
- **Cloud mechanisms — 6+4+8 = 18 names.** These are pure memory tests. Practice writing them out.
- **VMotion** — know all 6 steps in order. The state synchronisation step is the technical enabler.
- **DAS vs NAS vs SAN** — know the difference in access level (block vs file), connection type, and whether it's shared over a network.

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 01-03 Summary]] — summary
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
