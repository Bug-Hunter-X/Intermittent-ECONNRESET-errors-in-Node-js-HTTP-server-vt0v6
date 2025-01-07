const http = require('http');

const requestListener = (request, response) => {
  request.on('error', (err) => {
    console.error('Request error:', err);
    response.writeHead(500);
    response.end();
  });
  response.on('error', (err) => {
    console.error('Response error:', err);
  });
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});