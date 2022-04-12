import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import BulkLoad from '../views/BulkLoad.vue'
import Enrollment from '../views/Enrollment.vue'
import AccessControl from '../views/AccessControl.vue'
import OutputControl from '../views/OutputControl.vue'
import Monitoring from '../views/Monitoring.vue'
import WorkersAdministration from '../views/WorkersAdministration.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bulk-load',
    name: 'About',
    component: BulkLoad
  },
  {
    path: '/enrollment',
    name: 'Enrollment',
    component: Enrollment
  },
  {
    path: '/access-control',
    name: 'AccessControl',
    component: AccessControl
  },
  {
    path: '/output-control',
    name: 'OutputControl',
    component: OutputControl
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: Monitoring
  },
  {
    path: '/workers-administration',
    name: 'WorkersAdministration',
    component: WorkersAdministration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
