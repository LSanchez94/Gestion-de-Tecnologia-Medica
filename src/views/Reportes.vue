<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="mt-3" id="TReportes">Reportes:</h1>
      <!-- Tabla reportes -->
      <div class="table-container">
        <table class="table table-striped">
           <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Departamento</th>
              <th scope="col">Serie</th>
              <th scope="col">Información</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, index) in reportes" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{r.Departamento}}</td>
              <td>{{r.NumSerie}}</td>
              <td>{{r.info}}</td>
              <td>{{r.estado}}</td>
            </tr>
          </tbody>

        </table>
        </div>
    
    </div>
  
  <button class="btn" type="button" id="Button" onClick="history.go(-1)" >REGRESAR</button>
  </div>

</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      reportes: {
        Departamento: "",
        NumSerie: "",
        info: "",
        estado: ""
      },
      reportes: [],
      numeroreportes: 0,
    };
  },
  methods: {
    traerReportes() {
      axios
        .get( this.$store.state.url +"/reportes/getReportes")
        .then(response => {
          this.reportes = response.data;
          this.numeroreportes = response.data.length;
          })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }
  },
  mounted() {
    this.traerReportes();
  }
};
</script>


<style scoped>

.table-container {
  overflow-y: scroll;
  margin-left:20px;
  margin-top: 15px;
  border: 4px solid #005082;
  width:4000px;
  font-size:1.2em;
}

h1 {
  font-size: 1.6em;
  font-weight: 800;
  color:black;
  margin-left: 30px;
  margin-top: 100px;
}

#Button{
width: 200px;
height: 49px;
padding:0px;
margin-top: 50px;
margin-left: 725px;
color:#fff;
font-size: 20px;

background: #1DA0F2;
box-sizing: border-box;
border-radius: 25px;
}

.border1 {
  position: relative;
  border-radius: 20px;
  padding: 0;
  border: 4px solid #ffa41b;
  overflow: hidden;

}

</style>