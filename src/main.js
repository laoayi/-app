// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vueOption from './assets/js/vue-option'
import echarts from 'echarts'
import VueAxios from 'vue-axios'
import VuePlugins from '@/assets/plugins/vux-plugins.js';

import weui from 'weui.js';
import 'weui'
Vue.prototype.$weui = weui
Vue.use(VueRouter)
Vue.use(Vuex)

FastClick.attach(document.body)

Vue.config.productionTip = false
function newVue(){ 
    const VueObject=new Vue(vueOption).$mount('#app-box');
  Vue.prototype.$vue=VueObject;
}
if (process.env.NODE_ENV === 'development') {
  // run dev时执行
  newVue()
}else{//run build
  document.addEventListener('deviceready',function(){
    newVue()})
}
