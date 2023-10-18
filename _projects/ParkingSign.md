---
layout: project
title: Standalone IoT Digital Parking Sign
shortTitle: IoT Parking Sign
category: Electrical System Design
permalink: /portfolio/ParkingSign
year: 4
finished: false
---


# {{ page.title }}

`AWS` `LTE` `MQTT` `LoRaWAN` `NodeJS` `Altium` `PCB Design` 

*{{ page.category }}*

## Brief

***This project is broken into several components, those of which I took on the lead responsiblity for can be found here:***
- **[Display Module](/portfolio/IoTDisplayModule)**
- **[Web Application](/portfolio/WebApplication)**

## Summary

The main point of the project was to create an innovative digital parking sign that dynamically adjusts its display based on real-time data. Unlike a physical parking sign, this digital sign features an LCD display that can be changed dynamically to present different parking signs throughout the day. This sign can receive updates through a schedule, receive uploaded images, or respond to feedback from sensors, providing flexibility and adaptability. The project demonstrated strong leadership in overseeing the entire lifecycle, from conception to deployment, and employed robust engineering and wireless technologies to establish a seamless and secure connection between the sign and a web application.

## Description

Within a five-person team, I collaborated closely with a client to successfully conceptualize, design, and develop an innovative digital parking sign that dynamically adjusts its display based on real-time data.

The parking sign’s display can be updated through a schedule or by feedback from sensors, providing utmost flexibility and adaptability. The team oversaw the entire project lifecycle, from requirements gathering and system architecture design to prototype development, and thorough testing.

![Image](/assets/images/ParkingSign/sign.png)

Throughout the process, the focus remained on ensuring the sign’s capability to receive updates down to the minute or respond to sensor feedback, enhancing its effectiveness in serving users.

I developed a robust web application from inception, showcasing expertise in engineering and wireless technologies to establish a seamless and secure wireless connection between the digital parking sign and the application.

The wireless connectivity ensures swift communication between the sign and the application, enabling timely updates based on scheduled intervals or sensor-driven data.

I employed AWS for efficient server hosting, management, and integration, while implementing MQTT protocol over an LTE connection for reliable device communication. This strategic use of technology allowed the digital parking sign to stay constantly connected, receiving updates regularly through the scheduled minute intervals or in response to sensor input, thus optimizing its functionality.

## Overview

![Image](/assets/images/ParkingSign/overview.png)

## Web Application

The `web-app` was designed to allow an administrative user to make configurations to the sign remotely and without needing to disasemble the device. The application requires authentication credentials to login and once logged in the admin is able to add new devices, create new display changes in the schedule, or upload new images to the devices.

## Controller

A controller PCB was designed for connecting to the `web-app` and driving the display. The screenshot below shows the PCB during its design.

### Cellular Module

The `cellular module` is responsible for acting on commands from the `web-app` and sending them to the `display driver`, this module is essentially the brain for the display.

### Display Driver

The flow diagram for the `display driver` is omitted due to its simplicity. The display driver receives data from the cellular module through a SPI connection and acts accordingly. 