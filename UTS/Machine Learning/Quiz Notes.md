---
type: course
course: Machine Learning
title: Quiz Notes - Machine Learning
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - quiz
  - machine-learning
---

# Quiz Notes - Machine Learning

Quick-reference notes for quizzes and short assessments. Covers key definitions, formulas, and common pitfalls.

---

## Week 01 - Fundamentals

### Definitions
- **Machine Learning:** Systems that learn from data rather than explicit programming.
- **Supervised Learning:** Learns from labelled data (input → output mapping).
- **Unsupervised Learning:** Finds patterns in unlabelled data (clustering, dimensionality reduction).
- **Reinforcement Learning:** Agent learns via rewards/penalties from environment interaction.

### Key Terms
- **Feature (X):** Input variable.
- **Label (y):** Output/target variable.
- **Training set:** Data for fitting the model.
- **Test set:** Held-out data for evaluation.
- **Overfitting:** Model too complex, fails to generalise.
- **Underfitting:** Model too simple, misses patterns.

### Problem Types
- Regression (continuous output)
- Binary classification (two classes)
- Multi-class classification (multiple classes)
- Clustering (grouping)

---

## Week 02 - Supervised Learning & Evaluation

### Linear Regression
- Simple: \(y = \beta_0 + \beta_1 x + \epsilon\)
- Multiple: \(y = \beta_0 + \beta_1 x_1 + \dots + \beta_n x_n + \epsilon\)
- **MSE Cost:** \(J(\theta) = \frac{1}{2m} \sum (h_\theta(x^{(i)}) - y^{(i)})^2\)
- **Gradient Descent update:** \(\theta_j := \theta_j - \alpha \frac{\partial J}{\partial \theta_j}\)
- **Learning rate (\(\alpha\)):** Too large → divergence; too small → slow convergence.

### Evaluation Metrics
| Metric | Formula | When to Use |
|---|---|---|
| MSE | \(\frac{1}{n}\sum (y_i - \hat{y}_i)^2\) | Penalise large errors |
| RMSE | \(\sqrt{MSE}\) | Interpretable units |
| MAE | \(\frac{1}{n}\sum \|y_i - \hat{y}_i\|\) | Robust to outliers |
| R² | \(1 - \frac{SS_{res}}{SS_{tot}}\) | Variance explained |
| Accuracy | \(\frac{TP+TN}{TP+TN+FP+FN}\) | Balanced classes |
| Precision | \(\frac{TP}{TP+FP}\) | Minimise false positives |
| Recall | \(\frac{TP}{TP+FN}\) | Minimise false negatives |
| F1 | \(2 \cdot \frac{P \cdot R}{P + R}\) | Balanced precision/recall |

### Bias-Variance
- **High bias (underfitting):** Add features, use complex model, reduce regularisation.
- **High variance (overfitting):** More data, simplify model, increase regularisation, use bagging.
- **Regularisation:** L1 (Lasso → feature selection), L2 (Ridge → shrinkage).

### Cross-Validation
- k-fold: split into k folds, train on k-1, test on 1, repeat k times.
- Common k: 5 or 10.

---

## Week 03 - Classification Algorithms

### Logistic Regression
- Sigmoid: \(h_\theta(x) = \frac{1}{1 + e^{-\theta^T x}}\)
- Cost: Log loss / binary cross-entropy.
- Decision boundary: \(\theta^T x = 0\) (predict 1 when \(\geq 0.5\)).

### k-NN
- Store all data, find k nearest neighbours, majority vote.
- k too small → overfitting; k too large → underfitting.
- **Must scale features** (distance-based).

### Decision Trees
- Split on feature thresholds to minimise Gini impurity or entropy.
- Prone to overfitting — prune or use ensembles.

### Ensemble Methods
- **Random Forest:** Bagging — many trees on bootstrapped samples, average predictions. Reduces variance.
- **Gradient Boosting:** Sequential trees, each corrects previous errors.

### Naive Bayes
- Bayes' theorem with feature independence assumption.
- Good for text classification.

### SVM
- Maximises margin between classes.
- Kernel trick for non-linear data (RBF kernel).
- C parameter: margin vs. misclassification trade-off.

---

## Common Quiz Pitfalls

1. **Confusing regression and classification** — check if output is continuous or categorical.
2. **Mixing up precision and recall** — precision = of predicted positives, recall = of actual positives.
3. **Forgetting feature scaling** — critical for k-NN, SVM, gradient descent.
4. **Overfitting vs. underfitting fixes** — opposite remedies.
5. **Not knowing when to use which metric** — imbalanced data → avoid accuracy, use F1 or AUC.

---

## Related

- [[UTS/Machine Learning/Week 01]]
- [[UTS/Machine Learning/Week 02]]
- [[UTS/Machine Learning/Week 03]]
- [[UTS/Machine Learning/Exam Revision]]
