---
type: lecture-notes
course: Cloud Computing
title: Week 05 — Data Centre Fundamentals and Virtualisations
status: processed
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-05
  - exam-prep
---

# Week 05 — Data Centre Fundamentals and Virtualisations

> **Source:** [[Week5_Cloud Lecture.pdf]]
> **Lecturer:** Haimin Zhang
> **Status:** Processed from PDF — exam-ready notes

---

## Outline (from slide)

1. What is a Data Center?
   - Data center goals
   - Data center facilities
2. Data Center Architecture
3. Virtualising a Data Center
   - Virtualisation at different layers
   - Technologies in DC

---

## 1. Introduction to Data Center

### What is a Data Center?

A data center is a facility that:

- **Houses critical computing resources** in controlled environments
- Under **centralized management**
- Computing resources include:
  - Mainframes
  - Web and application servers
  - File and print servers
  - Messaging servers
  - Application software and the operating systems that run them
  - Storage subsystems
  - Network infrastructure

In short: A data center is where all the IT infrastructure lives — servers, storage, networking — in one physically controlled, centrally managed location.

---

## 2. Data Center Goals

### Traditional Business-Oriented Goals

These generate IT initiatives:

| Goal | Description |
|------|-------------|
| **Business continuance** | Ensuring the business can continue operating even during disruptions — DR, redundancy, backup |
| **Increased security in the Data Center** | Protecting data, systems, and physical access |
| **Storage consolidation** | Centralising storage to reduce cost, improve management, enable sharing |
| **Application, server, and Data Center consolidation** | Reducing the number of physical servers and facilities through virtualisation and consolidation |
| **Etc.** | Other business-driven IT goals |

### Data Center Design Criteria

When designing a data center, these criteria drive decisions:

| Criterion | Meaning |
|-----------|---------|
| **Availability** | How accessible are the services? Uptime, redundancy, fault tolerance |
| **Scalability** | How easily can the DC grow? Adding capacity without major redesign |
| **Security** | Physical and logical security, access control, data protection |
| **Performance** | Throughput, latency, I/O performance |
| **Manageability** | How easy to operate, monitor, maintain, automate |
| **Etc.** | Other criteria as needed (cost, energy efficiency, etc.) |

**Exam note:** These criteria often conflict — availability vs cost, scalability vs performance, etc. Understanding trade-offs is key.

---

## 3. Data Center Facilities

Several considerations ensure data center performance:

| Consideration | Importance |
|---------------|------------|
| **Power capacity** | Enough electrical power for all equipment + redundancy (UPS, generators) |
| **Cooling capacity** | Adequate and concentrated cooling — servers generate heat; overheating causes failures |
| **Cabling** | Organised cabling for power, network, storage — affects maintainability and airflow |
| **Temperature and humidity controls** | Too hot = failure; too cold = waste; wrong humidity = static/corrosion |
| **Fire and smoke systems** | Detection and suppression — must not damage equipment (e.g., water-based suppression risky) |
| **Physical security** | Restricted access and surveillance systems — who can physically enter |
| **Rack space and raised floors** | Standardised rack layout; raised floors for cabling, cooling distribution |
| **Modularity and flexibility** | Ability to add capacity in modules, adapt to changing needs |

**Exam tip:** These facilities are the physical foundation everything else builds on. Virtualisation can't fix a data centre with inadequate power or cooling.

---

## 4. Data Center Architecture

### Three-Layer Data Center Model

The classic data center architecture has three layers:

1. **Network Layer** — switches, routers, firewalls, load balancers
2. **Storage Layer** — SAN, NAS, storage arrays
3. **Compute Layer** — servers, blade servers, mainframes

Each layer traditionally had **dedicated resources** — separate network switches, separate storage arrays, separate server racks.

### Why Virtualise? — Historical Evolution

| Era | Motivation | Result |
|-----|-----------|--------|
| **Originally** | Virtualisation was seen as a way to run multiple workloads on a single host | Server consolidation — run more on less hardware |
| **Later** | It was found to be easier to clone an existing machine than build it from scratch | Production machines could be cloned to produce **disaster recovery, development, and multiple test environments** |
| **Today** | This is probably today's most compelling reason | **Workload mobilisation** — without it there is no "Cloud" |

**Key insight from the lecture:** Without workload mobilisation (the ability to move/clone workloads), there is no cloud. Virtualisation evolved from "run more VMs on one server" to "move workloads anywhere" — and that mobility is what makes cloud possible.

---

## 5. Benefits of Virtualisation in Data Center

| Benefit | Description |
|---------|-------------|
| **Reduced cost** | Fewer physical servers, less power, less cooling, less space, less licensing |
| **Faster redeploy** | Clone a VM in minutes vs. provision a physical server in days/weeks |
| **Better testing** | Clone production to create dev/test environments that are realistic — safe to break |
| **No vendor lock-in** | VMs are portable across hardware (if hypervisor supports it) |
| **Better disaster recovery** | Clone production to DR site; replicate VMs; failover |
| **Less heat buildup** | Fewer physical servers = less heat = lower cooling costs |
| **Easier migration to cloud** | VMs are the unit of cloud — easier to move VMs to cloud than physical servers |
| **Etc.** | Other benefits as applicable |

---

## 6. Data Center Architecture with Dedicated Resources

(Traditional architecture)

- **Dedicated resources at each layer** — network, storage, compute are separate and not shared
- Each server has its own storage (DAS) or connects to dedicated storage array
- Each server connects to dedicated network switches
- Underutilised — a server using 10% CPU still consumes full power, cooling, space, licensing
- Hard to scale — adding capacity means adding whole new physical servers

**The problem:** Dedicated resources = low utilisation + high cost + rigid scaling.

---

## 7. Network Layer Consolidation and Virtualisation

**Network layer consolidation** interconnects networking resources into a **shared, intelligent network**.

- Instead of each server having its own dedicated network connection, multiple servers share network infrastructure
- Network virtualisation creates multiple virtual networks on the shared physical network
- VLANs, vSwitches, VXLANs — all about consolidating the network layer while maintaining isolation

**Key concept:** Consolidation doesn't mean "everything on one network" — it means sharing physical infrastructure while using virtualisation to create isolated logical networks.

---

## 8. Storage Layer Consolidation and Virtualisation

**Once storage layer is virtualized, storage can be treated as a pooled resource.**

- Physical storage from multiple arrays is pooled into a single logical storage pool
- VMs see virtual disks provisioned from the pool — they don't know which physical array their data is on
- Enables:
  - **Storage overcommitment** — provision more virtual storage than physical (thin provisioning)
  - **Live migration** — move a VM's storage to another physical location while running
  - **Snapshots and cloning** — fast copy of virtual disks
  - **Deduplication** — eliminate redundant copies of identical data blocks

---

## 9. Compute Layer Consolidation and Virtualisation

**Compute consolidation reduces costs and increases efficiency of physical server usage** by allowing the use of standard servers in pooled configurations.

- Multiple VMs run on each physical server — CPU, memory shared via hypervisor
- Physical servers are pooled — VMs draw from the pool, not a specific server
- Enables:
  - **Server consolidation** — 10 VMs on 1 physical server instead of 10 physical servers
  - **Load balancing** — VMs distributed across servers based on demand
  - **High availability** — if a server fails, VMs restart on other servers in the pool
  - **Resource elasticity** — add/remove VMs from the pool as needed

---

## 10. Kusnetzky Group Model of Virtualisation

The Kusnetzky Group taxonomy classifies virtualisation into layers:

| Layer | What it virtualises | Description |
|-------|---------------------|-------------|
| **Network Virtualisation** | Hardware and software network resources | Combining hardware and software network resources and network functionality into a single software-based management entity. Allows aggregation or segregation of logical networks while still using one or many physical connections. Common standards: VXLAN, NVGRE, 802.1q (VLANs). |
| **Storage Virtualisation** | Physical storage components | A combination of hardware and software technologies that abstracts the physical components of a storage system from the application or server and presents it in a consistent manner to the client. Commonly used in virtualised environments to share physical storage systems between multiple VMs and hypervisors. Typically starts with a storage device (SAN) that exports storage at Block Level or File Level. |
| **Processing Virtualisation** | Physical hardware from system services, OS, applications | Hardware and software technology that abstracts the physical hardware from system services, operating systems, and applications. Can make one system appear to be many or many systems appear to be a single computing resource. Goals: raw performance, scalability, reliability/availability, agility, consolidation. Can be used to chop up one server or join many to make a grid computer. |
| **Application Virtualisation** | Application from underlying OS/hardware | Application-level virtualisation that allows a piece of software to run on a variety of operating systems, hardware platforms, and devices. Usually means the application uses an application framework. Advanced forms: restart on failure, start another instance if not meeting SLAs, workload balancing among instances for scalability. Example: Java Framework allows portability of code base. |
| **Access Virtualisation** | Device-to-application access | Hardware and software technology that allows nearly any device to access any application without either having to know too much about the other. The application sees a device it's used to working with; the device sees an application it knows how to display. Special-purpose hardware may be used on each side of the network connection to increase performance. Example: Virtual Desktop Infrastructure (VDI) using protocols like Microsoft RDP or Citrix ICA. |

**Exam note:** Know the 5 layers of the Kusnetzky model — they're a conceptual framework for understanding what virtualisation can do at each level.

---

## 11. Storage Virtualisation — Detailed

### What is Storage Virtualisation?

A combination of hardware and software technologies that **abstracts the physical components of a storage system from the application or server** and presents it in a consistent manner to the client.

### Key Characteristics

- Storage virtualisation is commonly used in virtualised environments to **share physical storage systems between multiple virtual machines and hypervisors**
- Typically starts with a storage device (such as a SAN) that exports the storage either at the **Block Level** or **File Level**
- **Block level virtualisation:** Abstraction of logical storage below the OS or file-system — presents logical blocks that map to physical blocks
- **File level virtualisation:** Virtualisation at the file-system level, typically using a network file system (NFS, SMB)

### Functions of Storage Virtualisation

- **Allows for multiple systems to access the same storage system** — multi-tenancy at the storage layer
- **Allows for the storage to be physically separated from the local server, but appear to be accessible storage** — the server sees a local disk; the physical storage is elsewhere on the SAN

### VMware Infrastructure Storage Architecture

(Referenced again from Week 2)

- Storage presented to VMs as virtual SCSI disks connected to virtual Host Bus Adapters
- Virtual SCSI disks provisioned from Datastore elements in the data center
- Datastore abstracts physical storage — VM doesn't know if its disk is on SAN, NAS, or DAS

---

## 12. What is SAN? (Storage Area Network)

- A SAN is typically a **storage device accessed over a storage network**
- It is a device that allows you to **virtualise multiple physical storage devices into a number of logical storage volumes**, often referred to as **LUNs (Logical Unit Numbers)**
- The SAN system keeps track of the mappings between logical and physical storage blocks and provides a **translation layer**
- It allows a general-purpose server to access data on a range of storage devices
- **Accessed over:** Fibre Channel, iSCSI, FCoE (Fibre Channel over Ethernet), ATAoE (ATA over Ethernet), etc.

**Key point:** SAN virtualises physical disks into logical LUNs — the server sees LUNs, the SAN maps LUNs to physical disks. This is storage virtualisation in practice.

---

## 13. Processing Virtualisation

Hardware and software technology that **abstracts the physical hardware from system services, operating systems, and applications**.

- Can make **one system appear to be many** (server consolidation — one physical server runs many VMs)
- Can make **many systems appear to be a single computing resource** (clustering, grid computing — many servers appear as one big machine)
- Goals: raw performance, high levels of scalability, reliability/availability, agility, or consolidation of multiple environments onto a single system

**Two directions:**
1. **Chopping up one server** — one physical server → many VMs (consolidation)
2. **Joining many servers** — many physical servers → one grid/cluster (scale-up via scale-out)

---

## 14. Application Virtualisation

Application-level virtualisation that **allows a piece of software to run on a variety of operating systems, hardware platforms, and devices**.

- Usually means the application has been written to use an **application framework** (e.g., Java, .NET)
- More advanced forms offer:
  - Restart an application in case of failure
  - Start another instance if the application is not meeting service level objectives
  - Provide workload balancing among multiple instances of an application to achieve high levels of scalability
- **Example:** Writing software using the Java Framework allows portability of the code base across platforms

---

## 15. Access Virtualisation

Hardware and software technology that **allows nearly any device to access any application** without either having to know too much about the other.

- The **application sees a device** it's used to working with (e.g., a standard display, keyboard, mouse)
- The **device sees an application** it knows how to display
- In some cases, special-purpose hardware is used on each side of the network connection to increase performance, allow many users to share a single client system, or allow a single individual to see multiple displays
- **Example:** Virtual Desktop Infrastructure (VDI) — utilising protocols such as Microsoft RDP (Remote Desktop Protocol) or Citrix ICA (Independent Computing Architecture)

**Key concept:** Access virtualisation decouples the user's device from the application's requirements — you can access a Windows application from an iPad, or a Linux app from a Windows PC, via protocol-based remote display.

---

## 16. The Virtual Data Center — Ideal Architecture

### The Virtual Data Center Diagram

```
Internet → Firewall → Outward facing Network
                      ↓
      Physical Hosts (running virtual workloads)
                      ↓
        Storage Layer    Internal Facing Network
```

The virtual data center integrates:

- **Physical hosts** running virtual workloads (VMs)
- **Storage layer** — virtualised storage pool
- **Internal facing network** — virtualised network connecting VMs
- **Outward facing network** — connection to internet, firewall for security
- **Security layer** — protecting the DC perimeter and internal segments

### Multi-Site Virtual Data Center

```
Production Data Centre (Sydney)
          ↕ (replication / synchronisation)
Disaster Recovery DC (Melbourne)
          ↕
Branch Data Centre (Shanghai)
          ↕
Security Layer
Compute Layer (virtual workloads)
Storage Layer (virtualised storage)
```

Non-virtualised physical workloads still exist alongside:
- IBM p, z, I series (mainframes)
- Sparc (Sun/Oracle)
- ATM devices
- Other legacy devices

These non-virtualised workloads are part of the hybrid reality — not everything can or should be virtualised.

---

## 17. Technologies in a Data Center

### Three Architectural Approaches

| Approach | Description | Trade-offs |
|----------|-------------|------------|
| **Separate Compute, Storage, and Network** | Traditional — each layer is separate equipment | Moderate entry cost, easy to scale (add more of each independently), but less integrated |
| **Data Center in a Box** (e.g., HP EcoPod) | Compute, storage, and network in a single or few racks | High entry cost, finite limit to scaling, start using almost immediately, quite mobile |
| **Converged Devices** (e.g., Nutanix) | Compute, storage, and network in 2 or 4 rack units | Low entry cost, high scalability, devices form a mesh, used by Google — scales out by adding more nodes |

### Virtualisation Platforms

| Platform | Characteristics |
|----------|----------------|
| **VMware** | Largest market share in enterprise. Workloads can be seamlessly uplifted from physical layer (slid from bare metal). Automatically moved from server to server for load balancing and DR. Cloned from production to create Dev, Test, and DR. Supports all X86 operating systems (Microsoft, Linux, Novell, Legacy). |
| **Hyper-V** | Growing market share in enterprise. **No support for uplifting from physical layer** (therefore cannot be used to clone production). |
| **Amazon EC2** | Holy Grail of enterprise despite small market share. No automated support for uplift from physical. |
| **Xen** | Open source virtual server popular with Linux users in Asia. Supports all X86 operating systems. |
| **Virtual Box** | Open source owned by Oracle. Only complete vertical offering (Oracle is the only CSP attempting to offer solutions in IaaS, PaaS, and SaaS). Supports all X86 operating systems. |

### Migration Compatibility Matrix (from slide)

| From ↓ / To → | VMWare | Hyper V | Amazon EC2 | Xen | Virtual Box |
|---------------|--------|---------|------------|-----|-------------|
| VMWare | — | Full Motion Compatible | Convert | Convert | Compatible |
| Hyper V | Full Motion Compatible | — | Convert | Compatible | Convert |
| Amazon EC2 | Convert | Rebuild | — | Compatible | Convert |
| Xen | Rebuild | Rebuild | Compatible | — | Rebuild |
| Virtual Box | Compatible | Convert | Rebuild | Compatible | — |

**Key insight:** Not all platforms are equally compatible for migration. VMware has the broadest compatibility. AWS EC2 and Hyper-V have limited migration paths. This matters for planning migrations and avoiding vendor lock-in.

**Exam note:** Know that VMware supports "full motion" (live migration) with Hyper-V, but most other migrations require conversion or rebuild. AWS EC2 requires rebuilding VMs (no direct migration from VMware/Hyper-V without conversion).

---

## 18. Considerations of Virtualising Data Center

Before virtualising a data center, consider:

| Consideration | Question |
|---------------|----------|
| **Power** | Will the physical site have adequate and appropriate electrical power? |
| **Cooling** | Will the physical site have adequate and appropriately concentrated cooling capacity? |
| **Security** | Will the physical site have appropriate security facilities? |
| **Backup** | Will the physical site have adequate utility backup (power, cooling, network)? |
| **Availability** | Will the consolidated/virtualised platform provide the availability needed for the workloads it will run? |
| **Skills** | Will the consolidated/virtualised platform require new support tools and/or staff skills? |

**Key point:** Virtualisation concentrates workloads onto fewer physical servers — this makes each physical server more critical. If a physical server fails in a virtualised environment, many VMs go down. Power, cooling, and backup become MORE important, not less.

---

## 19. Summary — Week 5

### What We Covered

1. **What is a Data Center?**
   - Houses critical computing resources in controlled environments under centralised management
   - Goals: business continuance, security, storage consolidation, server consolidation
   - Design criteria: availability, scalability, security, performance, manageability

2. **Data Center Facilities**
   - Power capacity, cooling capacity, cabling, temperature/humidity, fire/smoke, physical security, rack space, modularity

3. **Data Center Architecture**
   - Three-layer model: network, storage, compute
   - Traditional: dedicated resources at each layer — underutilised, rigid
   - Evolution: virtualisation enables consolidation at every layer

4. **Why Virtualise?**
   - Originally: run multiple workloads on one host
   - Later: clone machines for DR, dev, test
   - Today: workload mobilisation — without it there is no Cloud

5. **Virtualisation at Different Layers (Kusnetzky Model)**
   - **Network virtualisation:** Combine network resources into software-based management entity (VXLAN, NVGRE, VLAN)
   - **Storage virtualisation:** Abstract physical storage, present as logical volumes (SAN LUNs, block/file level)
   - **Processing virtualisation:** Abstract hardware from OS/apps — one-to-many (consolidation) or many-to-one (grid)
   - **Application virtualisation:** Run apps on any OS/hardware via frameworks (Java, .NET)
   - **Access virtualisation:** Any device access any app (VDI, RDP, ICA)

6. **Technologies in DC**
   - Separate (traditional), DC in a box (EcoPod), converged (Nutanix)
   - Virtualisation platforms: VMware (largest, most compatible), Hyper-V (growing, no physical uplift), EC2 (holy grail, no uplift), Xen (open source, Linux/Asia), Virtual Box (Oracle, complete vertical)

7. **Considerations**
   - Power, cooling, security, backup, availability, staff skills — virtualisation makes these MORE critical

---

## Exam-Ready Summary — Week 5

### Key Definitions

- **Data Center:** Facility housing critical computing resources in controlled environments under centralised management
- **Data Center goals:** Business continuance, increased security, storage consolidation, application/server/DC consolidation
- **DC design criteria:** Availability, scalability, security, performance, manageability
- **Workload mobilisation:** The ability to move/clone workloads — without it there is no Cloud
- **Kusnetzky Group Model:** 5-layer virtualisation taxonomy (Network, Storage, Processing, Application, Access)
- **SAN (Storage Area Network):** Storage device accessed over a storage network; virtualises physical disks into logical LUNs
- **Block-level virtualisation:** Abstraction below OS/file-system
- **File-level virtualisation:** Virtualisation at file-system level (NFS, SMB)
- **Processing virtualisation:** Abstracts physical hardware from system services/OS/apps — one-to-many or many-to-one
- **Application virtualisation:** Run apps on any OS/hardware via frameworks
- **Access virtualisation:** Any device access any app (VDI, RDP, ICA)
- **Converged infrastructure:** Compute, storage, network in integrated units (Nutanix)
- **DC in a box:** All-in-one rack solution (HP EcoPod)

### Virtualisation Layers — Kusnetzky Model (Memorise)

1. **Network** — VXLAN, NVGRE, 802.1q (VLANs)
2. **Storage** — SAN, block-level, file-level
3. **Processing** — hypervisors, one-to-many or many-to-one
4. **Application** — frameworks (Java, .NET), portable code
5. **Access** — VDI, RDP, ICA

### VMware vs Hyper-V vs EC2

| | VMware | Hyper-V | EC2 |
|---|---|---|---|
| Market share | Largest in enterprise | Growing | Small (but "holy grail") |
| Physical uplift | Yes (seamless) | No | No |
| Live migration | Yes (vMotion) | Yes | Yes (within AWS) |
| OS support | All X86 | All X86 | AWS-supported AMIs |
| Migration compatibility | Most compatible | Limited | Rebuild required for external |

### Data Center Architecture Approaches

- **Separate:** Traditional, moderate entry cost, easy to scale
- **DC in a box:** High entry cost, finite scaling, immediate use, mobile
- **Converged:** Low entry cost, high scalability, mesh topology (Nutanix, Google)

---

## Related

- [[Week 01-03]] — Weeks 1-3 foundation
- [[Week 04]] — Week 4 network virtualisation (connects to Week 5's network virtualisation layer)
- [[Week 06]] — Week 6 DC management (extends to operations of the DC)
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Week 05 Quiz Prep]] — practice questions
