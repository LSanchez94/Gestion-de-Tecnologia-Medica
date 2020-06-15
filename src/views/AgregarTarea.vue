<template>
  <div class="container-fluid">
    <div class="row">
    <div>
        <h1>Tarea a realizar:</h1>
    </div>
    <div>
        <input type="text" 
        class="formulario" 
        id="Tarea" placeholder="Tarea" 
        v-model="tarea.task"/>
         </div>
         <div>
        <input type="date" 
        class="formulario" 
        id="Fecha" 
        placeholder="Fecha"
        v-model="tarea.fechaTarea"/>
    </div>
    <div>
        <input type="text" 
        class="formularioBreve" 
        id="Descripcion" 
        placeholder{ color: white; }="Descripción"
        v-model="tarea.descripcion"/>
    </div>
    <div>
        <button class="btn" id="Button" >Agregar</button>
    
    </div>

    </div> 

  </div>
  

</template>


<script>
import axios from "axios"
export default {
    data() {
      return {
        tarea: {
          task:"",
          fechaTarea: "",
          descripcion: "",
        }, 
        tareas:[],
        numerotareas: 0,
      };
    },  
methods:{
    agregarTarea() {
      axios
        .post("http://localhost:3000/AgregarTarea/addTarea", this.tarea)
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
},
traerTarea() {
      axios
        .get( this.$store.state.url +"/AgregarTarea/getTareas")
        .then(response => {
          this.tareas = response.data;
          this.numerotareas = response.data.length;
          })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    },

  mounted() {
    this.traerTarea();
  }
};
</script>


<style scoped>

.test {
  background: #7ACEE0;
  width: 5000px;
  margin-left: 60px;
  height: 500px;

}

.formulario {
    background: #7ACEE0;
    margin-left: 60px;
    border: 1px solid #00A8CC;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    text-align: center;
    color: ivory;
   
}

.formularioBreve {
    width: 60%;
    height: 200px;
    background: #7ACEE0;
    margin-left: 60px;
    margin-top: 30px;
    border: 1px solid #00A8CC;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    text-align: center;

}

h1 {
    width: 328px;
    height: 60px;
    margin-left: 50px;
    margin-top: 50px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bolder;
    font-size: 1.6em;
    line-height: 60px;
    color: #000000;

   

}

.Regresar{
    position: absolute;
    color:#FFF;
    width: 228px;
    height: 49px;
    left: 900px;
    top: 550px;
    background:#1DA0F2;
    border-radius: 25px;
    font-size:1.2em;
}

#Button {
    /* Rectangle 107 */

    position: absolute;
    width: 10%;
    height: 50px;
    left: 800px;
    margin-top: 50px;

    background: #1DA0F2;
    border: 1px solid #00A8CC;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    color: ivory;
}


::placeholder { color: rgb(255, 255, 255); }
</style>