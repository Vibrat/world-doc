---
id: ml_support_vector_machine
title: Support Vector Machine
---

## Introduction

**Support Vector Machine (SVM)** is a regression technique that helps to move decision linear line to appropriate position based on a constant that we define over a loop.

Take a look on this data sample
```
from sklearn.datasets import load_iris
from matplotlib import pyplot as plt
import numpy as np
from sklearn.linear_model import Perceptron

x = np.random.normal(size=150)
Y = np.random.normal(size=150)

Y2 = np.random.normal(loc=-4, scale=1, size=150)
x2 = np.random.normal(loc=-4, scale=1, size=150)

x_train = np.asarray(np.append(x, x2)).reshape(-1, 1)
Y_train = np.asarray(np.append(Y, Y2))

plt.scatter(x_train, Y_train)
```

This is the image of the plot, you can see that we can implement a linear regression to create a model which should belong to each group of label.

![SVM Example](/img/ml/svm_1.png)

## What lines in this plot?

This is actually a good plot because there is clearly two group of data seperated. We can easily draw a line to group those data into two groups.
