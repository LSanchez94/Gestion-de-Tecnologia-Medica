<template>
  <div class="container-fluid">
    <div>
        <h1>Tarea a realizar:</h1>
    </div>
    <div>
        <input type="text" 
        class="formulario" 
        id="Tarea" 
        placeholder="Tarea"
        v-model="tarea.task"/>
        <input type="date" 
        class="formulario" 
        id="Fecha" 
        placeholder="Fecha"
        v-model="tarea.fechaTarea"/>
    </div>
    <div>
        <input 
        type="text" 
        class="formularioBreve" 
        id="Descripcion" 
        placeholder ="Descripción"
        v-model="tarea.descripcion"/>
    </div>
     <div>
        <button class="btn" id="Button" @click="agregarTarea()" >Agregar</button>
    </div>
  </div>

</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      tarea: {
        task: "",
        fechaTarea: "",
        descripcion: ""
      },
      tareas: [],
    };
  },
  methods: {
    agregarTarea() {
      axios
        .post( this.$store.state.url + "/Tareas/addTarea", this.tarea)
        .then(response => {
          alert(response.data);
          this.traerTareas();
        })
        .catch(err => { 
          alert("NO FUNCIONA EL API tareasadd");
          console.log(err);
        });
    },
    
    traerTareas() {
      axios
        .get( this.$store.state.url + "/Tareas/getTareas")
        .then(response => {
          this.tareas = response.data;
        })
        .catch(err => {
          alert("NO FUNCIONA EL API tareasget");
          console.log(err);
        });
    }
  },
 mounted() {
    this.traerTareas();
  }
};
</script>


<style scoped>



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