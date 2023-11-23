const express = require('express')
const app = express()
const port = 8080

app.get('/python', (req, res) => {
    res.send('{"date" : "1991.2.20", "difficulty":"easy"}')
})

app.get('/C', (req, res) => {
    res.send('{"date" : "1972", "difficulty":"normal"}')
})

app.get('/C#', (req, res) => {
    res.send('{"date" : "2002.12", "difficulty":"hard"}')
})

app.get('/java', (req, res) => {
    res.send('{"date" : "1995.5.23", "difficulty":"hard"}')
})

app.get('/javascript', (req, res) => {
    res.send('{"date" : "1996.3", "difficulty":"easy"}')
})

app.get('/typescript', (req, res) => {
    res.send('{"date" : "2012.10.1", "difficulty":"easy"}')
})

app.get('/lua', (req, res) => {
    res.send('{"date" : "1993", "difficulty":"easy"}') 
})

app.get('/php', (req, res) => {
    res.send('{"date" : "1995.6.8", "difficulty":"hard"}')
})

app.listen(port, () => {
    console.log('sssssss')
})