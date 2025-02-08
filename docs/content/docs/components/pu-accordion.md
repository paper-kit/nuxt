::doc-topic
#title
PUAccordion Component 
#description
A highly customizable tab component with smooth animations and Tailwind CSS integration.
::

::doc-topic
#title
Basic Usage
#description
Minimal setup with default styling:
::
::paper-p-u-accordion
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

::paper-p-u-accordion{type="custom"}
```html
<template>
  <PUAccordion :items="accordionItems">
    <template #header="{ item, isOpen }">
      <h3 :class="{ 'text-[#E12B56]': isOpen, 'text-gray-800': !isOpen }">
        {{ item.title }}
      </h3>
    </template>

    <template #content="{ item }">
      <p>{{ item.content }}</p>
    </template>
  </PUAccordion>
<template>

---

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

::doc-table
---
headers: ['Prop', 'Type', 'Default', 'Description']
rows:
  - - 'tabs'
    - |
      Array<{
        label: string
        content: string
        icon?: string
      }>
    - '[]'
    - 'Array of tab objects'
---
::