---
type: lecture-notes
course: Cloud Computing
title: Week 02 — IaaS Deep Dive: Compute, Storage, Networking
status: to_process
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-02
---

# Week 02 — IaaS Deep Dive: Compute, Storage, Networking

> **Source:** [[Week2_CloudLecture-5.pdf]]
> **Status:** TODO — Process this PDF in Open Notebook, then fill in your extracted notes below.

---

## TODO — Process in Open Notebook First

1. Open Open Notebook
2. Import `[[Week2_CloudLecture-5.pdf]]`
3. Ask: "What are the key concepts, definitions, AWS/Azure service mappings, and exam-relevant points?"
4. Copy output below and rewrite in your own words

---

## Key Concepts

### Compute in IaaS

- **VMs / Instances** — the fundamental compute unit. Choose instance type (CPU, memory, storage, network).
- **Instance families** — general purpose, compute optimised, memory optimised, storage optimised, GPU.
- **Scaling** — vertical (bigger VM) vs horizontal (more VMs). Auto-scaling groups.
- **AWS:** EC2. **Azure:** Virtual Machines.

### Storage in IaaS

- **Block storage** — like a physical disk attached to a VM. Low latency, file system on top. AWS EBS, Azure Disk.
- **Object storage** — flat namespace, HTTP-accessible, massively scalable. AWS S3, Azure Blob. For images, backups, logs, media.
- **File storage** — shared file system, NFS/SMB. AWS EFS, Azure Files. For shared configs, legacy apps.

### Networking in IaaS

- **VPC / VNet** — your private network in the cloud. Subnets, route tables, gateways.
- **Security groups / NSGs** — stateful firewalls at the instance/subnet level.
- **Load balancers** — distribute traffic. Layer 4 (TCP) vs Layer 7 (HTTP/HTTPS).
- **NAT gateways** — outbound internet access for private subnets.
- **Peering, VPN, Direct Connect / ExpressRoute** — connecting VPCs and on-prem.

---

## Definitions to Memorise

| Term | Definition |
|------|------------|
| | |

---

## AWS ↔ Azure Service Mapping

| Concept | AWS | Azure |
|----------|-----|-------|
| Compute (VMs) | EC2 | Virtual Machines |
| Block Storage | EBS | Disk Storage |
| Object Storage | S3 | Blob Storage |
| File Storage | EFS | Files |
| VPC | VPC | VNet |
| Load Balancer | ELB/ALB | Load Balancer |
| Security Groups | Security Groups | NSGs |

---

## Connections to Other Weeks

- Week 4: *(further networking, CDN, DNS)*
- Week 5: *(serverless — Lambda uses some of these primitives underneath)*
- Week 6: *(cost — how these services are priced)*

---

## Related

- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam preparation hub
