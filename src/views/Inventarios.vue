<template>
  <div class="container-fluid">
    <div class="form">
      <input 
      type="text"
      class="form-control"
      id="Buscar"
      placeholder="buscar en inventario"
      v-model="search"
      
      />
    </div>
    <div class="row">
      <h2>Inventario: </h2>
      <router-link to="/BotonRefacciones" class="btn" id="Refaccion">Refacciones</router-link>
      <router-link :to="{name: 'Mantenimiento', params: { nserie: selectedop}}" class="btn" id="Linkmtto">Ver Equipo</router-link>
      <router-link to="/BotonAgregarProveedor" class="btn" id="Proveedor">Proveedores</router-link>
      <!-- Tabla inventario-->
      <div class="table-container w-100 mt-1" id="Tabla">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Departamento</th>
              <th scope="col">N.Serie</th>
              <th scope="col">Adquisición</th>
              <th scope="col">Garantía</th>
              <th scope="col">Estado</th>
              <th scope="col">Preventivos</th>
              <th scope="col">Correctivos</th>
              <th scope="col">Propiedad</th>
              <th scope="col">Donación</th>
              <th scope="col">Capacitación</th>
              <th scope="col">Proveedor</th>
              <th scope="col">Refacciones</th>
            </tr>
          </thead>
           <tbody>
             <tr v-for="(r, index) in filtroinventario" :key="index">


      <!-- Bienvenidos a nuestro checkbox, aqui lo que hacemos es que mostramos un checkbox al lado del numero de dispositivo
      dado de alta, para que? porque QUIERO. No no se crean, lo que hace el checkbox es que localiza la informacion que nos 
      interesa y guarda el numero de serie en una variable no constante, esto nos permite trasladar la infromacion del dM
      a la pestaña de ver equipo donde se muestra la informacion del equipo seleccionado-->
             
              <th scope="row">{{index+1}}<input class="form-check-input position-static" type="radio" id="blankCheckbox" aria-label="..." :value="r.nserie" v-model="selectedop">
              </th>
              <td>{{r.nombre}}</td>
              <td>{{r.cantidad}}</td>
              <td>{{r.marca}}</td>
              <td>{{r.modelo}}</td>
              <td>{{r.departamento}}</td>
              <td>{{r.nserie}}</td>
              <td>{{r.adq}}</td>
              <td>{{r.garantia}}</td>
              <td>{{r.edofuncional}}</td>
              <td>{{r.mttoprev}}</td>
              <td>{{r.mttocorr}}</td>
              <td>{{r.propiedad}}</td>
              <td>{{r.aptodonacion}}</td>
              <td>{{r.capacitacion}}</td>
              <td>{{r.proveedor}}</td>
              <td>{{r.refacciones}}</td>
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
        selectedop: null,
        search:'',
        Lugar:'',
        inventario: {
          nombre:"",
          cantidad:"",
          marca: "",
          modelo: "",
          departamento: "",
          nserie: "",
          adq:"",
          garantia:"",
          edofuncional:"",
          mttoprev:"",
          mttocorr:"",
          propiedad:"",
          aptodonacion:"",
          capacitacion:"",
          proveedor:"",
          refacciones:"",
          g:'',
      }, 
        inventarios:[],
        numeroinventario: [],

        lugar:{
          posicion:'',
        },
        lugares:[],
        numerolugares:0,
    };
  
}, 
    
methods:{
    traerDispositivo() {
      axios
        .get( this.$store.state.url+"/Dispositivo/getDevices")
        .then(response => {
          this.inventarios = response.data;
          this.numeroinventarios = response.data.length;
        })
        //console.log(numeroinventarios)
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    },

},
//Bienvenidos al filtro del inventario jjajaja, en este caso, creamos una funcion de nombre filtro inventario
// esta funcion esta llamada a filtrar literalmente al conjunto de datos inventario, por ello en la parte de arriba
// donde tenemos la linea de codigo: tr v-for="(r, index) in filtroinventario" :key="index", ya no ponemos 
//v-for:... in inventario, porque al llamar la funcion filtroinventario, la cual esta filtrando la informacion
//en la matriz inventario, ya nos muestra la informacion filtrada
//sin embargo, para que nos muestre toda la info en el inventario cuando nosotros no escribamos nada en busqueda
//se crea la variable "search" (esta arriba en data), esta variable esta iniciada en vacio '' y, cuando nosotros escribimos
//algo en la casilla de busqueda (la cual guarda txt en la variable search), esta cambia en nuestra funcion filtroinventario y 
//causa que solo se conserven los DM que contegan los mismos caracteres que search
//OJO el toLoweCase es una funcion que pone a search en minusculas y lo hae tambien con los datos de la matriz
//inventarios para que si lo escribimos todo con mayusculas o minusculas, de cualquier modo me vote el resultado
//ya solamente ponermos el return para regresar el dispositivo que contega lo mismo que search (!! son or)

computed:{
  filtroinventario: function(){
    return this.inventarios.filter((inventario)=>{
      return inventario.nombre.toLowerCase().match(this.search.toLowerCase())
      || inventario.marca.toLowerCase().match(this.search.toLowerCase())
      || inventario.modelo.toLowerCase().match(this.search.toLowerCase())
      || inventario.departamento.toLowerCase().match(this.search.toLowerCase())
      || inventario.nserie.toLowerCase().match(this.search.toLowerCase())
      || inventario.adq.toLowerCase().match(this.search.toLowerCase())
      || inventario.garantia.toLowerCase().match(this.search.toLowerCase())
      || inventario.edofuncional.toLowerCase().match(this.search.toLowerCase())
      || inventario.mttoprev.toLowerCase().match(this.search.toLowerCase())
      || inventario.cantidad.toLowerCase().match(this.search.toLowerCase())
      || inventario.mttocorr.toLowerCase().match(this.search.toLowerCase())
      || inventario.propiedad.toLowerCase().match(this.search.toLowerCase())
      || inventario.aptodonacion.toLowerCase().match(this.search.toLowerCase())
      || inventario.capacitacion.toLowerCase().match(this.search.toLowerCase())
      || inventario.proveedor.toLowerCase().match(this.search.toLowerCase())
      || inventario.refacciones.toLowerCase().match(this.search.toLowerCase())
    });
  }
},

mounted(){
    this.traerDispositivo();
},
}
</script>


<style scoped>
#Buscar{
    position: absolute;
    width:75px;
    margin-top:20px;
    margin-left: 870px;
    height:45px;
    width: 220px;
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
  overflow-x:scroll;

}

#Linkmtto{
    position:absolute;
    color:#FFFF;
    background: #F09204;
    height: 45px;
    border-radius: 25px;
    margin-left:200px;
    margin-top: 450px;
    width:22%;
}

#Proveedor{
    position:absolute;
    color:#FFFF;
    background: #F09204;
    height: 45px;
    border-radius: 25px;
    margin-left:600px;
    margin-top: 450px;
    width:22%;
}

#Regresar{
    margin-left: 450px;
    margin-top: 200px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:0.8em;
}
#Refaccion{
    position:absolute;
    color:#FFFF;
    background: #F09204;
    height: 45px;
    border-radius: 25px;
    margin-left:400px;
    margin-top: 505px;
    width:22%;
}


</style>