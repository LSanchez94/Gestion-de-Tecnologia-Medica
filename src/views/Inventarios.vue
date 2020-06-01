<template>
  <div class="container-fluid">
    
    <div class="row">
      <h2>Inventario: </h2>
      <router-link to="/mantenimiento" class="btn" id="Linkmtto">Último mantenimiento</router-link>

      <!-- Tabla inventario-->
      <div class="table-container w-100 mt-1" id="Tabla">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Serie</th>
              <th scope="col">Estado</th>
              <th scope="col">Adquisición</th>
              <th scope="col">Marca</th>
              <th scope="col">Garantía</th>
              <th scope="col">Departamento</th>
              <th scope="col">Modelo</th>
              <th scope="col">Mttos. preventivos</th>
            </tr>
          </thead>
          
        </table>
      </div>

      
      <button class="btn" id="Regresar" onClick="history.go(-1);">REGRESAR</button>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
    export default {
      methods: {
        getInventario(){
          axios.get(this.$store.state.url + '/Inventario/getDMdata').then(response => {
            console.log(response)
          })
        },
            consultarDispositivos(){
            axios
        .get( this.$store.state.url + "/Dispositivo/getDevices")
        .then(response => {
          this.usuarios = response.data;
          this.numeroUsuarios = response.data.length;
          
          this.administradores = 0;
          this.medicos = 0;
          response.data.forEach(element => {
            if (element.perfil == "Administrador") {
              this.administradores++;
            } else {
              this.medicos++;
            }
          });
        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }
      },
     /* computed:{
        filteredList() {
      return this.postList.filter(post => {
        return post.title.Inventario.includes(this.search.toLowerCase())
      })
     } */
    
  
      created(){
        this.getInventario();
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
  overflow: hidden;
  font-size: 1em;
}

#Linkmtto{
    color:#FFFF;
    background: #F09204;
    height: 45px;
    border-radius: 25px;
    margin-left:500px;
    margin-top: 20px;
    width:22%;
}

#Regresar{
    margin-left: 600px;
    margin-top: 100px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:0.8em;
}
</style>