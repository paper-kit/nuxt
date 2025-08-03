::doc-topic
#title
PUGrid Component
#description
A flexible, responsive, hand-drawn style grid system for building complex layouts with ease.
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-grid{type="basic"}
#code
```html
<template>
  <PUGrid :cols="3" gap="medium">
    <PUGridItem>Item 1</PUGridItem>
    <PUGridItem>Item 2</PUGridItem>
    <PUGridItem>Item 3</PUGridItem>
  </PUGrid>
</template>
```
::

::doc-topic
#description
Responsive Grid
::
::paper-show-grid{type="responsive"}
#code
```html
<template>
  <PUGrid :responsive="true" gap="large">
    <PUGridItem>Item 1</PUGridItem>
    <PUGridItem>Item 2</PUGridItem>
    <PUGridItem>Item 3</PUGridItem>
    <PUGridItem>Item 4</PUGridItem>
  </PUGrid>
</template>
```
::

::doc-topic
#description
Grid with Span
::
::paper-show-grid{type="span"}
#code
```html
<template>
  <PUGrid :cols="4" gap="medium">
    <PUGridItem :col-span="2">Large item (2 columns)</PUGridItem>
    <PUGridItem>Small item</PUGridItem>
    <PUGridItem>Small item</PUGridItem>
    <PUGridItem :col-span="4">Full width item (4 columns)</PUGridItem>
  </PUGrid>
</template>
```
::

::doc-topic
#description
Grid with Alignment
::
::paper-show-grid{type="alignment"}
#code
```html
<template>
  <PUGrid :cols="3" gap="medium" alignment="center" justify="space-between">
    <PUGridItem alignment="start">Top aligned</PUGridItem>
    <PUGridItem alignment="center">Centered</PUGridItem>
    <PUGridItem alignment="end">Bottom aligned</PUGridItem>
  </PUGrid>
</template>
```
::

::doc-topic
#description
Complex Grid
::
::paper-show-grid{type="complex"}
#code
```html
<template>
  <PUGrid :cols="6" :rows="4" gap="large">
    <PUGridItem :col-span="2" :row-span="2">Header</PUGridItem>
    <PUGridItem :col-span="4">Menu</PUGridItem>
    <PUGridItem>Sidebar</PUGridItem>
    <PUGridItem :col-span="3">Content</PUGridItem>
    <PUGridItem :col-span="2">Widget</PUGridItem>
    <PUGridItem :col-span="6">Footer</PUGridItem>
  </PUGrid>
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
  - - 'cols'
    - 'number | string'
    - 'No'
    - '1'
    - 'Number of columns or grid-template-columns value'
  - - 'rows'
    - 'number | string'
    - 'No'
    - 'auto'
    - 'Number of rows or grid-template-rows value'
  - - 'gap'
    - 'none | small | medium | large'
    - 'No'
    - 'medium'
    - 'Spacing between grid items'
  - - 'alignment'
    - 'start | center | end | stretch'
    - 'No'
    - 'stretch'
    - 'Vertical alignment of items'
  - - 'justify'
    - 'start | center | end | space-between | space-around | space-evenly'
    - 'No'
    - 'start'
    - 'Horizontal alignment of items'
  - - 'responsive'
    - 'boolean'
    - 'No'
    - 'true'
    - 'Enable responsive grid columns'
  - - 'customClass'
    - 'string'
    - 'No'
    - "''"
    - 'Custom CSS classes'
---
::

::doc-topic
#title
PUGridItem Props
::
::doc-table
---
headers: ['Prop', 'Type', 'Required', 'Default', 'Description']
rows:
  - - 'colStart'
    - 'number'
    - 'No'
    - '-'
    - 'Grid column start'
  - - 'colEnd'
    - 'number'
    - 'No'
    - '-'
    - 'Grid column end'
  - - 'rowStart'
    - 'number'
    - 'No'
    - '-'
    - 'Grid row start'
  - - 'rowEnd'
    - 'number'
    - 'No'
    - '-'
    - 'Grid row end'
  - - 'colSpan'
    - 'number'
    - 'No'
    - '-'
    - 'Number of columns to span'
  - - 'rowSpan'
    - 'number'
    - 'No'
    - '-'
    - 'Number of rows to span'
  - - 'alignment'
    - 'start | center | end | stretch'
    - 'No'
    - 'stretch'
    - 'Vertical alignment of the item'
  - - 'justify'
    - 'start | center | end | stretch'
    - 'No'
    - 'stretch'
    - 'Horizontal alignment of the item'
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
- Hand-drawn style borders and organic visual effects
- Responsive: adapts to different screen sizes
- Flexible: supports complex grid templates
- Animations: smooth entry and hover effects
- Dark mode support
- Accessible: semantic structure and keyboard navigation
::

::doc-topic
#title
Advanced Examples
#description
12-column grid
::
::code-box{header="App.vue" type="vue" copy=""}
```html
<PUGrid cols="repeat(12, 1fr)" gap="medium">
  <PUGridItem :col-span="8">Main content</PUGridItem>
  <PUGridItem :col-span="4">Sidebar</PUGridItem>
</PUGrid>
```
::

::doc-topic
#description
Fixed size columns
::
::code-box{header="App.vue" type="vue" copy=""}
```html
<PUGrid cols="200px 1fr 200px" gap="large">
  <PUGridItem>Left sidebar</PUGridItem>
  <PUGridItem>Content</PUGridItem>
  <PUGridItem>Right sidebar</PUGridItem>
</PUGrid>
```
::

::doc-topic
#description
Masonry grid
::
::code-box{header="App.vue" type="vue" copy=""}
```html
<PUGrid cols="repeat(auto-fill, minmax(250px, 1fr))" gap="medium">
  <PUGridItem v-for="i in 6" :key="i" :row-span="i % 2 === 0 ? 2 : 1">
    Item {{ i }}
  </PUGridItem>
</PUGrid>
```
::

::doc-topic
#title
Dependencies
#description
- Tailwind CSS for styling
- Vue 3 Composition API
:: 
