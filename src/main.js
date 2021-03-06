import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import RGBaster from './utils/rgbaster.js'
Vue.use(VueAxios,axios,RGBaster)
//引入全局统一的数据库，使用vue状态管理
import store from './store'
Vue.prototype.$store=store;
Vue.config.productionTip = false
new Vue({
  //把路由挂载到对象上
  router,
  render: h => h(App)
}).$mount('#app')
