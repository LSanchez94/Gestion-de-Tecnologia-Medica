const express = require('express');
const router = express.Router();
const {Dispositivo} = require('../modelos/dispositivos');


//TRAE TODOS LOS DISPOSITIVOS
router.get('/getDevices', (req,res) => {
    Dispositivo.find().then(response => {
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

//INSERTAR DISPOSITIVOS
router.post('/addDevice', (req,res) => {
    console.log("entre")
    Dispositivo.create({
    nserie:req.body.nserie, 
    marca:req.body.marca,
    modelo:req.body.modelo,
    departamento:req.body.departamento,
    estadofuncional:req.body.estadofuncional,
    fechadeadquisicion:req.body.fechadeadquisicion,
    garantia:req.body.garantia,
    mantenimientosrealizado:req.body.mantenimientosrealizado,
        
    }, err => {
        console.log("error")
        console.log(err)
        if(!err){
            res.send("Dispositivo Agregado!")
        }else{
            res.send("Hubo un problema, agregando el dispositivo")
        }
    })
});

module.exports = router;