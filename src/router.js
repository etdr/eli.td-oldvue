import { createWebHistory, createRouter } from 'vue-router'


import Base from './components/Base/Base.vue'

import Home from './components/Base/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Base',
    component: Base,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      // {
      //   path: 'about',
      //   name: 'About',
      //   component: About,
      //   children: [
      //     {
      //       path: '',
      //       name: 'Summary',
      //       component: Summary
      //     },
      //     {
      //       path: 'what-I-do',
      //       name: 'What I Do',
      //       component: () => import('./components/base/about/WhatIDo.vue')
      //     },
      //     {
      //       path: 'worldview',
      //       name: 'Worldview',
      //       component: () => import('./components/base/about/Worldview.vue')
      //     },
      //     {
      //       path: 'motifs',
      //       name: 'Motifs',
      //       component: () => import('./components/base/about/Motifs.vue')
      //     },
      //     {
      //       path: 'background',
      //       name: 'Background',
      //       component: () => import('./components/base/about/Background.vue')
      //     }
      //   ]
      // },
      // {
      //   path: 'contact',
      //   name: 'Contact',
      //   component: Contact
      // }
    ]
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router