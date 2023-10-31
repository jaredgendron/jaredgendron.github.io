---
layout: project
title: Robotic Arm with 3.5 Degrees of Freedom
shortTitle: Robotic Arm with 3.5 DoF
category: Control System Design
permalink: /portfolio/RoboticArm
year: 3
---


# {{ page.title }}

`Control` `MATLAB` `Simulink` `Microcontroller` `Simulation`

*{{ page.category }}*

## Summary

Took on the control engineering lead in a 3 person team designing a robotic arm with 3.5 degrees of freedom. I designed and fine-tuned a PID controller algorithm using MATLAB & Simulink and ported the algorithm to C for programming a microcontroller to control the robot. I ran thorough control and mechanical simulations of the design using a conjunction of MATLAB/Simulink and SimulationX software to fine-tune the system ahead of real-time testing.

## Description

In this project, I was responsible for designing the complete control system of a robot featuring 3.5 degrees of freedom. It was a great learning experience where I gained insights into control engineering, firmware development, and how theory and practice come together.

![Current Driving PCB](/assets/images/RoboticArm/robot.png)

One of the key takeaways from this project was learning about PID (Proportional-Integral-Derivative) controllers. I used C programming to build and fine-tune the controller, making sure it worked precisely and efficiently. This involved managing the main program and interrupt service routines on a microcontroller, finding a balance between computational power and real-time responsiveness.

![Image](/assets/images/RoboticArm/tuningParameters.png)

I also discovered the importance of simulations in control system design. I used MATLAB and SimulationX software to run real-time simulations of the robot's control system. These simulations allowed me to fine-tune the system parameters and ensure optimal performance ahead of real-time testing. A printed circuit board was designed for driving current to the motors based on the PID controller system and is shown below.

![Current Driving PCB](/assets/images/RoboticArm/currentDriver.png)

Moreover, I implemented an algorithm that autonomously operated one motor based on the positions of the other two, drastically reducing path planning time and enhancing the robot's autonomous capabilities. The figure below shows the characteristics of the tune.

![Image](/assets/images/RoboticArm/tune.png)

Overall, this project was a valuable learning experience that deepened my understanding of control systems, firmware development, and how theory can be applied in practical situations.