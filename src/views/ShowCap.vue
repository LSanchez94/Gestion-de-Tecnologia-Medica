<template>
  <div class="row">
      <h2>Capacitaciones agendadas: </h2>
      <!-- Tabla capacitaciones-->
      <div class="table-container w-100 mt-1" id="Tabla">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tema</th>
              <th scope="col">Departamento</th>
              <th scope="col">Descripción</th>
              <th scope="col">Fecha</th>
              <th scope="col">Encargado</th>
            </tr>
          </thead>
           <tbody>
             <tr v-for="(r, index) in capacitaciones" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{r.tema}}</td>
              <td>{{r.departamento}}</td>
              <td>{{r.descripcion}}</td>
              <td>{{r.fecha}}</td>
              <td>{{r.persona}}</td>
            </tr>
          </tbody>
        </table>
      </div>   
  </div>         
</template>


<script>
import axios from "axios"
export default {
    data() {
      return {
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
 
    traerCapacitacion() {
      axios
        .get( this.$store.state.url +"/Capacitacion/getEventData")
        .then(response => {
          this.capacitaciones = response.data;
          this.numerocapacitaciones = response.data.length;
          })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }



  },
  mounted() {
    this.traerCapacitacion();
  }
};
</script>

<style scoped>
h2 {
  font-size: 1.6em;
  margin-left:45px;
  margin-top:35px;
  color:black;
}

.table-container {
  overflow-y: scroll;
  min-height: 41vh;
  max-height: 41vh;
}
#Tabla{
  position: relative;
  border-radius: 15px;
  margin-left:35px;
  margin-right: 35px;
  border: 4px solid #005082;
  overflow-y: scroll;
  font-size: 1em;

}
</style>