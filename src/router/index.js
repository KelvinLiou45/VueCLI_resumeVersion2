import Vue from 'vue';
import VueRouter from 'vue-router'; //載入 vue-router

import home from "@/components/home"

Vue.use(VueRouter) //使用 vue-router

export default new VueRouter({
  routes: [
    {
      name: 'home',  
      path: '/', 
      component: home  
    }
  ]
})