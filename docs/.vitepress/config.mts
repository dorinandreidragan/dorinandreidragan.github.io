import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "d2hub",
  description: "dorin dragan hub",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'home', link: '/' },
      { text: 'about', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dorinandreidragan' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dorin-andrei-dragan-17b4667/' }
    ]
  }
})
