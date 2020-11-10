const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    router = require('./routes'),
    getNotFoundRoute = require('./utils/getNotFoundRouteInfo');

// enable CORS
app.use(cors());
// parse the body of the response
app.use(bodyParser.json());

app.use('/api', router);
app.use(getNotFoundRoute);

module.exports = app;