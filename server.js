var express = require("express");   // Include Express
var app = express();                // Create App
var portNumber = 8000;              // The port to Listen On

/*
    Example: https://satisfying-tailor.glitch.me/
    Connecting to this URL will Return a JSON Object Containing 3 Properties:
      ipaddress
      language
      software
*/
app.get("/", function(req, res){
  // collecting Data
  var userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var userLang = req.headers["accept-language"];
  var userOS = req.headers["user-agent"];

  // Trimming Data
  userIP = userIP.split(",")[0];
  userLang = userLang.split(",")[0];

  // Create response Package
  var respac = {
    ipaddress: userIP,
    language: userLang,
    software: userOS
  };

  // Return Status 200 and the Response Package
  res.status(200).send(respac);
});

app.listen(portNumber, function(){
  console.log("Server Listening on Port: " + portNumber);
});
