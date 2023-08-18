---
layout: project
title: IoT Parking Sign
permalink: /portfolio/IoTParkingSign
---

⚠️ The documentation for this project has been marked as unfinished, please come back soon

# Standalone IoT Digital Parking Sign

`AWS` `LTE` `MQTT` `LoRaWAN` `NodeJS` `Altium` `PCB Design` 


## Summary

The main point of the project was to create an innovative digital parking sign that dynamically adjusts its display based on real-time data. This sign can receive updates on an hourly schedule or respond to feedback from sensors, providing flexibility and adaptability. The project demonstrated strong leadership in overseeing the entire lifecycle, from conception to deployment, and employed robust engineering and wireless technologies to establish a seamless and secure connection between the sign and a web application.

![Image](/assets/images/IoTParkingSign/sign.png)

## Description

Collaborated closely with a client to successfully conceptualize, design, and develop an innovative digital parking sign that dynamically adjusts its display based on real-time data. The parking sign's display can be updated through an hourly schedule or by feedback from sensors, providing utmost flexibility and adaptability. Demonstrated leadership by overseeing the entire project lifecycle, from requirements gathering and system architecture design to prototype development, thorough testing, and final deployment. Throughout the process, the focus remained on ensuring the sign's capability to receive updates on an hourly basis or respond to sensor feedback, enhancing its effectiveness in serving users. Developed a robust web application from inception, showcasing expertise in engineering and wireless technologies to establish a seamless and secure wireless connection between the digital parking sign and the application. The wireless connectivity ensures swift communication between the sign and the application, enabling timely updates based on scheduled intervals or sensor-driven data. Employed AWS for efficient hosting, management, and integration, while implementing MQTT protocol over an LTE connection for reliable device communication. This strategic use of technology allowed the digital parking sign to stay constantly connected, receiving updates regularly through the scheduled hourly intervals or in response to sensor input, thus optimizing its functionality.

## Components

### Web Application

The `web-app` allows an administrative user to login with credentials in order to make changes to the sign through an hourly schedule or to upload new images to the sign.

![Image](/assets/images/IoTParkingSign/webappflow.png)

![Image](/assets/images/IoTParkingSign/login.png)

![Image](/assets/images/IoTParkingSign/dashboard.png)

![Image](/assets/images/IoTParkingSign/schedule.png)

![Image](/assets/images/IoTParkingSign/devices.png)

![Image](/assets/images/IoTParkingSign/gallery.png)

### Cellular Module

The `cellular module` is responsible for acting on commands from the `web-app` and sending them to the `display driver`, this module is essentially the brain for the display.

![Image](/assets/images/IoTParkingSign/cellularflow.png)

### Display Driver

The flow diagram for the `display driver` is omitted due to its simplicity. The display driver receives data from the cellular module through a SPI connection and acts accordingly. 