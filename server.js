const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer();

server.on("request", (request, response) => {
  fs.writeFile("hello-world.txt", "Hello to this great world", err => {
    if (err) {
      return console.log(`You have an error: ${err}`);
    }
  });
  fs.readFile('hello-world.txt', 'utf8', (err, data) => {
    if (err) throw err;
  });
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end();
});

server.listen(port, () => {
  console.log(`Node server is listening on ${port}`);
});
