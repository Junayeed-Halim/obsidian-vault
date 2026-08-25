---
type: source
course: Machine Learning
title: Week 01 Lecture Notes
status: reference
created: 2026-08-25
tags:
  - UTS
  - ML
  - sources
  - machine-learning
  - lecture
---

# Week 01 Lecture Notes — Source Material

> **Course:** [[UTS/Machine Learning|Machine Learning]]
> **Based on:** Week 01 lecture and tutorial materials
> **Used in:** [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]]

---

## Lecture Overview

Week 01 introduces the foundational concepts of machine learning. The lecture covers the definition of ML, the three main paradigms, and the central challenge of generalisation.

### Key Points from Lecture

1. **Definition of Machine Learning** (Tom Mitchell, 1997)
   - A program learns from experience E with respect to task T and performance measure P if its performance at T improves with E.
   - This formal definition frames ML as a problem of improving performance through data.

2. **Three Paradigms**
   - **Supervised Learning:** Labelled examples. The model learns input-output mappings.
     - Regression: continuous output (e.g., house prices)
     - Classification: categorical output (e.g., spam detection)
   - **Unsupervised Learning:** Unlabelled data. The model finds patterns.
     - Clustering: grouping similar instances
     - Dimensionality reduction: compressing features while preserving information
   - **Reinforcement Learning:** Agent-environment interaction with rewards.
     - The agent learns a policy that maximises cumulative reward.

3. **Features and Labels**
   - Features (X): the input attributes used for prediction.
   - Labels (y): the target or output variable.
   - Training set: data used to fit the model.
   - Test set: held-out data used to evaluate generalisation.

4. **Overfitting and Underfitting**
   - **Overfitting:** The model captures noise in the training data, leading to poor generalisation. Characterised by high training performance but low test performance (high variance).
   - **Underfitting:** The model is too simple to capture the underlying pattern. Characterised by low performance on both training and test data (high bias).
   - The bias-variance tradeoff is the central tension in ML model design.

5. **Problem Types**
   - Regression: predicting continuous values.
   - Binary classification: two classes (e.g., spam vs. not spam).
   - Multi-class classification: multiple classes (e.g., digit recognition).
   - Clustering: discovering groups in unlabelled data.

### Tutorial Activities

- Identify features and labels in real-world datasets.
- Distinguish between supervised, unsupervised, and reinforcement learning scenarios.
- Discuss the bias-variance tradeoff with examples.

### Discussion Points

- When should we use ML vs. traditional rule-based programming?
- Why is it important to split data into training and test sets?
- What are the ethical implications of ML systems making decisions?

---

## References and Further Reading

- Tom Mitchell, "Machine Learning", McGraw-Hill, 1997. (Chapter 1: Introduction)
- "The Elements of Statistical Learning" by Hastie, Tibshirani, and Friedman. (Chapter 2: Overview of Supervised Learning)
- "Pattern Recognition and Machine Learning" by Christopher Bishop. (Chapter 1: Introduction)

---

## Connection to Other Weeks

- [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]] — builds on these foundations with mathematical detail.
- [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]] — applies supervised learning to classification problems.

---

*This is a source/lecture note. For the structured study notes, see [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]].*
