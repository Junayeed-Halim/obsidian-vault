---
type: course
course: Cloud Computing
title: Week 04 Summary — Network Virtualization, NaaS
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 04 Summary — Network Virtualization, NaaS

> **Source:** [[Week 04]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Lecturer:** Haimin Zhang

---

## What We Covered

### Building IaaS Environment

Fundamental IT resources delivered in standard IaaS architecture:

- **Virtual server**
- **Cloud storage**
- **Virtual network**

Standardised configurations defined by: hardware, operating software/system, processors and memory, servers/cloud storage, virtualized network.

### Broadband Networks and Internet Architecture

- All cloud must be connected to a network
- Internetworks allow remote provisioning of IT resources — fundamental to cloud
- Internet's largest backbone networks established by ISPs, interconnected by routers connecting multinational networks

### Internet Structure: Network of Networks

| Tier | Description | Examples |
|------|-------------|----------|
| **Tier-1 ISPs** | Internet Backbone networks — international coverage. Top of hierarchy. | Verizon, Sprint, AT&T, Cable and Wireless |
| **Tier-2 ISPs** | Regional or national coverage. Peer with other Tier-2, purchase transit from Tier-1. | Regional providers |
| **Tier-3 ISPs** | Local network of an organisation with hosts connected to it. Last mile to end users. | Local providers, corporate networks |

### Network Virtualization

**Definition:** Creation of multiple virtual networks on the same physical substrate. Each virtual network is a collection of virtual nodes and virtual links, a subset of underlying physical network resources, co-existing with but isolated from other virtual networks.

### VMware Virtual Networking Concepts

**Virtual Network Adapter (vNIC):**
- Emulates a NIC in software — implements all NIC functions without real hardware
- Each vNIC has a unique MAC address
- Completely decoupled from hardware NIC

**Virtual Switch (vSwitch):**
- Software switch — forwards frames based on destination MAC
- Forwards frames between vNIC and pNIC (physical NIC)
- pNIC shared by all vNICs on same vSwitch
- Packet dispatched to: another VM's port (VM-VM, stays within host) OR uplink pNIC's port (VM-Uplink, goes to physical network)
- Optional: bandwidth management, security filters, uplink NIC teaming

**Virtual ports, Uplink ports, Uplinks:**
- Virtual ports: logical connection points among virtual devices and between virtual and physical devices
- Uplink ports: ports associated with physical adapters, connecting virtual network to physical network
- Uplinks: Physical Ethernet adapters as bridges between virtual and physical networks

### Data Center Network Design

**Before VMs — Physical rack design:**
- Top of Rack (ToR) switch: each rack (20-40 servers) has 48-port ToR switch
- Servers in rack connect to ToR switch
- Data centres don't rewire without good reason — physical wiring is static

**After VMs — Two problems:**

**Problem 1: Isolation**
- All VMs can talk to each other by default
- Engineering shouldn't be able to break finance network
- Compromised production website shouldn't allow stealing HR data
- Need: tenant/organisational isolation — different groups isolated on shared physical infrastructure

**Problem 2: Connectivity**
- VMs in same data centre can name each other by MAC address (L2 addresses)
- To access machines/VMs in another data centre, IP addresses (L3 addresses) must be used
- IP addresses must be globally routable
- Need: VMs in different DCs communicate — but L2 doesn't extend across DCs naturally

### Solution: Network Virtualization via Tunneling

**No tunnel:** Packet from VM to VM passes through switches, each switch looks at destination MAC — standard L2 forwarding within single L2 domain.

**Via tunnel:** Packet encapsulated — outer header carries physical network routing (L3), inner header carries original VM-to-VM L2 frame. Physical switches see only outer tunnel header.

**Encapsulation protocols:**

| Protocol | Description |
|----------|-------------|
| **NVGRE** (Network Virtualization using GRE) | Microsoft-led. GRE encapsulation. Guest VSID (Virtual Subnet ID) for segmentation. |
| **VXLAN** (Virtual eXtensible LAN) | Industry standard. UDP-based encapsulation of L2 frames. 24-bit VNI (16 million segments vs VLAN's 4096). Can extend across L3 boundaries. |

**VXLAN vs VLAN — key advantage:** VLAN limited to 12-bit = 4096 VLAN IDs. VXLAN uses 24-bit VNI = 16 million virtual networks. Critical for large cloud providers with many tenants.

### Overlay Network

Virtual overlay network = form of network virtualization creating virtual layer of network topologies on top of physical network infrastructure.

Protocols: VXLAN, NVGRE, GRE.

How it works: Overlay creates virtual network independent of physical topology. VMs see normal L2 network (MAC addressing). Underlay (physical) carries encapsulated traffic, routes on outer IP headers. Overlay decoupled from underlay — change physical network without affecting virtual networks.

### Reference Business Model

| Player | Role |
|--------|------|
| **Infrastructure Providers (InP)** | Manage physical infrastructure (DCs, physical networks, servers, storage) |
| **Service Providers (SP)** | Create virtual networks by aggregating resources from InPs. Sell virtual network services to end users |
| **End Users (U)** | Buy and use services from different service providers |
| **Brokers (B)** | Mediators between InP, SP, and U |

### Network-as-a-Service (NaaS)

Network capabilities delivered as on-demand cloud service over internet, with pay-per-use pricing. Consumers provision virtual networks, bandwidth, connectivity, network functions on demand. No need to own/manage physical network infrastructure.

**Reference:** Baroncelli, F., Martini, B., & Castoldi, P. (2010). Network virtualization for cloud computing. *Annals of Telecommunications*, 65(11-12), 713-721.

---

## Key Takeaways

1. **Network virtualisation solves two problems:** isolation (tenants separated on shared infra) and connectivity (extend L2 across L3 boundaries via tunnels).
2. **VXLAN is the key protocol.** Know: UDP encapsulation, 24-bit VNI (16 million segments), extends L2 across L3. Contrast with VLAN (12-bit, 4096 limit, no L3 extension).
3. **VMware virtual networking:** vNIC → virtual ports → vSwitch → (VM-VM or VM-Uplink) → pNIC → physical network. Port groups = labelled network segments.
4. **Overlay vs underlay:** Overlay = virtual network on top. Underlay = physical network carrying encapsulated traffic. Decoupled — change one without affecting the other.
5. **NaaS** = network as on-demand cloud service. Aligns with cloud computing model.

---

## Related

- [[Week 04]] — full notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Week 04 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 05 Summary]] — Week 5
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 01-03 Summary]] — foundation
