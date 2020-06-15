<template>
  <div class="container-fluid">
      <div class="row">
          <div id="Refacciones" class="col-8">
             <h2>Refacciones: </h2>
<!-- Formulario para agregar refacciones-->
  <form class="col-10">
    <div class="form-group Linea1">
        <input type="text" class="form-control" id="Linea1" v-model="refaccion.nombre" placeholder="Nombre de la refacción"/>
    </div>
      

          <div class="form-group Linea2">
          <input type="text" class="form-control" id="Linea2" v-model="refaccion.marca" placeholder="Nombre de la marca" >
          </div>
      
    
          <div class="form-group Linea3">
           <input type="email" class="form-control" id="Linea3" v-model="refaccion.modelo"  placeholder="Modelo" >
          </div>


          <div class="form-group Linea4">
          <input type="text" class="form-control" id="Linea4" v-model="refaccion.equipo" placeholder="Equipo" >
          </div>

          <div class="form-group Linea5">
         <input type="text" class="form-control" id="Linea5" v-model="refaccion.cantidad" placeholder="Cantidad" >
          </div>
          <div class="form-group Linea6">
         <input type="text" class="form-control" id="Linea6" v-model="refaccion.nombre" placeholder="Proveedor" >
         
          </div>
        </form>

          </div>
          </div>

        
  | <button class="btn" id="RectanguloGuardar" @click="agregarRefaccion()">Guardar</button>
    <button class="btn" id="RectanguloRegresar" onClick="history.go(-1);">REGRESAR</button>

          
</div>                  
</template>


<script>
import axios from 'axios'
export default {
  data(){
    return{
      refaccion: {
        nombre: '',
        marca: '',
        modelo: '',
        equipo: '',
        cantidad: '',
        proveedor: '',
      },
      refacciones:[],
      numerorefacciones: 0,
      proveedor:{
        nombre: "",
        contacto: "",
        email: "",
        tel: "",
        address: ""
      },
      proveedores:[],
      numeroproveedor:0,
      
    }
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
    },

    agregarRefaccion(){
      axios
      .post(this.$store.state.url + '/Refacciones/addDatosR', this.refaccion)
      .then( response => {
        alert('Todo bien todo correcto, y yo que me alegro');
        this.traerRefaccion();
      }).catch(e => {
        console.log(e)
        alert('run b...')
      })
    },

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

 #Linea6{
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