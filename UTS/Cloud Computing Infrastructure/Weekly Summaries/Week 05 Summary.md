---
type: course
course: Cloud Computing
title: Week 05 Summary — Data Centre Fundamentals and Virtualisations
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 05 Summary — Data Centre Fundamentals and Virtualisations

> **Source:** [[Week 05]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Lecturer:** Haimin Zhang

---

## What We Covered

### What is a Data Center?

A facility that houses critical computing resources in controlled environments under centralized management. Resources include: mainframes, web and application servers, file and print servers, messaging servers, application software and OS, storage subsystems, network infrastructure.

### Data Center Goals

**Traditional business-oriented goals (generate IT initiatives):**
- Business continuance (DR, redundancy, backup)
- Increased security in the DC
- Storage consolidation
- Application, server, and DC consolidation
- Etc.

**Data center design criteria:**
- Availability
- Scalability
- Security
- Performance
- Manageability
- Etc.

(These criteria often conflict — availability vs cost, scalability vs performance — understanding trade-offs matters.)

### Data Center Facilities

| Consideration | Importance |
|---------------|------------|
| Power capacity | Enough electrical power for all equipment + redundancy (UPS, generators) |
| Cooling capacity | Adequate and concentrated cooling — servers generate heat; overheating causes failures |
| Cabling | Organised cabling for power, network, storage — affects maintainability and airflow |
| Temperature and humidity controls | Too hot = failure; too cold = waste; wrong humidity = static/corrosion |
| Fire and smoke systems | Detection and suppression — must not damage equipment |
| Physical security | Restricted access and surveillance systems |
| Rack space and raised floors | Standardised rack layout; raised floors for cabling, cooling distribution |
| Modularity and flexibility | Ability to add capacity in modules, adapt to changing needs |

### Data Center Architecture

**Three-Layer Data Center Model:** Network layer, Storage layer, Compute layer.

**Traditional (dedicated resources):** Each layer has dedicated resources — separate network switches, separate storage arrays, separate server racks. Underutilised (10% CPU server still uses full power/cooling/space). Hard to scale — adding capacity means new physical servers.

**Why virtualise? — Historical evolution:**
- **Originally:** Run multiple workloads on a single host — server consolidation
- **Later:** Easier to clone existing machine than build from scratch — clone production for DR, dev, test
- **Today:** Workload mobilisation — without it there is no Cloud

### Benefits of Virtualisation in Data Center

| Benefit | Description |
|---------|-------------|
| Reduced cost | Fewer physical servers, less power, less cooling, less space |
| Faster redeploy | Clone VM in minutes vs provision physical server in days/weeks |
| Better testing | Clone production for realistic dev/test |
| No vendor lock-in | VMs portable across hardware (if hypervisor supports) |
| Better disaster recovery | Clone production to DR site; replicate VMs; failover |
| Less heat buildup | Fewer physical servers = less heat |
| Easier migration to cloud | VMs are unit of cloud |
| Etc. | |

### Network Layer Consolidation and Virtualisation

Network layer consolidation interconnects networking resources into a shared, intelligent network. Network virtualisation creates multiple virtual networks on shared physical network. Enables consolidation while maintaining isolation.

### Storage Layer Consolidation and Virtualisation

Once storage layer virtualized, storage treated as pooled resource. Physical storage from multiple arrays pooled into single logical pool. VMs see virtual disks provisioned from pool. Enables: storage overcommitment (thin provisioning), live migration of storage, snapshots/cloning, deduplication.

### Compute Layer Consolidation and Virtualisation

Compute consolidation reduces costs and increases efficiency by using standard servers in pooled configurations. Multiple VMs on each physical server. Servers pooled — VMs draw from pool. Enables: server consolidation (10 VMs on 1 server), load balancing, HA (VMs restart on other servers if one fails), resource elasticity.

### Kusnetzky Group Model of Virtualisation — 5 Layers (Memorise)

| Layer | What it virtualises | Standards/examples |
|-------|---------------------|-------------------|
| **Network Virtualisation** | Hardware and software network resources into single software-based management entity | VXLAN, NVGRE, 802.1q (VLANs) |
| **Storage Virtualisation** | Physical components of storage system, presented consistently to client | SAN, Block-level, File-level (NFS, SMB) |
| **Processing Virtualisation** | Physical hardware from system services, OS, applications | Hypervisors — one system to many, or many to one (grid) |
| **Application Virtualisation** | Application from underlying OS/hardware — runs on variety of platforms | Java Framework, .NET — portable code base |
| **Access Virtualisation** | Any device access any application without knowing about the other | VDI, RDP (Microsoft), ICA (Citrix) |

### Storage Virtualisation — Detailed

**Definition:** Combination of hardware and software technologies that abstracts physical components of storage system from application/server and presents consistently to client.

**Characteristics:**
- Commonly used to share physical storage between multiple VMs and hypervisors
- Typically starts with storage device (SAN) exporting at Block Level or File Level
- **Block level:** Abstraction below OS/file-system
- **File level:** Virtualisation at file-system level (network file system)

**Functions:**
- Multiple systems access same storage system (multi-tenancy at storage layer)
- Storage physically separated from local server but appears accessible

**VMware Infrastructure Storage Architecture:**
- Storage presented to VMs as virtual SCSI disks connected to vHBA
- Virtual SCSI disks provisioned from Datastore elements
- Datastore abstracts physical storage — VM doesn't know if disk is on SAN, NAS, or DAS

### What is SAN?

Storage Area Network — storage device accessed over storage network. Virtualises multiple physical storage devices into logical storage volumes (LUNs). Keeps track of mappings between logical and physical storage blocks, provides translation layer. Allows general-purpose server to access data on range of storage devices. Accessed over: Fibre Channel, iSCSI, FCoE, ATAoE, etc.

### Processing Virtualisation

Hardware and software technology that abstracts physical hardware from system services, OS, and applications. Can make one system appear to be many (server consolidation) or many systems appear to be single computing resource (grid/cluster). Goals: raw performance, scalability, reliability/availability, agility, consolidation.

### Application Virtualisation

Application-level virtualisation allowing software to run on variety of OS, hardware platforms, and devices. Usually means application uses application framework (Java, .NET). Advanced forms: restart on failure, start another instance if not meeting SLA, workload balancing among instances.

### Access Virtualisation

Hardware and software technology allowing nearly any device to access any application. Application sees device it's used to; device sees application it knows how to display. Special-purpose hardware may be used for performance. Example: VDI — Microsoft RDP, Citrix ICA.

### The Virtual Data Center — Ideal Architecture

```
Internet → Firewall → Outward facing Network
                      ↓
      Physical Hosts (running virtual workloads)
                      ↓
        Storage Layer    Internal Facing Network
```

Multi-site: Production DC (Sydney) ↔ DR DC (Melbourne) ↔ Branch DC (Shanghai) + Security Layer + Compute Layer + Storage Layer.

Non-virtualised physical workloads still exist alongside: IBM p, z, I series (mainframes), Sparc, ATM devices, legacy devices.

### Technologies in a Data Center

| Approach | Description | Trade-offs |
|----------|-------------|------------|
| **Separate Compute, Storage, Network** | Traditional — each layer separate equipment | Moderate entry cost, easy to scale, less integrated |
| **Data Center in a Box** (HP EcoPod) | Compute, storage, network in single or few racks | High entry cost, finite scaling, immediate use, mobile |
| **Converged Devices** (Nutanix) | Compute, storage, network in 2-4 rack units | Low entry cost, high scalability, mesh topology, used by Google |

### Virtualisation Platforms

| Platform | Characteristics |
|----------|----------------|
| **VMware** | Largest enterprise market share. Seamless uplift from physical layer. Automatic VM movement for LB/DR. Clone production for Dev/Test/DR. Supports all X86 OS. |
| **Hyper-V** | Growing enterprise market share. No support for uplifting from physical layer (cannot clone production). |
| **Amazon EC2** | "Holy Grail of enterprise" despite small market share. No automated support for physical uplift. |
| **Xen** | Open source, popular with Linux users in Asia. Supports all X86 OS. |
| **Virtual Box** | Open source, owned by Oracle. Only complete vertical offering (IaaS, PaaS, SaaS). Supports all X86 OS. |

### Migration Compatibility Matrix (Memorise)

| From ↓ / To → | VMware | Hyper-V | EC2 | Xen | VBox |
|---------------|--------|---------|-----|-----|------|
| VMware | — | Full Motion Compatible | Convert | Convert | Compatible |
| Hyper-V | Full Motion Compatible | — | Convert | Compatible | Convert |
| EC2 | Convert | Rebuild | — | Compatible | Convert |
| Xen | Rebuild | Rebuild | Compatible | — | Rebuild |
| VBox | Compatible | Convert | Rebuild | Compatible | — |

**Key insight:** VMware has broadest compatibility. EC2 and Hyper-V have limited external migration paths. AWS EC2 requires rebuild from most platforms.

### Considerations of Virtualising Data Center

| Consideration | Question |
|---------------|----------|
| Power | Will site have adequate electrical power? |
| Cooling | Will site have adequate concentrated cooling capacity? |
| Security | Will site have appropriate security facilities? |
| Backup | Will site have adequate utility backup? |
| Availability | Will consolidated/virtualised platform provide needed availability? |
| Skills | Will platform require new support tools and/or staff skills? |

**Key point:** Virtualisation concentrates workloads onto fewer physical servers — makes each server MORE critical. Power, cooling, backup become MORE important, not less.

---

## Key Takeaways

1. **Kusnetzky Model — 5 layers of virtualisation:** Network, Storage, Processing, Application, Access. Know each layer's definition and example standards.
2. **Why virtualise? Evolution:** Run multiple workloads → clone for DR/dev/test → workload mobilisation (no cloud without it).
3. **Three DC architecture approaches:** Separate (traditional, moderate cost, easy scale), DC in a box (EcoPod, high cost, finite scale), Converged (Nutanix, low entry cost, high scale, mesh).
4. **VMware vs Hyper-V vs EC2:** VMware = largest, supports physical uplift, most compatible. Hyper-V = growing, no physical uplift. EC2 = holy grail, no physical uplift, small market share but aspirational.
5. **Migration compatibility matrix** — know the key relationships: VMware↔Hyper-V = Full Motion Compatible; EC2 requires Convert/Rebuild from most; Xen↔EC2 = Compatible.
6. **Virtualisation makes physical infrastructure MORE critical** — power, cooling, backup more important when workloads concentrate on fewer servers.

---

## Related

- [[Week 05]] — full notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Week 05 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 04 Summary]] — Week 4 (network virtualisation connects here)
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 06 Summary]] — Week 6 (DC management)
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 01-03 Summary]] — foundation (virtualisation basics)
