//entry file
import Vue from  'vue'

//import app root component
import app from './App.vue'

// import Header of Mint-UI
import { Header } from 'mint-ui'

//import style of MUI
import './lib/mui/css/mui.min.css'
Vue.component(Header.name, Header)

//create a instance
var vm = new Vue({
  el: '#app',
  render: c => c(app)
})