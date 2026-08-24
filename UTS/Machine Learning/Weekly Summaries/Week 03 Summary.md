---
type: course
course: Machine Learning
title: Week 03 Summary
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - week
  - weekly-summary
  - machine-learning
---

# Week 03 Summary — Classification Algorithms

> **Based on:** [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]]
> **Prerequisites:** [[UTS/Machine Learning/Weekly Summaries/Week 02 Summary]]
> **Course:** [[UTS/Machine Learning|Machine Learning]]

---

## What We Covered

### 1. Logistic Regression
- Sigmoid: \(g(z) = 1/(1+e^{-z})\), range (0,1).
- Hypothesis: \(h_\theta(x) = g(\theta^T x) = P(y=1|x)\).
- Decision boundary: \(\theta^T x = 0\) (linear; can be non-linear with polynomial features).
- Cost: Log loss / binary cross-entropy. Convex — GD finds global minimum.
- Multiclass: One-vs-All (train K binary classifiers).

### 2. k-Nearest Neighbours (k-NN)
- Lazy learner: store data, compute distances at prediction time.
- \(k\) = hyperparameter: small k = overfit, large k = underfit.
- **Must scale features** (distance-based).
- Slow prediction on large datasets. No explicit training.

### 3. Decision Trees
- Split on feature thresholds to minimise Gini (\(1-\sum p_i^2\)) or entropy (\(-\sum p_i \log_2 p_i\)).
- Information gain = reduction in impurity.
- Interpretable, no scaling needed, handles mixed data types.
- Prone to overfitting — prune or use ensembles.

### 4. Ensemble Methods
- **Random Forest (Bagging):** Many trees on bootstrapped samples + random features. Reduces variance. Parallel. Good default.
- **Gradient Boosting (Boosting):** Sequential trees, each corrects previous errors. Reduces bias. Shallow trees. Higher accuracy but more tuning needed.

### 5. Naive Bayes
- Bayes' theorem + independence assumption: \(P(y=c|x) \propto P(y=c) \cdot \prod P(x_j|y=c)\).
- "Naive" because independence is unrealistic — but classification often still works.
- Excellent for text classification. Fast. Laplace smoothing prevents zero probabilities.

### 6. Support Vector Machines (SVM)
- Maximum margin hyperplane. Support vectors define the margin.
- Soft margin with \(C\): large C = hard margin (overfit risk), small C = soft margin.
- Kernel trick for non-linear data (RBF kernel common).
- Scales poorly to large datasets. Needs scaling. Tune \(C\) and \(\gamma\) with CV.

---

## Algorithm Quick Reference

| Algorithm | Best For | Avoid When |
|---|---|---|
| Logistic Regression | Binary classification, probabilities, interpretability | Non-linear boundaries (without feature engineering) |
| k-NN | Small data, simple baseline, multi-class | Large data (slow prediction), high dimensions |
| Decision Tree | Interpretability, mixed data, non-linearity | Maximum accuracy needed (single tree overfits) |
| Random Forest | Tabular data, good default, feature importance | Need individual prediction explanations |
| Gradient Boosting | Maximum accuracy, competitions, production | Speed matters, very noisy data |
| Naive Bayes | Text classification, high-dimensional, small data | Feature interactions matter |
| SVM | High-dimensional, medium data, complex boundaries | Very large datasets, interpretability needed |

---

## Key Takeaways

1. **Classification is about predicting categories**, not continuous values. Evaluation uses different metrics (precision, recall, F1, ROC-AUC).
2. **Six algorithms, six tradeoffs** — no single best algorithm. Choice depends on data size, interpretability needs, non-linearity, and speed requirements.
3. **Ensembles dominate** — Random Forest and Gradient Boosting are often the best choices for tabular data. They combine many weak models into a strong one.
4. **Feature scaling is critical** for k-NN and SVM (distance-based), helpful for others.
5. **Interpretability vs. accuracy** — decision trees and logistic regression are interpretable; ensembles and SVM are less so but often more accurate.

---

## Exam Preparation

- Know all six algorithms' mechanisms, strengths, weaknesses, and key hyperparameters.
- Be able to **compute** Gini/entropy, information gain, k-NN predictions, logistic regression probabilities by hand.
- Be ready to **compare** two algorithms on specific criteria.
- **Sketch** decision boundaries, sigmoid curves, SVM margins with support vectors.

---

## Related

- [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]] — full notes
- [[UTS/Machine Learning/Quiz Prep/Week 03 Quiz Prep]] — practice questions
