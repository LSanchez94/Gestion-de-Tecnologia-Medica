const express = require('express');
const router = express.Router();
const {AddProveedor} = require('../modelos/AgregarProveedor');


//TRAE TODOS LOS USUARIOS
router.get('/getDatos', (req,res) => {
    AddProveedor.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})

//Datos del proveedor
router.post('/addDatos', (req,res) => {
    console.log(req.body.name)
    AddProveedor.create({
        nameE: req.body.nameE,
        nameC: req.body.nameC,
        email: req.body.email,
        dir: req.body.dir,
        tel: req.body.tel
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