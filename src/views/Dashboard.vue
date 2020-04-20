<template>
  <div>
    <div class="d-flex flex-wrap">
      <div class="col-12 border1">
        <h2>REPORTES</h2>


        <div class="table-container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulo</th>
              <th scope="col">Fecha</th>
              <th scope="col">Ver Reporte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
                        <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
                        <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
                        <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
                        <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>

          </tbody>
        </table>
        </div>
      </div>
      <div class="d-flex w-100 mt-3">
        <div class="color1">
          <h3>USUARIOS</h3>
          <h4>100</h4>
        </div>
        <div class="color2">
          <h3>EQUIPOS</h3>
          <h4>100</h4>
        </div>
        <div class="color3">
          <h3>PROVEEDORES</h3>
          <h4>100</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  background-color: #ffa41b;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  width: 100%;
}


h3{
  font-size: 2em;
  font-weight: bolder;
}

h4{
  font-size: 3em;
  font-weight: bolder;
}
.color1 {
  background-color: #00a8cc;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
  width: 33%;
  padding: 15px;
  text-align: center;
  border-radius: 25px;
}
.color2 {
  background-color: #1da0f2;
  color: #fff;
  font-weight: bold;
  margin: 0 10px;
    width: 33%;
  padding: 15px;
  text-align: center;
    border-radius: 25px;

}
.color3 {
  background-color: #7acee0;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
    width: 33%;
  padding: 15px;
  text-align: center;
    border-radius: 25px;
}

.border1 {
  position: relative;
  border-radius: 20px;
  padding: 0;
  border: 4px solid #ffa41b;
  overflow: hidden;

}

.table-container{
  overflow-y: scroll;
    min-height: 46vh;
    max-height: 64vh;
}

#RectanguloAzul {
  position: absolute;
  width: 1920px;
  height: 161px;
  left: 0px;
  top: -1px;
}

#CuadroBlanco {
  position: absolute;
  width: 1412px;
  height: 1080px;
  left: 525px;
  top: 0px;

  background: #ffffff;
}

#LogOut {
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
  color: #ffffff;
}

#NombreUsuario {
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
  color: #ffffff;
}

#CajaReportes {
  position: absolute;
  width: 754px;
  height: 381px;
  left: 541px;
  top: 328px;

  background: #ffffff;
  border: 10px solid #f09204;
  box-sizing: border-box;
  border-radius: 20px;
}

#HeaderReportes {
  position: absolute;
  width: 755px;
  height: 71px;
  left: 540px;
  top: 316px;

  background: #f09204;
  border: 1px solid #f09204;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}

#TituloReportes {
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
  color: #ffffff;
}

#AgregarMantenimientoRecuadro {
  position: absolute;
  width: 754px;
  height: 71px;
  left: 541px;
  top: 199px;

  background: #00a8cc;
  border: 1px solid #00a8cc;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}

#AgregarMantenimientoTexto {
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

  color: #ffffff;
  flex: none;
  order: 0;
  align-self: center;
  margin: 10px 0px;
}

#PanelNaranja {
  position: relative;
  width: 1920px;
  height: 1080px;

  background: #ffa41b;
}

#TextoCalendario {
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

#TextoDepartamentos {
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

#TextoAltasYBajas {
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

#TextoAgregarProvedor {
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

#TextoConfiguracion {
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

#RecuadroUsuarios {
  position: absolute;
  width: 410px;
  height: 270px;
  left: 541px;
  top: 759px;

  background: #00a8cc;
  border: 1px solid #00a8cc;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}

#TextoUsuarios {
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

  color: #ffffff;
}

#NumUsuarios {
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

  color: #ffffff;
}

#RecuadroEquipos {
  position: absolute;
  width: 410px;
  height: 270px;
  left: 1009px;
  top: 759px;

  background: #1da0f2;
  border: 1px solid #00a8cc;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}

#TextoEquipos {
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

  color: #ffffff;
}

#NumEquipos {
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

  color: #ffffff;
}

#RecuadroProveedores {
  position: absolute;
  width: 410px;
  height: 270px;
  left: 1477px;
  top: 759px;

  background: #7acee0;
  border: 1px solid #7acee0;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}

#TextoProveedores {
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

  color: #ffffff;
}

#NumProveedores {
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

  color: #ffffff;
}
</style>