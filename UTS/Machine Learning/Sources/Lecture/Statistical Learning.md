# From Logic Design to Learning: Automating the Discovery

In the previous section, we successfully "cracked" the code. We discovered that the mysterious 16-bit signal was actually two 8-bit numbers, \(a_0\) and \(a_1\), and the label \(Y\) was determined by comparing them: \(Y=1\) if \(a_0 \ge a_1\), and \(0\) otherwise.

But here is the catch: **We** did this.

We, the humans, used our "god-view" and prior knowledge of binary systems, arithmetic, and logic to **engineer** features (recognizing the 8-bit split) and derive the rule.

This raises a fundamental question in Artificial Intelligence: **Can a machine do this *automatically*?** What if we didn't know how to interpret binary? What if the data lived in a 10,000-dimensional space where human intuition fails?

In this section, we will challenge this "hand-crafted" approach and transition towards a **Statistical Learning** framework.

## 1. Reformulating the Problem: "Lifting"

To make the problem learnable, we first need to express our "logical rule" in a form that is mathematical and continuous, rather than just logical if-else statements.

Surprisingly, the comparison operation \(a_0 \ge a_1\) has an equivalent numeric form using a **weighted sum**.

Recall that an 8-bit integer is calculated as:

\[ \text{Value} = \sum_{j=0}^7 b_j \cdot 2^{7-j} \]

where \(b_0\) is the most significant bit (weight 128) and \(b_7\) is the least significant bit (weight 1).

The condition \(a_0 \ge a_1\) is equivalent to \(a_0 - a_1 \ge 0\). Let's expand this using the bits of the 16-bit input \(X\). Let \(x_0, \dots, x_7\) be the bits of \(a_0\), and \(x_8, \dots, x_{15}\) be the bits of \(a_1\).

\[ a_0 - a_1 = (128 x_0 + 64 x_1 + \dots + 1 x_7) - (128 x_8 + 64 x_9 + \dots + 1 x_{15}) \]

We can rewrite this as a single weighted sum of all 16 input bits:

\[ S = \sum_{i=0}^{15} w_i x_i \]

where the weights \(w\) are:

- \(w_0 = 128, w_1 = 64, \dots, w_7 = 1\) (Weights for \(a_0\))
- \(w_8 = -128, w_9 = -64, \dots, w_{15} = -1\) (Weights for \(a_1\))

The prediction rule then becomes simple:

- If \(S \ge 0\), predict \(Y=1\).
- If \(S 

**Exercise**: Try this "trick" with a pen and paper on the first few examples from the previous page. You will find that it works perfectly to reproduce the comparison logic!

## 2. The Power of Abstraction (The Hypothesis Space)

At first glance, this seems redundant. Why transform a clean logical program (if a0 >= a1) into a messy arithmetic formula?

The answer lies in **abstraction**.

The structure \(S = \sum w_i x_i\) provides a **template** for a family of algorithms.

- If we choose the weights described above, we get a "Comparator".
- If we choose different weights, we get a completely different function.

By defining this template, we have moved from searching for a single "needle in a haystack" (the exact logical rule) to searching within a defined **Hypothesis Space**. We assume the solution looks *something like* a weighted sum, and now our job is just to find the right weights (\(w\)).

## 3. From Logical Design to Statistical Learning

Now we reach the core of Machine Learning.

In the logical design approach, we determined the weights \(w\) by understanding the meaning of the bits. In **Statistical Learning**, we treat the weights \(w\) as **unknowns**.

We let the data determine the weights. We set up an optimization problem:

\[ \hat{w} = \operatorname*{argmin}_w \sum_{i=1}^N \mathcal{L}(y_i, f(x_i; w)) \]

Where:

- \(f(x_i; w)\) is our prediction for input \(x_i\) using weights \(w\).
- \(\mathcal{L}\) is a **Loss Function** (or criterion) that measures how bad the prediction is (e.g., 0 if correct, 1 if wrong).
- The sum is over all \(N\) examples in our training data.

We essentially ask the computer: *"Find me the set of weights \(w\) that minimizes the errors on this dataset."*

## 4. A Curious Observation on "Learned" Knowledge

If you run a learning algorithm (like a Perceptron or Logistic Regression) on this dataset, you might find something interesting. The machine *will* find a set of weights that predicts \(Y\) perfectly.

However, the learned weights often look different from our "logical" weights (\(128, 64, \dots\)).

For example, looking at the data, you might notice that the first few bits of \(a_0\) and \(a_1\) are always \(0\) (because the numbers in our dataset are small, e.g., max 32).

- Since \(x_0, x_1, x_2\) are always \(0\), their weights \(w_0, w_1, w_2\) never affect the sum \(S\).
- The optimization algorithm has no "driving force" to set them to \(128, 64, 32\). It might leave them as random noise!

This highlights a key difference:

- **Logical Design**: Produces a solution that is correct for *all possible* inputs, based on first principles.
- **Statistical Learning**: Produces a solution that is correct for the *observed data distribution*.

If we later show the model a number explicitly using the high bits (e.g., 200 vs 10), the learned model might fail because it never needed to learn the significance of those high bits during training. This is related to a crucial concept that will be encountered throughout any learning-based solution: **Generalization**.