import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FamilyCodeView from '../views/FamilyCodeView.vue'
import ApplyWaitView from '../views/ApplyWaitView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/familyCode',
    name: 'familyCode',
    component: FamilyCodeView
  },
  {
    path: '/applywait',
    name: 'applywait',
    component: ApplyWaitView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
