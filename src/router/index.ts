import About from "@/pages/about/About.vue";
import Care from "@/pages/care/Care.vue";
import Filmoteca from "@/pages/filmoteca/Filmoteca.vue";
import Home from "@/pages/home/Home.vue";
import Warning from "@/pages/home/Warning.vue";
import Select from "@/pages/select/Select.vue";


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
      path: '/video',
      name: 'video',
      component: Filmoteca
    },
    {
      path: '/characters',
      name: 'characters',
      component: Select
    },
     {
      path: '/care',
      name: 'care',
      component: Care
    },
     {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})