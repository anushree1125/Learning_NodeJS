// CREATING NODE SERVER

const http = require("http");
const { serialize } = require("v8");

// runs for every request from client
// function rqListener(req, res) {}
// http.createServer(rqListener);

// Using anonymous function
// http.createServer(function (req, res) {});

// Using arrow function: callback function
const server = http.createServer((req, res) => {
  console.log(req);
});
// to run type [node app.js] in terminal

server.listen(3000); // looping process keeps on listening for requests
//open localhost:3000 on browser - check your terminal
//request is logged into console
//runs on port 80 by default in real development
