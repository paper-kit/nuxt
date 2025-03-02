::doc-topic
#title
PU-Compare Component
#description
An interactive comparison slider component for visualizing differences between two states
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-compare{type="default"}
#code
```html
<template>
  <PUCompare>
    <template #left>
        Before
    </template>
    <template #right>
      After
    </template>
  </PUCompare>
</template>
```
::

::doc-topic
#description
### Dark Mode Comparison
::
::paper-show-compare{type="dark-mode"}
#code
```html
<template>
  <PUCompare with-dark-mode>
    <div class="p-4">
      <span class="text-xl text-primary-light-500 dark:text-white">
        Light/Dark Comparison
      </span>
    </div>
  </PUCompare>
</template>
```
::

::doc-topic
#description
### With Custom Handle
::
::paper-show-compare{type="with-icon"}
#code
```html
<template>
  <PUCompare with-icon with-dark-mode>
    <span class="text-xl text-primary-light-500 dark:text-white">
      Light/Dark Comparison
    </span>
  </PUCompare>
</template>
```
::

::doc-topic
#title
## Props
::
::doc-table
---
headers: ['Prop', 'Type', 'Default', 'Description']
rows:
  - - 'ariaLabel'
    - 'string'
    - 'undefined'
    - 'Accessibility label for screen readers'
  - - 'ariaLabelledby'
    - 'string'
    - 'undefined'
    - 'ID reference for accessibility label'
  - - 'withDarkMode'
    - 'boolean'
    - 'false'
    - 'Show dark/light mode comparison UI'
  - - 'withIcon'
    - 'boolean'
    - 'false'
    - 'Display chevron icons on slider handle'
---
::

::doc-topic
#title
## Features
#description
- Interactive comparison slider
- Accessible ARIA labels
- Dark/light mode comparison
- Customizable handle
- Flexible content slots
- Responsive design
::

::doc-topic
#title
## Styling
#description
- Base styling with Tailwind:
::code-box{header="Core Structure" type="css" copy}
```css
  .compare-container {
    @apply relative w-full max-w-lg border-2 border-primary-light-500 
          rounded-lg shadow-lg overflow-hidden;
  }

  .slider-handle {
    @apply absolute top-0 bottom-0 border border-primary-light-500;
  }
```
::
- Dark mode styling:
::code-box{header="Dark Mode" type="css" copy}
```css
  .dark-mode-overlay {
    @apply dark bg-primary-light-500;
  }
```
::

::doc-topic
#title
## Accessibility
#description
- Use `ariaLabel` or `ariaLabelledby` for screen reader support
- Keyboard navigable
- High contrast colors
- Semantic HTML structure
::

::doc-topic
#title
## Dependencies
#description
- `PUIcon` for handle icons
- Tailwind CSS for styling
- Vue 3 Composition API
::
