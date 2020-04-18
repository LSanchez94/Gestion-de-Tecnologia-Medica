<template>
  <div class="container-fluid">
      <div class="row">
      <div id="LogOut" class="col-8">
          <div id="PanelNaranja"></div>
          <div id="CuadroBlanco"></div>
          <div id="RectanguloAzul"></div>
          <div id="LogOut"></div>
          <div id="CajaReportes"></div>
          <div id="CajaUsuarios"></div>
          <div id="HeaderReportes"></div>
          <div id="TituloReportes"></div>
          <div id="AgregarMantenimientosRecuadro"></div>
          <div id="AgregarMantenimientosTexto"></div>
          <div id="TextoCalendario"></div>
          <div id="TextoDepartamentos"></div>
          <div id="TextoAltasYBajas"></div>
          <div id="TextoAgregarProvedor"></div>
          <div id="TextoConfiguracion"></div>
          <div id="RecuadroUsuarios"></div>
          <div id="TextoUsuarios"></div>
          <div id="NumUsuarios"></div>
          <div id="RecuadroEquipos"></div>
          <div id="TextoEquipos"></div>
          <div id="NumEquipos"></div>
          <div id="RecuadroProveedores"></div>
          <div id="TextoProveedores"></div>
          <div id="NumProveedores"></div>
   

  </div>
</template>

<style scoped>

#RectanguloAzul
{
position: absolute;
width: 1920px;
height: 161px;
left: 0px;
top: -1px;
}

#CuadroBlanco
{
position: absolute;
width: 1412px;
height: 1080px;
left: 525px;
top: 0px;

background: #FFFFFF;
}

#LogOut
{
position: absolute;
width: 188px;
height: 75px;
left: 58px;
top: 25px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 50px;
line-height: 75px;
color: #FFFFFF;
}

#NombreUsuario
{
position: absolute;
width: 495px;
height: 75px;
left: 1336px;
top: 42px;



font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 50px;
line-height: 75px;
color: #FFFFFF;

}

#CajaReportes
{   
position: absolute;
width: 754px;
height: 381px;
left: 541px;
top: 328px;

background: #FFFFFF;
border: 10px solid #F09204;
box-sizing: border-box;
border-radius: 20px;
}

#HeaderReportes
{
position: absolute;
width: 755px;
height: 71px;
left: 540px;
top: 316px;

background: #F09204;
border: 1px solid #F09204;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

#TituloReportes
{
position: absolute;
width: 198px;
height: 60px;
left: 819px;
top: 322px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
color: #FFFFFF;
}

#AgregarMantenimientoRecuadro
{
position: absolute;
width: 754px;
height: 71px;
left: 541px;
top: 199px;

background: #00A8CC;
border: 1px solid #00A8CC;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

#AgregarMantenimientoTexto
{
display: flex;
flex-direction: row;
padding: 10px;

position: absolute;
width: 510px;
height: 90px;
left: 663px;
top: 280px;

transform: matrix(1, 0, 0, -1, 0, 0);

position: static;
width: 490px;
height: 60px;
left: 10px;
top: 15px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;

color: #FFFFFF;
flex: none;
order: 0;
align-self: center;
margin: 10px 0px;
}

#PanelNaranja
{
position: relative;
width: 1920px;
height: 1080px;

background: #FFA41B;
}

#TextoCalendario
{
position: absolute;
width: 261px;
height: 68px;
left: 21px;
top: 209px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;
color: #000000;
}

#TextoDepartamentos
{
position: absolute;
width: 394px;
height: 73px;
left: 21px;
top: 304px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;

color: #000000;
}

#TextoAltasYBajas
{
position: absolute;
width: 273px;
height: 68px;
left: 21px;
top: 404px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;
color: #000000;
}

#TextoAgregarProvedor
{
position: absolute;
width: 446px;
height: 68px;
left: 21px;
top: 499px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;
color: #000000;
}

#TextoConfiguracion
{
position: absolute;
width: 337px;
height: 68px;
left: 21px;
top: 599px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;
color: #000000;
}


#RecuadroUsuarios
{
position: absolute;
width: 410px;
height: 270px;
left: 541px;
top: 759px;

background: #00A8CC;
border: 1px solid #00A8CC;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

#TextoUsuarios
{
position: absolute;
width: 297px;
height: 115px;
left: 597px;
top: 779px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 55px;
line-height: 82px;

color: #FFFFFF;
}

#NumUsuarios
{
position: absolute;
width: 297px;
height: 115px;
left: 606px;
top: 853px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 100px;
line-height: 150px;

color: #FFFFFF;
}

#RecuadroEquipos
{
position: absolute;
width: 410px;
height: 270px;
left: 1009px;
top: 759px;

background: #1DA0F2;
border: 1px solid #00A8CC;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

#TextoEquipos
{
position: absolute;
width: 259px;
height: 115px;
left: 1056px;
top: 782px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 55px;
line-height: 82px;

color: #FFFFFF;
}

#NumEquipos
{
position: absolute;
width: 297px;
height: 115px;
left: 1057px;
top: 853px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 100px;
line-height: 150px;

color: #FFFFFF;
}

#RecuadroProveedores
{
position: absolute;
width: 410px;
height: 270px;
left: 1477px;
top: 759px;

background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

#TextoProveedores
{
position: absolute;
width: 345px;
height: 115px;
left: 1518px;
top: 787px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 45px;
line-height: 67px;

color: #FFFFFF;
}

#NumProveedores
{
position: absolute;
width: 297px;
height: 115px;
left: 1527px;
top: 853px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 100px;
line-height: 150px;

color: #FFFFFF;
}

</style>