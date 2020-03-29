<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div id="titulo" class="col-8">
          <h1>
            Gestión de
            <br />Tecnologías
          </h1>
          <div id="linea1"></div>
          <div id="linea2"></div>
          <div id="linea3"></div>
        </div>
        <div id="formulario" class="col-4">
            <h2 id="login">LOGIN</h2>
            <form>
                <input type="text">
                <input type="password">
                <button>ENTRAR</button>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#linea1 {
  position: absolute;
  width: 1043px;
  height: 33px;
  left: -43px;
  top: 611px;

  background: #ffa41b;
  border-radius: 84px;
}
#linea2 {
  position: absolute;
  width: 1043px;
  height: 33px;
  left: -335px;
  top: 689px;

  background: #000839;
  border-radius: 84px;
}
#linea3 {
  position: absolute;
  width: 1043px;
  height: 33px;
  left: -574px;
  top: 763px;

  background: #ffa41b;
  border-radius: 84px;
}

#titulo {
  height: 100vh;
}

#titulo h1 {
  position: absolute;
  width: 907px;
  height: 432px;
  left: 93px;
  top: 137px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 144px;
  line-height: 216px;

  color: #000000;
}

#formulario {
  background-color: #ffa41b;
  height: 100vh;
}
</style>