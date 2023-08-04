
# Undergoing Development and testing, please come back later

<!-- <div style="text-align: center;">
  <img src="/public/images/ubclogo2.png" style="width: 50%; padding-top: 10px; padding-bottom: 10px;" />
</div> -->

The following is placeholder:

A web application created using `node.js` and the `express` framework
utilizing the `Pug` (formerly named `Jade`) view engine for markup. The application also incorporates an SQLite database for scaleability.

## To start the application locally
- open a linux-based terminal and enter the command: 
```
npm start
```
npm stands for node package manager

#### To view the local running instance of the web application
- open a web browser on the current device and go to:
```
http://localhost:<port-number> 
```

Where port number is 3000 by default, this can be changed at the top of the server.js file
```javascript
const port = 3000
```