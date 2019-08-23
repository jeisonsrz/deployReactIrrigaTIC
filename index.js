const express = require("express");

const bodyParser = require("body-parser");

const mongo = require("./db/connectionMongo");
const passport = require('passport');

const app = express();

var cors = require('express-cors')
app.use(cors({
   allowedOrigins: [
       'http://localhost:3000',
   ]
}))

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const routeUsers = require("./routes/users")(app);

mongo.conectar(app); 


const users = require('./routes/user'); 

app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});