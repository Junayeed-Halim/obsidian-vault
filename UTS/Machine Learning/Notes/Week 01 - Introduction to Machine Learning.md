---
type: course
course: Machine Learning
title: Week 01 - Introduction to Machine Learning
status: evergreen
created: 2026-08-25
tags:
  - UTS
  - ML
  - week
  - machine-learning
  - lecture-notes
---

# Week 01 - Introduction to Machine Learning

> **Source:** [[Week 01 Lecture Notes]]
> **Course:** [[UTS/Machine Learning|Machine Learning]]
> **Next:** [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]]

---

## 1. Summary

Machine learning (ML) is a subfield of artificial intelligence where computers learn patterns from data without being explicitly programmed with rules. Instead of writing `if-then` statements for every scenario, we feed data to algorithms that automatically build models capable of making predictions or decisions.

ML is everywhere: spam filters, recommendation systems (Netflix, YouTube), facial recognition, fraud detection, medical diagnosis, self-driving cars, and voice assistants. This week establishes the conceptual foundation: what ML is, the three main paradigms, the language of features and labels, and the central challenge of generalisation (overfitting vs. underfitting).

**What you should walk away with:**
- The ability to distinguish supervised, unsupervised, and reinforcement learning.
- Understanding that ML is about **generalisation** — performing well on unseen data, not just memorising training data.
- The vocabulary: features, labels, training set, test set, overfitting, underfitting, bias-variance tradeoff.

---

## 2. Learning Objectives

By the end of this week you should be able to:

1. **Define machine learning** and explain how it differs from traditional rule-based programming.
2. **Classify problems** into supervised, unsupervised, or reinforcement learning paradigms.
3. **Identify features (X) and labels (y)** in a given dataset and explain their roles.
4. **Explain the train/test split** and why we need held-out data.
5. **Describe overfitting and underfitting** in plain language and identify which is which from a learning curve.
6. **Articulate the bias-variance tradeoff** at a conceptual level.
7. **List common ML problem types** (regression, binary classification, multi-class classification, clustering) with examples.

---

## 3. Key Concepts

### 3.1 What is Machine Learning?

Tom Mitchell's classic definition (1997):

> A computer program is said to **learn** from experience **E** with respect to some class of tasks **T** and performance measure **P**, if its performance at tasks in **T**, as measured by **P**, improves with experience **E**.

In plain English: the program gets better at a task as it sees more data.

**Traditional programming vs. ML:**

| Traditional Programming | Machine Learning |
|---|---|
| Input: data + rules | Input: data + desired outputs |
| Output: answers | Output: rules (the model) |
| Programmer writes logic | Algorithm infers logic from data |

### 3.2 The Three Paradigms of ML

#### Supervised Learning
The model learns from **labelled data** — each training example comes with the correct answer (the label).

- **Goal:** learn a function \(f: X 
ightarrow y\) that maps inputs to outputs.
- **Training:** show the model \((X, y)\) pairs; it adjusts its internal parameters to minimise the difference between its predictions and the true labels.
- **Examples:**
  - Predicting house prices from square footage, location, number of bedrooms → **regression**.
  - Classifying emails as spam or not spam → **binary classification**.
  - Identifying whether an image contains a cat, dog, or bird → **multi-class classification**.

#### Unsupervised Learning
The model receives **unlabelled data** and must find structure on its own.

- **Goal:** discover hidden patterns, groupings, or representations.
- **Examples:**
  - Grouping customers into segments based on purchasing behaviour → **clustering** (k-means).
  - Reducing 100 features to 2 principal components for visualisation → **dimensionality reduction** (PCA).
  - Detecting unusual transactions → **anomaly detection**.

#### Reinforcement Learning
An **agent** learns by interacting with an **environment**, receiving **rewards** or **punishments** for its actions.

- **Goal:** learn a **policy** (a mapping from states to actions) that maximises cumulative reward over time.
- **Examples:** game-playing AI (AlphaGo, Chess engines), robot navigation, resource management in data centres.

### 3.3 Features, Labels, and Datasets

**Features (X)** are the input variables — the information the model uses to make predictions. Also called:
- Predictors
- Independent variables
- Input attributes
- Covariates

**Labels (y)** are the output or target — what we want to predict. Also called:
- Response variable
- Dependent variable
- Target
- Ground truth

**Dataset split:**

| Split | Purpose | Typical Size |
|---|---|---|
| **Training set** | Fit the model parameters | 60–80% |
| **Validation set** | Tune hyperparameters, select model | 10–20% |
| **Test set** | Final unbiased evaluation | 10–20% |

> **Key insight:** The test set must never be used during training or model selection. If you peek at the test set, your evaluation is optimistic and meaningless. The test set simulates truly unseen data.

### 3.4 Overfitting and Underfitting

These are the two fundamental failure modes of ML models.

**Overfitting:**
- The model learns the training data **too well**, including noise and random fluctuations.
- It performs excellently on training data but poorly on new, unseen data.
- **Signs:** High training accuracy, low test accuracy. The gap between train and test performance is large.
- **Also called:** high variance, "memorisation."
- **Visual:** The model draws a wiggly curve that passes through every training point.

**Underfitting:**
- The model is **too simple** to capture the underlying pattern in the data.
- It performs poorly on both training and test data.
- **Signs:** Low training accuracy, equally low test accuracy.
- **Also called:** high bias, "failure to learn."
- **Visual:** The model draws a straight line through curved data.

**The goal is the sweet spot** — enough complexity to capture the true pattern, but not so much that noise is captured. This is the **bias-variance tradeoff**.

### 3.5 The Bias-Variance Tradeoff

Think of bias and variance as two types of error:

| | **High Bias (Underfitting)** | **High Variance (Overfitting)** |
|---|---|---|
| **What it means** | Model assumptions are too strong/simplistic | Model is too sensitive to training data fluctuations |
| **Training error** | High | Low |
| **Test error** | High | High |
| **Learning curve** | Both curves plateau at poor performance | Large gap between train (good) and test (bad) |
| **Fixes** | Add features, use more complex model, reduce regularisation | More training data, simpler model, increase regularisation, use ensembles (bagging) |

**Why "tradeoff"?** Reducing bias often increases variance, and vice versa. The art of ML is finding the balance point where total error (bias² + variance + irreducible error) is minimised.

### 3.6 Types of ML Problems

| Problem Type | Output | Example |
|---|---|---|
| **Regression** | Continuous numeric value | Predict house price ($), temperature (°C), stock price |
| **Binary Classification** | One of two classes (0 or 1) | Spam vs. not spam, fraud vs. legitimate, sick vs. healthy |
| **Multi-class Classification** | One of three+ classes | Image classification (cat/dog/bird), digit recognition (0-9) |
| **Clustering** | Group assignments (no predefined labels) | Customer segmentation, document grouping, anomaly detection |
| **Dimensionality Reduction** | Lower-dimensional representation | PCA for visualisation, compression, noise reduction |

---

## 4. Important Formulas

This week is concept-heavy with few formal formulas. The key mathematical ideas:

### The Learning Objective (conceptual)

\[
	ext{Minimise } 	ext{Error}(f(X), y) 	ext{ over the training set}
\]

Where \(f\) is the model, \(X\) is the input, and \(y\) is the true label. The exact form of "Error" depends on the problem type — we meet specific loss functions in Weeks 02 and 03.

### The Generalisation Goal

\[
	ext{Training Error} pprox 	ext{Test Error} \quad 	ext{(and both are low)}
\]

If training error is much lower than test error → **overfitting**.
If both are high → **underfitting**.

### The Bias-Variance Decomposition (conceptual preview)

\[
\mathbb{E}[	ext{Test Error}] = 	ext{Bias}^2 + 	ext{Variance} + 	ext{Irreducible Error}
\]

- **Bias²:** Error from erroneous assumptions (underfitting).
- **Variance:** Error from sensitivity to training data fluctuations (overfitting).
- **Irreducible Error:** Noise inherent in the data that no model can eliminate.

> Full mathematical treatment in [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]].

---

## 5. Worked Examples

### Example 1: Identifying the Paradigm

**Problem:** A hospital wants to group patients into risk categories based on their medical history, without any pre-existing labels. Which ML paradigm applies?

**Solution:** **Unsupervised learning — clustering.** There are no labels (no "high risk" / "low risk" tags). The goal is to discover natural groupings in the data. Algorithms like k-means or hierarchical clustering would be appropriate.

---

### Example 2: Features and Labels

**Problem:** You want to predict whether a student will pass a course based on their assignment scores, attendance, and prior GPA.

**Solution:**
- **Features (X):** assignment scores, attendance percentage, prior GPA.
- **Label (y):** pass/fail (binary classification).
- This is a **supervised learning** problem because we have labelled historical data (students who passed and failed in past cohorts).

---

### Example 3: Diagnosing Overfitting vs. Underfitting

**Scenario:** You train a model and observe:
- Training accuracy: 98%
- Test accuracy: 62%

**Diagnosis:** **Overfitting.** The model performs very well on training data but substantially worse on unseen data. The 36% gap is a classic overfitting signature.

**Recommended fixes:**
1. Get more training data.
2. Simplify the model (reduce complexity, fewer parameters).
3. Apply regularisation (L1/L2).
4. Use ensemble methods like random forest (bagging reduces variance).

---

### Example 4: Choosing the Right Problem Type

**Scenario:** A real estate company has data on 10,000 houses sold in Sydney with features: suburb, bedrooms, bathrooms, square metres, year built. They want to predict the sale price.

**Solution:** This is a **regression** problem — the output (price) is a continuous numeric value. A linear regression model would be a reasonable starting point.

---

### Example 5: Train/Test Split Intuition

**Scenario:** You have 1,000 patient records. You train a disease-prediction model on all 1,000 and get 95% accuracy. Your boss is impressed. Are they right to be?

**Solution:** No. Training on all data and evaluating on the same data tells you nothing about whether the model will work on **new patients**. You have no evidence of generalisation. You should have split the data (e.g., 800 train / 200 test) and reported the **test accuracy**. A model that memorises all 1,000 records could score 100% on training but fail on new data.

---

## 6. Practical Applications

### Real-World ML Systems

| Application | Paradigm | How it Works |
|---|---|---|
| **Spam filters** (Gmail) | Supervised (binary classification) | Trained on millions of labelled emails; features include words, sender, headers |
| **Netflix recommendations** | Supervised + unsupervised | Predicts your rating for unseen movies based on your history and similar users |
| **Credit card fraud detection** | Supervised (imbalanced classification) | Flags transactions that look unusual compared to your typical pattern |
| **Facial recognition** (FaceID) | Supervised (multi-class) | Trained on face images; maps face to identity |
| **Stock price prediction** | Supervised (regression) | Uses historical prices, volumes, news sentiment to forecast future prices |
| **Customer segmentation** | Unsupervised (clustering) | Groups customers by behaviour for targeted marketing |
| **AlphaGo / Chess AI** | Reinforcement learning | Learns by playing millions of games; rewarded for winning |
| **Siriverse / Alexa** | Multiple paradigms | Speech recognition (supervised), intent classification (supervised), dialogue management (RL) |

### When NOT to Use ML

ML is not a magic solution. Avoid ML when:
- The rules are simple and well-understood (use a rule-based system).
- You have very little data (ML needs data to learn patterns).
- Interpretability is critical and the model is a black box (consider decision trees or linear models instead).
- The cost of a wrong prediction is catastrophic and unavoidable (e.g., some medical or legal decisions may require human oversight).
- You can solve the problem with a simple SQL query or spreadsheet formula.

---

## 7. Quiz Questions with Answers

### Q1: What is the key difference between supervised and unsupervised learning?

**Answer:** In supervised learning, the training data includes **labels** (the correct answers), and the model learns to map inputs to outputs. In unsupervised learning, the data has **no labels**, and the model must find structure or patterns on its own (e.g., clustering, dimensionality reduction).

---

### Q2: A model has 99% training accuracy but 55% test accuracy. What is the most likely problem?

**Answer:** **Overfitting (high variance).** The model has memorised the training data, including noise, and fails to generalise to unseen data. The large gap between train and test performance is the telltale sign.

---

### Q3: What are the three main roles in a data/ML pipeline?

**Answer:**
1. **Data generation** — individuals or systems that produce raw data.
2. **Data curation** — collecting, storing, cleaning, and anonymising data.
3. **Data usage** — applying models or analysis to the curated data to extract insights or make predictions.

(Adapted from the Big Privacy framework: data generator, data curator, data user, and data attacker.)

---

### Q4: Explain the bias-variance tradeoff in one sentence.

**Answer:** The bias-variance tradeoff is the tension between a model that is too simple to capture the data's pattern (high bias / underfitting) and one that is too complex and captures noise (high variance / overfitting); the best model balances both to minimise total error on unseen data.

---

### Q5: A company has 50,000 customer records with purchase history. They want to discover natural groups of customers for targeted marketing. Name the ML paradigm and a suitable algorithm.

**Answer:** **Unsupervised learning — clustering.** Suitable algorithms include k-means, hierarchical clustering, or DBSCAN. There are no predefined labels; the goal is discovery of structure.

---

### Q6 (Bonus — ML-specific): In ML, what do X and y typically represent? Give a concrete example.

**Answer:** **X (features)** are the input variables the model uses to make predictions. **y (label)** is the output or target the model predicts. Example: predicting house prices — X = [square metres, number of bedrooms, suburb], y = sale price in dollars.

---

## 8. Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---|---|---|
| **Training and testing on the same data** | Gives falsely optimistic performance; no evidence of generalisation | Always split data into train/test (or train/validation/test) |
| **Confusing correlation with causation** | ML finds patterns, not causal relationships | Be careful drawing causal conclusions; use domain knowledge |
| **Using accuracy for imbalanced data** | If 99% of transactions are legitimate, a model that always predicts "legitimate" gets 99% accuracy but detects zero fraud | Use precision, recall, F1, ROC-AUC for imbalanced problems |
| **Ignoring feature scaling** | Distance-based algorithms (k-NN, SVM) and gradient descent are sensitive to feature magnitudes | Scale features (standardisation or normalisation) before training |
| **Overfitting on a small dataset** | Complex models can memorise small datasets easily | Start simple, use cross-validation, apply regularisation |
| **Treating the model as a black box without understanding it** | You won't know when it fails or why | Understand the assumptions, limitations, and interpretation of your chosen model |
| **Data leakage** | Including information in features that wouldn't be available at prediction time (e.g., using "outcome" as a feature) | Carefully audit features for leakage |

---

## 9. Exam Notes

**High-probability exam topics from Week 01:**

1. **Define machine learning** (Mitchell's definition is a favourite).
2. **Distinguish the three paradigms** — supervised, unsupervised, reinforcement — with examples. Expect a question giving you a scenario and asking which paradigm applies.
3. **Features vs. labels** — identify X and y in a described problem.
4. **Train/test split rationale** — why do we need held-out data? What goes wrong if you don't split?
5. **Overfitting vs. underfitting** — define both, give symptoms (learning curves), and list remedies. This is a guaranteed topic.
6. **Bias-variance tradeoff** — conceptual understanding. You may be asked to sketch or interpret learning curves.
7. **Problem type classification** — given a scenario, state whether it's regression, binary classification, multi-class classification, or clustering.

**Exam tip:** Be ready to explain concepts in plain language, not just recite formulas. "Explain overfitting to a non-technical stakeholder" is a realistic exam prompt.

**Connection to later weeks:** The bias-variance tradeoff recurs throughout the course. Overfitting remedies (regularisation, ensembles, more data) are covered in detail in Weeks 02 and 03.

---

## 10. Revision Cheat Sheet

**ML definition:** Learning from data without explicit programming. Gets better with experience (E) at task (T), measured by performance (P).

**Three paradigms:**
- **Supervised:** Labelled data (X, y) → learn mapping. Regression & classification.
- **Unsupervised:** Unlabelled data → find structure. Clustering, dimensionality reduction.
- **Reinforcement:** Agent + environment + rewards → learn policy.

**Data splits:** Train (fit) → Validation (tune) → Test (final evaluation). Test data must never be used during training.

**Overfitting:** High train perf, low test perf. High variance. Fix: more data, simpler model, regularisation, bagging.
**Underfitting:** Low train & test perf. High bias. Fix: more features, complex model, less regularisation.

**Bias² + Variance + Irreducible Error = Total Test Error.** The tradeoff: reducing one often increases the other.

**Problem types:** Regression (continuous output), Binary classification (2 classes), Multi-class (3+ classes), Clustering (no labels).

**ML is not always the answer:** Simple rules, tiny data, need for interpretability, catastrophic-error cost → consider alternatives.

---

## 11. Related Links

- [[UTS/Machine Learning/Notes/Week 02 - Supervised Learning & Model Evaluation]] — next week: linear regression, gradient descent, evaluation metrics
- [[UTS/Machine Learning/Notes/Week 03 - Classification Algorithms]] — classification algorithms (logistic regression, k-NN, decision trees, SVM)
- [[UTS/Machine Learning/Quiz Prep/Week 01 Quiz Prep]] — practice questions
- [[UTS/Machine Learning/Weekly Summaries/Week 01 Summary]] — weekly summary
- [[Week 01 Lecture Notes]] — source material
- [[UTS/Machine Learning/Assignments/ML Assignment 1]] — first assignment (when released)
- [[UTS/Career/Interviews]] — ML interview prep
- [[UTS/Career/AWS|AWS]] — cloud ML (SageMaker)
- [[UTS/Career/Azure|Azure]] — cloud ML (Azure ML)

---

## 12. Mathematical Intuition (ML Extension)

### Why does ML work at all?

The core intuition: **data contains signal and noise.** The signal is the true underlying relationship we want to learn; the noise is random variation that obscures it.

ML algorithms work by:
1. **Positing a model family** — a set of possible functions (e.g., linear functions, decision trees).
2. **Defining a loss function** — a way to measure how wrong predictions are.
3. **Optimising** — searching the model family for the function that minimises loss on training data.
4. **Hoping for generalisation** — that the function that works on training data also works on test data.

The **No Free Lunch theorem** (Wolpert, 1996) states that no single ML algorithm works best for all problems. Every algorithm makes assumptions (bias), and those assumptions are what make it work well on some problems and poorly on others. This is why we have many algorithms and why choosing the right one for the problem matters.

### The intuition behind overfitting

Imagine fitting a curve through data points. With enough parameters, you can draw a curve that passes through every single point perfectly — but the curve will wiggle wildly between points and be useless for prediction. That's overfitting. The model has "learned" the noise, not the signal.

### The intuition behind the bias-variance tradeoff

- **Bias** is like using a ruler to measure a curved surface — your tool is too rigid to capture the shape. You consistently get the wrong answer.
- **Variance** is like using a floppy measuring tape — your measurements bounce around depending on exactly how you place it. Inconsistent results.
- The best tool is flexible enough to capture the shape but stable enough to give consistent results.

---

## 13. Formula Derivations (ML Extension)

### Derivation: Why the 1/2 in MSE?

The Mean Squared Error cost function is:

\[
J(	heta) = rac{1}{2m} \sum_{i=1}^{m} (h_	heta(x^{(i)}) - y^{(i)})^2
\]

The \(rac{1}{2}\) is purely for **convenience**. When we take the derivative with respect to \(	heta\):

\[
rac{\partial}{\partial 	heta} \left[ rac{1}{2}(h_	heta(x) - y)^2 
ight] = (h_	heta(x) - y) \cdot rac{\partial h_	heta}{\partial 	heta}
\]

The 2 from the exponent cancels with the 1/2, giving a clean expression. Without the 1/2, we'd carry a factor of 2 everywhere — functionally identical, but messier. The 1/m averages over the dataset so the cost doesn't grow with dataset size.

### Derivation: Gradient of MSE for Linear Regression

For linear regression, \(h_	heta(x) = 	heta^T x = \sum_{j=0}^{n} 	heta_j x_j\).

\[
egin{aligned}
rac{\partial J}{\partial 	heta_j} &= rac{\partial}{\partial 	heta_j} rac{1}{2m} \sum_{i=1}^{m} (	heta^T x^{(i)} - y^{(i)})^2 \
&= rac{1}{m} \sum_{i=1}^{m} (	heta^T x^{(i)} - y^{(i)}) \cdot x_j^{(i)}
\end{aligned}
\]

This gives the gradient descent update rule:

\[
	heta_j := 	heta_j - lpha rac{1}{m} \sum_{i=1}^{m} (h_	heta(x^{(i)}) - y^{(i)}) x_j^{(i)}
\]

Interpretation: for each parameter \(	heta_j\), move it in the direction that reduces error, proportional to:
- The prediction error \((h_	heta(x^{(i)}) - y^{(i)})\)
- The feature value \(x_j^{(i)}\) — if the feature is large and the error is large, adjust \(	heta_j\) more
- The learning rate \(lpha\) — step size

This is the foundation for understanding all gradient-based ML optimisation.

---

## 14. Python Examples (ML Extension)

### Example 1: Setting Up a Simple ML Pipeline

```python
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Sample data: house size (sqm) -> price ($000s)
X = np.array([50, 60, 70, 80, 90, 100, 110, 120, 130, 140]).reshape(-1, 1)
y = np.array([250, 280, 310, 350, 380, 420, 450, 490, 520, 560])

# Train/test split (80/20)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"MSE:  {mean_squared_error(y_test, y_pred):.2f}")
print(f"R²:   {r2_score(y_test, y_pred):.3f}")
print(f" coef: {model.coef_[0]:.2f}  intercept: {model.intercept_:.2f}")
```

**Key takeaway:** A full ML pipeline in scikit-learn takes ~10 lines: split data, create model, fit, predict, evaluate.

---

### Example 2: Diagnosing Overfitting with Learning Curves

```python
import matplotlib.pyplot as plt
from sklearn.model_selection import learning_curve
from sklearn.tree import DecisionTreeRegressor

# Generate synthetic data with noise
np.random.seed(42)
X = np.linspace(0, 10, 200).reshape(-1, 1)
y = np.sin(X).ravel() + np.random.normal(0, 0.1, 200)

# Learning curve: compare train vs validation score as training size grows
train_sizes, train_scores, val_scores = learning_curve(
    DecisionTreeRegressor(max_depth=10),  # prone to overfitting
    X, y, cv=5, scoring='neg_mean_squared_error',
    train_sizes=np.linspace(0.1, 1.0, 10)
)

plt.figure(figsize=(8, 4))
plt.plot(train_sizes, -train_scores.mean(axis=1), 'o-', label='Training MSE')
plt.plot(train_sizes, -val_scores.mean(axis=1), 's-', label='Validation MSE')
plt.xlabel('Training Set Size')
plt.ylabel('MSE')
plt.legend()
plt.title('Learning Curve — Overfitting (high variance)')
plt.show()
```

**What you'll see:** Training MSE starts very low and stays low. Validation MSE starts high and decreases slowly. The **gap** between the curves is the overfitting signature. A well-fitted model has both curves close together at a low error.

---

### Example 3: Underfitting vs. Overfitting with Model Complexity

```python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline

# Create polynomial regression models of varying degree
degrees = [1, 3, 15]  # 1=underfitting, 3=good fit, 15=overfitting

plt.figure(figsize=(12, 4))
for i, deg in enumerate(degrees, 1):
    model = Pipeline([
        ('poly', PolynomialFeatures(degree=deg)),
        ('linear', LinearRegression())
    ])
    model.fit(X, y)
    
    X_plot = np.linspace(0, 10, 500).reshape(-1, 1)
    y_plot = model.predict(X_plot)
    
    plt.subplot(1, 3, i)
    plt.scatter(X, y, alpha=0.5, s=10, label='Data')
    plt.plot(X_plot, y_plot, 'r-', label=f'Degree {deg}')
    plt.title(f'Polynomial Degree = {deg}')
    plt.legend()

plt.tight_layout()
plt.show()
```

**Visual takeaway:**
- Degree 1: straight line, misses the curve → **underfitting**.
- Degree 3: captures the sine wave nicely → **good fit**.
- Degree 15: wiggles through every point → **overfitting**.

---

## 15. Scikit-learn Examples (ML Extension)

### Linear Regression (Full Workflow)

```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score
from sklearn.metrics import mean_squared_error, r2_score

# 5-fold cross-validation for robust evaluation
model = LinearRegression()
cv_scores = cross_val_score(model, X, y, cv=5, scoring='neg_mean_squared_error')

print(f"CV MSE:  {-cv_scores.mean():.2f} (+/- {cv_scores.std():.2f})")

# Fit on full data for interpretation
model.fit(X, y)
print(f"Coefficients: {dict(zip(['sqm'], model.coef_))}")
print(f"Intercept: {model.intercept_:.2f}")
```

### k-Nearest Neighbours (Classification)

```python
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.datasets import make_classification

# Generate a binary classification dataset
X, y = make_classification(n_samples=500, n_features=4, n_informative=3,
                           n_redundant=0, random_state=42)

# k-NN requires feature scaling
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('knn', KNeighborsClassifier(n_neighbors=5))
])

# Tune k using cross-validation
for k in [1, 3, 5, 7, 9, 11]:
    pipeline.set_params(knn__n_neighbors=k)
    scores = cross_val_score(pipeline, X, y, cv=5, scoring='accuracy')
    print(f"k={k}: accuracy = {scores.mean():.3f} (+/- {scores.std():.3f})")
```

**Observation:** Very small k (e.g., k=1) tends to overfit. Very large k approaches a Majority Classifier. The optimal k is usually found via cross-validation.

### Decision Tree (Interpretable Model)

```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.datasets import load_iris

iris = load_iris()
X, y = iris.data, iris.target

# Limit depth to prevent overfitting
tree = DecisionTreeClassifier(max_depth=3, random_state=42)
tree.fit(X, y)

print(f"Training accuracy: {tree.score(X, y):.3f}")

# Visualise the tree
plt.figure(figsize=(12, 6))
plot_tree(tree, feature_names=iris.feature_names,
          class_names=iris.target_names, filled=True)
plt.show()
```

**Key insight:** Decision trees are interpretable — you can trace the exact path from root to leaf for any prediction. This makes them valuable in domains where explanations matter (healthcare, finance).

---

## 16. Sources

- [[Week 01 Lecture Notes]] — primary lecture material
- [[Week 01 Reading List]] — recommended readings
- Big Privacy (Yu, 2016) — contextual reading on data privacy in ML: [[UTS/Privacy Preserving Technologies/Sources/Big Privacy - Yu 2016]]
- [[UTS/Software Development Studio/Meeting Notes/Week 01 Standup]] — SDS context (if applicable)

---

*These notes follow the [[UTS/Templates/Lecture Note Template|Lecture Note Template]]. For weekly summaries, see [[UTS/Templates/Weekly Summary Template|Weekly Summary Template]].*
