import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ScoreView from '../views/ScoreView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/score',
    name: 'score',
    component: ScoreView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
