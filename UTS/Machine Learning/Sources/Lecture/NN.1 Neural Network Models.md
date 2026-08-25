Recall that in a common scenario where we perform supervised learning, the goal is to understand and formulate the relationship between the observable data attributes X and the target values Y. When there is little prior knowledge about how X is connected to Y, or it is difficult to represent such knowledge (consider specifying the pixels in an image and the visual concept of the presence of a puppy), The task becomes building a generic function approximator, i.e. we want to deliver a mechanism that can map an element 
 x
 &#x2208;
 
 X
 
 &#x21A6;
 y
 &#x2208;
 
 Y
 
">.

One of the most successful model families for such generic approximation task is neural networks. The plain implementation of neural networks is also called *Multi-layer Perceptions* (MLP). It is not difficult to guess from this namesake that the neural network model family has a close connection to one of the linear models, the [Perceptrons](https://www.notion.so/Perceptron-4c889beec61c42a791db512798e8fff0), which we learnt in the previous part in this subject. A perception model is a straightforward formulation of the relationship between data attributes and the prediction target.

A perception computes a weighted sum of the data attributes and links the computed value to the prediction by simple thresholding (comparing to 0): 
 a
 =
 
 w
 0
 
 +
 
 w
 1
 
 &#x22C5;
 
 x
 1
 
 +
 
 w
 2
 
 &#x22C5;
 
 x
 2
 
 +
 &#x2026;
"> then make prediction according to if 0" src="https://canvas.uts.edu.au/equation_images/a%2520%253E%25200" alt="LaTeX: a > 0" data-equation-content="a > 0" loading="lazy" x-canvaslms-safe-mathml="
 a
 &gt;
 0
"> . There are several possible extensions to this simple scheme. So that the data model can classify data with more sophisticated 
 (
 
 X
 
 ,
 
 Y
 
 )
">-relationship.

- 
**Extension Type-A**: The output of the model can be linked to the value 
 a
"> differently than binary thresholding, e.g. a "soft" decision can be 
 
 1
 
 1
 +
 
 e
 
 &#x2212;
 a
 
 
 
 
">. You are encouraged to plot the response of this function to a range of input values of 
 a
"> to appreciate why it is called "soft decision".

import matplotlib.pyplot as plt
import numpy as np
a = np.arange(-5, 5, 0.1) # a is an array of [-5, -4.9, ..., 4.8, 4.9]
# in practical applications, a should be computed using input data x.
# This example shows the correspondence between a values and the network 
# outputs for a range to illustrate the whole picture
plt.plot(a, 1 / (1 + np.exp(-a)))

- 
**Extension Type-B**: The output of the model can summarise the information from the input in a more generic way. E.g. it can include one input attribute directly in the output value: say, output = 
 a
 +
 
 x
 5
 
">. So the model describes the *change* from the input (usually, in such a construction, we would employ the same number of models as the input data attributes, 
 
 h
 i
 
 =
 a
 +
 
 x
 i
 
">, for 
 i
 =
 1
 &#x2026;
 k
">.)

- 

**Extension Type-C**: More complex models can be built via recursive constructions. There are two equivalent ways of understanding this idea. Top-to-bottom: When computing a perception model we can replace the raw input data attributes using processed features. Moreover, the process and can be done using other low-level perception models. Bottom-to-top: Instead of letting the output of a perception model be directly linked to the target of prediction, we can feed those outputs into a higher layer of perception model.

 
 w
 1
 
 &#x22C5;
 
 h
 1
 
 +
 
 w
 1
 
 &#x22C5;
 
 h
 2
 
 +
 &#x2026;
 
 
 h
 1
 
 =
 &#x03C6;
 (
 
 u
 
 1
 ,
 1
 
 
 
 x
 1
 
 +
 
 u
 
 2
 ,
 1
 
 
 
 x
 2
 
 +
 &#x2026;
 )
 
 
 h
 2
 
 =
 &#x03C6;
 (
 
 u
 
 1
 ,
 2
 
 
 
 x
 1
 
 +
 
 u
 
 2
 ,
 2
 
 
 
 x
 2
 
 +
 &#x2026;
 )
 
 &#x2026;
">

Both perspectives represent the same idea that perceptions can be combined hierarchically to make complex data models, as illustrated by the equation block above. Note that the hierarchy is not limited to 2 layers. Modern deep neural networks can employ dozens or more than 100 layers of perceptron-like models to represent highly complicated *representation* of data before attempting the prediction tasks.

Neural networks employ extension in all three aspects. In this module, our study will focus on the Type-C extension. We will consider how to perform the computation to process data in a hierarchical neural network structure and how to train such complicated models.

In the following video, we discuss the extension of the perceptron model to neural networks.