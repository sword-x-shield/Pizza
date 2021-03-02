import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/editor/Index.vue'),
    name: 'Editor'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
