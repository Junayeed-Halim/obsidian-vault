---
type: course
course: Career
title: Azure - Cloud Computing Notes
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - Career
  - Azure
  - cloud
---

# Azure - Cloud Computing Notes

Microsoft Azure is the second-largest cloud platform. These notes cover core services and compare with [[UTS/Career/AWS]].

---

## Core Services

### Compute
| Service | Description | AWS Equivalent |
|---|---|---|
| **Virtual Machines** | IaaS — Windows/Linux VMs | EC2 |
| **App Service** | PaaS — web apps, APIs | Elastic Beanstalk |
| **Azure Functions** | Serverless — event-driven code | Lambda |
| **AKS** | Managed Kubernetes | EKS |
| **Azure Container Instances** | Serverless containers | ECS/Fargate |

### Storage
| Service | Description | AWS Equivalent |
|---|---|---|
| **Blob Storage** | Object storage | S3 |
| **Disk Storage** | VM attached disks | EBS |
| **Files** | Managed SMB file shares | EFS |
| **Archive Storage** | Long-term retention | Glacier |

### Databases
| Service | Description | AWS Equivalent |
|---|---|---|
| **SQL Database** | Managed relational (SQL Server) | RDS |
| **Cosmos DB** | Globally distributed NoSQL | DynamoDB |
| **MySQL/PostgreSQL on Azure** | Open-source relational | RDS |
| **Synapse Analytics** | Data warehousing | Redshift |

### Networking
| Service | Description | AWS Equivalent |
|---|---|---|
| **VNet** | Virtual Network | VPC |
| **Application Gateway** | Layer 7 load balancer | ALB |
| **Load Balancer** | Layer 4 load balancer | NLB |
| **Azure DNS** | DNS hosting | Route 53 |
| **CDN** | Content delivery | CloudFront |

### Security & Identity
| Service | Description |
|---|---|
| **Entra ID (Azure AD)** | Identity, SSO, MFA |
| **Key Vault** | Secrets, keys, certificates |
| **Security Center** | Threat detection, security posture |
| **Sentinel** | SIEM, security analytics |

### Machine Learning
| Service | Description |
|---|---|
| **Azure ML** | End-to-end ML platform |
| **Cognitive Services** | Pre-built AI APIs (vision, speech, language) |
| **Bot Service** | Build and deploy chatbots |

---

## Azure Certifications

| Level | Certification | Focus |
|---|---|---|
| Fundamental | AZ-900 | Cloud concepts, core services |
| Associate | AZ-104 | Administrator |
| Associate | AZ-204 | Developer |
| Associate | AZ-305 | Architect (design) |
| Expert | AZ-500 | Security |
| Expert | AZ-400 | DevOps |

---

## AWS vs Azure Key Differences

| Aspect | AWS | Azure |
|---|---|---|
| Market share | ~33% (largest) | ~23% |
| Enterprise integration | Good | Excellent (Microsoft ecosystem) |
| Hybrid cloud | Outposts | Azure Arc |
| Serverless | Lambda | Functions |
| Container leader | EKS (Kubernetes) | AKS (Kubernetes) |
| Pricing complexity | High | High |

---

## Related

- [[UTS/Career/AWS]] — AWS notes
- [[UTS/Career/Interviews]] — cloud interview questions
- [[UTS/Cloud Computing Infrastructure/Notes/Cloud Computing]] — course materials
