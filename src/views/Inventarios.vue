<template>
  <div class="container-fluid">
    <div class="form">
      <input 
      type="text"
      class="form-control"
      id="Buscar"
      placeholder="buscar en inventario"
      v-model="busqueda"
      
      />
    </div>

    <div class="row">
      <h2>Inventario: </h2>
      <router-link to="/mantenimiento" class="btn" id="Linkmtto">Último mantenimiento</router-link>

      <!-- Tabla inventario-->
      <div class="table-container w-100 mt-1" id="Tabla">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Departamenro</th>
              <th scope="col">N. Serie</th>
              <th scope="col">Adquisición</th>
              <th scope="col">Garantía</th>
              <th scope="col">Estado</th>
              <th scope="col">Preventivos</th>
            </tr>
          </thead>
           <tbody>
            <tr v-for="(r, index) in inventarios" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{r.nombre}}</td>
              <td>{{r.marca}}</td>
              <td>{{r.modelo}}</td>
              <td>{{r.departamento}}</td>
              <td>{{r.nserie}}</td>
              <td>{{r.adq}}</td>
              <td>{{r.garantia}}</td>
              <td>{{r.edofuncional}}</td>
              <td>{{r.mttoprev}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <button class="btn" id="Regresar" onClick="history.go(-1);">REGRESAR</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
    data() {
      return {
        busqueda:"",
        inventario: {
          nombre:"",
          marca: "",
          modelo: "",
          departamento: "",
          nserie: "",
          adq:"",
          garantia:"",
          edofuncional:"",
          mttoprev:"",
        }, 
        inventarios:[],
        numeroinventario: 0,
      };
    },  
methods:{

   filter(value){
      return $;{value.nombre};{value.marca};{value.modelo};{value.departamento};{value.nserie};{value.adq};{value.garantia};{value.edofuncional};{mttoprev};
    },

    traerDispositivo() {
      axios
        .get( this.$store.state.url+"/Dispositivo/getDevices")
        .then(response => {
          this.inventarios = response.data;
          this.numeroinventarios = response.data.length;
        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }
},
mounted(){
    this.traerDispositivo();
}
};
/*
computed:{
  filtroinventario(){
    return this.inventario.filter((blog)=>{

    }
  }
}
     /* computed:{
        filteredList() {
      return this.postList.filter(post => {
        return post.title.Inventario.includes(this.search.toLowerCase())
      })
     } */
    
</script>


<style scoped>
#Buscar{
  position: absolute;
    width:75px;
    margin-top:20px;
    margin-left: 870px;
    height:45px;
    width: 220px;
    background-color:#7ACEE0;
}

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

#Linkmtto{
    color:#FFFF;
    background: #F09204;
    height: 45px;
    border-radius: 25px;
    margin-left:400px;
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