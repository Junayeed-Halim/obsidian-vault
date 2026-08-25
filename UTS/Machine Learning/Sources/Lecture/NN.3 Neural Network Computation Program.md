In a computer implementation, the model is simply represented as

def nn_forward(X, W, b):
 """
 :param X: data matrix, [n x k], n instances, k samples
 :param W: model parameter matrix W, [k x m]
 :param b: model parameter, the offset constant, [m]
 """
 A = np.dot(X, W) # dot: product between matrices
 A += b # the element-wise adding for m values per instance will 
 # be "broadcast" n times to apply to all data samples
 # produce H by transform A element-wisely
 return H

Since the parameters W and b specify a network layer, they are usually considered as part of the model representation, i.e. the hypothesis space of neural networks with a certain architecture design is consisting of the real-number vector/matrix spaces 
 
 
 R
 
 
 k
 ,
 m
 
 
 &#x2295;
 
 
 R
 
 m
 
">. It is convenient to encapsulate the information of a model, i.e. a member hypothesis, as one program object. So we can take advantage of any object-oriented programming language to easily and safely manage the computational resources, the life cycle and the interface with other entities for the model object in a machine learning application. In Python, such a representation is demonstrated as follows

class Layer:
 ...
 def forward(self, X):
 A = np.dot(X, self.W) # note the "self" refers to the object
 A = A + self.b # of layer to manage the information
 ...

One more thing ... The matrix multiplication formulation reveals a very important role played by the element-wise transform interlaced between each pair of layers — without the non-linear transformation, multilayer processing can be represented by concatenating a series of matrix multiplication, which reduces to one matrix multiplication by the associative law. The network is then effectively reduced to one layer.

The implementation will be explained in details in the latter tutorial section in this module.