import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue';
import BootstrapVue from "bootstrap-vue";
import VueSwal from 'vue-swal'; //librería usada para mostrar mensajes de información

import Vue from 'vue'
import Vuetify from "vuetify";
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueSwal);//Establecemos en Vue el uso de la libreria VueSwal


new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
