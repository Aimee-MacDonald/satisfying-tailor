var express = require("express");
var app = express();
var portNumber = 8000;

app.get("/", function(req, res){
  var userIP = req.ips;
  var userLang = req.headers["accept-language"];
  var userOS = req.headers["user-agent"];

  var respac = {
    ipaddress: userIP,
    language: userLang,
    software: userOS
  };

  res.status(200).send(respac);
});

app.listen(portNumber, function(){
  console.log("Server Listening on Port: " + portNumber);
});
