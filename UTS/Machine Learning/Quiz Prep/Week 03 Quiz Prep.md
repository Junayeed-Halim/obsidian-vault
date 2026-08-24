---
type: course
course: Machine Learning
title: Quiz Prep - Week 03
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - quiz
  - machine-learning
  - quiz-prep
---

# Quiz Prep - Week 03

> **Based on:** [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]]
> **Course:** [[UTS/Machine Learning|Machine Learning]]

---

## Key Formulas — Memorise These

### Logistic Regression

**Sigmoid:** \(g(z) = \frac{1}{1 + e^{-z}}\)

**Hypothesis:** \(h_\theta(x) = g(\theta^T x) = P(y=1|x;\theta)\)

**Decision boundary:** Predict class 1 when \(\theta^T x \geq 0\) (i.e., \(h_\theta(x) \geq 0.5\))

**Log loss:** \(J(\theta) = -\frac{1}{m} \sum [y \log(h_\theta(x)) + (1-y) \log(1-h_\theta(x))]\)

### k-NN

**Euclidean distance:** \(d(x, x') = \sqrt{\sum_{j=1}^{n} (x_j - x'_j)^2}\)

**Prediction:** Majority vote among \(k\) nearest neighbours.

### Decision Trees

**Gini impurity:** \(G = 1 - \sum_{i=1}^{K} p_i^2\)

**Entropy:** \(H = -\sum_{i=1}^{K} p_i \log_2(p_i)\)

**Information gain:** \(\text{IG} = H_{\text{parent}} - \sum_{j} \frac{N_j}{N} H_{\text{child}_j}\)

### Naive Bayes

**Bayes' theorem:** \(P(y=c|x) = \frac{P(x|y=c) \cdot P(y=c)}{P(x)}\)

**Naive assumption:** \(P(x|y=c) = \prod_{j=1}^{n} P(x_j|y=c)\)

**Prediction:** \(\hat{y} = \arg\max_c [P(y=c) \cdot \prod_j P(x_j|y=c)]\)

### SVM

**Hard margin:** \(\min \frac{1}{2}\|\theta\|^2\) subject to \(y^{(i)}(\theta^T x^{(i)} + b) \geq 1\)

**RBF kernel:** \(K(x, x') = \exp(-\gamma \|x - x'\|^2)\)

---

## Algorithm Comparison — Must-Know

| Algorithm | Type | Needs Scaling? | Interpretable? | Handles Non-Linearity? | Training Speed | Prediction Speed |
|---|---|---|---|---|---|---|
| **Logistic Regression** | Linear | Yes (for GD) | Yes (coefficients) | Only with polynomial features | Fast | Fast |
| **k-NN** | Instance-based | **Yes (critical)** | No | Yes (non-parametric) | None (lazy) | Slow (\(O(m)\)) |
| **Decision Tree** | Tree-based | No | **Yes (most)** | Yes | Fast | Fast |
| **Random Forest** | Ensemble (bagging) | No | Partial (feature importance) | Yes | Fast (parallel) | Moderate |
| **Gradient Boosting** | Ensemble (boosting) | Yes (recommended) | Partial (feature importance) | Yes | Moderate (sequential) | Moderate |
| **Naive Bayes** | Probabilistic | No (but helpful) | Partial | Limited | Very fast | Very fast |
| **SVM** | Margin-based | **Yes (critical)** | No | Yes (with kernel trick) | Slow (\(O(m^2)\)) | Fast (only SVs) |

---

## Practice Questions

### Q1: Logistic Regression
Why is MSE not used as the cost function for logistic regression? What is used instead?

<details>
<summary>Answer</summary>

MSE with a sigmoid hypothesis is **non-convex** — it has many local minima, so gradient descent can get stuck in a suboptimal solution. Instead, **log loss (binary cross-entropy)** is used, which is **convex** — gradient descent finds the global minimum. Log loss also heavily penalises confident wrong predictions, which is desirable for classification.
</details>

---

### Q2: k-NN
You're using k-NN with \(k=1\) on a noisy dataset. What problem do you expect? How do you fix it?

<details>
<summary>Answer</summary>

**Problem:** \(k=1\) is highly overfit — the model predicts based on the single nearest neighbour, which could be noise. The decision boundary is very wiggly and doesn't generalise.

**Fix:** Increase \(k\) (use cross-validation to find the optimal value, typically 3–10). Also ensure features are scaled.
</details>

---

### Q3: Decision Trees
Compute the Gini impurity for a node with 8 samples: 5 of class A, 3 of class B. Then compute the information gain if a split produces a left child with 4A+1B and a right child with 1A+2B.

<details>
<summary>Answer</summary>

**Parent Gini:** \(p_A = 5/8 = 0.625, p_B = 3/8 = 0.375\)
\(G = 1 - 0.625^2 - 0.375^2 = 1 - 0.3906 - 0.1406 = 0.4688\)

**Left child Gini:** \(p_A = 4/5 = 0.8, p_B = 1/5 = 0.2\)
\(G_{\text{left}} = 1 - 0.8^2 - 0.2^2 = 1 - 0.64 - 0.04 = 0.32\)

**Right child Gini:** \(p_A = 1/3 = 0.333, p_B = 2/3 = 0.667\)
\(G_{\text{right}} = 1 - 0.333^2 - 0.667^2 = 1 - 0.111 - 0.444 = 0.445\)

**Weighted Gini after split:** \((5/8) \cdot 0.32 + (3/8) \cdot 0.445 = 0.2 + 0.167 = 0.367\)

**Information Gain:** \(0.4688 - 0.367 = 0.102\)
</details>

---

### Q4: Bagging vs. Boosting
Which reduces bias and which reduces variance? Explain why.

<details>
<summary>Answer</summary>

**Bagging (Random Forest) reduces variance.** Individual trees have high variance (unstable — small data changes → different trees). Averaging many trees trained on different bootstrap samples cancels out the variance. Bias stays roughly the same.

**Boosting (Gradient Boosting) reduces bias.** Each new tree focuses on the errors of the previous ensemble, progressively learning more of the true function. Starting from weak learners (high bias), the ensemble becomes accurate (low bias). However, boosting can increase variance if taken too far.
</details>

---

### Q5: Naive Bayes
Why is Naive Bayes called "naive"? Does this limitation prevent it from being useful?

<details>
<summary>Answer</summary>

It's called "naive" because it assumes **features are conditionally independent given the class** — an assumption that is almost never true in reality.

Despite this, Naive Bayes often works surprisingly well for classification because:
1. The classification decision depends on the **ranking** of posterior probabilities, not their absolute accuracy.
2. Dependencies between features tend to affect all classes similarly, preserving the relative ordering.
3. It's computationally efficient and works well with high-dimensional data (e.g., text).

So the "naive" assumption hurts probability estimates but often doesn't hurt classification accuracy.
</details>

---

### Q6: SVM
What are support vectors? What happens if you move a non-support vector to a different position?

<details>
<summary>Answer</summary>

**Support vectors** are the data points closest to the decision boundary — they define the margin. They are the only points that matter for the final SVM model.

If you move a **non-support vector** (a point far from the boundary), **nothing changes** — the boundary stays exactly the same. Only moving support vectors changes the boundary. This makes SVM memory-efficient (only support vectors need to be stored).
</details>

---

### Q7 (ML-specific): Algorithm Selection
You have 10,000 samples, 100 features, and need a model that: (a) trains quickly, (b) provides feature importance, (c) handles non-linear relationships, (d) is robust to overfitting. Which algorithm do you choose and why?

<details>
<summary>Answer</summary>

**Random Forest.** It satisfies all requirements:
- (a) Fast training — trees are built in parallel.
- (b) Feature importance is available.
- (c) Handles non-linearity naturally (tree splits).
- (d) Robust to overfitting — bagging + feature randomness reduce variance.

SVM would be too slow for 10,000 samples. k-NN would be slow at prediction time and needs scaling. A single decision tree would overfit. Gradient Boosting is a good alternative but trains sequentially (slower) and is more prone to overfitting if not tuned carefully.
</details>

---

### Q8 (ML-specific): Logistic Regression Decision Boundary
Given \(\theta_0 = -1, \theta_1 = 2, \theta_2 = -1\), what is the equation of the decision boundary? Sketch it.

<details>
<summary>Answer</summary>

Decision boundary: \(\theta^T x = 0\)
\(-1 + 2x_1 - x_2 = 0\)
\(2x_1 - x_2 = 1\)
\(x_2 = 2x_1 - 1\)

This is a **straight line** with slope 2 and intercept -1. The model predicts class 1 above the line (\(x_2 > 2x_1 - 1\)) and class 0 below it.
</details>

---

## Quick Drill — Algorithm Strengths and Weaknesses

| Algorithm | Biggest Strength | Biggest Weakness |
|---|---|---|
| Logistic Regression | Simple, interpretable, probability estimates | Linear decision boundary only (without feature engineering) |
| k-NN | Simple, no training, non-parametric | Slow prediction, needs scaling, sensitive to irrelevant features |
| Decision Tree | Interpretable, no scaling, handles mixed types | Prone to overfitting, unstable |
| Random Forest | Reduces overfitting, feature importance, good default | Less interpretable than single tree, memory usage |
| Gradient Boosting | High accuracy, handles complex patterns | Sequential (slower), can overfit, sensitive to noise |
| Naive Bayes | Extremely fast, works well for text, high-dimensional | Independence assumption unrealistic |
| SVM | Effective in high dimensions, maximum margin | Doesn't scale to large datasets, needs tuning |

---

## Exam Tips

- **Know the formulas cold** — sigmoid, log loss, Gini, entropy, Bayes' theorem, RBF kernel.
- **Be able to trace by hand** — a k-NN prediction (compute distances, find neighbours, vote), a decision tree split (compute Gini/entropy, information gain).
- **Algorithm selection questions** — read the requirements carefully (speed, interpretability, scalability, non-linearity) and match to the algorithm.
- **"Why" questions** — why does Naive Bayes work despite the naive assumption? Why does bagging reduce variance? Why does SVM maximise the margin?
- **Sketch questions** — decision boundary for logistic regression (linear), SVM with margin and support vectors, sigmoid curve.

---

## Related

- [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]] — full notes
- [[UTS/Machine Learning/Quiz Prep/Week 02 Quiz Prep]] — previous week
- [[UTS/Machine Learning/Weekly Summaries/Week 03 Summary]] — weekly summary
