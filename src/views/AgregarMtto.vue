<template>
<div>
    <div class="container-fluid">
      <div class="row">
      <h1 class="w-100"> Datos del Dispositivo Médico: </h1>
      <div class="d-flex w-100">

      <div class = "NumSerie" >
          <form>
          <div class="form-group">
          <!-- <input type="text" class="form-control" id="NumSerie" placeholder="Número de Serie" v-model="mantenimiento.nserie">  -->
          <select class="form-control w-100" id="NumSerie">
              <option value="null">-- Seleccione un Dispositivo -- </option>
              <option v-for="(d, index) in dispositivos" value="" :key="index">{{d.nserie}}</option>
          </select>
          </div>

                    <div class="form-group">
          <input type="text" class="form-control" id="Departamento" placeholder="Departamento" v-model="mantenimiento.departamento">
          </div>
          </form>
      </div>

      <div class = "Departamento" >
          <form>

          </form>
      </div>
      </div>

       <div class = "TipoMtto" >
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="TipoMtto" placeholder="Tipo de Mantenimiento" v-model="mantenimiento.tipomantenimientos">
          </div>
          </form>
      </div>

       <div class = "FechaMtto">
          <form>
          <div class="form-group">
          <input type="date" class="form-control" id="FechaMtto" placeholder="Fecha a dar Mantenimiento" v-model="mantenimiento.fechamantenimientos">
          </div>
          </form>
       </div>

       <div class = "Encargado">
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="Encargado" placeholder="Encargado" v-model="mantenimiento.encargado">
          </div>
          </form>
      </div>

       <button class="Agregar" id="login_button" @click="agregarMtto()">AGREGAR</button>
       <button class="Regresar" onClick="history.go(-1);">REGRESAR</button>
      </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        mantenimiento: {
        nserie: "",
        departamento: "",
        tipomantenimientos: "",
        fechamantenimientos: "",
        encargado: "",
      },
      dispositivos: [],
      mantenimientos:[],
      numeromantenimientos:0,

    };
  },
  methods: {
        agregarMtto() {
        axios
        .post(this.$store.state.url + "/AgregarMtto/addMtto", this.mantenimiento)
        .then(response => {
          alert(response.data);
        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
        },
        traerDispositivos(){
            axios.get(this.$store.state.url + "/Dispositivo/getDevices").then(response => {
                this.dispositivos = response.data;
            })
        }
  },
  mounted(){
      this.traerDispositivos();
  }


};
</script>


<style scoped>
h1{
    font: bold;
    font-weight: 600;
    font-size: 1.6em;
    color: #000000;
    margin-top: 40px;
    margin-left: 30px;
}

 #NumSerie{
    width: 500px;
    height: 48px;
    margin-left: 35px;
    margin-top: 25px;
    background: #7ACEE0;
}

#Departamento{
    position: absolute;
    width: 500px;
    height: 48px;
    left: 715px;
    top: 175px;
    background: #7ACEE0;
}

#TipoMtto{
    position: absolute;
    width: 865px;
    height: 48px;
    left: 350px;
    top: 230px;
    background: #7ACEE0;
}

#FechaMtto{
    position: absolute;
    width: 350px;
    height: 48px;
    left: 350px;
    top: 285px;
    background: #7ACEE0;
}

#Encargado{
    position: absolute;
    width: 500px;
    height: 48px;
    left: 715px;
    top: 285px;
    background: #7ACEE0;
} 

.Agregar{
    position: absolute;
    color:#FFF;
    width: 200px;
    height: 40px;
    left: 1000px;
    top: 350px;
    background: #005082;
    border-radius: 25px;
}

.Regresar{
    position: absolute;
    color:#FFF;
    width: 228px;
    height: 49px;
    left: 975px;
    top: 550px;
    background:#1DA0F2;
    border-radius: 25px;
    font-size:1.2em;
}
</style>