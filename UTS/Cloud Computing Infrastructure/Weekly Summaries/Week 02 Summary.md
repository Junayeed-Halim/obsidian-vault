---
type: course
course: Cloud Computing
title: Week 02 Summary — Cloud Infrastructure Design: Virtualisation Technologies
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 02 Summary — Cloud Infrastructure Design: Virtualisation Technologies

> **Source:** [[UTS/Cloud Computing Infrastructure/Lecture - Notes/Week 02]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Lecturer:** Haimin Zhang

---

## What We Covered

### Announcements

- **Assignment 1 released** — Due: Week 5, Friday 28 August 2026, 17:00. Weight: 20%. Late penalty: 20% per working day. Special consideration by Week 4 with formal documentation.

### Cloud Service Models — Deeper Treatment

- **IaaS:** Consumer uses virtual server. Provider gives contractual guarantees on capacity, performance, availability. Consumer responsible for OS+; provider for hardware+.
- **PaaS:** Consumer accesses ready-made environment, intentionally shielded from platform implementation details.
- **SaaS:** Consumer gets service contract but no access to underlying IT resources or implementation details.

### Infrastructure Components

| Layer | Components |
|-------|-----------|
| **Hardware** | Computing (servers, processors, memory), Storage (disks, SAN, NAS), Network (switches, routers, NICs) |
| **Software** | Virtualisation software (hypervisors, VMM) |

### Virtualisation — Four Types in Detail

1. **Processor virtualisation:** Processor shared across multiple application instances. Each VM gets vCPUs scheduled onto physical cores.
2. **Memory virtualisation:** Memory aggregated into a pool, managed on behalf of multiple apps. VM sees contiguous virtual memory; hypervisor maps to physical frames.
3. **Network virtualisation:** Virtual IP management and segmentation — logical networks decoupled from physical topology.
4. **Storage virtualisation:** Abstraction layer for physical storage — VM sees virtual disks, physical details hidden.

### Virtual Machines

- Isolated instances of app + guest OS running like separate computer
- Encapsulate virtual hardware, virtual disks, metadata
- Can connect to peripherals and function like physical computers

### Hypervisor (VMM) — In Depth

**Definition:** Manages guest OSs and their use of system resources (CPU, memory, storage). Supports isolation of multiple VMs.

**Resources provided to VMs:** Logical CPU/memory, logical storage blocks, logical network resources.

**Four functions of hypervisors:**
1. Creating and managing VMs
2. Allocating hardware resources to VMs from virtualised pool
3. Monitoring VM status
4. Moving VMs between systems (live migration / VMotion)

### Types of Hypervisors — MUST KNOW FOR EXAM

| | **Bare-metal / Type 1** | **Hosted / Type 2** |
|---|---|---|
| Runs on | Directly on hardware (no host OS) | On top of host OS |
| Examples | ESXi, Hyper-V (as role), Xen, KVM | VMware Workstation, VirtualBox |
| Performance | Higher — direct hardware access | Lower — goes through host OS |
| Use case | Production data centres, cloud | Desktop testing, development |
| Overhead | Minimal | More (host OS consumes resources) |

**Physical cloud architecture diagram:** Type 1 hypervisors on each physical server, all jointly controlled by VIM (vCenter). This is the production cloud model.

### Storage Hardware — Three Types

| Type | Full Name | Description | Connection |
|------|-----------|-------------|------------|
| **DAS** | Direct Attached Storage | Storage directly connected to server via HBA | Inside server or directly cabled |
| **NAS** | Network-Attached Storage | File-level storage accessed over network | Ethernet, NFS/SMB protocols |
| **SAN** | Storage Area Network | Block-level storage over dedicated storage network | Fibre Channel, iSCSI, FCoE, ATAoE |

### Storage Virtualisation

**Definition:** Presenting a logical view of physical storage resources as a single pool of storage.

**Two types:**
- **Block-level:** Abstraction below OS/file-system level
- **File-level:** Virtualisation at file-system level (NFS, SMB)

**Three methods:**
- **Network-based:** Appliance on network between servers and storage
- **Host-based:** Host OS/hypervisor manages virtualisation (e.g., VMFS, LVM)
- **Array-based:** Storage array itself provides virtualisation

### VMware Architecture

- **Storage:** VMs see virtual SCSI disks connected to vHBA. Disks provisioned from Datastores — abstraction hides physical storage type.
- **Network:** VMs communicate via vNIC (virtual NIC, unique MAC, decoupled from hardware NIC). Port groups aggregate ports under common configuration.

### Network Virtualisation

Entails virtual IP management and segmentation. Multiple virtual networks coexist on same physical infrastructure, each isolated from others. Enables multi-tenancy.

---

## Key Takeaways

1. **Hypervisor types are a guaranteed exam topic.** Type 1 = bare-metal production. Type 2 = hosted desktop/testing.
2. **DAS/NAS/SAN** — know the difference and when each is used. DAS = direct, NAS = file-level network, SAN = block-level network.
3. **Storage virtualisation types and methods** — block vs file level, network vs host vs array based.
4. **Hypervisor functions** — 4 functions: create/manage, allocate resources, monitor, move VMs.
5. **VMware architecture** — vNIC, vSwitch, port groups, Datastore abstraction. This is the example architecture used throughout the course.
6. **Network virtualisation** — enables multi-tenancy by creating isolated virtual networks on shared physical infrastructure.

---

## Connections to Other Weeks

- **Week 1** defined cloud, service models, NIST definition — Week 2 shows HOW cloud is built (virtualisation)
- **Week 3** extends to management mechanisms and cloud architectures — virtualisation is the foundation
- **Week 4** extends to network virtualisation specifically — VXLAN, overlay networks

---

## Related

- [[UTS/Cloud Computing Infrastructure/Lecture - Notes/Week 02]] — full notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Weeks 01-03 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 01-03 Summary]] — combined Weeks 1-3 summary
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 03 Summary]] — Week 3
