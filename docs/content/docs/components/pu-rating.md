::doc-topic
#title
PURating Component
#description
A hand-drawn style rating component with interactive stars and smooth animations
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-rating{type="basic"}
#code
```html
<template>
  <PURating v-model="rating" />
  <div>Rating: {{ rating }}/5</div>
</template>

<script setup>
const rating = ref(3)
</script>
```
::

::doc-topic
#description
With Value Display
::
::paper-show-rating{type="with-value"}
#code
```html
<template>
  <PURating v-model="rating" :show-value="true" />
</template>
```
::

::doc-topic
#description
Different Sizes
::
::paper-show-rating{type="sizes"}
#code
```html
<template>
  <PURating v-model="rating" size="small" />
  <PURating v-model="rating" size="medium" />
  <PURating v-model="rating" size="large" />
</template>
```
::

::doc-topic
#description
Readonly Mode
::
::paper-show-rating{type="readonly"}
#code
```html
<template>
  <PURating v-model="rating" :readonly="true" :show-value="true" />
</template>
```
::

::doc-topic
#description
Disabled State
::
::paper-show-rating{type="disabled"}
#code
```html
<template>
  <PURating v-model="rating" :disabled="true" :show-value="true" />
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
    - 'number'
    - 'No'
    - '0'
    - 'Current rating value'
  - - 'maxStars'
    - 'number'
    - 'No'
    - '5'
    - 'Maximum number of stars'
  - - 'size'
    - 'small | medium | large'
    - 'No'
    - 'medium'
    - 'Star size'
  - - 'readonly'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Read-only mode'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disabled state'
  - - 'showValue'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Show rating value'
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
    - 'number'
    - 'Emitted when rating changes'
  - - 'change'
    - 'number'
    - 'Emitted when star is clicked'
---
::

::doc-topic
#title
Features
#description
- Hand-drawn style stars with organic shadows
- Interactive hover effects and smooth animations
- Multiple sizes for different use cases
- Readonly and disabled states
- Optional value display
- Dark mode support
- Responsive design
- Accessible keyboard navigation
::

::doc-topic
#title
Dependencies
#description
- Tailwind CSS for styling
- Vue 3 Composition API
:: 
