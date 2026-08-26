---
type: lecture-notes
course: Cloud Computing
title: Week 06 — Cloud Security, IAM, Compliance, Cost Management
status: to_process
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-06
---

# Week 06 — Cloud Security, IAM, Compliance, Cost Management

> **Source:** [[Week6_CloudLecture-2.pdf]]
> **Status:** TODO — Process this PDF in Open Notebook, then fill in your extracted notes below.

---

## TODO — Process in Open Notebook First

1. Open Open Notebook
2. Import `[[Week6_CloudLecture-2.pdf]]`
3. Ask: "What are the key security, IAM, compliance, and cost management concepts and exam-relevant points?"
4. Copy output below and rewrite in your own words

---

## Key Concepts

### Shared Responsibility Model

- **The fundamental security concept in cloud.**
- **Provider responsibility:** Security OF the cloud — physical infrastructure, hardware, networking, hypervisor, facilities, physical security.
- **Customer responsibility:** Security IN the cloud — data, IAM, OS patching (on VMs), firewall rules, encryption, application security.
- **Shifts with service model:**
  - IaaS: Customer manages most things (OS, app, data, IAM). Provider manages hardware + hypervisor.
  - PaaS: Provider manages OS + runtime. Customer manages app + data + IAM.
  - SaaS: Provider manages nearly everything. Customer manages data + access + configuration.

### IAM (Identity and Access Management)

- **Users** — individual people/services with credentials.
- **Groups** — collections of users. Assign policies to groups, not individuals.
- **Roles** — identity that can be ASSUMED by entities (EC2 instances, Lambda, other accounts). No permanent credentials. Temporary tokens.
- **Policies** — JSON documents defining permissions. Least privilege: grant only what's needed.
- **MFA (Multi-Factor Authentication)** — essential for all users, especially root/admin.
- **Principle of least privilege** — give the minimum permissions needed to do the job.

### Encryption

- **At rest:** Data stored on disk is encrypted. EBS volumes, S3 buckets, databases. KMS manages keys.
- **In transit:** Data moving over the network is encrypted. TLS/SSL for HTTPS. VPN tunnels.
- **Key management:** AWS KMS, Azure Key Vault. Symmetric vs asymmetric keys. Customer-managed keys vs provider-managed keys.

### Compliance

- **Shared responsibility again:** Provider gives you compliant INFRASTRUCTURE. You must configure it compliantly.
- **Common frameworks:** GDPR (data privacy), HIPAA (health data), PCI-DSS (payment cards), SOC 2, ISO 27001.
- **Compliance certifications** the provider holds don't automatically make YOUR workload compliant.

### Cost Management

- **Pricing models:**
  - **On-demand:** Pay per hour/second. No commitment. Highest unit cost, most flexible.
  - **Reserved instances / Savings Plans:** Commit to 1-3 years. Significant discount (up to 70%). Good for steady-state workloads.
  - **Spot / Preemptible:** Bid on unused capacity. Cheapest (up to 90% off), but can be interrupted with short notice. Good for batch, fault-tolerant workloads.
  - **Free tier:** Limited usage for new accounts. Watch the limits.

- **Cost optimisation strategies:**
  - Right-size instances — don't over-provision
  - Use reserved/savings for predictable workloads
  - Use spot for fault-tolerant batch
  - Turn off what you're not using (scheduling, auto-stop)
  - Storage lifecycle policies — move old data to cheaper tiers (S3 Glacier)
  - Monitor and alert — set budgets and alarms before bills explode

- **Tagging:** Tag resources by project, environment, owner. Enables cost allocation and accountability.

---

## Definitions to Memorise

| Term | Definition |
|------|------------|
| Shared Responsibility Model | |
| IAM | |
| MFA | |
| Least Privilege | |
| Encryption at rest | |
| Encryption in transit | |
| KMS | |
| RTO | |
| RPO | |
| On-demand pricing | |
| Reserved Instances | |
| Spot Instances | |
| Cost optimisation | |

---

## Shared Responsibility Matrix

| Layer | IaaS | PaaS | SaaS |
|-------|------|------|------|
| Data | Customer | Customer | Customer |
| IAM / Access | Customer | Customer | Shared |
| Application | Customer | Customer | Provider |
| OS / Runtime | Customer | Provider | Provider |
| Virtualisation | Provider | Provider | Provider |
| Physical / Hardware | Provider | Provider | Provider |

---

## Related

- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam preparation hub
