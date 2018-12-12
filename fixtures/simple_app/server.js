const http = require('http')
const port = process.env.PORT || 8080
const nodejs_version = process.version

const requestHandler = (request, response) => {
  console.log("NodeV: ", nodejs_version)
  response.end(`NodeVersion:`, nodejs_version)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
