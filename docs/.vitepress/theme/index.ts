import DefaultTheme from 'vitepress/theme'
import BlogIndex from '../components/BlogIndex.vue'
import AboutCard from '../components/AboutCard.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogIndex', BlogIndex);
    app.component('AboutCard', AboutCard);
  }
}

