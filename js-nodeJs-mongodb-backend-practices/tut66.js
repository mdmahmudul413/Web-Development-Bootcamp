// Serving HTML Files using NodeJs

const http = require("http");
const fs = require("fs");
let text = fs.readFileSync("tut61.html");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(text);
});

server.listen(80, '127.0.0.1', () => {
    console.log(`Listening on port http://${'127.0.0.1'}`);
});