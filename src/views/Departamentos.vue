<template>
  <div class="container-fluid">
    <div class="row">
        <div class="table-container w-100 mt-1" id="Tabla">
          <label id="titulo">Departamentos</label>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Departamento</th>
              <th scope="col">Encargado</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Ginecología</td>
      <td>Dra. Darcy Itzel Nava</td>
      <td>darcynava@gts.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>General</td>
      <td>Dr. Álvaro Sálgado</td>
      <td>alvarosalg@gts.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pediatría</td>
      <td>Dra Paulina Chávez</td>
      <td>paulinachav@gts.com</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Neurología</td>
      <td>Dr. Carlos Eduardo Elizondo</td>
      <td>carloselizondo@gts.com</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Urgencias</td>
      <td>Dra Mariana Elizabeth Arroyo</td>
      <td>marianarr@gts.com</td>
    </tr>
  </tbody>
        </table>
      </div>
    </div>
    <button class="btn" id="Regresar" onClick="history.go(-1);">REGRESAR</button>
  </div>

</template>

<style scoped>
#Tabla{
  position: relative;
  border-radius: 15px;
  margin-left:35px;
  margin-right: 35px;
  border: 4px solid #005082;
  overflow: hidden;
  font-size: 1em;
}

#titulo{
  font-size:1.6em;
  background-color:#005082;
  width:960px;
  color:#FFF;
  text-align: center;
}
#Regresar{
    margin-left: 600px;
    margin-top: 50px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:0.8em;
}
</style>