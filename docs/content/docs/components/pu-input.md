
::doc-topic
#title
PU-Input Component
#description
A customizable input component with icon support and enhanced interaction features
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-input{type="default"}
#code
```html
<template>
  <PUInput 
    placeholder="Enter text..."
    v-model="inputValue"
  />
</template>
```
::

::doc-topic
#description
### With Icons
::
::paper-show-input{type="with-icons"}
#code
```html
<template>
  <PUInput
    icon-left="search"
    icon-right="cancel"
    placeholder="Search..."
    v-model="searchQuery"
  />
</template>
```
::

::doc-topic
#description
### With Label
::
::paper-show-input{type="with-label"}
#code
```html
<template>
  <div class="flex flex-col">
    <PULabel id="label">
      with label
    </PULabel>
    <PUInput
      id="label"
      v-model="demoValue"
      placeholder="with label"
    />
  </div>
</template>
```
::

::doc-topic
#description
### Disabled State
::
::paper-show-input{type="disabled"}
#code
```html
<template>
  <PUInput
    placeholder="Disabled field"
    disabled
    v-model="disabledValue"
  />
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
    - 'string | number | null'
    - 'Yes'
    - '-'
    - 'Input value (v-model support)'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disables the input field'
  - - 'placeholder'
    - 'string'
    - 'No'
    - "''"
    - 'Input placeholder text'
  - - 'id'
    - 'string'
    - 'No'
    - 'undefined'
    - 'Unique identifier for the input'
  - - 'iconLeft'
    - 'string'
    - 'No'
    - 'undefined'
    - 'Left icon name'
  - - 'iconRight'
    - 'string'
    - 'No'
    - 'undefined'
    - 'Right icon name'
---
::

::doc-topic
#title
## Events
::
::doc-table
---
headers: ['Event', 'Description', 'Payload']
rows:
  - - 'update:modelValue'
    - 'Emits on input change, blur or Enter key'
    - 'string | number | null'
  - - 'blur'
    - 'Triggers on field blur'
    - 'Event'
  - - 'keydown.enter'
    - 'Triggers on Enter key press'
    - 'KeyboardEvent'
---
::

::doc-topic
#title
## Styling
#description
- Uses `font-patrick` font family
- Base styles applied with Tailwind utilities:
::code-box{header="Core Styles" type="css" copy}
```css
  .pu-input {
    @apply relative flex items-center gap-2 w-full p-2;
    @apply border-2 border-primary-light-500 rounded-lg;
    @apply transition-all duration-150 ease-in-out;
  }

  .pu-input--default {
    @apply text-gray-800 text-base w-full;
    @apply focus:outline-none;
  }
```
::
::

::doc-topic
#title
### Interactive States
::
::doc-topic
#description
- Focus state increases border width:
::
::code-box{header="Core Styles" type="css" copy}
```css
  .pu-input:focus {
    @apply border-8;
  }
```
::
::doc-topic
#description
Custom placeholder styling:
::
::code-box{header="Core Styles" type="css" copy}
```css
  .pu-input::placeholder {
    @apply text-primary-light-300 text-sm;
  }
```
::
::doc-topic
#title
## Dependencies
#description
- Requires `PUIcon` component for icon display
- Built with Tailwind CSS utility classes
::