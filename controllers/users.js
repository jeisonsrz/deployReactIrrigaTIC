const userModel = require("../models/user");

module.exports = {
    allUsers: async(req,res) =>{
        try{
            const users = await userModel.find();
            res.send(users);
        } catch(error){
            res.status(500).send({msg:"OCurrio un error en el servidor"})

        }
    },

    createUser: async(req,res) =>{
        try{const usuario =req.body;
            console.log(req.body);
            const user = await userModel.create(usuario);
            res.status(201).send(user);
        } catch(error){
           console.log(error)

        }
    },

    updateUser: async(req,res) =>{
        try{
            const{id} = req.body;
            const entrada = req.body;
            const userUpdate = await userModel.findOneAndUpdate({_id: id}, entrada);
            res.send(userUpdate);
        } catch(error){
            res.status(500)
            .send({msg:"El ususrio no se puede crear,oCURRIO UN ERROR EN EL SERVER"})

        }
    },

    deleteUser: async(req,res) =>{
        try{
            const{id} = req.body;
            const entrada = req.body;
            const userDelete = await userModel.findOneAndDelete({_id: id}, entrada);
            res.send(userDelete);
            console.log(req.body);
        } catch(error){
            res.status(500)
            .send({msg:"El ususrio no se puede ELIMINAR,oCURRIO UN ERROR EN EL SERVER"})

        }
    },



}