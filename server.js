const { log } = require('console')
const http = require('http')
const server = http.createServer()
let porta = 8080

server.listen(porta,'localhost', () => {
    console.log(`Server de pe na localhost://localhost:${porta}`)
    console.log("Para desabilitar o server precione ctrl + c")
})







