const http = require('node:http')

const server = http.createServer((req,res) => {

    res.writeHead(200, {'Content-type': 'application/json' })
    res.end(JSON.stringify({
        data : 'Hello world'
    }))
})

server.listen(3000)