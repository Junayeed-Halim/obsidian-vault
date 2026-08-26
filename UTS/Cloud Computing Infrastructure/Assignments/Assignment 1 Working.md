---
type: assignment
course: Cloud Computing
title: Assignment 1 — Working Draft
status: in_progress
due: 2026-08-28
weight: 20%
tags:
  - UTS
  - cloud
  - assignment
  - CCI
  - CCI-Assignment1
---

# Assignment 1 — Working Draft

**Course:** 41891/42891 Cloud Computing Infrastructures (Spring 2026)
**Due:** 17:00 Friday, 28 August 2026
**Weight:** 20%
**Format:** Individual — 8 questions, short descriptive answers or diagrams
**Referencing:** Harvard (preferred), in-line citations required
**Late penalty:** 20% per working day. More than 7 days late = zero.

---

## ⚠️ Academic Integrity Reminder

- All text must be **your own words** — except short, quoted, clearly referenced sections
- Text copied from any source without citation = plagiarism
- Using AI to write your assignment = cheating. Use AI to **understand concepts**, not to generate submission text.
- Cite every source you use. List all references at the end.

---

## Question 1 (5 Points)

### What is cloud? (2 Points)

> **Own words here.** Key concepts to cover: a pool of virtualised computer resources, hosts various workloads, on-demand provisioning of hardware/software/data, paid services.

> **Reference:** Lecture 1 (Zhang, H. 2026). Can also reference NIST or industry definitions with citation.

### What is cloud computing? (1 Point)

> **Own words here.** The standard definition: a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort.

> **Reference:** NIST (2011) definition. Also Thomas Erl's definition.

### Explain the cloud cost model. (2 Points)

> **Own words here.** The cloud cost model is fundamentally a **consumption-based (pay-per-use) operational expenditure (OpEx) model** that shifts IT spending from capital expenditure (CapEx) to operational expenditure.

> **Key elements:**

> **1. CapEx → OpEx shift:**
> - **Traditional (CapEx):** Organisations buy hardware upfront — servers, storage, networking equipment — as capital investments. Costs are fixed after purchase, predictable, but require large upfront investment and lead to over-provisioning (paying for idle capacity).
> - **Cloud (OpEx):** Organisations rent infrastructure from a provider and pay only for what they use. Costs are variable per usage, require no upfront investment, and scale with demand. No paying for idle capacity.

> **2. Pay-per-use / measured service:**
> - Cloud providers meter resource usage — compute hours, storage GB, data transfer, API requests, etc.
> - Customers pay exactly what they consume. This is the "measured service" characteristic in the NIST definition.
> - Billing granularity varies: per-second, per-minute, or per-hour for compute; per-GB for storage; per-GB transferred for data egress.

> **3. Pricing models within the cost model:**
> - **On-demand (pay-as-you-go):** Highest flexibility, no commitment, highest unit cost. Best for unpredictable workloads, short-term, or spiky traffic. (Example: AWS EC2 on-demand, Azure pay-as-you-go VMs.)
> - **Reserved instances / Savings plans:** Commit to 1-3 years for significant discounts (up to 60-70% vs on-demand). Best for steady-state, predictable workloads. Trade-off: loss of flexibility, commitment tied to specific instance types/regions.
> - **Spot / Preemptible instances:** Heavily discounted (up to 90% off) but can be interrupted/reclaimed by the provider at any time. Best for fault-tolerant, batch, or short-duration workloads. Not suitable for production services that can't tolerate interruption.

> **4. Cloud-specific cost drivers (not present in on-prem):**
> - **Data egress fees:** Moving data out of the cloud costs money ($0.08-0.12/GB typical). Moving data in is usually free. This can be a significant hidden cost for data-intensive applications.
> - **API requests, NAT gateways, load balancers:** These accrue charges even when idle or at low usage — hourly charges for load balancers, per-request charges for APIs, per-GB charges for NAT gateway data processing.
> - **Cross-region data transfer:** Moving data between cloud regions is billable.
> - **Serverless granularity:** Lambda functions billed in millisecond increments — pay for exact execution time.

> **5. Cost optimisation strategies:**
> - Right-sizing instances (match instance size to actual workload)
> - Using reserved/savings for predictable workloads
> - Using spot for fault-tolerant batch jobs
> - Turning off unused resources (scheduling dev/test environments off outside business hours)
> - Storage lifecycle policies (move old data to cheaper tiers — e.g., AWS S3 Glacier, Azure Cool/Archive)
> - Tagging resources for cost allocation and accountability
> - Monitoring and alerting on spend (budgets, cost exploration tools)

> **References:**
> - Mell, P. & Grance, T. (2011) *The NIST Definition of Cloud Computing*, NIST SP 800-145. (Measured service characteristic)
> - Exoscale (2024) 'Cloud Pricing Models Explained', available at: https://www.exoscale.com/blog/cloud-pricing-models/ (Accessed: 27 August 2026).
> - Opsolute (2026) 'Cost Optimization in Cloud Computing', available at: https://opsolute.io/blog/cost-optimization-in-cloud-computing (Accessed: 27 August 2026).
> - TierPoint (2023) 'CapEx vs. OpEx Cloud: What's the Difference?', available at: https://www.tierpoint.com/blog/cloud/capex-vs-opex-cloud-whats-the-difference/ (Accessed: 27 August 2026).

> **Lecture reference:** The "measured service" characteristic from Lecture 1 (Zhang, H. 2026) is directly relevant — cloud systems automatically control and optimise resource use by leveraging a metering capability (pay-per-use). However, the detailed pricing models and cost optimisation strategies are not covered in the lectures and require external research.

---

## Question 2 (15 Points)

### What are the cloud service models? (3 Points)

> **Own words here.** List the three models: IaaS, PaaS, SaaS. Briefly define each.

### Describe what are IaaS, PaaS and SaaS and the relationships among them. (12 Points)

> **Own words here.** For each model, cover:
> - What the **provider** manages
> - What the **consumer** manages
> - **Examples** (AWS EC2 for IaaS, Azure App Service for PaaS, Office 365 for SaaS)
>
> **Relationship among them:**
> - Spectrum from most control (IaaS) to least control (SaaS)
> - As you move IaaS → PaaS → SaaS, you manage less but also have less flexibility/customisation
> - They build on each other: SaaS runs on PaaS which runs on IaaS
> - A consumer might use all three: IaaS for custom infrastructure, PaaS for app hosting, SaaS for productivity tools
>
> **Diagram suggestion:** Responsibility stack diagram — show layers from hardware up to application, with a line showing what consumer manages vs provider manages for each model.
>
> **Reference:** Lecture 1-2 (Zhang, H. 2026). [[Sources/Lecture/Week 01-03]] [[Exam Prep#Topic 2]]

---

## Question 3 (15 Points)

### What are the cloud components? (5 Points)

> **Own words here.** Key components:
> - **Virtual servers / VMs** — the compute resource
> - **Storage** — cloud storage devices (block, file, object)
> - **Network** — virtual network, connectivity
> - **Hypervisor / VMM** — virtualisation layer
> - **Physical infrastructure** — servers, storage arrays, network equipment
> - **Management systems** — VIM/vCenter, SLA management, billing, remote administration
>
> **Reference:** Lecture 1, 3 (Zhang, H. 2026). [[Sources/Lecture/Week 01-03]] [[Sources/Lecture/Week 03]]

### Describe the cloud architecture based on these components. (10 Points)

> **Own words here.** Describe how the components fit together:
> - Physical data centre: racks of physical servers, each running a hypervisor
> - Hypervisors manage VMs — the virtualised compute
> - SAN storage shared across all servers — the virtualised storage
> - Network connects everything — physical NICs uplink to switches
> - VIM (e.g., vCenter) jointly controls all hypervisors — management plane
> - Cloud consumer accesses services via the network — self-service portal, APIs
>
> **Diagram suggestion:** Physical topology diagram — physical servers with hypervisors → VMs, SAN storage, network switches, VIM controlling everything, cloud consumer on the outside.
>
> **Reference:** Lecture 1 (Zhang, H. 2026). [[Sources/Lecture/Week 01-03]] Physical Topology section.

---

## Question 4 (20 Points)

### What is virtualisation? (5 Points)

> **Own words here.** Definition: Abstraction of computer resources. The goal is to collaboratively utilise IT resources to the maximum level and reduce the cost of IT resources. Allows multiple workloads to run on a single physical host by abstracting the underlying hardware.

> **Reference:** Lecture 2 (Zhang, H. 2026). [[Sources/Lecture/Week 01-03]] [[Sources/Lecture/Week 02]]

### Describe different layers of virtualisation. (5 Points)

> **Own words here.** Four layers:
> 1. **Processor virtualisation:** Share processor across multiple application instances (vCPUs scheduled on physical cores)
> 2. **Memory virtualisation:** Aggregate memory into a pool, manage on behalf of multiple applications (virtual RAM → physical frames mapped by hypervisor)
> 3. **Network virtualisation:** Virtual IP management and segmentation (vNIC, vSwitch, VLANs) — logical networks independent of physical topology
> 4. **Storage virtualisation:** Abstraction layer for physical storage — VM sees virtual disks, physical details hidden
>
> **For each layer:** What it does + example. The Kusnetzky model is also relevant here (Network, Storage, Processing, Application, Access virtualisation) — bonus if you mention it.
>
> **Reference:** Lecture 2 (Zhang, H. 2026). [[Sources/Lecture/Week 02]]

### What is hypervisor? (5 Points)

> **Own words here.** Also called Virtual Machine Monitor (VMM). Responsible for managing the applications' OSs (guest OSs) and their use of system resources (CPU, memory, storage). Supports isolation and manages multiple VMs running on the same host computer.

> **Key properties:**
> - Manages guest OSs and their resource usage
> - Provides isolation between VMs
> - Provides logical CPU, memory, storage blocks, network resources to each VM
> - Types: Type 1 (bare-metal, runs directly on hardware — ESXi, Hyper-V) vs Type 2 (hosted, runs on host OS — VMware Workstation, VirtualBox)

> **Reference:** Lecture 2 (Zhang, H. 2026). [[Sources/Lecture/Week 02]]

### What does a hypervisor do? (5 Points)

> **Own words here.** Four main functions:
> 1. **Creating and managing VMs** — provisioning, configuring, starting/stopping
> 2. **Allocating hardware resources to VMs** from the virtualised pool of hardware resources belonging to the physical server — logical CPU, memory, storage blocks, network resources
> 3. **Monitoring the status of the VMs** — health, performance, resource usage
> 4. **Moving VMs between systems** — live migration (VMotion), taking part in moving VMs from one physical host to another for load balancing, maintenance, or DR

> **Reference:** Lecture 2 (Zhang, H. 2026). [[Sources/Lecture/Week 02]]

---

## Question 5 (15 Points)

### What is storage virtualisation? (2 Points)

> **Own words here.** Definition: "The process of presenting a logical view of the physical storage resources to a host computer system, treating all storage media (hard disk, optical disk, tape, etc.) in the enterprise as a single pool of storage."

> **Reference:** Lecture 2 (Zhang, H. 2026). [[Sources/Lecture/Week 02]]

### What does storage virtualisation do? (5 Points)

> **Own words here.** Key functions:
> - Presents a **logical view** of physical storage as a single pool
> - **Abstracts** the complexity and differences among physical storage subsystems
> - To VMs and guest OSes, storage is presented as simple virtual disks (e.g., SCSI disks connected to a virtual HBA)
> - **Two types:** Block-level (abstraction below OS/file-system) and File-level (virtualisation at file-system level, typically NFS/SMB)
> - **Three methods:** Network-based (appliance on network), Host-based (host OS/hypervisor manages it — VMFS, LVM), Array-based (storage array itself provides it)
> - Enables: storage pooling, overcommitment (thin provisioning), live migration of storage, snapshots/cloning, deduplication
> - VMware example: VMs see virtual SCSI disks; disks provisioned from Datastores that abstract the physical storage

> **Reference:** Lecture 2 (Zhang, H. 2026). [[Sources/Lecture/Week 02]]

### When should storage virtualisation be used? (3 Points)

> **Own words here.** Use cases:
> - **Multi-tenancy:** When multiple VMs/consumers need to share physical storage while being isolated
> - **Storage consolidation:** When you have many physical storage devices and want to manage them as a single pool
> - **Live migration:** When you need to move VMs (and their storage) between physical hosts without downtime
> - **Scalability:** When storage needs to grow dynamically without re-architecting
> - **Simplified management:** When you want a single view of all storage rather than managing many disparate physical devices
> - **DR and backup:** When you need snapshots, cloning, replication for disaster recovery
>
> **When NOT needed:** Very small environments with a single server and single storage device — the abstraction overhead may not be worth it. Simple DAS is fine for single-server setups.

> **Reference:** Lecture 2 (Zhang, H. 2026). [[Sources/Lecture/Week 02]] — supplemented with own reasoning.

### What is SAN? (2 Points)

> **Own words here.** Storage Area Network — a storage device accessed over a storage network. It virtualises multiple physical storage devices into a number of logical storage volumes, often referred to as **LUNs (Logical Unit Numbers)**. The SAN system keeps track of mappings between logical and physical storage blocks and provides a translation layer.

> **Reference:** Lecture 5 (Zhang, H. 2026). [[Sources/Lecture/Week 05]]

### What does SAN do? (3 Points)

> **Own words here.** Key functions:
> - Virtualises multiple physical storage devices into logical storage volumes (LUNs)
> - Maintains mappings between logical and physical storage blocks
> - Provides a translation layer so general-purpose servers can access data on a range of storage devices without knowing physical details
> - Accessed over: Fibre Channel, iSCSI, FCoE (Fibre Channel over Ethernet), ATAoE (ATA over Ethernet), etc.
> - Provides block-level storage — the server sees it as a raw disk, formats it with a filesystem
> - High performance, low latency — dedicated storage network (not shared with regular network traffic)
> - Enables shared storage across multiple servers (cluster filesystem, VM migration, HA)

> **Reference:** Lecture 5 (Zhang, H. 2026). [[Sources/Lecture/Week 05]]

---

## Question 6 (10 Points)

### Explain at least five challenges existing in Building an IaaS Platform and how you can deal with them.

> **Own words here.** This question is NOT fully covered in lectures — you need to research and reason from what you know. The following challenges are drawn from your lecture knowledge (Weeks 2-5) and supplemented with external research.

> **Challenge 1: Multi-tenancy and isolation**
> - **Problem:** Multiple customers share the same physical infrastructure — servers, storage, network. A compromised VM, misconfiguration, or attack in one customer's environment could potentially affect others (data leakage, resource contention, side-channel attacks). Ensuring strong isolation between tenants while maintaining resource efficiency is a fundamental IaaS challenge.
> - **Solution:** Network virtualisation (VXLAN, NVGRE) creates isolated virtual networks for each tenant on shared physical infrastructure. Hypervisors enforce VM-level isolation — each VM is isolated from others on the same host. Security groups and firewalls provide per-instance/network-level access control. Logical network perimeters separate consumer and provider environments. Regular security patching of hypervisors addresses hypervisor-level vulnerabilities. (Zhang, H. 2026; Ijcaonline.org, 2025)

> **Challenge 2: Storage management at scale**
> - **Problem:** An IaaS platform may host thousands of VMs, each requiring storage. Managing physical disks, provisioning, performance (IOPS), backup, replication, migration, and cost at scale is highly complex. Customers expect to be able to attach/detach storage volumes, snapshot them, clone them, and migrate them — all on demand.
> - **Solution:** Storage virtualisation abstracts physical storage into a single logical pool — SAN virtualises physical disks into logical LUNs. Automated provisioning and thin provisioning allow efficient storage allocation. Storage pools and datastores (as in VMware) provide a simple abstraction for customers while the platform manages physical complexity. Deduplication, snapshots, and replication support backup and DR requirements. (Zhang, H. 2026; IEEE, 2016)

> **Challenge 3: Networking complexity and scalability**
> - **Problem:** Each tenant needs their own virtual network with IP addressing, routing, and isolation. The physical network must carry traffic for thousands of tenants simultaneously without leaking data between them. Scaling the network to support many tenants while maintaining performance and isolation is a significant engineering challenge. Additionally, VMs migrating between physical hosts must maintain network connectivity.
> - **Solution:** Overlay networks (VXLAN, NVGRE) encapsulate tenant traffic in tunnels over the physical network — the physical network only sees outer IP headers, not tenant traffic details. Virtual switches (vSwitches) handle VM networking on each host. Software-defined networking (SDN) allows centralised network management. Network virtualisation with tunnel-based isolation solves both the multi-tenancy and migration challenges. (Zhang, H. 2026; IEEE, 2016)

> **Challenge 4: Resource utilisation, performance, and quality of service**
> - **Problem:** Packing many VMs onto few physical servers risks resource contention — CPU ready time, memory ballooning, storage IOPS bottlenecks. Overloading degrades performance for all tenants. Conversely, under-loading wastes capacity and money. The platform must balance high utilisation (for profitability) with guaranteed performance (for customer satisfaction).
> - **Solution:** Resource pools with quotas and limits prevent any single tenant from monopolising resources. Performance monitoring (Cloud Usage Monitors — polling agents, monitoring agents, resource agents) tracks utilisation and detects bottlenecks. Auto-scaling scales resources up/down based on demand. Quality of service (QoS) policies prioritise critical workloads. Right-sizing and capacity management ensure the right amount of physical resources for the VM workload. (Zhang, H. 2026)

> **Challenge 5: High availability, fault tolerance, and disaster recovery**
> - **Problem:** Hardware fails — servers crash, disks die, network links go down, power outages occur. In an IaaS platform, customers expect their services to stay running. A single physical server failure shouldn't take down all VMs on it. The platform must provide reliability that customers can depend on.
> - **Solution:** Clusters with multiple physical hosts enable high availability — if one host fails, VMs restart on other hosts. Live migration (VMotion) allows VMs to move between hosts without downtime for maintenance or load balancing. Redundant networking and storage (multiple paths, redundant components — N+1 or 2(N+1)) prevent single points of failure. Multiple availability zones (physically separate data centres within a region) protect against data centre-level failures. Backup and replication strategies support disaster recovery. (Zhang, H. 2026; Uloap.ulete, 2025)

> **Challenge 6 (bonus): Security at every layer**
> - **Problem:** An IaaS platform has a large attack surface. Hypervisor vulnerabilities could allow one VM to access another VM's data. The management plane (VIM, APIs) is a high-value target — if compromised, an attacker could provision resources, access customer data, or shut down services. Network traffic between VMs on the same host could potentially be intercepted. Customer data at rest needs protection.
> - **Solution:** Hardened hypervisors with regular security patches. Encrypted communication between management components. Secure APIs with authentication and authorisation (IAM). Encryption at rest (storage) and in transit (network). Security groups and firewalls provide defence in depth. Hardened virtual server images reduce attack surface. Regular security audits and penetration testing. Cloud security mechanisms: encryption, hashing, digital signatures, PKI, IAM, SSO, security groups, hardened VM images. (Zhang, H. 2026)

> **Challenge 7 (bonus): Scalability of management systems**
> - **Problem:** The platform must scale from tens to thousands of physical servers and tens of thousands of VMs. Management systems (VIM, billing, monitoring, provisioning) must handle this scale without becoming bottlenecks. Manual management is impossible at scale.
> - **Solution:** Resource pooling architecture allows the platform to manage resources as a pool rather than individual servers. Dynamic scalability architecture supports automatic scaling. Distributed management services (vCenter's distributed services, plug-ins for extensibility) handle scale. Cloud management mechanisms — SLA management, billing management, resource management, remote administration systems — provide automated, scalable management. Automation (Terraform, Pulumi, CDK for infrastructure as code; SD-WAN for transport) reduces manual effort. (Zhang, H. 2026; IEEE, 2016)

> **References for Q6:**
> - Zhang, H. (2026) *Cloud Computing Infrastructure — Lectures 2-6*. UTS Course 41891/42891.
> - Chippagiri, R. (2025) 'A Study of Cloud Security Frameworks for Safeguarding Multi-Tenant Cloud Architectures', *International Journal of Computer Applications*, 186(60). Available at: https://ijcaonline.org/archives/volume186/number60/chippagiri-2025-ijca-924369.pdf (Accessed: 27 August 2026). [Multi-tenancy security challenges]
> - Xu, D. et al. (2016) 'StorM: Enabling Tenant-Defined Cloud Storage Middle-Box Services', *Proceedings of the 2016 International Conference on Detection of Intrusions and Malware, and Vulnerability Assessment (DIMVA)*. Available at: https://cs.purdue.edu/homes/dxu/pubs/DSN16.pdf (Accessed: 27 August 2026). [IaaS tenant storage challenges, provider-controlled service model limitations]
> - Susnjara, B. (2025) 'Strategies for Building Distributed IaaS Infrastructures for Medium-Sized Enterprises', *Universal Library of Engineering Technology (ULoAP)*, 2025(0203009). Available at: doi://10.70315/uloap.ulete.2025.0203009 (Accessed: 27 August 2026). [IaaS engineering steps: SD-WAN, IaC, multi-tiered fault tolerance, Zero Trust, centralised IAM]

> **Lecture gaps to note:** The lectures cover the components and mechanisms of cloud infrastructure well, but do not explicitly enumerate "challenges in building IaaS." The challenges above are derived by reasoning about what could go wrong when you combine the components described in lectures (virtualisation, storage, networking, multi-tenancy, resource management) at scale. External research confirms these as recognised industry challenges.

---

## Question 7 (10 Points)

### What is Network as a Service (NaaS)? (5 Points)

> **Own words here.** NaaS is the cloud delivery model for networking — network capabilities are delivered as a service over the internet, on-demand, with pay-per-use pricing. Consumers can provision virtual networks, bandwidth, connectivity, and network functions on demand without owning or managing physical network infrastructure.
>
> Key characteristics:
> - On-demand self-service (provision networks without human interaction)
> - Broad network access (accessed over the network)
> - Resource pooling (provider's network resources pooled)
> - Rapid elasticity (network capacity scales with demand)
> - Measured service (pay-per-use)
>
> Aligns with the broader cloud computing model: CapEx → OpEx, no need to buy/manage routers and switches.
>
> **Reference:** Lecture 4 (Zhang, H. 2026). [[Sources/Lecture/Week 04]] Also: Baroncelli, F., Martini, B., & Castoldi, P. (2010) — cited in lecture notes.

### Explain the cloud ecosystems. (5 Points)

> **Own words here.** The cloud ecosystem consists of multiple players and their relationships:
>
> **Four key players (from Week 4 lecture):**
> 1. **Infrastructure Providers (InP):** Manage the physical infrastructure — data centres, physical networks, servers, storage. They own and operate the raw hardware.
> 2. **Service Providers (SP):** Create virtual networks and services by aggregating resources from InPs. They sell virtual network services to end users. Examples: cloud providers like AWS, Azure, but also smaller virtual network providers.
> 3. **End Users (U):** Buy and use services from different service providers. Could be individuals, businesses, organisations.
> 4. **Brokers (B):** Act as mediators between InP, SP, and U. Help match supply and demand, negotiate terms, find the best provider for a given need.
>
> **Relationships:** InP provides raw physical infrastructure → SP creates virtualised services on top → End Users consume those services → Brokers mediate the relationships. Multiple SPs can aggregate from multiple InPs. End users can choose from multiple SPs.
>
> **Reference:** Lecture 4 (Zhang, H. 2026). [[Sources/Lecture/Week 04]] Reference Business Model section.

---

## Question 8 (10 Points)

### What is a data center? (5 Points)

> **Own words here.** Definition: A facility that houses critical computing resources in controlled environments and under centralized management. Computing resources include: mainframes, web and application servers, file and print servers, messaging servers, application software and the operating systems that run them, storage subsystems, and network infrastructure.
>
> Key characteristics:
> - Controlled environments (temperature, humidity, physical security, fire protection)
> - Centralized management
> - Houses the infrastructure that runs IT services — servers, storage, networking
> - Data centers can be on-premises (organisation's own) or in the cloud (provider's)

> **Reference:** Lecture 5 (Zhang, H. 2026). [[Sources/Lecture/Week 05]]

### List some basic components of a data center. (5 Points)

> **Own words here.** Basic components:
>
> **Facilities:**
> - Housing, racks, cabling
> - Power supplies (electrical infrastructure, UPS, generators)
> - Environmental control (HVAC — heating, ventilation, air conditioning; fire protection; temperature and humidity controls)
>
> **Computing Hardware:**
> - Servers, blade servers
>
> **Storage Hardware:**
> - Hard disk arrays
> - Storage Area Network (SAN)
> - Network-Attached Storage (NAS)
>
> **Network Hardware:**
> - Carrier and external network interconnection
> - Web-tier load balancing and acceleration
> - LAN fabric, SAN fabric, NAS gateways
> - Switches, routers, NICs
>
> **Management Systems (virtualised DC):**
> - Hypervisors on physical servers
> - VIM/vCenter for management
> - Virtual storage, virtual networks

> **Reference:** Lecture 5 (Zhang, H. 2026). [[Sources/Lecture/Week 05]]

---

## References

> **Add your references here in Harvard style.** Example format:
>
> Zhang, H. (2026) *Cloud Computing Infrastructure — Lectures 1-6*. UTS Course 41891/42891. Available at: [Canvas link] (Accessed: 26 August 2026).
>
> Mell, P. & Grance, T. (2011) *The NIST Definition of Cloud Computing*. NIST Special Publication 800-145. Available at: https://csrc.nist.gov/publications/detail/sp/800-145/final (Accessed: 26 August 2026).
>
> Baroncelli, F., Martini, B. & Castoldi, P. (2010) 'Network virtualization for cloud computing', *Annals of Telecommunications — Annales des télécommunications*, 65(11-12), pp. 713-721.
>
> [Add more as you research — aim for 2-3 sources per question that needs external research]

---

## Diagrams to Create

| Question | Diagram idea | Priority |
|----------|-------------|----------|
| Q2 | IaaS/PaaS/SaaS responsibility stack — layers from hardware to app, line showing consumer/provider split | High (12pts) |
| Q3 | Cloud physical architecture — servers, hypervisors, VMs, SAN, network, VIM, consumer | High (10pts) |
| Q4 | Hypervisor diagram — Type 1 vs Type 2, or virtualisation layers | Medium (5pts each) |
| Q5 | SAN architecture — physical disks → SAN → LUNs → servers | Medium (3pts) |
| Q7 | Cloud ecosystem — InP, SP, U, B with arrows showing relationships | Medium (5pts) |
| Q8 | Data centre components — facilities, computing, storage, network layers | Low (5pts) |

---

## Progress Tracker

- [ ] Read all 8 questions and understand what's required
- [ ] Gather content from existing notes for Q2, Q3, Q4, Q5, Q7, Q8
- [ ] Research gaps: Q1 cost model, Q6 challenges (find 2-3 sources each)
- [ ] Draft answers in own words for all questions
- [ ] Create diagrams for Q2, Q3, Q4, Q5, Q7 (where helpful)
- [ ] Add in-line citations throughout
- [ ] Compile reference list in Harvard style
- [ ] Review against marking criteria
- [ ] Export to PDF/DOCX
- [ ] Submit via Canvas by 17:00 Friday 28 August

---

## Related Notes

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]] — Q1, Q2, Q3, Q4, Q5 (partial)
- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 02]] — Q4, Q5
- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 03]] — Q3 (architectures)
- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 04]] — Q7
- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 05]] — Q5 (SAN), Q8
- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 06]] — Q8 (DC management context)
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — comparison tables for Q2, Q4, Q5
