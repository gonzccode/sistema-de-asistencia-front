import Vue from 'vue'
import App from './components/AsistenciaAlumno.vue'
import App from './pages/login-alumno.vue'
import App from './pages/login-coordinador.vue'
import axios from 'axios' //npm install axios

Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
