---
type: course
course: Machine Learning
title: Week 02 - Supervised Learning & Model Evaluation
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - week
  - machine-learning
---

# Week 02 - Supervised Learning & Model Evaluation

## Linear Regression

Linear regression models the relationship between a dependent variable \(y\) and one or more independent variables \(X\).

**Simple linear regression:**
\[ y = \beta_0 + \beta_1 x + \epsilon \]

**Multiple linear regression:**
\[ y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_n x_n + \epsilon \]

### Cost Function (MSE)

\[ J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2 \]

Where \(h_\theta(x) = \theta^T x\) is the hypothesis and \(m\) is the number of training examples.

### Gradient Descent

Iteratively update parameters to minimise the cost function:

\[ \theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta) \]

- \(\alpha\) is the **learning rate** — too large causes divergence, too small is slow.
- Batch gradient descent uses the entire dataset; stochastic uses one example at a time; mini-batch is a compromise.

See [[UTS/Machine Learning/Week 03]] for how this extends to classification.

## Model Evaluation Metrics

### Regression Metrics

| Metric | Formula | Use Case |
|---|---|---|
| **MSE** (Mean Squared Error) | \(\frac{1}{n}\sum (y_i - \hat{y}_i)^2\) | Penalises large errors |
| **RMSE** (Root MSE) | \(\sqrt{MSE}\) | Same units as target |
| **MAE** (Mean Absolute Error) | \(\frac{1}{n}\sum \|y_i - \hat{y}_i\|\) | Robust to outliers |
| **R²** (Coefficient of Determination) | \(1 - \frac{SS_{res}}{SS_{tot}}\) | Proportion of variance explained |

### Classification Metrics

| Metric | Definition |
|---|---|
| **Accuracy** | \(\frac{TP + TN}{TP + TN + FP + FN}\) |
| **Precision** | \(\frac{TP}{TP + FP}\) — of predicted positives, how many are correct |
| **Recall (Sensitivity)** | \(\frac{TP}{TP + FN}\) — of actual positives, how many found |
| **F1 Score** | \(2 \cdot \frac{Precision \cdot Recall}{Precision + Recall}\) — harmonic mean |
| **ROC-AUC** | Area under the Receiver Operating Characteristic curve |

> Confusion matrices are essential — see [[UTS/Machine Learning/Quiz Notes]] for common pitfalls.

## Bias-Variance Tradeoff

| | High Bias | High Variance |
|---|---|---|
| **Symptoms** | Underfitting, poor on both train and test | Overfitting, great on train, poor on test |
| **Fixes** | More features, complex model, less regularisation | More data, simpler model, regularisation, bagging |

Regularisation techniques:
- **L1 (Lasso)** — can drive coefficients to zero (feature selection).
- **L2 (Ridge)** — shrinks coefficients toward zero.

## Cross-Validation

**k-Fold Cross-Validation:**
1. Split data into \(k\) folds.
2. Train on \(k-1\) folds, test on the remaining fold.
3. Repeat \(k\) times, average the results.

Common choice: \(k = 5\) or \(k = 10\).

## Related

- [[UTS/Machine Learning/Week 01]] — ML fundamentals
- [[UTS/Machine Learning/Week 03]] — classification algorithms
- [[UTS/Machine Learning/Quiz Notes]] — key formulas and concepts
- [[UTS/Machine Learning/Exam Revision]] — comprehensive revision
