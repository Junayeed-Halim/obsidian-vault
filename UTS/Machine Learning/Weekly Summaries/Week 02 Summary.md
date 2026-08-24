---
type: course
course: Machine Learning
title: Week 02 Summary
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - week
  - weekly-summary
  - machine-learning
---

# Week 02 Summary — Supervised Learning & Model Evaluation

> **Based on:** [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]]
> **Prerequisites:** [[UTS/Machine Learning/Weekly Summaries/Week 01 Summary]]
> **Course:** [[UTS/Machine Learning|Machine Learning]]

---

## What We Covered

### 1. Linear Regression
- Simple: \(y = \beta_0 + \beta_1 x + \epsilon\)
- Multiple: \(y = \theta^T x + \epsilon\)
- Model the relationship between X and y with a linear function.

### 2. MSE Cost Function
- \(J(\theta) = \frac{1}{2m} \sum (h_\theta(x^{(i)}) - y^{(i)})^2\)
- Measures average squared prediction error.
- The 1/2 is for convenience (cancels 2 when differentiating).

### 3. Gradient Descent
- Iterative optimisation: \(\theta_j := \theta_j - \alpha \frac{1}{m} \sum (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}\)
- Learning rate \(\alpha\) controls step size — too large diverges, too small is slow.
- Batch (all data) vs. Stochastic (one example) vs. Mini-batch (small batch).

### 4. Feature Scaling
- Standardisation: \(x' = (x - \mu) / \sigma\)
- Makes gradient descent converge much faster.
- Essential for distance-based algorithms.

### 5. Normal Equation
- \(\theta = (X^T X)^{-1} X^T y\)
- Closed-form solution — no iteration.
- \(O(n^3)\) — slow for many features.

### 6. Polynomial Regression
- Add \(x^2, x^3, \dots\) as features.
- Still linear in parameters.
- Risk of overfitting → use regularisation.

### 7. Evaluation Metrics

**Regression:** MSE, RMSE, MAE, R²

**Classification:** Accuracy, Precision, Recall, F1, ROC-AUC

| Metric | Formula | When to use |
|---|---|---|
| MSE | \(\frac{1}{n}\sum (y_i - \hat{y}_i)^2\) | Penalise large errors |
| RMSE | \(\sqrt{\text{MSE}}\) | Interpretable units |
| MAE | \(\frac{1}{n}\sum \|y_i - \hat{y}_i\|\) | Robust to outliers |
| R² | \(1 - \frac{SS_{res}}{SS_{tot}}\) | Variance explained |
| Accuracy | \(\frac{TP+TN}{TP+TN+FP+FN}\) | Balanced classes |
| Precision | \(\frac{TP}{TP+FP}\) | Minimise false positives |
| Recall | \(\frac{TP}{TP+FN}\) | Minimise false negatives |
| F1 | \(2 \cdot \frac{P \cdot R}{P + R}\) | Balanced precision/recall |

### 8. Bias-Variance Tradeoff (Detailed)
- Decomposition: \(\mathbb{E}[(y-\hat{f})^2] = \text{Bias}^2 + \text{Variance} + \text{Irreducible Error}\)
- High bias = underfitting (simple model)
- High variance = overfitting (complex model)
- Learning curves diagnose the problem.

### 9. Regularisation
- **Ridge (L2):** \(J + \lambda \sum \theta_j^2\) — shrinks coefficients.
- **Lasso (L1):** \(J + \lambda \sum |\theta_j|\) — can zero out coefficients (feature selection).
- **λ controls strength** — too large → underfitting.

### 10. Cross-Validation
- k-fold: split into k folds, train on k-1, test on 1, repeat k times.
- More robust than a single split.
- Stratified CV for imbalanced data.

---

## Key Takeaways

1. **Linear regression is the foundation** — understand it deeply; it underpins much of ML.
2. **Gradient descent is the workhorse** — know the update rule and the role of the learning rate.
3. **Evaluation metrics matter** — choosing the wrong one gives misleading conclusions (especially accuracy for imbalanced data).
4. **Regularisation is the primary remedy for overfitting** — L1 for feature selection, L2 for shrinkage.
5. **Cross-validation gives reliable performance estimates** — always use it for model selection.

---

## What's Next (Week 03)

- Classification algorithms: logistic regression, k-NN, decision trees, ensembles, Naive Bayes, SVM.
- Classification-specific evaluation (precision, recall, F1, ROC-AUC in detail).
- Algorithm comparison and selection.

---

## Questions to Think About

1. Why does the normal equation fail when features are perfectly collinear? What's the workaround?
2. Why is accuracy a terrible metric for fraud detection?
3. If your model has high bias, would you increase or decrease the regularisation strength? What about high variance?

---

## Related

- [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]] — full notes
- [[UTS/Machine Learning/Quiz Prep/Week 02 Quiz Prep]] — practice questions
