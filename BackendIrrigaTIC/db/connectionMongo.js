const mongo= require("mongoose");

mongo.Promise = global.Promise;

module.exports = {
    conectar: async (app) =>{

        await mongo.connect("mongodb://localhost/bootcamp",
        {useNewUrlParser:true});
        app.listen(5000,()=>{
            console.log("Concectamos mongo y el sevidor nodeJS");
        });

    }
}