const express = require('express')
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
    credentials: true,
    origin: '*',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH', 'OPTIONS']
}));
app.options('*', cors());

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use('/uploads', express.static('uploads'));

if(process.env.NODE_ENV !== 'production'){
    const morgan = require('morgan')
    app.use(morgan('combined'))
}

//assign routes here....

app.use(function (req, res, next) {
    res.status(404);
    // respond with html page
    return res.status(404).json({
        status: 404,
        message: 'API NOT FOUND! Please check the endpoint and the HTTP request type! or contact at sanjay',
        data: {
            url: req.url
        }
    });
});

module.exports = app;
