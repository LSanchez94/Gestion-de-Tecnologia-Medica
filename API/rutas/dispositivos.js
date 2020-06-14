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



//INSERTAR DISPOSITIVOS
router.post('/addDevice', (req,res) => {
    console.log("entre")
    Dispositivo.create({
    nombre:req.body.nombre, 
    marca:req.body.marca,
    modelo:req.body.modelo,
    departamento:req.body.departamento,
    nserie:req.body.nserie,
    adq:req.body.adq,
    garantia:req.body.garantia,
    edofuncional:req.body.edofuncional,
    mttoprev:req.body.mttoprev,
    
    }, err => {
        console.log("error")
        console.log(err)
        if(!err){
            res.send("Dispositivo Agregado!")
        }else{
            res.send("Hubo un problema agregando el dispositivo")
        }
    })
});

// ELIMINA DATO
router.post('/deleteDevice', (req,res) => {
    console.log("test de llegada")
    console.log(req.body.nserie)
    Dispositivo.findOneAndDelete({nserie: req.body.nserie}, err => {
        if(!err){
            res.send("Dispositivo Eliminado!")
        }else{
            res.send("Hubo un problema eliminando el dispositivo")
        }
    })
})
    
module.exports = router;