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
//Tell the route to look for GET request on root URL and return some JSON
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, and Postgres API'})
})

//Set the app to listen on the port we set
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})