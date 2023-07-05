import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/acara',
    name: 'acara',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "acara" */ '../views/AcaraView.vue')
  },
  {
    path: '/kontak',
    name: 'kontak',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "kontak" */ '../views/KontakView.vue')
  },
  {
    path: '/list-sumber-belajar',
    name: 'list-sumber-belajar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "kontak" */ '../views/ListSumberBelajarView.vue')
  },
  {
    path: '/sumber-belajar',
    name: 'sumber-belajar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "kontak" */ '../views/SumberBelajarMenuView.vue')
  },
  {
    path: '/detail-sumber-belajar',
    name: 'detail-sumber-belajar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "kontak" */ '../views/DetailSumberBelajarView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
