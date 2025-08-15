<template>
  <div class="v2-page">
    <ChangelogPage />
  </div>
</template>

<script setup lang="ts">
import ChangelogPage from '../../components/ChangelogPage.vue'

useHead({
  title: 'Changelog v2.0 - Paper UI',
  meta: [
    {
      name: 'description',
      content: 'Discover all the new features, improvements, and changes in Paper UI v2.0'
    }
  ]
})
</script>

<style scoped>
.v2-page {
  @apply min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900;
}
</style> 