<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <a class="navbar-brand" href="#">Gestión de Tecnologías</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{userName}}</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/">Log Out</router-link>
            </div>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>

<script>
export default {

  computed:{
    userName: function(){
      var name = localStorage.getItem('name');
      var perfil = localStorage.getItem('perfil');
      console.log(name)
      return (name+' - '+ perfil);
    }
  }
};
</script>

<style scoped>

.navbar{
    background-color: #030D4A;
}
</style>