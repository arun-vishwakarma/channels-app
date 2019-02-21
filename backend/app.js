const express = require('express');
const app = express();
app.use(express.json()); //json parser

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");    
    //res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

const channels = require('./routes/channelRoutes');
app.use('/api', channels);

module.exports = app;