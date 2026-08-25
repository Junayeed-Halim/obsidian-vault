# Deciphering the Data: A Manual Approach

Let's try to interpret this "alien signal".

Previously, we just saw a stream of 16 bits. What if there is an internal structure?

Let's try a hypothesis: **What if the 16-bit input is actually composed of two 8-bit numbers?**

Let's split the 16 bits into the first 8 bits (\(a_0\)) and the second 8 bits (\(a_1\)), and convert them to decimal numbers to see if they make more sense to us as humans.

Input (\(X\)) Split
\(a_0\) (Decimal)
\(a_1\) (Decimal)
Output (\(Y\))

00000110 00010011
\(6\)
\(19\)
\(0\)

00011100 00001110
\(28\)
\(14\)
\(1\)

00001010 00000111
\(10\)
\(7\)
\(1\)

00011100 00010100
\(28\)
\(20\)
\(1\)

00000110 00011001
\(6\)
\(25\)
\(0\)

Take a moment to look at the relationship between **\(a_0\)**, **\(a_1\)**, and **\(Y\)**.

- Row 1: \(6\) vs \(19\) \(\to\) \(0\)
- Row 2: \(28\) vs \(14\) \(\to\) \(1\)
- Row 3: \(10\) vs \(7\) \(\to\) \(1\)
- Row 4: \(28\) vs \(20\) \(\to\) \(1\)
- Row 5: \(6\) vs \(25\) \(\to\) \(0\)

## Visualizing the Pattern

If the pattern isn't obvious yet, let's visualize it.

(Imagine if we plotted \(a_0\) on the x-axis and \(a_1\) on the y-axis, and colored the points based on \(Y\). You would see a clear dividing line.)

## The "Aha!" Moment

You likely discovered the rule:

- If **\(a_0 \ge a_1\)**, then **\(Y = 1\)**.
- If **\(a_0 

It was a simple comparison operation all along!

## Converting to Code

Now we can write that program we were asked for in the previous step. We have effectively "learned" the function \(f(X)\) by observing the data.

def predict(x_bits):
 # Parse the raw data
 a0 = int(x_bits[:8], 2)
 a1 = int(x_bits[8:], 2)
 
 # Apply the discovered rule
 return 1 if a0 >= a1 else 0

This process you just went through—observing raw data, hypothesizing a structure (splitting into 8+8 bits), finding a pattern (comparison), and codifying it—fulfils the goal of **Learning from Data**: we started with raw observations and ended up with an executable program that can make predictions on new data.

However, there is an important missing piece here. Do you realise it?