import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "d2hub",
  description: "dorin dragan hub",
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-SF1X95W1XW' }
    ],
    [
      'script',
      {},
      `if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SF1X95W1XW');
      }`
    ]
  ],
  themeConfig: {
    logo: "",
    search: {
      provider: "local"
    },
    nav: [
      { text: 'home', link: '/' },
      // { text: 'articles', link: '/articles' },
      { text: 'about', link: '/about' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dorinandreidragan' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dorin-andrei-dragan-17b4667/' }
    ]
  },
  ignoreDeadLinks: 'localhostLinks'
})


function sidebar() {
  return [
    {
      text: "articles",
      items: [
        {
          text: "series",
          items: [
            {
              text: "a hands-on guide to modern software development",
              link: "articles/books-inventory",
              items: [
                {
                  text: "ep1 - testing minimal web apis with asp.net",
                  link: "articles/books-inventory/01-testing-minimal-web-api.md"
                },
                {
                  text: "ep2 - get ready for testcontainers: taking minimal web api testing to the next level",
                  link: "articles/books-inventory/02-testcontainers-postgresql.md"
                },
                {
                  text: "ep3 - hybridcache & redis: cache smarer, not harder for asp.net apis",
                  link: "articles/books-inventory/03-testcontainers-redis.md"
                },
                {
                  text: "ep4 - if you can't observe it, you can't operate it",
                  link: "articles/books-inventory/04-opentelemetry-tracing.md"
                },
                {
                  text: "ep5 - the hidden cost of caching: detecting stale reads with locust",
                  link: "articles/books-inventory/05-hidden-cost-of-caching.md"
                }
              ]
            }
          ]
        },
        {
          text: "other articles",
          items: [
            { text: "fixing apt cache update errors: gpg keys made easy!", link: "articles/fixing-apt-cache-update-errors-gpg-keys.md" },
            { text: "ensuring high availability with two-server setup using keepalived", link: "articles/high-availability-with-keepalived.md" },
            { text: "how to use jupyter notebooks in vscode with poetry virtual environments", link: "articles/jupyter-vscode-poetry.md" },
            { text: "master technical topics with this game-changing prompt", link: "articles/master-technical-topics-with-this-game-changing-prompt.md" },
            { text: "target different .net versions in test projects", link: "articles/multi-target.md" },
            { text: "simplify config updates with ansible's lineinfile", link: "articles/simplify-config-updates-with-ansible-lineinfile.md" },
            { text: "troubleshooting sound card issues on ubuntu desktop", link: "articles/troubleshoot-sound-card-issues-ubuntu.md" },
            { text: "remote tunnel to a web server", link: "articles/tunnel-to-webserver.md" },
            { text: "host documentation on github pages with vuepress", link: "articles/vuepress-on-ghpages.md" }
          ]
        }
      ]
    }
  ];
}
