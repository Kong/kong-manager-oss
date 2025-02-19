import { createApp } from 'vue'
import { createI18n, Translation } from '@kong-ui-public/i18n'
import english from '@/locales/en.json'
import App from '@/App.vue'
import { router } from '@/router'
import { registerGlobalComponents } from './registerGlobalComponents'
import './styles/index'
import { createPinia } from 'pinia'

// This only sets up worker initializers. They will be lazy-loaded when needed.
import '@/monaco-workers'

const i18n = createI18n<typeof english>('en-us', english, { isGlobal: true })

const app = createApp(App)

const pinia = createPinia()

app.use(Translation.install<typeof english>, { i18n })
app.use(pinia)
app.use(router)
registerGlobalComponents(app)
app.mount('#app')
