<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="main h-screen flex justify-center"
    :style="{ background: route.path == '/' ? 'url(/bg.svg) no-repeat' : '' }"
  >
    <!-- Banner v2.0 no topo absoluto -->
    <div v-if="isDocsPage" class="v2-banner-top">
      <div class="v2-banner-content">
        <div class="v2-banner-left">
          <span class="v2-banner-icon">🎉</span>
          <span class="v2-banner-text">Paper UI v2.0 is here!</span>
          <span class="v2-banner-badge">NEW</span>
        </div>
        <a href="/docs/v2" class="v2-banner-link">
          <span>See what's new</span>
          <span class="v2-banner-arrow">→</span>
        </a>
      </div>
    </div>

    <div class="container h-full text-xl" :class="{ 'pt-12': isDocsPage }">
      <HeaderUi />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { _backgroundImage } from '#tailwind-config/theme'

const route = useRoute()

const isDocsPage = computed(() => {
  return route.path.startsWith('/docs') && route.path !== '/docs'
})
</script>

<style scoped>
.v2-banner-top {
  @apply fixed top-0 left-0 right-0 z-50 bg-black text-white py-3 px-4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.v2-banner-content {
  @apply max-w-6xl mx-auto flex justify-between items-center;
}

.v2-banner-left {
  @apply flex items-center gap-3;
}

.v2-banner-icon {
  @apply text-lg;
  animation: bounce 2s infinite;
}

.v2-banner-text {
  @apply text-sm font-bold;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
}

.v2-banner-badge {
  @apply bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
  animation: pulse 2s infinite;
}

.v2-banner-link {
  @apply flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-all duration-300;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.v2-banner-link:hover {
  @apply bg-white/30;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.v2-banner-arrow {
  @apply transition-transform duration-300;
}

.v2-banner-link:hover .v2-banner-arrow {
  transform: translateX(3px);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-2px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  .v2-banner-content {
    @apply flex-col gap-3 text-center;
  }
  
  .v2-banner-left {
    @apply justify-center;
  }
}
</style>

<style>
.main {
  background-size: cover;
}
</style>
