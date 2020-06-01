import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//import FullCalendar from 'vue-fullcalendar';
import { CalendarPlugin } from 'bootstrap-vue'
Vue.use(CalendarPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
