---
type: course
course: Cloud Computing
title: Week 01 Summary — Introduction to Cloud Computing
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 01 Summary — Introduction to Cloud Computing

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]

---

## What We Covered

### 1. What is Cloud Computing?

- **Definition:** The on-demand delivery of IT resources — compute, storage, networking, databases, analytics, AI — over the internet, with pay-as-you-go pricing.
- **Traditional model:** Buy servers, provision data centre, wait weeks for hardware, over-provision for peak, pay for idle capacity.
- **Cloud model:** Provision in minutes, scale up/down automatically, pay only for what you use.
- **NIST definition:** Five essential characteristics — on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service.

### 2. History and Evolution

- Mainframes → client-server → distributed computing → grid computing → cloud
- Amazon EC2 launch (2006) is widely considered the birth of modern public cloud
- Three major providers today: AWS (market leader), Microsoft Azure, Google Cloud Platform

### 3. Why Cloud? The Business Case

- **Cost:** Shift from CapEx (buying hardware) to OpEx (paying for usage). No upfront investment.
- **Speed:** Provision resources in minutes, not weeks. Faster time to market.
- **Scale:** Elastic — handle traffic spikes without over-provisioning. Global reach from day one.
- **Focus:** Stop managing hardware, start building your product.
- **Reliability:** Built-in redundancy, multiple availability zones, disaster recovery options.

### 4. Cloud Service Models — The Big Three

| Model | What You Manage | What Provider Manages | Example |
|-------|----------------|----------------------|---------|
| **IaaS** | Apps, data, runtime, middleware, OS | Virtualisation, servers, storage, networking | AWS EC2, Azure VM |
| **PaaS** | Apps, data | OS, runtime, middleware, plus all of IaaS | Azure App Service, AWS Elastic Beanstalk |
| **SaaS** | Nothing (just configure and use) | Everything | Office 365, Salesforce, Dropbox |

**Key insight:** As you move from IaaS → PaaS → SaaS, you manage less but also have less control. Choose based on how much customization you need vs how much you want to offload.

### 5. Cloud Deployment Models

- **Public cloud:** Shared infrastructure, multi-tenant, owned by a provider (AWS, Azure, GCP). Lowest cost, highest scale.
- **Private cloud:** Dedicated to one organisation. Can be on-prem or hosted. More control, more cost, more management burden.
- **Hybrid cloud:** Public + private connected. Run workloads where they make sense. Burst to public for peaks.
- **Multi-cloud:** Multiple public cloud providers. Avoid vendor lock-in, use best-of-breed services. Increases complexity.

### 6. Virtualisation — The Foundation

- **What it is:** Running multiple virtual machines on a single physical server, each with its own OS and isolated resources.
- **Hypervisor (VMM):** The software layer that makes virtualisation possible. Type 1 (bare-metal, e.g. VMware ESXi, Microsoft Hyper-V) runs directly on hardware. Type 2 (hosted, e.g. VirtualBox, VMware Workstation) runs on top of an OS.
- **Why it matters for cloud:** Enables multi-tenancy, rapid provisioning, resource efficiency — the core economics of cloud.

---

## Key Takeaways

1. **Cloud is a delivery model, not a thing.** It's about how you consume IT resources, not a specific technology.
2. **CapEx → OpEx** is the financial story. Pay for what you use, when you use it.
3. **Service models are a spectrum of control vs convenience.** IaaS = most control, SaaS = least.
4. **Virtualisation is the enabling technology.** Without it, cloud's economics don't work.
5. **No single deployment model is right.** The choice depends on compliance, cost, control, and existing infrastructure.

---

## What's Next (Week 02)

- Deep dive into IaaS — compute, storage, networking primitives
- AWS and Azure service mappings
- Hands-on: Launch your first VM

---

## Questions to Think About

1. Why did cloud computing become dominant when distributed computing and grid computing existed before?
2. A company has predictable, steady workloads. Would cloud still make sense for them? Why or why not?
3. What's the difference between "moving to the cloud" and "cloud-native"?

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Weeks 01-03 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 02 Summary]] — next week
