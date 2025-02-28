<script setup lang="ts">
const targetPath = "/";

const docs = await queryCollectionItemSurroundings("content", targetPath, {
  fields: ["title", "description", "path"],
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Documentation Overview</h1>
    <ul>
      <li v-for="doc in docs" :key="doc ? doc.path : 'document'" class="mb-4">
        <NuxtLink
          v-if="doc !== null"
          :to="doc.path"
          class="text-primary hover:underline text-lg font-semibold"
        >
          {{ doc.title }}
        </NuxtLink>
        <p v-if="doc !== null" class="text-gray-500 text-sm">
          {{ doc.description }}
        </p>
      </li>
    </ul>
  </div>
</template>
