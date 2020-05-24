<template>
  <div>
    <div class="d-flex flex-wrap">
      <div class="col-12 border1">
        <h2><router-link to="/Reportes" id="Linkreportes"> REPORTES (<td>{{numeroreportes}})</td></router-link></h2>


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
      <div class="d-flex w-100 mt-3">
        <div class="color1">
          <h3>USUARIOS</h3>
          <h4>100</h4>
        </div>
        <div class="color2">
          <h3>EQUIPOS</h3>
          <h4>200</h4>
        </div>
        <div class="color3">
          <h3>PROVEEDORES</h3>
          <h4>300</h4>
        </div>
      </div>
    </div>
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
        .get(this.$store.state.url + "/reportes/getReportes")
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
h2 {
  background: #ffa41b;
  color: #FFF;
  text-align: center;
  padding: 10px 0;
  width: 100%;
}


h3{
  font-size: 2em;
  font-weight: bolder;
  color: #FFF;
}

h4{
  font-size: 3em;
  font-weight: bolder;
  color: #FFF;
}
.color1 {
  background-color: #00a8cc;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
  width: 33%;
  padding: 15px;
  text-align: center;
  border-radius: 25px;
}
.color2 {
  background-color: #1da0f2;
  color: #fff;
  font-weight: bold;
  margin: 0 10px;
    width: 33%;
  padding: 15px;
  text-align: center;
    border-radius: 25px;

}
.color3 {
  background-color: #7acee0;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
    width: 33%;
  padding: 15px;
  text-align: center;
    border-radius: 25px;
}

.border1 {
  position: relative;
  border-radius: 20px;
  padding: 0;
  border: 4px solid #ffa41b;
  overflow: hidden;

}

.table-container{
  overflow-y: scroll;
    min-height: 46vh;
    max-height: 64vh;
}



</style>