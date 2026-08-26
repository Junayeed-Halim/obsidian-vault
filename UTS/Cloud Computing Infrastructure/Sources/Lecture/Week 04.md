---
type: lecture-notes
course: Cloud Computing
title: Week 04 — Cloud Infrastructure Design: Network Virtualization, NaaS
status: processed
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-04
  - exam-prep
---

# Week 04 — Cloud Infrastructure Design: Network Virtualization, NaaS

> **Source:** [[Week4_CloudLecture-5.pdf]]
> **Lecturer:** Haimin Zhang
> **Status:** Processed from PDF — exam-ready notes

---

## Contents (from slide)

1. Building IaaS Environment
2. Broadband Networks and Internet Architecture
3. Internet structure: Network of Networks
4. Network Virtualization
   - VMware Virtual Networking Concepts
5. Data Center Network Design
   - Problems: Isolation, Connectivity
   - Solution: Network Virtualization (Tunneling)
     - VXLAN
6. Overlay Network
7. Reference Business Model
8. NaaS (Network-as-a-Service)

---

## 1. Building IaaS Environment

Fundamental IT resources delivered as part of a standard architecture within an IaaS environment:

- **Virtual server**
- **Cloud storage**
- **Virtual network**

These are offered in various standardized configurations defined by:

| Property | Description |
|----------|-------------|
| **Hardware** | Physical server specs, storage devices, network equipment |
| **Operating software / system** | OS, hypervisor, virtualisation layer |
| **Processors and memory** | CPU count, type, RAM size |
| **Servers and/or cloud storage** | Compute capacity, storage capacity |
| **Virtualized network** | vNICs, vSwitches, virtual networks |

---

## 2. Broadband Networks and Internet Architecture

**Key principle:** All cloud must be connected to a network.

- Internetworks (the internet) allow for the **remote provisioning of IT resources** — this is fundamental to cloud
- Internet's largest backbone networks are established by **ISPs** (Internet Service Providers)
- These backbone networks are **strategically interconnected by routers** that connect the world's multinational networks

---

## 3. Internet Structure: Network of Networks

The internet is a hierarchy of ISPs:

| Tier | Description | Examples |
|------|-------------|----------|
| **Tier-1 ISPs** | Internet Backbone networks — international coverage. Understand as the top of the hierarchy. No need to purchase transit from anyone; they form the core. | Verizon, Sprint, AT&T, Cable and Wireless |
| **Tier-2 ISPs** | Regional or national coverage. Peer with other Tier-2 ISPs and purchase transit from Tier-1 ISPs to reach the global internet. | Regional providers |
| **Tier-3 ISPs** | The local network of an organisation which has hosts connected to it. The "last mile" — connects end users/organisations to the wider internet. | Local providers, corporate networks |

**Key concept:** The internet is a **network of networks** — a hierarchy of interconnected ISP networks, each tier providing connectivity to the tier below and purchasing connectivity from the tier above (except Tier-1 which forms the backbone core).

---

## 4. Physical Network Foundations

### Physical Networking on a Host

```
OS runs on the bare-metal hardware
  → TCP/IP Networking stack
    → Network device driver
      → Network interface card (NIC)
        → Ethernet: Unique MAC address (6 bytes, e.g., 00:A0:C9:A8:70:15)
```

### Switching

- A **switch** is a device that connects multiple network segments
- Each Ethernet frame contains a **destination and a source MAC address**
- When a port receives a frame, it reads the frame's **destination MAC address** and forwards it to the appropriate port

---

## 5. Network Virtualization

### Definition

Network virtualization allows the creation of **multiple virtual networks on the same substrate** (physical network infrastructure).

Each virtual network:
- Is a collection of **virtual nodes and virtual links**
- Is a **subset of underlying physical network resources**
- **Co-exists with, but is isolated from**, other virtual networks

### VMware Virtual Networking Concepts

#### Virtual Network Adapter (vNIC)

- **What it implements:** Emulates a NIC in software — implements all functions and resources of a NIC even though there is no real hardware
- **Each vNIC has a unique MAC address** — like a physical NIC
- vNICs are **completely decoupled from hardware NIC** — they don't depend on specific physical hardware

#### Virtual Switch (vSwitch)

- **Software switch implementation** — forwards frames based on destination MAC address
- vSwitch forwards frames between the **vNIC and pNIC** (physical NIC)
- **pNIC is shared by all vNICs on the same vSwitch**
- A packet can be dispatched to either:
  - Another VM's port (**VM-VM communication** — stays within the host, never leaves)
  - The uplink pNIC's port (**VM-Uplink** — goes out to the physical network)
- Optional features: bandwidth management, security filters, and uplink NIC teaming

#### Virtual Ports, Uplink Ports, Uplinks

- **Virtual ports** on a virtual switch provide logical connection points among virtual devices and between virtual and physical devices
- **Uplink ports** are ports associated with physical adapters, providing a connection between a virtual network and a physical network
- **Uplinks:** Physical Ethernet adapters serve as bridges between virtual and physical networks

### VMware Network Architecture

(VMware Virtual Networking Concepts — Information Guide)

The architecture layers:
- VMs with vNICs connect to vSwitches via virtual ports
- vSwitches forward traffic between vNICs (VM-to-VM) or to uplink ports (VM-to-physical)
- Uplinks (physical NICs) bridge to the physical network
- Port groups provide labelled, configured network segments

---

## 6. Data Center Network Design

### Before VMs: Physical Rack Design

- **"Top of Rack" (ToR) switch:** Each rack (20-40 servers) has a 48-port ToR switch at the top
- Servers in a rack connect to the ToR switch
- Data centres do not rewire their networks without a really good reason — physical wiring is static
- Has "front of rack" (server faces) and "rear of rack" (networking/uplinks)

### After VMs: The Problem

When VMs are introduced into data centre network design, two fundamental problems emerge:

#### Problem 1: Isolation

- **All VMs can talk to each other by default** — they're on the same virtual network
- You don't want someone in **engineering screwing up the finance network**
- You don't want a break-in to your **production website** to allow stealing **human resources data**
- **Need:** Tenant/organisational isolation — different groups must be isolated from each other even though they share the same physical infrastructure

#### Problem 2: Connectivity

- VMs in the same data centre can name each other by their **MAC address (L2 addresses)** — they're on the same Layer 2 network
- To access machines or VMs in **another data centre**, **IP addresses (L3 addresses)** must be used
- Those IP addresses have to be **globally routable**
- **Need:** VMs in different data centres (or different L2 domains) must be able to communicate — but L2 doesn't extend across data centres naturally

---

## 7. Solution: Network Virtualization via Tunneling

### Path of a Packet — No Tunnel

- Packet from one VM to another passes through a number of switches along the way
- Each switch only looks at the **destination MAC address** to decide where the packet should go
- Standard L2 forwarding — works fine within a single L2 domain

### Path of a Packet — Via Tunnel

- When VMs are on different physical hosts or different data centres, the packet is **encapsulated** in a tunnel
- The outer header carries the physical network routing information (L3)
- The inner header carries the original VM-to-VM L2 frame
- Switches in the physical network only see the outer tunnel header — they don't need to know about the VMs

### Packet Encapsulation

Two main encapsulation protocols for network virtualisation:

| Protocol | Description |
|----------|-------------|
| **NVGRE (Network Virtualization using GRE)** | Microsoft-led protocol. Uses GRE (Generic Routing Encapsulation) to encapsulate the original frame. NVGRE header carries a Guest VSID (Virtual Subnet ID) for segmentation. |
| **VXLAN (Virtual eXtensible LAN)** | VMware/Citrix/industry standard. Encapsulates the original L2 frame in a UDP packet. VXLAN Network Identifier (VNI) provides 24-bit segmentation (16 million segments vs VLAN's 12-bit/4096). |

**Key advantage of VXLAN over VLAN:** VLAN is limited to 12 bits = 4096 VLAN IDs. VXLAN uses 24-bit VNI = 16 million virtual networks. This is critical for large cloud providers with many tenants.

---

## 8. Overlay Network

**Definition:** A virtual overlay network is a form of network virtualization that creates a virtual layer of network topologies on top of a physical network infrastructure.

**Overlay network protocols include:**
- **VXLAN** (Virtual eXtensible LAN)
- **NVGRE** (Network Virtualization using Generic Encapsulation)
- **GRE** (Generic Routing Encapsulation)

**How it works:**
- The overlay creates a virtual network that is independent of the underlying physical topology
- VMs believe they're on a normal L2 network — they see each other via MAC addresses
- The underlay (physical network) carries the encapsulated traffic — only needs to route based on outer IP headers
- The overlay is **decoupled** from the underlay — you can change the physical network without affecting the virtual networks

**Why overlay matters:**
- Solves the **isolation problem** — each overlay is a separate virtual network, isolated by VNI/VSID
- Solves the **connectivity problem** — overlays can extend across data centres (the physical network carries the tunnels, and L2 is preserved inside the tunnel)

---

## 9. Reference Business Model

The network virtualisation market has four players:

| Player | Role |
|--------|------|
| **Infrastructure Providers (InP)** | Manage the physical infrastructure — the data centres, physical networks, servers, storage |
| **Service Providers (SP)** | Create virtual networks by aggregating resources from InPs — sell virtual network services to end users |
| **End Users (U)** | Buy and use services from different service providers |
| **Brokers (B)** | Act as mediators between InP, SP, and U — help match supply and demand, negotiate |

**Relationship:** InP provides the raw physical infrastructure → SP creates virtual networks on top → End Users consume those virtual networks → Brokers mediate the relationships

---

## 10. Network-as-a-Service (NaaS)

Network-as-a-Service is the cloud delivery model for networking — network capabilities are delivered as a service over the internet, on-demand, with pay-per-use pricing.

**Key characteristics:**
- Consumers can provision virtual networks, bandwidth, connectivity, and network functions on demand
- No need to own or manage physical network infrastructure
- Differentiates from traditional network procurement (buying routers, switches, cables)
- Aligns with the cloud computing model: on-demand, scalable, measured service

**Reference:** Baroncelli, F., Martini, B., & Castoldi, P. (2010). Network virtualization for cloud computing. *Annals of Telecommunications — Annales des télécommunications*, 65(11-12), 713-721.

---

## Exam-Ready Summary — Week 4

### Key Definitions

- **Network virtualization:** Creating multiple virtual networks on the same physical substrate. Each virtual network is a collection of virtual nodes and links, isolated from others, co-existing on shared physical resources.
- **vNIC (Virtual Network Adapter):** Software-emulated NIC. Has unique MAC address. Completely decoupled from physical hardware NIC.
- **vSwitch (Virtual Switch):** Software switch. Forwards frames based on destination MAC. Forwards between vNICs (VM-VM) or to uplink pNIC (VM-Uplink).
- **Overlay network:** Virtual layer of network topologies on top of physical network infrastructure. Protocols: VXLAN, NVGRE, GRE.
- **VXLAN:** Virtual eXtensible LAN. UDP-based encapsulation of L2 frames. Uses 24-bit VNI (16 million segments). Solves VLAN's 4096 limit.
- **NaaS:** Network-as-a-Service — network capabilities delivered as on-demand cloud service.

### The Two Problems (and the solution)

| Problem | Description | Solution |
|---------|-------------|----------|
| **Isolation** | All VMs can talk by default — engineering can break finance, compromised web server can access HR data | Network virtualization — each virtual network is isolated by VNI/VSID, separate segments |
| **Connectivity** | VMs in same DC use L2 (MAC). VMs in different DCs need L3 (IP) which must be globally routable | Tunneling — encapsulate L2 frame in L3 tunnel, extend L2 across DCs over the physical underlay |

### ISP Hierarchy

- **Tier-1:** Internet backbone, international, no transit purchase (Verizon, AT&T)
- **Tier-2:** Regional/national, peer with other Tier-2, purchase from Tier-1
- **Tier-3:** Local/organisation network, last mile to end users

### VXLAN vs VLAN

| | VLAN | VXLAN |
|---|---|---|
| Segmentation ID | 12-bit (4096) | 24-bit (16 million) |
| Encapsulation | No (tag on frame) | Yes (UDP + VXLAN header) |
| Scope | Single L2 domain | Can extend across L3 boundaries (across DCs) |
| Standard | IEEE 802.1Q | IETF / industry standard |

### VMware Virtual Networking Components

- vNIC → virtual ports → vSwitch → (VM-VM or VM-Uplink) → pNIC → physical network
- Port groups: labelled network segments with common configuration
- Uplinks: physical NICs bridging virtual to physical

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]] — Weeks 1-3 foundation (virtualisation basics, hypervisors, storage)
- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 05]] — Week 5 data centre virtualisation (extends network virtualisation to full DC)
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Week 04 Quiz Prep]] — practice questions
