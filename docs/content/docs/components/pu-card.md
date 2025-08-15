::doc-topic
#title
PUCard Component
#description
A flexible card component with hand-drawn style borders and smooth hover animations
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-card{type="simple"}
#code
```html
<template>
  <PUCard variant="simple" size="medium">
    <h3 class="text-lg font-bold mb-2">Simple Card</h3>
    <p class="text-sm text-gray-600">This is a simple card with basic content.</p>
  </PUCard>
</template>
```
::

::doc-topic
#description
Card with Image
::
::paper-show-card{type="image"}
#code
```html
<template>
  <PUCard variant="image" size="medium" image="/avatar.svg" image-alt="Avatar">
    <h3 class="text-lg font-bold mb-2">Card with Image</h3>
    <p class="text-sm text-gray-600">This card includes an image at the top.</p>
  </PUCard>
</template>
```
::

::doc-topic
#description
Card with Actions
::
::paper-show-card{type="actions"}
#code
```html
<template>
  <PUCard variant="actions" size="medium">
    <h3 class="text-lg font-bold mb-2">Card with Actions</h3>
    <p class="text-sm text-gray-600">This card includes action buttons.</p>
    <template #actions>
      <PUButton size="small" flavor="outlined">Cancel</PUButton>
      <PUButton size="small">Save</PUButton>
    </template>
  </PUCard>
</template>
```
::

::doc-topic
#description
Card Sizes
::
::paper-show-card{type="sizes"}
#code
```html
<template>
  <PUCard variant="simple" size="small">
    <h3 class="text-md font-bold mb-1">Small Card</h3>
    <p class="text-xs text-gray-600">Small size card.</p>
  </PUCard>
  
  <PUCard variant="simple" size="medium">
    <h3 class="text-lg font-bold mb-2">Medium Card</h3>
    <p class="text-sm text-gray-600">Medium size card.</p>
  </PUCard>
  
  <PUCard variant="simple" size="large">
    <h3 class="text-xl font-bold mb-2">Large Card</h3>
    <p class="text-base text-gray-600">Large size card.</p>
  </PUCard>
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
  - - 'variant'
    - 'simple | image | actions'
    - 'No'
    - 'simple'
    - 'Card variant style'
  - - 'size'
    - 'small | medium | large'
    - 'No'
    - 'medium'
    - 'Card size'
  - - 'image'
    - 'string'
    - 'No'
    - "''"
    - 'Image URL for image variant'
  - - 'imageAlt'
    - 'string'
    - 'No'
    - "''"
    - 'Alt text for image'
  - - 'customClass'
    - 'string'
    - 'No'
    - "''"
    - 'Custom CSS classes'
---
::

::doc-topic
#title
Slots
::
::doc-table
---
headers: ['Slot', 'Props', 'Description']
rows:
  - - 'default'
    - '-'
    - 'Main card content'
  - - 'actions'
    - '-'
    - 'Action buttons area'
---
::

::doc-topic
#title
Features
#description
- Hand-drawn style borders and organic visual effects
- Multiple variants: simple, image, actions
- Responsive design with different sizes
- Smooth hover animations and transitions
- Dark mode support
- Accessible structure and keyboard navigation
::

::doc-topic
#title
Dependencies
#description
- Tailwind CSS for styling
- Vue 3 Composition API
- PUButton for action buttons
:: 
