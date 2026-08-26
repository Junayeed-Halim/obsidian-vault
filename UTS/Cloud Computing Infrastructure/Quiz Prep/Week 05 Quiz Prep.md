---
type: course
course: Cloud Computing
title: Quiz Prep - Week 05 — Data Centre Fundamentals and Virtualisations
status: ready
created: 2026-08-26
tags:
  - UTS
  - cloud
  - quiz
  - cloud-computing
  - quiz-prep
---

# Quiz Prep — Week 05: Data Centre Fundamentals and Virtualisations

> **Based on actual lecture content:** [[Week 05]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]

---

## Key Definitions — Memorise These

| Term | Definition |
|------|------------|
| **Data Center** | Facility that houses critical computing resources in controlled environments under centralized management |
| **Kusnetzky Group Model** | 5-layer virtualisation taxonomy: Network, Storage, Processing, Application, Access |
| **SAN (Storage Area Network)** | Storage device accessed over a storage network; virtualises physical disks into logical volumes (LUNs) |
| **Block-level virtualisation** | Abstraction of logical storage below the OS or file-system level |
| **File-level virtualisation** | Virtualisation at the file-system level, typically using a network file system (NFS, SMB) |
| **Processing virtualisation** | Hardware and software technology that abstracts physical hardware from system services, OS, and applications |
| **Application virtualisation** | Application-level virtualisation allowing software to run on variety of OS, hardware platforms, and devices |
| **Access virtualisation** | Technology allowing nearly any device to access any application without knowing about the other |
| **Workload mobilisation** | The ability to move/clone workloads — without it there is no Cloud |
| **VDI (Virtual Desktop Infrastructure)** | Access virtualisation using protocols like Microsoft RDP or Citrix ICA |
| **Converged infrastructure** | Compute, storage, and network in integrated units (e.g., Nutanix) |
| **DC in a Box** | All-in-one rack solution (e.g., HP EcoPod) |

---

## Practice Questions

### Q1 — Data Center Definition

**Define "data center" and list 5 types of computing resources typically housed in one.**

<details>
<summary>Answer</summary>

**Definition:** A data center is a facility that houses critical computing resources in controlled environments and under centralized management.

**5 types of computing resources:**
1. Mainframes
2. Web and application servers
3. File and print servers
4. Messaging servers
5. Application software and the operating systems that run them
6. Storage subsystems
7. Network infrastructure

(Any 5 of these — the lecture lists all of them.)
</details>

---

### Q2 — Data Center Design Criteria

**List 5 design criteria for a data center. Why might these criteria conflict with each other?**

<details>
<summary>Answer</summary>

**5 design criteria:**
1. **Availability** — how accessible are services (uptime, redundancy)
2. **Scalability** — how easily can the DC grow
3. **Security** — physical and logical security, access control
4. **Performance** — throughput, latency, I/O
5. **Manageability** — how easy to operate, monitor, automate

**Why they conflict:**
- **Availability vs Cost:** Higher availability (more redundancy, higher tier) costs more
- **Scalability vs Performance:** Adding capacity quickly may sacrifice optimal performance tuning
- **Security vs Manageability:** Strict security (locked doors, restricted access) can make daily management more cumbersome
- **Performance vs Cost:** Maximum performance often requires expensive hardware and over-provisioning

These trade-offs are fundamental to data center design — you can't maximize everything simultaneously.
</details>

---

### Q3 — Why Virtualise? Historical Evolution

**Describe the three stages in the evolution of why we virtualise data centers. What is today's most compelling reason and why?**

<details>
<summary>Answer</summary>

**Stage 1 — Originally:**
- Virtualisation was seen as a way to run multiple workloads on a single host
- Goal: Server consolidation — run more on less hardware

**Stage 2 — Later:**
- It was found that it was easier to clone an existing machine than build it from scratch
- Production machines could be cloned to produce disaster recovery, development, and multiple test environments

**Stage 3 — Today (most compelling reason):**
- **Workload mobilisation** — the ability to move workloads anywhere
- Without workload mobilisation there is no "Cloud"
- This is today's most compelling reason because it enables the cloud computing model: workloads can be provisioned, moved, scaled, and managed remotely without being tied to specific physical hardware

**Key insight:** Virtualisation evolved from simple consolidation to workload mobility. Mobility is what makes cloud possible — without it, workloads are stuck on specific physical servers.
</details>

---

### Q4 — Benefits of Virtualisation in Data Center

**List 5 benefits of virtualisation in a data center and briefly explain each.**

<details>
<summary>Answer</summary>

1. **Reduced cost:** Fewer physical servers means less power, less cooling, less physical space, fewer licenses — lower total cost of ownership
2. **Faster redeploy:** Clone a VM in minutes vs provisioning a physical server in days or weeks
3. **Better testing:** Clone production to create realistic dev/test environments that are safe to break and experiment with
4. **No vendor lock-in:** VMs are portable across hardware (as long as the hypervisor supports it) — not tied to specific physical server models
5. **Better disaster recovery:** Clone production to a DR site; replicate VMs; failover to DR with less complexity than physical DR

**Additional benefits:** Less heat buildup (fewer physical servers), easier migration to cloud (VMs are the unit of cloud), etc.
</details>

---

### Q5 — Kusnetzky Group Model

**List all 5 layers of the Kusnetzky Group Model of virtualisation. For each layer, give the definition and one example standard or technology.**

<details>
<summary>Answer</summary>

1. **Network Virtualisation:**
   - Definition: Combining hardware and software network resources and network functionality into a single software-based management entity. Allows aggregation or segregation of logical networks while using one or many physical connections.
   - Examples: VXLAN, NVGRE, 802.1q (VLANs)

2. **Storage Virtualisation:**
   - Definition: Combination of hardware and software technologies that abstracts physical components of a storage system from the application or server and presents it in a consistent manner to the client.
   - Examples: SAN, block-level virtualisation, file-level virtualisation (NFS, SMB)

3. **Processing Virtualisation:**
   - Definition: Hardware and software technology that abstracts physical hardware from system services, operating systems, and applications. Can make one system appear to be many or many systems appear to be a single computing resource.
   - Examples: Hypervisors (ESXi, Hyper-V, Xen, KVM)

4. **Application Virtualisation:**
   - Definition: Application-level virtualisation that allows a piece of software to run on a variety of operating systems, hardware platforms, and devices. Usually means the application uses an application framework.
   - Examples: Java Framework, .NET Framework

5. **Access Virtualisation:**
   - Definition: Hardware and software technology that allows nearly any device to access any application without either having to know too much about the other. The application sees a device it's used to; the device sees an application it knows how to display.
   - Examples: Virtual Desktop Infrastructure (VDI), Microsoft RDP, Citrix ICA

**Exam tip:** This is a pure memory question — know all 5 layer names and at least one example for each.
</details>

---

### Q6 — SAN

**What is a SAN (Storage Area Network)? How does it virtualise storage?**

<details>
<summary>Answer</summary>

A **SAN (Storage Area Network)** is a storage device accessed over a storage network. It is a device that allows you to virtualise multiple physical storage devices into a number of **logical storage volumes**, often referred to as **LUNs (Logical Unit Numbers)**.

**How it virtualises storage:**
- The SAN system keeps track of the mappings between logical and physical storage blocks
- It provides a **translation layer** between logical LUNs and physical disks
- It allows a general-purpose server to access data on a range of storage devices without knowing the physical details
- The server sees logical volumes (LUNs); the SAN maps these to physical storage blocks

**Access methods:** Fibre Channel, iSCSI, FCoE (Fibre Channel over Ethernet), ATAoE (ATA over Ethernet), etc.

**Key point:** SAN is storage virtualisation in practice — physical disks → logical LUNs, with a translation layer in between.
</details>

---

### Q7 — Processing Virtualisation

**Explain the two directions of processing virtualisation. Give an example of each.**

<details>
<summary>Answer</summary>

Processing virtualisation can work in two directions:

**1. One system → Many (chop up one server):**
- One physical server is chopped up into multiple virtual machines
- Each VM gets a share of the physical CPU, memory, storage, and network
- This is **server consolidation** — run more workloads on less hardware
- Example: VMware ESXi running 20 VMs on one physical server

**2. Many systems → One (join many servers):**
- Many physical servers are joined together to appear as a single computing resource
- This is **grid computing** or **clustering** — aggregate power of many servers
- Goals: raw performance, high scalability, reliability/availability
- Example: A computing cluster where many servers work together on a single task, appearing as one large computing resource

**Key insight:** Processing virtualisation goes both ways — consolidation (one to many) and aggregation (many to one). Both are enabled by abstracting physical hardware from the software layer.
</details>

---

### Q8 — Virtualisation Platforms Comparison

**Compare VMware, Hyper-V, and Amazon EC2 in terms of: (a) physical uplift support, (b) market position, and (c) migration compatibility.**

<details>
<summary>Answer</summary>

| Feature | VMware | Hyper-V | Amazon EC2 |
|---------|--------|---------|------------|
| **Physical uplift** | **Yes** — workloads can be seamlessly uplifted from physical layer (slid from bare metal) | **No** — no support for uplifting from physical layer, therefore cannot be used to clone production | **No** — no automated support for uplift from physical |
| **Market position** | Largest market share in enterprise | Growing market share in enterprise | "Holy Grail of enterprise" despite small market share |
| **Migration compatibility** | Most compatible — Full Motion Compatible with Hyper-V; Convert or Compatible with others | Full Motion Compatible with VMware; Compatible with Xen | Requires Convert or Rebuild from most platforms; Compatible with Xen |
| **OS support** | All X86 OS (Microsoft, Linux, Novell, Legacy) | All X86 OS | AWS-supported AMIs |
| **Live migration** | Yes (vMotion) | Yes | Yes (within AWS) |

**Key insight:** VMware has the broadest compatibility and supports physical uplift. Hyper-V and EC2 do not support physical uplift, limiting their use for cloning production environments. EC2 requires conversion or rebuild from most external platforms.
</details>

---

### Q9 — DC Architecture Approaches

**Compare the three data center architecture approaches: Separate, DC in a Box, and Converged. Include trade-offs for each.**

<details>
<summary>Answer</summary>

| Approach | Description | Entry Cost | Scalability | Other Characteristics |
|----------|-------------|-----------|-------------|----------------------|
| **Separate Compute, Storage, Network** | Traditional approach — each layer is separate equipment | Moderate | Easy — add more of each independently | Less integrated; each layer managed separately |
| **Data Center in a Box** (e.g., HP EcoPod) | Compute, storage, and network in a single or few racks | High | Finite limit to scaling | Start using almost immediately; quite mobile |
| **Converged Devices** (e.g., Nutanix) | Compute, storage, and network in 2 or 4 rack units | Low | High scalability — devices form a mesh; add more nodes to scale | Used by Google; scales out by adding more units |

**Key trade-offs:**
- **Separate:** Easy to scale each layer independently but less integrated and potentially less efficient
- **DC in a Box:** Great for quick deployment and mobility but finite scaling and high upfront cost
- **Converged:** Best scalability and low entry cost but requires embracing an integrated ecosystem
</details>

---

### Q10 — Considerations of Virtualising a Data Center

**Before virtualising a data center, what 6 considerations must be evaluated? Why does virtualisation make some of these MORE critical?**

<details>
<summary>Answer</summary>

**6 considerations:**
1. **Power:** Will the physical site have adequate and appropriate electrical power?
2. **Cooling:** Will the physical site have adequate and appropriately concentrated cooling capacity?
3. **Security:** Will the physical site have appropriate security facilities?
4. **Backup:** Will the physical site have adequate utility backup (power, cooling, network)?
5. **Availability:** Will the consolidated/virtualised platform provide the availability needed for the workloads it will run?
6. **Skills:** Will the consolidated/virtualised platform require new support tools and/or staff skills?

**Why virtualisation makes these MORE critical:**
- Virtualisation **concentrates workloads** onto fewer physical servers
- This makes each physical server **more critical** — if one physical server fails, many VMs go down
- Power, cooling, and backup become more important because there are fewer physical servers to provide redundancy through diversity
- The consolidated platform must provide the availability that was previously spread across many physical servers
- Managing a virtualised environment requires different skills than managing physical servers

**Key insight:** Virtualisation is NOT a substitute for proper physical infrastructure. In fact, it raises the stakes — when you concentrate workloads, the physical foundation must be more robust, not less.
</details>

---

## Exam Tips

- **Kusnetzky 5 layers** — pure memory: Network, Storage, Processing, Application, Access
- **Why virtualise evolution** — 3 stages: consolidate → clone for DR/dev/test → workload mobilisation (no cloud without it)
- **SAN and LUNs** — know what LUN stands for (Logical Unit Number) and how SAN virtualises physical disks into logical volumes
- **VMware vs Hyper-V vs EC2** — key differentiator: physical uplift support. VMware = yes, Hyper-V = no, EC2 = no
- **DC architecture approaches** — know the 3 types and their trade-offs (entry cost, scalability, characteristics)
- **Virtualisation makes physical infrastructure MORE critical** — this is a counterintuitive but important insight

---

## Related

- [[Week 05]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 05 Summary]] — summary
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
