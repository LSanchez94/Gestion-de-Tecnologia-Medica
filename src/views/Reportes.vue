<template>
  <div class="container-fluid">
      <div class="row">
      
      <h2 class="mt-3">Reportes:</h2>
      <!-- {{usuarios}} -->
      <div class="table-container w-100 mt-1">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Departamento</th>
              <th scope="col">Número de Serie</th>
              <th scope="col">Descripción </th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, index) in reportes" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{r.Departamento}}</td>
              <td>{{r.NumeroSerie}}</td>
              <td>{{r.info}}</td>
              <td>{{r.Estado}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- EMPIEZA TABLA DE USUARIOS    -->

        </div>


          <input type="button" value="Regresar" onClick="history.go(-1);">
  </div>

      
               
</template>
<script>

import axios from "axios";
export default {
  data() {
    return {
      reporte: {
        Departamento: "",
        info: "",
        estado: "",
        NumSerie: "",
      },
      reportes: [],
      numeroreportes: 0,
      Realizados: 0,
      NoRealizados: 0
    };
  },
  methods: {
    
    traerUsuarios() {
      axios
        .get("http://localhost:3000/Reportes/getReportes")
        .then(response => {
          this.reportes = response.data;
          this.numeroreportes = response.data.length;

          this.Realizados = 0;
          this.NoRealizados = 0;
          response.data.forEach(element => {
            if (element.perfil == "He recibido asistencia") {
              this.Realizados++;
            } else {
              this.NoRealizados++;
            }
          });
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
  font-size: 1.6em;
}

#boton
{
position: absolute;
width: 228px;
height: 49px;
left: 1624px;
top: 988px;

background: #005082;
border: 1px solid #005082;
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