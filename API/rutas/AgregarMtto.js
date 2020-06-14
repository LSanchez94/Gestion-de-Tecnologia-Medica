const express = require('express');
const router = express.Router();
const {AgregarMtto} = require('../modelos/AgregarMtto');

//TRAE DATOS DEL MTTO
router.get('/getMtto', (req,res) => {
    AgregarMtto.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})

//INSERTA DATO
router.post('/addMtto', (req,res) => {
    console.log(req.body.nserie)
    AgregarMtto.create({
        nserie: req.body.nserie,
        departamento: req.body.departamento,
        tipomantenimientos: req.body.tipomantenimientos,
        fechamantenimientos: req.body.fechamantenimientos,
        encargado: req.body.encargado,
    }, err => {
        console.log(err)
        if(!err){
            res.send("Se agrego un nuevo mantenimiento")
        }else{
            res.send("Hubo un problema agregando el mantenimiento")
        }
    })
});

module.exports = router;