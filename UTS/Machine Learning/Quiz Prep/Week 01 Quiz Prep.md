---
type: course
course: Machine Learning
title: Quiz Prep - Week 01
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - quiz
  - machine-learning
  - quiz-prep
---

# Quiz Prep - Week 01

> **Based on:** [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]]
> **Course:** [[UTS/Machine Learning|Machine Learning]]

---

## Key Definitions — Memorise These

| Term | Definition |
|---|---|
| **Machine Learning** | Systems that learn from data without explicit programming; performance improves with experience (E) at task (T), measured by P. |
| **Supervised Learning** | Learns from labelled data (X, y); goal is to map inputs to outputs. |
| **Unsupervised Learning** | Finds structure in unlabelled data; no correct answers provided. |
| **Reinforcement Learning** | Agent learns by interacting with environment; rewarded/punished for actions. |
| **Feature (X)** | Input variable; what the model uses to make predictions. |
| **Label (y)** | Output/target variable; what the model predicts. |
| **Training Set** | Data used to fit the model parameters. |
| **Test Set** | Held-out data for final evaluation; simulates unseen data. |
| **Overfitting** | Model too complex; learns noise; great on train, poor on test. High variance. |
| **Underfitting** | Model too simple; misses pattern; poor on both train and test. High bias. |
| **Bias-Variance Tradeoff** | Tension between underfitting (high bias) and overfitting (high variance); optimal model balances both. |
| **Regression** | Predicting a continuous numeric value. |
| **Binary Classification** | Predicting one of two classes. |
| **Multi-class Classification** | Predicting one of three or more classes. |
| **Clustering** | Grouping similar data points without predefined labels. |

---

## Common Quiz Question Types

### Type 1: Identify the Paradigm

**Question format:** "A system learns to ___ by ___. Which ML paradigm is this?"

**Approach:**
- Labelled data + mapping → **Supervised**
- Unlabelled data + structure → **Unsupervised**
- Agent + environment + rewards → **Reinforcement**

### Type 2: Features and Labels

**Question format:** "You want to predict ___ from ___. Identify X and y."

**Approach:**
- X = the information you have (inputs)
- y = the thing you want to predict (output)

### Type 3: Overfitting vs. Underfitting Diagnosis

**Question format:** "Training accuracy = 95%, Test accuracy = 60%. What's the problem?"

**Approach:**
- Large gap → **Overfitting** (high variance)
- Both low → **Underfitting** (high bias)
- Both high → Good fit

### Type 4: Bias-Variance

**Question format:** "A model has high bias. What does this mean and how do you fix it?"

**Approach:**
- High bias = underfitting = too simple
- Fix: add features, use complex model, reduce regularisation

---

## Practice Questions

### Q1
A company wants to predict whether a customer will churn (leave) based on their usage patterns, account age, and customer service interactions. Is this supervised or unsupervised learning? Identify X and y.

<details>
<summary>Answer</summary>

**Supervised learning.** Historical data includes whether customers actually churned (labels).
- **X:** usage patterns, account age, customer service interactions
- **y:** churned (yes/no) — binary classification
</details>

---

### Q2
A model has training accuracy of 99% and test accuracy of 55%. What is the most likely issue? Name two possible fixes.

<details>
<summary>Answer</summary>

**Overfitting (high variance).** The model has memorised the training data.
Fixes:
1. Get more training data
2. Use a simpler model (reduce complexity)
3. Apply regularisation
4. Use ensemble methods like bagging
</details>

---

### Q3
Explain the bias-variance tradeoff in your own words. Why is it called a "tradeoff"?

<details>
<summary>Answer</summary>

The bias-variance tradeoff is the tension between a model being too simple (high bias, misses patterns) and too complex (high variance, fits noise). It's called a tradeoff because reducing bias often increases variance, and vice versa — you can't minimise both simultaneously. The goal is to find the balance that minimises total error on unseen data.
</details>

---

### Q4
You have a dataset of student records. You want to group students into clusters based on their study habits and grades, without any pre-existing labels. Which paradigm and algorithm type?

<details>
<summary>Answer</summary>

**Unsupervised learning — clustering.** There are no labels; the goal is discovering structure. Algorithms: k-means, hierarchical clustering, DBSCAN.
</details>

---

### Q5
Why is it wrong to evaluate a model on the same data it was trained on?

<details>
<summary>Answer</summary>

Training and testing on the same data gives no evidence of **generalisation** — the model might have simply memorised the training examples. The test set simulates truly unseen data and tells you whether the model will perform well in practice. Without a held-out test set, you can't trust the reported performance.
</details>

---

### Q6 (Bonus — ML-specific)
Name three real-world applications of machine learning and state which paradigm each uses.

<details>
<summary>Answer</summary>

1. **Spam filter** — Supervised (binary classification, labelled emails)
2. **Customer segmentation** — Unsupervised (clustering, no predefined groups)
3. **Chess AI / AlphaGo** — Reinforcement learning (agent learns by playing and receiving win/loss rewards)
</details>

---

## Quick Reference — Problem Types

| Scenario | Paradigm | Problem Type |
|---|---|---|
| Predict house price from features | Supervised | Regression |
| Spam/not spam | Supervised | Binary classification |
| Identify digit (0-9) from image | Supervised | Multi-class classification |
| Group customers by behaviour | Unsupervised | Clustering |
| Agent learns to play game | Reinforcement | Policy learning |
| Discover topics in documents | Unsupervised | Topic modelling / dimensionality reduction |

---

## Exam Tips

- **Definitions are high-yield.** Know Mitchell's definition, the three paradigms, overfitting/underfitting, bias-variance.
- **"Explain to a non-technical person"** — practice plain-language explanations.
- **Scenario questions** — read carefully, identify whether data is labelled, whether output is continuous or categorical.
- **Don't confuse regression (continuous output) with classification (categorical output).**
- **The bias-variance tradeoff** is a guaranteed topic — be ready to explain it clearly.

---

## Related

- [[UTS/Machine Learning/Notes/Week 01 - Introduction to Machine Learning]] — full notes
- [[UTS/Machine Learning/Quiz Prep/Week 02 Quiz Prep]] — next week
- [[UTS/Machine Learning/Weekly Summaries/Week 01 Summary]] — weekly summary
