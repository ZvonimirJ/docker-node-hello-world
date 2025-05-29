var http = require('http')
var os = require('os')

var port = 8080

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello from ' + os.hostname() + '\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
