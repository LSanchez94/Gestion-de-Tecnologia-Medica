
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
    //FALTA ESTABLECER LAS FECHAS CON CADA CAPACITACION, MTTO Y TAREA
      //   return dayprev == 15 ? 'table-info' : ''
      //   return daycorr == 20 ? 'table-success' : ''
      //  return daytar == 5 ? 'table-danger' :''

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
        // return dia ? 'table-warning' : '';
        //, day == 15 ? 'table-info' : '' ]
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
}

#Linkcap{
  margin-top:50px;
  margin-left:30px;
}
</style>
