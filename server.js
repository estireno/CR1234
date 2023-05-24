//starting server
const http = require("http")

let server = http.createServer((reg, res) => {
    res.writeHead(200, {"Content-Type": 'text/plain; charset=utf8'})
    res.end('Hello')
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log('Сервер запущен: http://' + HOST + ":" + PORT)
})