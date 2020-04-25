<template>
  <div class="container-fluid">
      <div class="row">
          <div id="Agregar Proveedor" class="col-8">
             <h1>Datos:</h1>
             
<!-- Formulario para agregar datos de proveedor -->
    <div class = "Linea1" >
          <form>
          <div class="form-group Linea1">
          <input type="text" class="form-control" id="Linea1" aria-describedby="nserieHelp" placeholder="Nombre de la empresa"/>
          </div>
          </form>
      </div>

      <div class = "Linea2" >
          <form>
          <div class="form-group Linea2">
          <input type="text" class="form-control" id="Linea2" aria-describedby="nserieHelp" placeholder="Nombre del contacto" >
          </div>
          </form>
      </div>

      <div class = "Linea3" >
          <form>
          <div class="form-group Linea3">
           <input type="email" class="form-control" id="Linea3" aria-describedby="nserieHelp" placeholder="Correo electrónico" >
          </div>
          </form>
      </div>

      <div class = "Linea4" >
          <form>
          <div class="form-group Linea4">
          <input type="text" class="form-control" id="Linea4" aria-describedby="nserieHelp" placeholder="Numero de teléfono" >
          </div>
          </form>
      </div>

      <div class = "Linea5" >
          <form>
          <div class="form-group Linea5">
         <input type="text" class="form-control" id="Linea5" aria-describedby="nserieHelp" placeholder="Dirección" >
          </div>
          </form>
      </div>

          </div>
 
     <div class="RectanguloRegresar">
      <router-link to="/Dashboard" class = "btn" id="TextoRegresar">Regresar </router-link>
    </div> 

        
      

  | <button class="btn" id="RectanguloGuardar">Guardar</button>
 <!-- <button class="<RectanguloRegresar" onClick="history.go(-1);">Regresar</button>  -->

          <div id="PanelNaranja"></div>
          <div id="CuadroBlanco"></div>
          <div id="RectanguloAzul"></div>
          <div id="LogOut"></div>
          <div id="TextoCalendario"></div>
          <div id="TextoDepartamentos"></div>
          <div id="TextoAltasYBajas"></div>
          <div id="RectanguloMasOscuro"></div>
          <div id="TextoAgregarProvedor"></div>
          <div id="TextoConfiguracion"></div>
          <div id="TextoCalendario"></div>
          <div id="Linea1"></div>
          <div id="Linea2"></div>
          <div id="Linea3"></div>
          <div id="Linea4"></div>
          <div id="Linea5"></div>
          <div id="RectanguloGuardar"></div>
          <div id="RectanguloRegresar"></div>
          <div id="TextoGuardar"></div>
          <div id="TextoRegresar"></div>
          <div id="Datos"></div>
          <div id="NombreEmpresa"></div>
          <div id="NombreContacto"></div>
          <div id="DireccionEmpresa"></div>
          <div id="NumTelefono"></div>
          <div id="Email"></div>
          </div>
  </div> 
     
                  
</template>

<style scoped>

.Linea1
{
   position: absolute;
width: 900px;
height: 49px;
left: 60px;
top: 75px;
/* background: #7ACEE0;
border: 1px solid #00A8CC;
box-sizing: border-box;
border-radius: 25px; */
}

.Linea2
{
position: absolute;
width: 900px;
height: 49px;
left: 60px;
top: 100px;

 /* background: #7ACEE0;
border-radius: 25px  */
}

.Linea3
{
position: absolute;
width: 900px;
height: 49px;
left: 60px;
top: 125px;

/* background: #7ACEE0;
border-radius: 25px; */
}

.Linea4
{
position: absolute;
width: 900px;
height: 49px;
left: 60px;
top: 150px;

/* 
background: #7ACEE0;
border-radius: 25px; */
}

.Linea5
{
position: absolute;
width: 900px;
height: 49px;
left: 60px;
top: 175px;

/* background: #7ACEE0;
border-radius: 25px; */
}

#RectanguloGuardar
{
position: absolute;
width: 509px;
margin-left: 600px;
margin-top: 500px;
background: #005082;
box-sizing: border-box; 
border-radius: 25px;
color:#fff;
}

#TextoGuardar
{

color: #FFFFFF;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
margin-left: 5px;
color: #FFFFFF;

}

.RectanguloRegresar
{
width: 228px;
height: 49px;
left: 1150px;
top: 600px;
background: #005082;
box-sizing: border-box;
border-radius: 25px;
text-align: center;

}

#TextoRegresar
{
color: #FFFFFF;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
margin-left: 5px;
color: #FFFFFF;
}

</style>