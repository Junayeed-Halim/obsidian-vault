---
type: course
course: Career
title: AWS - Cloud Computing Notes
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - Career
  - AWS
  - cloud
---

# AWS - Cloud Computing Notes

Amazon Web Services (AWS) is the leading cloud platform. These notes cover core services relevant to [[UTS/Cloud Computing Infrastructure/Notes/Cloud Computing]] and career preparation.

---

## Core Services

### Compute
| Service | Description | Use Case |
|---|---|---|
| **EC2** | Elastic Compute Cloud — virtual servers | General-purpose compute, hosting |
| **Lambda** | Serverless — run code without provisioning servers | Event-driven, short tasks |
| **ECS/EKS** | Container orchestration (Docker, Kubernetes) | Microservices, scalable apps |
| **Auto Scaling** | Automatically scale EC2 capacity | Variable workloads |

### Storage
| Service | Description |
|---|---|
| **S3** | Simple Storage Service — object storage, infinite scale |
| **EBS** | Elastic Block Store — block storage for EC2 |
| **EFS** | Elastic File System — shared file storage |
| ** Glacier** | Long-term, low-cost archival storage |

### Databases
| Service | Description |
|---|---|
| **RDS** | Managed relational databases (MySQL, PostgreSQL, etc.) |
| **DynamoDB** | NoSQL, key-value, single-digit-ms latency |
| **Aurora** | MySQL/PostgreSQL-compatible, high performance |
| **Redshift** | Data warehousing, analytics |

### Networking
| Service | Description |
|---|---|
| **VPC** | Virtual Private Cloud — isolated network |
| **Route 53** | DNS service |
| **CloudFront** | CDN — content delivery |
| **ELB** | Elastic Load Balancing |
| **API Gateway** | Manage APIs at any scale |

### Security & Identity
| Service | Description |
|---|---|
| **IAM** | Identity and Access Management — users, roles, policies |
| **KMS** | Key Management Service — encryption keys |
| **Shield** | DDoS protection |
| **WAF** | Web Application Firewall |

### Machine Learning
| Service | Description |
|---|---|
| **SageMaker** | End-to-end ML — build, train, deploy models |
| **Rekognition** | Image and video analysis |
| **Comprehend** | NLP — sentiment, entities, topics |
| **Pinpoint** | Marketing communications |

---

## Well-Architected Framework

Six pillars:
1. **Operational Excellence** — run and monitor systems, improve processes.
2. **Security** — protect data, systems, and assets.
3. **Reliability** — recover from disruptions, scale horizontally.
4. **Performance Efficiency** — use computing resources efficiently.
5. **Cost Optimisation** — avoid unnecessary costs.
6. **Sustainability** — minimise environmental impact.

---

## Pricing Models

- **On-Demand** — pay per second/hour, no commitment.
- **Reserved Instances** — discount for 1-3 year commitment.
- **Spot Instances** — up to 90% discount, can be interrupted.
- **Savings Plans** — flexible commitment to usage.

---

## Exam / Interview Prep

- **EC2 pricing:** On-Demand vs Reserved vs Spot.
- **S3 storage classes:** Standard, Intelligent-Tiering, Glacier.
- **IAM:** least privilege principle, roles vs users.
- **VPC:** subnets (public/private), NAT gateway, security groups vs NACLs.
- **Lambda:** use cases, limitations (timeout, memory), pricing.

---

## Related

- [[UTS/Career/Azure]] — Microsoft's cloud platform
- [[UTS/Career/Interviews]] — cloud interview questions
- [[UTS/Cloud Computing Infrastructure/Notes/Cloud Computing]] — course materials
