<template>
  <div class="container-fluid">  
    
    <div class="row">
      <!-- inicia formulario falta agregar funcionalidades-->
      <div id="formulario" class="col-4">

        <form class="col-10">

            <div class="form-group">
              <label for="Tema">Datos de capacitación: </label>
              <input type="text" class="form-control" id="Tema" placeholder="Tema"/>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" id="Departamento" placeholder="Departamento"/>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" id="Descripcion" placeholder="Breve descripción"/>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" id="Fecha" placeholder="Fecha"/>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" id="Persona" placeholder="Encargado"/>
            </div>

            <button class="btn" id="Button">AGREGAR</button>

        </form>

      </div>

    </div>

  </div>
  

</template>


<script>
export default {
  
    data() {
      return {
        value: ''
      }
}}
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
    background-color:#7ACEE0;
  }

  #Fecha{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
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
    background: #1DA0F2;
    border: 1px solid #1DA0F2;
    box-sizing: border-box;
    border-radius: 25px;
  }
</style>