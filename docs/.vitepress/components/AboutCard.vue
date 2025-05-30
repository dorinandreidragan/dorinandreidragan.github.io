<template>
  <div :class="['about-card', isDark ? 'about-card--dark' : 'about-card--light']">
    <div class="about-card__avatar">
      <img :src="avatar" alt="Avatar" />
    </div>
    <div class="about-card__body">
      <h2 class="about-card__title">{{ title }}</h2>
      <div class="about-card__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const props = defineProps({
  avatar: { type: String, required: true },
  title: { type: String, required: true }
});

const { isDark } = useData();
</script>

<style scoped>
.about-card {
  max-width: 400px;
  margin: 2rem auto;
  border-radius: 1rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  transition: box-shadow 0.2s, background 0.2s;
}
.about-card--dark {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
}
.about-card__avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 1rem 0;
}
.about-card__avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.about-card__body {
  padding: 0 2rem 1rem 2rem;
  flex: 1;
}
.about-card__title {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--vp-c-text-1);
}
/* Enhanced text layout for about card */
.about-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.08rem;
  text-align: center;
  line-height: 1.4;
  padding-top: 0.3rem;
}

.about-lead {
  font-size: 1.18rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.2rem;
  letter-spacing: 0.01em;
}

.about-desc {
  font-size: 1.01rem;
  color: var(--vp-c-text-2);
  margin-top: 0.2rem;
  margin-bottom: 0;
  max-width: 90%;
}
</style>
