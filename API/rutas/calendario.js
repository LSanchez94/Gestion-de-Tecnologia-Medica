const express = require('express');
const router = express.Router();
const {Calendario} = require('../modelos/calendario');

//TRAE DATOS DEL DIA QUE ESTAMOS CONSULTANDO
 router.post('/fechas', (req,res) => {
    Calendario.find({anio: req.body.anio}).then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)   
    })
})


router.post('/addMtto', (req,res) => {
    console.log(req.body.name)
    AgregarMtto.create({
        serie: req.body.serie,
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