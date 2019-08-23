const userController = require("../controllers/users");

module.exports = (app) =>{
    app.get("/",(req,res)=>{
        res.send("Mi servidor en EXPRESS Y MONGO =P");
    });
    app.get("/usuarios", userController.allUsers);
    app.post("/usuario", userController.createUser);
    app.post("/updateusuario", userController.updateUser);
    app.post("/borrarusuario", userController.deleteUser);
}