::doc-topic
#title
PURadio Component
#description
A customizable radio button component with multiple variants, disabled states, and grouped options.
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-radio{type="default"}
#code
```html
<template>
  <PURadio v-model="selectedOption" label="Option 1" value="1" />
</template>
```
::

::doc-topic
#description
### With Multiple Options
::
::paper-show-radio{type="with-options"}
#code
```html
<template>
  <PURadio
    v-model="selectedOption"
    :options="[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ]"
  />
</template>
```
::

::doc-topic
#description
All Variants
::
::paper-show-radio{type="all-variants"}
#code
```html
<template>
  <div class="flex flex-col gap-4">
    <PURadio v-model="selectedOption" flavor="normal" label="Normal" value="1" />
    <PURadio v-model="selectedOption" flavor="outlined" label="Outlined" value="2" />
    <PURadio v-model="selectedOption" flavor="box" label="Box" value="3" />
    <PURadio v-model="selectedOption" :value="'disabled'" label="Disabled" disabled />
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
  - - 'modelValue'
    - 'string | number | boolean'
    - 'Yes'
    - '-'
    - 'The current selected value'
  - - 'options'
    - 'Array<{ label: string, value: string | number | boolean }>'
    - 'No'
    - 'undefined'
    - 'List of selectable radio options'
  - - 'label'
    - 'string'
    - 'No'
    - "''"
    - 'Label text for the radio button'
  - - 'value'
    - 'string | number | boolean'
    - 'No'
    - 'undefined'
    - 'The value of the radio button when used outside options'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disables interaction with the component'
  - - 'flavor'
    - 'normal | outlined | box'
    - 'No'
    - 'normal'
    - 'Styling variant for the radio button'
  - - 'name'
    - 'string'
    - 'No'
    - 'radio-group'
    - 'Name attribute for the input group'
---
::

::doc-topic
#title
## Flavor Variants
::
::doc-table
---
headers: ['Variant', 'Classes', 'Description']
rows:
  - - 'normal'
    - '`pu-radio--normal`'
    - 'Standard circular radio button (Default)'
  - - 'outlined'
    - '`pu-radio--outlined`'
    - 'Outlined style with a border and active state highlight'
  - - 'box'
    - '`pu-radio--box`'
    - 'Box-style radio with bold selection'
---
::

::doc-topic
#title
## Styling
#description
- Uses `font-patrick` font family class
- Utility-first CSS applied for flexible styling:
::code-box{header="Base Styles" type="css" copy=""}
```css
  .pu-radio {
    @apply flex items-center gap-2 group transition-all;
  }
  .pu-radio:not(:disabled):hover {
    @apply opacity-80;
}
```
::
::
::doc-topic
#description
- Hover effects apply when not disabled
- Borders and backgrounds adjust dynamically based on the selected state
- Fully customizable through CSS classes

::doc-topic
#title
## Dependencies
#description
- Built with Tailwind CSS utility classes
- Fully compatible with Vue's `v-model`
::

