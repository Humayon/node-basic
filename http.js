const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('<h1>Hello from node server</h1>');
});

server.listen(8080, () => {
  console.log('server started successfully');
});
