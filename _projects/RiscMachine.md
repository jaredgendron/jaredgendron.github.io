---
layout: project
title: Simple Risc Machine Written in Verilog for an FPGA
shortTitle: Simple RISC Machine
category: Computer
permalink: /portfolio/RiscMachine
year: 2
---


# {{ page.title }}

`FPGA` `Verilog` `Finite State Machine` `ARMv7` `Assembly`

## Summary

I designed and implemented a simple Reduced Instruction Set Computer (RISC) using Verilog. The RISC machine was capable of executing a limited set of ARMv7 instructions, which were stored in flash memory. I created essential Verilog modules, including an arithmetic logic unit (ALU), CPU, and state machine controller, interconnecting them with data paths for smooth instruction execution. The successful development of the RISC machine on a De1-SoC FPGA demonstrated my expertise in digital design, Verilog programming, and computer architecture, showcasing my ability to create functional and efficient hardware systems.

## Description

In this project, I undertook the design and implementation of a simple Reduced Instruction Set Computer (RISC) using Verilog. The RISC machine was capable of executing a limited set of ARMv7 instructions, which were stored in flash memory. 

![De1-SoC](/assets/images/RiscMachine/de1Angle.png)

![CPU Block Diagram](/assets/images/RiscMachine/topLevelBD.png)

The final design was programmed onto a De1-SoC FPGA, allowing for hardware-based execution of the instructions. To achieve this, I created various Verilog modules, including an arithmetic logic unit (ALU), a CPU, and a state machine controller. The figure below shows the block diagram for the CPU.

![CPU Block Diagram](/assets/images/RiscMachine/cpuBD.png)

These modules were interconnected with data paths to enable the seamless execution of instruction codes.

![Instruction Bus Block Diagram](/assets/images/RiscMachine/instructionBusBD.png)

 By combining my knowledge of digital design and Verilog programming, I successfully developed a functional RISC machine capable of executing a subset of ARMv7 instructions, providing valuable hands-on experience in hardware design and computer architecture. The project showcased my proficiency in Verilog and FPGA programming and demonstrated the ability to design and implement digital systems for real-world applications.