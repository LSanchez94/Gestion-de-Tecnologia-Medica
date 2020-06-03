
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
        this.mes = day;
        this.traerFechas()
        // const dayprev= date.getDate()
        // const daycorr= date.getDate()
        // const daytar=date.getDate()
        // return (daycap == 10 ? 'table-warning' : ''
        return [day == 10 ? 'table-warning' : '', day == 15 ? 'table-info' : '' ]
      },
      // dateClass(ymd,date){
      //   const dayprev= date.getDate()
      //   return dayprev == 15 ? 'table-info' : ''
      // },

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
      axios.post(this.$store.state.url + '/calendario/fechas', {'mes': this.mes}).then(response => {
        console.log(response.data)
        })
}},
mounted(){
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
  margin-top:10px;
}

#Linkmtto{
  margin-top:50px;
}

#Linkcap{
  margin-top:50px;
  margin-left:30px;
}
</style>
