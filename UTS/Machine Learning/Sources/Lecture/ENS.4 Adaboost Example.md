We have used a toy data set to manually demonstrate the training steps of an AdaBoost algorithm.

The weak classifier we employ is called decision stump -- a minimalist's decision tree where only one decision is allowed on one data attribute (we have only one single attribute in this toy example anyway). Basically, it works like a thresholding criterion: "if x > threshold, then predict the sample as positive, else, negative", or the other way around, i.e. "if x > threshold then negative ...".

The example shows the boasting algorithm assembles several such decisions dumps to make a predictor that can never be realised by a single decision stump.

The video shows the process. Notice that the resampling is random and therefore if you try to repeat the experiment by yourself and draw your own random samples, you may have a different result.