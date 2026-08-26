---
type: course
course: Cloud Computing
title: Week 02 Summary — IaaS Deep Dive: Compute, Storage, Networking
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 02 Summary — IaaS Deep Dive: Compute, Storage, Networking

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 02]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]

---

## What We Covered

### 1. Compute in IaaS — The Virtual Machine

- **VMs / Instances:** The fundamental compute unit of IaaS. You choose the instance type (CPU, memory, storage, network capacity) and the cloud provider provisions a virtual machine on their physical hardware.
- **Instance families:** Different workloads need different hardware profiles:
  - **General purpose:** Balanced CPU, memory, storage. Good default for most workloads (AWS M-series, Azure D-series).
  - **Compute optimised:** High CPU, lower memory. Batch processing, video encoding, compute-heavy apps (AWS C-series, Azure F-series).
  - **Memory optimised:** High memory-to-CPU ratio. Databases, in-memory caches, analytics (AWS R-series, Azure E-series).
  - **Storage optimised:** High sequential/read throughput. Data warehousing, log processing (AWS I/D-series, Azure L-series).
  - **GPU instances:** Hardware acceleration for ML training, graphics rendering, video encoding.
- **Scaling options:**
  - **Vertical scaling (scale up):** Increase the size of a single VM — more CPU, more memory. Simple but has a ceiling (largest instance type) and usually requires downtime.
  - **Horizontal scaling (scale out):** Add more VMs behind a load balancer. More complex but virtually unlimited and enables high availability.
  - **Auto scaling:** Automatically add/remove VMs based on demand (CPU utilisation, request count, schedule). Combines horizontal scaling with cost efficiency — scale down when idle.

### 2. Storage in IaaS — Three Types

| Type | Description | Characteristics | AWS | Azure | Use Cases |
|------|-------------|-----------------|-----|-------|-----------|
| **Block storage** | Virtual disk attached to a VM, appears as a physical drive | Low latency, filesystem on top, mounted to one VM at a time (typically), can be resized | EBS | Disk Storage | OS disks, databases, transactional workloads, boot volumes |
| **Object storage** | Flat namespace, objects stored with metadata, HTTP/S access | Massive scalability, high durability, no filesystem, accessed via API/URL, eventually consistent (mostly) | S3 | Blob Storage | Images, videos, backups, logs, static website hosting, data lakes |
| **File storage** | Shared filesystem using standard protocols (NFS, SMB) | Shared access from multiple VMs, familiar filesystem interface, managed by provider | EFS | Files | Shared configuration, legacy apps needing shared disk, home directories |

**Key distinction:** Block = disk for a VM. Object = files in a bucket (HTTP). File = shared network drive.

### 3. Networking in IaaS — VPC/VNet Basics

- **VPC (AWS) / VNet (Azure):** Your private, logically isolated network in the cloud. You define IP address ranges (CIDR blocks), subnets, route tables, gateways. Complete control over network topology.
- **Subnets:** Divisions within a VPC. Public subnets route to the internet (Internet Gateway). Private subnets don't — used for internal resources.
- **Internet Gateway (IGW):** Enables communication between the VPC and the internet. Attached to the VPC, provides NAT for instances with public IPs.
- **Security Groups:** Stateful firewall at the instance level. Rules allow traffic IN (and return traffic automatically allowed). Instance-level granularity.
- **Network Security Groups (Azure NSG):** Similar concept in Azure — filter traffic to/from subnets or NICs.
- **NAT Gateway:** Enables instances in private subnets to initiate outbound internet connections (patches, downloads) without exposing them to inbound traffic.
- **Load Balancers:** Distribute incoming traffic across multiple targets (VMs, containers). Layer 4 (TCP/UDP) or Layer 7 (HTTP/HTTPS). Health checks detect unhealthy targets and route around them. AWS ELB/ALB, Azure Load Balancer/App Gateway.

### 4. AWS ↔ Azure Service Mapping

| Concept | AWS | Azure |
|----------|-----|-------|
| Compute (VMs) | EC2 | Virtual Machines |
| Block Storage | EBS | Managed Disks |
| Object Storage | S3 | Blob Storage |
| File Storage | EFS | Files |
| VPC | VPC | VNet |
| Internet Gateway | IGW | VNet Gateway / Public subnet |
| Security Firewall | Security Groups | NSGs |
| Load Balancer (L4) | ELB / NLB | Load Balancer |
| Load Balancer (L7) | ALB | Application Gateway |

---

## Key Takeaways

1. **IaaS gives you the building blocks** — VMs, storage, networking. You assemble them. PaaS hides the assembly; SaaS hides everything.
2. **Instance type matters.** Choose based on workload profile (CPU-heavy, memory-heavy, storage-heavy). General purpose is fine for starting out.
3. **Three storage types serve three purposes.** Don't use S3 for a database disk. Don't use EBS for sharing files across VMs.
4. **VPC design is foundational.** Public vs private subnet placement is a security decision, not an afterthought.
5. **Auto scaling + load balancing = elasticity.** The ability to handle variable load without wasting money on idle capacity.
6. **AWS and Azure use different names for the same concepts.** Know the mapping — exam questions might use either.

---

## What's Next (Week 03)

- High availability across availability zones and regions
- Disaster recovery strategies (backup, pilot light, warm standby, active-active)
- Auto scaling deep dive — policies, configurations, best practices

---

## Questions to Think About

1. Why would you use block storage (EBS) for a database instead of object storage (S3)?
2. A web application needs to handle traffic spikes during business hours and almost nothing at night. What combination of services achieves this most cost-effectively?
3. What's the difference between a public subnet and a private subnet? Why would you put a database in a private subnet?

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 02]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Weeks 01-03 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 03 Summary]] — next week
