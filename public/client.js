/*
client.js

Author: Nikolas Martelaro (nmartelaro@gmail.com)

Purpose: This run the interactivity and communication for the web app. This file
is served to the users web browser and executes on the browser.

Usage: This file is called automatically when the webpage is served.
*/

// WebSocket connection setup
var socket = io();

// send out LedOn message over socket
function ledON() {
  socket.emit('ledON');
}

// send out ledOFF message over socket
function ledOFF() {
  socket.emit('ledOFF');
}

//--addition forward the take a picture command to the web server.
function takePicture(){
  socket.emit('takePicture');
}

//--addition in this function we received the new image name and apply it to html element.

socket.on('newPicture', function(msg) {
  document.getElementById('pictureContainer').src=msg;
});
// read the data from the message that the server sent and change the
// background of the webpage based on the data in the message
socket.on('server-msg', function(msg) {
  msg = msg.toString();
  console.log('msg:', msg);
  switch (msg) {
    case "light":
      document.body.style.backgroundColor = "white";
      console.log("white")
      break;
    case "dark":
      document.body.style.backgroundColor = "black";
      console.log("black");
      break;
    default:
      //console.log("somthing else");
      break;
  }
});
