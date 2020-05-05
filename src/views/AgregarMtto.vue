<template>
<div>
    <div class="container-fluid">
      <div class="row">
      <h1> Datos del Dispositivo Médico: </h1>
      <div class = "NumSerie" >
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="NumSerie" placeholder="Numero de Serie">
          </div>
          </form>
      </div>

      <div class = "Departamento" >
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="Departamento" placeholder="Departamento">
          </div>
          </form>
      </div>

       <div class = "TipoMtto" >
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="TipoMtto" placeholder="Tipo de Mantenimiento">
          </div>
          </form>
      </div>

       <div class = "FechaMtto">
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="FechaMtto" placeholder="Fecha a dar Mantenimiento">
          </div>
          </form>
       </div>

       <div class = "Encargado">
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="Encargado" placeholder="Encargado">
          </div>
          </form>
      </div>

       <button class="Agregar" id="login_button" @click="validarUsuario()">AGREGAR</button>
       <button class="Regresar" onClick="history.go(-1);">REGRESAR</button>
      </div>
    </div>
</div>
</template>


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
    position: absolute;
    width: 350px;
    height: 48px;
    left: 350px;
    top: 175px;
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