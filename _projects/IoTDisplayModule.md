---
layout: project
title: IoT Display Module
shortTitle: IoT Display Module
category: Electrical
permalink: /portfolio/IoTDisplayModule
year: 5
finished: false
---


# {{ page.title }}

`AWS` `LTE` `MQTT` `LoRaWAN` `NodeJS` `Altium` `PCB Design` 


## Summary

The main point of the project was to create an innovative digital parking sign that dynamically adjusts its display based on real-time data. This sign can receive updates on an hourly schedule or respond to feedback from sensors, providing flexibility and adaptability. The project demonstrated strong leadership in overseeing the entire lifecycle, from conception to deployment, and employed robust engineering and wireless technologies to establish a seamless and secure connection between the sign and a web application.

## Description

The five-person team collaborated closely with a client to successfully conceptualize, design, and develop an innovative digital parking sign that dynamically adjusts its display based on real-time data.

The parking sign’s display can be updated through an hourly schedule or by feedback from sensors, providing utmost flexibility and adaptability. The team oversaw the entire project lifecycle, from requirements gathering and system architecture design to prototype development, and thorough testing.

![Image](/assets/images/IoTParkingSign/sign.png)

Throughout the process, the focus remained on ensuring the sign’s capability to receive updates down to the minute or respond to sensor feedback, enhancing its effectiveness in serving users.

I developed a robust web application from inception, showcasing expertise in engineering and wireless technologies to establish a seamless and secure wireless connection between the digital parking sign and the application.

The wireless connectivity ensures swift communication between the sign and the application, enabling timely updates based on scheduled intervals or sensor-driven data.

I employed AWS for efficient server hosting, management, and integration, while implementing MQTT protocol over an LTE connection for reliable device communication. This strategic use of technology allowed the digital parking sign to stay constantly connected, receiving updates regularly through the scheduled minute intervals or in response to sensor input, thus optimizing its functionality.

## Overview

![Image](/assets/images/IoTParkingSign/overview.png)

## Web Application

The `web-app` was designed to allow an administrative user to make configurations to the sign remotely and without needing to disasemble the device. The application requires authentication credentials to login and once logged in the admin is able to add new devices, create new display changes in the schedule, or upload new images to the devices.

## Controller

A controller PCB was designed for connecting to the `web-app` and driving the display. The screenshot below shows the PCB during its design.

![Image](/assets/images/IoTParkingSign/pcb.png)

![Image](/assets/images/IoTParkingSign/pcbFront.png)

![Image](/assets/images/IoTParkingSign/pcbBack.png)

### Cellular Module

The `cellular module` is responsible for acting on commands from the `web-app` and sending them to the `display driver`, this module is essentially the brain for the display.

![Image](/assets/images/IoTParkingSign/cellularflow.png)

### Display Driver

The flow diagram for the `display driver` is omitted due to its simplicity. The display driver receives data from the cellular module through a SPI connection and acts accordingly. 