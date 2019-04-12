import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import Vue from 'vue';
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import Axios from 'axios'

Vue.use(Vuelidate);
Vue.use(Vuetify,{
  theme: {
    primary: colors.deepPurple.lighten1,
    secondary: colors.deepPurple,
    accent: colors.shades.black,
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
});

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