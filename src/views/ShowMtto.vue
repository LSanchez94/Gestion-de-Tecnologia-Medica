<template>
  <div class="row">
      <h2>Mantenimientos agendados: </h2>
      <!-- Tabla capacitaciones-->
      <div class="table-container w-100 mt-1" id="Tabla">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">No. Serie</th>
              <th scope="col">Departamento</th>
              <th scope="col">Tipo de Mantenimiento</th>
              <th scope="col">Fecha</th>
              <th scope="col">Encargado</th>
            </tr>
          </thead>
           <tbody>
             <tr v-for="(r, index) in mantenimientos" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{r.nserie}}</td>
              <td>{{r.departamento}}</td>
              <td>{{r.tipomantenimientos}}</td>
              <td>{{r.fechamantenimientos}}</td>
              <td>{{r.encargado}}</td>
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
        mantenimiento: {
        nserie: "",
        departamento: "",
        tipomantenimientos: "",
        fechamantenimientos: "",
        encargado: "",
        }, 
        mantenimientos:[],
        numeromantenimientos: 0,
      };
    }, 

  methods: {
 
    traerMtto() {
      axios
        .get( this.$store.state.url +"/AgregarMtto/getMtto")
        .then(response => {
          this.mantenimientos = response.data;
          this.numeromantenimientos = response.data.length;
          })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }



  },
  mounted() {
    this.traerMtto();
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