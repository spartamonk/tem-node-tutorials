//http - built in module for servers
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to my first Server Homepage')
    return res.end()
  }
  if (req.url === '/about') {
    return res.end('About page for my first Server')
  }
  return res.end(`
<h1>Oops!</h1>
<p>The page you are looking for does not exist</p>
<a href='/'>Back to home</a>
`)
})

server.listen(5000)
