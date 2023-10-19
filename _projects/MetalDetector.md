---
layout: project
title: Metal Detector with User-Intuitive Interface
shortTitle: Metal Detector
category: Electronic System Design
permalink: /portfolio/MetalDetector
year: 2
---


# {{ page.title }}

`Microcontroller` `C` `Oscillator` `Sensor`

*{{ page.category }}*

## Summary

In this completed project, I designed, built, programmed, and successfully tested a microcontroller-based frequency-meter metal detector. Metal detectors are commonly used for various purposes such as treasure hunting, security screening, and landmine clearance, relying on the change in inductance when metal is brought close to a wire coil. By incorporating this inductance change into an oscillator circuit, I achieved a frequency variation that allowed detection of the presence of nearby metal objects.

## Description

The successfully completed project encompassed several key components and functionalities. To begin, I selected a microcontroller system for the project and programmed it using the C programming language. An inductor was used for the sensor component.

![Metal Detector](/assets/images/MetalDetector/metalDetector.jpg)

An essential element of the project was the Colpitts oscillator, which played a pivotal role in altering its frequency in response to variations in the inductance of the sensor coil. I implemented this oscillator using an LM555 timer. All programming for this module was written using the C programming language.

To provide an audible indication of metal detection, I incorporated a small speaker. The successfully completed metal detector exhibited the capability to detect all Canadian coins from a distance of approximately 1 cm, meeting the specified detection requirements.

Moreover, I designed an advanced user interface for the metal detector, offering multiple pushbuttons to navigate an LCD screen menu. This interface allowed users to adjust various parameters, including the speaker volume, ringtone for detection, and the option to toggle the LED lights on or off.

![Metal Detector](/assets/images/MetalDetector/topDown.jpg)

![Metal Detector](/assets/images/MetalDetector/wiring.jpg)

Additionally, the metal detector featured an LED distance indication meter. Depending on the received frequency and oscillation feedback, the microcontroller illuminated an LED meter in real-time, progressing from left to right to indicate the strength of detection. This feature provided users with valuable information about the distance of the detected object from the metal detector.

Furthermore, I implemented a calibration feature within the user interface menu. Users could select this option to calibrate the metal detector, making adjustments for any anomalies in the surrounding environment where it was used.

![Metal Detector](/assets/images/MetalDetector/welcomeScreen.png)

In conclusion, this project represents a successful integration of various components and features, resulting in an advanced metal detector system. From the careful selection and programming of the microcontroller to the implementation of the Colpitts oscillator and the user-friendly interface, this metal detector exhibits impressive capabilities. It reliably detects Canadian coins from a 1 cm distance, and the LED distance indication meter provides real-time feedback to users. Moreover, the inclusion of a calibration feature enhances the detector's adaptability to different environments. This project showcases a comprehensive and versatile metal detection solution that combines engineering skill and innovation.