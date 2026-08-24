---
type: course
course: Machine Learning
title: Quiz Prep - Week 02
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - quiz
  - machine-learning
  - quiz-prep
---

# Quiz Prep - Week 02

> **Based on:** [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]]
> **Course:** [[UTS/Machine Learning|Machine Learning]]

---

## Key Formulas — Memorise These

### Linear Regression

**Model:** \(h_\theta(x) = \theta_0 + \theta_1 x_1 + \dots + \theta_n x_n = \theta^T x\)

**MSE Cost:** \(J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2\)

**Gradient Descent Update:** \(\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}\)

**Normal Equation:** \(\theta = (X^T X)^{-1} X^T y\)

### Regularisation

**Ridge (L2):** \(J(\theta) = \text{MSE} + \lambda \sum_{j=1}^{n} \theta_j^2\)

**Lasso (L1):** \(J(\theta) = \text{MSE} + \lambda \sum_{j=1}^{n} |\theta_j|\)

### Evaluation Metrics

**MSE:** \(\frac{1}{n}\sum (y_i - \hat{y}_i)^2\) | **RMSE:** \(\sqrt{\text{MSE}}\) | **MAE:** \(\frac{1}{n}\sum \|y_i - \hat{y}_i\|\)

**R²:** \(1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}\)

**Accuracy:** \(\frac{TP+TN}{TP+TN+FP+FN}\) | **Precision:** \(\frac{TP}{TP+FP}\) | **Recall:** \(\frac{TP}{TP+FN}\)

**F1:** \(2 \cdot \frac{P \cdot R}{P + R}\)

---

## Key Concepts — Quick Check

| Concept | Must-Know |
|---|---|
| **Why 1/2 in MSE?** | Convenient — cancels the 2 when differentiating. |
| **Why square errors?** | Positive values, penalise large errors, differentiable. |
| **Learning rate too large** | Diverges / oscillates — cost increases. |
| **Learning rate too small** | Very slow convergence. |
| **Feature scaling** | Essential for gradient descent (faster convergence) and distance-based algorithms. |
| **Batch vs. Stochastic vs. Mini-batch GD** | Batch = all data; SGD = one example; Mini-batch = small batch. Mini-batch is most common. |
| **Normal equation vs. GD** | Normal equation = closed form, \(O(n^3)\), no iteration. GD = iterative, scales better to many features. |
| **Polynomial regression** | Add \(x^2, x^3, \dots\) as features. Still linear in parameters. Risk of overfitting → use regularisation. |
| **L1 vs. L2** | L1 → feature selection (coefficients → 0). L2 → shrinkage (coefficients → small but not zero). |
| **Bias² + Variance + Irreducible Error** | Decomposition of expected test error. |

---

## Metric Selection — Must-Know Table

| Situation | Use This Metric | Why |
|---|---|---|
| Regression, want interpretable error | **RMSE** | Same units as target |
| Regression, outliers common | **MAE** | Robust to outliers |
| Regression, optimise model | **MSE** | Differentiable, penalises large errors |
| Comparing models across datasets | **R²** | Scale-independent |
| Balanced classification | **Accuracy** | Simple, both classes matter equally |
| Imbalanced classification | **F1** or **ROC-AUC** | Accuracy is misleading |
| Don't want false positives | **Precision** | Minimise FP (e.g., spam filter) |
| Don't want false negatives | **Recall** | Minimise FN (e.g., disease screening) |

---

## Practice Questions

### Q1: Gradient Descent Intuition
If the learning rate \(\alpha\) is too large, what happens? If it's too small?

<details>
<summary>Answer</summary>

Too large: The algorithm may overshoot the minimum, oscillate around it, or diverge entirely (cost increases instead of decreases).

Too small: Convergence is very slow — many iterations needed to reach the minimum. Each step is tiny.
</details>

---

### Q2: MSE Calculation
Given predictions [3, 5, 7] and true values [2, 6, 8], compute MSE (without the 1/2 factor).

<details>
<summary>Answer</summary>

Errors: [1, -1, -1]
Squared errors: [1, 1, 1]
MSE = (1 + 1 + 1) / 3 = **1.0**
</details>

---

### Q3: Confusion Matrix
A classifier is tested on 200 samples: TP=80, FP=20, FN=30, TN=70. Compute accuracy, precision, recall, and F1.

<details>
<summary>Answer</summary>

Accuracy = (80+70)/200 = 150/200 = **0.75**
Precision = 80/(80+20) = 80/100 = **0.80**
Recall = 80/(80+30) = 80/110 = **0.727**
F1 = 2 × (0.80 × 0.727)/(0.80 + 0.727) = 2 × 0.5816/1.527 = **0.767**
</details>

---

### Q4: Metric Selection
You're building a fraud detection system. 99.9% of transactions are legitimate. Which metric should you NOT use, and what should you use instead?

<details>
<summary>Answer</summary>

**Don't use accuracy** — a model that always predicts "legitimate" gets 99.9% accuracy but detects zero fraud.

**Use instead:** Precision, Recall, F1 score, or ROC-AUC. These are meaningful for imbalanced data. Typically you'd optimise for high precision (don't flag legitimate transactions) while maintaining reasonable recall.
</details>

---

### Q5: Regularisation
What is the key practical difference between L1 (Lasso) and L2 (Ridge) regularisation?

<details>
<summary>Answer</summary>

**L1 (Lasso)** can drive coefficients to **exactly zero**, performing automatic **feature selection**. Useful when you have many features and only some are relevant.

**L2 (Ridge)** shrinks coefficients toward zero but rarely makes them exactly zero. Useful when you believe all features contribute and want to gently reduce their impact.
</details>

---

### Q6 (ML-specific): Bias-Variance in Practice
A model has the following learning curves: training error starts low and stays low; validation error starts high and decreases slowly but never reaches the training error. What's the diagnosis, and what are three fixes?

<details>
<summary>Answer</summary>

**Diagnosis: High variance (overfitting).** Large gap between training and validation error.

**Fixes:**
1. Get more training data (reduces variance)
2. Use a simpler model / reduce model complexity
3. Increase regularisation (L1 or L2)
4. Use bagging / ensemble methods
</details>

---

### Q7 (ML-specific): Feature Scaling
Why is feature scaling important for gradient descent? What happens if you don't scale?

<details>
<summary>Answer</summary>

Without scaling, features on different scales make the cost function surface a long, narrow valley. Gradient descent takes small, zigzagging steps down the valley, converging very slowly. With scaling, the surface becomes more spherical, and gradient descent moves directly toward the minimum with larger learning rates.

Practically: without scaling, you need a very small learning rate to avoid divergence; with scaling, you can use a much larger learning rate and converge in fewer iterations.
</details>

---

## Common Pitfalls — Quiz Edition

1. **Confusing MSE and RMSE** — RMSE = √MSE. They have different units.
2. **Mixing up precision and recall** — Precision = of predicted positives, how many are correct. Recall = of actual positives, how many were found.
3. **Using accuracy for imbalanced data** — guaranteed wrong answer on a quiz.
4. **Confusing L1 and L2** — L1 → feature selection (sparse), L2 → shrinkage.
5. **Forgetting that the normal equation requires invertibility** — if features are collinear, \(X^T X\) is singular.
6. **Forgetting the 1/m in gradient descent** — the gradient is averaged over all training examples (batch GD).

---

## Quick Drill — Can You Write These From Memory?

1. The MSE cost function: ____
2. The gradient descent update for linear regression: ____
3. The normal equation: ____
4. Ridge (L2) cost function: ____
5. Lasso (L1) cost function: ____
6. Precision formula: ____
7. Recall formula: ____
8. F1 formula: ____
9. R² formula: ____
10. The bias-variance decomposition: ____

---

## Related

- [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]] — full notes
- [[UTS/Machine Learning/Quiz Prep/Week 01 Quiz Prep]] — previous week
- [[UTS/Machine Learning/Quiz Prep/Week 03 Quiz Prep]] — next week
- [[UTS/Machine Learning/Weekly Summaries/Week 02 Summary]] — weekly summary
