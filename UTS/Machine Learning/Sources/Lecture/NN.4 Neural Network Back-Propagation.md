We have learned the structure of a neural network computational pipeline. And we have studied the details of the computations for a neural network to process data samples. We know that the computation is specified by the model parameters, which are the weights of the connections between the neurons in subsequent layers (and a bias offset). It is the time to study given training data samples, how to adjust those weights so that the neuron network model behaves as desired to represent the relationship between the data and the target in the training data set.

We have been studying the similar problem for similar data models, including decision trees, Adaboost and perception. Neural networks are closely related to and an extension from the perceptions. In training, both family share the task of determining an appropriate set of weights of the inner connections of the respective models. Let us review the training algorithm of the perception model. We take an intuitive geometric view of the model parameters and consider the alignment of the weight parameters and the data samples. In each training iteration step, the parameters are adjusted by moving along the direction of a data sample (in the same space of the parameters). Direct application of this strategy to multi-layer neural network can be difficult:

- With multiple layers, the weights are no longer share the same space with the data samples. The samples cannot be directly used as a direction vector to formulate the weight updates.
- The non-linear inter-layer transformation makes the relationship between how the the weights and the layer inputs combine with each other and how they affect the final network output complex.

Nevertheless the general idea that

figure out how the change in the individual parameters (inter-layer weights) would affect the network outputs and therefore the discrepancy between those outputs and the desirable target values, and come up with model update plan

still seems to be sensible scheme. The key here is to figure out how individual weights will affect the network outputs. In theory, this is no more than computing the partial derivative of the network outputs (or, the corresponding loss function) with respect to the weights. In practice, however, the straightforward implementation would take prohibitive time cost and won't be useful beyond the smallest toy problem and models.

A clever approach is to change our focus from the computation defined by the network (forward computation) to the piece of information "how *this* variable would affect the final interested quantity, e.g. the loss". From the engineering point of view, this is a dynamic programming approach of implementing the chain rule of computing the derivatives. To make it concrete, consider the following computation:

$2 \times 3 + 5 = 11$

Assume that the "2" is a variable under our control and we want to investigate how a small change, say, $2 \rightarrow 2.01$ will affect the result, i.e. $11\rightarrow 11+\Delta$, and $\Delta / 0.01 = ?$. The straightforward idea would be considering the chain rule of how the change in "2" leads to changes in the product "$2\times 3$" and then the final result. On the other hand, we start by the simple fact that

if we change the final result by $\delta$, the final result will change by $\Delta=\delta$. I.e. letting $11 \rightarrow 11 + \delta$, and investigate the change of the final result, finding it has been changed by $\Delta$. Then $\Delta$ would just be $\delta$, $\Delta/\delta = 1.0$.

This almost sounds tautology. What follows is more interesting. As the final result is the result of an operator "+", which will just clone the "effect to change the final result" to each of its operands i.e. if the result of $a+b$ has some effect on some quantity, say, $\frac{\partial L}{\partial (a+b)} = d$, then both $a$ and $b$ will have the same effect on the quantity, $\frac{\partial L}{\partial a} = \frac{\partial L}{\partial b} = d$. So the value "1.0" gets duplicated to both the operands "5" and "6" (the product of 2 and 3) of the "+" operator.

In the next step, the effect 1.0 on the internal node $6=2\times 3$ will be passed backwards to the operands 2 and 3. Now the operator is multiplication. So if one operand changes by a certain amount, it will be first multiplied by the other operand and changes the production result by the multiplied amount, and then continues from there to affect the ultimately interested quantity. In our example, the situation is illustrated by the picture here:

— if you change $2 \rightarrow 2.01$. It will change the $6 \rightarrow 6.03$, and has a total affect of $0.03 \times 1.0 = 0.03$ on the final result.

As simply as it was motivated, such a scheme is a clever invention, which allows the partial derivatives to be computed in one run from loss to the output and backwards all the layers of a network. This is called back-propagation.

Moreover, it turns out the backward computation can be conveniently represented using matrix computations just as the forward computations could.

In the video lecture, we explain 1. the algorithm in our example simple multi layer perceptron network and 2 how the computation is formulated as matrix operations. A complete implementation tutorial is in the next section.