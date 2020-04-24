<template>
  <div class="container-fluid">
    
    <div class="row">
      <h2>Inventario: </h2>
      <router-link to="/mantenimiento" class="btn" id="Linkmtto">Último mantenimiento</router-link>

      <!-- Tabla inventario-->
      <div class="table-container w-100 mt-1" id="Tabla">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Serie</th>
              <th scope="col">Estado</th>
              <th scope="col">Adquisición</th>
              <th scope="col">Marca</th>
              <th scope="col">Garantía</th>
              <th scope="col">Departamento</th>
              <th scope="col">Modelo</th>
              <th scope="col">Mttos. preventivos</th>
            </tr>
          </thead>
          
        </table>
      </div>

      

    </div>
  </div>
</template>


<script>
    export default {
    
    };
</script>


<style scoped>
h2 {
  font-size: 1.6em;
  margin-left:45px;
  margin-top:35px;
}

.table-container {
  overflow-y: scroll;
  min-height: 41vh;
  max-height: 41vh;
}
#Tabla{
  position: relative;
  border-radius: 20px;
  margin-left:35px;
  margin-right: 35px;
  border: 4px solid #005082;
  overflow: hidden;
  font-size: 1em;
}

#Linkmtto{
    color:#FFFF;
    background: #F09204;
    height: 45px;
    border-radius: 25px;
    margin-left:500px;
    margin-top: 20px;
    width:22%;
}

</style>