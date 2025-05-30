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
        >
          <template #default>
            <span v-if="article.summary">{{ article.summary }}</span>
            <span v-else>read more...</span>
          </template>
        </PostCard>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import PostCard from './PostCard.vue';


const articles = ref([]);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    const res = await fetch("/blog-index.json");
    if (!res.ok) throw new Error(res.status + " " + res.statusText);
    articles.value = await res.json();
  } catch (e) {
    error.value = e.message || String(e);
  } finally {
    loading.value = false;
  }
});

const sortedArticles = computed(() => {
  return [...articles.value].sort((a, b) => {
    // Compare as ISO date strings (YYYY-MM-DD)
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
});

</script>
