import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VeeValidate from 'vee-validate'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VeeValidate)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
