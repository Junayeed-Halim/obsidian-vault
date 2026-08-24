---
type: course
course: Career
title: Interviews - Career Prep
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - Career
  - interviews
  - prep
---

# Interviews - Career Prep

Interview preparation notes covering technical, behavioural, and cloud-specific questions. Connects to [[UTS/Career/AWS]] and [[UTS/Career/Azure]].

---

## Technical Interview Categories

### Data Structures & Algorithms
- Arrays, strings, linked lists, stacks, queues
- Hash tables, trees, graphs, heaps
- Sorting (merge sort, quick sort), searching (binary search)
- Dynamic programming, greedy algorithms
- **Complexity analysis:** Big-O notation

### Machine Learning (for ML roles)
- Supervised vs unsupervised learning
- Overfitting, bias-variance tradeoff, regularisation
- Evaluation metrics (precision, recall, F1, AUC)
- Common algorithms and when to use each
- Feature engineering, cross-validation

### System Design
- Scalability, load balancing, caching
- Database choices (SQL vs NoSQL)
- Microservices vs monolith
- API design (REST, gRPC)
- Message queues (Kafka, RabbitMQ)

### Cloud (AWS/Azure)
- Core services and when to use them
- Well-Architected Framework principles
- Security (IAM, encryption, networking)
- Cost optimisation strategies
- Serverless vs containers vs VMs

---

## Behavioural Questions (STAR Method)

Structure answers with **STAR**:
- **S**ituation — set the context
- **T**ask — what was the goal
- **A**ction — what you did (focus on YOUR contribution)
- **R**esult — outcome, quantified if possible

### Common Questions
1. Tell me about yourself.
2. Describe a challenging project and how you overcame obstacles.
3. Tell me about a time you worked in a team conflict.
4. Describe a time you failed and what you learned.
5. Why do you want to work here?

---

## ML Interview Questions

**Fundamentals:**
- What is the bias-variance tradeoff? → [[UTS/Machine Learning/Sources/Lecture/Week 02]]
- Explain overfitting and how to prevent it.
- What's the difference between L1 and L2 regularisation?
- How does k-NN work? What are its limitations?

**Algorithms:**
- How does logistic regression work? Why is it called "regression"?
- Explain the decision tree splitting criteria (Gini, entropy).
- What is the kernel trick in SVMs?
- How does a random forest reduce overfitting compared to a single tree?

**Evaluation:**
- When would you use precision vs recall?
- What does AUC represent?
- How do you handle imbalanced datasets?

**Practical:**
- Walk through your ML project end-to-end.
- How do you choose which model to use?
- How do you handle missing data?

---

## Cloud Interview Questions

**AWS:**
- Explain the difference between S3 and EBS.
- What is a VPC? Describe public vs private subnets.
- How do IAM roles differ from IAM users?
- When would you use Lambda vs EC2?
- What are the six pillars of the Well-Architected Framework?

**Azure:**
- Compare Azure Functions and Azure App Service.
- What is Cosmos DB and when would you use it?
- Explain Azure VNet and its components.
- What is Entra ID (Azure AD)?

---

## Questions to Ask the Interviewer

- What does a typical day look like in this role?
- What are the biggest challenges the team is facing?
- How is success measured for this position?
- What opportunities are there for learning and growth?
- What's the engineering culture like?

---

## Related

- [[UTS/Career/AWS]] — AWS technical notes
- [[UTS/Career/Azure]] — Azure technical notes
- [[UTS/Machine Learning/Notes/Exam Revision]] — ML concepts review
- [[UTS/Machine Learning/Notes/Quiz Notes]] — quick formula reference
