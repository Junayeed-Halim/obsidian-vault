---
type: source
course: Machine Learning
title: Week 03 Lecture Notes
status: reference
created: 2026-08-25
tags:
  - UTS
  - ML
  - sources
  - machine-learning
  - lecture
---

# Week 03 Lecture Notes — Source Material

> **Course:** [[UTS/Machine Learning|Machine Learning]]
> **Based on:** Week 03 lecture and tutorial materials
> **Used in:** [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]]

---

## Lecture Overview

Week 03 covers classification algorithms in supervised learning. The lecture introduces six major classification methods: logistic regression, k-nearest neighbours, decision trees, ensemble methods (random forest and gradient boosting), Naive Bayes, and support vector machines.

### Key Points from Lecture

1. **Logistic Regression**
   - Despite its name, it is a classification algorithm.
   - Sigmoid function: \(g(z) = 1 / (1 + e^{-z})\) maps real numbers to (0, 1).
   - Hypothesis: \(h_\theta(x) = g(\theta^T x) = P(y = 1 \mid x; \theta)\).
   - Decision boundary: predict class 1 when \(\theta^T x \geq 0\) (equivalently, \(h_\theta(x) \geq 0.5\)).
   - Cost function: log loss (binary cross-entropy):
     \(J(\theta) = -\frac{1}{m} \sum [y^{(i)} \log(h_\theta(x^{(i)})) + (1 - y^{(i)}) \log(1 - h_\theta(x^{(i)}))]\)
   - Convex cost function — gradient descent finds the global minimum.
   - For multiclass problems: One-vs-All (One-vs-Rest) approach trains K binary classifiers.

2. **k-Nearest Neighbours (k-NN)**
   - Instance-based / lazy learning: no explicit training phase; stores all training data.
   - Classification: find k nearest neighbours (by Euclidean or other distance), predict majority class.
   - Key hyperparameters:
     - k: small k → overfitting (high variance); large k → underfitting (high bias).
     - Distance metric: Euclidean, Manhattan, Minkowski.
   - Feature scaling is critical because distances are dominated by large-scale features.
   - Computational complexity: training O(1), prediction O(m·n) for m training samples with n features.

3. **Decision Trees**
   - Tree-structured model: internal nodes test features, branches represent outcomes, leaf nodes give predictions.
   - Splitting criteria:
     - Gini impurity: \(G = 1 - \sum p_i^2\)
     - Entropy: \(H = -\sum p_i \log_2(p_i)\)
     - Information gain: reduction in impurity after a split.
   - Tree terminology: root node, internal nodes, leaf nodes, depth, parent/child.
   - Pruning addresses overfitting:
     - Pre-pruning: limit tree depth, minimum samples per leaf.
     - Post-pruning: grow full tree, then trim branches that don't improve validation performance.
   - Advantages: interpretable, handles mixed data types, no feature scaling needed, captures non-linear relationships.
   - Disadvantages: prone to overfitting, unstable (small data changes → different trees).

4. **Ensemble Methods**
   - Combine multiple models for better performance than any single model.

   **Bagging (Bootstrap Aggregating) — Random Forest:**
   - Train many decision trees on bootstrapped samples (sampling with replacement).
   - Feature randomness: at each split, consider only a random subset of features.
   - Aggregation: majority vote (classification) or averaging (regression).
   - Reduces variance; trees are decorrelated by feature randomness.
   - Out-of-bag evaluation uses samples left out of each bootstrap.

   **Boosting — Gradient Boosting:**
   - Train models sequentially; each new model corrects errors of the previous ensemble.
   - Start with a weak learner (e.g., shallow decision tree / stump).
   - Compute residuals (errors), train next model on residuals.
   - Add new model's predictions scaled by a learning rate.
   - Reduces bias; converts many weak learners into a strong ensemble.
   - Popular implementations: XGBoost, LightGBM, CatBoost.

   **Comparison:**
   - Bagging: parallel training, reduces variance, deep trees.
   - Boosting: sequential training, reduces bias, shallow trees.

5. **Naive Bayes**
   - Based on Bayes' theorem: \(P(y = c \mid x) = P(x \mid y = c) \cdot P(y = c) / P(x)\).
   - "Naive" assumption: features are conditionally independent given the class.
     \(P(x \mid y = c) = \prod_j P(x_j \mid y = c)\)
   - Despite unrealistic assumption, often works well for classification because the ranking of posteriors is often correct.
   - Training: estimate prior \(P(y = c)\) and likelihoods \(P(x_j \mid y = c)\) from data.
   - Prediction: choose class with highest posterior score.
   - Variants:
     - Gaussian Naive Bayes: continuous features assumed normally distributed.
     - Multinomial Naive Bayes: count features (e.g., word counts). Common for text classification.
     - Bernoulli Naive Bayes: binary features.
   - Laplace smoothing: add 1 to counts to avoid zero probabilities.
   - Advantages: extremely fast, works well with high-dimensional data, handles small datasets.
   - Disadvantages: independence assumption rarely holds; cannot model feature interactions.

6. **Support Vector Machines (SVM)**
   - Finds the hyperplane that maximises the margin between classes.
   - Margin: distance from hyperplane to nearest data points.
   - Support vectors: data points closest to the hyperplane; they define the margin.
   - Only support vectors matter for the final model — moving other points doesn't change the boundary.
   - Hard margin: all points correctly classified with margin ≥ 1. Only works for linearly separable data.
   - Soft margin: allows some misclassifications (controlled by C parameter).
     - Large C: hard margin, few misclassifications allowed, risk of overfitting.
     - Small C: soft margin, more misclassifications tolerated, better generalisation.
   - Kernel trick: maps data into higher-dimensional space where it becomes linearly separable, without explicitly computing the mapping.
     - Linear kernel: \(K(x, x') = x^T x'\).
     - Polynomial kernel: \(K(x, x') = (x^T x' + c)^d\).
     - RBF (Gaussian) kernel: \(K(x, x') = \exp(-\gamma \|x - x'\|^2)\). Most common.
   - Hyperparameters: C (margin vs. misclassification tradeoff), \(\gamma\) (influence of each support vector).
   - Advantages: effective in high dimensions, memory efficient (only support vectors), strong theoretical foundation.
   - Disadvantages: doesn't scale to large datasets (O(m²) to O(m³)), sensitive to hyperparameters, less interpretable, requires feature scaling.

7. **Algorithm Selection**
   - No single best algorithm — choice depends on problem characteristics.
   - Consider: data size, number of features, linearity, interpretability needs, training/prediction speed, risk of overfitting.
   - For tabular data: Random Forest or Gradient Boosting are often excellent defaults.
   - For text/high-dimensional data: Naive Bayes or linear SVM.
   - For interpretability: Logistic Regression or Decision Trees.
   - For maximum accuracy: Gradient Boosting (XGBoost, LightGBM).

### Tutorial Activities

- Implementing logistic regression from scratch (sigmoid, log loss, gradient descent).
- Applying k-NN with different k values and distance metrics.
- Building and visualising decision trees; computing Gini impurity and information gain.
- Training Random Forest and Gradient Boosting models; comparing performance.
- Applying Naive Bayes to text classification (spam detection).
- Training SVM with different kernels and hyperparameters.

### Discussion Points

- Why does the sigmoid function work well for classification?
- How does the choice of k affect k-NN performance?
- Why does bagging reduce variance but boosting reduces bias?
- Why does Naive Bayes work despite the naive independence assumption?
- What is the geometric interpretation of the SVM margin?

---

## References and Further Reading

- "An Introduction to Statistical Learning" by James, Witten, Hastie, and Tibshirani. (Chapter 4: Classification; Chapter 8: Tree-Based Methods; Chapter 9: Support Vector Machines)
- "The Elements of Statistical Learning" by Hastie, Tibshirani, and Friedman. (Chapter 4: Linear Methods for Classification; Chapter 9: Trees and Ensembles; Chapter 12: Support Vector Machines)
- scikit-learn documentation: Linear Models (Logistic Regression), k-NN, Decision Trees, Ensemble Methods, Naive Bayes, Support Vector Machines.

---

## Connection to Other Weeks

- [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]] — evaluation metrics, bias-variance, regularisation.
- [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]] — fundamental concepts.
- [[UTS/Machine Learning/Quiz Prep/Week 03 Quiz Prep]] — practice questions based on this material.

---

*This is a source/lecture note. For the structured study notes, see [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]].*
