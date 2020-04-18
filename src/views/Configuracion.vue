<template>
 <div class="container-fluid">
       <div class= "row">
          <div id="Altas/Bajas" class="col-8">

          </div>

 </template>

 <style scoped>

 #Rectangulo Naranja
  {
position: relative;
width: 1920px;
height: 1080px;

background: #FFA41B;
 } 

 #Rectangulo Blanco
 {
position: absolute;
width: 1412px;
height: 1080px;
left: 525px;
top: 9px;

background: #FFFFFF;       
 }

 #Rectangulo Azul
 {
position: absolute;
width: 1920px;
height: 161px;
left: 0px;
top: 0px;

background: #030D4A;
 }

 #LogoutAzul
 {
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

 #NombredeUsuarioAzul
 {
     position: absolute;
width: 495px;
height: 75px;
left: 1336px;
top: 43px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 50px;
line-height: 75px;
/* identical to box height */


color: #FFFFFF;

 }

#CalendarioNaranja
{
    position: absolute;
width: 261px;
height: 68px;
left: 21px;
top: 222px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;
/* identical to box height */


color: #000000;

}

#DepartamentosNaranja
{
    position: absolute;
width: 394px;
height: 73px;
left: 21px;
top: 318px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;

color: #000000;

}

#Altas/BajasNaranja
{
position: absolute;
width: 273px;
height: 68px;
left: 21px;
top: 419px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;
/* identical to box height */


color: #000000;
}

#AgregarProveedorNaranja
{
    position: absolute;
width: 446px;
height: 68px;
left: 21px;
top: 515px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;
/* identical to box height */


color: #000000;


}

#RectanguloNaranjaF
{
    position: absolute;
width: 525px;
height: 99px;
left: 0px;
top: 403px;

background: #F09204;
}

#RectanguloAzulbb
{
    position: absolute;
width: 410px;
height: 270px;
left: 569px;
top: 224px;

background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

#RectanguloAzulF
{
    position: absolute;
width: 410px;
height: 270px;
left: 1021px;
top: 224px;

background: #005082;
border: 1px solid #005082;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;

}

#RectanguloNaranja
{
    
position: absolute;
width: 410px;
height: 270px;
left: 1472px;
top: 224px;

background: #F09204;
border: 1px solid #F09204;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

#ConfiguracionNaranja
{
    position: absolute;
width: 337px;
height: 68px;
left: 21px;
top: 611px;

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 45px;
line-height: 67px;
/* identical to box height */


color: #000000;

}

#USUARIOS MÉDICOS
{
position: absolute;
width: 297px;
height: 115px;
left: 610px;
top: 264px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 52px;

color: #FFFFFF;
}

#ADMINISTRADORES 
{
    
position: absolute;
width: 297px;
height: 115px;
left: 1061px;
top: 264px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 45px;

color: #FFFFFF;
}

#USUARIOS 

{
position: absolute;
width: 297px;
height: 115px;
left: 1518px;
top: 264px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 55px;
line-height: 82px;

color: #FFFFFF;
}

#Alta de usuario

{
position: absolute;
width: 319px;
height: 60px;
left: 569px;
top: 530px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
/* identical to box height */


color: #000000;

}

#RectanguloAzulbb2
{
    
position: absolute;
width: 1246px;
height: 48px;
left: 569px;
top: 604px;

background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px
}

#RectanguloAzulbb3
{
    position: absolute;
width: 562px;
height: 48px;
left: 569px;
top: 673px;

background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#RectanguloAzulbb4
{
position: absolute;
width: 665px;
height: 48px;
left: 1150px;
top: 673px;

background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#RectanguloAzulbb5
{
    position: absolute;
width: 562px;
height: 48px;
left: 569px;
top: 744px;

background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#RectanguloAzulbb6
{
    position: absolute;
width: 665px;
height: 48px;
left: 1150px;
top: 748px;

background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Nombre completo 

{
position: absolute;
width: 320px;
height: 53px;
left: 598px;
top: 601px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 52px;
/* identical to box height */


color: #FFFFFF;
}

#Correo
{

position: absolute;
width: 120px;
height: 53px;
left: 598px;
top: 670px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 52px;
/* identical to box height */


color: #FFFFFF;
}

#Contraseña 
{

position: absolute;
width: 208px;
height: 53px;
left: 1182px;
top: 674px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 52px;
/* identical to box height */


color: #FFFFFF;
}

#Departamento
{
 
position: absolute;
width: 259px;
height: 53px;
left: 598px;
top: 744px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 52px;
/* identical to box height */


color: #FFFFFF;

}

#Permisos
{

position: absolute;
width: 159px;
height: 53px;
left: 1182px;
top: 745px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 52px;
/* identical to box height */


color: #FFFFFF;
}

#RectanguloAzulF2
{
position: absolute;
width: 410px;
height: 50px;
left: 1462px;
top: 828px;

background: #1DA0F2;
border: 1px solid #00A8CC;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

#Agregar
{
    position: absolute;
width: 147px;
height: 53px;
left: 1593px;
top: 825px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 52px;
/* identical to box height */


color: #FFFFFF;
}

#Cambiar contraseña

{
position: absolute;
width: 437px;
height: 60px;
left: 569px;
top: 852px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
/* identical to box height */


color: #000000;
}

#RectanguloAzulbb7
{
    position: absolute;
width: 562px;
height: 48px;
left: 569px;
top: 919px;

background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#RectanguloAzulbb8
{
    position: absolute;
width: 665px;
height: 48px;
left: 1150px;
top: 922px;

background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Contraseña nueva 

{
position: absolute;
width: 327px;
height: 53px;
left: 598px;
top: 916px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 52px;
/* identical to box height */


color: #FFFFFF;
}

#Repetir contraseña
{

position: absolute;
width: 334px;
height: 53px;
left: 1182px;
top: 919px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 52px;
/* identical to box height */


color: #FFFFFF;

}
 #RectanguloAzulF3
 {
position: absolute;
width: 410px;
height: 50px;
left: 569px;
top: 996px;

background: #1DA0F2;
border: 1px solid #00A8CC;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
 }

 #Cambiar
 {
    
position: absolute;
width: 159px;
height: 53px;
left: 679px;
top: 996px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 52px;
/* identical to box height */


color: #FFFFFF;
 }

 #RectanguloAzulFF3
{
position: absolute;
width: 228px;
height: 49px;
left: 1624px;
top: 988px;

background: #005082;
border: 1px solid #005082;
box-sizing: border-box;
border-radius: 25px;
}

 #REGRESAR

{
position: absolute;
width: 153px;
height: 45px;
left: 1661px;
top: 992px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
/* identical to box height */


color: #FFFFFF;
}
