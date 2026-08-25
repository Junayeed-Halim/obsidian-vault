We will learn a widely used ensemble algorithm, Adaboost. As a member of the “boosting” family, the Adaboost algorithm uses weights to resample the training data. The classifiers themselves are also weighted in their contribution to the ensemble decision.

This video presents a brief introduction to the key steps of the algorithm, in each iteration

- Draw random samples from the original dataset using the current sample weights (initialised as 1/n, where n is the number of training samples)
- Train a weak classifier on the resampled dataset
- Evaluate the performance of the newly learned classifier and determine the weight of the new classifier according to its performance
- Adjust the sample weights according to whether they have been classified correctly by the new classifier, as well as the weight of the new classifier

In the video, we explain the steps of the algorithm.