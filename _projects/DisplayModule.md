---
layout: project
title: Wireless Display Module
shortTitle: Wireless Display Module
category: Electronic System Design
permalink: /portfolio/DisplayModule
year: 5
---


# {{ page.title }}

`Altium` `PCB Design` `FreeRTOS` `Multi-threading` `SPI` `LTE` `MQTT` `LoRaWAN` 

*{{ page.category }}*

***This project is a component of a larger project which can be found [here](/portfolio/ParkingSign)***

## Summary

This project centers around the development of the Display Module, a pivotal component in the dynamic parking signage project. It encompasses two dedicated microcontrollers, one for LTE connectivity and the other for display management, using the FreeRTOS operating system. The module facilitates dynamic parking signage, real-time stall occupancy detection, and seamless communication with a web application via LTE and MQTT machine-to-machine protocol. The project transitioned from an initial prototype using development boards to a streamlined PCB design. This innovation represents a sophisticated, efficient, and adaptable solution for contemporary parking management, optimizing both hardware and software engineering.

## Description

The solution of the Display Module reflects my expertise in both hardware and software engineering, and it encapsulates my commitment to crafting efficient and practical innovations. A core element of the Display Module is the utilization of two dedicated microcontrollers. The first microcontroller, adept in LTE connectivity, establishes and maintains a robust link with the web application through the use of the MQTT protocol and a MQTT broker on the server. The second microcontroller, powered by the FreeRTOS operating system, is a multitasking marvel, efficiently managing multiple threads. This combination optimizes performance, making it an indispensable component for complex functions such as display management, image downloads, and interaction with the LTE microcontroller.

**Efficient Communication**

The LTE microcontroller plays a pivotal role in ensuring seamless internet connectivity. This cellular connection forms the bridge for communication with the web application, facilitating data exchange and responsive functionality. The incorporation of an SPI connection enhances data transfer between microcontrollers, streamlining communication and increasing overall system responsiveness.

![Image](/assets/images/ParkingSign/cellularflow.png)

**Multi-Threaded Control**

Driving the sign's display is the task of the second microcontroller, operating within the FreeRTOS environment. This component is a master multitasker, efficiently handling the display of parking signs, image downloads, and constant communication with the LTE microcontroller. This adaptability is pivotal in ensuring the device's ability to cater to a diverse range of parking scenarios.

**From Prototype to PCB Design**

The journey of the Display Module began with a prototype. At its inception, we created a working prototype by integrating two development boards into a breadboard. Specifically, we used Microchip's AVR-IoT Cellular Mini, equipped with the AVR128DB48 microcontroller and GM02S cellular modem for LTE connectivity, alongside the STM32M4 Mini development board for display management and RTOS implementation. This early prototype phase allowed us to validate and fine-tune crucial features.

![Image](/assets/images/ParkingSign/prototype.jpg)

As the prototype succeeded in driving the display and connecting with the web-application, I designed a development board carrier to reduce the wiring clutter during testing while I worked on a more compact and efficient design.

![Image](/assets/images/ParkingSign/protoBoard.jpg)

The development boards were transformed into a single PCB design, seamlessly integrating the AVR128DB48 microcontroller, GM02S cellular modem, and STM32M4 Mini into a unified unit, which is now the Display Module.

![Image](/assets/images/ParkingSign/pcb.png)

![Image](/assets/images/ParkingSign/pcbFront.png)

This transition from prototype to a streamlined PCB design underscores my engineering capabilities, demonstrating an aptitude for complex design management, integration optimization, and an ability to bring innovations from concept to practical applications.

In my portfolio, the Display Module stands as a testament to my proficiency in both hardware and software engineering. It embodies a commitment to technological advancement and user-centric solutions. This innovation is not just about advancing technology; it's about making technology work efficiently and seamlessly for the end-users and meeting the needs of modern parking management.