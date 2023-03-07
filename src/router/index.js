import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Repo from '../views/Repo.vue'
import WildCard from '../views/WildCard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      
      children: [
        {
          name:'repo',
          path: ':id',
          component: Repo,
          props: true
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: WildCard
    }
  ]
})

export default router
