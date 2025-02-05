
::doc-topic
#title
PUTabs Component 
#description
A highly customi
zable tab component with smooth animations and Tailwind CSS integration.
::

---

::doc-topic
#title
Installation
#description
Add the Paper-UI module to your Nuxt configuration:
::

::code-box{header="nuxt.config.ts" type="ts" copy}
```ts
export default defineNuxtConfig({
  modules: ['@paper-ui/nuxt']
})
```
::

---

::doc-topic
#title
Basic Usage
#description
Minimal setup with default styling:
::

::paper-p-u-tabs
---
tabs:
  - label: "Overview"
    content: "General product information"
    icon: "info"
  - label: "Features"
    content: "Key product features"
    icon: "list"
  - label: "Pricing"
    content: "Subscription plans"
    icon: "tag"
---
::

::code-box{header="Basic Implementation" type="vue" copy}
```vue
<template>
  <PUTabs :tabs="tabs" />
</template>

<script setup lang="ts">
const tabs = [
  { label: 'Overview', content: 'General product information', icon: 'info' },
  { label: 'Features', content: 'Key product features', icon: 'list' },
  { label: 'Pricing', content: 'Subscription plans', icon: 'tag' }
]
</script>
```
::

---

::doc-topic
#title
Custom Headers
#description
Fully customizable tab headers with slot support:
::

::paper-p-u-tabs
---
tabs:
  - label: "Dashboard"
    content: "Analytics and metrics"
    icon: "chart-bar"
  - label: "Settings"
    content: "Account configuration"
    icon: "cog"
slots:
  tab: |
    <div class="flex items-center gap-2 p-2 transition-all"
         :class="{ 'text-purple-600 scale-105': isActive, 'text-gray-400 hover:text-gray-600': !isActive }">
      <PUIcon :name="tab.icon" class="w-6 h-6" />
      <span class="font-medium">{{ tab.label }}</span>
    </div>
---
::

::code-box{header="Custom Header Example" type="vue" copy}
```vue
<template>
  <PUTabs :tabs="tabs">
    <template #tab="{ tab, isActive }">
      <div class="flex items-center gap-2 p-2 transition-all"
           :class="{ 'text-purple-600 scale-105': isActive, 'text-gray-400 hover:text-gray-600': !isActive }">
        <PUIcon :name="tab.icon" class="w-6 h-6" />
        <span class="font-medium">{{ tab.label }}</span>
      </div>
    </template>
  </PUTabs>
</template>
```
::

---

::doc-topic
#title
Custom Content
#description
Advanced content customization with rich formatting:
::

::paper-p-u-tabs
---
tabs:
  - label: "Profile"
    content: "User profile information"
    icon: "user"
  - label: "Notifications"
    content: "Alert settings"
    icon: "bell"
slots:
  content: |
    <div class="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg">
      <h3 class="text-xl font-bold mb-4">{{ tab.label }}</h3>
      <div class="prose max-w-none">
        {{ tab.content }}
      </div>
    </div>
---
::

::code-box{header="Custom Content Example" type="vue" copy}
```vue
<template>
  <PUTabs :tabs="tabs">
    <template #content="{ tab }">
      <div class="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg">
        <h3 class="text-xl font-bold mb-4">{{ tab.label }}</h3>
        <div class="prose max-w-none">
          {{ tab.content }}
        </div>
      </div>
    </template>
  </PUTabs>
</template>
```
::

---

::doc-topic
#title
Component API
#description
Technical reference for the PUTabs component
::

### Props

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

### Slots

::doc-table
---
headers: ['Slot', 'Props', 'Description']
rows:
  - - 'tab'
    - |
      {
        tab: TabObject,
        isActive: boolean
      }
    - 'Custom tab header template'
  - - 'content'
    - |
      {
        tab: TabObject
      }
    - 'Custom tab content template'
---
::

---

::doc-topic
#title
Advanced Customization
#description
Complete control over component styling and behavior
::

::paper-p-u-tabs
---
tabs:
  - label: "Performance"
    content: "System metrics and analytics"
    icon: "chart-line"
  - label: "Security"
    content: "Access controls and permissions"
    icon: "shield"
slots:
  tab: |
    <div class="flex items-center gap-2 p-2 rounded-lg transition-all"
         :class="{ 'bg-blue-50 text-blue-700': isActive, 'text-gray-500 hover:bg-gray-50': !isActive }">
      <PUIcon :name="tab.icon" class="w-5 h-5" />
      <span class="text-sm font-medium">{{ tab.label }}</span>
    </div>
  content: |
    <div class="p-6 bg-white rounded-lg shadow animate-fade-in">
      <h3 class="text-xl font-bold mb-4">{{ tab.label }}</h3>
      <div class="prose">
        {{ tab.content }}
      </div>
    </div>
---
::

::code-box{header="Advanced Customization Example" type="vue" copy}
```vue
<template>
  <PUTabs :tabs="tabs">
    <template #tab="{ tab, isActive }">
      <div class="flex items-center gap-2 p-2 rounded-lg transition-all"
           :class="{ 'bg-blue-50 text-blue-700': isActive, 'text-gray-500 hover:bg-gray-50': !isActive }">
        <PUIcon :name="tab.icon" class="w-5 h-5" />
        <span class="text-sm font-medium">{{ tab.label }}</span>
      </div>
    </template>
    
    <template #content="{ tab }">
      <div class="p-6 bg-white rounded-lg shadow animate-fade-in">
        <h3 class="text-xl font-bold mb-4">{{ tab.label }}</h3>
        <div class="prose">
          {{ tab.content }}
        </div>
      </div>
    </template>
  </PUTabs>
</template>
```
::

---

::doc-topic
#title
Best Practices
#description
Recommended usage patterns for optimal results
::

- Use consistent tab labels (2-3 words max)
- Keep content sections focused and concise
- Utilize icons for better visual hierarchy
- Test responsive behavior across devices
- Maintain accessible contrast ratios

---

::doc-topic
#title
Contributing
#description
We welcome contributions! Please follow our [contribution guidelines](https://github.com/paper-ui/contributing)
::

---

::doc-topic
#description
Happy building with **Paper-UI**! 🎉
::