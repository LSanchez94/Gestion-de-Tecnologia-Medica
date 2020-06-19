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
    console.log(req.body.nombre)
    AddProveedor.create({
        nombre: req.body.nombre,
        contacto: req.body.contacto,
        email: req.body.email,
        address: req.body.address,
        tel: req.body.tel
    }, err => {
        console.log(err)
        if(!err){
            res.send("Proveedor Agregado!")
        }else{
            res.send("Hubo un problema, agregando al prov")
        }
    })
});

// ELIMINA DATO
router.post('/deleteProv', (req,res) => {
    console.log("test de llegada")
    console.log(req.body.nombre)
    AddProveedor.findOneAndDelete({nombre: req.body.nombre}, err => {
        if(!err){
            res.send("Proveedor Eliminado!")
        }else{
            res.send("Hubo un problema eliminando el proveedor")
        }
    })
})



module.exports = router;