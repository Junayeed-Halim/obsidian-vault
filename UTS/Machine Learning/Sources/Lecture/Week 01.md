---
type: course
course: Machine Learning
title: Week 01 - Introduction to Machine Learning
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - week
  - machine-learning
---

# Week 01 - Introduction to Machine Learning

## What is Machine Learning?

Machine learning is a subset of AI where systems learn from data rather than being explicitly programmed. Instead of hard-coded rules, ML algorithms identify patterns in data and make predictions or decisions.

**Three main paradigms:**

- **Supervised Learning** — the model learns from labelled data (input-output pairs). Examples: classification, regression.
- **Unsupervised Learning** — the model finds structure in unlabelled data. Examples: clustering, dimensionality reduction.
- **Reinforcement Learning** — an agent learns by interacting with an environment and receiving rewards/penalties.

See [[UTS/Machine Learning/Sources/Lecture/Week 02]] for how supervised learning works in practice.

## Key Concepts

### Features and Labels
- **Features (X)** — the input variables used to make predictions.
- **Labels (y)** — the output or target variable (in supervised learning).
- **Training set** — data used to fit the model.
- **Test set** — held-out data used to evaluate performance.

### Overfitting and Underfitting
- **Overfitting** — the model learns the training data too well, including noise, and fails to generalise. High variance, low bias.
- **Underfitting** — the model is too simple to capture the underlying pattern. High bias, low variance.
- The goal is the **bias-variance tradeoff**: find the sweet spot.

> See [[UTS/Machine Learning/Notes/Exam Revision]] for a deeper treatment of bias-variance.

### Train/Test Split
A common practice is to split data 70/30 or 80/20 for training and testing. Cross-validation (k-fold) is used when data is scarce.

## Types of Problems

| Problem Type | Output | Example |
|---|---|---|
| Regression | Continuous value | Predicting house prices |
| Binary Classification | Two classes | Spam vs not spam |
| Multi-class Classification | Multiple classes | Image recognition (cat, dog, bird) |
| Clustering | Groups | Customer segmentation |

## First Steps with ML

1. **Define the problem** — what are you predicting and why?
2. **Collect and clean data** — handle missing values, outliers, encoding.
3. **Exploratory Data Analysis (EDA)** — visualise distributions, correlations.
4. **Choose a model** — start simple (linear regression, k-NN).
5. **Train and evaluate** — use appropriate metrics (accuracy, MSE, etc.).
6. **Iterate** — tune hyperparameters, try different models.

## UTS Context

This course ([[UTS/Machine Learning]]) covers both theoretical foundations and practical implementation. Record your progress in [[UTS/Machine Learning/Notes/Quiz Notes]] and use [[UTS/Machine Learning/Notes/Exam Revision]] when preparing for exams.

## Related

- [[UTS/Career/Interviews]] — ML interview questions
- [[UTS/Career/AWS]] — cloud ML services (SageMaker)
- [[UTS/Assignments]] — course assignment briefs
