---
layout: project
title: Computer Vision Heuristic Algorithm Written in Python
shortTitle: Computer Vision Algorithm
category: Electrical
permalink: /portfolio/ComputerVision
year: 2
---


# {{ page.title }}

`Python` `Computer-Vision` `Convolution`

## Summary

In this project, I used Python libraries like NumPy, SciPy, and Imageio to decipher drone flight paths from video feeds. I applied convolution to process adjacent frames, enabling the capture of motion patterns. This led to the creation of correlation videos, highlighting correlated motion. Additionally, I developed a path classification system that distinguished triangular and square paths, with cross-correlation videos enhancing classification accuracy. Overall, this project successfully decrypted and classified drone flight paths in various videos, showcasing the power of Python libraries in extracting insights from complex visual data.

## Description

Computer vision is a cross-disciplinary field at the intersection of electrical engineering, computer science and machine learning. Although it is easy for humans to discern the movement of a video, it is surprisingly difficult to create a heuristic for computers to do the same task. This project honed my programming skills to apply theoretical knowledge to a practical application.

In this project, I took on the task of deciphering the flight paths of drones captured in video feeds, accomplishing this through a combination of Python libraries such as NumPy, SciPy, and Imageio.

![Python Logo](/assets/images/ComputerVision/pythonLogo.png)

One pivotal aspect of the project revolved around the processing of adjacent frames in the video feeds. For each pair of two-dimensional NumPy arrays, both sized at 160 by 160 pixels, I implemented a function that transformed pixel values into a floating-point scale of 0 to 1. This function also calculated and adjusted pixel values based on their average, extracted specific sub-arrays, and employed them as convolutional kernels for cross-correlation. The result was an array of integer values ranging from 0 to 255, effectively capturing the essence of the video feed's motion.

![Cross-Correlation](/assets/images/ComputerVision/cross-correlation.png)

Another significant contribution was the creation of correlation videos. By loading .gif videos from input filenames and converting them into NumPy arrays, I processed each pair of adjacent frames using the aforementioned function. The outcome was a series of videos with n - 1 frames, stored as .gif files, effectively showcasing the progression of correlated motion.

Lastly, I tackled the task of path classification within .gif videos, determining whether the traced path resembled a triangle or square. Although this classification task allowed for heuristic approaches, I found that incorporating the cross-correlation videos significantly improved the accuracy of these classifications.

In the end, these endeavors collectively led to the successful decryption and classification of drone flight paths within both the provided videos and a set of six additional videos. This project served as a hands-on exploration of image processing and analysis techniques, illustrating the power of Python libraries in uncovering valuable insights from complex visual data.