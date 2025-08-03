::doc-topic
#title
PUDropdown Component
#description
A hand-drawn style dropdown component with smooth animations and customizable options
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-dropdown{type="basic"}
#code
```html
<template>
  <PUDropdown
    v-model="selected"
    :options="options"
    placeholder="Choose an option"
  />
</template>

<script setup>
const selected = ref('')
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]
</script>
```
::

::doc-topic
#description
Different Sizes
::
::paper-show-dropdown{type="sizes"}
#code
```html
<template>
  <PUDropdown v-model="selected" :options="options" size="small" />
  <PUDropdown v-model="selected" :options="options" size="medium" />
  <PUDropdown v-model="selected" :options="options" size="large" />
</template>
```
::

::doc-topic
#description
Disabled State
::
::paper-show-dropdown{type="disabled"}
#code
```html
<template>
  <PUDropdown
    v-model="selected"
    :options="options"
    :disabled="true"
    placeholder="Disabled dropdown"
  />
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
  - - 'modelValue'
    - 'string | number'
    - 'No'
    - "''"
    - 'Selected option value'
  - - 'options'
    - 'DropdownOption[]'
    - 'No'
    - '[]'
    - 'Array of dropdown options'
  - - 'placeholder'
    - 'string'
    - 'No'
    - 'Select an option'
    - 'Placeholder text'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disabled state'
  - - 'size'
    - 'small | medium | large'
    - 'No'
    - 'medium'
    - 'Dropdown size'
  - - 'customClass'
    - 'string'
    - 'No'
    - "''"
    - 'Custom CSS classes'
---
::

::doc-topic
#title
Events
::
::doc-table
---
headers: ['Event', 'Payload', 'Description']
rows:
  - - 'update:modelValue'
    - 'string | number'
    - 'Emitted when selection changes'
  - - 'change'
    - 'string | number'
    - 'Emitted when option is selected'
---
::

::doc-topic
#title
Types
::
::doc-table
---
headers: ['Type', 'Properties', 'Description']
rows:
  - - 'DropdownOption'
    - 'value: string | number, label: string, icon?: any'
    - 'Dropdown option interface'
---
::

::doc-topic
#title
Features
#description
- Hand-drawn style trigger and menu with organic shadows
- Smooth dropdown animations with Vue transitions
- Click outside to close functionality
- Keyboard navigation support
- Multiple sizes for different use cases
- Disabled state support
- Optional icons for options
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
