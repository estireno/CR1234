const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (reg, res) => {
    res.sendFile(__dirname + '/index.html')
})

const PORT = 3000

app.listen(3000, () => {
    console.log('Server started: http://localhost:' + PORT)
})