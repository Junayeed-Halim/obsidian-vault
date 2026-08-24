---
type: course
course: Machine Learning
title: Week 01 Summary
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - week
  - weekly-summary
  - machine-learning
---

# Week 01 Summary — Introduction to Machine Learning

> **Based on:** [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]]
> **Course:** [[UTS/Machine Learning|Machine Learning]]

---

## What We Covered

### 1. What is Machine Learning?
- ML = learning from data without explicit programming.
- Mitchell's definition: improves at task T, measured by P, with experience E.
- Traditional programming: data + rules → answers. ML: data + answers → rules.

### 2. Three Paradigms
- **Supervised:** Labelled data (X, y). Regression + classification.
- **Unsupervised:** Unlabelled data. Clustering + dimensionality reduction.
- **Reinforcement:** Agent + environment + rewards. Policy learning.

### 3. Features, Labels, and Data Splits
- **Features (X):** Input variables.
- **Labels (y):** Output/target.
- **Train/test split:** Train to fit, test to evaluate generalisation. Never test on training data.

### 4. Overfitting vs. Underfitting
- **Overfitting:** High train perf, low test perf. High variance. Model memorises noise.
- **Underfitting:** Low train & test perf. High bias. Model too simple.
- **Fixes are opposite** — know which is which.

### 5. Bias-Variance Tradeoff
- Total test error = Bias² + Variance + Irreducible Error.
- Reducing one often increases the other.
- Goal: find the sweet spot.

### 6. Problem Types
- Regression (continuous output)
- Binary classification (2 classes)
- Multi-class classification (3+ classes)
- Clustering (no labels)

---

## Key Takeaways

1. **ML is about generalisation**, not memorisation. The test set is the ultimate judge.
2. **Overfitting and underfitting are the two fundamental failure modes** — learn to diagnose them from learning curves.
3. **The bias-variance tradeoff** is the central tension in ML — it appears throughout the course.
4. **Choose the right paradigm** for the problem — labelled data? unlabelled? agent-based?

---

## What's Next (Week 02)

- Linear regression — the mathematical foundation.
- MSE cost function and gradient descent.
- Model evaluation metrics (MSE, RMSE, MAE, R², precision, recall, F1).
- The bias-variance tradeoff in detail.
- Regularisation (L1/L2).

---

## Questions to Think About

1. Can you think of a problem in your own life that could be solved with ML? What paradigm would it use?
2. Why can't we just use the training accuracy to judge a model?
3. What's an example of a high-bias model and a high-variance model for the same problem?

---

## Related

- [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]] — full notes
- [[UTS/Machine Learning/Quiz Prep/Week 01 Quiz Prep]] — practice questions
