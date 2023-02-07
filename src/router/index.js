import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    // Associe des chemins d'accès au composant vue à afficher
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: () => import('../components/Accueil.vue')
    },

    {
      path: '/livre',
      name: 'livre',
      component: () => import('../components/Livre.vue')
    }

  ]
})

export default router