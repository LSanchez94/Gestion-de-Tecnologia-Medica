import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Configuracion from '../views/Configuracion.vue'
import AgregarProveedor from '../views/AgregarProveedor.vue'
import Mantenimiento from '../views/Mantenimiento.vue'
import AltasBajas from '../views/AltasBajas.vue'
import AgregarMtto from '../views/AgregarMtto.vue'
import Capacitacion from '../views/Capacitacion.vue'
import DashboardDr from '../views/DashboardDr.vue'
import Reportes from '../views/Reportes.vue'
import Calendario from '../views/Calendario.vue'
import Inventario from '../views/Inventarios.vue'
<<<<<<< HEAD
import Tareas from '../views/AgregarTarea.vue'
=======
import AgregarTarea from '../views/AgregarTarea.vue'
>>>>>>> b7846b8605861b3bfbecb99465b3106d83068a7f
import Departamentos from '../views/Departamentos.vue'
import Contacto from '../views/contacto.vue'
import ConfiguracionDR from '../views/ConfiguracionDR.vue'

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
    path: '/AgregarMtto',
    name: 'AgregarMtto',
    component: AgregarMtto
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

  {
<<<<<<< HEAD
    path: '/Tareas',
    name: 'Tareas',
    component: Tareas
=======
    path: '/AgregarTarea',
    name: 'AgregarTarea',
    component: AgregarTarea
>>>>>>> b7846b8605861b3bfbecb99465b3106d83068a7f
  },

  {
    path: '/Departamentos',
    name: 'Departamentos',
    component: Departamentos
  },

  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  },
  
  {
    path: '/ConfiguracionDR',
    name: 'ConfiguracionDR',
    component: ConfiguracionDR
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
