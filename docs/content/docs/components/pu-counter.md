::doc-topic
#title
PUCounter Component
#description
A hand-drawn style counter component with increment/decrement controls and smooth animations
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-counter{type="basic"}
#code
```html
<template>
  <PUCounter v-model="count" />
</template>

<script setup>
const count = ref(5)
</script>
```
::

::doc-topic
#description
With Suffix
::
::paper-show-counter{type="with-suffix"}
#code
```html
<template>
  <PUCounter v-model="count" suffix="items" />
</template>
```
::

::doc-topic
#description
Different Sizes
::
::paper-show-counter{type="sizes"}
#code
```html
<template>
  <PUCounter v-model="count" size="small" />
  <PUCounter v-model="count" size="medium" />
  <PUCounter v-model="count" size="large" />
</template>
```
::

::doc-topic
#description
Disabled State
::
::paper-show-counter{type="disabled"}
#code
```html
<template>
  <PUCounter v-model="count" :disabled="true" />
</template>
```
::

::doc-topic
#description
Without Controls
::
::paper-show-counter{type="no-controls"}
#code
```html
<template>
  <PUCounter v-model="count" :show-controls="false" suffix="views" />
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
    - 'Current counter value'
  - - 'min'
    - 'number'
    - 'No'
    - '0'
    - 'Minimum value'
  - - 'max'
    - 'number'
    - 'No'
    - '999'
    - 'Maximum value'
  - - 'step'
    - 'number'
    - 'No'
    - '1'
    - 'Increment/decrement step'
  - - 'suffix'
    - 'string'
    - 'No'
    - "''"
    - 'Text suffix after value'
  - - 'showControls'
    - 'boolean'
    - 'No'
    - 'true'
    - 'Show increment/decrement buttons'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disabled state'
  - - 'size'
    - 'small | medium | large'
    - 'No'
    - 'medium'
    - 'Counter size'
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
    - 'Emitted when value changes'
  - - 'change'
    - 'number'
    - 'Emitted when increment/decrement is clicked'
---
::

::doc-topic
#title
Features
#description
- Hand-drawn style buttons with organic shadows
- Smooth animations for value changes
- Increment/decrement controls with disabled states
- Optional suffix text
- Multiple sizes for different use cases
- Min/max value constraints
- Customizable step increments
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
