<template>
    <div>
    <div class="container-fluid">
      <div class="row">
          <div id="rectangulo1"></div>
          <div id="rectangulo2"></div>
        </div>
       <button class="btn" id="configuracion" @click="/*FUNCION DE BOTON*/">Configuracion</button>
       <button class="btn" id="contacto" @click="/*FUNCION DE BOTON*/">Contacto</button>
       <button class="btn" id="Logout" @click="/*FUNCION DE BOTON*/">Logout</button>
       <button class="btn" id="Regresar" @click="/*FUNCION DE BOTON*/">REGRESAR</button>
        <div id="Formulario" class="col-4">
          
          <div class="d-flex justify-content-center  flex-wrap">
              <div class="col-10">
          <h2 class="w-100" id="Cambiar">Cambiar contraseña</h2>
              </div>
          <form class="col-10">
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña nueva</label>
              <input type="text" class="form-control" v-model="user" id="exampleInputPassword1" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Repita contraseña</label>
              <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" />
            </div>
            <button class="btn" id="cambiar_button" @click="/*FUNCION DE BOTON*/">CAMBIAR</button>
          </form>
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
#rectangulo1{
    position: absolute;
    width: 1920px;
    height: 161px;
    left: 0px;
    top: 0px;

    background: #030D4A;
}

#rectangulo2{
    position: absolute;
    width: 523px;
    height: 1080px;
    left: 0px;
    top: 0px;

    background: #FFA41B;
}

#configuracion{
  position: absolute;
  width: 337px;
  height: 68px;
  left: 58px;
  top: 309px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 67px;
  /* identical to box height */


  color: #000000;
}

#contacto{
  position: absolute;
  width: 525px;
  height: 99px;
  left: -2px;
  top: 297px;

  background: #F09204;
  
  
  /*contacto*/
  position: absolute;
  width: 218px;
  height: 68px;
  left: 58px;
  top: 224px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 67px;
  /* identical to box height */


  color: #000000;
}

#Logout{
  position: absolute;
  width: 188px;
  height: 75px;
  left: 58px;
  top: 43px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 75px;
  /* identical to box height */


  color: #FFFFFF;
}

#cambiar_button{
  position: absolute;
  width: 410px;
  height: 50px;
  left: 585px;
  top: 368px;

  background: #1DA0F2;
  border: 1px solid #00A8CC;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  /* Cambiar */
  position: absolute;
  width: 159px;
  height: 53px;
  left: 695px;
  top: 368px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  /* identical to box height */
  color: #FFFFFF;
}

#Formulario{
  position: absolute;
  width: 327px;
  height: 53px;
  left: 614px;
  top: 288px;
}

#Regresar{
  position: absolute;
width: 228px;
height: 49px;
left: 1624px;
top: 982px;

background: #005082;
border: 1px solid #005082;
box-sizing: border-box;
border-radius: 25px;


/* REGRESAR */
position: absolute;
width: 153px;
height: 45px;
left: 1663px;
top: 982px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
/* identical to box height */


color: #FFFFFF;
}
</style>
