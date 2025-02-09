::doc-topic
#title
PU-TextArea Component
#description
A customizable textarea component with enhanced interaction features
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-textarea{type="default"}
#code
```html
<template>
  <PUTextArea 
    placeholder="Enter your text..."
    v-model="textValue"
  />
</template>
```
::

::doc-topic
#description
### Disabled State
::
::paper-show-textarea{type="disabled"}
#code
```html
<template>
  <PUTextArea
    placeholder="Disabled textarea"
    disabled
    v-model="disabledValue"
  />
</template>
```
::

::doc-topic
#description
### With Label
::
::paper-show-textarea{type="with-label"}
#code
```html
<template>
  <div class="flex flex-col gap-1">
    <PULabel id="description">Description</PULabel>
    <PUTextArea
      id="description"
      v-model="description"
      placeholder="Enter description..."
    />
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
    - 'string | number | null'
    - 'Yes'
    - '-'
    - 'Textarea value (v-model support)'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disables the textarea'
  - - 'placeholder'
    - 'string'
    - 'No'
    - "''"
    - 'Placeholder text'
  - - 'id'
    - 'string'
    - 'No'
    - 'undefined'
    - 'Unique identifier for the textarea'
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
- Base styling with Tailwind:
::code-box{header="Core Structure" type="css" copy}
```css
  .pu-textarea--default {
    @apply w-full p-2;
    @apply border-2 border-primary-light-500 rounded-lg;
    @apply text-gray-800 text-base;
    @apply focus:outline-none;
  }
```
::
- Interactive states:
::code-box{header="Focus State" type="css" copy}
```css
  .focus\:outline-none:focus {
    @apply ring-2 ring-primary-light-500;
  }
```
::

::doc-topic
#title
## Features
#description
- v-model support
- Enter key handling
- Blur event integration
- Accessible disabled state
- Customizable placeholder
::

::doc-topic
#title
## Dependencies
#description
- Tailwind CSS for styling
- Vue 3 Composition API
- Optional PULabel component for labeled inputs
::
