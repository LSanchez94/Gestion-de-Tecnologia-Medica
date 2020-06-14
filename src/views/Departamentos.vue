<template>
  <div class="container-fluid">
    <div class="row">
        <div class="table-container w-100 mt-1" id="Tabla">
          <label id="titulo">Departamentos</label>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Departamento</th>
              <th scope="col">Encargado</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          
        </table>
      </div>
      <button class="btn" id="Regresar" onClick="history.go(-1);">REGRESAR</button>
    </div>
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
    margin-top: 400px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:0.8em;
}
</style>