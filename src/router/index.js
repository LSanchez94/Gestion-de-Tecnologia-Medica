import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Configuracion from '../views/Configuracion.vue'
import AgregarProveedor from '../views/AgregarProveedor.vue'
import Mantenimiento from '../views/Mantenimiento.vue'
import AltasBajas from '../views/AltasBajas.vue'
<<<<<<< HEAD
import AgregarMtto from '../views/AgregarMtto.vue'
import prueba from '../views/prueba.vue'
=======
import Capacitacion from '../views/Capacitacion.vue'
import DashboardDr from '../views/DashboardDr.vue'
import Reportes from '../views/Reportes.vue'
import Calendario from '../views/Calendario.vue'
import Inventario from '../views/Inventarios.vue'
import Tarea from '../views/AgregarTarea.vue'
>>>>>>> 72dff180cab5e8b803fa7e429f2cb4914ced6f77

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
<<<<<<< HEAD
    path: '/AgregarMtto',
    name: 'AgregarMtto',
    component: AgregarMtto
=======
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

  {
    path: '/Tarea',
    name: 'Tarea',
    component: Tarea
>>>>>>> 72dff180cab5e8b803fa7e429f2cb4914ced6f77
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
