-<template>
 <!-- FALTA PANTALLA DE DISPOSITIVO -->
     <div class="container-fluid">
      <div class="row">
        <div class="d-flex w-100 mt-3">
            <!--ESTAS SE MODIFICAN PARA QUE QUEDEN CON DATOS DEL INVENTARIO-->
          <div class="color1">
            <h3>Indicador Capacitaciones</h3>
            <h2>0.4</h2>
          </div>
          
          <div class="color0">
            <h3>Monitor SV</h3>
          </div>

          <div class="color2">
            <h3>Indicador Mantenimientos Correctivos:</h3>
            <h2>0.625</h2>
          </div>

          <div class="color3">
            <h3>Manual de servicio</h3>
          </div>
      
  
          <div class="color4">
              <h3>Hoja de servicio</h3>
           </div>
          

        </div>
      </div>
    </div>
</template>


<script>
import axios from 'axios'
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
        mantenimientos:[],
        numeromantenimientos: 0,
      };
    }, 
     methods: {
 
    traerMtto() {
      axios
        .get( this.$store.state.url +"/AgregarMtto/getMtto")
        .then(response => {
          this.mantenimientos = response.data;
          this.numeromantenimientos = response.data.length;
          })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }



  },
  mounted() {
    this.traerMtto();
  }
};
</script>

<style scoped>
  h2 {
    font-size: 1.6em;
  }
  h3 {
    font-size: 2em;
    font-weight: bolder;
  }

  h4 {
    font-size: 3em;
    font-weight: bolder;
  }

.color1{
    background-color: #FFA41B;
    color: #fff;
    position:absolute;
    margin-top:120px;
    font-weight: bold;
    left: 900px;
    width: 450px;
    padding: 60px;
    height: 200px;
    text-align: center;
    border-radius: 25px;
  }
  .color2 {
    background-color: #F09204;
    color: #fff;
    font-weight: bold;
    font-size: small;
    width: 450px;
    height: 200px;
    padding: 30px;
    text-align: center;
    border-radius: 25px;
    margin-top:120px;
    margin-left:100px;
  }
  .color3 {
    background-color: #005082;
    color: #fff;
    position:absolute;
    margin-top:340px;
    font-weight: bold;
    left: 900px;
    width: 450px;
    padding: 60px;
    height: 200px;
    text-align: center;
    border-radius: 25px;
  }

  .color4{
    background-color: #1DA0F2;
    color: #fff;
    position: absolute;
    margin-top:340px;
    font-weight: bold;
    margin-left: 100px;
    width: 450px;
    padding: 60px;
    height: 200px;
    text-align: center;
    border-radius: 25px;
  }

  .color0{
    background-color: #7ACEE0;
    color: #fff;
    position:absolute;
    margin-top:15px;
    font-weight: bold;
    margin-left: 100px;
    width: 925px;
    height: 50px;
    text-align: center;
    border-radius: 25px;
  }

  .Linea1{
    background-color: #F09204;
    color: #fff;
    position: absolute;
    margin-top:0px;
    font-weight: bold;
    margin-left: 100px;
    width: 26%;
    padding: 14px;
    height: 100px;
    text-align: center;
    border-radius: 25px;
  }
  .Linea2{
    background-color: #7ACEE0;
    color: #fff;
    position: absolute;
    margin-top:0px;
    font-weight: bold;
    margin-left: 500px;
    width: 25%;
    padding: 30px;
    height: 100px;
    text-align: center;
    border-radius: 25px;
  }
</style>