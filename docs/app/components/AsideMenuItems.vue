<template>
  <div class="font-patrick flex flex-col h-full overflow-y-auto">
    <div
      v-for="list, index in items"
      :key="index"
      class="space-y-2"
    >
      <div class="font-bold mb-2">
        {{ list.title }}
      </div>
      <div
        v-for="item in list.links"
        :key="item.name"
        class="font-sans text-sm"
      >
        <a
          :href="item.link"
          target="_blank"
        >{{ item.name }}</a>
      </div>
      <div
        v-if="index !== items.length - 1"
        class="separator py-2"
      >
        <div class="border-[1px] border-primary-light-500/10 " />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    title: string
    links: { name: string, link: string }[]
  }[]
}>()
</script>
