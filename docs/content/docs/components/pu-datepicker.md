
::doc-topic
#title
PU-DatePicker Component
#description
A customizable and accessible date picker component with support for multiple locales and date restrictions
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-datepicker{type="default"}
#code
```html
<template>
  <PUDatePicker v-model="selectedDate" />
</template>

<script setup>
const selectedDate = ref('2023-10-16')
</script>
```
::

::doc-topic
#description
### Always Open Mode
::
::paper-show-datepicker{type="always-open"}
#code
```html
<template>
  <PUDatePicker v-model="selectedDate" always-open />
</template>

<script setup>
const selectedDate = ref('2023-10-16')
</script>
```
::

::doc-topic
#description
### With Disabled Dates
::
::paper-show-datepicker{type="disabled-dates"}
#code
```html
<template>
  <PUDatePicker
    v-model="selectedDate"
    :disabled-dates="['2023-10-20', '2023-10-25']"
  />
</template>

<script setup>
const selectedDate = ref('2023-10-16')
</script>
```
::

::doc-topic
#description
### With Date Range Restriction
::
::paper-show-datepicker{type="disabled-range"}
#code
```html
<template>
  <PUDatePicker
    v-model="selectedDate"
    :disabled-range="{ start: '2023-10-10', end: '2023-10-15' }"
  />
</template>

<script setup>
const selectedDate = ref('2023-10-16')
</script>
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
    - 'string | null'
    - 'Yes'
    - '-'
    - 'Selected date in YYYY-MM-DD format'
  - - 'alwaysOpen'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Keeps the date picker always visible'
  - - 'locale'
    - 'en-US | pt-BR'
    - 'No'
    - 'en-US'
    - 'Locale for month and day names'
  - - 'disabledDates'
    - 'string[]'
    - 'No'
    - '[]'
    - 'Array of disabled dates in YYYY-MM-DD format'
  - - 'disabledRange'
    - '{ start: string, end: string }'
    - 'No'
    - 'undefined'
    - 'Range of disabled dates'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disable input'
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
    - 'Emits when a date is selected'
    - 'string | null'
---
::

::doc-topic
#title
## Styling
#description
- Base styling with Tailwind:
::code-box{header="Core Structure" type="css" copy}
```css
  .datepicker-input {
    @apply w-full p-2 border-2 border-primary-light-500 
          rounded-lg shadow-md shadow-primary-light-500/20;
  }

  .datepicker-header {
    @apply flex justify-between items-center font-bold mb-2;
  }

  .datepicker-days button {
    @apply border-none bg-none p-1 cursor-pointer rounded;
  }

  .datepicker-days button.selected {
    @apply bg-black text-white;
  }
```
::
- Customizable classes:
::code-box{header="Custom Classes" type="css" copy}
```css
  .datepicker-container {
    @apply bg-white p-4 rounded-lg shadow-lg;
  }

  .datepicker-weekdays {
    @apply grid grid-cols-7 text-center font-medium;
  }
```
::

::doc-topic
#title
## Features
#description
- Multiple locale support (en-US, pt-BR)
- Disabled dates and date ranges
- Keyboard navigation
- Accessible markup
- Customizable styling
- Always open mode
::

::doc-topic
#title
## Dependencies
#description
- `PUTooltip` for popup positioning
- `PUIcon` for navigation arrows
- Tailwind CSS for styling
::

