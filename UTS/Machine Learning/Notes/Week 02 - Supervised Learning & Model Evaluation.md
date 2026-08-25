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
  - lecture-notes
---

# Week 02 - Supervised Learning & Model Evaluation

> **Source:** [[Week 02 Lecture Notes]]
> **Prerequisites:** [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]]
> **Next:** [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]]

---

## 1. Summary

Week 02 dives into the workhorse of machine learning: **supervised learning with linear regression**. You will learn how to mathematically formulate the problem, define a cost function that measures model error, and use **gradient descent** to optimise model parameters. You will also master **model evaluation metrics** — the tools that tell you whether your model is any good.

This week bridges the conceptual foundation from Week 01 with the mathematical machinery that makes ML concrete. By the end, you should understand:
- How linear regression models a relationship between variables.
- Why we need a cost function and how MSE works.
- How gradient descent iteratively improves a model.
- The full toolkit of evaluation metrics for both regression and classification.
- The bias-variance tradeoff in detail, including regularisation as a remedy.

---

## 2. Learning Objectives

By the end of this week you should be able to:

1. **Write down the linear regression model** for both simple (one feature) and multiple (many features) cases.
2. **Explain the MSE cost function** — what it measures, why we square errors, and why we divide by \(m\).
3. **Derive and apply the gradient descent update rule** for linear regression.
4. **Choose the right evaluation metric** for a given problem — knowing when to use MSE, RMSE, MAE, or R² for regression, and accuracy, precision, recall, F1, or ROC-AUC for classification.
5. **Compute evaluation metrics by hand** from a small confusion matrix or set of predictions.
6. **Explain the bias-variance tradeoff** quantitatively and describe the effect of regularisation (L1/L2).
7. **Describe k-fold cross-validation** and explain why it gives more reliable estimates than a single train/test split.

---

## 3. Key Concepts

### 3.1 Linear Regression

Linear regression is the "Hello World" of ML — simple, interpretable, and mathematically tractable.

**Simple Linear Regression (one feature):**

\[
y = \beta_0 + \beta_1 x + \epsilon
\]

- \(y\): the target variable (what we predict)
- \(x\): the single input feature
- \(\beta_0\): the **intercept** — the predicted value when \(x = 0\)
- \(\beta_1\): the **slope** — how much \(y\) changes per unit change in \(x\)
- \(\epsilon\): the **error term** — noise that the model cannot explain

**Multiple Linear Regression (many features):**

\[
y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_n x_n + \epsilon
\]

Or in vector notation (more compact and convenient for computation):

\[
y = \theta^T x + \epsilon
\]

Where \(\theta = [\beta_0, \beta_1, \dots, \beta_n]^T\) is the parameter vector and \(x = [1, x_1, \dots, x_n]^T\) (note the leading 1 for the intercept).

**Key assumption:** The relationship between \(X\) and \(y\) is approximately linear. If the true relationship is curved, linear regression will underfit unless we add polynomial features.

### 3.2 The Hypothesis Function

In ML notation, we call our model the **hypothesis**, written \(h_\theta(x)\):

\[
h_\theta(x) = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \dots + \theta_n x_n = \theta^T x
\]

The hypothesis is the model's **prediction** for a given input. The parameters \(\theta\) (also called weights or coefficients) are what we learn from data.

### 3.3 The Cost Function (MSE)

How do we know if our model is good? We need a **quantitative measure of error**. The most common choice for regression is **Mean Squared Error (MSE)**:

\[
J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2
\]

**Breaking this down:**
- \(m\): number of training examples.
- \(h_\theta(x^{(i)})\): the model's prediction for the \(i\)-th example.
- \(y^{(i)}\): the true label for the \(i\)-th example.
- \((h_\theta(x^{(i)}) - y^{(i)})^2\): the **squared error** for one example.
- \(\sum\): sum over all \(m\) examples.
- \(\frac{1}{m}\): averaging — so the cost doesn't grow with dataset size.
- \(\frac{1}{2}\): a convenience factor — cancels the 2 when we differentiate (see Formula Derivations section).

**Why square the errors?**
1. Makes all errors positive (so they don't cancel out).
2. Penalises large errors more heavily (squared amplifies them).
3. Makes the function differentiable everywhere (smooth, convex for linear regression).

**Why not use absolute error (MAE)?** MAE is more robust to outliers but is not differentiable at zero, making optimisation harder. MSE is the standard starting point.

### 3.4 Gradient Descent

Gradient descent is the ** optimisation algorithm** that finds the parameters \(\theta\) that minimise the cost function \(J(\theta)\).

**Intuition:** Imagine you're on a mountain (the cost function surface) in thick fog. You can feel the slope under your feet (the gradient). To get to the bottom, you take a step in the direction of steepest descent. Repeat until you reach a flat spot (convergence).

**The update rule (simultaneously for all \(j\)):**

\[
\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)
\]

Where:
- \(\theta_j\): the \(j\)-th parameter.
- \(\alpha\): the **learning rate** — controls step size.
- \(\frac{\partial}{\partial \theta_j} J(\theta)\): the **gradient** — the partial derivative of the cost with respect to \(\theta_j\). Points uphill; we subtract it to go downhill.

**For linear regression (plugging in the MSE gradient):**

\[
\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}
\]

**Key observations:**
- The update is **proportional to the error** \((h_\theta(x) - y)\): larger errors → bigger adjustments.
- The update is **proportional to the feature** \(x_j\): features with larger values move their corresponding parameters more.
- The update is **averaged over all training examples** (batch gradient descent).

**Learning rate (\(\alpha\)) — the most important hyperparameter:**
| \(\alpha\) too small | \(\alpha\) too large | \(\alpha\) just right |
|---|---|---|
| Very slow convergence | May diverge (overshoot, cost increases) | Converges efficiently |
| Many iterations needed | Oscillates or explodes | Smooth descent to minimum |

### 3.5 Types of Gradient Descent

| Variant | How it works | Pros | Cons |
|---|---|---|---|
| **Batch GD** | Uses entire dataset for each update | Stable convergence, deterministic | Slow for large datasets |
| **Stochastic GD (SGD)** | Uses one random example per update | Fast, can escape local minima | Noisy, never truly converges (oscillates) |
| **Mini-batch GD** | Uses a small batch (e.g., 32, 64, 128) per update | Balance of speed and stability | Most common in practice (deep learning) |

### 3.6 Feature Scaling

Gradient descent converges **much faster** when features are on similar scales.

**Why?** If one feature ranges from 0–1 and another from 0–100,000, the cost function surface is stretched — like a long, narrow valley. Gradient descent zigzags slowly down the valley. Scaling makes the surface more circular, so descent is direct.

**Standardisation (Z-score normalisation):**

\[
x_j' = \frac{x_j - \mu_j}{\sigma_j}
\]

Where \(\mu_j\) is the mean and \(\sigma_j\) is the standard deviation of feature \(j\). After scaling, each feature has mean 0 and standard deviation 1.

**Normalisation (min-max scaling):**

\[
x_j' = \frac{x_j - \min(x_j)}{\max(x_j) - \min(x_j)}
\]

Scales features to [0, 1] range.

### 3.7 The Normal Equation (Closed-Form Solution)

For linear regression, there is an analytical solution that doesn't require iteration:

\[
\theta = (X^T X)^{-1} X^T y
\]

**Pros:** No learning rate to tune, no iteration — one calculation gives the optimal \(\theta\).
**Cons:** Computing \((X^T X)^{-1}\) is \(O(n^3)\) where \(n\) is the number of features — slow for many features. Also, \(X^T X\) must be invertible (no perfectly collinear features).

**When to use:** Small-to-medium feature counts (e.g., < 1000 features), when you want a one-shot solution.
**When to prefer gradient descent:** Many features, very large datasets, or when the closed-form solution doesn't exist (non-linear models).

### 3.8 Polynomial Regression

Linear regression can model non-linear relationships by adding **polynomial features**:

Original feature \(x\) → add \(x^2, x^3, \dots, x^d\)

\[
y = \theta_0 + \theta_1 x + \theta_2 x^2 + \theta_3 x^3 + \dots + \theta_d x^d
\]

This is still **linear in the parameters** \(\theta\) — we can use ordinary linear regression. It's the features that are non-linear, not the model.

**Risk:** High-degree polynomials overfit badly. Always use regularisation with polynomial features.

### 3.9 Model Evaluation Metrics

Choosing the right metric is critical. Different metrics tell you different things about model performance.

#### Regression Metrics

| Metric | Formula | Intuition |
|---|---|---|
| **MSE** | \(\frac{1}{n}\sum_{i=1}^{n} (y_i - \hat{y}_i)^2\) | Average squared error. Penalises large errors heavily. |
| **RMSE** | \(\sqrt{\text{MSE}}\) | Same units as the target. More interpretable than MSE. |
| **MAE** | \(\frac{1}{n}\sum_{i=1}^{n} \|y_i - \hat{y}_i\|\) | Average absolute error. Robust to outliers. |
| **R²** | \(1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}\) | Proportion of variance in \(y\) explained by the model. Range \((-\infty, 1]\). 1 = perfect, 0 = as good as predicting the mean, negative = worse than the mean. |

**When to use which:**
- **MSE/RMSE** for optimisation and when large errors are especially bad.
- **MAE** when outliers are common and shouldn't dominate.
- **R²** for a quick, scale-free comparison of model quality (especially useful when comparing across different datasets).

#### Classification Metrics

Before metrics, we need the **confusion matrix**:

| | Predicted Positive | Predicted Negative |
|---|---|---|
| **Actual Positive** | TP (True Positive) | FN (False Negative) |
| **Actual Negative** | FP (False Positive) | TN (True Negative) |

| Metric | Formula | When to prioritise |
|---|---|---|
| **Accuracy** | \(\frac{TP + TN}{TP + TN + FP + FN}\) | Balanced classes, equal cost of FP and FN |
| **Precision** | \(\frac{TP}{TP + FP}\) | Minimise false positives (e.g., spam filter — don't mark important email as spam) |
| **Recall (Sensitivity)** | \(\frac{TP}{TP + FN}\) | Minimise false negatives (e.g., disease screening — don't miss a sick patient) |
| **F1 Score** | \(2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}\) | Balance precision and recall; good for imbalanced data |
| **ROC-AUC** | Area under the ROC curve | Overall discriminative ability across all thresholds |

**Precision-Recall tradeoff:** Increasing precision typically decreases recall and vice versa. The F1 score is the harmonic mean — it's high only when both are high.

**ROC Curve:** Plots True Positive Rate (Recall) vs. False Positive Rate at various classification thresholds. AUC = 1.0 = perfect classifier, AUC = 0.5 = random guessing.

### 3.10 Bias-Variance Tradeoff (Detailed)

The expected test error can be decomposed as:

\[
\mathbb{E}[(y - \hat{f}(x))^2] = \underbrace{(\mathbb{E}[\hat{f}(x)] - f(x))^2}_{\text{Bias}^2} + \underbrace{\mathbb{E}[(\hat{f}(x) - \mathbb{E}[\hat{f}(x)])^2]}_{\text{Variance}} + \underbrace{\text{Var}(\epsilon)}_{\text{Irreducible Error}}
\]

Where:
- \(f(x)\): the true (unknown) function.
- \(\hat{f}(x)\): our model's prediction.
- \(\mathbb{E}[\hat{f}(x)]\): the average prediction across different training sets.
- \(\text{Var}(\epsilon)\): noise inherent in the data — no model can remove this.

**Bias²:** How far off the average prediction is from the truth. High bias = systematically wrong (underfitting).
**Variance:** How much the prediction varies across different training sets. High variance = sensitive to noise (overfitting).

| | High Bias | High Variance |
|---|---|---|
| **Cause** | Model too simple | Model too complex |
| **Train error** | High | Low |
| **Test error** | High | High |
| **Learning curve** | Both plateau at high error | Gap between train (low) and test (high) |
| **Fixes** | Add features, more complex model, reduce regularisation | More data, simpler model, increase regularisation, bagging/ensembling |

### 3.11 Regularisation

Regularisation adds a **penalty term** to the cost function that discourages large parameter values, reducing overfitting.

**Ridge Regression (L2 regularisation):**

\[
J(\theta) = \text{MSE} + \lambda \sum_{j=1}^{n} \theta_j^2
\]

- Penalises the **sum of squared coefficients**.
- Shrinks all coefficients toward zero but rarely exactly zero.
- \(\lambda\) (lambda): regularisation strength. \(\lambda = 0\) → no regularisation. \(\lambda \to \infty\) → all coefficients → 0 (extreme underfitting).

**Lasso Regression (L1 regularisation):**

\[
J(\theta) = \text{MSE} + \lambda \sum_{j=1}^{n} |\theta_j|
\]

- Penalises the **sum of absolute coefficients**.
- Can drive coefficients **exactly to zero** → performs **feature selection**.
- Useful when you have many features and suspect only a few matter.

**Elastic Net:** Combines L1 and L2 penalties:

\[
J(\theta) = \text{MSE} + \lambda_1 \sum |\theta_j| + \lambda_2 \sum \theta_j^2
\]

### 3.12 Cross-Validation

A single train/test split gives one estimate of performance — but that estimate depends on how you split the data. **k-fold cross-validation** gives a more robust estimate.

**Procedure:**
1. Split data into \(k\) equal-sized folds.
2. For each fold \(i\):
   - Train on the other \(k-1\) folds.
   - Evaluate on fold \(i\).
3. Average the \(k\) evaluation scores.

**Common choices:**
- \(k = 5\): Good balance of computational cost and estimate quality.
- \(k = 10\): More reliable, slightly more expensive.
- \(k = n\) (Leave-One-Out CV): Maximum reliability, very expensive.

**Stratified k-fold:** Preserves the class distribution in each fold — essential for imbalanced classification problems.

**Why CV matters:** It gives you a better sense of how your model will perform on unseen data, reduces the variance of your performance estimate, and helps you compare models more fairly.

---

## 4. Important Formulas

### Linear Regression

**Model:**
\[
h_\theta(x) = \theta_0 + \theta_1 x_1 + \dots + \theta_n x_n = \theta^T x
\]

**MSE Cost Function:**
\[
J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2
\]

**Gradient Descent Update:**
\[
\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}
\]

**Normal Equation:**
\[
\theta = (X^T X)^{-1} X^T y
\]

### Polynomial Regression

\[
h_\theta(x) = \theta_0 + \theta_1 x + \theta_2 x^2 + \dots + \theta_d x^d
\]

### Regularisation

**Ridge (L2):**
\[
J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2 + \lambda \sum_{j=1}^{n} \theta_j^2
\]

**Lasso (L1):**
\[
J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2 + \lambda \sum_{j=1}^{n} |\theta_j|
\]

### Evaluation Metrics

**Regression:**
\[
\text{MSE} = \frac{1}{n}\sum (y_i - \hat{y}_i)^2, \quad \text{RMSE} = \sqrt{\text{MSE}}, \quad \text{MAE} = \frac{1}{n}\sum |y_i - \hat{y}_i|
\]
\[
R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}
\]

**Classification:**
\[
\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}, \quad \text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}
\]
\[
F1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}
\]

### Bias-Variance Decomposition

\[
\mathbb{E}[(y - \hat{f}(x))^2] = \text{Bias}^2[\hat{f}(x)] + \text{Var}[\hat{f}(x)] + \text{Var}(\epsilon)
\]

---

## 5. Worked Examples

### Example 1: Computing MSE by Hand

**Problem:** You have 3 training examples with predictions and true values:

| \(i\) | \(x^{(i)}\) | \(y^{(i)}\) (true) | \(h_\theta(x^{(i)})\) (predicted) |
|---|---|---|---|
| 1 | 2 | 5 | 4.5 |
| 2 | 4 | 10 | 11 |
| 3 | 6 | 14 | 13 |

Compute MSE.

**Solution:**
\[
\begin{aligned}
\text{errors} &= [4.5 - 5, 11 - 10, 13 - 14] = [-0.5, 1, -1] \\
\text{squared errors} &= [0.25, 1, 1] \\
\text{MSE} &= \frac{1}{2m} \sum = \frac{1}{2 \cdot 3} (0.25 + 1 + 1) = \frac{2.25}{6} = 0.375
\end{aligned}
\]

Note: With the \(\frac{1}{2}\) factor. Without it (as in scikit-learn), MSE = \(\frac{2.25}{3} = 0.75\).

---

### Example 2: Gradient Descent Step

**Problem:** For the same data as Example 1, suppose \(\theta_0 = 1, \theta_1 = 2\), learning rate \(\alpha = 0.1\). Compute one gradient descent update for \(\theta_0\) and \(\theta_1\).

**Solution:**
Hypothesis: \(h_\theta(x) = \theta_0 + \theta_1 x = 1 + 2x\)

Predictions: \(h_\theta(2) = 5, h_\theta(4) = 9, h_\theta(6) = 13\)

Errors: \([5-5, 9-10, 13-14] = [0, -1, -1]\)

**Update for \(\theta_0\) (feature is always 1):**
\[
\theta_0 := 1 - 0.1 \cdot \frac{1}{3} (0 \cdot 1 + (-1) \cdot 1 + (-1) \cdot 1) = 1 - 0.1 \cdot \frac{-2}{3} = 1 + 0.0667 = 1.0667
\]

**Update for \(\theta_1\):**
\[
\theta_1 := 2 - 0.1 \cdot \frac{1}{3} (0 \cdot 2 + (-1) \cdot 4 + (-1) \cdot 6) = 2 - 0.1 \cdot \frac{-10}{3} = 2 + 0.3333 = 2.3333
\]

After one step: \(\theta_0 = 1.067, \theta_1 = 2.333\). The model is adjusting to reduce the errors.

---

### Example 3: Confusion Matrix and Metrics

**Problem:** A disease classifier is tested on 100 patients. Results:
- TP = 30, FN = 10, FP = 5, TN = 55

Compute all standard metrics.

**Solution:**
- **Accuracy:** \(\frac{30 + 55}{30 + 10 + 5 + 55} = \frac{85}{100} = 0.85\) (85%)
- **Precision:** \(\frac{30}{30 + 5} = \frac{30}{35} = 0.857\) (85.7%) — of those predicted sick, 85.7% are actually sick
- **Recall:** \(\frac{30}{30 + 10} = \frac{30}{40} = 0.75\) (75%) — of those actually sick, 75% were detected
- **F1 Score:** \(2 \cdot \frac{0.857 \cdot 0.75}{0.857 + 0.75} = 2 \cdot \frac{0.643}{1.607} = 0.80\) (80%)

**Interpretation:** The model is good at avoiding false alarms (high precision) but misses 25% of actual cases (recall = 75%). For a serious disease, you'd want higher recall — missing a sick patient is worse than a false alarm.

---

### Example 4: Choosing the Right Metric

**Scenario:** You're building a fraud detection system. 99.5% of transactions are legitimate, 0.5% are fraudulent. Your model achieves 99.5% accuracy by always predicting "legitimate."

**Analysis:** This is the **accuracy paradox**. The model is useless — it detects zero fraud. Accuracy is the wrong metric for highly imbalanced data.

**Better metrics:** Precision, Recall, F1, or ROC-AUC. For fraud detection, you typically want high precision (don't flag too many legitimate transactions) while maintaining reasonable recall (catch a good fraction of fraud).

---

### Example 5: k-Fold Cross-Validation Walkthrough

**Problem:** You have 10 data points and use 5-fold CV. Show the fold assignments.

**Solution:**
Data points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], split into 5 folds of 2 points each:

| Fold | Points |
|---|---|
| 1 | [1, 2] |
| 2 | [3, 4] |
| 3 | [5, 6] |
| 4 | [7, 8] |
| 5 | [9, 10] |

Training/evaluation rounds:

| Round | Train on | Evaluate on |
|---|---|---|
| 1 | [3,4,5,6,7,8,9,10] | [1,2] |
| 2 | [1,2,5,6,7,8,9,10] | [3,4] |
| 3 | [1,2,3,4,7,8,9,10] | [5,6] |
| 4 | [1,2,3,4,5,6,9,10] | [7,8] |
| 5 | [1,2,3,4,5,6,7,8] | [9,10] |

Final score = average of the 5 evaluation scores. This gives a more robust estimate than a single split.

---

## 6. Practical Applications

### Linear Regression in Practice

| Domain | Application | Features (\(X\)) | Target (\(y\)) |
|---|---|---|---|
| **Real Estate** | House price prediction | Sq metres, bedrooms, suburb, year built | Sale price |
| **Retail** | Sales forecasting | Advertising spend, seasonality, promotions | Revenue |
| **Healthcare** | Risk scoring | Age, BMI, blood pressure, lab results | Disease probability / hospital stay duration |
| **Finance** | Credit scoring | Income, debt-to-income, credit history, employment | Probability of default |
| **Manufacturing** | Quality prediction | Temperature, pressure, speed, raw material properties | Defect rate |

### Using Evaluation Metrics in Practice

| Situation | Recommended Metric | Why |
|---|---|---|
| **Predicting continuous values** (prices, temperatures) | RMSE, MAE, R² | Directly measures prediction error |
| **Balanced binary classification** (50/50 split) | Accuracy, ROC-AUC | Both classes matter equally |
| **Imbalanced classification** (fraud, rare disease) | F1, Precision-Recall AUC | Accuracy is misleading |
| **Cost of false positives is high** (spam filter) | Precision | Don't annoy users with false spam flags |
| **Cost of false negatives is high** (cancer screening) | Recall | Don't miss actual cases |
| **Need a single threshold-independent metric** | ROC-AUC | Captures performance across all thresholds |

### Feature Scaling in Practice

```python
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import Ridge
from sklearn.pipeline import Pipeline

# Always scale before regularisation and gradient descent
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('ridge', Ridge(alpha=1.0))
])
pipeline.fit(X_train, y_train)
```

> **Rule of thumb:** If your algorithm uses distances (k-NN, SVM, k-means) or gradient descent (linear regression, logistic regression, neural networks), scale your features. Tree-based models (decision trees, random forest) don't need scaling.

---

## 7. Quiz Questions with Answers

### Q1: What does the MSE cost function measure, and why do we square the errors?

**Answer:** MSE measures the average squared difference between the model's predictions and the true values. We square errors to: (1) make all errors positive so they don't cancel, (2) penalise large errors more heavily, and (3) make the function differentiable for gradient descent optimisation.

---

### Q2: What happens if the learning rate \(\alpha\) is too large in gradient descent?

**Answer:** The algorithm may overshoot the minimum, oscillating or even diverging (the cost increases instead of decreasing). The parameters bounce around or blow up rather than converging to the optimal values.

---

### Q3: A regression model has RMSE = 5.2 on the test set. The target variable ranges from 0 to 100. Is this good?

**Answer:** It depends on the context. RMSE = 5.2 means predictions are off by about 5.2 units on average. If predicting house prices in the hundreds of thousands, 5.2 might be excellent. If predicting percentages (0–100 scale), 5.2 might be mediocre. Always interpret metrics relative to the scale and stakes of the problem. R² helps here — it's scale-independent.

---

### Q4: What is the difference between precision and recall? Give an example where you'd prioritise each.

**Answer:** Precision = of those predicted positive, how many are actually positive (minimise false positives). Recall = of those actually positive, how many were found (minimise false negatives).
- **Prioritise precision:** Spam filter — marking a legitimate email as spam is very annoying.
- **Prioritise recall:** Cancer screening — missing a cancer case is far worse than a false alarm.

---

### Q5: How does L1 regularisation (Lasso) differ from L2 (Ridge), and when would you use each?

**Answer:** L1 penalises the sum of absolute coefficients and can drive them to exactly zero (feature selection). L2 penalises the sum of squared coefficients and shrinks them toward zero but rarely to exactly zero. Use Lasso when you have many features and want automatic feature selection. Use Ridge when you believe all features contribute somewhat and want to shrink them gently. Elastic Net combines both.

---

### Q6 (ML-specific): Why is feature scaling important for gradient descent?

**Answer:** When features are on different scales, the cost function surface is stretched into a narrow valley. Gradient descent takes small, zigzagging steps toward the minimum, converging slowly. Scaling features to similar ranges makes the surface more spherical, so gradient descent moves directly toward the minimum with fewer iterations.

---

### Q7 (ML-specific): What is the fundamental difference between the normal equation and gradient descent for linear regression?

**Answer:** The normal equation \(\theta = (X^T X)^{-1} X^T y\) gives the optimal parameters in one calculation — no iteration needed. However, computing the matrix inverse is \(O(n^3)\) in the number of features, making it slow for many features. Gradient descent is iterative but scales better to large feature counts and datasets, and it extends to models without closed-form solutions (logistic regression, neural networks).

---

## 8. Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---|---|---|
| **Forgetting to scale features** before gradient descent or k-NN | Slow convergence or poor distance-based predictions | Standardise or normalise features first |
| **Using accuracy for imbalanced data** | A model that always predicts the majority class can have high accuracy but zero utility | Use F1, precision-recall, or ROC-AUC |
| **Confusing R² with accuracy** | R² is for regression, not classification; values can be negative | Use appropriate metrics for the problem type |
| **Tuning hyperparameters on the test set** | The test set becomes part of the training process; evaluation is no longer unbiased | Use a validation set or cross-validation for tuning |
| **Choosing \(\lambda\) (regularisation) without cross-validation** | \(\lambda\) is a hyperparameter — its optimal value depends on the data | Use CV to find the best \(\lambda\) |
| **Ignoring the bias-variance diagnosis** | Blindly trying different models without understanding the failure mode | Plot learning curves to diagnose high bias vs. high variance |
| **Using polynomial regression without regularisation** | High-degree polynomials overfit severely | Always pair polynomial features with regularisation |

---

## 9. Exam Notes

**High-probability exam topics:**

1. **Linear regression model** — write the equation for simple and multiple cases. Know what each term means.
2. **MSE cost function** — write it from memory, explain each term, explain why the 1/2 is there.
3. **Gradient descent** — write the update rule, explain the learning rate, describe batch vs. stochastic vs. mini-batch.
4. **Feature scaling** — why it matters, how to do it (standardisation formula).
5. **Normal equation** — write it, state pros and cons, when to use it vs. gradient descent.
6. **Evaluation metrics** — define MSE, RMSE, MAE, R², accuracy, precision, recall, F1. Know when to use each. Be able to compute them from a confusion matrix or set of predictions.
7. **Bias-variance tradeoff** — the decomposition, what each term means, how to diagnose from learning curves, how to fix each.
8. **Regularisation** — L1 vs. L2, the modified cost functions, what \(\lambda\) does, feature selection with Lasso.
9. **Cross-validation** — describe k-fold CV procedure, why it's better than a single split, stratified CV for imbalanced data.

**Exam tip:** Many exam questions will ask you to **compute something by hand** — a metric from a small dataset, a gradient descent step, a confusion matrix. Practice these calculations.

**Connection to Week 03:** Evaluation metrics for classification (precision, recall, F1, ROC-AUC) are used throughout the classification algorithms in Week 03. The bias-variance concept and regularisation extend to all models, not just linear regression.

---

## 10. Revision Cheat Sheet

**Linear regression:** \(h_\theta(x) = \theta^T x\). Assumes linear relationship between X and y.

**MSE:** \(J(\theta) = \frac{1}{2m} \sum (h_\theta(x^{(i)}) - y^{(i)})^2\). Minimising MSE = finding the best-fit line.

**Gradient descent:** \(\theta_j := \theta_j - \alpha \frac{1}{m} \sum (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}\). Iterative optimisation. Learning rate \(\alpha\) controls step size.

**Normal equation:** \(\theta = (X^T X)^{-1} X^T y\). Closed-form solution. \(O(n^3)\) — slow for many features.

**Feature scaling:** Standardisation: \(x' = (x - \mu) / \sigma\). Essential for gradient descent and distance-based algorithms.

**Regression metrics:** MSE (penalise large errors), RMSE (interpretable units), MAE (robust to outliers), R² (variance explained).

**Classification metrics:** Accuracy (balanced classes), Precision (minimise FP), Recall (minimise FN), F1 (balance), ROC-AUC (threshold-independent).

**Bias² + Variance + Irreducible Error = Test Error.** High bias = underfitting (simplistic model). High variance = overfitting (too sensitive to noise).

**Regularisation:** L1 (Lasso) → feature selection (coefficients → 0). L2 (Ridge) → shrinkage. Add \(\lambda \sum |\theta_j|\) or \(\lambda \sum \theta_j^2\) to cost function.

**k-Fold CV:** Split into k folds, train on k-1, test on 1, repeat k times, average. More robust than single split. Use stratified CV for imbalanced data.

---

## 11. Related Links

- [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]] — prerequisites
- [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]] — next week
- [[UTS/Machine Learning/Quiz Prep/Week 02 Quiz Prep]] — practice questions
- [[UTS/Machine Learning/Weekly Summaries/Week 02 Summary]] — weekly summary
- [[Week 02 Lecture Notes]] — source material
- [[UTS/Machine Learning/Assignments/ML Assignment 1]] — assignment (when released)
- [[UTS/Career/Interview Questions/ML Interview Questions]] — interview prep

---

## 12. Mathematical Intuition (ML Extension)

### Why is MSE convex for linear regression?

A function is convex if a line segment between any two points on its graph lies above or on the graph. Convex functions have a single global minimum — no local minima to get stuck in.

For linear regression, MSE is convex because:
1. It's a quadratic function of \(\theta\) (the squared term).
2. The Hessian (matrix of second derivatives) is \(\frac{1}{m} X^T X\), which is positive semi-definite.
3. Positive semi-definite Hessian → convex function → gradient descent is guaranteed to find the global minimum (with appropriate \(\alpha\)).

This is why linear regression is "easy" — the optimisation problem is well-behaved. Non-linear models (neural networks) have non-convex loss surfaces with many local minima.

### Why does more data help with overfitting?

Overfitting happens when the model learns patterns in the training data that don't generalise — typically noise or spurious correlations. With more data:
- The signal (true pattern) becomes more statistically dominant relative to noise.
- The model has more examples to learn from, making it harder to memorise idiosyncrasies.
- The variance of the model's predictions decreases — the model becomes more stable across different training sets.

This is the intuition behind why **high-variance models benefit most from more data**. A high-bias model (too simple) won't improve much with more data because it can't capture the pattern regardless.

### The intuition behind regularisation

Regularisation adds a penalty for large coefficients. Why does this help?

Large coefficients mean the model is making strong predictions based on small changes in features. This makes the model sensitive — a small change in an input can cause a large change in output. That sensitivity is exactly what overfitting looks like: the model is "overreacting" to the training data.

By penalising large coefficients, regularisation **smooths** the model's predictions. A smoother model is less likely to fit noise and more likely to generalise. This is the same intuition behind why a simple straight line often generalises better than a wiggly polynomial curve through noisy data.

---

## 13. Formula Derivations (ML Extension)

### Full Gradient Derivation for MSE

Starting from:
\[
J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2
\]

Where \(h_\theta(x^{(i)}) = \sum_{j=0}^{n} \theta_j x_j^{(i)}\) (including \(\theta_0\) with \(x_0 = 1\)).

**Step 1:** Take the partial derivative with respect to \(\theta_j\):
\[
\frac{\partial J}{\partial \theta_j} = \frac{1}{2m} \sum_{i=1}^{m} 2(h_\theta(x^{(i)}) - y^{(i)}) \cdot \frac{\partial}{\partial \theta_j} (h_\theta(x^{(i)}) - y^{(i)})
\]

**Step 2:** The derivative of the hypothesis with respect to \(\theta_j\):
\[
\frac{\partial}{\partial \theta_j} h_\theta(x^{(i)}) = \frac{\partial}{\partial \theta_j} \sum_{k=0}^{n} \theta_k x_k^{(i)} = x_j^{(i)}
\]

**Step 3:** Substitute back:
\[
\frac{\partial J}{\partial \theta_j} = \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) \cdot x_j^{(i)}
\]

**Step 4:** The gradient descent update:
\[
\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}
\]

### Derivation: Normal Equation

We want to find \(\theta\) that minimises \(J(\theta)\). At the minimum, the gradient is zero:

\[
\nabla_\theta J(\theta) = 0
\]

In matrix notation:
\[
J(\theta) = \frac{1}{2m} (X\theta - y)^T (X\theta - y)
\]

Taking the gradient with respect to \(\theta\):
\[
\nabla_\theta J(\theta) = \frac{1}{m} X^T (X\theta - y) = 0
\]

Solving:
\[
X^T X\theta = X^T y
\]
\[
\theta = (X^T X)^{-1} X^T y
\]

**Condition:** \(X^T X\) must be invertible. If features are perfectly collinear (linearly dependent), \(X^T X\) is singular and the normal equation fails — gradient descent still works.

### Derivation: Ridge Regression Solution

For Ridge (L2), the cost function is:
\[
J(\theta) = \frac{1}{2m} (X\theta - y)^T (X\theta - y) + \lambda \theta^T \theta
\]

Taking the gradient and setting to zero:
\[
\frac{1}{m} X^T (X\theta - y) + 2\lambda \theta = 0
\]

Solving:
\[
(X^T X + \lambda m I) \theta = X^T y
\]
\[
\theta = (X^T X + \lambda m I)^{-1} X^T y
\]

The \(\lambda m I\) term (where \(I\) is the identity matrix) ensures \(X^T X + \lambda m I\) is always invertible for \(\lambda > 0\), even when \(X^T X\) is singular. This is the key practical advantage of Ridge over ordinary least squares.

### Why L1 doesn't have a closed form

Lasso adds \(\lambda \sum |\theta_j|\) to the cost. The absolute value function \(|\theta_j|\) is not differentiable at \(\theta_j = 0\). This means we can't set the gradient to zero and solve analytically. Lasso requires iterative optimisation (coordinate descent, proximal gradient methods). The lack of a closed form is the price we pay for the feature selection property.

---

## 14. Python Examples (ML Extension)

### Example 1: Linear Regression from Scratch (Gradient Descent)

```python
import numpy as np

class LinearRegressionGD:
    """Linear regression implemented with batch gradient descent."""
    
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.lr = learning_rate
        self.n_iter = n_iterations
        self.theta = None
        self.cost_history = []
    
    def fit(self, X, y):
        m, n = X.shape
        # Add bias column (x_0 = 1)
        X_b = np.c_[np.ones((m, 1)), X]
        # Initialise parameters to zeros
        self.theta = np.zeros(n + 1)
        
        for i in range(self.n_iter):
            # Hypothesis: h = X_b @ theta
            y_pred = X_b @ self.theta
            # MSE gradient: (1/m) * X_b.T @ (y_pred - y)
            gradients = (1/m) * X_b.T @ (y_pred - y)
            # Update
            self.theta -= self.lr * gradients
            # Track cost
            cost = (1/(2*m)) * np.sum((y_pred - y)**2)
            self.cost_history.append(cost)
        
        return self
    
    def predict(self, X):
        X_b = np.c_[np.ones((X.shape[0], 1)), X]
        return X_b @ self.theta

# Usage
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)  # y = 4 + 3x + noise

model = LinearRegressionGD(learning_rate=0.1, n_iterations=1000)
model.fit(X, y)

print(f"Intercept: {model.theta[0]:.3f}")   # Should be ~4
print(f"Slope:     {model.theta[1]:.3f}")   # Should be ~3
print(f"Final cost: {model.cost_history[-1]:.3f}")
```

**Key insight:** This is what happens under the hood in scikit-learn. Understanding the implementation helps you debug when things go wrong.

---

### Example 2: Feature Scaling Comparison

```python
import matplotlib.pyplot as plt

# Demonstrate the effect of feature scaling on gradient descent
X_raw = np.random.rand(100, 1) * 1000  # Feature in [0, 1000]
y = 2 * X_raw.flatten() + 5 + np.random.randn(100) * 10

# Without scaling
model_unscaled = LinearRegressionGD(learning_rate=0.000001, n_iterations=500)
model_unscaled.fit(X_raw, y)

# With scaling
from sklearn.preprocessing import StandardScaler
X_scaled = StandardScaler().fit_transform(X_raw)
model_scaled = LinearRegressionGD(learning_rate=0.1, n_iterations=500)
model_scaled.fit(X_scaled, y)

# Plot cost histories
plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.plot(model_unscaled.cost_history)
plt.title('Without Scaling (α=1e-6)')
plt.xlabel('Iteration')
plt.ylabel('Cost')

plt.subplot(1, 2, 2)
plt.plot(model_scaled.cost_history)
plt.title('With Scaling (α=0.1)')
plt.xlabel('Iteration')
plt.ylabel('Cost')

plt.tight_layout()
plt.show()
```

**Observation:** Without scaling, you need an extremely small learning rate (α = 1e-6) to avoid divergence. With scaling, a much larger learning rate (α = 0.1) converges quickly. Scaling makes gradient descent dramatically more efficient.

---

### Example 3: Complete Regression Evaluation

```python
from sklearn.datasets import make_regression
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import PolynomialFeatures, StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error, r2_score

# Generate a regression dataset
X, y = make_regression(n_samples=500, n_features=5, noise=20, random_state=42)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 1. Baseline: Linear regression
lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred = lr.predict(X_test)
print(f"Linear Regression  — MSE: {mean_squared_error(y_test, y_pred):.1f}, R²: {r2_score(y_test, y_pred):.3f}")

# 2. Cross-validation for robust estimate
cv_scores = cross_val_score(lr, X, y, cv=5, scoring='neg_mean_squared_error')
print(f"CV MSE: {-cv_scores.mean():.1f} (+/- {cv_scores.std():.1f})")

# 3. Polynomial regression (degree 3) with Ridge
poly_ridge = Pipeline([
    ('poly', PolynomialFeatures(degree=3, include_bias=False)),
    ('scaler', StandardScaler()),
    ('ridge', Ridge(alpha=1.0))
])
poly_ridge.fit(X_train, y_train)
y_pred_poly = poly_ridge.predict(X_test)
print(f"Poly+Ridge (deg=3) — MSE: {mean_squared_error(y_test, y_pred_poly):.1f}, R²: {r2_score(y_test, y_pred_poly):.3f}")

# 4. Lasso for feature selection
lasso = Lasso(alpha=1.0, max_iter=5000)
lasso.fit(X_train, y_train)
print(f"Lasso coefficients: {lasso.coef_}")
print(f"Lasso intercept: {lasso.intercept_:.3f}")
print(f"Non-zero features: {np.sum(lasso.coef_ != 0)} / {len(lasso.coef_)}")
```

**Key takeaways:**
- Cross-validation gives a more reliable performance estimate than a single split.
- Polynomial features + regularisation can capture non-linear relationships.
- Lasso performs automatic feature selection (many coefficients → exactly 0).

---

## 15. Scikit-learn Examples (ML Extension)

### Comprehensive Regression Workflow

```python
from sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet
from sklearn.model_selection import GridSearchCV
from sklearn.preprocessing import StandardScaler, PolynomialFeatures
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error, r2_score, make_scorer

# Set up a pipeline with scaling, optional polynomial features, and regularisation
pipeline = Pipeline([
    ('poly', PolynomialFeatures(degree=2, include_bias=False)),
    ('scaler', StandardScaler()),
    ('regressor', Ridge())
])

# Hyperparameter grid for tuning
param_grid = {
    'poly__degree': [1, 2, 3],
    'regressor__alpha': [0.01, 0.1, 1.0, 10.0, 100.0],
    'regressor': [Ridge(), Lasso(), ElasticNet(max_iter=5000)]
}

# Grid search with cross-validation
grid = GridSearchCV(
    pipeline, param_grid, cv=5,
    scoring='neg_mean_squared_error',
    n_jobs=-1
)
grid.fit(X_train, y_train)

print(f"Best parameters: {grid.best_params_}")
print(f"Best CV MSE: {-grid.best_score_:.1f}")

# Evaluate best model on test set
best_model = grid.best_estimator_
y_pred = best_model.predict(X_test)
print(f"Test MSE: {mean_squared_error(y_test, y_pred):.1f}")
print(f"Test R²:  {r2_score(y_test, y_pred):.3f}")
```

### Classification Metrics Walkthrough

```python
from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (confusion_matrix, accuracy_score, precision_score,
                             recall_score, f1_score, roc_auc_score, roc_curve)
import matplotlib.pyplot as plt

X, y = make_classification(n_samples=1000, n_features=10, n_informative=5,
                           n_redundant=2, weights=[0.7, 0.3], random_state=42)

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Predictions
y_pred = clf.predict(X_test)
y_prob = clf.predict_proba(X_test)[:, 1]

# All metrics
print(f"Accuracy:  {accuracy_score(y_test, y_pred):.3f}")
print(f"Precision: {precision_score(y_test, y_pred):.3f}")
print(f"Recall:    {recall_score(y_test, y_pred):.3f}")
print(f"F1 Score:  {f1_score(y_test, y_pred):.3f}")
print(f"ROC-AUC:   {roc_auc_score(y_test, y_prob):.3f}")

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)
print(f"\nConfusion Matrix:\n{cm}")

# ROC Curve
fpr, tpr, thresholds = roc_curve(y_test, y_prob)
plt.figure(figsize=(6, 5))
plt.plot(fpr, tpr, label=f'ROC Curve (AUC = {roc_auc_score(y_test, y_prob):.3f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curve')
plt.legend()
plt.show()
```

**Key insight:** Always look at multiple metrics. A model with 90% accuracy on imbalanced data (70/30 split) might actually be quite poor if it's missing most of the minority class.

---

## 16. Sources

- [[Week 02 Lecture Notes]] — primary lecture material
- [[UTS/Machine Learning/Sources/Week 02 Reading List]] — recommended readings
- [[Week 01 Lecture Notes]] — prerequisite Week 01 material
- [[UTS/Career/Interview Questions/ML Interview Questions]] — related interview prep

---

*These notes follow the [[UTS/Templates/Lecture Note Template|Lecture Note Template]]. For the weekly summary, see [[UTS/Templates/Weekly Summary Template|Weekly Summary Template]].*
