//entry file
import Vue from  'vue'
//import Router package
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

//import app root component
import app from './App.vue'

// import Header of Mint-UI
import { Header, Swipe, SwipeItem } from 'mint-ui'

//import style of MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//import router.js router modules
import router from './router.js'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//create a instance
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router //
})