::doc-topic
#title
Configuration
#description
To use the PUTabs component in your Nuxt project, add the module to your `nuxt.config.ts` file so that all Paper-UI components (including PUTabs) are globally available:
::

::code-box{header="Nuxt.config.ts" type="nuxt" copy=""}
```ts
export default defineNuxtConfig({
  modules: ['@paper-ui/nuxt']
})
```
::

This ensures that the styles and components from Paper-UI are properly integrated into your project.

---

::doc-topic
#title
Usage
#description
Using the **PUTabs** component is straightforward. Below are some examples to help you get started.
::

::doc-topic
#title
Basic Example
#description
Here’s a simple example of using PUTabs with a basic configuration:
::

::code-box{header="App.vue" type="vue" copy=""}
```vue
<template>
  <PUTabs :tabs="tabs" />
</template>

<script setup lang="ts">
const tabs = [
  { label: 'Tab 1', content: 'This is the content for Tab 1.', icon: 'home' },
  { label: 'Tab 2', content: 'This is the content for Tab 2.', icon: 'user' },
  { label: 'Tab 3', content: 'This is the content for Tab 3.', icon: 'settings' }
]
</script>
```
::

::doc-topic
#title
Customizing Tabs with Slots
#description
Customize the appearance of tab headers and content by utilizing the available slots. This gives you full control over the component's UI:
::

::code-box{header="CustomTabs.vue" type="vue" copy=""}
```vue
<template>
  <PUTabs :tabs="tabs">
    <!-- Custom tab header -->
    <template #tab="{ tab, isActive }">
      <div
        :class="[
          'flex items-center gap-2 p-2 transition-all duration-300',
          isActive ? 'text-black font-semibold border-b-2 border-primary-light-500' : 'text-gray-500'
        ]"
      >
        <PUIcon :name="tab.icon" />
        <span>{{ tab.label }}</span>
      </div>
    </template>
    <!-- Custom tab content -->
    <template #content="{ tab }">
      <div class="p-4 bg-white rounded shadow">
        <h3 class="text-xl font-bold mb-2">{{ tab.label }}</h3>
        <p>{{ tab.content }}</p>
      </div>
    </template>
  </PUTabs>
</template>

<script setup lang="ts">
import PUTabs from '~/components/PUTabs.vue'

const tabs = [
  { label: 'Overview', content: 'Detailed content for Overview.', icon: 'overview' },
  { label: 'Details', content: 'Detailed content for Details.', icon: 'details' },
  { label: 'Feedback', content: 'Detailed content for Feedback.', icon: 'feedback' }
]
</script>
```
::

---

::doc-topic
#title
Props
#description
The **PUTabs** component accepts the following prop:
::

::doc-table
---
headers:
  - Prop
  - Type
  - Description
rows:
  - - tabs
    - 'Array<{ label: string, content: string, icon?: string }>'
    - An array of tab objects. Each object requires a label, a content, and optionally an icon.
---
::

---

::doc-topic
#title
Slots
#description
The **PUTabs** component exposes the following slots for customization:
::

### Slot: `**tab**
Customize the header of each tab.

::doc-table
---
headers: ['Slot', 'Props', 'Description']
rows:
  - - 'tab'
    - 'tab'
    - Current tab object
  - - 'tab'
    - 'isActive'
    - 'Boolean indicating state'
  - - 'tab'
    - 'tab/isActive'
    - 'Customizes the header of each tab. Use `tab` for data and `isActive` for state' 
---
::

---


::code-box{header="App.vue" type="vue" copy=""}
```vue
<template #tab="{ tab, isActive }">
  <div class="flex items-center gap-2">
    <PUIcon :name="tab.icon" />
    <span :class="{ 'font-bold': isActive }">{{ tab.label }}</span>
  </div>
</template>
```
::

### Slot: **content**
Customize the content of each tab.

- **Props:**
::doc-table
---
headers: ['Slot', 'Props', 'Description']
rows:
  - - 'content'
    - |
       tab
    - Current tab object
---
::

::code-box{header="App.vue" type="vue" copy=""}
```vue
<template #content="{ tab }">
  <div class="p-4">
    {{ tab.content }}
  </div>
</template>
```
::

---

::doc-topic
#title
Customization
#description
The **PUTabs** component is styled with Tailwind CSS. You can override these styles by adding your own classes or custom CSS. Extend the component functionality as needed to fit your design requirements.
::

---

::doc-topic
#title
Advanced Example
#description
Below is an advanced example demonstrating full customization of the **PUTabs** component:
::

::code-box{header="AdvancedExample.vue" type="vue" copy=""}
```vue
<template>
  <div class="p-8 bg-gray-100">
    <PUTabs :tabs="tabs">
      <template #tab="{ tab, isActive }">
        <div
          :class="[
            'flex items-center gap-2 p-2 transition-all duration-300',
            isActive ? 'text-black font-semibold border-b-2 border-primary-light-500' : 'text-gray-500'
          ]"
        >
          <PUIcon :name="tab.icon" />
          <span>{{ tab.label }}</span>
        </div>
      </template>
      <template #content="{ tab }">
        <div class="bg-white p-6 rounded shadow">
          <h3 class="text-xl font-bold mb-2">{{ tab.label }}</h3>
          <p>{{ tab.content }}</p>
        </div>
      </template>
    </PUTabs>
  </div>
</template>

<script setup lang="ts">
import PUTabs from '~/components/PUTabs.vue'

const tabs = [
  { label: 'Description', content: 'Product description details.', icon: 'info' },
  { label: 'Specifications', content: 'Detailed technical specifications.', icon: 'list' },
  { label: 'Reviews', content: 'User reviews and ratings.', icon: 'star' }
]
</script>
```
::

---

::doc-topic
#title
Contributing
#description
We welcome contributions to Paper-UI! If you have improvements or bug fixes for the **PUTabs** component, feel free to submit issues or pull requests.
::

---

::doc-topic
#description
Happy building with **Paper-UI** and enjoy using the **PUTabs** component! 🎉
::
