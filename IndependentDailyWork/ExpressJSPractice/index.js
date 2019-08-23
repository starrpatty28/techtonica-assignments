const express = require("express");
const logger = require("./middleware/logger");
const path = require("path");
const exphbs = require('express-handlebars');
const members = require('./Members');
const { I_LOVE } = require('./config');

console.log("I love ", I_LOVE);



const app = express();

// //Initialize the MiddleWare
// app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Homepage route
app.get('/', (req, res) => res.render('index', {
  title: 'Member App',
  members 
}));


//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
