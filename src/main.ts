import { createApp, h, provide } from 'vue'
import App from './App.vue'
import router from './router'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import ApolloClient from './api/ApolloClient'
import { DefaultApolloClient } from '@vue/apollo-composable'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, ApolloClient)
  },
  render: () => h(App)
})

app.use(router)

app.mount('#app')
