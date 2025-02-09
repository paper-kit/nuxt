::doc-topic
#title
PU-Tag Component
#description
A compact tag component for displaying labels with optional icons
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-tag{type="default"}
#code
```html
<template>
  <PUTag label="Default Tag" />
</template>
```
::

::doc-topic
#description
### With Icon
::
::paper-show-tag{type="with-icon"}
#code
```html
<template>
  <PUTag label="Tag with Icon" icon="clear-x" />
</template>
```
::

::doc-topic
#title
## Props
::
::doc-table
---
headers: ['Prop', 'Type', 'Required', 'Default', 'Description']
rows:
  - - 'label'
    - 'string'
    - 'Yes'
    - '-'
    - 'Text content of the tag'
  - - 'icon'
    - 'string'
    - 'No'
    - 'undefined'
    - 'Optional icon name from PUIcon collection'
---
::

::doc-topic
#title
## Styling
#description
- Base styling with Tailwind:
::code-box{header="Core Structure" type="css" copy}
```css
  .pu-tag--default {
    @apply w-fit px-2 text-sm py-1 rounded-lg;
    @apply flex justify-between gap-2 items-center;
    @apply border-2 border-primary-light-500 bg-primary-dark-50;
  }
```
::
- Icon styling:
::code-box{header="Icon Styles" type="css" copy}
```css
  .cursor-pointer {
    @apply hover:opacity-80 transition-opacity;
  }
```
::

::doc-topic
#title
## Features
#description
- Compact and lightweight
- Optional icon support
- Responsive design
- Customizable through props
::

::doc-topic
#title
## Dependencies
#description
- `PUIcon` component for icon display
- Tailwind CSS for styling
- Vue 3 Composition API
::
