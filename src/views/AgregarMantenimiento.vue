<template>
  <div class="container-fluid">
      <div class="row">
        <div class="d-flex w-100 mt-3">
            <!--ESTAS SE MODIFICAN PARA QUE QUEDEN CON DATOS DEL INVENTARIO-->
          <div class="Linea1">
            <h3>Nombre del equipo</h3>
          </div>

          <div class="Linea2">
            <h3>Departamento</h3>
          </div>

          <div class="color1">
            <h3>Fecha del próximo mantenimiento</h3>
            <h4>04/12/20</h4>
          </div>

          <div class="color2">
            <h3>Último mantenimiento por:</h3>
            <h4>Darcy Nava</h4>
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
export default {
  
}
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

  .table-container {
    overflow-y: scroll;
    min-height: 41vh;
    max-height: 41vh;
  }

  .color1 {
    background-color: #7acee0;
    color: #fff;
    font-weight: bold;
    margin-left: 100px;
    margin-right: 60px;
    font-size: small;
    width: 35%;
    height: 200px;
    padding: 30px;
    text-align: center;
    border-radius: 25px;
    margin-top:120px;
  }
  .color2 {
    background-color: #F09204;
    color: #fff;
    font-weight: bold;
    font-size: small;
    width: 35%;
    height: 200px;
    padding: 30px;
    text-align: center;
    border-radius: 25px;
    margin-top:120px;
  }
  .color3 {
    background-color: #005082;
    color: #fff;
    position: absolute;
    margin-top:340px;
    font-weight: bold;
    margin-left: 500px;
    width: 25.5%;
    padding: 60px;
    height: 200px;
    text-align: center;
    border-radius: 25px;
  }

  .color4{
    background-color: #FFA41B;
    color: #fff;
    position: absolute;
    margin-top:340px;
    font-weight: bold;
    margin-left: 100px;
    width: 26%;
    padding: 60px;
    height: 200px;
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