## Summary of the Framework

This module separates the "Learning" problem into four distinct concerns:

- **Data:** What are we learning from? (Defined by \(P\) and \(S\)).
- **Hypothesis Space:** What can we possibly learn? (Defined by \(\mathcal{H}\) and architecture).
- **Objective:** What do we want to achieve? (Defined by Loss \(\ell\)).
- **Optimization:** How do we compute it? (Defined by Algorithm \(\mathcal{A}\)).

By debugging these components separately, we can understand why an ML system fails.

- High training error? \(\to\) Look at Optimization or Hypothesis Space (Expressivity).
- Low training error but high test error? \(\to\) Look at Data (Quantity/Quality) or Hypothesis Space (Overfitting/Generalization).

 

Here is a notebook, where we use in online session to demonstrate the learning framework and the treatment of learning as a "selection from function space" procedure. You can check it out and have some hands-on experiments.

[0_Explain_Learning.ipynb](https://canvas.uts.edu.au/courses/42500/files/12975031?verifier=y72H6VwWkR0yzANqg4zlIy3uDZHatT4tKljYNvZg&wrap=1)

 

SESSION RECORDING:

 

The uploaded video format is still poor (as in the last week!), so here is the original download link:

Shareable link: [https://utsmeet.zoom.us/rec/share/XW3Cp-DhXg7GcyqVW2vhpWQ3tOEmMKn3zBz07Ybken8oyKW8NGHo7FvyvNpbXJkX.C4_R0_6O15hNxRKo](https://url.au.m.mimecastprotect.com/s/eoFAC71RA7HmZVnAYuBi7IomzkS?domain=utsmeet.zoom.us)
Passcode: n3Jg%*Sp