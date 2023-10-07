// Create web server
// Create a web server that can respond to requests for /time, /author, /html, and /json.
// /time should respond with the current time.
// /author should respond with your name.
// /html should respond with some html that displays an image.
// /json should respond with some json that uses the following format: { "message": "Hello, world!" }
// Use the following code to start your web server:

const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
  if (req.url === '/time') {
    res.end(new Date().toISOString())
  } else if (req.url === '/author') {
    res.end('Jesse Shawl')
  } else if (req.url === '/html') {
    res.end('<html><body><img src="https://i.imgur.com/9s9Z5g7.jpg" /></body></html>')
  } else if (req.url === '/json') {
    res.end(JSON.stringify({ message: 'Hello, world!' }))
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})