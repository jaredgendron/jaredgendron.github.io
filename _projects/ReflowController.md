---
layout: project
title: Reflow Oven Controller with Advanced User Interface and Safety Features
shortTitle: Reflow Oven Controller
category: Electrical
permalink: /portfolio/ReflowController
year: 2
---


# {{ page.title }}

`Assembly` `Python` `Hardware Design` `Soldering` `Microcontroller`

## Summary

The main point of this project was to design, build, and program a Reflow Oven Controller from scratch using a microcontroller/processor. The controller was programmed in assembly language and incorporated a user-friendly interface with selectable reflow profile parameters. It featured precise temperature measurement capabilities using a K-type thermocouple and operated a standard 1500W toaster oven using a solid-state relay (SSR) to regulate power delivery. The controller also utilized Pulse Coded Modulation (PCM) and a Digital to Analog Converter (DAC) for audio feedback and communication with a personal computer for temperature data plotting. Safety features, including automatic cycle termination, were implemented to ensure safe and efficient reflow processes.


## Description

In this completed project, I designed, built, programmed, and thoroughly tested a sophisticated Reflow Oven Controller. The controller was programmed in assembly language, providing precise control over the reflow process. It included a user-friendly interface that allowed users to select reflow profile parameters, such as soak temperature, soak time, reflow temperature, and reflow time, through easily accessible pushbuttons. 

![Image](/assets/images/ReflowController/userInterface.png)

To ensure accurate temperature measurements, the controller utilized a K-type thermocouple with cold junction compensation, capable of measuring temperatures between 25°C and 240°C. A solid-state relay (SSR) was incorporated to regulate the power delivered by the standard 1500W toaster oven, and Pulse Width Modulation (PWM) was implemented for efficient control over the SSR. 

The Reflow Oven Controller featured an LCD display to showcase temperature readings, running time, and the current state of the reflow process. To enhance the user interface, the controller 'talked' using Pulse Coded Modulation (PCM) and a Digital to Analog Converter (DAC). This allowed the system to playback the current oven temperature every 5 seconds and provide reflow process updates in English. 

![Image](/assets/images/ReflowController/reflowSystem.png)

The safety of the system was paramount, and an automatic cycle termination mechanism was implemented. If the reflow process was initiated without the thermocouple wire inside the oven, the controller promptly aborted the process within the first 60 seconds of operation to prevent any potential hazards.

Additionally, the Reflow Oven Controller communicated with a personal computer through the serial port, providing real-time temperature data for plotting temperature strip charts. To verify the accuracy of the temperature measurements, I conducted temperature validation using lab multimeters, ensuring the controller's maximum acceptable temperature error of ±3°C for the range 25°C to 240°C.

![Image](/assets/images/ReflowController/temperatureReading.png)

The successful completion of this project demonstrated my technical proficiency in microcontroller programming, circuit design, and control systems, along with my ability to create a highly functional and user-friendly reflow oven controller. The inclusion of advanced features, safety measures, and data validation ensured a reliable and efficient reflow process, making it a valuable addition to electronic assembly projects.