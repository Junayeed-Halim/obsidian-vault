Various ensemble methods have been proposed according to

- how we resample the training data; 
- how the resampled copies are used to construct the base predictors; and 
- how the committee is formed using the individual predictors.

Bagging is a straightforward ensemble method. Given a training dataset, data samples are randomly drawn *with replacement* to form copies of the dataset of the same size. Individual predictors are trained on those resampled datasets. The ensemble includes all the individual predictors and makes decisions by voting.

Not only the instances of the data can be resampled, the attributes can also be randomly selected to form random resampled copies of the data. A variety of decision trees can be constructed using different resampling strategies. A random forest is an ensemble of decision trees trained on random instances *and* random attribute sets.

Boosting methods are iterative strategies to build ensemble using resampled training examples. In one iteration, a weighted random sample of the data is drawn. The weights are dynamically calculated according to the difficulty to make predictions on the individual samples by the current model (using equal weights in the initial step). The base predictors are also weighted according to their accuracy.  The video introduces the different ensemble methods.