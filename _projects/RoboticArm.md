---
layout: project
title: Robotic Arm with 3.5 Degrees of Freedom
permalink: /portfolio/RoboticArm
---

⚠️ The documentation for this project has been marked as unfinished, please come back soon

# Robotic Arm with 3.5 Degrees of Freedom

`Control` `MATLAB` `Simulink` `Microcontroller` `Simulation`

## Summary

Took on the control engineering lead in a 3 person team designing a robotic arm with 3.5 degrees of freedom. Designed and fine-tuned a PID controller algorithm using MATLAB & Simulink and ported the algorithm to C for programming a microcontroller to control the robot. Ran thorough control and mechanical simulations of the design using a conjunction of MATLAB/Simulink and SimulationX software simultaneously by sharing feedback variables through computer ports

![Current Driving PCB](/assets/images/RoboticArm/robot.png)

## Description

In this project, I was responsible for designing the complete control system of a robot featuring 3.5 degrees of freedom. To achieve precise and efficient control, I developed and fine-tuned a PID controller in C, efficiently utilizing a microcontroller's main running program and interrupt service routines. To optimize the controller for minimal processing time, I conducted real-time simulations using a combination of MATLAB and SimulationX software simulataneously. 

![Image](/assets/images/RoboticArm/tuningParameters.png)

This allowed me to fine-tune the system parameters and ensure optimal performance ahead of real-time testing. A printed circuit board to drive current to the motors was designed, minimizing the robot's overall footprint. 

![Current Driving PCB](/assets/images/RoboticArm/currentDriver.png)

Moreover, I implemented an algorithm that autonomously operated one motor based on the positions of the other two, drastically reducing path planning time and enhancing the robot's autonomous capabilities. The figure below shows the characteristics of the tune.

![Image](/assets/images/RoboticArm/tune.png)