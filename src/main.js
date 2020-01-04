import Vue from 'vue'
import App from './App.vue'

// 引入BootStrap-vue 和 引入BootStrap
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue)

//引入axios
import{
  axios_instance
} from "./util/axios"

Vue.prototype.axios=axios_instance
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
