import { createWebHistory, createRouter } from 'vue-router'


import Base from './components/Base/Base.vue'

import Home from './components/Base/Home.vue'
import About from './components/Base/About/About.vue'
import Summary from './components/Base/About/Summary.vue'
import Contact from './components/Base/Contact.vue'

import Portfolio from './components/Portfolio/Portfolio.vue'

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
      {
        path: 'about',
        name: 'About',
        component: About,
        children: [
          {
            path: '',
            name: 'Summary',
            component: Summary
          },
          {
            path: 'what-I-do',
            name: 'What I Do',
            component: () => import('./components/Base/About/WhatIDo.vue')
          },
          {
            path: 'worldview',
            name: 'Worldview',
            component: () => import('./components/Base/About/Worldview.vue')
          },
          {
            path: 'motifs',
            name: 'Motifs',
            component: () => import('./components/Base/About/Motifs.vue')
          },
          {
            path: 'background',
            name: 'Background',
            component: () => import('./components/Base/About/Background.vue')
          }
        ]
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      }
    ]
  },
  {
    path: '/is-a',
    name: 'Portfolio',
    component: Portfolio,
    children: [
      {
        path: 'web-developer',
        name: 'Web',
        component: () => import('./components/Portfolio/Web.vue')
      },
      {
        path: 'developer-in-general',
        name: 'software',
        component: () => import('./components/Portfolio/Software.vue')
      },
      {
        path: 'designer',
        name: 'Design',
        component: () => import('./components/Portfolio/Design.vue')
      },
      {
        path: 'data-scientist',
        name: 'Data',
        component: () => import('./components/Portfolio/Data.vue')
      },
      {
        path: 'quasi-academician',
        name: 'Thesis',
        component: () => import('./components/Portfolio/Thesis.vue')
      },
      {
        path: 'musician',
        name: 'Music',
        component: () => import('./components/Portfolio/Music.vue')
      }
    ]
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router