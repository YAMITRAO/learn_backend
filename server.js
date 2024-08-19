const http = require('http');
const routeHandler = require('./routes')


const server = http.createServer( routeHandler.handler)

server.listen(3000);