::doc-topic
#title
PU-Table Component
#description
A powerful and customizable table component with sorting, filtering, and pagination features
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-table{type="default"}
#code
```html
<template>
  <PUTable
    :headers="[
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
      { key: 'email', label: 'Email' }
    ]"
    :rows="[
      { name: 'John Doe', age: 28, email: 'john@example.com' },
      { name: 'Jane Smith', age: 34, email: 'jane@example.com' }
    ]"
  />
</template>
```
::

::doc-topic
#description
### With Sorting
::
::paper-show-table{type="sorting"}
#code
```html
<template>
  <PUTable
    :headers="[
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
      { key: 'email', label: 'Email' }
    ]"
    :rows="[
      { name: 'John Doe', age: 28, email: 'john@example.com' },
      { name: 'Jane Smith', age: 34, email: 'jane@example.com' }
    ]"
    sortable
  />
</template>
```
::

::doc-topic
#description
### With Filtering
::
::paper-show-table{type="filtering"}
#code
```html
<template>
  <PUTable
    :headers="[
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
      { key: 'email', label: 'Email' }
    ]"
    :rows="[
      { name: 'John Doe', age: 28, email: 'john@example.com' },
      { name: 'Jane Smith', age: 34, email: 'jane@example.com' }
    ]"
    filterable
  />
</template>
```
::

::doc-topic
#description
### With Pagination
::
::paper-show-table{type="pagination"}
#code
```html
<template>
  <PUTable
    :headers="[
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
      { key: 'email', label: 'Email' }
    ]"
    :rows="[
      { name: 'John Doe', age: 28, email: 'john@example.com' },
      { name: 'Jane Smith', age: 34, email: 'jane@example.com' }
    ]"
    :per-page="5"
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
  - - 'headers'
    - 'Array<{ key: string, label: string }>'
    - 'Yes'
    - '-'
    - 'Table column definitions'
  - - 'rows'
    - 'Array<Record<string, string | number | boolean>>'
    - 'Yes'
    - '-'
    - 'Table data rows'
  - - 'sortable'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Enable column sorting'
  - - 'filterable'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Enable global filtering'
  - - 'perPage'
    - 'number'
    - 'No'
    - 'undefined'
    - 'Number of rows per page'
  - - 'hiddenColumns'
    - 'string[]'
    - 'No'
    - '[]'
    - 'Columns to hide'
---
::

::doc-topic
#title
## Slots
::
::doc-table
---
headers: ['Slot', 'Props', 'Description']
rows:
  - - 'cell-{key}'
    - '{ row: object }'
    - 'Custom cell content for specific columns'
---
::

::doc-topic
#title
## Styling
#description
- Base styling with Tailwind:
::code-box{header="Core Structure" type="css" copy}
```css
  table {
    @apply w-full border-collapse border-2 border-primary-light-500;
  }

  th {
    @apply bg-primary-light-500/10 text-primary-light-500 text-left p-2;
  }

  td {
    @apply border p-2 border-primary-light-500;
  }
```
::
- Pagination controls:
::code-box{header="Pagination Styles" type="css" copy}
```css
  .pagination {
    @apply flex justify-between mt-4;
  }
```
::

::doc-topic
#title
## Features
#description
- Column sorting (asc/desc)
- Global search filtering
- Pagination controls
- Custom cell content via slots
- Hidden columns support
- Responsive design
::

::doc-topic
#title
## Dependencies
#description
- `PUInput` for search functionality
- `PUButton` for pagination controls
- `PUIcon` for sort indicators
- Tailwind CSS for styling
- Vue 3 Composition API
::
