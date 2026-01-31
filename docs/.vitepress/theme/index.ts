import DefaultTheme from 'vitepress/theme'
import UpdateTime from './components/UpdateTime.vue'
import type { App } from 'vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('UpdateTime', UpdateTime)
  }
}
