import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Repositories from '../views/RepositoriesView.vue'

import Repo from '../views/Repo.vue'
import PageNotFound from '../views/PageNotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Repositories',
      name: 'Repositories',
      component: () => import('../views/AboutView.vue'),

      children: [
        {
          name: 'repo',
          path: ':id',
          component: Repo,
          props: true
        }
      ]
    },
    {
      name: 'Repos',
      path: '/Repostories',
      component: Repositories
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: PageNotFound
    }
  ]
})

export default router
