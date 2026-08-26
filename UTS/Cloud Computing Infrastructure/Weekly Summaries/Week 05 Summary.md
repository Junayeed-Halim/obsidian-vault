---
type: course
course: Cloud Computing
title: Week 05 Summary — Serverless Computing
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - cloud
  - week
  - weekly-summary
  - cloud-computing
---

# Week 05 Summary — Serverless Computing

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 05]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]

---

## What We Covered

### 1. What "Serverless" Actually Means

- **Misleading name:** There are servers. You just don't manage them, provision them, scale them, or patch them.
- **The value proposition:** You deploy code. The cloud provider handles everything else — infrastructure, scaling, availability, patching. You pay only when your code runs.
- **Two forms:**
  - **FaaS (Function as a Service):** Individual functions triggered by events. AWS Lambda, Azure Functions, Google Cloud Functions.
  - **Serverless services:** Managed services where you don't see the infrastructure at all. DynamoDB, S3, API Gateway, Aurora Serverless.

### 2. How FaaS Works — Core Mechanics

- **Event-driven:** Functions execute in response to events — HTTP requests (via API Gateway), file uploads (S3), messages (SQS/SNS), database changes (DynamoDB Streams), schedules (EventBridge/CloudWatch Events), IoT events.
- **Stateless:** Each invocation is independent. No persistent state between invocations. State goes to external services (databases, S3, caches).
- **Automatic scaling:** From 0 (no cost when idle) to thousands of concurrent executions. Zero configuration. Provider handles it.
- **Pay-per-execution:** Billed by number of invocations and execution duration (millisecond granularity). No cost when no requests come in.
- **Concurrency limits:** Providers cap concurrent executions per region/account (AWS Lambda default = 1,000 per region, configurable). Prevent runaway costs.

### 3. Cold Starts — The Serverless Tax

- **What:** Additional latency on first invocation after idle period. Provider must provision a new execution environment, load your code, initialise runtime.
- **Why:** Providers shut down idle environments to save costs. New requests need fresh environments.
- **Impact:** ~100ms to several seconds depending on runtime, package size, memory allocation.
- **Mitigations:**
  - **Provisioned concurrency** (AWS) — pay to keep environments warm
  - **Periodic pings** — scheduled events keep functions warm (hacky but works)
  - **Smaller packages** — less code to load = faster starts
  - **Faster runtimes** — compiled languages (Go, Rust) generally cold-start faster
  - **ARM/Graviton** — sometimes faster than x86
- **When it matters:** User-facing, latency-sensitive requests. Background processing — cold starts are irrelevant.

### 4. Use Cases — Where Serverless Shines

- **API backends:** HTTP APIs via API Gateway → Lambda. Scale automatically, pay per request.
- **Event processing:** S3 upload → Lambda to process image, generate thumbnail, notify. Perfect event-driven match.
- **Scheduled tasks:** Cron jobs, cleanup, reports via EventBridge scheduled rules.
- **Real-time stream processing:** Kinesis/DynamoDB Streams → Lambda for transformations.
- **Chatbots, webhooks, glue code:** Lightweight integrations, small pieces of logic.
- **Zero-idle workloads:** Infrequent but unpredictable traffic — you don't pay for idle time.

### 5. Limitations — Where Serverless Fails

- **Execution time limits:** Lambda max 15 minutes. Long-running jobs need VMs/containers.
- **Statelessness:** No in-memory state between invocations. Must use external storage.
- **Cold starts:** Real latency penalty for latency-sensitive, user-facing, low-volume workloads (mitigatable but adds cost/complexity).
- **Vendor lock-in:** Tightly coupled to provider's event sources, SDK, deployment model. Moving to another cloud means rewriting.
- **Debugging complexity:** Distributed, event-driven, short-lived. Traditional debugging tools don't work the same way. Need distributed tracing (X-Ray, CloudWatch).
- **Not for consistent high-throughput:** At high steady volume, provisioned infrastructure (reserved VMs/containers) is often cheaper than pay-per-request.

### 6. Cost Comparison — IaaS vs Containers vs Serverless

| | IaaS (VMs) | Containers | Serverless (FaaS) |
|--|------------|------------|-------------------|
| **Provisioning** | Manual or ASGs | Orchestration (ECS/EKS) | None |
| **Scaling** | Configured | Configured | Automatic, instant |
| **Pricing** | Per hour (running) | Per hour / request | Per request + execution time |
| **Idle cost** | Pay even when idle | Pay even when idle | Zero when idle |
| **Max duration** | Unlimited | Unlimited | ~15 minutes |
| **Best for** | Predictable, long-running, full control | Microservices, portable, moderate traffic | Variable traffic, event-driven, short tasks, zero idle |

---

## Key Takeaways

1. **"Serverless" = you don't manage servers.** Servers exist; you just don't deal with them.
2. **Event-driven + stateless is the core architecture.** Functions respond to events, hold no state.
3. **Cold starts are the price of zero-idle.** Pay with latency or pay to keep warm.
4. **Pay-per-use is great for variable traffic** — but at high steady volume, provisioned is cheaper.
5. **15-minute limit** is a hard boundary. Long jobs need VMs/containers.
6. **Vendor lock-in is real** — serverless code is the most cloud-specific you can get.

---

## What's Next (Week 06)

- Cloud security, IAM, compliance, cost management
- Shared Responsibility Model
- Pricing models deep dive

---

## Questions to Think About

1. Why are serverless functions stateless by design? What would change if they had persistent state?
2. A startup has an API that gets 10 requests per day. What's the most cost-effective way to host it?
3. Your serverless function suddenly receives 10,000 concurrent requests. What happens? What could go wrong?

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 05]] — full lecture notes
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Week 05 Quiz Prep]] — practice questions
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 06 Summary]] — next week
