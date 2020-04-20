import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Configuracion from '../views/Configuracion.vue'
import AgregarProveedor from '../views/AgregarProveedor.vue'
import AgregarMantenimiento from '../views/AgregarMantenimiento.vue'
import AltasBajas from '../views/AltasBajas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Configuracion',
    name: 'Configuracion',
    component: Configuracion
  },
  {
    path: '/AgregarProveedor',
    name: 'Agregar Proveedor',
    component: AgregarProveedor
  },
  {
    path: '/AgregarMantenimiento',
    name: 'AgregarMantenimiento',
    component: AgregarMantenimiento
  },

  {
    path: '/AltasBajas',
    name: 'AltasBajas',
    component: AltasBajas
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
