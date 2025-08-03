::doc-topic
#title
PUConfetti Component
#description
A hand-drawn style confetti animation component with customizable particles and physics
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-confetti{type="basic"}
#code
```html
<template>
  <div class="relative">
    <PUButton @click="triggerConfetti">
      Trigger Confetti
    </PUButton>
    <PUConfetti
      :active="isActive"
      :width="400"
      :height="200"
      class="absolute inset-0 pointer-events-none"
    />
  </div>
</template>

<script setup>
const isActive = ref(false)

const triggerConfetti = () => {
  isActive.value = true
  setTimeout(() => {
    isActive.value = false
  }, 100)
}
</script>
```
::

::doc-topic
#description
Custom Colors
::
::paper-show-confetti{type="custom-colors"}
#code
```html
<template>
  <PUConfetti
    :active="isActive"
    :colors="customColors"
    :particle-count="80"
    :width="400"
    :height="200"
  />
</template>

<script setup>
const customColors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', 
  '#96CEB4', '#FFEAA7', '#DDA0DD'
]
</script>
```
::

::doc-topic
#description
Long Duration
::
::paper-show-confetti{type="long-duration"}
#code
```html
<template>
  <PUConfetti
    :active="isActive"
    :duration="5000"
    :particle-count="100"
    :width="400"
    :height="200"
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
  - - 'active'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Trigger confetti animation'
  - - 'colors'
    - 'string[]'
    - 'No'
    - 'Default color palette'
    - 'Array of colors for particles'
  - - 'particleCount'
    - 'number'
    - 'No'
    - '50'
    - 'Number of confetti particles'
  - - 'duration'
    - 'number'
    - 'No'
    - '3000'
    - 'Animation duration in milliseconds'
  - - 'width'
    - 'number'
    - 'No'
    - '400'
    - 'Canvas width'
  - - 'height'
    - 'number'
    - 'No'
    - '300'
    - 'Canvas height'
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
  - - 'start'
    - '-'
    - 'Emitted when animation starts'
  - - 'end'
    - '-'
    - 'Emitted when animation ends'
---
::

::doc-topic
#title
Features
#description
- Canvas-based particle system with smooth animations
- Multiple particle types: circles, squares, triangles
- Physics simulation with gravity and rotation
- Customizable colors and particle count
- Configurable animation duration
- Hand-drawn style visual effects
- Responsive canvas sizing
- Performance optimized with requestAnimationFrame
::

::doc-topic
#title
Dependencies
#description
- Tailwind CSS for styling
- Vue 3 Composition API
- HTML5 Canvas API
:: 
