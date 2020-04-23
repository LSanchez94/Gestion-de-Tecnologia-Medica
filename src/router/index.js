import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Configuracion from '../views/Configuracion.vue'
import AgregarProveedor from '../views/AgregarProveedor.vue'
import Mantenimiento from '../views/Mantenimiento.vue'
import AltasBajas from '../views/AltasBajas.vue'
import Capacitacion from '../views/Capacitacion.vue'
import DashboardDr from '../views/DashboardDr.vue'
import Reportes from '../views/Reportes.vue'
import Calendario from '../views/Calendario.vue'
import Inventario from '../views/Inventarios.vue'

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
    path: '/Mantenimiento',
    name: 'Mantenimiento',
    component: Mantenimiento
  },

  {
    path: '/AltasBajas',
    name: 'AltasBajas',
    component: AltasBajas
  },

  {
    path: '/Capacitacion',
    name: 'Capacitacion',
    component: Capacitacion
  },

 {
     path: '/DashboardDr',
     name: 'DashboardDr',
     component: DashboardDr
  },

  {
    path: '/Reportes',
    name: 'Reportes',
    component: Reportes
  },

  {
    path: '/Calendario',
    name: 'Calendario',
    component: Calendario
  },

  {
    path: '/Inventarios',
    name: 'Inventario',
    component: Inventario
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
