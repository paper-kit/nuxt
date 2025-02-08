<template>
  <div class="accordion my-4">
    <CodeBlock v-if="type == 'defualt'">
      <template #preview>
        <PUAccordion
          :items="accordionItems"
          class="w-full"
        />
      </template>
      <template #code>
        <slot />
      </template>
    </CodeBlock>
    <CodeBlock v-else>
      <template #preview>
        <PUAccordion :items="accordionItems" class="w-full">
          <template #header="{ item, isOpen }">
            <h3 :class="{ 'text-[#E12B56]': isOpen, 'text-gray-800': !isOpen }">
              {{ item.title }}
            </h3>
          </template>

          <template #content="{ item }">
            <p>{{ item.content }}</p>
          </template>
        </PUAccordion>
      </template>
      <template #code>
        <slot />
      </template>
    </CodeBlock>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'defualt' | 'custom'
}>()

const accordionItems = [
  {
    title: 'Accordion 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Accordion 2',
    content: 'Incidunt a voluptatum reiciendis soluta est unde consectetur!',
  },
  {
    title: 'Accordion 3',
    content: 'Explicabo, odio molestias! Quaerat, ipsa fugit quasi atque.',
  },
]
</script>
