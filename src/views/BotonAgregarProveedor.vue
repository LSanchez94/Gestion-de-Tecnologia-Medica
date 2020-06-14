<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="mt-3" id="Proveedores">Proveedores:</h1>
      <!-- Tabla reportes -->
      <div class="table-container">
        <table class="table table-striped">
           <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Contacto</th>
              <th scope="col">Correo</th>
              <th scope="col">Telefono</th>
              <th scope="col">Dirección</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, index) in proveedores" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{r.nombre}}</td>
              <td>{{r.contacto}}</td>
              <td>{{r.email}}</td>
              <td>{{r.tel}}</td>
              <td>{{r.address}}</td>
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
      proveedores: {
       nombre: "",
        contacto: "",
        email: "",
        tel: "",
        address: ""
      },
      proveedores: [],
      numeroproveedores: 0,
    };
  },
  methods: {

     traerProveedores() {
      axios
        .get( this.$store.state.url +"/AgregarProveedor/getDatos")
        .then(response => {
          this.proveedores = response.data;
          this.numeroproveedores = response.data.length;
          })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }

  
    
  },
  mounted() {
    this.traerProveedores();
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

  