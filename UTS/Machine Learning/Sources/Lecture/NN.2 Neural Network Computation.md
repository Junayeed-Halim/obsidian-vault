We next consider how neural networks process data. The neural networks employ stage-wise a processing pipeline. Each layer makes a step, and each step takes the output of the previous step and generates the information to feed into the next one. So we consider the computation in one layer.

A layer consists of a set of perceptrons, each taking the same set of input variables. We first review the computation of one perceptron model (note the intentional "dummy attribute" 1 for 
 
 w
 0
 
">):

 1
 &#x22C5;
 
 w
 0
 
 +
 
 x
 1
 
 &#x22C5;
 
 w
 1
 
 +
 
 x
 2
 
 &#x22C5;
 
 w
 2
 
 +
 &#x22EF;
 +
 
 x
 k
 
 &#x22C5;
 
 w
 k
 
 &#x2192;
 a
">

This computation can be formulated as taking the inner product between two vectors, we will arrange the quantities in the equation as follows.

 [
 1
 ,
 
 x
 1
 
 ,
 
 x
 2
 
 ,
 &#x2026;
 ,
 
 x
 k
 
 ]
 &#x22C5;
 
 [
 
 
 
 
 w
 0
 
 
 
 
 
 
 w
 1
 
 
 
 
 
 &#x22EE;
 
 
 
 
 
 w
 k
 
 
 
 
 ]
 
 &#x2192;
 a
">

(It will become clear soon that this seeming waste of space brings us great convenience.)

Now we have the computation of one perceptron formulated, while a layer of a neural network includes multiple perceptrons. An obvious solution would be to apply the naive computation scheme individually for all perceptions make a "layer" of a neural network. Let us give individual models subscripts to distinguish them from each other. Please be reminded that each perception model has its own set of parameters so the parameters need unique indexes to be distinguished as well. In the simplest *multiple perceptron* case, we consider two perceptron models taking the same set of input attributes and generate two weighted sum values as follows

 [
 1
 ,
 
 x
 1
 
 ,
 
 x
 2
 
 ,
 &#x2026;
 ,
 
 x
 k
 
 ]
 &#x22C5;
 
 [
 
 
 
 
 w
 
 0
 ,
 1
 
 
 
 
 
 w
 
 0
 ,
 2
 
 
 
 
 
 
 
 w
 
 1
 ,
 1
 
 
 
 
 
 w
 
 1
 ,
 2
 
 
 
 
 
 
 &#x22EE;
 
 
 &#x22EE;
 
 
 
 
 
 w
 
 k
 ,
 1
 
 
 
 
 
 w
 
 k
 ,
 2
 
 
 
 
 
 ]
 
 &#x2192;
 [
 
 a
 1
 
 ,
 
 a
 2
 
 ]
">

Moreover, the formulation allows us to naturally represent the computation for the cases where there are multiple data samples. For example, to compute the network layer for two samples, respectively, we just need another set of indexes to distinguish individual data instances.

 
 [
 
 
 
 1
 ,
 
 
 
 x
 1
 
 (
 1
 )
 
 
 ,
 
 
 
 x
 2
 
 (
 1
 )
 
 
 ,
 
 
 &#x2026;
 ,
 
 
 
 x
 k
 
 (
 1
 )
 
 
 
 
 
 
 1
 ,
 
 
 
 x
 1
 
 (
 2
 )
 
 
 ,
 
 
 
 x
 2
 
 (
 2
 )
 
 
 ,
 
 
 &#x2026;
 ,
 
 
 
 x
 k
 
 (
 2
 )
 
 
 
 
 
 ]
 
 &#x22C5;
 
 [
 
 
 
 
 w
 
 0
 ,
 1
 
 
 
 
 
 w
 
 0
 ,
 2
 
 
 
 
 
 
 
 w
 
 1
 ,
 1
 
 
 
 
 
 w
 
 1
 ,
 2
 
 
 
 
 
 
 &#x22EE;
 
 
 &#x22EE;
 
 
 
 
 
 w
 
 k
 ,
 1
 
 
 
 
 
 w
 
 k
 ,
 2
 
 
 
 
 
 ]
 
 &#x2192;
 
 [
 
 
 
 
 a
 1
 
 (
 1
 )
 
 
 ,
 
 
 
 a
 2
 
 (
 1
 )
 
 
 
 
 
 
 
 a
 1
 
 (
 2
 )
 
 
 ,
 
 
 
 a
 2
 
 (
 2
 )
 
 
 
 
 
 ]
 
">

It is straightforward to generalise the formulation from here to cases with more than 2 models or 2 data samples.

 [
 
 X
 
 ]
 
 n
 &#x00D7;
 (
 k
 +
 1
 )
 
 &#x22C5;
 [
 
 W
 
 ]
 
 (
 k
 +
 1
 )
 &#x00D7;
 m
 
 &#x2192;
 [
 
 A
 
 
 ]
 
 n
 &#x00D7;
 m
 
 
">

We have looked at the mathematical models of multi-layer perceptron, i.e. neural networks. In the next section, we will try to write a computer program to implement the computation.

 

The following video explains the computational model and the implementation as matrix multiplication in neural networks.