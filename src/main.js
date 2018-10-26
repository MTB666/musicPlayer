// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import lazyload from 'vue-lazyload'
import './assets/font/iconfont.css'
Vue.use(lazyload,{
  preLoad:1.3,
  loading:'../static/loading1.gif'
})

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
