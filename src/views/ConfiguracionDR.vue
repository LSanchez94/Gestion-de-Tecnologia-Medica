<template>
  <div class="container-fluid">
    <div class="row">
      <!-- AQUI EMPIEZA EL FORMULARIO FALTA CODIGO SOBRE PRESCRIPCIÓN DE CONTRASEÑA-->
         <div>
           <label id="titulo">Cambiar contraseña: </label>
           <form id="form">
           <div class="form-group" >
             <input 
              type="text"
              class="form-control"
              id="nueva"
              placeholder="Contraseña nueva"
             >
           </div>
           <div class="form-group" id="repetir">
             <input
              type="text"
              class="form-control"
              id="repetir"
              placeholder="Repetir contraseña"
             >
           </div>
           </form>
         </div>
         <!-- FALTA AGREGAR METODO DE CAMBIO DE CONTRASEÑA POR ESO FALTA DARLE FUNCION AL BOTON-->
         <button class="btn" id="Cambiar">AGREGAR</button>
         <button class="btn" id="Boton" onClick="history.go(-1)">REGRESAR</button>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#titulo{
  margin-top:35px;
  margin-left:35px;
  font-size:1.6em;
  font-weight: 600;
}

#nueva{
  margin-left:35px;
  margin-top: 15px;
  width:750px;
  background-color:#7ACEE0;
}

#repetir{
  position:absolute;
  left:175px;
  width:750px;
  background-color:#7ACEE0;
}

#Boton{
    margin-left: 600px;
    margin-top: 300px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:0.8em;
}
#Cambiar{
   margin-left: 550px;
    margin-top: 50px;
    background: #005082;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:0.8em;
}

</style>
