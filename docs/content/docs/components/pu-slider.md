::doc-topic
#title
PUSlider Component
#description
A hand-drawn style slider component with smooth interactions and multiple customization options
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-slider{type="basic"}
#code
```html
<template>
  <PUSlider v-model="value" :min="0" :max="100" />
  <div>Value: {{ value }}</div>
</template>

<script setup>
const value = ref(50)
</script>
```
::

::doc-topic
#description
With Labels
::
::paper-show-slider{type="with-labels"}
#code
```html
<template>
  <PUSlider v-model="value" :min="0" :max="100" :show-labels="true" />
</template>
```
::

::doc-topic
#description
With Markers
::
::paper-show-slider{type="with-markers"}
#code
```html
<template>
  <PUSlider v-model="value" :min="0" :max="100" :step="25" :show-markers="true" />
</template>
```
::

::doc-topic
#description
Disabled State
::
::paper-show-slider{type="disabled"}
#code
```html
<template>
  <PUSlider v-model="value" :min="0" :max="100" :disabled="true" />
</template>
```
::

::doc-topic
#description
Vertical Orientation
::
::paper-show-slider{type="vertical"}
#code
```html
<template>
  <PUSlider v-model="value" :min="0" :max="100" orientation="vertical" />
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
    - 'Current slider value'
  - - 'min'
    - 'number'
    - 'No'
    - '0'
    - 'Minimum value'
  - - 'max'
    - 'number'
    - 'No'
    - '100'
    - 'Maximum value'
  - - 'step'
    - 'number'
    - 'No'
    - '1'
    - 'Step increment'
  - - 'orientation'
    - 'horizontal | vertical'
    - 'No'
    - 'horizontal'
    - 'Slider orientation'
  - - 'showMarkers'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Show step markers'
  - - 'showLabels'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Show min/max labels'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disable the slider'
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
    - 'Emitted when dragging ends'
---
::

::doc-topic
#title
Features
#description
- Hand-drawn style track and thumb with organic shadows
- Smooth drag interactions with mouse and touch support
- Click-to-position functionality on track
- Optional step markers and labels
- Vertical and horizontal orientations
- Disabled state support
- Dark mode support
- Responsive design with mobile touch support
::

::doc-topic
#title
Dependencies
#description
- Tailwind CSS for styling
- Vue 3 Composition API
:: 
