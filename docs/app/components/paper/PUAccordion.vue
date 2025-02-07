<template>
  <div class="accordion">
    <CodeBlock>
      <template #preview>
        <PUAccordion
          :items="accordionItems"
          class="w-full"
        />
      </template>
      <template #code>
        <slot name="code-default" />
      </template>
    </CodeBlock>
  </div>
</template>

<script setup lang="ts">
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
