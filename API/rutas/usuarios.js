const express = require('express');
const router = express.Router();
const {Usuarios} = require('../modelos/usuarios');


//TRAE TODOS LOS USUARIOS
router.get('/getUsers', (req,res) => {
    Usuarios.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})


//TRAE USUARIO SOLICITADO
router.post('/Validate', (req,res) => {
    Usuarios.find({ correo: req.body.email}).then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })  
})

//INSERTA USUARIO
router.post('/addUser', (req,res) => {
    console.log(req.body.name)
    Usuarios.create({
        name: req.body.name,
        correo: req.body.correo,
        password: req.body.password,
        perfil: req.body.perfil
    }, err => {
        console.log(err)
        if(!err){
            res.send("Usuario Agregado!")
        }else{
            res.send("Hubo un problema, agregando al usuario")
        }
    })
});

module.exports = router;