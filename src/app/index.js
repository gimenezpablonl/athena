import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue';
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import Axios from 'axios'

Vue.use(Vuelidate);
Vue.use(Vuetify);

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');