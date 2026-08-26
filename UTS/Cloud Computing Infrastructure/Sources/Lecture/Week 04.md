---
type: lecture-notes
course: Cloud Computing
title: Week 04 — Cloud Networking, CDN, DNS, Content Delivery
status: to_process
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-04
---

# Week 04 — Cloud Networking, CDN, DNS, Content Delivery

> **Source:** [[Week4_CloudLecture-5.pdf]]
> **Status:** TODO — Process this PDF in Open Notebook, then fill in your extracted notes below.

---

## TODO — Process in Open Notebook First

1. Open Open Notebook
2. Import `[[Week4_CloudLecture-5.pdf]]`
3. Ask: "What are the key networking concepts, CDN, DNS, and exam-relevant points?"
4. Copy output below and rewrite in your own words

---

## Key Concepts

### Advanced VPC/VNet Networking

- **Subnet design** — public vs private subnets. DMZ pattern.
- **Route tables** — how traffic flows. Internet gateway, NAT gateway, VPC peering, transit gateway.
- **VPC Peering** — direct network connection between two VPCs. No transitive peering.
- **Transit Gateway** — hub-and-spoke for many VPCs. Centralised routing.
- **VPN / Direct Connect** — connecting on-prem to cloud.

### Content Delivery Networks (CDN)

- **What it does:** Caches content at edge locations closer to users. Reduces latency, offloads origin.
- **How it works:** User → nearest edge → if cached, serve; if not, fetch from origin, cache, serve.
- **Use cases:** Static assets (images, CSS, JS), video streaming, accelerating dynamic content, DDoS protection.
- **AWS:** CloudFront. **Azure:** CDN / Front Door.

### DNS in the Cloud

- **Route 53 / Azure DNS** — managed DNS services.
- **Record types:** A, AAAA, CNAME, MX, TXT, SRV, Alias/ANAME.
- **Routing policies:** Simple, weighted (A/B testing), latency-based (route to nearest region), geolocation, failover (active-passive).
- **Health checks** — DNS failover based on endpoint health.

---

## Definitions to Memorise

| Term | Definition |
|------|------------|
| CDN | |
| Edge location | |
| Origin | |
| DNS | |
| Latency-based routing | |
| Geolocation routing | |
| Failover routing | |
| VPC Peering | |
| Transit Gateway | |

---

## Related

- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam preparation hub
