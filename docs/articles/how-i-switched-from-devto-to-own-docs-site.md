---
title: "how i switched from dev.to to my own documentation site"
date: 2025-06-02
category:
  - blogging
tags:
  - documentation
  - vitepress
  - vue
  - vibe coding
  - vscode
  - githubcopilot
---

# how I switched from dev.to to my own doc site

---

### **copilot instructions begin**

**style**

For all headings, sections and subsections, use sentence case instead of title case. In sentence case you only capitalise the first letter of a new sentence, and any proper nouns (no common nouns require capitalisation).

Use varied sentence lengths and complexity for dynamic flow. Avoid predictable patterns. Apply perplexity and burstiness. Mix very short sentences with longer ones. Don't follow formulaic structures. Be unpredictable in word choices.

Only capitalize proper nouns. Not job titles, not seasons, not departments or subjects.

Be direct and assertive. Avoid hedge words like 'quite,' 'rather,' 'somewhat,' 'it could be argued.' Make bold statements without unnecessary qualifiers.

Skip generic introductions and conclusions. Start with impact, not setup. End with energy, not summary. Avoid phrases like 'in today's world' or 'in conclusion.

**article skeleton**

intro:

- dev.to is nice but is not for me
- i want a cleaner simpler rough user interface

content:

- tech stack:

  - vitepress
  - vue
  - github pages
  - vibe coding
  - google analytics

  - why:

    - because is cool
    - vitepress and vue are both fast
    - vitepress has very nice instructions on how to deploy to github pages
    - with vue i can create components and make the UI look exactly how i want
    - github pages is public, and offers me the hosting for my static site

    - vibe coding? really?

      - why not? is fun for building simple UI components without having too much hands on with vue.

    - google analytics
      - dev.to and other blogging sites show you analytics
      - well you can have them on your own site, and much more than you got with their platforms

- here is how i did it:
  - vitepress installation and instructions
  - vue components explained: BlogIndex, PostCard, AboutCard
  - simplifying vitepress to show:
    - home, and about pages
    - nice logo
    - search (fuzzy search)
    - no sidebar needed
  - analytics
    - instructions on how to configure google analytics
    - opt out from google analytics filtering out your public IP

outro:

- there is no reason why not have your own docs site
- link to the github repo

**copilot instructions END**

---

dev.to? Too polished. Too many distractions. I wanted something raw, minimal, and mine. No more fighting the platform. No more bending to someone else’s design. I wanted a place where I could write, tweak, break, and rebuild. No limits. No noise.

So I built my own docs site. It’s not for everyone. But it’s exactly what I need: clean, fast, and under my control. Here’s how I did it, and why you might want to do the same.

## tech stack, no apologies

vitepress. vue. github pages. vibe coding. google analytics. No bloat, no distractions. Just the essentials.

vitepress and vue? Fast. Blazing, even. vitepress makes deployment to github pages a joke. One command and you’re live. With vue, I shape components to my will. BlogIndex, PostCard, AboutCard. Each one does exactly what I want, nothing more.

github pages? Free hosting, public, no nonsense. My site, my rules. Here’s how deploy is automated:

```yaml
# .github/workflows/deploy-docs.yml (excerpt)
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build with VitePress
        run: npm run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

vibe coding? Yes, really. Sometimes you want to build a UI component without getting lost in vue’s boilerplate. vibe coding lets you do that. It’s fun. Try it.

google analytics? dev.to gives you numbers, but they’re not yours. On your own site, you see everything. You control what’s tracked, and you can filter out your own IP so your stats aren’t polluted. Here’s how analytics is added in vitepress:

```ts
// docs/.vitepress/config.mts (excerpt)
head: [
  ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-SF1X95W1XW" }],
  [
    "script",
    {},
    `if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SF1X95W1XW');
    }`,
  ],
];
```

---

## how i did it, step by step

vitepress installation? Simple. `npm create vitepress@latest` and you’re off. The docs are clear. Follow them, deploy to github pages in minutes. Build and preview with:

```json
// package.json (excerpt)
"scripts": {
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:preview": "vitepress preview docs"
}
```

vue components? I built BlogIndex to list posts, PostCard for each article, AboutCard for the personal touch. No sidebar. No clutter. Just what matters. Here’s how BlogIndex fetches and displays articles:

```vue
<!-- docs/.vitepress/components/BlogIndex.vue (excerpt) -->
<template>
  <div>
    <div v-if="loading">Loading articles...</div>
    <div v-else-if="error">Error loading articles: {{ error }}</div>
    <div v-else-if="!articles.length">No articles found.</div>
    <template v-else>
      <div v-if="articles.length">
        <PostCard
          v-for="article in sortedArticles"
          :key="article.path"
          :title="article.title"
          :date="article.date || ''"
          :tags="article.tag || []"
          :link="article.path"
          :series="article.series ? article.series.name : ''"
          :episode="article.series && article.series.episode ? article.series.episode : null"
          :summary="article.summary"
        />
      </div>
    </template>
  </div>
</template>
```

And the PostCard component:

```vue
<!-- docs/.vitepress/components/PostCard.vue (excerpt) -->
<template>
  <div class="post-card post-card--link">
    <div class="post-card__header">
      <a class="post-card__title-link" :href="link" tabindex="0">
        <h3 class="post-card__title">{{ title }}</h3>
      </a>
      <span class="post-card__date">{{ date }}</span>
    </div>
    <div v-if="series" class="post-card__series">
      series: {{ series }}<span v-if="episode">, episode {{ episode }}</span>
    </div>
    <div class="post-card__tags">
      <span v-for="tag in tags" :key="tag" class="post-card__tag">#{{ tag }}</span>
    </div>
    <div v-if="summary" class="post-card__summary">
      {{ summary }}
    </div>
    <div class="post-card__content">
      <slot />
    </div>
  </div>
</template>
```

vitepress config? Stripped down. Home page, about page, logo front and center. Fuzzy search, because scrolling is for the weak. No sidebar. You want something? Search for it. Example home page:

```md
# docs/index.md (excerpt)

---

layout: home
hero:
name: "dorin dragan hub"
tagline: documentation represents who you are

---

<BlogIndex />
```

About page uses AboutCard:

```md
# docs/about.md (excerpt)

<AboutCard avatar="profile.jpeg" title="dorin andrei dragan">
  <p>I build, break, and fix things,<br/> then share what I learn.</p>
  <p>this site is a collection of practical guides, tech insights, and lessons from real-world experience.</p>
  <p>curious? dive in and level up your skills.</p>
</AboutCard>
```

analytics? Already shown above. Want to filter out your own visits? In Google Analytics, add a filter for your public IP. Done.

---

## why not?

there is no reason not to have your own docs site. You own it. You control it. You decide what it looks like, what it tracks, what it shows. Want to see the code? [github repo](https://github.com/dorinandreidragan/dorinandreidragan.github.io). Fork it, clone it, make it yours.

---
