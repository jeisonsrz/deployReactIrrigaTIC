const express = require("express");
var path = require('path');
const bodyParser = require("body-parser");

const mongo = require("./db/connectionMongo");
const passport = require('passport');

const app = express();

var cors = require('express-cors')
app.use(cors({
 allowedOrigins: [
      'http://localhost:8081',
   ]
}));

app.use((req,res,next) =>{
res.header("Access-Control-Allow-Origin","*");
res.header(
    "Access-Control-Alow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
);
next();
});
//app.use(express.static("."));
app.use(express.static(__dirname + "/public"));
//app.use(express.static(__dirname +'/public'));
//app.use(express.static(path.join(__dirname,"public")));
//app.use('/assets', express.static(path.join(__dirname, "../assets")));


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const routeUsers = require("./routes/users")(app);




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
mongo.conectar(app); 
