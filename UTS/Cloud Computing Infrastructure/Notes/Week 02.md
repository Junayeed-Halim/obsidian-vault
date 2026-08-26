---
type: lecture-notes
course: Cloud Computing
title: Week 02 — Cloud Infrastructure Design: Virtualisation Technologies
status: processed
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-02
  - exam-prep
---

# Week 02 — Cloud Infrastructure Design: Virtualisation Technologies

> **Source:** [[Week2_CloudLecture-5.pdf]]
> **Lecturer:** Haimin Zhang
> **Status:** Processed from PDF — exam-ready notes

---

## Announcements from Lecture

- **Assignment 1 is released.** Due: Week 5, Friday 28 August 2026, 17:00. Weight: 20%.
- Late penalty: 20% per working day.
- Special consideration for late submission must be arranged by **Week 4** with formal documentation.

---

## Definitions and Examples of Cloud Service Models

(Revisited from Week 1 — deeper treatment)

### IaaS
Cloud consumer uses a virtual server within an IaaS environment. Cloud consumers are provided with a range of contractual guarantees by the cloud provider, pertaining to characteristics such as **capacity, performance, and availability**.

### PaaS
Cloud consumer accesses a ready-made PaaS environment. The consumer is intentionally **shielded from the implementation details** of the platform.

### SaaS
Cloud service consumer is given access to the cloud service contract, but **not to any underlying IT resources or implementation details**.

---

## Infrastructure Components

### Hardware Layer
Three categories:
1. **Computing** — servers, processors, memory
2. **Storage** — disks, SAN, NAS
3. **Network** — switches, routers, NICs

### Software Layer
Two categories:
1. **Virtualisation Software** — hypervisors, VMM
2. **VMM (Virtual Machine Monitor)** — the software layer that creates and runs VMs

---

## Virtualisation — Deep Dive

### Definition
Abstraction of computer resources. Goal: collaboratively utilise IT resources to the maximum level and reduce the cost of IT resources.

### Four Types of Virtualisation

**1. Processor Virtualisation**
- Enables a processor to be shared across multiple application instances
- Each VM gets virtual CPUs (vCPUs) that are scheduled onto physical cores by the hypervisor
- Allows consolidation of multiple workloads on a single physical processor

**2. Memory Virtualisation**
- Aggregates memory resources into a pool of single memory
- Manages memory on behalf of multiple applications using it
- VM sees contiguous virtual memory; hypervisor maps virtual pages to physical frames, possibly across NUMA nodes

**3. Network Virtualisation**
- Entails virtual IP management and segmentation
- Creates virtual networks decoupled from physical network topology
- Enables multiple virtual networks to coexist on the same physical infrastructure

**4. Storage Virtualisation**
- Provides a layer of abstraction for the physical storage of data
- VM sees virtual disks; physical storage details hidden

---

## Virtual Machines (Virtual Servers)

- VMs are **isolated instances** of application software and guest operating system that run like a separate computer
- A VM **encapsulates** the virtual hardware, virtual disks, and the metadata associated with the application
- VMs can connect to peripheral devices and function just like physical computers
- Each VM has its own identity — separate IP, MAC, OS, disk, resources

---

## Hypervisor (VMM) — Detailed

**Definition:** The hypervisor is responsible for managing the applications' OSs (guest OSs) and their use of the system resources (CPU, memory, storage). It supports isolation and manages multiple VMs running on the same host computer.

**Resources provided to VMs:**
- Logical CPU and memory
- Logical storage blocks
- Logical network resources

**Functions of Hypervisors:**
1. Creating and managing VMs
2. Allocating "hardware resources" to VMs from the virtualized pool of hardware resources belonging to the physical server
3. Monitoring the status of the VMs
4. Taking part in the movement of VMs from one system to another (live migration / VMotion)

### Types of Hypervisors — MUST KNOW

```
Bare-metal / Type 1 Hypervisor          Hosted / Type 2 Hypervisor
=========================               =========================
Runs directly on hardware              Runs on top of a host OS
No host OS needed                      Host OS consumes resources
Examples: ESXi, Hyper-V, Xen, KVM     Examples: VMware Workstation, VirtualBox
Higher performance                    Lower performance (extra layer)
Production/cloud use                  Desktop/testing use
Minimal overhead                      More overhead
```

**Exam tip:** The physical topology diagram shows Type 1 hypervisors on each physical server, all controlled by a VIM (vCenter). This is the production cloud architecture.

---

## Typical Cloud Architecture

Components:
- **Virtual machines** — the workloads running on hypervisors
- **Hypervisor** — virtualisation layer on each physical server
- **Physical Servers** — actual hardware
- **Networks** — connect servers, VMs, storage
- **SAN Storage** — shared storage across all servers
- **VIM (Virtual Infrastructure Manager / Hypervisor manager)** — jointly controls all hypervisors across servers

Key concept: Virtual servers are created via individual hypervisors on individual physical servers. All three hypervisors are jointly controlled by the same VIM.

---

## Storage Hardware — Three Types

### DAS (Direct Attached Storage)
- Storage system **directly connected** to a computing IT resource (physical server) using a host bus adapter (HBA)
- Simplest form — inside the server or directly cabled
- No network involved — not shareable across servers without additional software

### NAS (Network-Attached Storage)
- File-level storage accessed over the network
- Uses standard network protocols (NFS, SMB/CIFS)
- Multiple servers can access the same NAS simultaneously (file-level sharing)

### SAN (Storage Area Network)
- Block-level storage accessed over a dedicated storage network
- Uses Fibre Channel, iSCSI, FCoE, ATAoE
- Presents storage as raw blocks — OS sees it as a disk
- High performance, low latency, dedicated network
- Multiple servers can access the same SAN (but typically each gets its own LUNs)

---

## Storage Virtualisation

**Definition:** "The process of presenting a logical view of the physical storage resources to a host computer system, treating all storage media (hard disk, optical disk, tape, etc.) in the enterprise as a single pool of storage."

### Two Types
1. **Block-level virtualisation:** Abstraction of logical storage below the OS or file-system level. Presents logical blocks that map to physical blocks.
2. **File-level virtualisation:** Virtualisation at the file-system level, typically using a network file system (NFS, SMB).

### Three Methods
1. **Network-based:** Storage virtualisation appliance sits on the network between servers and storage devices. All storage appears to come from the appliance.
2. **Host-based:** The host OS or hypervisor manages the virtualisation. Example: VMware's VMFS, Linux LVM.
3. **Array-based:** The storage array itself provides virtualisation. The array manages multiple physical disks as a single pool and presents logical volumes.

---

## VMware Infrastructure Storage Architecture

- Storage is presented to VMs as **virtual SCSI disks** connected to a **virtual Host Bus Adapter (vHBA)**
- Virtual SCSI disks inside VMs are provisioned from **Datastore** elements in the data centre
- Datastores are abstractions — the VM doesn't know whether its disk is on DAS, NAS, or SAN
- The storage architecture consists of layers of abstraction that hide and manage the complexity and differences among physical storage subsystems

---

## VMware Network Architecture

- VMs in a datacentre are like physical machines which are networked in a physical environment
- Guest OS and application programs communicate with a **virtual NIC (vNIC)** through either commonly available device drivers or VMware device drivers optimised for the virtual environment
- **Port groups** aggregate multiple ports under a common configuration and provide a stable anchor point for virtual machines connecting to labelled networks

---

## Network Virtualisation

**Definition:** "Enables a processor to be shared across multiple application instances" — wait, that's processor virtualisation. Network virtualisation entails **virtual IP management and segmentation**.

Key properties:
- Multiple virtual networks can coexist on the same physical infrastructure
- Each virtual network is isolated from others
- Virtual networks are decoupled from physical network topology
- Enables multi-tenancy — different customers/organisations get their own virtual network

---

## Exam-Ready Summary — Week 2

### Definitions to Memorise

- **Virtualisation:** Abstraction of computer resources to maximise utilisation and reduce cost
- **Hypervisor (VMM):** Manages guest OSs and their use of system resources; supports isolation of multiple VMs
- **Type 1 (Bare-metal):** Runs directly on hardware, no host OS (ESXi, Hyper-V)
- **Type 2 (Hosted):** Runs on top of host OS (VirtualBox, VMware Workstation)
- **DAS:** Direct Attached Storage — storage directly connected to a server via HBA
- **NAS:** Network-Attached Storage — file-level storage over network
- **SAN:** Storage Area Network — block-level storage over dedicated network (Fibre Channel, iSCSI)
- **Storage virtualisation:** Presenting a logical view of physical storage as a single pool

### Storage Virtualisation Types

- **Block-level:** Below OS/file-system
- **File-level:** At file-system level (NFS, SMB)
- **Methods:** Network-based, Host-based, Array-based

### Hypervisor Functions (4)

1. Creating and managing VMs
2. Allocating hardware resources to VMs from virtualised pool
3. Monitoring VM status
4. VM movement between systems (live migration)

---

## Related

- [[Week 01-03]] — Weeks 1-3 foundation
- [[UTS/Cloud Computing Infrastructure/Notes/Week 03]] — Week 3 management mechanisms
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Weeks 01-03 Quiz Prep]] — practice questions
