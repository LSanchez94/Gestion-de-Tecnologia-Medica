const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

var app = express();
app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const { mongoose } = require('./db/db-connect');
const usuarios = require('./rutas/usuarios')
const reportes = require('./rutas/reportes')
const capacitacion= require('./rutas/Capacitacion')
const dispositivos= require("./rutas/dispositivos")
const tareas= require('./rutas/tareas');
const AgregarProveedor= require("./rutas/AgregarProveedor")
const agregarmtto= require("./rutas/AgregarMtto")
const calendario= require("./rutas/calendario")
const Refacciones= require("./rutas/Refacciones")

app.use('/Usuarios', usuarios);
app.use('/Reportes', reportes);
app.use('/Capacitacion', capacitacion);
app.use("/Dispositivo", dispositivos);
app.use("/AgregarProveedor", AgregarProveedor)
app.use('/Tareas', tareas);
app.use('/AgregarMtto', agregarmtto);
app.use('/calendario', calendario);
app.use('/Refacciones', Refacciones);

app.get('/', (req,res) => {
    res.send('HOLO')
})

app.listen(port, () =>{
    console.log('Me inicie bien en el puerto 3000');
})

