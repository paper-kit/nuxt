::doc-topic
#title
PU-Avatar Component
#description
A flexible avatar component with support for images, fallback content, and multiple styling options
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-avatar{type="default"}
#code
```html
<template>
  <PUAvatar src="/avatar.svg" />
</template>
```
::

::doc-topic
#description
### Different Sizes
::
::paper-show-avatar{type="sizes"}
#code
```html
<template>
  <div class="flex items-center gap-2">
    <PUAvatar src="/avatar.svg" size="small" />
    <PUAvatar src="/avatar.svg" size="medium" />
    <PUAvatar src="/avatar.svg" size="large" />
    <PUAvatar src="/avatar.svg" size="xlarge" />
  </div>
</template>
```
::

::doc-topic
#description
### Different Shapes
::
::paper-show-avatar{type="shapes"}
#code
```html
<template>
  <div class="flex items-center gap-2">
    <PUAvatar src="/avatar.svg" shape="circular" />
    <PUAvatar src="/avatar.svg" shape="rounded" />
    <PUAvatar src="/avatar.svg" shape="square" />
  </div>
</template>
```
::

::doc-topic
#description
### Fallback Content
::
::paper-show-avatar{type="fallback"}
#code
```html
<template>
  <PUAvatar />
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
  - - 'src'
    - 'string'
    - 'No'
    - 'undefined'
    - 'Image source URL'
  - - 'size'
    - 'small | medium | large | xlarge'
    - 'No'
    - 'medium'
    - 'Size of the avatar'
  - - 'shape'
    - 'circular | rounded | square'
    - 'No'
    - 'circular'
    - 'Shape of the avatar'
---
::

::doc-topic
#title
## Styling
#description
- Base styling with Tailwind:
::code-box{header="Core Structure" type="css" copy}
```css
  .avatar {
    @apply flex items-center justify-center overflow-hidden border-2 border-black;
  }

  .avatar img {
    @apply w-full h-full object-cover;
  }
```
::
- Size classes:
::code-box{header="Size Classes" type="css" copy}
```css
  .small { @apply w-8 h-8; }
  .medium { @apply w-12 h-12; }
  .large { @apply w-16 h-16; }
  .xlarge { @apply w-24 h-24; }
```
::
- Shape classes:
::code-box{header="Shape Classes" type="css" copy}
```css
  .circular { @apply rounded-full; }
  .rounded { @apply rounded-lg; }
  .square { @apply rounded-none; }
```
::

::doc-topic
#title
## Features
#description
- Multiple size options
- Customizable shapes
- Fallback content for missing images
- Border styling
- Responsive design
::

::doc-topic
#title
## Dependencies
#description
- Tailwind CSS for styling
::
