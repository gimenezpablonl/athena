import Vue from 'vue';
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import Axios from 'axios'

Vue.use(Vuelidate);
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');