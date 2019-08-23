const mongo = require("mongoose");

const userScheme = new mongo.Schema({

    nombre: {type: String},
    area : {type: String},
    edad: {type: String},
    precio: {type: String},

});

module.exports = mongo.model("User", userScheme);
