import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    component: () => import('../views/HomePage/Index.vue'),
    name:'HomePage' 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router