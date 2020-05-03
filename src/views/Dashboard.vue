<template>
  <div>
    <div class="d-flex flex-wrap">
      <div class="col-12 border1">
        <h2><router-link to="/Reportes" id="Linkreportes"> REPORTES</router-link></h2>


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
          <h4>200</h4>
        </div>
        <div class="color3">
          <h3>PROVEEDORES</h3>
          <h4>300</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  background: #ffa41b;
  color:blanchedalmond;
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



</style>