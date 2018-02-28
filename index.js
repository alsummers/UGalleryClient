require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http').Server(app)

app.use(express.static(`${__dirname}/build/static`)) //express uses static build


app.use('/', (req,res) => {
    res.send(`${__dirname}/build/index.html`) // makes build folder
})

http.listen(process.env.PORT, () => {
    console.log(`web is running on port ${process.env.PORT}`)
})