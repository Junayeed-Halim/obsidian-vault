---
type: course
course: Cloud Computing
title: Week 06 Summary — Security, IAM, Compliance, Cost Management
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 06 Summary — Security, IAM, Compliance, Cost Management

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 06]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]

---

## What We Covered

### 1. Shared Responsibility Model — The Foundation of Cloud Security

- **Core concept:** Security responsibilities are divided between the cloud provider and the customer. The boundary depends on the service model.
- **Provider responsibility (Security OF the cloud):** Physical data centres, hardware, networking infrastructure, hypervisor, facilities (power, cooling, physical access). They secure the infrastructure that runs the cloud.
- **Customer responsibility (Security IN the cloud):** Data, IAM, OS patching (IaaS), application security, firewall configuration, encryption, network rules.
- **Shifts by service model:**
  - **IaaS:** Customer manages OS, apps, data, IAM. Provider manages hardware + hypervisor.
  - **PaaS:** Provider adds OS + runtime. Customer manages apps, data, IAM.
  - **SaaS:** Provider manages nearly everything. Customer manages data + access + configuration.
- **Key insight:** Customer is ALWAYS responsible for their data and who can access it. No service model absolves you of that.

### 2. IAM — Identity and Access Management

- **Users:** Individual identities with credentials (password, access keys). Use sparingly — prefer roles.
- **Groups:** Collect users, assign policies to the group. Cleaner than per-user policies.
- **Roles:** Identities that can be ASSUMED by entities (EC2 instances, Lambda functions, other AWS accounts). No permanent credentials. Temporary security tokens with limited lifetime.
- **Policies:** JSON documents defining permissions. Allow or deny specific actions on specific resources.
- **Least privilege:** Grant only the minimum permissions needed. Start with deny-all, add only what's needed. Review and tighten regularly.
- **MFA (Multi-Factor Authentication):** Essential for all users, especially administrative/root. Protects against compromised passwords/keys.
- **Root account:** The account owner. Has unlimited access. **Don't use it day-to-day.** Lock it down, use MFA, create admin users instead.
- **Access keys:** For programmatic access (CLI, SDK). Rotate regularly. Never embed in code or commit to git.

### 3. Encryption — At Rest and In Transit

- **At rest:** Data encrypted while stored on disk. EBS volumes, S3 buckets, RDS databases, backups. KMS (Key Management Service) manages encryption keys. Customer-managed keys give you more control; provider-managed keys are easier.
- **In transit:** Data encrypted while moving across the network. TLS/SSL for HTTPS. VPN tunnels for site-to-site. Ensures no eavesdropping or tampering on the network path.
- **Both are needed:** At rest protects against storage compromise (stolen drives, unauthorised disk access). In transit protects against network interception. Together they cover the two main exposure points.

### 4. Compliance — It's Not Automatic

- **Shared responsibility applies to compliance too:** The provider certifies their infrastructure (SOC 2, ISO 27001, HIPAA eligibility, PCI-DSS). But YOUR configuration determines whether YOUR workload is compliant.
- **Using AWS doesn't make you HIPAA compliant** — you must configure encryption, access controls, audit logging, data handling correctly.
- **Common frameworks:** GDPR (EU data privacy), HIPAA (US health data), PCI-DSS (payment card industry), SOC 2 (trust services), ISO 27001 (information security management).
- **Compliance is shared effort:** Provider gives compliant infrastructure. Customer configures compliantly. Auditor assesses the combined result.

### 5. Cost Management — Pricing Models

| Model | Commitment | Discount | Flexibility | Best For |
|-------|-----------|----------|-------------|----------|
| **On-demand** | None | 0% (baseline) | Highest — start/stop anytime | Short-term, unpredictable, testing |
| **Reserved Instances** | 1 or 3 years, specific instance | 30-70% | Low — locked to instance family/region | Steady-state, predictable workloads |
| **Savings Plans** | 1 or 3 years, spend amount | 30-70% | Medium — applies across instance families/regions | Flexible steady-state |
| **Spot / Preemptible** | None (market price) | Up to 90% | Low — can be interrupted with short notice | Fault-tolerant batch, interruptible workloads |
| **Free Tier** | None (new accounts) | 100% (limited) | Low — limits apply | Learning, testing, very small workloads |

### 6. Cost Optimisation Strategies

- **Right-sizing:** Match instance size to actual utilisation. Over-provisioning wastes money. Use CloudWatch/Cloud Monitor to check CPU, memory, network.
- **Commitments for steady-state:** Reserved Instances or Savings Plans for workloads that run 24/7 predictably.
- **Spot for batch:** Fault-tolerant, interruptible workloads run on spot/preemptible for up to 90% savings.
- **Turn off what you're not using:** Dev/test environments on schedules. Auto-stop at night/weekends.
- **Storage lifecycle policies:** Move old data to cheaper tiers (S3 Standard → S3 Infrequent Access → S3 Glacier). Automate with lifecycle rules.
- **Tagging:** Tag every resource by project, environment, owner. Enables cost allocation, accountability, and identifying waste.
- **Budgets and alerts:** Set budget thresholds. Get alerted before bills explode. Don't wait for the monthly bill to discover a problem.
- **Cloud Pricing Calculators:** Use them before provisioning. Know what you'll pay.

---

## Key Takeaways

1. **Shared Responsibility Model is non-negotiable knowledge.** Know what the provider secures vs what you secure for IaaS, PaaS, SaaS.
2. **Least privilege + MFA** is the IAM baseline. Roles > users for workloads. Rotate keys.
3. **Encryption at rest AND in transit** — both are standard practice, both are often exam requirements.
4. **Compliance is not automatic** — provider certification + your configuration = compliant workload.
5. **Right pricing model for the workload:** On-demand (flexible/unpredictable), Reserved/Savings (steady/predictable), Spot (fault-tolerant batch).
6. **Cost optimisation is ongoing** — right-size, turn off unused, lifecycle policies, tag, monitor, alert.

---

## What's Next

- Exam preparation — review all weeks, do practice questions, fill in weak spots

---

## Questions to Think About

1. A company moves from on-prem to IaaS in the cloud. What security responsibilities did they keep, and what did they offload?
2. A developer commits AWS access keys to a public GitHub repo. What should happen next? How could this have been prevented?
3. Why might a 3-year Reserved Instance be a bad choice for a startup building a new product?

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 06]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Week 06 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 05 Summary]] — previous week
