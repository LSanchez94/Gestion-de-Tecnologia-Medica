
<template>
  <div class="container-fluid">
    <div class="row">
      <b-calendar 
      v-model="value" :date-info-fn="dateClass"
      block locale="es"
      selected-variant="info"
      class="calendar"
      ></b-calendar>
    </div>
  
    <router-link to="/AgregarMtto" class="btn" id="Linkmtto">Agregar Mantenimiento</router-link>
    <router-link to="/Capacitacion" class="btn" id="Linkcap">Agregar Capacitación</router-link>
    <router-link to="/Tarea" class="btn" id="Linktarea">Agregar Tarea</router-link>
    <router-link to="/ShowCap" class="btn" id="linkcaps">Capacitaciones Agendadas</router-link>
    <router-link to="/STareaShow" class="btn" id="linktr">Tareas Agendadas</router-link>
    <router-link to="/MttoShow" class="btn" id="linkmt">Mantenimientos Agendados</router-link>
  <button class="btn" id="Regresar" onClick="history.go(-1);">REGRESAR</button>
  
  </div>
 
</template>


<script>
import axios from "axios";
export default {
  data() {
      return {
        mes: null,
        value:'',
        dcapa: [],
        globalMonth: null,
        capacitacion: {
          tema:"",
          departamento: "",
          descripcion: "",
          fecha: "",
          persona: "",
        }, 
        capacitaciones:[],
        numerocapacitaciones: 0,
      };
  },
  methods: {
    //funcion que le da el color al día dependiendo del tipo de dato traido, 
    //el tipo de dato se trae directamente de la colección, donde al dar de alta un 
    // mtto, tarea, capacitación, se guardan fechas en coleccion de calendarios con el tipo 
    //  1: Capacitación 2: Mantenimiento 3: Tareas 
    // Las fechas se separan con splits (dentro de la coleccion de cada una) y se guardan en las varibales año y mes 
    // de forma normal, sin embargo al llegar a la variable dia, los caracteres anteriores se suman con la finalidad de 
    //crear un numero unico y que el calendario no se confunda
    //Ejemplo: yo tengo capacitacion el dia 01-02-2020, mi calendario guardará lo soguiente:
    // año: 2020, mes: 02, dia:0122020 , tipo:1
    //Despues en la funcion de abajo se crea del mismo modo un dia con la información del calendario
    //se realiza la comparacion de numeros y si en alguno coincide el día del evento con el dia del calendario
    //dependiendo del tipo de este, se guardará un color en el calendario

    dateClass(ymd, date) {
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        var unico = day+'' + month+'' + year;

        const found = this.dcapa.find(element => element.dia ==  unico);
        // console.log(found)
        if(found != undefined){
          if(found.tipo == '1'){
            return 'table-warning'
          } else if(found.tipo == '2'){
            return 'table-success'
          } else if(found.tipo == '3'){
            return 'table-info'
          } 
        } 
        else {
          return ''
        }
      },
    traerCapacitacion() {
      axios
        .get("http://localhost:3000/Capacitacion/getEventData")
        .then(response => {
          this.capacitaciones = response.data;
          this.numerocapacitaciones = response.data.length;
        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    },
    
    traerFechas(){
      // console.log(d,m,a)
      axios.post(this.$store.state.url + '/calendario/fechas', {anio : '2020'}).then(response => {
          this.dcapa = response.data;
      })
}},
created(){
},
mounted(){
    this.traerFechas();

    this.traerCapacitacion();
}
};  
</script>


<style scoped>
.calendar{
  color:#005082;
  margin-left: 100px;
  margin-top:50px;
  width:700px;
}

.row{
  width: 2000px;
}

.btn{
  color:#FFFF;
  background: #00a8cc;
  margin-left: 120px;
  border: 25px;
  width:300px;
}
#Linktarea{
  position: absolute;
  margin-top:100px;
  left:500px;

}

#Linkmtto{
  margin-top:50px;
  background-color:#6AB868;
}

#Linkcap{
  margin-top:50px;
  margin-left:30px;
  background-color:#FAE88D;
}

#linkcaps{
  position: absolute;
  top:300px;
  left:1050px;
  background-color:#FAE88D;
}

#linktr{
  position: absolute;
  top:250px;
  left:1050px;
}

#linkmt{
  position: absolute;
  top:350px;
  left:1050px;
  background-color:#6AB868;
}

#Regresar{
    margin-left: 900px;
    margin-top: 100px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:1.6m;
}
</style>
