<template>
  <div id="app">
    <TopMenu v-if="menuVisible"></TopMenu>
    <LeftMenu v-if="menuVisible"></LeftMenu>
    <div v-if="menuVisible" class="app-container">
      <router-view />
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import TopMenu from "@/components/Global/MenuTop.vue";
import LeftMenu from "@/components/Global/MenuLeft.vue";

export default {
  data() {
    return {
      menuVisible: true
    };
  },
  methods: {
    checkRoute() {
      var ruta = this.$route.path;
      if (ruta == "/") {
        this.menuVisible = false;
      } else {
        this.menuVisible = true;
      }
    }
  },
  components: {
    TopMenu,
    LeftMenu
  },
  mounted() {
    this.checkRoute();
  }
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
}

a:hover{
  text-decoration: none;
}

ul {
  list-style: none;
}

.app-container {
  max-width: calc(100vw - 300px);
  min-height: calc(100vh - 56px);
  margin-top: 56px;
  margin-left: 300px;
  padding: 15px;
}
</style>
