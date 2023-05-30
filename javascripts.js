const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (reg, res) => {
    res.render('index')
})

app.get('/addpage', (reg, res) => {
    res.sendFile(__dirname + '/addpage.html')
})

app.get('/calcpage', (reg, res) => {
    res.sendFile(__dirname + '/calcpage.html')
})

const PORT = 3000

app.listen(3000, () => {
    console.log('Server started: http://localhost:' + PORT)
})