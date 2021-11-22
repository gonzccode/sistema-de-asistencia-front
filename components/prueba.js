import Vue from 'vue'
import App from './AsistenciaAlumno.vue'
import axios from 'axios' //npm install axios

Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
