::doc-topic
#title
PULoading Component
#description
A hand-drawn style loading component with multiple animation types and smooth transitions
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-loading{type="circular"}
#code
```html
<template>
  <PULoading type="circular" size="medium" />
</template>
```
::

::doc-topic
#description
Dots Animation
::
::paper-show-loading{type="dots"}
#code
```html
<template>
  <PULoading type="dots" size="medium" />
</template>
```
::

::doc-topic
#description
Skeleton Loading
::
::paper-show-loading{type="skeleton"}
#code
```html
<template>
  <PULoading type="skeleton" size="medium" />
</template>
```
::

::doc-topic
#description
With Text
::
::paper-show-loading{type="with-text"}
#code
```html
<template>
  <PULoading type="circular" size="medium" text="Loading..." />
</template>
```
::

::doc-topic
#description
Different Sizes
::
::paper-show-loading{type="sizes"}
#code
```html
<template>
  <PULoading type="circular" size="small" />
  <PULoading type="circular" size="medium" />
  <PULoading type="circular" size="large" />
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
  - - 'type'
    - 'circular | dots | skeleton'
    - 'No'
    - 'circular'
    - 'Loading animation type'
  - - 'size'
    - 'small | medium | large'
    - 'No'
    - 'medium'
    - 'Loading component size'
  - - 'text'
    - 'string'
    - 'No'
    - "''"
    - 'Loading text to display'
  - - 'customClass'
    - 'string'
    - 'No'
    - "''"
    - 'Custom CSS classes'
---
::

::doc-topic
#title
Features
#description
- Hand-drawn style visual effects with shadows
- Multiple animation types: circular, dots, skeleton
- Smooth CSS animations and transitions
- Different sizes for various use cases
- Optional loading text support
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
