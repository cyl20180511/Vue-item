//entry file
import Vue from  'vue'
//import Router package
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
//Set Request Root
Vue.http.options.root = 'http://vue.studyit.io'
//全局配置表单提交格式
Vue.http.options.emulateJSON = true

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//import app root component
import app from './App.vue'

// 按需导入 Mint-UI 中的组件   
/* import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload); */
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//import style of MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//import router.js router modules
import router from './router.js'


//create a instance
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router //
})