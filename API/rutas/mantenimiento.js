const express = require('express');
const router = express.Router();
const {Dispositivo} = require('../modelos/dispositivos');
const {Mantenimiento} = require('../modelos/mantenimientos');

router.post('/addMantenimiento', (req,res) => {
    console.log(req.body.name)
    Mantenimiento.create({
        posicion: req.body.posicion,
    }, err => {
        console.log(err)
        if(!err){
            res.send(" ")
        }else{
            res.send("Hubo un problema agregando el lugar")
        }
    })
});


router.post('/getDipositivoData', (req,res) => {
    Mantenimiento.find({NumSerie : req.body.nserie}).then(response => {

    })
})


router.get('/getMantenimiento', (req,res) => {
    Mantenimiento.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})


module.exports = router;