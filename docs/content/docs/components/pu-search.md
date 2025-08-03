::doc-topic
#title
PUSearch Component
#description
A hand-drawn style search component with suggestions, loading states, and smooth animations
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-search{type="basic"}
#code
```html
<template>
  <PUSearch v-model="searchQuery" placeholder="Search components..." />
</template>

<script setup>
const searchQuery = ref('')
</script>
```
::

::doc-topic
#description
With Suggestions
::
::paper-show-search{type="with-suggestions"}
#code
```html
<template>
  <PUSearch
    v-model="searchQuery"
    :suggestions="suggestions"
    placeholder="Search with suggestions..."
  />
</template>

<script setup>
const searchQuery = ref('')
const suggestions = [
  { text: 'PUButton', value: 'button' },
  { text: 'PUInput', value: 'input' },
  { text: 'PUCard', value: 'card' },
]
</script>
```
::

::doc-topic
#description
Loading State
::
::paper-show-search{type="loading"}
#code
```html
<template>
  <PUSearch
    v-model="searchQuery"
    :loading="true"
    placeholder="Loading search..."
  />
</template>
```
::

::doc-topic
#description
Different Sizes
::
::paper-show-search{type="sizes"}
#code
```html
<template>
  <PUSearch v-model="searchQuery" size="small" placeholder="Small search" />
  <PUSearch v-model="searchQuery" size="medium" placeholder="Medium search" />
  <PUSearch v-model="searchQuery" size="large" placeholder="Large search" />
</template>
```
::

::doc-topic
#description
Disabled State
::
::paper-show-search{type="disabled"}
#code
```html
<template>
  <PUSearch
    v-model="searchQuery"
    :disabled="true"
    placeholder="Disabled search"
  />
</template>
```
::

::doc-topic
#title
Props
::
::doc-table
---
headers: ['Prop', 'Type', 'Required', 'Default', 'Description']
rows:
  - - 'modelValue'
    - 'string'
    - 'No'
    - "''"
    - 'Search input value'
  - - 'placeholder'
    - 'string'
    - 'No'
    - 'Search...'
    - 'Input placeholder text'
  - - 'suggestions'
    - 'SearchSuggestion[]'
    - 'No'
    - '[]'
    - 'Array of search suggestions'
  - - 'loading'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Loading state'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disabled state'
  - - 'size'
    - 'small | medium | large'
    - 'No'
    - 'medium'
    - 'Search input size'
  - - 'showClear'
    - 'boolean'
    - 'No'
    - 'true'
    - 'Show clear button'
  - - 'customClass'
    - 'string'
    - 'No'
    - "''"
    - 'Custom CSS classes'
---
::

::doc-topic
#title
Events
::
::doc-table
---
headers: ['Event', 'Payload', 'Description']
rows:
  - - 'update:modelValue'
    - 'string'
    - 'Emitted when input value changes'
  - - 'search'
    - 'string'
    - 'Emitted when Enter is pressed'
  - - 'suggestion-select'
    - 'SearchSuggestion'
    - 'Emitted when suggestion is selected'
  - - 'clear'
    - '-'
    - 'Emitted when clear button is clicked'
---
::

::doc-topic
#title
Types
::
::doc-table
---
headers: ['Type', 'Properties', 'Description']
rows:
  - - 'SearchSuggestion'
    - 'text: string, value: string, icon?: any'
    - 'Search suggestion interface'
---
::

::doc-topic
#title
Features
#description
- Hand-drawn style input with organic shadows
- Search icon and clear button
- Loading spinner animation
- Dropdown suggestions with keyboard navigation
- Smooth animations and transitions
- Multiple sizes for different use cases
- Disabled state support
- Optional icons for suggestions
- Dark mode support
- Responsive design
::

::doc-topic
#title
Dependencies
#description
- Tailwind CSS for styling
- Vue 3 Composition API
:: 
