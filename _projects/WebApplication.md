---
layout: project
title: Web Application for Configuring IoT Devices
shortTitle: IoT Web Application
category: Full-Stack Development
permalink: /portfolio/WebApplication
year: 4
---


# {{ page.title }}

`AWS` `LTE` `MQTT` `API` `LoRaWAN` `NodeJS`

*{{ page.category }}*

## Summary

In this transformative project, I ventured into the world of full-stack development to create a web application for wireless device management. Despite having no prior experience in web development, I took on the dual role of a front-end and back-end developer. On the front-end, I focused on designing a responsive and user-friendly interface, while simultaneously, I worked on the back-end, managing server-side logic, data storage, and communication with wireless devices. This comprehensive approach not only met the client's requirements but also broadened my knowledge and expertise within this field, highlighting the importance of adaptability in the ever-evolving realm of web applications and device control. The interface is designed to run on AWS servers, chosen based on operating system compatibility and scalability considerations. To ensure security, user authentication is required before configuring devices. Users can make real-time configurations and create precise hourly schedules, and the interface is responsive for mobile devices. Communication with devices occurs through LTE and USB connections for flexibility. The system utilizes the NodeJS runtime environment with Express.js and MQTT protocol for real-time communication.

## Description

The web application for this project serves as a control interface for multiple wireless devices, prioritizing ease of use and accessibility. The choice of a web-based interface over other remote control methods aligns with the client's preference for a readily available computer interface without the need for new remote-control hardware. The web app is designed to run on Amazon Web Service (AWS) servers and its runtime environment is chosen based on operating system compatibility and scalability. 

To ensure security and access control, user authentication is implemented before device configuration is allowed. Users can make real-time configurations and create hourly schedules for device actions via the web app, with responsive design adjustments to cater to mobile device users. Communication between devices and the web app is facilitated through both LTE and USB connections, enhancing flexibility and usability.

Under the hood, the web app is built using the NodeJS runtime environment with the Express.js framework, running on AWS servers. It leverages MQTT protocol for real-time machine-to-machine communication and employs SQLite for scheduling functionality with persistent data storage. Furthermore, the web app adapts its user interface to fit various screen sizes when accessed via mobile devices, ensuring a seamless user experience.

### API

The web application extends its functionality by exposing an Application Programming Interface (API) for uploading images directly to the devices it controls. This API allows users to seamlessly transmit images from their local storage or external sources to the targeted devices, enhancing the versatility of the control interface. By providing this feature, the web application not only streamlines the configuration process but also opens up possibilities for integrating image-related tasks into the device's operations, enriching its capabilities and usability for a wide range of applications. Through this API, users can harness the power of images to enhance their device interactions, ultimately contributing to a more comprehensive and user-friendly control experience.

### Software Flow

![Image](/assets/images/IoTParkingSign/webappflow.png)

### Login

At the login screen of the web application, user credentials are a mandatory requirement for access. Users must provide a valid username and password combination to authenticate and gain entry into the system. This essential security measure ensures that only authorized individuals with the correct login credentials can access and interact with the application's features and functionalities, safeguarding sensitive information and maintaining data integrity.

![Image](/assets/images/IoTParkingSign/login.png)

### Dashboard

The dashboard of the web application empowers administrative users with the ability to effectively monitor and manage connected devices. Through this interface, administrators can gain real-time insights into device statuses, configurations, and operational data. 

![Image](/assets/images/IoTParkingSign/dashboard.png)

### Schedule

The schedule page offers users the flexibility to create precise daily schedules down to the minute, providing fine-grained control over device operations. Users can define specific time intervals and actions, enabling automated and granular device configurations to suit their needs and preferences with precision and convenience.

![Image](/assets/images/IoTParkingSign/schedule.png)

### Manage

The manage page simplifies device management by enabling users to create devices and seamlessly pair them with active controllers. Furthermore, this process ensures that the connected controllers are automatically updated and reflected in the controllers list, simplifying the user experience and facilitating efficient device-controller associations.

![Image](/assets/images/IoTParkingSign/devices.png)

### Gallery

The gallery page offers users the capability to upload images to the server for synchronization with devices, enhancing the versatility of the control interface. Users can conveniently upload images from either their computer or mobile device, making it effortless to integrate visual content into device configurations and interactions, enriching the overall user experience.

![Image](/assets/images/IoTParkingSign/gallery.png)

This project has been a transformative experience for me as it provided the opportunity to delve into web application development from the ground up. Prior to this endeavor, I had never ventured into the realm of web applications, and it proved to be a truly rewarding journey. Learning how to design, build, and secure a web-based control interface, especially in the context of managing multiple wireless devices, was a significant challenge. 

What made the experience even more valuable was the opportunity to work with various communication protocols, including MQTT over LTE. Integrating these protocols into the application added a layer of complexity and real-world relevance. It exposed me to the intricacies of IoT (Internet of Things) and allowed me to understand the practical considerations in designing web applications for seamless communication with remote devices.

In retrospect, this project not only met the client's requirements but also significantly broadened my knowledge and skill set. It's been a rewarding journey that highlighted the importance of continuous learning and adaptability in the ever-evolving world of web applications and IoT technologies.