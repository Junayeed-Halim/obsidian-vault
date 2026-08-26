---
type: lecture-notes
course: Cloud Computing
title: Week 03 — Cloud Infrastructure/Management Mechanisms and Architectures
status: processed
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-03
  - exam-prep
---

# Week 03 — Cloud Infrastructure/Management Mechanisms and Architectures

> **Source:** [[Week3_CloudLecture-3.pdf]]
> **Lecturer:** Haimin Zhang
> **Status:** Processed from PDF — exam-ready notes

---

## Contents (from slide)

1. Infrastructure of Cloud Service Provider
2. Cloud Infrastructure Mechanisms
3. Cloud Management Mechanisms
4. Cloud Security Mechanisms
5. Fundamental Cloud Architectures
6. Hosts, Clusters, and Resource Pools
7. vCenter Management Server Architecture
8. VMotion

---

## 1. Infrastructure of Cloud Service Provider

Four technology foundations that every cloud provider is built on:

### 1.1 Broadband Networks and Internet Architecture

- All cloud must be connected to a network
- Internetworks (the internet) allow for the remote provisioning of IT resources
- **Internet Service Providers (ISPs):** An ISP network interconnects to other ISP networks and various organisations
- **Connectionless Packet Switching (Datagram Networks):** End-to-end data flows are divided into packets of limited size — packets travel independently
- **Router-Based Interconnectivity:** Packets travelling through the internet are directed by a router that arranges them into a message

**Three tiers of ISPs:**
- **Tier-1 ISPs** (Verizon, Sprint, AT&T, Cable and Wireless): Internet backbone networks with international coverage — the top of the hierarchy
- **Tier-2 ISPs:** Regional or national coverage — peer with other Tier-2s and purchase transit from Tier-1s
- **Tier-3 ISPs:** Local network of an organisation which has hosts connected to it — the "last mile" to end users

### 1.2 Data Center Technology

A data centre contains:

**Facilities:**
- Housing, racks, cabling
- Power supplies
- Environmental control station (heating, ventilation, air conditioning — HVAC, fire protection, and other subsystems)

**Computing Hardware:**
- Servers, blade servers, etc.

**Storage Hardware:**
- Hard Disk Arrays
- Storage Area Network (SAN)
- Network-Attached Storage (NAS)

**Network Hardware:**
- Carrier and External Network Interconnection
- Web-Tier Load Balancing and Acceleration
- LAN Fabric, SAN Fabric, NAS Gateways

### 1.3 (Modern) Virtualisation Technology

Four layers of virtualisation:

| Layer | Physical | Virtual |
|-------|----------|---------|
| **Servers** | Physical server | Virtual server (abstraction) |
| **Storage** | Physical storage | Virtual storage device or virtual disk |
| **Network** | Physical routers and switches | Logical network fabrics (e.g., VLANs) |
| **Power** | Physical UPS | Virtual UPS (abstraction) |

### 1.4 Web Technology and Service Technology

- **Web Technology:** Generally used as both the implementation medium and the management interface for cloud services
- **Service Technology:** The Keystone foundation of cloud computing — web services, WSDL, XML schema, SOAP, UDDI, REST services, service agents, service middleware

---

## 2. Cloud Infrastructure Mechanisms — 6 Types

These are the fundamental building blocks of cloud infrastructure. (Reference: cloudpatterns.org/mechanisms/overview)

### 2.1 Logical Network Perimeter

- **Definition:** Isolation of a network from the rest of a communications network
- Two logical network perimeters surround the cloud consumer and cloud provider environments — each side has its own perimeter
- Provides security boundary between consumer and provider

### 2.2 Virtual Server

- A form of virtualisation software that emulates a physical server
- A virtual server hosts an active cloud service
- Further accessed by a cloud consumer for administrative purposes
- The fundamental compute unit in cloud infrastructure

### 2.3 Cloud Storage Device

- Represents storage devices that are designed specifically for cloud-based provisioning
- Different cloud service consumers utilise different technologies to interface with virtualized cloud storage devices
- Can be block-level, file-level, or object-level depending on the service model

### 2.4 Cloud Usage Monitor

- Autonomous software program responsible for collecting and processing IT resource usage data
- Three types of agents:
  - **Monitoring Agent:** Deployed within the IT resource to collect usage data
  - **Polling Agent:** Periodically polls the IT resource for status/usage
  - **Resource Agent:** Gathers usage data directly from the resource it is associated with

### 2.5 Resource Replication

- Creation of multiple instances of the same IT resource
- Hypervisor replicates several instances of a virtual server using a stored virtual server image
- Enables scaling, redundancy, and rapid provisioning

### 2.6 Ready-made Environment

- Defining component of PaaS cloud delivery model
- Equipped with a complete software development kit (SDK)
- Cloud consumer accesses a ready-made environment hosted on a virtual server — no need to build the environment from scratch

---

## 3. Cloud Management Mechanisms — 4 Types

### 3.1 Remote Administration System

- Enables remote management of cloud resources
- Cloud resource administrator uses the usage and administration portal to configure an already leased virtual server to prepare it for hosting
- Then uses the self-service portal to select and request the provisioning of a new cloud service
- Then accesses the usage and administration portal again to configure the newly provisioned cloud service
- Throughout these steps, the remote administration system interacts with the necessary management systems to perform the requested actions

### 3.2 Resource Management System

- **Cloud consumer's administrator:** Accesses a usage and administration portal externally to administer a leased IT resource
- **Cloud provider's administrator:** Uses the native user-interface provided by the VIM (Virtual Infrastructure Manager) to perform internal resource management tasks
- Two perspectives: consumer side (external portal) and provider side (internal VIM)

### 3.3 SLA Management System

- SLA monitor polls the cloud service by sending over polling request messages (MREQ1 to MREQN)
- Monitor receives polling response messages that report the service was "up" at each polling cycle
- SLA monitor stores the "up" time — time period of all polling cycles 1 to N — in the log database
- When polling response messages are not received (time out), the SLA monitor stores the "down" time in the log database
- Enables tracking of service availability against SLA commitments

### 3.4 Billing Management System

- Cloud service consumer exchanges messages with a cloud service
- A **pay-per-use monitor** keeps track of the usage and collects data relevant to billing
- Data forwarded to a repository that is part of the billing management system
- System periodically calculates the consolidated cloud service usage fees
- Generates an invoice for the cloud consumer (may be provided through the usage and administration portal)

---

## 4. Cloud Security Mechanisms — 8 Types

From cloudpatterns.org/mechanisms/overview:

| # | Mechanism | Purpose |
|---|-----------|---------|
| 1 | **Encryption** | Protects data confidentiality — scrambling data so only authorised parties can read it |
| 2 | **Hashing** | Ensures data integrity — one-way function producing a fixed-size digest; detects tampering |
| 3 | **Digital Signatures** | Verifies authenticity and provides non-repudiation — proves who created the data and that it hasn't been altered |
| 4 | **Public Key Infrastructure (PKI)** | Manages digital certificates and public/private key pairs — foundation for secure communications |
| 5 | **Identity and Access Management (IAM)** | Controls who can access what resources — authentication + authorisation |
| 6 | **Single Sign-On (SSO)** | One authentication grants access to multiple systems — improves usability and centralises access control |
| 7 | **Cloud-Based Security Groups** | Firewall rules at the cloud level — control inbound/outbound traffic to/from cloud resources |
| 8 | **Hardened Virtual Server Images** | Pre-configured VM images with security best practices applied — reduces attack surface of new deployments |

---

## 5. Fundamental Cloud Architectures — 4 Types

### 5.1 Workload Distribution Architecture

- A redundant copy of Cloud Service A is implemented on Virtual Server B
- The load balancer intercepts cloud service consumer requests
- Directs them to both Virtual Servers A and B to ensure **even workload distribution**
- Provides redundancy + load balancing — if one server fails, the other continues

### 5.2 Resource Pooling Architecture

- Multiple cloud service consumers share a pooled set of IT resources
- Resources are allocated from the pool on demand
- Improves utilisation (multi-tenancy) and reduces cost
- Resources are dynamically assigned and reassigned

### 5.3 Dynamic Scalability Architecture

The process of dynamic horizontal scaling:

- **a) Initial state:** System running at baseline capacity
- **b) Demand increases:** Triggers scaling event
- **c) Scaled state:** Additional resources provisioned to handle increased load

Key characteristic: scaling is **automatic** and **horizontal** (adding more instances, not making existing ones bigger).

### 5.4 Service Load Balancing Architecture

- The load balancer intercepts messages sent by cloud service consumers
- Forwards them to virtual servers so workload processing is **horizontally scaled**
- The cloud service implementation includes **built-in load balancing logic** capable of distributing requests to neighbouring cloud service implementations on other virtual servers
- Unlike simple workload distribution, the service itself participates in load balancing

---

## 6. Hosts, Clusters, and Resource Pools

- **Host:** A single physical server running a hypervisor with VMs on it
- **Cluster:** Multiple hosts grouped together — provides:
  - Resource pooling across hosts
  - High availability (if one host fails, VMs restart on another)
  - Load balancing (workloads spread across hosts)
- **Resource Pool:** Abstracted pool of CPU, memory, storage, network resources drawn from the cluster. VMs draw from pools rather than specific physical hardware — abstraction is the key.

---

## 7. vCenter Management Server Architecture

vCenter Server components:

| Component | Function |
|-----------|----------|
| **User Access Control** | Manages who can access what within vCenter |
| **Core Services** | Fundamental vCenter functionality — inventory, task management, etc. |
| **Distributed Services** | Services that span multiple vCenter instances or extend across the infrastructure |
| **Plug-ins** | Extend vCenter functionality — add features, integrate with other systems |
| **Interfaces** | How users and systems interact with vCenter — client UI, web interface, APIs |

---

## 8. VMotion (Live Migration)

VMotion is the process of moving a running VM from one physical server to another **without downtime**.

Process steps (from the slide diagram):

1. **Trigger:** A virtual server capable of auto-scaling experiences an increase in its workload
2. **Decision:** The VIM decides that the virtual server cannot scale up because its underlying physical server host is being used by other virtual servers
3. **Suspend:** The VIM commands the hypervisor on the busy physical server to **suspend execution** of the virtual server
4. **Instantiate:** The VIM commands the instantiation of the virtual server on the **idle physical server**
5. **Synchronise:** State information (such as dirty memory pages and processor registers) is synchronised between the source and destination
6. **Resume:** The VIM commands the hypervisor at the new physical server to **resume** the virtual server processing

**Key technical enabler:** State synchronisation — dirty memory pages and processor registers must be transferred and consistent before the VM resumes on the new host. This happens while the VM is technically suspended for a very brief period (sub-second in practice).

**Why VMotion matters:**
- Enables live workload balancing across hosts
- Enables maintenance without downtime (move VMs off a host, then shut it down)
- Part of the auto-scaling story — when a host is full, VMs can move to idle hosts

---

## Exam-Ready Summary — Week 3

### Cloud Service Provider Infrastructure — 4 Foundations

1. Broadband Networks and Internet Architecture (ISPs, packet switching, routing)
2. Data Center Technology (facilities, computing, storage, network hardware)
3. (Modern) Virtualisation Technology (servers, storage, network, power)
4. Web Technology and Service Technology (web as medium/interface, services as foundation)

### Cloud Infrastructure Mechanisms — 6 (Memorise Names)

1. Logical Network Perimeter
2. Virtual Server
3. Cloud Storage Device
4. Cloud Usage Monitor (Monitoring Agent, Polling Agent, Resource Agent)
5. Resource Replication
6. Ready-made Environment

### Cloud Management Mechanisms — 4 (Memorise Names)

1. Remote Administration System
2. Resource Management System
3. SLA Management System
4. Billing Management System

### Cloud Security Mechanisms — 8 (Memorise Names)

1. Encryption
2. Hashing
3. Digital Signatures
4. Public Key Infrastructure (PKI)
5. Identity and Access Management (IAM)
6. Single Sign-On (SSO)
7. Cloud-Based Security Groups
8. Hardened Virtual Server Images

### 4 Fundamental Cloud Architectures

1. Workload Distribution (redundancy + load balancer distributes across servers)
2. Resource Pooling (shared pool, multi-tenant, dynamic assignment)
3. Dynamic Scalability (auto horizontal scaling — add/remove instances)
4. Service Load Balancing (load balancer + built-in LB logic in the service)

### VMotion — 6 Steps

1. Workload increase detected
2. VIM decides host is full
3. Hypervisor suspends VM
4. VIM instantiates VM on idle host
5. State (dirty pages, registers) synchronised
6. VIM commands resume on new host

### vCenter Components — 5

User Access Control, Core Services, Distributed Services, Plug-ins, Interfaces

---

## Connections to Other Weeks

- **Week 1-2** built the foundation: cloud definitions, virtualisation, hypervisors, storage types
- **Week 4** extends to network virtualisation — VXLAN, overlay networks, NaaS
- **Week 5** extends to data centre — physical DC, then virtualising at every layer
- **Week 6** extends to DC management — tiers, standards, operational management

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]] — Weeks 1-3 combined
- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 02]] — Week 2 virtualisation detail
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Weeks 01-03 Quiz Prep]] — practice questions
