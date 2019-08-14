const fs = require('fs');

const http = require('http');

const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      console.log('File reading failed');
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen('8080', () => console.log('Server started successfully'));
