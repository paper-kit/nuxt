::doc-title
#title
Getting Started with Paper-UI

#subtitle
Welcome to **Paper-UI**! Follow this guide to quickly integrate Paper-UI components into your Nuxt 3 project and start building beautifully crafted, hand-drawn styled user interfaces.
::

---

::doc-topic
#title
Installation
#description
First, install the `paper-ui` module in your project:
::

::code-box{header="bash" type="cmd" copy=""}

```bash
npm install @paper-ui/nuxt

# pnpm install @paper-ui/nuxt

# yarn add @paper-ui/nuxt
```

::

::doc-topic
#title
Configuration
#description
To use Paper-UI in your Nuxt project, add the module to your `nuxt.config.ts` file:

::code-box{header="Nuxt.config.ts" type="nuxt" copy=""}

```ts
export default defineNuxtConfig({
  modules: ["paper-ui"],
});
```

::

::
This step ensures that all components and styles from Paper-UI are globally available in your project.

---

::doc-topic
#title
Usage
#description
Using Paper-UI components is straightforward. Here's how to use a sample component in your project:

Open a page, e.g., `pages/index.vue`

Import and use a Paper-UI component:
::

::code-box{header="app.vue" type="nuxt" copy=""}

```vue
<template>
  <div>
    <PUTabs :tabs="tabs">
      <template #tab="{ tab, isActive }">
        <span :class="{ 'font-bold': isActive }">
          {{ tab.label }}
        </span>
      </template>

      <template #content="{ tab }">
        <p>{{ tab.content }}</p>
      </template>
    </PUTabs>
  </div>
</template>

<script setup lang="ts">
const tabs = [
  { label: "Tab 1", content: "This is the content for Tab 1." },
  { label: "Tab 2", content: "This is the content for Tab 2." },
  { label: "Tab 3", content: "This is the content for Tab 3." },
];
</script>
```

::

::doc-topic
#title
Start your development server:
#description
::code-box{header="bash" type="cmd" copy=""}

```bash
npm run dev
# yarn dev
# pnpm dev
```

::
::
Visit your app in the browser, and you'll see the Paper-UI component in action.

---

::doc-topic
#title
Customization
#description
Paper-UI is designed to be easily customizable. You can override styles using Tailwind CSS or extend component functionality to meet your needs. For details, refer to the **Customization** section in the documentation.
::

---

::doc-topic
#title
Contributing
#description
We welcome contributions to Paper-UI!
::

---

::doc-topic
#description
Happy building with **Paper-UI**! 🎉
::
