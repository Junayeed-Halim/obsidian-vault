---
type: course
course: Cloud Computing
title: Quiz Prep - Week 04 — Networking, CDN, DNS
status: to_complete
created: 2026-08-26
tags:
  - UTS
  - cloud
  - quiz
  - cloud-computing
  - quiz-prep
---

# Quiz Prep — Week 04: Networking, CDN, DNS

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 04]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Status:** TODO — Fill in after processing lecture in Open Notebook

---

## Key Definitions — Memorise These

| Term | Definition |
|------|------------|
| CDN | |
| Edge location | |
| Origin server | |
| DNS | |
| Latency-based routing | |
| Geolocation routing | |
| Failover routing | |
| VPC Peering | |
| Transit Gateway | |
| Public subnet | |
| Private subnet | |

---

## Practice Questions

### Q1
What is the primary purpose of a CDN and how does it reduce latency?

<details>
<summary>Answer</summary>

**Answer:** A CDN caches content at edge locations geographically closer to users. When a user requests content, they hit the nearest edge cache instead of the origin server (which might be thousands of km away). This reduces latency because:
1. Physical distance is shorter → less network travel time
2. Cached content is served instantly (no origin processing)
3. Offloads traffic from the origin, improving its performance too
</details>

---

### Q2
Explain the difference between latency-based routing and geolocation routing in DNS.

<details>
<summary>Answer</summary>

**Latency-based routing:** Routes traffic to the region that provides the lowest network latency for that specific user, measured in real time. Good for globally distributed apps where performance matters most.

**Geolocation routing:** Routes traffic based on the user's geographic location (country, continent, or sub-continent). Routes to a specific region regardless of latency. Good for compliance (data must stay in a region), localised content, or language-specific experiences.

**Key difference:** Latency-based = performance-driven. Geolocation = location-driven (might sacrifice latency for compliance or localisation).
</details>

---

### Q3
What is VPC peering and what is a key limitation of it?

<details>
<summary>Answer</summary>

**VPC peering** creates a direct network connection between two VPCs, allowing traffic to route between them using private IP addresses as if they were on the same network.

**Key limitation:** VPC peering is NOT transitive. If VPC A peers with VPC B, and VPC B peers with VPC C, VPC A CANNOT reach VPC C through B. Each peering connection is a direct point-to-point link. For many VPCs, use Transit Gateway instead (hub-and-spoke).
</details>

---

### Q4
Why would you place a database in a private subnet rather than a public subnet?

<details>
<summary>Answer</summary>

A **private subnet** has no direct route to the internet (no Internet Gateway in its route table). This means:
1. **Security:** The database is not directly reachable from the internet — no external attacks can target it
2. **Attack surface reduction:** Only resources inside the VPC (app servers in other subnets) can reach it
3. **Compliance:** Many standards require databases to be isolated from public access

The database can still access the internet (for patches, updates) via a NAT gateway in a public subnet — outbound only, not inbound.
</details>

---

### Q5
What happens when a CDN edge cache doesn't have the requested content? Describe the flow.

<details>
<summary>Answer</summary>

1. User requests `https://cdn.example.com/image.jpg` from the nearest edge location
2. Edge checks its cache — cache MISS (content not present or expired)
3. Edge forwards the request to the **origin server** (your S3 bucket, EC2, or custom origin)
4. Origin returns the content
5. Edge caches the content (based on cache headers — TTL, Cache-Control)
6. Edge returns the content to the user
7. Next request for the same content hits the cache → cache HIT → served instantly from edge

**Key point:** The first request after cache expiry pays the latency penalty. Subsequent requests are fast.
</details>

---

## Exam Tips

- **CDN questions often ask "when would you use a CDN?"** — answer: static content, global audience, reduce origin load, DDoS mitigation
- **DNS routing policies** — know the difference between latency, geolocation, and failover
- **Public vs private subnet** — public has IGW route, private doesn't. Private uses NAT for outbound.
- **VPC peering is NOT transitive** — this is a classic exam gotcha
- **Explain the CDN cache HIT vs MISS flow** — they often ask for the sequence

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 04]] — lecture notes
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 04 Summary]] — weekly summary
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
