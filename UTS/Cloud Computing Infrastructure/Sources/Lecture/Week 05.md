---
type: lecture-notes
course: Cloud Computing
title: Week 05 — Serverless Computing
status: to_process
created: 2026-08-26
tags:
  - UTS
  - cloud
  - lecture-notes
  - week-05
---

# Week 05 — Serverless Computing

> **Source:** [[Week5_Cloud Lecture.pdf]]
> **Status:** TODO — Process this PDF in Open Notebook, then fill in your extracted notes below.

---

## TODO — Process in Open Notebook First

1. Open Open Notebook
2. Import `[[Week5_Cloud Lecture.pdf]]`
3. Ask: "What are the key serverless concepts, how it works, use cases, limitations, and exam-relevant points?"
4. Copy output below and rewrite in your own words

---

## Key Concepts

### What is Serverless?

- **Definition:** Running code without provisioning or managing servers. You deploy functions or applications, and the cloud provider handles everything else — scaling, patching, availability.
- **"Serverless" is a misnomer** — there ARE servers. You just don't see or manage them.
- **Two main forms:**
  - **FaaS (Function as a Service):** Individual functions triggered by events. AWS Lambda, Azure Functions, Google Cloud Functions.
  - **Serverless applications:** Managed services that abstract away infrastructure. DynamoDB, Aurora Serverless, S3, API Gateway.

### How FaaS Works

- **Event-driven:** Function runs in response to an event (HTTP request, file upload, message queue, schedule, database change).
- **Stateless:** Each invocation is independent. No persistent state between runs (use external storage).
- **Automatic scaling:** From 0 to thousands of concurrent executions. You don't configure scaling.
- **Pay-per-execution:** Billed by number of requests and execution time (millisecond granularity). No cost when idle.
- **Cold starts:** First invocation after idle period has latency while runtime initializes. Important for latency-sensitive apps.

### Use Cases

- **API backends** — HTTP APIs via API Gateway → Lambda
- **Event processing** — process files uploaded to S3, messages from queues
- **Scheduled tasks** — cron jobs, cleanup, reports
- **Real-time data processing** — stream processing, transformations
- **Chatbots, webhooks, glue code** — lightweight integrations

### Limitations

- **Cold starts** — latency on first invocation
- **Execution time limits** — Lambda maxes at 15 minutes
- **Statelessness** — must use external storage for state
- **Vendor lock-in** — tightly coupled to provider's ecosystem
- **Debugging/monitoring complexity** — distributed, event-driven
- **Not for long-running processes** — use containers or VMs instead

### Cost Comparison

| | VMs (IaaS) | Containers | Serverless (FaaS) |
|--|------------|------------|-------------------|
| Provisioning | Manual / auto-scaling groups | Container orchestration | None |
| Scaling | Configured | Configured | Automatic, instant |
| Pricing | Per hour (running) | Per hour / per request | Per request + execution time |
| Idle cost | Pay even when idle | Pay even when idle | Zero when idle |
| Max duration | Unlimited | Unlimited | ~15 minutes |

---

## Definitions to Memorise

| Term | Definition |
|------|------------|
| Serverless | |
| FaaS | |
| Cold start | |
| Event-driven | |
| Stateless | |
| Lambda | |
| Azure Functions | |
| API Gateway | |
| Trigger | |
| Concurrency | |

---

## Related

- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam preparation hub
