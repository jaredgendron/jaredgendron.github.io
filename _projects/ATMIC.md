---
layout: project
title: Automated Teller Machine Integrated Chip Design
shortTitle: ATM Integrated Chip
category: Layout & Pre-Fabrication
permalink: /portfolio/ATMIC
year: 4
---


# {{ page.title }}

`IC Design` `Cadence` `Finite State Machine`

*{{ page.category }}*

## Summary

I successfully created an Automated Teller Machine (ATM) by designing a Finite State Machine (FSM) and then laying out an integrated chip at the transistor level. Initially, I designed and implemented the ATM, ensuring it could perform key functions such as balance checking and withdrawals. Next, I used Cadence Encounter RTL Compiler to analyze the ATM's complexity and verify its functionality with ModelSim. Finally, I transformed the design into a physical layout using Cadence Innovus, emphasizing both efficiency and correctness. This project enhanced my practical knowledge of FSM applications in digital design and demonstrated my creative problem-solving and design skills.

## Description

In this project, I demonstrated Very Large Scale Integration (VLSI) techniques by designing the Finite State Machine (FSM) of an Automated Teller Machine (ATM) and then laying out an integrated chip using software tools such as Cadence Innovus. This project had three key phases, each contributing to my understanding of digital design and practical applications of FSMs.

*The screen capture of my integrated chip below was created using [GDS3D](https://github.com/trilomix/GDS3D), an application used for rendering IC chip layouts in 3D, developed by the Integrated Circuit Design Group and the University of Twente*

![Integrated Chip](/assets/images/ATMIC/IC.png)

In the first phase of the project, I focused on designing and implementing the ATM using a simple and intuitive Finite State Machine (FSM) in SystemVerilog. I had to think creatively to make the FSM work smoothly. My ATM supported various actions like checking account balance, withdrawing money, depositing money, and more.

![FSM Flow Diagram](/assets/images/ATMIC/fsmFD.jpg)

The second phase of the project involved analyzing the complexity of my ATM design using Cadence Encounter RTL Compiler. This tool helped me understand how many building blocks (cells) my ATM needed. I also verified its functionality using ModelSim.

![Image](/assets/images/ATMIC/modelSimWave.png)

In the final phase of the project, I transformed my ATM design into a physical layout using Cadence Innovus, akin to the actual ATM hardware you see in banks. I had to ensure that the layout was not only efficient but also worked correctly.

<div style="display: flex;">
    <div style="flex: 50%; padding: 10px;">
        <img src="/assets/images/ATMIC/fsmLayout.png" alt="Image" width="100%">
    </div>
    <div style="flex: 50%; padding: 10px;">
        <img src="/assets/images/ATMIC/fsmSchematic.png" alt="Image" width="100%">
    </div>
</div>

To ensure the integrated chip worked correctly I created a testbench within Cadence Virtuoso and simulated the final design. I then compared the simulation results from Cadence with the simulations results obtained using ModelSim.

<div style="display: flex;">
    <div style="flex: 50%; padding: 10px;">
        <img src="/assets/images/ATMIC/fsmTestBench.png" alt="Image" width="100%">
    </div>
    <div style="flex: 50%; padding: 10px;">
        <img src="/assets/images/ATMIC/cadenceWave.png" alt="Image" width="100%">
    </div>
</div>

Overall, this project significantly enhanced my understanding of practical applications of FSMs in the context of digital design. I successfully created a functional ATM using a Finite State Machine (FSM). This involved implementing various features such as checking account balances, withdrawing money, and depositing money, among others. I gained invaluable hands-on experience in digital design, verification, and layout. This project allowed me to apply the theoretical knowledge I had acquired to a practical scenario. It also showcased my ability to think creatively, design efficiently, and bring digital concepts to life.