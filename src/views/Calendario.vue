<template>
  <div class="container-fluid">
    <div class="AgregarMto">
      <router-link to="/AgregarMtto" id="Linkmtto"> Agregar Mantenimiento </router-link>
    </div>
    <div class="AgregarCap">
      <router-link to="/Capacitacion" id="Linkcap"> Agregar Capacitación </router-link>
    </div>
    <div class="AgregarTarea">
      <router-link to="/AgregarTarea" id="Linktarea"> Agregar Tarea </router-link>
    </div>
    <div class="Calendario"> 
    </div>
    <div class="Semana">
    </div>
    <button class="Regresar" onClick="history.go(-1);">REGRESAR</button>
  </div>

</template>

<style scoped>

.AgregarMto {
  /* Rectangulo */
  width: 40%;
  margin-left: 25px ;
  margin-top: 40px;
  background: #00A8CC;
  border: 1px solid #00A8CC;
  border-radius: 25px;
  text-align: center;
  font-size: 0.9em;
  
}
.Regresar{
    width: 200px;
    margin-left: 600px;
    margin-top: 50px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    height: 49px;
    font-size:1.2em;
    
}


.AgregarCap {
  
  width: 40%;
  margin-left: 25px;
  margin-top: 10px;
  background: #00A8CC;
  border: 1px solid #00A8CC;
  font-size: 0.9em;
  border-radius: 25px;
  text-align: center;
}

.AgregarTarea {
  width: 40%;
  margin-left: 25px;
  margin-top: 10px;
  font-size: 0.9em;
  background: #00A8CC;
  border: 1px solid #00A8CC;

  border-radius: 25px;
  text-align: center;

}

.Calendario {
  width: 40%;
  height: 300px;
  margin-left: 25px;
  margin-top: 30px;
  box-sizing: border-box;
  background:  #F09204
}

.Semana {
  position: absolute;
  width: 40%;
  height: 430px;
  margin-left: 450px;
  top: 150px;
  box-sizing: border-box;
  background:  #F09204
}

#Linkmtto{
    
  color:#FFFF;
  background: #00A8CC;
  font-family: Poppins;
  font-style: normal;
  font-weight: bolder;
  font-size: 1.6em;
  margin-left: 5px;
  color: #FFFFFF;

}

#Linkcap{
    
  color:#FFFF;
  background: #00A8CC;
  font-family: Poppins;
  font-style: normal;
  font-weight: bolder;
  font-size: 1.6em;
  margin-left: 5px;
  color: #FFFFFF;

}

#Linktarea{
    
  color:#FFFF;
  background: #00A8CC;
  font-family: Poppins;
  font-style: normal;
  font-weight: bolder;
  font-size: 1.6em;
  margin-left: 5px;
  color: #FFFFFF;

}


</style>