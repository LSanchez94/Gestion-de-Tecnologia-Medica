<template>
  <div class="container-fluid">
    <div class="AgregarMto">
      <router-link to="/Mantenimiento" id="Linkmtto"> Agregar Mantenimiento </router-link>
    </div>
    <div class="AgregarCap">
      <router-link to="/Capacitacion" id="Linkcap"> Agregar Capacitación </router-link>
    </div>
    <div class="AgregarTarea">
      <router-link to="/Tareas" id="Linktarea"> Agregar Tarea </router-link>
    </div>
    <div class="Calendario"> 
    </div>
    <div class="Semana">
    </div>
  </div>

</template>

<style scoped>

.AgregarMto {
  /* Rectangulo */
  width: 40%;
  margin-left: 25px ;
  top: 170px;
  background: #00A8CC;
  border: 1px solid #00A8CC;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  text-align: center;
  
  
}

h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: bolder;
  font-size: 1.6em;
  margin-left: 5px;
  color: #FFFFFF;
}

.AgregarCap {
  
  width: 40%;
  margin-left: 25px;
  margin-top: 30px;
  background: #00A8CC;
  border: 1px solid #00A8CC;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  text-align: center;
}

.AgregarTarea {
  width: 40%;
  margin-left: 25px;
  margin-top: 30px;

  background: #00A8CC;
  border: 1px solid #00A8CC;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
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