<template>
  <div class="container-fluid">  
    
    <div class="row">
      <!-- inicia formulario en proceso de agregar funcionalidades-->
      <div id="formulario">
        <form class="col-10">

            <div class="form-group">
              <label for="Tema">Datos de capacitación: </label>
              <input 
                type="text" 
                class="form-control" 
                id="Tema" 
                placeholder="Tema" 
                v-model="capacitacion.tema"
              />
            </div>
              
            <div class="form-group">
              <input 
                type="text" 
                class="form-control" 
                id="Departamento" 
                placeholder="Departamento" 
                v-model="capacitacion.departamento"
              />
            </div>

            <div class="form-group">
              <input 
                type="text" 
                class="form-control" 
                id="Descripcion" 
                placeholder="Breve descripción" 
                v-model="capacitacion.descripcion"
              />
            </div>

            <div class="form-group">
              <input 
                type="date" 
                class="form-control" 
                id="Fecha" 
                placeholder="Fecha" 
                v-model="capacitacion.fecha"
              />
            </div>

            <div class="form-group">
              <input 
                type="text" 
                class="form-control" 
                id="Persona" 
                placeholder="Encargado" 
                v-model="capacitacion.persona"
              />
            </div>

            <button class="btn" type="button" id="Button" @click="agregarCapacitacion()" >AGREGAR</button>

        </form>
        <button class="btn" id="Regresar" onClick="history.go(-1);">REGRESAR</button>
      </div>

    </div>

  </div>
  

</template>


<script>
import axios from "axios"
export default {
    data() {
      return {
        capacitacion: {
          tema:"",
          departamento: "",
          descripcion: "",
          fecha: "",
          persona: "",
        }, 
        capacitaciones:[],
        numerocapacitaciones: 0,
      };
    },  
methods:{
    agregarCapacitacion() {
      axios
        .post("http://localhost:3000/Capacitacion/addCap", this.capacitacion)
        .then(response => {
          alert(response.data);
          console.log(response.data);
          //this.traerUsuarios();
        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    },
    traerCapacitacion() {
      axios
        .get("http://localhost:3000/Capacitacion/getEventData")
        .then(response => {
          this.capacitaciones = response.data;
          this.numerocapacitaciones = response.data.length;

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
mounted(){
    this.traerCapacitacion();
}
};

</script>

<style scoped>

  #formulario{
    font-size: 1.6em;
    position: absolute;
    font-weight: bold;
    margin-left: 65px;
    margin-top: 25px;
    color:black;
  }
  
  #Tema{
    margin-top:35px;
    background-color:#7ACEE0;
    width:750px;
  }

  #Departamento{
    margin-top:15px;
    width:750px;
    margin-left:0px;
    background-color:#7ACEE0;
  }

  #Fecha{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
    color: ivory;
  }

  #Descripcion{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
  }

  #Persona{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
  }

  #Button{
    position: absolute;
    width: 200px;
    margin-top:35px;
    margin-left:550px;
    color: #ffffff;
    background: #005082;
    border: 1px solid #005082;
    box-sizing: border-box;
    border-radius: 25px;
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
::placeholder { color: rgb(255, 255, 255); }

</style>