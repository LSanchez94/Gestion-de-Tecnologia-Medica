<template>
  <div class="container-fluid">
      <div class="row">
          <div id="Agregar Proveedor" class="col-8">
             <h1>Datos:</h1>

    <div class = "Linea1" >
          <form>
          <div class="form-group">
          <label for="exampleInputEmail1">Nombre de la empresa:</label>
          <input type="text" class="form-control" id="exampleInputNSerie1" aria-describedby="nserieHelp" placeholder="Nombre de la empresa">
          </div>
          </form>
      </div>

      <div class = "Linea2" >
          <form>
          <div class="form-group">
          <label for="exampleInputEmail1">Nombre del contacto:</label>
          <input type="text" class="form-control" id="exampleInputNSerie1" aria-describedby="nserieHelp" placeholder="Nombre del contacto">
          </div>
          </form>
      </div>

      <div class = "Linea3" >
          <form>
          <div class="form-group">
          <label for="exampleInputEmail1">Correo electrónico :</label>
          <input type="email" class="form-control" id="exampleInputNSerie1" aria-describedby="nserieHelp" placeholder="Correo electrónico">
          </div>
          </form>
      </div>

      <div class = "Linea4" >
          <form>
          <div class="form-group">
          <label for="exampleInputEmail1">Número de teléfono:</label>
          <input type="number" class="form-control" id="exampleInputNSerie1" aria-describedby="nserieHelp" placeholder="Numero de teléfono">
          </div>
          </form>
      </div>

      <div class = "Linea5" >
          <form>
          <div class="form-group">
          
          <input type="text" class="form-control" id="exampleInputNSerie1" aria-describedby="nserieHelp" placeholder="Dirección">
          </div>
          </form>
      </div>

          </div>

          <!-- <div class="Linea1">
            <h3 align = center>Nombre de la empresa</h3>
          </div>

          <div class="Linea2">
            <h3 align = center>Nombre del contacto</h3>
          </div>

          <div class="Linea3">
            <h3 align = center>Dirección de la empresa</h3>
    
          </div>

          <div class="Linea4">
            <h3 align = center>Número de teléfono</h3>
            
          </div>

          <div class="Linea5">
            <h3 align = center>Email</h3>
          </div>
       -->
  
          <div class="RectanguloGuardar">
              <h2 align = center>Guardar</h2>
           </div>

        <div class="RectanguloRegresar">
              <h2 align = center>Regresar</h2>
           </div> 



          
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
<!-- 
    <input type="button" value="Regresar" onClick="history.go(-1);">   -->
     
      
               
</template>

<style scoped>
h3 {
 font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 45px;
color: #000000;
  }

h2 {
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
color: #FFFFFF;
}

h1 {
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
color: #000000;

}



.Linea1
{
position: absolute;
width: 1043px;
height: 49px;
left: 660px;
top: 377px;

background: #7ACEE0;
border: 1px solid #00A8CC;
box-sizing: border-box;
border-radius: 25px;
}

.Linea2
{
position: absolute;
width: 1043px;
height: 49px;
left: 660px;
top: 458px;

background: #7ACEE0;
border-radius: 25px
}

.Linea3
{
position: absolute;
width: 1043px;
height: 49px;
left: 660px;
top: 539px;

background: #7ACEE0;
border-radius: 25px;
}

.Linea4
{
position: absolute;
width: 1043px;
height: 49px;
left: 660px;
top: 618px;

background: #7ACEE0;
border-radius: 25px;
}

.Linea5
{
position: absolute;
width: 1043px;
height: 49px;
left: 660px;
top: 701px;

background: #7ACEE0;
border-radius: 25px;
}


.NombreEmpresa
{
position: absolute;
width: 348px;
height: 45px;
left: 683px;
top: 377px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 45px;
color: #000000;
}

.NombreContacto
{
position: absolute;
width: 320px;
height: 45px;
left: 683px;
top: 460px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 45px;
color: #000000;
}

.DireccionEmpresa
{
position: absolute;
width: 367px;
height: 45px;
left: 683px;
top: 539px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 45px;
color: #000000;
}


.NumTelefono
{
position: absolute;
width: 299px;
height: 45px;
left: 683px;
top: 622px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 45px;
color: #000000;
}

.Email
{
position: absolute;
width: 82px;
height: 45px;
left: 683px;
top: 701px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 45px;
color: #000000;
}

.RectanguloGuardar
{
position: absolute;
width: 509px;
height: 49px;
left: 927px;
top: 897px;

background: #005082;
border: 1px solid #005082;
box-sizing: border-box;
border-radius: 25px;
}

.TextoGuardar
{
position: absolute;
width: 147px;
height: 45px;
left: 1108px;
top: 899px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
color: #FFFFFF;

}

.RectanguloRegresar
{
position: absolute;
width: 228px;
height: 49px;
left: 1603px;
top: 976px;

background: #005082;
border: 1px solid #005082;
box-sizing: border-box;
border-radius: 25px;
}

.TextoRegresar
{
position: absolute;
width: 153px;
height: 45px;
left: 1643px;
top: 980px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
color: #FFFFFF;
}

</style>