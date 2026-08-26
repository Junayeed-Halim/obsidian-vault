---
type: course
course: Cloud Computing
title: Quiz Prep - Week 04 — Network Virtualization, NaaS
status: ready
created: 2026-08-26
tags:
  - UTS
  - cloud
  - quiz
  - cloud-computing
  - quiz-prep
---

# Quiz Prep — Week 04: Network Virtualization, NaaS

> **Based on actual lecture content:** [[Week 04]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]

---

## Key Definitions — Memorise These

| Term | Definition |
|------|------------|
| **Network Virtualization** | Creation of multiple virtual networks on the same physical substrate. Each virtual network is a collection of virtual nodes and links, co-existing with but isolated from other virtual networks |
| **vNIC (Virtual Network Adapter)** | Software-emulated NIC. Has unique MAC address. Completely decoupled from physical hardware NIC |
| **vSwitch (Virtual Switch)** | Software switch. Forwards frames based on destination MAC. Forwards between vNICs (VM-VM) or to uplink pNIC (VM-Uplink) |
| **Overlay Network** | Virtual layer of network topologies on top of physical network infrastructure. Protocols: VXLAN, NVGRE, GRE |
| **VXLAN** | Virtual eXtensible LAN — UDP-based encapsulation of L2 frames. Uses 24-bit VNI (16 million segments). Extends L2 across L3 boundaries |
| **NVGRE** | Network Virtualization using GRE — Microsoft-led protocol. GRE encapsulation with Guest VSID for segmentation |
| **NaaS** | Network-as-a-Service — network capabilities delivered as on-demand cloud service over internet, with pay-per-use pricing |
| **Tier-1 ISP** | Internet Backbone network — international coverage. Top of hierarchy. Examples: Verizon, AT&T, Sprint |
| **Tier-2 ISP** | Regional or national coverage. Peers with other Tier-2, purchases transit from Tier-1 |
| **Tier-3 ISP** | Local network of an organisation with hosts connected. Last mile to end users |

---

## Practice Questions

### Q1 — Network Virtualisation Definition

**Define network virtualisation. What are the three key properties of each virtual network created by network virtualisation?**

<details>
<summary>Answer</summary>

**Definition:** Network virtualisation allows the creation of multiple virtual networks on the same substrate (physical network infrastructure).

**Three key properties of each virtual network:**
1. Is a **collection of virtual nodes and virtual links**
2. Is a **subset of underlying physical network resources**
3. **Co-exists with, but is isolated from**, other virtual networks

These properties enable multi-tenancy — different customers/organisations get their own virtual network, isolated from others, on shared physical infrastructure.
</details>

---

### Q2 — Two Problems Solved by Network Virtualisation

**Network virtualisation solves two fundamental problems in data centres with VMs. What are these two problems and how does network virtualisation solve each?**

<details>
<summary>Answer</summary>

**Problem 1: Isolation**
- **The problem:** All VMs can talk to each other by default on the same network. You don't want engineering to be able to break the finance network. You don't want a compromised production web server to allow stealing HR data.
- **The solution:** Network virtualisation creates isolated virtual networks — each tenant/organisation gets their own virtual network identified by a VNI (VXLAN) or VSID (NVGRE). VMs in different virtual networks cannot communicate, even though they share the same physical infrastructure.

**Problem 2: Connectivity**
- **The problem:** VMs in the same data centre can communicate via MAC addresses (L2). But VMs in different data centres need IP addresses (L3) which must be globally routable. L2 doesn't naturally extend across data centres.
- **The solution:** Tunneling — encapsulate the L2 frame inside an L3 tunnel. The outer header carries physical network routing information; the inner header carries the original L2 frame. This extends L2 connectivity across L3 boundaries (across data centres).

**Key insight:** Network virtualisation solves isolation via segmentation (VNI/VSID) and connectivity via tunneling (encapsulation).
</details>

---

### Q3 — VXLAN vs VLAN

**Explain the key differences between VXLAN and VLAN. Why is VXLAN preferred in large cloud environments?**

<details>
<summary>Answer</summary>

| Feature | VLAN | VXLAN |
|---------|------|-------|
| **Segmentation ID** | 12-bit (4096 VLAN IDs) | 24-bit VNI (16 million segments) |
| **Encapsulation** | Tag added to Ethernet frame header | Full encapsulation — original L2 frame inside UDP packet |
| **Scope** | Single L2 domain — cannot extend across L3 boundaries | Can extend L2 across L3 boundaries (across data centres, across subnets) |
| **Standard** | IEEE 802.1Q | Industry standard (IETF, VMware, Citrix, etc.) |

**Why VXLAN is preferred in large cloud environments:**
1. **Scalability:** 16 million segments vs 4096 — large cloud providers with thousands of tenants need this
2. **L2 extension:** Can stretch a tenant's L2 network across multiple data centres or physical locations, which VLAN cannot do
3. **Encapsulation:** The overlay is decoupled from the underlay — the physical network only needs to route IP packets, not understand VM MAC addresses

VLAN is fine for small environments but fundamentally limited for large-scale multi-tenant cloud.
</details>

---

### Q4 — VMware Virtual Networking

**Describe the path a packet takes when a VM communicates with another VM on the same physical host. What about when it communicates with a VM on a different physical host?**

<details>
<summary>Answer</summary>

**VM to VM on same physical host:**
1. Source VM sends frame via its vNIC
2. vNIC passes frame to vSwitch via a virtual port
3. vSwitch reads the destination MAC address
4. vSwitch forwards the frame directly to the destination VM's virtual port
5. Destination VM receives the frame via its vNIC
6. **The packet never leaves the host** — no physical network involvement

**VM to VM on different physical host:**
1. Source VM sends frame via its vNIC
2. vSwitch reads destination MAC, determines destination is on another host
3. vSwitch forwards frame to the **uplink port** connected to the physical NIC (pNIC)
4. pNIC sends the frame out to the physical network
5. Physical switches route the frame to the destination host's pNIC
6. Destination host's vSwitch receives frame via uplink, forwards to destination VM's virtual port
7. Destination VM receives the frame via its vNIC

**Key concept:** VM-VM on same host = entirely in software, no physical network. VM-VM across hosts = uses physical network (but with virtualisation/tunneling, the physical network sees encapsulated packets, not raw VM traffic).
</details>

---

### Q5 — Overlay Network

**Explain what an overlay network is. How does it relate to the underlay network? Why is the decoupling beneficial?**

<details>
<summary>Answer</summary>

**Overlay network:** A virtual layer of network topologies created on top of a physical network infrastructure. It's a form of network virtualisation. Protocols include VXLAN, NVGRE, GRE.

**How it relates to underlay:**
- The **underlay** is the physical network — routers, switches, physical cables
- The **overlay** is the virtual network — VMs see this as their network (L2 adjacency, MAC addresses)
- Traffic in the overlay is **encapsulated** — the original L2 frame is wrapped in an outer header (L3 + tunnel protocol) for transport across the underlay
- The underlay routes based on the outer header only — it doesn't know about the VMs inside

**Why decoupling is beneficial:**
1. **Independence:** You can change the physical network (add routers, restructure, upgrade) without affecting the virtual networks. The overlay is unaware of underlay changes.
2. **Scalability:** The physical network only needs to carry IP packets between tunnel endpoints — it doesn't need to know about thousands of VM MAC addresses.
3. **Multi-tenancy:** Each overlay is isolated by its VNI/VSID. The physical network carries all overlays simultaneously without understanding their contents.
4. **Flexibility:** You can create, move, or destroy virtual networks without touching the physical infrastructure — just change the tunnel endpoints and VNI assignments.
</details>

---

### Q6 — NaaS

**What is Network-as-a-Service (NaaS)? How does it fit into the cloud computing model?**

<details>
<summary>Answer</summary>

**NaaS (Network-as-a-Service)** is the cloud delivery model for networking — network capabilities are delivered as a service over the internet, on-demand, with pay-per-use pricing.

**What consumers can do with NaaS:**
- Provision virtual networks on demand
- Allocate bandwidth
- Set up connectivity between sites
- Deploy network functions (firewalls, load balancers, VPN gateways) as services

**How it fits the cloud computing model:**
- **On-demand self-service:** Consumers provision network resources without human interaction with the provider
- **Broad network access:** Network services accessed over the network
- **Resource pooling:** Provider's network resources pooled and dynamically assigned
- **Rapid elasticity:** Network capacity scales with demand
- **Measured service:** Pay-per-use — consumers pay for what they use

**Difference from traditional networking:** Instead of buying and managing physical routers, switches, and cables, consumers consume network capabilities as a service. This aligns with the broader cloud computing shift from CapEx (buying hardware) to OpEx (paying for services).

**Reference:** Baroncelli, F., Martini, B., & Castoldi, P. (2010). Network virtualization for cloud computing. *Annals of Telecommunications*, 65(11-12), 713-721.
</details>

---

### Q7 — ISP Hierarchy

**Explain the three tiers of Internet Service Providers. How do they relate to each other?**

<details>
<summary>Answer</summary>

**Tier-1 ISPs:**
- Internet Backbone networks — the top of the hierarchy
- Have international coverage
- Do NOT need to purchase transit from anyone — they form the core of the internet
- Examples: Verizon, Sprint, AT&T, Cable and Wireless
- Their networks are strategically interconnected by routers

**Tier-2 ISPs:**
- Regional or national coverage
- Peer with other Tier-2 ISPs (exchange traffic directly)
- Purchase transit from Tier-1 ISPs to reach the global internet (for destinations they can't reach via peering)
- Examples: Regional telecommunications companies

**Tier-3 ISPs:**
- The local network of an organisation
- Have hosts connected to them — the "last mile"
- Purchase transit from Tier-2 (or sometimes Tier-1) ISPs
- Examples: Local ISPs, corporate networks, university networks

**Relationship:** Traffic flows upward to reach far destinations. A Tier-3 ISP sends traffic to a Tier-2, which may send to a Tier-1 to reach international destinations. Tier-1 forms the backbone core. This is why the internet is called a "network of networks" — it's a hierarchy of interconnected ISP networks.
</details>

---

### Q8 — Data Center Network Design Problems

**Before VMs, data centre network design was straightforward. After VMs were introduced, two fundamental problems emerged. Describe both problems and explain why they matter.**

<details>
<summary>Answer</summary>

**Problem 1: Isolation**
- **Before VMs:** Physical servers were separate — the finance server physically couldn't talk to the engineering server unless you explicitly connected them. Isolation was physical.
- **After VMs:** All VMs on the same physical host (and same virtual network) can talk to each other by default. If engineering and finance are VMs on the same host, engineering can access finance unless virtual networks are used to isolate them.
- **Why it matters:** Security and compliance — you must prevent unauthorised access between different departments/tenants. A compromised VM in one group shouldn't be able to attack VMs in another group. Network virtualisation with VNI/VSID segmentation solves this.

**Problem 2: Connectivity**
- **Before VMs:** Physical servers in different data centres communicate via IP (L3) — routers handle this naturally.
- **After VMs:** VMs in the same data centre communicate via MAC (L2) because they're on the same virtual L2 network. But VMs in different data centres need to communicate too. L2 doesn't naturally extend across data centres — you need L3 (IP) for that, and IP addresses must be globally routable.
- **Why it matters:** Modern applications span multiple data centres — for redundancy, performance (serve users from nearest DC), or cloud bursting. VMs need to communicate across DCs as if they were on the same L2 network. Tunneling (VXLAN) solves this by encapsulating L2 frames in L3 tunnels, extending L2 across L3 boundaries.
</details>

---

## Exam Tips

- **VXLAN vs VLAN** — know the numbers (12-bit/4096 vs 24-bit/16 million) and the encapsulation difference
- **Two problems** — isolation and connectivity. Know what each problem is and how network virtualisation solves it
- **Overlay vs underlay** — understand the decoupling and why it's beneficial
- **vNIC → vSwitch → pNIC path** — know the packet flow for same-host vs cross-host VM communication
- **ISP tiers** — know the hierarchy and relationships
- **NaaS** — understand how it fits the cloud computing model (on-demand, pay-per-use, etc.)

---

## Related

- [[Week 04]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 04 Summary]] — summary
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
