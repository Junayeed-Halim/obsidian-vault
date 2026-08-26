---
type: course
course: Cloud Computing
title: Exam Prep — Cloud Computing Infrastructure
status: in_progress
created: 2026-08-26
tags:
  - UTS
  - cloud
  - exam-prep
  - cloud-computing
---

# Exam Prep — Cloud Computing Infrastructure

> **Exam focus:** Everything from Weeks 1-6 lectures + labs + assignments.
> **Last updated:** 2026-08-26

---

## Quick Reference — Exam Topics by Week

| Week | Topic | Lecture PDF | Notes | Quiz Prep |
|------|-------|-------------|-------|-----------|
| 1-3 | [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]] | [[Lecture/UTS Cloud Lecture 1-3.pdf]] | — | — |
| 5 | Week 5 | [[Lecture/Week5_Cloud Lecture.pdf]] | — | — |
| 4 | Week 4 | [[Lecture/Week4_CloudLecture-5.pdf]] | — | — |
| 6 | Week 6 | [[Lecture/Week6_CloudLecture-2.pdf]] | — | — |
| 2 | Week 2 | [[Lecture/Week2_CloudLecture-5.pdf]] | — | — |
| 3 | Week 3 | [[Lecture/Week3_CloudLecture-3.pdf]] | — | — |

---

## High-Yield Topics (Start Here)

These are the topics most likely to appear on the exam. Study these first.

### 1. Cloud Service Models (IaaS, PaaS, SaaS)

- **Definition of each** — what the provider manages vs what you manage
- **Examples** of each (AWS EC2 = IaaS, Azure App Service = PaaS, Office 365 = SaaS)
- **When to choose which** — tradeoffs
- **Comparison table** — responsibility matrix

### 2. Cloud Deployment Models

- Public, private, hybrid, multi-cloud — definitions and use cases
- **When to use hybrid** vs pure public
- Security and compliance implications

### 3. Virtualisation & Containers

- Hypervisors (Type 1 vs Type 2)
- Containers vs VMs — what's the difference, when to use each
- Docker basics, Kubernetes concepts (pods, services, deployments)

### 4. Cloud Storage Types

| Type | Use Case | AWS | Azure | Example |
|------|----------|-----|-------|---------|
| Object | Unstructured data, media, backups | S3 | Blob Storage | Images, videos, logs |
| Block | VM disks, databases | EBS | Disk Storage | OS disks, DB storage |
| File | Shared file systems, legacy apps | EFS | Files | Shared config files |

### 5. Networking in the Cloud

- VPC/VNet concepts — subnets, route tables, security groups/NSGs
- Load balancers — layers, health checks, sticky sessions
- CDN — what it does, when to use it
- DNS in the cloud

### 6. Security & IAM

- Shared Responsibility Model — what AWS/Azure secures vs what you secure
- IAM — users, groups, roles, policies
- Encryption — at rest vs in transit, KMS
- Firewalls and security groups

### 7. Serverless

- What "serverless" actually means (you still have servers, you just don't manage them)
- Lambda / Azure Functions — event-driven, pay-per-execution
- Use cases and limitations
- Cold starts

### 8. Cost Management

- Pricing models: on-demand, reserved, spot/preemptible
- Cost optimization strategies
- Monitoring and alerting on spend

---

## Concepts I Keep Getting Wrong

*(Fill this in as you study — track your weak spots)*

-

---

## Practice Questions

*(Write your own practice questions here as you go — active recall beats re-reading)*

### Q1
 -

<details>
<summary>Answer</summary>

</details>

---

## Exam Day Checklist

- [ ] Know the difference between IaaS, PaaS, SaaS with examples
- [ ] Can explain virtualisation vs containers
- [ ] Can compare object/block/file storage
- [ ] Understand VPC networking basics
- [ ] Know the shared responsibility model
- [ ] Can explain serverless and when to use it
- [ ] Understand cost models (on-demand vs reserved vs spot)
- [ ] Can describe a deployment model choice for a given scenario

---

## Source Material

### Lectures (PDFs — Process in Open Notebook)

- [[Lecture/UTS Cloud Lecture 1-3.pdf]] — Weeks 1-3
- [[Lecture/Week2_CloudLecture-5.pdf]] — Week 2
- [[Lecture/Week3_CloudLecture-3.pdf]] — Week 3
- [[Lecture/Week4_CloudLecture-5.pdf]] — Week 4
- [[Lecture/Week5_Cloud Lecture.pdf]] — Week 5
- [[Lecture/Week6_CloudLecture-2.pdf]] — Week 6

### Notes (Your Own Words)

- [[Notes/Cloud Computing]] — course index
- [[Sources/Lecture/Week 01-03]] — extracted notes from first 3 weeks
- [[Sources/Lecture/Week 04]] — (to create)
- [[Sources/Lecture/Week 05]] — (to create)
- [[Sources/Lecture/Week 06]] — (to create)

### Quiz Prep

- [[Quiz Prep/Week 01-03 Quiz Prep]] — (to create)
- [[Quiz Prep/Week 04 Quiz Prep]] — (to create)
- [[Quiz Prep/Week 05 Quiz Prep]] — (to create)
- [[Quiz Prep/Week 06 Quiz Prep]] — (to create)

### Weekly Summaries

- [[Weekly Summaries/Week 01-03 Summary]] — (to create)
- [[Weekly Summaries/Week 04 Summary]] — (to create)
- [[Weekly Summaries/Week 05 Summary]] — (to create)
- [[Weekly Summaries/Week 06 Summary]] — (to create)

---

## Study Plan

### Before Open Notebook Processing

- [ ] Move all 6 lecture PDFs from `Lecture/` into Open Notebook for AI processing
- [ ] Import any assignment briefs from Canvas

### After Open Notebook → Obsidian Flow

For each week's lecture:

1. **Open Notebook:** Import PDF, get AI summary, ask "what are the key concepts and definitions I need to know for an exam?"
2. **Obsidian Sources/Lecture/:** Create `Week XX.md` with the extracted key points
3. **Obsidian Notes/:** Rewrite in your own words — this is the actual study
4. **Obsidian Quiz Prep/:** Write 5-10 practice questions with hidden answers
5. **Obsidian Weekly Summaries/:** One-paragraph summary of the week

### Exam Countdown

- **1 week out:** Complete all Notes and Quiz Prep for all weeks
- **3 days out:** Do all practice questions without looking at notes
- **1 day out:** Review the High-Yield Topics list and Concepts I Keep Getting Wrong
- **Exam day:** Read the Exam Day Checklist

---

## Related

- [[UTS/Cloud Computing Infrastructure/Notes/Cloud Computing]] — course index
- [[UTS/Career/AWS]] — AWS deep dive (useful for IaaS/PaaS examples)
- [[UTS/Career/Azure]] — Azure deep dive (useful for comparison questions)
