

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="d-flex w-100 mt-3">
        <div class="color1">
          <h3>USUARIOS MÉDICOS</h3>
          <h4>{{medicos}}</h4>
        </div>
        <div class="color2">
          <h3>ADMINISTRADORES</h3>
          <h4>{{administradores}}</h4>
        </div>
        <div class="color3">
          <h3>USUARIOS</h3>
          <h4>{{numeroUsuarios}}</h4>
        </div>
      </div>
      <!-- AQUI EMPIEZA EL FORMULARIO -->
      <div class="mt-3 w-100">
        <h2>Alta de Usuario</h2>
        <form class="row">
          <div class="form-group col-12">
            <!-- <label for="exampleInputEmail1">Nombre Completo</label> -->
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nombre Completo"
              v-model="usuario.name"
            />
          </div>
          <div class="form-group col-6">
            <input
              type="email"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Correo"
              v-model="usuario.correo"
            />
          </div>
          <div class="form-group col-6">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Contraseña"
              v-model="usuario.password"
            />
          </div>
          <div class="form-group col-6">
            <!-- <label for="exampleFormControlSelect1">Example select</label> -->
            <select class="form-control" id="exampleFormControlSelect1" v-model="usuario.perfil">
              <option>Administrador</option>
              <option>Médico</option>
            </select>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-primary" @click="agregarUsuario()">AGREGAR</button>
          </div>
        </form>
      </div>

      
      <h2 class="mt-3">Usuarios Registrados</h2>
      <!-- {{usuarios}} -->
      <div class="table-container w-100 mt-1">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Perfil</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(u, index) in usuarios" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{u.name}}</td>
              <td>{{u.correo}}</td>
              <td>{{u.perfil}}</td>
            </tr>
          </tbody>
        </table>
      </div>
 <button class="btn" id="RectanguloRegresar" onClick="history.go(-1);">REGRESAR</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: {
        name: "",
        correo: "",
        password: "",
        perfil: ""
      },
      usuarios: [],
      numeroUsuarios: 0,
      administradores: 0,
      medicos: 0
    };
  },
  methods: {
    agregarUsuario() {
      axios
        .post("http://localhost:3000/Usuarios/addUser", this.usuario)
        .then(response => {
          alert(response.data);
          this.traerUsuarios();
        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    },
    traerUsuarios() {
      axios
        .get("http://localhost:3000/Usuarios/getUsers")
        .then(response => {
          this.usuarios = response.data;
          this.numeroUsuarios = response.data.length;

          this.administradores = 0;
          this.medicos = 0;
          response.data.forEach(element => {
            if (element.perfil == "Administrador") {
              this.administradores++;
            } else {
              this.medicos++;
            }
          });
        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    }
  },
  mounted() {
    this.traerUsuarios();
  }
};
</script>


<style scoped>
h2 {
  font-size: 1.6em;
  color:black;
}
h3 {
  font-size: 2em;
  font-weight: bolder;
}

h4 {
  font-size: 3em;
  font-weight: bolder;
}

.table-container {
  overflow-y: scroll;
  min-height: 41vh;
  max-height: 41vh;
  
}

.color1 {
  background-color: #7acee0;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
  width: 33%;
  padding: 15px;
  text-align: center;
  border-radius: 25px;
}
.color2 {
  background-color: #005082;
  color: #fff;
  font-weight: bold;
  margin: 0 10px;
  width: 33%;
  padding: 15px;
  text-align: center;
  border-radius: 25px;
}
.color3 {
  background-color: #f09204;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
  width: 33%;
  padding: 15px;
  text-align: center;
  border-radius: 25px;
}
#RectanguloRegresar{
    width: 228px;
    margin-left: 650px;
    top:100px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
}

#TextoRegresar{
    color: #FFFFFF;
    margin-left: 45px;
    margin-top: 3px;
}
</style>