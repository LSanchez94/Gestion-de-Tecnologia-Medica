<template>
  <div class="container-fluid">
    <div class="row">
     
      <!-- AQUI EMPIEZA EL FORMULARIO -->
      <div class="mt-3 w-100">
        <h2>REPORTAR</h2>
        <div class="formulario">
        <form class="row">
          <div class="form-group col-12" id="Formulario"> 
     
            <input
              type="text"
              class="form-control"
              id="Departamento"
              aria-describedby="DepartamentoHelp"
              placeholder="Departamento"
              v-model="reporte.Departamento"
            />
          </div>
          <div class="form-group col-6" >
            <input

            type="text"
            class="form-control"
            placeholder="Número de Serie"
            v-model="reporte.NumSerie"
             
            />
          </div>
          <div class="form-group col-6" >
            <input
              type="text"
              class="form-control"
              id="Descripcion"
              aria-describedby="infoHelp"
              placeholder="Descripción de Falla"
              v-model="reporte.info"
            />
          </div>
          <div class="form-group col-6" >
            <!-- <label for="exampleFormControlSelect1">Example select</label> -->
            <select class="form-control" id="Asistencia" v-model="reporte.estado">
              <option>He recibido asistencia</option>
              <option>No he recibido asistencia</option>
            </select>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-primary" id="Boton" @click="agregarReporte()">REPORTAR </button>
          </div>
        </form>
        </div>
      </div>
      </div>
      
          
          
</div>
</template>
    


<script>
import axios from "axios";
export default {
  data() {
    return {
      reporte: {
        Departamento: "",
        info: "",
        estado: "",
        NumSerie: "",
      },
      reportes: [],
      numeroreportes: 0,
      Realizados: 0,
      NoRealizados: 0
    };
  },
  methods: {
    agregarReporte() {
      axios
        .post("http://localhost:3000/Reportes/addReporte", this.reporte)
        .then(response => {
          alert(response.data);
          this.traerReportes();
        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    },
    traerReportes() {
      axios
        .get("http://localhost:3000/Reportes/getReportes")
        .then(response => {
          this.reportes = response.data;
          this.numeroReportes = response.data.length;

          this.Realizados = 0;
          this.NoRealizados = 0;
          response.data.forEach(element => {
            if (element.estado == "He recibido asistencia") {
              this.Realizados++;
            } else {
              this.NoRealizados++;
            }
          });
        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }
  },
  mounted() {
    this.traerReportes();
  }
};
</script>
      
      

<style scoped>

h2 {
  background-color: #F09204;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  border-radius: 25px;
}
#Departamento{
  background-color: #7ACEE0;
}
#NumSerie{
  background-color: #7ACEE0;
}


#Descripcion{
  background-color: #7ACEE0;
}

#Asistencia{
  background-color: #7ACEE0;
}

#Boton{
    margin-left: 100px;
    margin-top:0px;
    background: #005082;
    box-sizing: border-box; 
    border-color:#005082;
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:0.8em;
}

  
</style>