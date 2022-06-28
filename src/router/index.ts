import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VoiceActorQuizViewVue from '@/views/VoiceActorQuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/va-quiz',
      name: 'va-quiz',
      component: VoiceActorQuizViewVue
    }
  ]
})

export default router
