::paper-p-u-accordion
#code-default
```html
<template>
  <PUAccordion :items="accordionItems" />
</template>

<script setup lang="ts">
const accordionItems = [
  {
    title: "Accordion 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Accordion 2",
    content: "Incidunt a voluptatum reiciendis soluta est unde consectetur!",
  },
  {
    title: "Accordion 3",
    content: "Explicabo, odio molestias! Quaerat, ipsa fugit quasi atque.",
  },
];
</script>
```
::