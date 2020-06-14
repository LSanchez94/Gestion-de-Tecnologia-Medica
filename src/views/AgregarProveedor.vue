<template>
  <div class="container-fluid">
      <div class="row">
          <div id="AgregarProveedor" class="col-8">
             <h2>Datos: </h2>
<!-- Formulario para agregar datos de proveedor -->
  <form class="col-10">
    <div class="form-group Linea1">
        <input type="text" class="form-control" id="Linea1" v-model="proveedor.nombre" placeholder="Nombre de la empresa"/>
    </div>
      

          <div class="form-group Linea2">
          <input type="text" class="form-control" id="Linea2" v-model="proveedor.contacto" placeholder="Nombre del contacto" >
          </div>
      
    
          <div class="form-group Linea3">
           <input type="email" class="form-control" id="Linea3" v-model="proveedor.email"  placeholder="Correo electrónico" >
          </div>


          <div class="form-group Linea4">
          <input type="text" class="form-control" id="Linea4" v-model="proveedor.tel" placeholder="Número de teléfono" >
          </div>

          <div class="form-group Linea5">
         <input type="text" class="form-control" id="Linea5" v-model="proveedor.address" placeholder="Dirección" >
          </div>
        </form>

          </div>
          </div>

        
      

  | <button class="btn" id="RectanguloGuardar" @click="agregarProveedor()">Guardar</button>
    <button class="btn" id="RectanguloRegresar" onClick="history.go(-1);">REGRESAR</button>

          
        </div>
  
     
                  
</template>


<script>
import axios from 'axios'
export default {
  data(){
    return{
      proveedor: {
        nombre: '',
        contacto: '',
        correo: '',
        tel: '',
        address: ''
      }
    }
  },
  methods: {
    agregarProveedor(){
      axios
      .post(this.$store.state.url + '/AgregarProveedor/addDatos', this.proveedor)
      .then( response => {
        alert('Proveedor agregado exitosamente');
        this.traerProveedores();
      }).catch(e => {
        console.log(e)
        alert('No se agregó el proveedor')
      })
    },

    traerProveedores() {
      axios
        .get( this.$store.state.url +"/Agregarproveedor/getDatos")
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
#AgregarProveedor{
    font-size:1.6em;
    margin-top: 30px;
    margin-left: 30px;
}

#formulario{
    font-size: 1.6em;
    position: absolute;
    font-weight: bold;
    margin-left: 65px;
    margin-top: 25px;
    color:black;
  }
  
  #Linea1{
    margin-top:35px;
    background-color:#7ACEE0;
    width:750px;
  }

  #Linea2{
    margin-top:15px;
    width:750px;
    margin-left:0px;
    background-color:#7ACEE0;
  }

  #Linea3{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
  }

  #Linea4{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
  }

  #Linea5{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
  }


#RectanguloGuardar{
    width: 200px;
    margin-left: 600px;
    top: 35px;
    background: #005082;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
}

#TextoGuardar{
    color: #FFFFFF;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    margin-left: 5px;
    color: #FFFFFF;

}

#RectanguloRegresar{
  
    margin-left: 600px;
    margin-top: 100px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:1.2em;
}


::placeholder { color: rgb(255, 255, 255); }
</style>