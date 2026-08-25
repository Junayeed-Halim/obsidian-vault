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
  - lecture-notes
---

# Week 03 - Classification Algorithms

> **Source:** [[Week 03 Lecture Notes]]
> **Prerequisites:** [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]], [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]]
> **Next:** [[UTS/Machine Learning/Quiz Prep/Week 03 Quiz Prep]]

---

## 1. Summary

Week 03 covers the **classification** half of supervised learning. While Week 02 focused on predicting continuous values (regression), this week is about predicting **categories** — yes/no, spam/not spam, cat/dog/bird.

You will learn six major classification algorithms, each with different strengths and weaknesses:

1. **Logistic Regression** — despite its name, a classification algorithm that models probabilities.
2. **k-Nearest Neighbours (k-NN)** — a simple, intuitive, instance-based method.
3. **Decision Trees** — interpretable, tree-structured models that split on feature thresholds.
4. **Ensemble Methods** (Random Forest, Gradient Boosting) — combining multiple models for better performance.
5. **Naive Bayes** — a probabilistic method based on Bayes' theorem, excellent for text.
6. **Support Vector Machines (SVM)** — finding the optimal separating hyperplane with maximum margin.

By the end of this week, you should understand when to use each algorithm, how they work mathematically, and how to evaluate classification performance using precision, recall, F1, and ROC-AUC.

---

## 2. Learning Objectives

By the end of this week you should be able to:

1. **Explain logistic regression** — the sigmoid function, decision boundary, and log loss cost function.
2. **Describe k-NN** — how it works, the role of \(k\), why feature scaling matters, and its computational characteristics.
3. **Build and interpret decision trees** — Gini impurity, entropy, information gain, tree terminology, and overfitting.
4. **Distinguish bagging from boosting** — Random Forest (bagging) vs. Gradient Boosting, and when each is appropriate.
5. **Apply Naive Bayes** — Bayes' theorem, the independence assumption, and why it works surprisingly well for text.
6. **Explain SVM** — the maximum margin principle, support vectors, the kernel trick, and the \(C\) parameter.
7. **Compare all six algorithms** — on dimensions of interpretability, scalability, handling of non-linearity, sensitivity to scaling, and suitability for different problem types.

---

## 3. Key Concepts

### 3.1 Classification vs. Regression

Both are supervised learning, but the output differs:

| | Regression | Classification |
|---|---|---|
| **Output** | Continuous numeric value | Discrete category/class label |
| **Examples** | House price, temperature, stock value | Spam/not spam, image category, disease diagnosis |
| **Typical algorithms** | Linear regression, polynomial regression | Logistic regression, k-NN, decision trees, SVM, Naive Bayes |
| **Evaluation** | MSE, RMSE, MAE, R² | Accuracy, precision, recall, F1, ROC-AUC |

Some problems naturally fit one or the other, but the line can blur — for example, predicting a probability (0 to 1) is technically regression, but it's often used for classification (threshold at 0.5).

### 3.2 Logistic Regression

Despite the word "regression" in its name, logistic regression is a **classification** algorithm. It's one of the most widely used classification methods because it's simple, interpretable, and provides calibrated probabilities.

**The Sigmoid (Logistic) Function:**

\[
g(z) = \frac{1}{1 + e^{-z}}
\]

This function maps any real number \(z\) to the range \((0, 1)\). Its shape is an S-curve:
- \(g(0) = 0.5\)
- \(g(z) \to 1\) as \(z \to \infty\)
- \(g(z) \to 0\) as \(z \to -\infty\)

**The Hypothesis:**

\[
h_\theta(x) = g(\theta^T x) = \frac{1}{1 + e^{-\theta^T x}}
\]

The output \(h_\theta(x)\) is interpreted as the **probability** that the input belongs to class 1:

\[
h_\theta(x) = P(y = 1 \mid x; \theta)
\]

**Decision Boundary:**

Predict class 1 when the probability is at least 0.5:

\[
h_\theta(x) \geq 0.5 \iff \theta^T x \geq 0
\]

The decision boundary is the set of points where \(\theta^T x = 0\) — a linear boundary (a line in 2D, a plane in 3D, a hyperplane in higher dimensions).

With polynomial features, the decision boundary can be non-linear:
\[
\theta_0 + \theta_1 x_1 + \theta_2 x_2 + \theta_3 x_1^2 + \theta_4 x_2^2 = 0
\]
This traces out a circle, ellipse, or other curve — still linear in the parameters, but non-linear in the original features.

**The Cost Function: Log Loss (Binary Cross-Entropy)**

For classification, MSE doesn't work well — it's not convex for logistic regression (the sigmoid makes it non-convex, with many local minima). Instead, we use the **log loss**:

\[
J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} \left[ y^{(i)} \log(h_\theta(x^{(i)})) + (1 - y^{(i)}) \log(1 - h_\theta(x^{(i)})) \right]
\]

**Why this works:**
- When \(y = 1\): cost = \(-\log(h_\theta(x))\). If \(h_\theta(x) \to 1\) (correct confident prediction), cost → 0. If \(h_\theta(x) \to 0\) (wrong prediction), cost → \(\infty\).
- When \(y = 0\): cost = \(-\log(1 - h_\theta(x))\). If \(h_\theta(x) \to 0\) (correct), cost → 0. If \(h_\theta(x) \to 0\) (wrong), cost → \(\infty\).

The cost function penalises **confident wrong predictions** extremely heavily (log of near-zero → large value). This is desirable — we want to strongly discourage the model from being confidently wrong.

**Key property:** The log loss for logistic regression is **convex** — gradient descent finds the global minimum.

**Multiclass: One-vs-All (One-vs-Rest)**

For \(K\) classes, train \(K\) separate binary classifiers, each distinguishing one class from all others:

- Classifier 1: class 1 vs. not class 1
- Classifier 2: class 2 vs. not class 2
- ...
- Classifier K: class K vs. not class K

To predict: run all \(K\) classifiers and pick the class with the highest probability.

### 3.3 k-Nearest Neighbours (k-NN)

k-NN is the simplest classification algorithm — it doesn't build an explicit model. It's a **lazy learner**: all the work happens at prediction time, not training time.

**How it works:**

1. **Store** all training data (no training phase).
2. For a new input \(x\):
   - Compute the **distance** from \(x\) to every training example.
   - Find the **\(k\) nearest neighbours** (smallest distances).
   - Predict the **majority class** among those \(k\) neighbours.

**Distance metrics:**
- **Euclidean distance:** \(d(x, x') = \sqrt{\sum (x_j - x'_j)^2}\) — most common, intuitive.
- **Manhattan distance:** \(d(x, x') = \sum |x_j - x'_j|\) — grid-like paths.
- **Minkowski distance:** Generalisation of both.

**The choice of \(k\):**

| \(k\) value | Effect |
|---|---|
| \(k = 1\) | Very flexible, captures fine detail. Prone to overfitting (noisy neighbours). |
| \(k\) small (1–5) | Low bias, high variance. Sensitive to individual points. |
| \(k\) large | Smoother decision boundary. Higher bias, lower variance. Too large → underfitting (approaches majority classifier). |
| \(k = n\) (all points) | Predicts the majority class always — maximum underfitting. |

**Finding the best \(k\):** Use cross-validation. Try different \(k\) values and pick the one with the best CV score.

**Why feature scaling is critical for k-NN:**

k-NN uses distances. If one feature ranges from 0–1 and another from 0–1000, the second feature dominates the distance calculation. The first feature is effectively ignored. **Always scale features before using k-NN.**

**Computational characteristics:**

| Aspect | Characteristic |
|---|---|
| **Training time** | \(O(1)\) — just store the data |
| **Prediction time** | \(O(m \cdot n)\) — must compute distance to all \(m\) training examples with \(n\) features |
| **Memory** | \(O(m \cdot n)\) — stores all training data |
| **Scalability** | Poor for large datasets — prediction becomes slow |

**Pros:**
- Simple to understand and implement.
- No training phase — new data can be added instantly.
- Naturally handles multi-class problems.
- Decision boundary can be arbitrarily complex (non-parametric).

**Cons:**
- Slow prediction for large datasets.
- Sensitive to irrelevant features (they distort distances).
- Requires feature scaling.
- No interpretability — "the majority of your neighbours voted this way" isn't very informative.

### 3.4 Decision Trees

Decision trees are **Flowcharts** for making predictions. They ask a series of yes/no questions about the features and arrive at a prediction.

**Tree terminology:**

| Term | Definition |
|---|---|
| **Root node** | The top of the tree — contains all training data. |
| **Internal node** | A decision point — splits data based on a feature and threshold. |
| **Branch** | A path from a node to its child, corresponding to an outcome of the split. |
| **Leaf node** | A terminal node — contains the final prediction (class label or value). |
| **Depth** | The length of the longest path from root to leaf. |
| **Parent/Child** | A node and its descendant. |

**How splitting works:**

At each internal node, the algorithm chooses the feature and threshold that best separates the classes. "Best" is measured by an **impurity** metric — how mixed the classes are after the split. We want splits that produce pure (single-class) child nodes.

**Gini Impurity:**

\[
G = 1 - \sum_{i=1}^{K} p_i^2
\]

Where \(p_i\) is the proportion of class \(i\) in the node.

- If all samples are the same class (\(p_1 = 1\), others = 0): \(G = 1 - 1^2 = 0\) (perfectly pure).
- If samples are equally distributed across \(K\) classes (\(p_i = 1/K\)): \(G = 1 - K(1/K)^2 = 1 - 1/K\).

For binary classification: \(G = 1 - p^2 - (1-p)^2 = 2p(1-p)\). Maximum at \(p = 0.5\): \(G = 0.5\).

**Information Gain (based on Entropy):**

\[
H = -\sum_{i=1}^{K} p_i \log_2(p_i)
\]

Entropy measures the "uncertainty" or "disorder" in a node. A pure node has entropy 0. A maximally mixed node has entropy \(\log_2(K)\).

**Information Gain** from a split:
\[
\text{IG} = H_{\text{parent}} - \sum_{j} \frac{N_j}{N} H_{\text{child}_j}
\]

Where \(N_j\) is the number of samples in child \(j\) and \(N\) is the total. We choose the split that **maximises information gain** (minimises the weighted average entropy of children).

**Gini vs. Entropy:** They're very similar in practice. Gini is slightly faster to compute (no logarithms). Some implementations default to Gini (scikit-learn), others to entropy (C4.5/C5.0).

**The splitting algorithm (for each node):**
1. For each feature, consider all possible thresholds (or for categorical features, all subsets).
2. Compute the impurity (Gini or entropy) of the resulting child nodes.
3. Choose the split that minimises the weighted average impurity (maximises information gain).
4. Repeat recursively for each child until a stopping condition is met.

**Stopping conditions (pre-pruning):**
- Maximum depth reached.
- Minimum number of samples per leaf.
- Minimum improvement in impurity.
- All samples in a node belong to the same class (pure node).

**Pros:**
- Highly interpretable — you can trace the exact reasoning path for any prediction.
- Handles both numerical and categorical features.
- No need for feature scaling.
- Captures non-linear relationships and feature interactions naturally.
- Robust to outliers (splits are based on thresholds, not magnitudes).

**Cons:**
- **Prone to overfitting** — deep trees can perfectly memorise training data, including noise.
- **Unstable** — small changes in the training data can produce very different trees (high variance).
- Can create biased trees if some features have many possible splits (e.g., continuous features with many unique values).

**Mitigating overfitting:** Pre-pruning (limit depth, min samples per leaf) or post-pruning (grow a full tree, then trim branches that don't improve validation performance). In practice, ensemble methods (Random Forest, Gradient Boosting) handle this better.

### 3.5 Ensemble Methods

Ensemble methods combine multiple models to produce better predictions than any single model. The intuition: a committee of diverse, moderately accurate models often outperforms a single expert.

#### Bagging (Bootstrap Aggregating)

**Key idea:** Train many models on **different random subsets** of the training data, then combine their predictions (majority vote for classification, average for regression).

**Random Forest** is the most famous bagging algorithm:

1. Create \(B\) bootstrap samples (sample \(m\) training examples with replacement).
2. For each bootstrap sample, train a decision tree.
3. **Feature randomness:** At each split in each tree, consider only a random subset of features (typically \(\sqrt{n}\) for classification, \(n/3\) for regression).
4. **Aggregate:** For prediction, each tree votes, and the majority wins (classification) or predictions are averaged (regression).

**Why randomise features?** Without feature randomness, all trees would look similar (using the strongest features at each split). Feature randomness **decorrelates** the trees, making the ensemble more diverse and more effective.

**Why does bagging work?** It reduces **variance**. Individual decision trees have high variance (unstable — small data changes → very different trees). By averaging many trees trained on different data subsets, the variance cancels out. Bias stays roughly the same (each tree still has the same bias).

**Out-of-bag (OOB) evaluation:** Each bootstrap sample leaves out about 1/3 of the training data. These "out-of-bag" samples can be used as a validation set — no separate validation data needed.

#### Boosting

**Key idea:** Train models **sequentially**, where each new model focuses on the examples that previous models got wrong.

**Gradient Boosting:**
1. Train a weak model (e.g., a shallow decision tree — "stump").
2. Compute the **residuals** (errors) — the difference between predictions and true values.
3. Train a new model to predict the **residuals** (not the original target).
4. Add the new model's predictions (scaled by a learning rate) to the ensemble.
5. Repeat for many rounds.

Each new model **corrects the errors** of the current ensemble. The result is a strong learner built from many weak learners.

**Key hyperparameters:**
- **Number of trees (n_estimators):** More trees → better performance, but more computation and risk of overfitting.
- **Learning rate:** Scales each tree's contribution. Lower learning rate → more trees needed, but often better final performance (slower, more careful learning).
- **Tree depth:** Deeper trees = stronger learners but more prone to overfitting. Gradient boosting typically uses shallow trees (depth 3–6).

**Popular implementations:** XGBoost, LightGBM, CatBoost. These are optimised, production-grade boosting libraries with advanced features (handling missing values, categorical features, regularisation).

**Why boosting works:** It reduces **bias**. Each weak learner is only slightly better than random guessing, but by sequentially correcting errors, the ensemble becomes highly accurate. Unlike bagging, boosting can turn many high-bias models into a low-bias ensemble.

**Pros and cons:**
- **Pros:** Often achieves state-of-the-art performance on tabular data. Handles mixed feature types well. Feature importance is available.
- **Cons:** Can overfit if too many trees or too low a learning rate. Sequential training is slower than parallel bagging. Less interpretable than a single tree. Sensitive to noisy data and outliers (boosting "focuses" on hard examples, which may be noise).

**Bagging vs. Boosting — quick comparison:**

| | Bagging (Random Forest) | Boosting (Gradient Boosting) |
|---|---|---|
| **Training** | Parallel (trees independent) | Sequential (each tree depends on previous) |
| **What it reduces** | Variance | Bias |
| **Base models** | Deep trees (can be complex) | Shallow trees (weak learners) |
| **Overfitting risk** | Low — averaging reduces variance | Higher — can overfit with too many rounds |
| **Speed** | Fast (parallelisable) | Slower (sequential) |
| **Typical use** | Good default, robust, interpretable (feature importance) | When you need maximum predictive performance |

### 3.6 Naive Bayes

Naive Bayes is a **probabilistic** classifier based on Bayes' theorem. It's called "naive" because it makes a strong (and usually false) assumption: **features are conditionally independent given the class.**

**Bayes' Theorem:**

\[
P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)}
\]

In ML context:
\[
P(y = c \mid x) = \frac{P(x \mid y = c) \cdot P(y = c)}{P(x)}
\]

Where:
- \(P(y = c \mid x)\): **Posterior** — probability of class \(c\) given the features. This is what we want.
- \(P(x \mid y = c)\): **Likelihood** — probability of seeing these features given class \(c\).
- \(P(y = c)\): **Prior** — base rate of class \(c\) in the training data.
- \(P(x)\): **Evidence** — probability of the features (same for all classes, can be ignored for comparison).

**The "naive" assumption:**

\[
P(x \mid y = c) = P(x_1 \mid y = c) \cdot P(x_2 \mid y = c) \cdot \dots \cdot P(x_n \mid y = c)
\]

Each feature is treated as **independent** of the others given the class. This is almost never true in reality (features are usually correlated), but Naive Bayes often works very well anyway.

**Why does Naive Bayes work despite the naive assumption?**

The independence assumption simplifies the computation enormously and, surprisingly, the classification decision is often correct even when the probability estimates are wrong. As long as the dependencies affect all classes similarly, the ranking of posterior probabilities is preserved.

**Training:** For each class \(c\):
- Estimate the prior: \(P(y = c) = \frac{\text{count of class } c}{\text{total samples}}\).
- For each feature \(x_j\), estimate \(P(x_j \mid y = c)\) from the training data.

**Prediction:** For a new input \(x\):
- For each class \(c\): compute \(P(y = c) \cdot \prod_j P(x_j \mid y = c)\).
- Predict the class with the highest score.

**Variants:**
- **Gaussian Naive Bayes:** Features are assumed to follow a normal distribution within each class. Used for continuous features.
- **Multinomial Naive Bayes:** Features are counts (e.g., word counts in text). Used for text classification.
- **Bernoulli Naive Bayes:** Features are binary (present/absent). Used for binary features.

**Pros:**
- Extremely fast training and prediction — scales to millions of samples and features.
- Works well with small datasets.
- Handles high-dimensional data well (text classification with thousands of words).
- Naturally handles multi-class problems.
- Provides probability estimates.

**Cons:**
- The independence assumption is unrealistic — correlated features can skew probability estimates.
- Cannot learn feature interactions (because it assumes independence).
- Zero-frequency problem: if a feature value never appears in training for a class, \(P(x_j \mid y = c) = 0\), making the entire product zero. Solved by **Laplace smoothing** (add 1 to all counts).

### 3.7 Support Vector Machines (SVM)

SVM is a powerful classification algorithm that finds the **optimal separating boundary** between classes.

**The Maximum Margin Principle:**

Among all hyperplanes that separate the classes, SVM chooses the one with the **maximum margin** — the largest distance from the hyperplane to the nearest data points of either class.

**Key concepts:**

| Term | Definition |
|---|---|
| **Hyperplane** | The decision boundary — a line (2D), plane (3D), or higher-dimensional surface. Defined by \(\theta^T x + b = 0\). |
| **Margin** | The distance from the hyperplane to the nearest data point. SVM maximises this. |
| **Support vectors** | The data points closest to the hyperplane — they "support" or define the margin. Only these points matter for the final model. |
| **Hard margin** | All points must be correctly classified with a margin. Only works if data is perfectly linearly separable. |
| **Soft margin** | Allows some misclassifications (controlled by \(C\)) for better generalisation. Used in practice. |

**Why maximum margin?**

A larger margin means the decision boundary is farther from the data points, making it more robust to noise and more likely to generalise. Intuitively: if the boundary is right between two clusters, a small perturbation of the data won't change the classification. If the boundary is right next to a data point, a small shift could flip the prediction.

**The \(C\) parameter (soft margin):**

\[
\text{Minimise } \frac{1}{2} \|\theta\|^2 + C \sum_{i=1}^{m} \max(0, 1 - y^{(i)}(\theta^T x^{(i)} + b))
\]

- \(\frac{1}{2} \|\theta\|^2\): Maximises the margin (smaller \(\|\theta\|\) = larger margin).
- \(C \sum \max(0, \dots)\): Penalises misclassifications and points within the margin.
- **\(C\) large:** Hard margin — few misclassifications allowed, narrower margin, risk of overfitting.
- **\(C\) small:** Soft margin — more misclassifications tolerated, wider margin, better generalisation.

**The Kernel Trick:**

What if the data isn't linearly separable? SVM can map the data into a **higher-dimensional space** where it becomes separable, without explicitly computing the transformation.

A **kernel function** \(K(x, x')\) computes the dot product in the higher-dimensional space directly from the original features:

\[
K(x, x') = \phi(x)^T \phi(x')
\]

Where \(\phi\) is the (possibly infinite-dimensional) feature mapping. Common kernels:

| Kernel | Formula | When to use |
|---|---|---|
| **Linear** | \(K(x, x') = x^T x'\) | When data is linearly separable or high-dimensional |
| **Polynomial** | \(K(x, x') = (x^T x' + c)^d\) | When interactions between features matter |
| **RBF (Radial Basis Function) / Gaussian** | \(K(x, x') = \exp(-\gamma \|x - x'\|^2)\) | Default choice — handles complex non-linear boundaries |
| **Sigmoid** | \(K(x, x') = \tanh(\alpha x^T x' + c)\) | Sometimes used, but less common |

The RBF kernel is the most popular — it maps data into an infinite-dimensional space and can approximate any decision boundary given the right \(\gamma\).

**Key hyperparameters:**
- **\(C\):** Tradeoff between margin width and misclassification.
- **\(\gamma\) (for RBF):** Controls the "reach" of each support vector. Large \(\gamma\) = each support vector influences a small area (complex, wiggly boundary, risk of overfitting). Small \(\gamma\) = each support vector influences a large area (smooth boundary, risk of underfitting).

**Pros:**
- Effective in high-dimensional spaces (text classification, genomics).
- Memory efficient — only support vectors are stored and used for prediction.
- Versatile — different kernels for different problem structures.
- Strong theoretical foundation (maximum margin, structural risk minimisation).

**Cons:**
- Doesn't scale well to very large datasets (training is \(O(m^2)\) to \(O(m^3)\) in the number of samples).
- Sensitive to hyperparameter choices (\(C\), \(\gamma\)) — requires careful tuning.
- Less interpretable than linear models or decision trees.
- Requires feature scaling (distance-based kernel).
- Probability estimates require additional calibration (Platt scaling).

---

## 4. Important Formulas

### Logistic Regression

**Sigmoid function:**
\[
g(z) = \frac{1}{1 + e^{-z}}
\]

**Hypothesis:**
\[
h_\theta(x) = g(\theta^T x) = \frac{1}{1 + e^{-\theta^T x}} = P(y = 1 \mid x; \theta)
\]

**Decision boundary:**
\[
\text{Predict } \hat{y} = 1 \text{ when } \theta^T x \geq 0
\]

**Log loss (cost function):**
\[
J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} \left[ y^{(i)} \log(h_\theta(x^{(i)})) + (1 - y^{(i)}) \log(1 - h_\theta(x^{(i)})) \right]
\]

### k-Nearest Neighbours

**Euclidean distance:**
\[
d(x, x') = \sqrt{\sum_{j=1}^{n} (x_j - x'_j)^2}
\]

**Prediction:**
\[
\hat{y} = \text{majority vote}\{y^{(i)} : x^{(i)} \in \text{k-nearest-neighbours}(x)\}
\]

### Decision Trees

**Gini impurity:**
\[
G = 1 - \sum_{i=1}^{K} p_i^2
\]

**Entropy:**
\[
H = -\sum_{i=1}^{K} p_i \log_2(p_i)
\]

**Information gain:**
\[
\text{IG} = H_{\text{parent}} - \sum_{j} \frac{N_j}{N} H_{\text{child}_j}
\]

### Naive Bayes

**Bayes' theorem:**
\[
P(y = c \mid x) = \frac{P(x \mid y = c) \cdot P(y = c)}{P(x)}
\]

**Naive assumption:**
\[
P(x \mid y = c) = \prod_{j=1}^{n} P(x_j \mid y = c)
\]

**Prediction (ignoring \(P(x)\) which is constant):**
\[
\hat{y} = \arg\max_c \left[ P(y = c) \cdot \prod_{j=1}^{n} P(x_j \mid y = c) \right]
\]

### Support Vector Machines

**Maximum margin hyperplane (hard margin):**
\[
\begin{aligned}
\text{Minimise } & \frac{1}{2} \|\theta\|^2 \\
\text{Subject to } & y^{(i)}(\theta^T x^{(i)} + b) \geq 1, \quad \forall i
\end{aligned}
\]

**Soft margin (with slack variables \(\xi_i\)):**
\[
\begin{aligned}
\text{Minimise } & \frac{1}{2} \|\theta\|^2 + C \sum_{i=1}^{m} \xi_i \\
\text{Subject to } & y^{(i)}(\theta^T x^{(i)} + b) \geq 1 - \xi_i, \quad \xi_i \geq 0
\end{aligned}
\]

**RBF Kernel:**
\[
K(x, x') = \exp(-\gamma \|x - x'\|^2)
\]

---

## 5. Worked Examples

### Example 1: Logistic Regression Probability Calculation

**Problem:** A logistic regression model for spam detection has \(\theta_0 = -2, \theta_1 = 0.5\) (where \(x_1\) is the number of exclamation marks in the email). For an email with 8 exclamation marks, what is the predicted probability of spam?

**Solution:**
\[
\begin{aligned}
z &= \theta_0 + \theta_1 x_1 = -2 + 0.5 \cdot 8 = -2 + 4 = 2 \\
h_\theta(x) &= \frac{1}{1 + e^{-2}} = \frac{1}{1 + 0.135} = \frac{1}{1.135} = 0.881
\end{aligned}
\]

**Interpretation:** The model predicts an 88.1% probability of spam. Since \(0.881 > 0.5\), the prediction is **spam**.

---

### Example 2: k-NN Classification

**Problem:** You have 5 training points in 2D:

| Point | \(x_1\) | \(x_2\) | Class |
|---|---|---|---|
| A | 1 | 2 | Red |
| B | 2 | 1 | Red |
| C | 4 | 5 | Blue |
| D | 5 | 4 | Blue |
| E | 3 | 3 | Blue |

A new point \(P = (2.5, 2.5)\) arrives. Using \(k = 3\) and Euclidean distance, predict its class.

**Solution:**
Compute distances from \(P\) to all training points:

| Point | Distance from \(P\) | Class |
|---|---|---|
| A | \(\sqrt{(2.5-1)^2 + (2.5-2)^2} = \sqrt{2.25 + 0.25} = \sqrt{2.5} = 1.58\) | Red |
| B | \(\sqrt{(2.5-2)^2 + (2.5-1)^2} = \sqrt{0.25 + 2.25} = \sqrt{2.5} = 1.58\) | Red |
| E | \(\sqrt{(2.5-3)^2 + (2.5-3)^2} = \sqrt{0.25 + 0.25} = \sqrt{0.5} = 0.71\) | Blue |
| C | \(\sqrt{(2.5-4)^2 + (2.5-5)^2} = \sqrt{2.25 + 6.25} = \sqrt{8.5} = 2.92\) | Blue |
| D | \(\sqrt{(2.5-5)^2 + (2.5-4)^2} = \sqrt{6.25 + 2.25} = \sqrt{8.5} = 2.92\) | Blue |

The 3 nearest neighbours (smallest distances) are: E (Blue, 0.71), A (Red, 1.58), B (Red, 1.58).

Majority vote: 2 Red, 1 Blue → **Predict Red**.

---

### Example 3: Decision Tree — Computing Gini and Information Gain

**Problem:** A node contains 10 samples: 6 Red, 4 Blue.

(a) Compute the Gini impurity.
(b) Consider a split that produces:
   - Left child: 4 samples (3 Red, 1 Blue)
   - Right child: 6 samples (3 Red, 3 Blue)
   Compute the weighted Gini after the split and the information gain.

**Solution:**

**(a) Gini before split:**
\[
G_{\text{parent}} = 1 - (0.6)^2 - (0.4)^2 = 1 - 0.36 - 0.16 = 0.48
\]

**(b) Gini after split:**

Left child: \(p_{\text{Red}} = 3/4 = 0.75, p_{\text{Blue}} = 1/4 = 0.25\)
\[
G_{\text{left}} = 1 - 0.75^2 - 0.25^2 = 1 - 0.5625 - 0.0625 = 0.375
\]

Right child: \(p_{\text{Red}} = 3/6 = 0.5, p_{\text{Blue}} = 3/6 = 0.5\)
\[
G_{\text{right}} = 1 - 0.5^2 - 0.5^2 = 1 - 0.25 - 0.25 = 0.5
\]

Weighted average Gini after split:
\[
G_{\text{split}} = \frac{4}{10} \cdot 0.375 + \frac{6}{10} \cdot 0.5 = 0.15 + 0.30 = 0.45
\]

Information Gain (Gini):
\[
\text{IG} = G_{\text{parent}} - G_{\text{split}} = 0.48 - 0.45 = 0.03
\]

This is a small improvement — the split is somewhat helpful but not strongly so.

---

### Example 4: Naive Bayes — Text Classification

**Problem:** A spam filter uses Multinomial Naive Bayes. From training data:
- \(P(\text{spam}) = 0.3, P(\text{ham}) = 0.7\)
- Word "free" appears in 40% of spam emails and 5% of ham emails.
- Word "meeting" appears in 10% of spam emails and 30% of ham emails.

A new email contains both "free" and "meeting". Predict spam or ham. (Use Laplace smoothing → add 1 to all counts, assume 1000 total words in vocabulary.)

**Solution:**
Using Naive Bayes with Laplace smoothing:

For spam:
\[
\begin{aligned}
P(\text{free} \mid \text{spam}) &= \frac{0.4 \cdot 1000 + 1}{1000 + 1000} = \frac{401}{2000} = 0.2005 \\
P(\text{meeting} \mid \text{spam}) &= \frac{0.1 \cdot 1000 + 1}{2000} = \frac{101}{2000} = 0.0505
\end{aligned}
\]

Score for spam:
\[
\text{Score}_{\text{spam}} = 0.3 \cdot 0.2005 \cdot 0.0505 = 0.00304
\]

For ham:
\[
\begin{aligned}
P(\text{free} \mid \text{ham}) &= \frac{0.05 \cdot 1000 + 1}{2000} = \frac{51}{2000} = 0.0255 \\
P(\text{meeting} \mid \text{ham}) &= \frac{0.3 \cdot 1000 + 1}{2000} = \frac{301}{2000} = 0.1505
\end{aligned}
\]

Score for ham:
\[
\text{Score}_{\text{ham}} = 0.7 \cdot 0.0255 \cdot 0.1505 = 0.00268
\]

Since \(\text{Score}_{\text{spam}} > \text{Score}_{\text{ham}}\), **predict spam**.

Even though "meeting" is more common in ham, the strong association of "free" with spam dominates.

---

### Example 5: SVM — Understanding the Margin

**Problem:** Sketch and describe: you have two classes of points on a 2D plane, linearly separable. An SVM finds the optimal hyperplane. What are the support vectors, and why does the margin matter?

**Solution:**

**Sketch description:** Draw two clusters of points — red dots on the left, blue dots on the right, with a gap between them. The SVM hyperplane (a vertical line) sits exactly in the middle of the gap. Two margin lines run parallel to the hyperplane, touching the closest red dot on the left and the closest blue dot on the right. These closest points are the **support vectors**.

**Why the margin matters:**
- The margin represents the model's **confidence** — points far from the boundary are safely classified.
- A wider margin = more robust to noise and perturbations. If a new point appears near the boundary, a wide margin means it's still clearly on one side.
- The SVM optimisation explicitly maximises this margin, which is why it generalises well.
- Only the support vectors matter — moving other points (non-support vectors) doesn't change the boundary. This makes SVM memory-efficient.

---

## 6. Practical Applications

### When to Use Each Algorithm

| Algorithm | Best For | Avoid When |
|---|---|---|
| **Logistic Regression** | Binary classification, need probabilities, interpretability matters, baseline model | Non-linear decision boundaries (without feature engineering), very complex patterns |
| **k-NN** | Small datasets, simple baselines, multi-class problems, non-linear boundaries | Large datasets (slow prediction), high-dimensional data (curse of dimensionality), needs fast inference |
| **Decision Trees** | Interpretability is critical, mixed data types, non-linear relationships, feature importance needed | When maximum accuracy is the goal (single trees overfit), very noisy data |
| **Random Forest** | Good default for tabular data, handles overfitting better than single trees, feature importance | When interpretability of individual predictions is needed, very large datasets (memory) |
| **Gradient Boosting** | Maximum predictive performance on tabular data, competitions, production systems | When training speed matters, very noisy data (boosting can chase noise), need simple interpretability |
| **Naive Bayes** | Text classification (spam, sentiment), high-dimensional data, small datasets, fast training needed | When feature interactions are important, when accurate probability estimates are needed |
| **SVM** | High-dimensional data (text, bioinformatics), medium-sized datasets, complex non-linear boundaries (with RBF kernel) | Very large datasets (doesn't scale), when interpretability is critical, when speed matters |

### Real-World Examples

| Application | Algorithm | Why |
|---|---|---|
| **Spam detection** | Naive Bayes (historically), Logistic Regression, or Boosting | Text features, high-dimensional, need speed and reasonable accuracy |
| **Credit card fraud** | Gradient Boosting (XGBoost) or Random Forest | Imbalanced data, tabular features, need high recall for fraud |
| **Medical diagnosis** | Logistic Regression or decision tree (interpretable) | Need to explain predictions to doctors and patients |
| **Image classification** | Deep learning (CNNs) — beyond scope of this week, but worth knowing | Raw pixels → complex patterns; classical ML rarely competitive |
| **Customer churn prediction** | Logistic Regression or Gradient Boosting | Tabular data, need probability estimates, feature importance |
| **Sentiment analysis** | Naive Bayes or Logistic Regression on text features | Text data, bag-of-words features work well with these algorithms |

---

## 7. Quiz Questions with Answers

### Q1: Why is logistic regression considered a classification algorithm despite having "regression" in its name?

**Answer:** Logistic regression predicts a **probability** (a continuous value between 0 and 1) using a linear model passed through the sigmoid function. But the final output is used to classify — threshold at 0.5 to get a class label. The name comes from its historical development (it "regresses" toward the log-odds), but the practical use is classification. The key distinction: the sigmoid squashes the output to (0,1) for probabilistic interpretation.

---

### Q2: Why is feature scaling essential for k-NN but not for decision trees?

**Answer:** k-NN uses **distances** between points. If features are on different scales, the larger-scale feature dominates the distance calculation, making other features irrelevant. Decision trees split on **thresholds** (e.g., "is age > 30?"), which are scale-invariant — a split at age > 30 works the same whether age is in years or months (the threshold adjusts accordingly). Tree splits are based on orderings, not magnitudes.

---

### Q3: What is the difference between bagging and boosting? Which reduces bias and which reduces variance?

**Answer:** **Bagging** (Random Forest) trains models in parallel on bootstrapped data samples and averages their predictions — this reduces **variance** (averaging cancels out individual model fluctuations). **Boosting** (Gradient Boosting) trains models sequentially, each focusing on previous errors — this reduces **bias** (each new model corrects the ensemble's mistakes). Bagging uses complex base models (deep trees); boosting uses simple base models (shallow trees / stumps).

---

### Q4: Naive Bayes assumes features are independent given the class. Why does it often work well despite this assumption being unrealistic?

**Answer:** The independence assumption simplifies computation and, surprisingly, doesn't necessarily hurt classification accuracy. Even when the probability estimates are wrong (due to violated independence), the **ranking** of class probabilities is often correct — the class with the highest (incorrect) posterior is still the right class. Dependencies between features tend to affect all classes similarly, preserving the relative ordering. This is why Naive Bayes is competitive for text classification despite words clearly being dependent.

---

### Q5: In SVM, what are support vectors, and why are they important?

**Answer:** Support vectors are the **data points closest to the decision boundary** — they define the margin. They are the only points that matter for the final model: moving other points (non-support vectors) doesn't change the boundary at all. This makes SVM memory-efficient (only support vectors need to be stored). The support vectors "support" the margin — the boundary is positioned to maximise distance from these critical points.

---

### Q6 (ML-specific): Derive the decision boundary for logistic regression. At what value of \(\theta^T x\) does the model predict class 1?

**Answer:** The hypothesis is \(h_\theta(x) = \frac{1}{1 + e^{-\theta^T x}}\). The model predicts class 1 when \(h_\theta(x) \geq 0.5\):

\[
\frac{1}{1 + e^{-\theta^T x}} \geq 0.5
\]
\[
1 + e^{-\theta^T x} \leq 2
\]
\[
e^{-\theta^T x} \leq 1
\]
\[
-\theta^T x \leq 0
\]
\[
\theta^T x \geq 0
\]

So the decision boundary is the hyperplane \(\theta^T x = 0\). Predict class 1 when \(\theta^T x \geq 0\), class 0 when \(\theta^T x < 0\).

---

### Q7 (ML-specific): For a dataset with 100,000 samples and 50 features, which of the six classification algorithms would be most and least suitable, and why?

**Answer:**
- **Most suitable:** **Logistic Regression** (fast, scales well to large datasets, works with 50 features) or **Gradient Boosting** (good performance on tabular data, handles 50 features well, but training is sequential and may be slower).
- **Least suitable:** **SVM** (training doesn't scale well to 100,000 samples — \(O(m^2)\) to \(O(m^3)\)) or **k-NN** (prediction requires computing distances to all 100,000 points — too slow for inference).

---

## 8. Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---|---|---|
| **Using logistic regression for multi-class without One-vs-All or softmax** | Standard logistic regression is binary only | Use One-vs-All (train K binary classifiers) or multinomial logistic regression (softmax regression) |
| **Using k-NN without feature scaling** | Distance calculation dominated by large-scale features | Always standardise or normalise features before k-NN |
| **Choosing \(k = 1\) for k-NN without validation** | k=1 is highly overfit — memorises noise | Use cross-validation to find optimal \(k\) (often 3–10) |
| **Using a deep decision tree without pruning** | Deep trees overfit — perfectly memorise training data | Use pre-pruning (max_depth, min_samples_leaf) or post-pruning, or use ensemble methods |
| **Applying Naive Bayes to data with correlated features without understanding the limitation** | Correlated features skew probability estimates (counted multiple times effectively) | Be aware of the limitation; Naive Bayes can still classify well but probability estimates will be off |
| **Using SVM on very large datasets without considering alternatives** | SVM training is \(O(m^2)\)–\(O(m^3)\) — infeasible for millions of samples | For large datasets, use logistic regression, Random Forest, or Gradient Boosting |
| **Tuning \(C\) and \(\gamma\) for SVM based on training accuracy** | Training accuracy is meaningless for SVM (can achieve 100% with hard margin on separable data) | Use cross-validation on the validation set; grid search over \(C\) and \(\gamma\) |
| **Ignoring class imbalance** | A model that always predicts the majority class achieves high accuracy but zero utility | Use stratified sampling, class weights, or appropriate metrics (F1, ROC-AUC, precision-recall) |

---

## 9. Exam Notes

**High-probability exam topics:**

1. **Logistic regression** — sigmoid function (graph, range, key values), hypothesis, decision boundary, log loss cost function. Be able to compute a probability given \(\theta\) and \(x\). Know why MSE is not used (non-convex).

2. **k-NN** — algorithm description (store, distance, k-nearest, majority vote), effect of \(k\), why scaling matters, computational complexity (training vs. prediction). Be able to trace a k-NN prediction by hand (compute distances, find neighbours, vote).

3. **Decision trees** — tree terminology (root, internal, leaf, depth), splitting criteria (Gini and entropy formulas, information gain), overfitting and pruning. Be able to compute Gini/entropy for a node and information gain for a split.

4. **Random Forest vs. Gradient Boosting** — bagging vs. boosting, variance vs. bias reduction, parallel vs. sequential, deep vs. shallow trees. Be able to explain why each works.

5. **Naive Bayes** — Bayes' theorem (write it from memory), the independence assumption, why it works despite the assumption, Laplace smoothing, common use cases (text classification).

6. **SVM** — maximum margin principle, support vectors, hard vs. soft margin, the \(C\) parameter, kernel trick (what it does and why), RBF kernel, the \(\gamma\) parameter. Be able to sketch a maximum margin separator with support vectors.

7. **Algorithm comparison** — expect a question asking you to compare two or more algorithms on specific dimensions: interpretability, scalability, handling of non-linearity, need for scaling, sensitivity to hyperparameters, suitability for a given scenario.

**Exam tip:** Be ready to **sketch** — a logistic regression sigmoid curve, a decision boundary (linear and non-linear), a decision tree, an SVM with margin and support vectors, a learning curve for bagging vs. boosting.

---

## 10. Revision Cheat Sheet

**Logistic Regression:**
- Sigmoid: \(g(z) = 1/(1+e^{-z})\), range (0,1).
- Hypothesis: \(h_\theta(x) = g(\theta^T x) = P(y=1|x)\).
- Decision boundary: \(\theta^T x = 0\) (linear); can be non-linear with polynomial features.
- Cost: Log loss / binary cross-entropy. Convex — GD finds global minimum.
- Multiclass: One-vs-All (train K binary classifiers).

**k-NN:**
- Lazy learner: store data, compute distances at prediction time.
- k = hyperparameter: small k = overfit, large k = underfit. Tune with CV.
- **Must scale features** (distance-based).
- Slow prediction on large datasets. No training phase.

**Decision Trees:**
- Split on feature thresholds to minimise Gini (\(1-\sum p_i^2\)) or entropy (\(-\sum p_i \log_2 p_i\)).
- Information gain = reduction in impurity.
- Prone to overfitting — prune or use ensembles.
- Interpretable, no scaling needed, handles mixed data types.

**Random Forest (Bagging):**
- Many trees on bootstrapped samples + random feature subsets.
- Reduces variance. Parallel training.
- Good default for tabular data. Feature importance available.

**Gradient Boosting (Boosting):**
- Sequential trees, each corrects previous errors.
- Reduces bias. Shallow trees (weak learners).
- Maximises predictive performance. XGBoost/LightGBM/CatBoost.

**Naive Bayes:**
- Bayes' theorem + independence assumption.
- \(P(y=c|x) \propto P(y=c) \cdot \prod P(x_j|y=c)\).
- Fast, works well for text. Naive assumption rarely holds but classification is often correct.

**SVM:**
- Maximum margin hyperplane. Support vectors define the margin.
- Soft margin with \(C\): large C = hard margin (overfit risk), small C = soft margin.
- Kernel trick for non-linear data (RBF kernel common).
- Scales poorly to large datasets. Needs scaling. Tune \(C\) and \(\gamma\) with CV.

---

## 11. Related Links

- [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]] — fundamentals
- [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]] — regression, evaluation metrics, bias-variance
- [[UTS/Machine Learning/Quiz Prep/Week 03 Quiz Prep]] — practice questions
- [[UTS/Machine Learning/Weekly Summaries/Week 03 Summary]] — weekly summary
- [[Week 03 Lecture Notes]] — source material
- [[UTS/Machine Learning/Assignments/ML Assignment 1]] — assignment (when released)
- [[UTS/Career/Interview Questions/ML Interview Questions]] — interview prep

---

## 12. Mathematical Intuition (ML Extension)

### Why the sigmoid function?

The sigmoid is the natural choice for mapping real numbers to probabilities because:
1. It's **monotonic** — larger \(z\) → larger probability (consistent with intuition: stronger signal → higher probability).
2. It's **monotonic differentiable** — smooth gradient for optimisation.
3. Its output is naturally in (0,1) — interpretable as a probability.
4. It has a nice derivative: \(\frac{d}{dz}g(z) = g(z)(1-g(z))\) — this makes gradient computation clean.

Other functions could map to (0,1) (e.g., tanh scaled and shifted, or a simple clamp), but the sigmoid has the right mathematical properties for gradient-based optimisation and probabilistic interpretation.

### Why log loss instead of MSE for classification?

MSE with a sigmoid hypothesis is **non-convex** — it has many local minima. Gradient descent can get stuck in a suboptimal solution. Log loss, by contrast, is **convex** for logistic regression — there's a single global minimum, and gradient descent is guaranteed to find it (with appropriate learning rate).

The shape of log loss also makes intuitive sense:
- If the true label is 1 and the model predicts 0.99 → cost is \(-\log(0.99) \approx 0.01\) — small penalty for a good prediction.
- If the true label is 1 and the model predicts 0.01 → cost is \(-\log(0.01) \approx 4.6\) — massive penalty for a confident wrong prediction.
- MSE would give \((0.01 - 1)^2 = 0.98\) for the second case — a large penalty, but not as dramatically discriminating.

Log loss heavily penalises **confident mistakes**, which is exactly what we want — it forces the model to be uncertain when it's likely wrong.

### Why does bagging reduce variance but not bias?

Each tree in a Random Forest is trained on a different bootstrap sample. Individual trees have high variance — train on a slightly different dataset and you get a very different tree. But the **average** of many such trees is more stable. The variance of the average of \(B\) independent estimates is \(\sigma^2/B\) — it decreases with more trees.

Bias, however, doesn't change much. Each tree has roughly the same bias (they're all decision trees with similar complexity). Averaging doesn't reduce bias — it just averages the same bias over and over. That's why Random Forest doesn't help with underfitting — if a single tree underfits, the forest will too.

### Why does boosting reduce bias?

Boosting starts with a weak learner (slightly better than random). The residual (error) still contains signal. The next learner focuses on that residual — it learns what the first learner missed. This process continues, progressively reducing the remaining error. Each step reduces bias because the ensemble is learning more of the true function.

The key insight: boosting converts many **high-bias, low-variance** models (shallow trees) into a single **low-bias** ensemble. The sequential correction of errors is what drives bias down. However, boosting can increase variance if taken too far — too many rounds can overfit the noise in the residuals.

### The geometry of SVM

Think of SVM geometrically:
1. You have two clouds of points (two classes) in space.
2. You want to place a flat surface (hyperplane) between them.
3. There are infinitely many surfaces that separate the clouds.
4. SVM chooses the one that is **as far as possible from the nearest points on either side**.
5. Those nearest points are the support vectors — they "push" against the hyperplane, defining its position.

The margin is like a "no-man's-land" around the boundary. Wider margin = bigger buffer = more robust classification. SVM is essentially saying: "I want to be as confident as possible about my boundary, so I'll put it as far from the data as I can."

---

## 13. Formula Derivations (ML Extension)

### Derivation: Gradient of Log Loss for Logistic Regression

Starting from the log loss:
\[
J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} \left[ y^{(i)} \log(h_\theta(x^{(i)})) + (1 - y^{(i)}) \log(1 - h_\theta(x^{(i)})) \right]
\]

**Step 1:** Note that \(\frac{d}{dz}g(z) = g(z)(1-g(z))\) where \(g(z) = \frac{1}{1+e^{-z}}\).

**Step 2:** Take the partial derivative with respect to \(\theta_j\):
\[
\frac{\partial J}{\partial \theta_j} = -\frac{1}{m} \sum_{i=1}^{m} \left[ y^{(i)} \frac{1}{h_\theta(x^{(i)})} \cdot \frac{\partial h_\theta}{\partial \theta_j} + (1-y^{(i)}) \frac{1}{1-h_\theta(x^{(i)})} \cdot \left(-\frac{\partial h_\theta}{\partial \theta_j}\right) \right]
\]

**Step 3:** Use the chain rule — \(\frac{\partial h_\theta}{\partial \theta_j} = h_\theta(x)(1-h_\theta(x)) \cdot x_j\):

After simplification (the \(h_\theta\) and \((1-h_\theta)\) terms cancel nicely):
\[
\frac{\partial J}{\partial \theta_j} = \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}
\]

**Key observation:** The gradient has the **same form** as linear regression! \((h_\theta(x) - y) \cdot x_j\). The only difference is that \(h_\theta(x)\) is now the sigmoid of \(\theta^T x\) rather than \(\theta^T x\) directly. This means gradient descent works identically — the update rule is the same, but the hypothesis is different.

### Derivation: Why Laplace Smoothing Works

In Naive Bayes, if a word never appears in spam training emails, \(P(\text{word} \mid \text{spam}) = 0\). This makes the entire product zero — the model says "this email cannot be spam" regardless of other evidence.

Laplace smoothing adds 1 to all counts:
\[
P(x_j \mid y=c) = \frac{\text{count}(x_j, y=c) + 1}{\text{count}(y=c) + |V|}
\]
where \(|V|\) is the vocabulary size.

This ensures no probability is ever zero. The "pseudo-count" of 1 represents a tiny bit of prior belief that every word could appear in every class. For large datasets, the effect is negligible (1 added to large counts). For small datasets or rare words, it prevents the zero-probability problem.

### Derivation: Maximum Margin = Minimum \(\|\theta\|^2\)

The margin (distance from hyperplane to nearest point) is \(\frac{1}{\|\theta\|}\). Maximising the margin is equivalent to minimising \(\|\theta\|\), or equivalently \(\frac{1}{2}\|\theta\|^2\) (the 1/2 is for convenience when differentiating).

For a point \(x^{(i)}\) with label \(y^{(i)} \in \{-1, +1\}\), the constraint that it's correctly classified with margin at least 1 is:
\[
y^{(i)}(\theta^T x^{(i)} + b) \geq 1
\]

The optimisation problem:
\[
\begin{aligned}
\min_{\theta, b} \quad & \frac{1}{2} \|\theta\|^2 \\
\text{s.t.} \quad & y^{(i)}(\theta^T x^{(i)} + b) \geq 1, \quad \forall i
\end{aligned}
\]

This is a convex quadratic programming problem — solvable but requires specialised optimisation (not simple gradient descent). The dual formulation (in terms of Lagrange multipliers \(\alpha_i\)) leads to the kernel trick.

---

## 14. Python Examples (ML Extension)

### Example 1: Logistic Regression — Full Workflow

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score, confusion_matrix

# Generate a binary classification dataset
X, y = make_classification(n_samples=500, n_features=2, n_informative=2,
                           n_redundant=0, n_clusters_per_class=1, random_state=42)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train logistic regression
lr = LogisticRegression(C=1.0)  # C = 1/lambda
lr.fit(X_train, y_train)

# Predictions
y_pred = lr.predict(X_test)
y_prob = lr.predict_proba(X_test)[:, 1]

print(f"Coefficients: {lr.coef_[0]}")
print(f"Intercept: {lr.intercept_[0]:.3f}")
print(f"Accuracy:  {accuracy_score(y_test, y_pred):.3f}")
print(f"Precision: {precision_score(y_test, y_prob >= 0.5):.3f}")
print(f"Recall:    {recall_score(y_test, y_prob >= 0.5):.3f}")
print(f"F1 Score:  {f1_score(y_test, y_prob >= 0.5):.3f}")
print(f"ROC-AUC:   {roc_auc_score(y_test, y_prob):.3f}")

# Plot decision boundary
x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
xx, yy = np.meshgrid(np.linspace(x_min, x_max, 200),
                     np.linspace(y_min, y_max, 200))
Z = lr.predict_proba(np.c_[xx.ravel(), yy.ravel()])[:, 1]
Z = Z.reshape(xx.shape)

plt.figure(figsize=(8, 6))
plt.contourf(xx, yy, Z, alpha=0.3, cmap='RdYlBu')
plt.scatter(X[:, 0], X[:, 1], c=y, edgecolors='k', s=50, cmap='RdYlBu')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('Logistic Regression Decision Boundary')
plt.colorbar(label='P(class=1)')
plt.show()
```

**Key insight:** Logistic regression produces a **linear decision boundary** — the contour where \(P = 0.5\) is a straight line. The probability changes smoothly across the space.

---

### Example 2: Comparing All Six Algorithms

```python
from sklearn.datasets import make_classification
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import pandas as pd

X, y = make_classification(n_samples=1000, n_features=20, n_informative=10,
                           n_redundant=5, random_state=42)

# Define models (with scaling where needed)
models = {
    'Logistic Regression': Pipeline([
        ('scaler', StandardScaler()),
        ('clf', LogisticRegression(max_iter=1000))
    ]),
    'k-NN (k=5)': Pipeline([
        ('scaler', StandardScaler()),
        ('clf', KNeighborsClassifier(n_neighbors=5))
    ]),
    'Decision Tree (depth=5)': DecisionTreeClassifier(max_depth=5, random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingClassifier(n_estimators=100, random_state=42),
    'Naive Bayes': GaussianNB(),
    'SVM (RBF)': Pipeline([
        ('scaler', StandardScaler()),
        ('clf', SVC(kernel='rbf', C=1.0, gamma='scale'))
    ])
}

# Evaluate all models with 5-fold CV
results = {}
for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
    results[name] = {
        'Mean Accuracy': scores.mean(),
        'Std Dev': scores.std()
    }

# Display results
df = pd.DataFrame(results).T
df = df.sort_values('Mean Accuracy', ascending=False)
print(df.round(3))
```

**Typical result:** Gradient Boosting and Random Forest usually lead on tabular data. Logistic Regression and SVM are competitive. k-NN and single decision trees typically underperform. Naive Bayes varies widely depending on how well the independence assumption holds.

---

### Example 3: Decision Tree — Interpretability in Action

```python
from sklearn.tree import DecisionTreeClassifier, plot_tree, export_text
from sklearn.datasets import load_iris

iris = load_iris()
X, y = iris.data, iris.target

# Shallow tree for interpretability
tree = DecisionTreeClassifier(max_depth=3, random_state=42)
tree.fit(X, y)

print(f"Training accuracy: {tree.score(X, y):.3f}")

# Text representation
tree_rules = export_text(tree, feature_names=iris.feature_names)
print(tree_rules)

# Visual representation
plt.figure(figsize=(16, 8))
plot_tree(tree, feature_names=iris.feature_names,
          class_names=iris.target_names, filled=True, rounded=True)
plt.show()

# Feature importance
for name, importance in zip(iris.feature_names, tree.feature_importances_):
    print(f"{name}: {importance:.3f}")
```

**Key insight:** Decision trees are the most interpretable ML model — you can literally read the decision rules. This makes them valuable in healthcare, finance, and any domain where explanations matter.

---

## 15. Scikit-learn Examples (ML Extension)

### Comprehensive Classification Comparison

```python
from sklearn.model_selection import GridSearchCV, StratifiedKFold
from sklearn.metrics import make_scorer, f1_score

# Set up cross-validation (stratified for imbalanced data)
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

# Grid search for SVM hyperparameters
param_grid = {
    'clf__C': [0.1, 1.0, 10.0, 100.0],
    'clf__gamma': ['scale', 0.01, 0.1, 1.0]
}

svm_pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', SVC(kernel='rbf'))
])

grid = GridSearchCV(
    svm_pipeline, param_grid, cv=cv,
    scoring='f1', n_jobs=-1
)
grid.fit(X_train, y_train)

print(f"Best parameters: {grid.best_params_}")
print(f"Best CV F1: {grid.best_score_:.3f}")

# Evaluate best model
best_svm = grid.best_estimator_
y_pred = best_svm.predict(X_test)
print(f"Test F1: {f1_score(y_test, y_pred):.3f}")
```

### Random Forest — Hyperparameter Tuning

```python
from sklearn.ensemble import RandomForestClassifier

rf_param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 20, None],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4],
    'max_features': ['sqrt', 'log2', 0.5]
}

grid_rf = GridSearchCV(
    RandomForestClassifier(random_state=42),
    rf_param_grid, cv=cv, scoring='f1',
    n_jobs=-1
)
grid_rf.fit(X_train, y_train)

print(f"Best RF parameters: {grid_rf.best_params_}")
print(f"Best RF CV F1: {grid_rf.best_score_:.3f}")
print(f"Feature importance:")
for name, imp in sorted(zip(X.columns, grid_rf.best_estimator_.feature_importances_),
                        key=lambda x: -x[1])[:5]:
    print(f"  {name}: {imp:.3f}")
```

### Naive Bayes — Text Classification with Laplace Smoothing

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Sample text data
texts = [
    "Win money now! Click here for free cash!",
    "Meeting rescheduled to 3pm tomorrow",
    "Congratulations! You've won a free prize",
    "Team meeting notes attached for review",
    "Claim your free gift card today",
    "Project deadline extended by one week"
]
labels = [1, 0, 1, 0, 1, 0]  # 1=spam, 0=ham

# Pipeline: text vectorisation + Naive Bayes
text_clf = Pipeline([
    ('vectorizer', CountVectorizer()),
    ('nb', MultinomialNB(alpha=1.0))  # alpha = Laplace smoothing parameter
])

text_clf.fit(texts, labels)

# Predict new emails
new_emails = [
    "Free money waiting for you, claim now",
    "Meeting agenda for tomorrow's discussion"
]
predictions = text_clf.predict(new_emails)
probabilities = text_clf.predict_proba(new_emails)

for email, pred, prob in zip(new_emails, predictions, probabilities):
    print(f"'{email}'")
    print(f"  Predicted: {'spam' if pred == 1 else 'ham'}")
    print(f"  P(spam) = {prob[1]:.3f}")
```

**Key insight:** Multinomial Naive Bayes with CountVectorizer is a classic, surprisingly effective text classification pipeline. Despite the naive independence assumption, it works well for spam detection, sentiment analysis, and document categorisation.

---

## 16. Sources

- [[Week 03 Lecture Notes]] — primary lecture material
- [[UTS/Machine Learning/Sources/Week 03 Reading List]] — recommended readings
- [[Week 02 Lecture Notes]] — prerequisite Week 02 material
- [[UTS/Career/Interview Questions/ML Interview Questions]] — related interview prep

---

*These notes follow the [[UTS/Templates/Lecture Note Template|Lecture Note Template]]. For the weekly summary, see [[UTS/Templates/Weekly Summary Template|Weekly Summary Template]].*
