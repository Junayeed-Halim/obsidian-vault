---
type: source
course: Machine Learning
title: Week 02 Lecture Notes
status: reference
created: 2026-08-25
tags:
  - UTS
  - ML
  - sources
  - machine-learning
  - lecture
---

# Week 02 Lecture Notes — Source Material

> **Course:** [[UTS/Machine Learning|Machine Learning]]
> **Based on:** Week 02 lecture and tutorial materials
> **Used in:** [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]]

---

## Lecture Overview

Week 02 focuses on supervised learning with linear regression. The lecture covers the mathematical formulation of linear regression, the mean squared error cost function, gradient descent optimisation, and model evaluation metrics.

### Key Points from Lecture

1. **Linear Regression Model**
   - Simple linear regression: \(y = \beta_0 + \beta_1 x + \epsilon\)
   - Multiple linear regression: \(y = \beta_0 + \beta_1 x_1 + \dots + \beta_n x_n + \epsilon\)
   - Vector form: \(y = \theta^T x + \epsilon\)
   - The hypothesis function \(h_\theta(x) = \theta^T x\) represents the model's prediction.

2. **Mean Squared Error (MSE) Cost Function**
   - \(J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2\)
   - The \(\frac{1}{2}\) factor is included for mathematical convenience when taking derivatives.
   - MSE penalises large errors more severely due to the squaring operation.

3. **Gradient Descent**
   - Iterative optimisation algorithm to minimise the cost function.
   - Update rule: \(\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)\)
   - For linear regression: \(\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}\)
   - Learning rate \(\alpha\) controls step size:
     - Too large: may overshoot and diverge.
     - Too small: slow convergence.
   - Variants: batch gradient descent (full dataset), stochastic gradient descent (one example), mini-batch gradient descent (subset of data).

4. **Feature Scaling**
   - Standardisation: \(x_j' = (x_j - \mu_j) / \sigma_j\)
   - Normalisation: \(x_j' = (x_j - \min(x_j)) / (\max(x_j) - \min(x_j))\)
   - Important for gradient descent to converge efficiently when features have different scales.
   - Also essential for distance-based algorithms like k-NN and SVM.

5. **Normal Equation (Closed-Form Solution)**
   - \(\theta = (X^T X)^{-1} X^T y\)
   - Provides the optimal parameters directly without iteration.
   - Computationally expensive for large feature sets (\(O(n^3)\) for matrix inversion).
   - Requires \(X^T X\) to be invertible (no perfectly collinear features).

6. **Polynomial Regression**
   - Extends linear regression to model non-linear relationships.
   - Add polynomial features: \(x, x^2, x^3, \dots, x^d\)
   - Still linear in the parameters — ordinary least squares can be used.
   - Risk of overfitting with high-degree polynomials; regularisation helps.

7. **Model Evaluation Metrics**
   - **Regression metrics:**
     - MSE: average squared error.
     - RMSE: square root of MSE; same units as the target variable.
     - MAE: average absolute error; robust to outliers.
     - R²: coefficient of determination; proportion of variance explained by the model.
   - **Classification metrics:**
     - Confusion matrix: TP, TN, FP, FN.
     - Accuracy: \((TP + TN) / (TP + TN + FP + FN)\)
     - Precision: \(TP / (TP + FP)\) — minimising false positives.
     - Recall: \(TP / (TP + FN)\) — minimising false negatives.
     - F1 score: harmonic mean of precision and recall.
     - ROC-AUC: area under the receiver operating characteristic curve.

8. **Bias-Variance Tradeoff**
   - Expected test error decomposition: \(\mathbb{E}[(y - \hat{f}(x))^2] = \text{Bias}^2 + \text{Variance} + \text{Irreducible Error}\)
   - **High bias (underfitting):** model too simple; poor on both train and test.
   - **High variance (overfitting):** model too complex; great on train, poor on test.
   - Learning curves help diagnose bias vs. variance problems.

9. **Regularisation**
   - **Ridge regression (L2):** adds \(\lambda \sum \theta_j^2\) to the cost function. Shrinks coefficients toward zero.
   - **Lasso regression (L1):** adds \(\lambda \sum |\theta_j|\) to the cost function. Can drive coefficients to exactly zero (feature selection).
   - **Elastic Net:** combines L1 and L2 penalties.
   - The regularisation parameter \(\lambda\) controls the strength; too large leads to underfitting.

10. **Cross-Validation**
    - k-fold cross-validation: split data into k folds; train on k-1 folds, test on remaining fold; repeat k times.
    - Provides more robust performance estimates than a single train/test split.
    - Stratified k-fold preserves class distribution for imbalanced datasets.

### Tutorial Activities

- Implementing linear regression from scratch using gradient descent.
- Computing evaluation metrics manually from small datasets.
- Diagnosing bias vs. variance from learning curves.
- Applying regularisation and observing its effect on model coefficients.

### Discussion Points

- Why is MSE the most common cost function for regression? What are its limitations?
- When would you use the normal equation vs. gradient descent?
- How do you choose the right evaluation metric for a given problem?
- What is the intuition behind the bias-variance decomposition?

---

## References and Further Reading

- "An Introduction to Statistical Learning" by James, Witten, Hastie, and Tibshirani. (Chapter 3: Linear Regression; Chapter 5: Resampling Methods)
- "The Elements of Statistical Learning" by Hastie, Tibshirani, and Friedman. (Chapter 3: Linear Methods for Regression; Chapter 7: Model Assessment and Selection)
- scikit-learn documentation: Linear Models, Model Evaluation.

---

## Connection to Other Weeks

- [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]] — prerequisite concepts.
- [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]] — extends supervised learning to classification.
- [[UTS/Machine Learning/Quiz Prep/Week 02 Quiz Prep]] — practice questions based on this material.

---

*This is a source/lecture note. For the structured study notes, see [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]].*
