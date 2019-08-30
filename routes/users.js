const userController = require("../controllers/users");

module.exports = (app) =>{
    app.get("/api/",(req,res)=>{
        res.send("Mi servidor en EXPRESS Y MONGO =P");
    });
    app.get("/api/usuarios", userController.allUsers);
    app.post("/api/usuario", userController.createUser);
    app.post("/api/updateusuario", userController.updateUser);
    app.post("/api/borrarusuario", userController.deleteUser);
}