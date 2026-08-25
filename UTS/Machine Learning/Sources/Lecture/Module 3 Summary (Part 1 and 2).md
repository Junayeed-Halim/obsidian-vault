## Summary of the Criterion (Point Loss)

This week we discussed the point loss, considering regression loss and partially the classification loss (of a larger family of structured loss).

- L2 (squared) loss introduced certain characteristics for learning process; L1 (absolute value) introduces different ones -- encouraging 0-centric and less sensitive to large discrepancies.
- For classification -- we consider it in terms of comparing probabilities, which needs the concept of entropy  See nice video (https://www.youtube.com/watch?v=DxL2HoqLbyA). 

[](https://canvas.uts.edu.au/courses/42500/files/12975031?verifier=y72H6VwWkR0yzANqg4zlIy3uDZHatT4tKljYNvZg&wrap=1)There are multiple notebooks scattered in the module notes, plz try on.

For slides: here is one, but we have changed order of introducing the topics, so it is just for your information. Refer more to the recording (TBA).[3_Criterion_LossFunction.pdf](https://canvas.uts.edu.au/courses/42500/files/12974917?verifier=JPuSxbmRWd1j1lMCvjtrpJoGPCafBJJNXWeruSAv&wrap=1)

 

SESSION RECORDING: 

 

 

Download link:

[https://utsmeet.zoom.us/rec/share/dVDtw0oKkO0J8MJPvMa_ATLqCCp60wBfVBHdEVFTo93RIgORC5RTn4C8hZlv263T.Fa_r5tZLDoLK3mKl](https://url.au.m.mimecastprotect.com/s/Wx9lCoV1O9tXvVB5DIVizSpVM3h?domain=utsmeet.zoom.us)
Passcode: D%8P=#c1

 

9 Mar 2026:

We discussed more on the loss functions used in practical cases, including

- image detection: comparing box objects
- image segmentation: pixel-wise classification (cross entropy) with add-on's such as spatial cohesion (closeby pixels should have similar predictions) 
- language modelling: standard classification, performed sequentially, but the target possibilities could be HUGE.

We have also glanced the integration versus summation of computing the funcitonal for the overall training loss.

A key take-away is the distinction between evaluation criterion WITH/WITHOUT committing a decision-making after the model outputs. If there is a decision making (discontinuous) step, then the criterion can be used to evaluate the model, but not to train it.

 

 

 

The recording

 

.

Download:

https://utsmeet.zoom.us/rec/share/kkrAzT_a27_2XIXfCXOusZVZ_GjiudV925LkGy4_9iga-ns1GU2WzrDEcrT3VJLL.nyfGc5PO17rhy6zZ?startTime=1773010950000
Passcode: kA6Dp@s*