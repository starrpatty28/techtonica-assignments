//The entry point for our server. We’ll require the express module, built in bodyParser middlware, and set our app and port variables

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
