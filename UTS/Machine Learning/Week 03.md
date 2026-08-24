---
type: course
course: Machine Learning
title: Week 03 - Classification Algorithms
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - week
  - machine-learning
---

# Week 03 - Classification Algorithms

## Logistic Regression

Despite the name, logistic regression is a **classification** algorithm. It models the probability that an input belongs to a particular class.

**Hypothesis:**
\[ h_\theta(x) = \frac{1}{1 + e^{-\theta^T x}} = \text{sigmoid}(\theta^T x) \]

**Cost function (log loss / binary cross-entropy):**
\[ J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} [y^{(i)} \log(h_\theta(x^{(i)})) + (1 - y^{(i)}) \log(1 - h_\theta(x^{(i)}))] \]

### Decision Boundary
The model predicts class 1 when \(h_\theta(x) \geq 0.5\), i.e., when \(\theta^T x \geq 0\). The decision boundary is where \(\theta^T x = 0\).

## k-Nearest Neighbours (k-NN)

**How it works:**
1. Store all training data.
2. For a new point, find the \(k\) closest training examples (by distance, e.g., Euclidean).
3. Predict the majority class among those \(k\) neighbours.

**Key considerations:**
- \(k\) is a hyperparameter — small \(k\) = high variance (overfitting), large \(k\) = high bias (underfitting).
- Feature scaling is critical (distance-based).
- Lazy learner — no explicit training phase, but prediction can be slow.

## Decision Trees

A tree-like model that splits data based on feature thresholds.

**How splitting works:**
- **Gini Impurity:** \(G = 1 - \sum p_i^2\) — measures how often a random element would be misclassified.
- **Information Gain (Entropy):** \(H = -\sum p_i \log_2(p_i)\) — reduction in entropy after a split.

**Tree terminology:**
- **Root node** — the top of the tree.
- **Internal nodes** — decision points (splits).
- **Leaf nodes** — final predictions.
- **Depth** — how many levels the tree has.

**Pros:** Interpretable, handles non-linear relationships, no need for feature scaling.
**Cons:** Prone to overfitting — prune the tree or use ensemble methods.

## Ensemble Methods

### Random Forest
Builds many decision trees on bootstrapped samples and aggregates their predictions (bagging). Reduces variance compared to a single tree.

### Gradient Boosting
Builds trees sequentially, where each new tree corrects the errors of the previous ones. Examples: XGBoost, LightGBM.

## Naive Bayes

Based on Bayes' theorem with the "naive" assumption of feature independence:

\[ P(y|X) = \frac{P(X|y) \cdot P(y)}{P(X)} \]

Common variant: **Multinomial Naive Bayes** for text classification (spam detection, sentiment analysis).

## Support Vector Machines (SVM)

Finds the hyperplane that maximises the **margin** between classes. Points closest to the hyperplane are **support vectors**.

- **Kernel trick** — maps data into higher dimensions to make it linearly separable (e.g., RBF kernel).
- **C parameter** — trades off margin width vs. misclassification penalty.

## Related

- [[UTS/Machine Learning/Week 01]] — ML fundamentals and problem types
- [[UTS/Machine Learning/Week 02]] — regression, evaluation metrics, bias-variance
- [[UTS/Machine Learning/Quiz Notes]] — key formulas to memorise
- [[UTS/Machine Learning/Exam Revision]] — deep dive on all algorithms
