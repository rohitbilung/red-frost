const express = require('express');
const http = require('http');
require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 5000;
const cors = require('cors')

require('./config/dbConnect')

app.use(cors());
app.options('*', cors());

app.set('Access-Control-Allow-Origin', '*');

let server = http.createServer(app)

server.listen(port , ()=>{
    console.log(`server started on port ${port}`)
})