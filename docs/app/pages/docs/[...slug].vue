<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div class="overflow-y-auto flex py-4 h-auto gap-2">
    <AsideMenu />
    <div class="w-full flex flex-col gap-4">
      <template v-if="page">
        <ContentRenderer :value="page" />
      </template>
      <template v-else>
        <div class="empty-page">
          <h1>Page Not Found</h1>
          <p>Oops! The content you're looking for doesn't exist.</p>
          <NuxtLink to="/">Go back home</NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>
