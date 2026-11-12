import Home from "@/pages/home/Home.vue";
import Warning from "@/pages/home/Warning.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'warning',
      component: Warning
    },
     {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})