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
          
          <div class="d-flex justify-content-center  flex-wrap">
              <div class="col-10">
          <h2 class="w-100" id="login">LOGIN</h2>
              </div>
          <form class="col-10">
            <div class="form-group">
              <label for="exampleInputPassword1">Usuario</label>
              <input type="text" class="form-control" v-model="user" id="exampleInputPassword1" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" />
            </div>
            <button class="btn" id="login_button" @click="validarUsuario()">ENTRAR</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            user: "",
            password: ""
        }
    },
    methods:{
        validarUsuario(){
            this.$router.push('/Dashboard')
        }
    }
};
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

#login_button{
    background-color: #000839;
    color: #ffffff;
    font-size: 36px;
    border-radius: 25px;
    width: 100%;
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

#login {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 108px;
  /* identical to box height */

  color: #ffffff;
}

#formulario {
  background-color: #ffa41b;
  height: 100vh;
  padding-top: 300px;
}
</style>