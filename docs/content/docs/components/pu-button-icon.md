::doc-topic
#title
PU-Button-Icon Component
#description
A compact icon button component with multiple styling variants and sizes
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-button-icon{type="default"}
#code
```html
<template>
  <PUButtonIcon name="home" />
</template>
```
::

::doc-topic
#description
### Different Flavors
::
::paper-show-button-icon{type="flavors"}
#code
```html
<template>
  <div class="flex gap-2">
    <PUButtonIcon name="star" flavor="normal" />
    <PUButtonIcon name="star" flavor="outlined" />
    <PUButtonIcon name="star" flavor="ghost" />
  </div>
</template>
```
::

::doc-topic
#description
### Size Variations
::
::paper-show-button-icon{type="sizes"}
#code
```html
<template>
  <div class="flex items-center gap-2">
    <PUButtonIcon name="cog" size="small" />
    <PUButtonIcon name="cog" size="medium" />
    <PUButtonIcon name="cog" size="large" />
  </div>
</template>
```
::

::doc-topic
#description
### Shape Options
::
::paper-show-button-icon{type="shapes"}
#code
```html
<template>
  <div class="flex gap-2">
    <PUButtonIcon name="user-circle" shape="circle" />
    <PUButtonIcon name="user-circle" shape="rounded" />
  </div>
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
  - - 'name'
    - 'string'
    - 'Yes'
    - '-'
    - 'Icon name from PUIcon collection'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disables the button'
  - - 'flavor'
    - 'normal | outlined | ghost'
    - 'No'
    - 'normal'
    - 'Visual style variant'
  - - 'shape'
    - 'rounded | circle'
    - 'No'
    - 'circle'
    - 'Button shape'
  - - 'size'
    - 'small | medium | large'
    - 'No'
    - 'medium'
    - 'Button size'
  - - 'customClass'
    - 'string'
    - 'No'
    - "''"
    - 'Additional CSS classes'
---
::

::doc-topic
#title
## Styling
#description
- Base styling with Tailwind:
::code-box{header="Core Structure" type="css" copy}
```css
  .pu-button-icon {
    @apply p-2 shadow-md transition duration-200 ease-in-out 
          flex justify-center items-center;
  }
```
::
- Flavor variants:
::code-box{header="Flavor Styles" type="css" copy}
```css
  .pu-button-icon--normal {
    @apply bg-primary-light-500 border-2 rounded-lg text-primary-light-50;
  }

  .pu-button-icon--outlined {
    @apply bg-transparent border-2 border-primary-light-500 text-primary-light-500;
  }

  .pu-button-icon--ghost {
    @apply bg-transparent border-2 text-primary-light-500 border-transparent;
  }
```
::

::doc-topic
#title
## Interactive States
#description
- Hover effect:
::code-box{header="Hover State" type="css" copy}
```css
  .pu-button-icon:not(:disabled):hover {
    @apply shadow-black/50 font-bold;
  }
```
::
- Disabled state:
::code-box{header="Disabled State" type="css" copy}
```css
  .pu-button-icon--disabled {
    @apply opacity-50 cursor-not-allowed;
  }
```
::