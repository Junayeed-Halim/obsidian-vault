An ensemble is a collection of predictors. We can understand an ensemble as a committee to perform the predictive task. If we can establish that the committee can make more reliable predictions than individual members do, then it is possible to adopt a divide-and-conquer strategy of constructing reliable and accurate predictors from weak ones. (Alternatively, we can understand this as a way of balancing between the model capacity and generalisation reliability, or bias versus variance.)

 

There is no limit to the kind of member predictors that can be used in an ensemble, known as "base predictors", "weak predictors", or "base/weak classifiers/regressors" depending on the task. Practical convenience often leads to constructing ensemble models using simple decision trees, i.e. a "decision stump" where only one decision is made at the root (and only) node.

 

In the video, we have demonstrated an example of ensemble decision committee of 3 members, which shows that an ensemble works better than individual members when the following two conditions hold

- (easily) each predictor, despite being a weak one, works better than a random guess
- (more challenging) those members are independent.

The second condition is more difficult to satisfy because in practice we only have one training set of examples, from which all individual predictors are constructed. The fact that they are all selected with respect to the same criteria inherently links one predictor with the others. Given an input, the outputs of those predictors will not be ideally independent.

 

A practical scheme is to use the resampling trick. We randomly redraw pseudo training sets from the original training examples, and train predictors on those resampled examples. The copies of training sets are not independent. Nevertheless, we can use those re-sampled copies of data to train weak predictors and use those the so-trained predictors to form effective ensemble predictors. Moreover, resampling helps measure the variance of the prediction. This technique is called "bootstrapping".