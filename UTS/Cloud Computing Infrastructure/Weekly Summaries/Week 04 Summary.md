---
type: course
course: Cloud Computing
title: Week 04 Summary — Cloud Networking, CDN, DNS
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 04 Summary — Cloud Networking, CDN, DNS, Content Delivery

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 04]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]

---

## What We Covered

### 1. Advanced VPC/VNet Networking

- **Subnet design:** Public subnets (route to Internet Gateway) vs private subnets (no direct internet access, use NAT for outbound).
- **Route tables:** Control traffic flow within and outside the VPC. Each subnet has a route table.
- **VPC Peering:** Direct network connection between two VPCs. Enables private IP communication across VPCs. **Not transitive** — each peering is a direct link.
- **Transit Gateway:** Hub-and-spoke model for connecting many VPCs and on-prem networks. Centralised routing, transitive.
- **VPN / Direct Connect / ExpressRoute:** Connecting on-premises to cloud. VPN = encrypted over internet. Direct Connect = dedicated physical connection, more reliable, lower latency.

### 2. Content Delivery Networks (CDN)

- **Purpose:** Cache content at edge locations close to users. Reduces latency, offloads origin, improves user experience globally.
- **How it works:** User → nearest edge cache → cache HIT (serve instantly) or cache MISS (fetch from origin, cache, serve). TTL controls how long content stays cached.
- **AWS:** CloudFront. **Azure:** Azure CDN / Front Door.
- **Use cases:** Static assets (images, CSS, JS), video streaming, accelerating dynamic content, DDoS protection at the edge.
- **Key insight:** CDNs are most effective when content is cacheable and users are geographically distributed. For dynamic personalised content, CDN benefits are limited.

### 3. DNS in the Cloud

- **Managed DNS:** Route 53 (AWS), Azure DNS. Highly available, programmable, integrates with other cloud services.
- **Record types:** A (IPv4), AAAA (IPv6), CNAME (alias to another domain), MX (mail), TXT (verification/SPF), Alias (AWS-specific — points to AWS resources without a fixed IP).
- **Routing policies:**
  - **Simple:** Single resource, basic DNS.
  - **Weighted:** Split traffic by percentage (A/B testing, gradual rollouts).
  - **Latency-based:** Route to the region with lowest network latency for that user.
  - **Geolocation:** Route based on user's geographic location. Compliance, localisation.
  - **Failover:** Active-passive. Primary region serves traffic; if health check fails, DNS routes to secondary.
- **Health checks:** Monitor endpoint health. DNS failover depends on health checks to detect when to switch.

### 4. Private vs Public Subnets — Deep Dive

- **Public subnet:** Has a route to an Internet Gateway (IGW). Resources here can be directly reached from the internet (if security groups allow). Use for load balancers, NAT gateways, bastion hosts.
- **Private subnet:** No route to IGW. Resources here are NOT directly reachable from the internet. Use for databases, application servers, backend services. Outbound internet access via NAT Gateway in a public subnet.
- **DMZ pattern:** Place public-facing resources in a DMZ subnet, backend in private subnets. Reduces attack surface.

---

## Key Takeaways

1. **Network design matters.** Subnet placement (public vs private) is a fundamental security decision. Databases belong in private subnets.
2. **VPC peering is not transitive** — a classic gotcha. For many VPCs, Transit Gateway is the answer.
3. **CDNs reduce latency by proximity** — caching content closer to users. Not a silver bullet; cacheability matters.
4. **DNS routing policies are powerful** — latency-based for performance, geolocation for compliance/localisation, failover for DR.
5. **Health checks enable DNS failover** — without them, DNS doesn't know when to switch.

---

## What's Next (Week 05)

- Serverless computing — FaaS (Lambda, Azure Functions)
- Event-driven architecture
- Cold starts, pricing, use cases, limitations

---

## Questions to Think About

1. Why can't VPC peering be transitive? What would need to change to make it transitive?
2. When would you choose geolocation routing over latency-based routing?
3. A global e-commerce site has a CDN in front of its product images. What happens when you update a product image — how do you make sure users see the new version?

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 04]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Week 04 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 05 Summary]] — next week
