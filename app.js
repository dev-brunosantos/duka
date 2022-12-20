const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/produtos', (req, res)=>{
    res.sendFile(__dirname+'/public/produtos/')
})

module.exports = app;