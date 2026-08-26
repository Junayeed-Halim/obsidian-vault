---
type: course
course: Cloud Computing
title: Quiz Prep - Week 05 — Serverless Computing
status: to_complete
created: 2026-08-26
tags:
  - UTS
  - cloud
  - quiz
  - cloud-computing
  - quiz-prep
---

# Quiz Prep — Week 05: Serverless Computing

> **Based on:** [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 05]]
> **Course:** [[UTS/Cloud Computing Infrastructure/Exam Prep|Cloud Computing Infrastructure]]
> **Status:** TODO — Fill in after processing lecture in Open Notebook

---

## Key Definitions — Memorise These

| Term | Definition |
|------|------------|
| Serverless | |
| FaaS | |
| Cold start | |
| Event-driven | |
| Stateless | |
| Concurrency | |
| Lambda | |
| Trigger | |
| Execution duration limit | |

---

## Practice Questions

### Q1
Explain what "serverless" actually means. Why is it called serverless if there are still servers?

<details>
<summary>Answer</summary>

**Serverless means you don't manage servers.** The term is misleading because servers absolutely exist — the cloud provider runs them. What's "serverless" from your perspective is:

1. **No provisioning** — you don't choose instance types, sizes, or quantities
2. **No scaling configuration** — scaling is automatic and instant
3. **No patching** — the provider handles OS and runtime updates
4. **No capacity planning** — you don't guess how much capacity you need
5. **Pay-per-use** — you pay per request/execution, not per hour of server time

It's called "serverless" because servers are abstracted away entirely from your concerns — you write code, the provider handles everything else. Similar to how "wireless" doesn't mean no wires exist, just that you don't deal with them.
</details>

---

### Q2
What is a cold start and why does it happen? Name two ways to mitigate it.

<details>
<summary>Answer</summary>

**Cold start:** The additional latency experienced on the first invocation of a serverless function after a period of inactivity. The runtime environment needs to be initialised — the provider provisions a container, loads your code, initialises the runtime, and then executes your function. This takes time (from ~100ms to several seconds depending on runtime and package size).

**Why it happens:** To save costs, providers shut down idle execution environments. When a new request comes in, a fresh environment must be created.

**Mitigation strategies:**
1. **Keep warm:** Periodic pings (e.g., scheduled event every 5 minutes) to keep environments active
2. **Provisioned concurrency:** Pay to keep a set number of environments always warm (AWS Lambda feature)
3. **Smaller deployment packages:** Less code to load = faster startup
4. **Choose faster runtimes:** Compiled languages (Go, Rust) typically cold-start faster than interpreted ones
5. **Use ARM/Graviton:** Sometimes faster cold starts than x86
</details>

---

### Q3
When would you NOT use serverless (FaaS)? Give three scenarios.

<details>
<summary>Answer</summary>

1. **Long-running processes:** FaaS has execution time limits (Lambda = 15 minutes). Video encoding, large data processing, long batch jobs need VMs or containers.

2. **Stateful applications:** FaaS functions are stateless — each invocation is independent. Applications that need persistent in-memory state (games, websockets, long-lived connections) need other approaches.

3. **Consistent, high-throughput workloads:** If you have steady, predictable, high-volume traffic, reserved VMs or containers are often cheaper than FaaS. You pay per request, and at high volume the per-request cost can exceed provisioned infrastructure cost.

**Other valid reasons:**
- Vendor lock-in concerns (tightly coupled to provider ecosystem)
- Cold start latency unacceptable for real-time user-facing requests (mitigatable but adds cost/complexity)
- Debugging complexity for complex event chains
</details>

---

### Q4
Compare IaaS, containers, and serverless in terms of management overhead and cost for a workload that has predictable traffic 24/7.

<details>
<summary>Answer</summary>

For **predictable 24/7 traffic**:

| | Management Overhead | Cost Efficiency |
|--|---------------------|-----------------|
| **IaaS (VMs)** | High — provision, patch, scale, monitor | **Best** — reserved instances give up to 70% discount. Predictable cost. |
| **Containers** | Medium — orchestration, but managed services reduce overhead | **Good** — can use reserved capacity. Slightly less efficient than VMs alone due to orchestration overhead. |
| **Serverless** | Lowest — just deploy code | **Worst for this case** — pay-per-request at high steady volume is more expensive than provisioned capacity. You're paying a premium for flexibility you don't need. |

**Key insight:** Serverless shines for variable/spiky/uncertain traffic. For predictable steady traffic, provisioned (IaaS/containers with reservations) is cheaper.
</details>

---

### Q5
A function is triggered every time a file is uploaded to an S3 bucket. The function processes the file and writes results to a database. Is this a good serverless use case? Why or why not?

<details>
<summary>Answer</summary>

**Yes, this is an excellent serverless use case:**

1. **Event-driven:** The trigger (S3 upload) is inherently an event — perfect match for FaaS
2. **Short-lived processing:** File processing typically takes seconds to minutes — well within execution limits
3. **Variable load:** Upload frequency may be unpredictable — serverless handles scaling automatically
4. **Zero idle cost:** When no files are uploaded, you pay nothing
5. **Stateless:** Each file is processed independently — no state needed between invocations
6. **Scalable:** If 100 files upload simultaneously, 100 concurrent executions spin up automatically

**State is handled externally:** The database is the state store, not the function — which is the correct pattern.
</details>

---

## Exam Tips

- **"Serverless is stateless"** — always mention that state goes to external storage
- **Cold starts** — know what they are, why they happen, and at least one mitigation
- **When NOT to use serverless** — long-running, stateful, or high steady-volume workloads
- **FaaS pricing** — per request + execution time, zero when idle
- **Event-driven architecture** — functions respond to events, don't poll
- **15-minute limit** — Lambda max execution time is a common exam fact

---

## Related

- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 05]] — lecture notes
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 05 Summary]] — weekly summary
- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub
