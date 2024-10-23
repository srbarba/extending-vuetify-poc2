import { createApp } from 'vue'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'

// Using import aliases in Vite
import App from './App.vue'

const app = createApp(App)
app.use(createVuetify())

app.mount('#app')
