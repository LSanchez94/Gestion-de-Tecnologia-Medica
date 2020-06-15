<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="mt-3" id="Refacciones">Refacciones:</h1>
      <!-- Tabla reportes -->
      <div class="table-container">
        <table class="table table-striped">
           <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Equipo</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Proveedor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, index) in refacciones" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{r.nombre}}</td>
              <td>{{r.marca}}</td>
              <td>{{r.modelo}}</td>
              <td>{{r.equipo}}</td>
              <td>{{r.cantidad}}</td>
              <td>{{r.proveedor}}</td>
            </tr>
          </tbody>

        </table>
        </div>
    
    </div>
  
  
  
<button class="btn" type="button" id="Button" onClick="history.go(-1)" >REGRESAR</button>
<router-link to="/Refacciones" class="btn" id="Button1" placeholder="Button1">Agregar Refacción</router-link>
  </div>

</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
     refacciones: {
       nombre: "",
       marca: "",
        modelo: "",
        equipo: "",
       cantidad: "",
       proveedor:""
      },
      refacciones: [],
      numerorefacciones: 0,
    };
  },
  methods: {

     traerRefaccion() {
      axios
        .get( this.$store.state.url +"/Refacciones/getDatosR")
        .then(response => {
          this.refacciones = response.data;
          this.numerorefacciones = response.data.length;
          })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }

  
    
  },
  mounted() {
    this.traerRefaccion();
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

#Button1{
width: 200px;
height: 49px;
padding:0px;
margin-top: 30px;
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

  