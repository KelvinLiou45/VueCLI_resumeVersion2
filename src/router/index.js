import Vue from 'vue';
import VueRouter from 'vue-router'; //載入 vue-router

import home from "@/components/home"
import introduce from "@/components/introduce"
import experience from "@/components/experience"
import skill from "@/components/skill"
import portfolio from "@/components/portfolio"

Vue.use(VueRouter) //使用 vue-router

export default new VueRouter({
  routes: [
    {
      name: 'home',  
      path: '/', 
      component: home  
    },
    {
      name: 'introduce',  
      path: '/introduce', 
      component: introduce  
    },
    {
      name: 'experience',  
      path: '/experience', 
      component: experience  
    },
    {
      name: 'skill',  
      path: '/skill', 
      component: skill  
    },
    {
      name: 'portfolio',  
      path: '/portfolio', 
      component: portfolio  
    }
  ]
})