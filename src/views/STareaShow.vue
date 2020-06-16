<template>
  <div class="row">
      <h2>Tareas agendadas: </h2>
      <!-- Tabla tareas-->
      <div class="table-container w-100 mt-1" id="Tabla">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tarea</th>
              <th scope="col">Fecha</th>
              <th scope="col">Descripción de Tarea</th>
              
            </tr>
          </thead>
           <tbody>
             <tr v-for="(t, index) in tareas" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{t.task}}</td>
              <td>{{t.fechaTarea}}</td>
              <td>{{t.descripcion}}</td>
            
            </tr>
          </tbody>
        </table>
      </div>   
      <button class="Regresar" onClick="history.go(-1);">REGRESAR</button>
  </div>         
</template>


<script>
import axios from "axios"
export default {
    data() {
      return {
        tarea: {
        task: null,
        fechaTarea: null,
        descripcion: null
        }, 
        tareas:[],
        numerotareas: 0,
      };
    }, 

  methods: {
 
    traerTarea() {
      axios
        .get( this.$store.state.url +"/AgregarTarea/getTareas")
        .then(response => {
          this.tareas = response.data;
          this.numerotareas = response.data.length;
          })
        .catch(err => {
          alert("YA LLEVAME DIOSITO!!!");
          console.log(err);
        });
    },



  },
  mounted() {
    this.traerTarea();
  },
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

.Regresar{
    position: absolute;
    color:#FFF;
    width: 228px;
    height: 49px;
    left: 975px;
    top: 550px;
    background:#1DA0F2;
    border-radius: 25px;
    font-size:1.2em;
}
</style>