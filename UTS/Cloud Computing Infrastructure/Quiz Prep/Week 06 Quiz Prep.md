---
type: course
course: Cloud Computing
title: Quiz Prep - Week 06 — Security, IAM, Compliance, Cost
status: to_complete
created: 2026-08-26
tags:
  - UTS
  - cloud
  - quiz
  - cloud-computing
  - quiz-prep
---

# Quiz Prep — Week 06: Security, IAM, Compliance, Cost Management

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 06]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Status:** TODO — Fill in after processing lecture in Open Notebook

---

## Key Definitions — Memorise These

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
| Savings Plans | |

---

## Practice Questions

### Q1
Explain the Shared Responsibility Model in cloud security. Give a specific example of something the provider is responsible for and something the customer is responsible for in IaaS.

<details>
<summary>Answer</summary>

**The Shared Responsibility Model** divides security responsibilities between the cloud provider and the customer:

**Provider (Security OF the cloud):**
- Physical data centre security (guards, biometrics, cameras)
- Hardware maintenance and security
- Network infrastructure underlying the cloud
- Hypervisor security
- Facilities (power, cooling, physical access)

**Customer (Security IN the cloud) — IaaS example:**
- **Customer responsibility:** OS patching and updates on their EC2 instance, configuring security groups (firewall rules), encrypting their data, managing IAM users and keys, application security.
- **Provider responsibility:** The physical server, the hypervisor, the underlying network fabric, the availability of the EC2 service itself.

**Key insight:** The customer is ALWAYS responsible for their data and access. The boundary shifts with service model — in SaaS, the provider takes on more, but the customer still controls their data and who can access it.
</details>

---

### Q2
Your company has a developer who needs to upload files to an S3 bucket. What's the correct IAM approach and why?

<details>
<summary>Answer</summary>

**Correct approach:**

1. Create an **IAM user** (or better, have the developer assume an **IAM role** if they're already authenticated via the corporate SSO)
2. Attach a **policy** that grants ONLY `s3:PutObject` (upload) permission on that specific bucket — not `s3:DeleteObject`, not `s3:GetObject` on other buckets, not `s3:*` on everything
3. Enable **MFA** for the user
4. If the developer only needs temporary access, use a **role with time-limited credentials** instead of a permanent user

**Why this approach:**
- **Least privilege:** Only the permission needed (upload), only on the resource needed (that bucket)
- **No broad permissions:** `s3:*` or `*` would allow deleting everything — too broad
- **MFA:** Protects against compromised credentials
- **Roles over users when possible:** Temporary credentials are safer than long-term access keys
</details>

---

### Q3
A company has a steady-state workload running 24/7 on EC2 instances. They're paying on-demand pricing. What cost optimisation would you recommend and how much could they save?

<details>
<summary>Answer</summary>

**Recommendation: Switch to Reserved Instances or Savings Plans.**

**Why:** Steady-state 24/7 workloads are the ideal use case for commitments. On-demand pricing is the most expensive per-unit cost — you pay a premium for flexibility you're not using.

**Savings:**
- **Reserved Instances (1-year):** ~30-40% discount vs on-demand
- **Reserved Instances (3-year):** ~60-70% discount vs on-demand
- **Savings Plans (1-year):** ~30-40% discount, more flexible (applies across instance families/regions)
- **Savings Plans (3-year):** ~60-70% discount

**Trade-off:** You lose flexibility — you're committed to a term. But for steady-state workloads, you're not needing that flexibility anyway.

**Additional recommendations:**
- Right-size instances (are they over-provisioned?)
- Check if any instances run at low utilisation and downsize
- Use auto-scaling if there's ANY variability in demand
</details>

---

### Q4
What's the difference between encryption at rest and encryption in transit? Give an example of each in a cloud context.

<details>
<summary>Answer</summary>

**Encryption at rest:** Data is encrypted while stored on disk. If someone steals the physical drive or gains unauthorised access to the storage medium, they can't read the data without the decryption key.

**Cloud example:** An EBS volume encrypted with AWS KMS. The data on the disk is stored in encrypted form. When the authorised EC2 instance reads it, KMS decrypts it in memory. If someone snapshots the volume and tries to access it from outside, they can't decrypt it without the key.

**Encryption in transit:** Data is encrypted while moving across the network. Prevents eavesdropping or tampering as data travels between client and server, or between services.

**Cloud example:** HTTPS (TLS) between a user's browser and your API running on EC2. The data in the HTTP request/response is encrypted over the network. Even if someone intercepts the packets on the network path, they can't read the contents.

**Both are needed:** At rest protects against storage compromise. In transit protects against network interception. A complete security posture uses both.
</details>

---

### Q5
A company wants to run a batch processing job that can be interrupted and resumed. It runs for about 2 hours and processes large datasets. What compute pricing model would you recommend and why?

<details>
<summary>Answer</summary>

**Recommendation: Spot Instances (AWS) / Preemptible VMs (Azure).**

**Why:**
1. **Fault-tolerant:** The job can be interrupted and resumed — exactly what spot instances are for
2. **Big cost savings:** Spot instances are up to 90% cheaper than on-demand
3. **Batch-friendly:** Batch jobs that can checkpoint and resume are the textbook use case for spot
4. **No need for guaranteed availability:** If the spot instance is reclaimed, the job resumes from its checkpoint on a new instance

**Strategy:**
- Design the job to checkpoint progress periodically
- Use a spot fleet or auto-scaling group with mixed spot + on-demand (spot for most, on-demand as fallback)
- Set a maximum price or use the default market price
- Handle interruption notices (AWS gives 2-minute warning before reclaim)

**Not on-demand/reserved:** Too expensive for interruptible batch work.
**Not serverless:** 2-hour duration is fine for Lambda (under 15-min limit? No — 2 hours exceeds Lambda's 15-minute limit). So Lambda doesn't work here at all.
</details>

---

## Shared Responsibility Quick Test

| Scenario | Who is responsible? |
|----------|---------------------|
| Patching the hypervisor | **Provider** |
| Patching the OS on an EC2 instance | **Customer** |
| Physical security of the data centre | **Provider** |
| Encrypting data in an S3 bucket | **Customer** (enables it) |
| Physical theft of a hard drive from the data centre | **Provider** (they handle it; data is safe if encrypted) |
| A developer leaks their AWS access key on GitHub | **Customer** (IAM hygiene) |
| The cloud provider's region goes offline | **Provider** (mitigated by multi-region design — shared effort) |

---

## Exam Tips

- **Shared Responsibility Model is THE security question** — know what shifts between IaaS/PaaS/SaaS
- **IAM questions** — least privilege, MFA, roles vs users, don't use root
- **Pricing questions** — know when to recommend on-demand vs reserved vs spot
- **Spot = interruptible, cheap, fault-tolerant workloads**
- **Reserved = steady-state, predictable**
- **On-demand = short-term, unpredictable, flexible**
- **RTO vs RPO** — time vs data loss. Know the difference cold.

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 06]] — lecture notes
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 06 Summary]] — weekly summary
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
