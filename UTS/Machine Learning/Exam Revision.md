---
type: course
course: Machine Learning
title: Exam Revision - Machine Learning
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - exam
  - revision
  - machine-learning
---

# Exam Revision - Machine Learning

Comprehensive revision notes for the [[UTS/Machine Learning]] course final exam. Covers all three weeks of material, key formulas, and problem-solving strategies.

---

## 1. Foundations of Machine Learning

### What is ML?
- Field of AI where computers learn from data without explicit programming.
- Three paradigms: **supervised**, **unsupervised**, **reinforcement learning**.

### Supervised Learning
- Input-output pairs \((X, y)\).
- Goal: learn \(f: X \rightarrow y\).
- Types: regression (continuous \(y\)), classification (categorical \(y\)).

### Unsupervised Learning
- Only input data \(X\), no labels.
- Goal: discover structure.
- Types: clustering (k-means, hierarchical), dimensionality reduction (PCA).

### Reinforcement Learning
- Agent interacts with environment, receives rewards.
- Goal: learn policy \(\pi\) that maximises cumulative reward.

---

## 2. Linear Regression (Week 02)

### Model
\[ y = \beta_0 + \beta_1 x_1 + \dots + \beta_n x_n + \epsilon \]

### Cost Function (MSE)
\[ J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2 \]

**Why \(\frac{1}{2}\)?** Convenience — cancels the 2 when differentiating.

### Gradient Descent
Repeat until convergence:
\[ \theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)} \]

**Feature scaling** is important for gradient descent to converge efficiently.

### Normal Equation (closed-form solution)
\[ \theta = (X^T X)^{-1} X^T y \]
- No iteration needed.
- Slow for large \(n\) (matrix inversion is \(O(n^3)\)).

### Polynomial Regression
- Add polynomial features: \(x, x^2, x^3, \dots\)
- Still linear in parameters — can use linear regression.
- Risk of overfitting with high-degree polynomials → use regularisation.

### Regularisation
**Ridge (L2):**
\[ J(\theta) = \text{MSE} + \lambda \sum_{j=1}^{n} \theta_j^2 \]

**Lasso (L1):**
\[ J(\theta) = \text{MSE} + \lambda \sum_{j=1}^{n} |\theta_j| \]

- \(\lambda\) controls strength — too large → underfitting.
- Lasso can zero out coefficients (feature selection).

---

## 3. Logistic Regression (Week 03)

### Sigmoid Function
\[ g(z) = \frac{1}{1 + e^{-z}} \]
- Output in \((0, 1)\) — interpretable as probability.

### Hypothesis
\[ h_\theta(x) = g(\theta^T x) \]

### Decision Boundary
- Predict \(y = 1\) when \(h_\theta(x) \geq 0.5\), i.e., \(\theta^T x \geq 0\).
- Can be linear or non-linear (with polynomial features).

### Cost Function (Log Loss)
\[ J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} [y^{(i)} \log(h_\theta(x^{(i)})) + (1 - y^{(i)}) \log(1 - h_\theta(x^{(i)}))] \]

- Convex — gradient descent finds global minimum.
- Penalises confident wrong predictions heavily.

### Multiclass: One-vs-All
- Train one classifier per class (class vs. rest).
- Pick the class with highest probability.

---

## 4. Model Evaluation

### Regression Metrics
- **MSE:** Average squared error — sensitive to outliers.
- **RMSE:** Square root of MSE — same scale as target.
- **MAE:** Average absolute error — robust to outliers.
- **R²:** Proportion of variance explained by the model. Range \((-\infty, 1]\), higher is better.

### Classification Metrics
**Confusion Matrix:**
| | Predicted Positive | Predicted Negative |
|---|---|---|
| **Actual Positive** | TP | FN |
| **Actual Negative** | FP | TN |

- **Accuracy:** \(\frac{TP + TN}{TP + TN + FP + FN}\) — misleading for imbalanced data.
- **Precision:** \(\frac{TP}{TP + FP}\) — minimise false positives.
- **Recall:** \(\frac{TP}{TP + FN}\) — minimise false negatives.
- **F1 Score:** Harmonic mean of precision and recall.
- **ROC Curve:** Plots TPR vs. FPR at various thresholds.
- **AUC:** Area under ROC — probability that random positive ranks above random negative.

### Cross-Validation
- k-fold: partition into k subsets, train on k-1, test on 1, repeat.
- Estimates generalisation performance.
- Stratified k-fold preserves class distribution.

---

## 5. Bias-Variance Decomposition

**Expected test error:**
\[ E[(y - \hat{f}(x))^2] = \text{Bias}^2 + \text{Variance} + \text{Irreducible Error} \]

| | High Bias | High Variance |
|---|---|---|
| **Cause** | Model too simple | Model too complex |
| **Train error** | High | Low |
| **Test error** | High | High |
| **Fix** | More features, complex model, reduce \(\lambda\) | More data, simplify, increase \(\lambda\), bagging |

---

## 6. Classification Algorithms (Week 03)

### k-Nearest Neighbours
- **Principle:** Classify based on majority vote of k nearest points.
- **Distance:** Euclidean, Manhattan, etc.
- **Hyperparameter k:** Small k → overfitting; large k → underfitting.
- **Scaling:** Essential — sensitive to feature magnitudes.
- **Pros:** Simple, no training, naturally multi-class.
- **Cons:** Slow prediction, memory-intensive, sensitive to irrelevant features.

### Decision Trees
- **Split criterion:** Gini impurity \(G = 1 - \sum p_i^2\) or entropy \(H = -\sum p_i \log_2 p_i\).
- **Information gain:** Reduction in impurity from a split.
- **Overfitting:** Deep trees fit noise — prune (pre-pruning: limit depth, min samples per leaf; post-pruning: grow then trim).
- **Pros:** Interpretable, handles mixed data types, no scaling needed.
- **Cons:** Unstable (small data changes → different tree), prone to overfitting alone.

### Naive Bayes
- **Bayes' theorem:** \(P(y|X) \propto P(X|y) \cdot P(y)\)
- **Naive assumption:** Features are conditionally independent given the class.
- **Why it works:** Despite the unrealistic assumption, often performs well.
- **Use cases:** Text classification, spam filtering.

### Support Vector Machines
- **Goal:** Find hyperplane with maximum margin.
- **Support vectors:** Points on the margin.
- **Soft margin:** Allow some misclassifications (C parameter).
- **Kernel trick:** Implicit mapping to higher dimensions (linear, polynomial, RBF).
- **Pros:** Effective in high dimensions, memory efficient (only support vectors).
- **Cons:** Slow on large datasets, sensitive to hyperparameters, less interpretable.

### Ensemble Methods
- **Bagging (Bootstrap Aggregating):** Train models on bootstrapped samples, average. Reduces variance. → **Random Forest.**
- **Boosting:** Train sequentially, each model focuses on previous errors. Reduces bias. → **Gradient Boosting, XGBoost.**
- **Random Forest:** Many decision trees, each on a random subset of features. Robust, handles overfitting better than single trees.

---

## 7. Key Comparisons

| Algorithm | Parametric? | Handles Non-Linearity | Interpretable | Sensitive to Scaling |
|---|---|---|---|---|
| Linear Regression | Yes | No (unless polynomial features) | Yes | No (but helps GD) |
| Logistic Regression | Yes | No (unless polynomial features) | Yes | No |
| k-NN | No | Yes | No | Yes |
| Decision Tree | No | Yes | Yes | No |
| Random Forest | No | Yes | Partial | No |
| SVM | No (with kernel) | Yes (with kernel) | No | Yes |
| Naive Bayes | No | Limited | Yes | No |

---

## 8. Exam Tips

1. **Read the question carefully** — are they asking for a definition, a formula, a comparison, or a calculation?
2. **Show your working** — especially for gradient descent updates and metric calculations.
3. **Know when to use each metric** — e.g., imbalanced data → use F1, not accuracy.
4. **Understand the bias-variance tradeoff** — almost guaranteed to appear.
5. **Be able to sketch** — decision boundaries, ROC curves, confusion matrices.
6. **Remember the assumptions** — e.g., Naive Bayes independence, linear regression linearity and homoscedasticity.

---

## Related

- [[UTS/Machine Learning/Week 01]] — fundamentals
- [[UTS/Machine Learning/Week 02]] — regression and evaluation
- [[UTS/Machine Learning/Week 03]] — classification algorithms
- [[UTS/Machine Learning/Quiz Notes]] — quick formula reference
- [[UTS/Career/Interviews]] — ML interview prep
