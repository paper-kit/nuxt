<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div class="overflow-y-auto flex py-4 h-auto w-full gap-4">
    <AsideMenu />
    <div class="w-full flex flex-col gap-4">
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </div>
  </div>
</template>
