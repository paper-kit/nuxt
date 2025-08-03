::doc-topic
#title
PUCopyToClipboard Component
#description
A hand-drawn style copy-to-clipboard component with success feedback and smooth animations
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-copy{type="basic"}
#code
```html
<template>
  <PUCopyToClipboard value="Hello, World!" />
</template>
```
::

::doc-topic
#description
Different Sizes
::
::paper-show-copy{type="sizes"}
#code
```html
<template>
  <PUCopyToClipboard value="Small copy" size="small" />
  <PUCopyToClipboard value="Medium copy" size="medium" />
  <PUCopyToClipboard value="Large copy" size="large" />
</template>
```
::

::doc-topic
#description
Custom Text
::
::paper-show-copy{type="custom-text"}
#code
```html
<template>
  <PUCopyToClipboard
    value="Custom text to copy"
    text="Copy Code"
    success-text="Code Copied!"
  />
</template>
```
::

::doc-topic
#description
Disabled State
::
::paper-show-copy{type="disabled"}
#code
```html
<template>
  <PUCopyToClipboard
    value="Disabled copy"
    :disabled="true"
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
  - - 'text'
    - 'string'
    - 'No'
    - 'Copy'
    - 'Button text'
  - - 'value'
    - 'string'
    - 'No'
    - "''"
    - 'Text to copy to clipboard'
  - - 'successText'
    - 'string'
    - 'No'
    - 'Copied!'
    - 'Success message text'
  - - 'disabled'
    - 'boolean'
    - 'No'
    - 'false'
    - 'Disabled state'
  - - 'size'
    - 'small | medium | large'
    - 'No'
    - 'medium'
    - 'Button size'
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
  - - 'copy'
    - 'string'
    - 'Emitted when copy is initiated'
  - - 'success'
    - 'string'
    - 'Emitted when copy is successful'
  - - 'error'
    - 'Error'
    - 'Emitted when copy fails'
---
::

::doc-topic
#title
Features
#description
- Hand-drawn style button with organic shadows
- Smooth success animation with icon change
- Uses modern Clipboard API
- Automatic reset after 2 seconds
- Multiple sizes for different use cases
- Disabled state support
- Customizable text and success messages
- Dark mode support
- Responsive design
::

::doc-topic
#title
Dependencies
#description
- Tailwind CSS for styling
- Vue 3 Composition API
- Modern browser Clipboard API
:: 
