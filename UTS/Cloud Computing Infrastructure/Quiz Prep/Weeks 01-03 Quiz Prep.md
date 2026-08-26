---
type: course
course: Cloud Computing
title: Quiz Prep - Weeks 01-03
status: to_complete
created: 2026-08-26
tags:
  - UTS
  - cloud
  - quiz
  - cloud-computing
  - quiz-prep
---

# Quiz Prep — Weeks 01-03

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Status:** TODO — Fill in after processing lectures in Open Notebook

---

## Key Definitions — Memorise These

| Term | Definition |
|------|------------|
| Cloud Computing | |
| IaaS | |
| PaaS | |
| SaaS | |
| Public Cloud | |
| Private Cloud | |
| Hybrid Cloud | |
| Virtualisation | |
| Hypervisor | |
| Container | |
| VM (Virtual Machine) | |
| Scalability | |
| Elasticity | |
| Multi-cloud | |

---

## Common Quiz Question Types

### Type 1: Identify the Service Model

**Question format:** "A company wants to run their application on servers they don't manage, but they still control the OS and runtime. Which service model?"

**Approach:**
- You manage: app + data → **SaaS**
- You manage: app + OS → **PaaS**
- You manage: everything except hardware → **IaaS**
- You manage: nothing → **On-premises**

### Type 2: Deployment Model Choice

**Question format:** "A financial institution needs cloud but has strict data residency laws. Which deployment model?"

**Approach:**
- Strict compliance/data sovereignty → **Private** or **Hybrid**
- Cost + scale + no restrictions → **Public**
- Some workloads public, sensitive on-prem → **Hybrid**

### Type 3: VM vs Container

**Question format:** "What's the difference between a VM and a container? When would you use each?"

**Approach:**
- VM: full OS, heavier, stronger isolation, slower startup
- Container: shared OS kernel, lighter, faster startup, less isolation
- Use VMs for: different OSes, strong security boundaries
- Use containers for: microservices, CI/CD, fast scaling

---

## Practice Questions

### Q1
Which cloud service model gives you the MOST control over the underlying infrastructure?

A) SaaS
B) PaaS
C) IaaS
D) Serverless

<details>
<summary>Answer</summary>

**C) IaaS** — you manage the OS, runtime, middleware, and applications. The provider only manages the physical hardware, networking, and virtualization layer.
</details>

---

### Q2
A startup wants to deploy a web application quickly with minimal infrastructure management. They don't want to worry about OS patching or server provisioning. Which model?

A) IaaS
B) PaaS
C) SaaS
D) On-premises

<details>
<summary>Answer</summary>

**B) PaaS** — the platform manages the OS, runtime, and infrastructure. They just deploy their application code.
</details>

---

### Q3
Explain the difference between scalability and elasticity in your own words.

<details>
<summary>Answer</summary>

**Scalability** is the ability to handle increased load by adding resources (scaling up/out). It's a design property — can the system grow?

**Elasticity** is the ability to automatically scale resources up AND down based on demand. It's about responsiveness to fluctuating load — not just growing, but shrinking too to save costs.
</details>

---

### Q4
Why would a company choose a hybrid cloud over a pure public cloud?

<details>
<summary>Answer</summary>

Common reasons:
1. **Compliance/data residency** — sensitive data must stay on-premises
2. **Legacy systems** — some apps can't be migrated yet
3. **Bursting** — handle seasonal spikes by using public cloud temporarily
4. **Gradual migration** — move workloads to cloud over time
5. **Cost** — keep steady baseline on-prem, use cloud for peaks
</details>

---

### Q5
What is a hypervisor and why is it fundamental to cloud computing?

<details>
<summary>Answer</summary>

A **hypervisor** (or Virtual Machine Monitor) is software that creates and runs virtual machines. It sits between the physical hardware and the VMs, allocating CPU, memory, and storage to each VM while keeping them isolated from each other.

It's fundamental to cloud because:
- It allows **multi-tenancy** — many customers share the same physical hardware securely
- It enables **rapid provisioning** — spin up a VM in minutes, not days
- It enables **resource efficiency** — pack more workloads onto less hardware
- It's the foundation of **IaaS** — every EC2 instance or Azure VM runs on a hypervisor
</details>

---

## Quick Reference — Service Model Responsibility

| Layer | On-Prem | IaaS | PaaS | SaaS |
|-------|---------|------|------|------|
| Applications | You | You | You | Provider |
| Data | You | You | You | Provider |
| Runtime | You | You | Provider | Provider |
| Middleware | You | You | Provider | Provider |
| OS | You | You | Provider | Provider |
| Virtualisation | You | Provider | Provider | Provider |
| Servers | You | Provider | Provider | Provider |
| Storage | You | Provider | Provider | Provider |
| Networking | You | Provider | Provider | Provider |

---

## Exam Tips

- **Service model questions are guaranteed** — know the responsibility matrix cold
- **Scenario questions** — read what the company manages vs what the provider manages
- **"Explain the difference between X and Y"** — always give a concrete example
- **Don't confuse scalability (can grow) with elasticity (auto grow + shrink)**
- **VM vs container** — know isolation, weight, startup time, and use cases

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]] — lecture notes
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 01-03 Summary]] — weekly summary
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
