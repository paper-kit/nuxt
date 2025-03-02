::doc-topic
#title
PU-Checkbox Component
#description
A customizable checkbox component with multiple states and interactive features
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-checkbox{type="default"}
#code

```html
<template>
  <PUCheckbox v-model="checked" />
</template>
```

::

::doc-topic
#description

### With Label

::
::paper-show-checkbox{type="with-label"}
#code

```html
<template>
  <PUCheckbox v-model="checked" label="Accept Terms" />
</template>
```

::

::doc-topic
#description

### Strikethrough Effect

::
::paper-show-checkbox{type="strike"}
#code

```html
<template>
  <PUCheckbox v-model="checked" label="Task Completed" strike-on-false />
</template>
```

::

::doc-topic
#description

### Different Flavors

::
::paper-show-checkbox{type="flavors"}
#code

```html
<template>
  <div class="flex flex-col gap-2">
    <PUCheckbox v-model="normal" label="Normal" />
    <PUCheckbox v-model="outlined" label="Outlined" flavor="outlined" />
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
  - 'boolean'
  - 'Yes'
  - '-'
  - 'Current state (v-model support)'
- - 'disabled'
  - 'boolean'
  - 'No'
  - 'false'
  - 'Disables interaction'
- - 'label'
  - 'string'
  - 'No'
  - "''"
  - 'Checkbox label text'
- - 'flavor'
  - 'normal | outlined'
  - 'No'
  - 'normal'
  - 'Visual style variant'
- - 'strikeOnFalse'
  - 'boolean'
  - 'No'
  - 'false'
  - 'Adds strikethrough to label when unchecked'

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
  - 'Emits when state changes'
  - 'boolean'
- - 'checked'
  - 'Emits when checked'
  - '-'
- - 'unchecked'
  - 'Emits when state unchecked'
  - '-'

---

::

::doc-topic
#title

## Styling

#description

- Base styling with Tailwind:
  ::code-box{header="Core Structure" type="css" copy}
  ```css
  .pu-checkbox {
    @apply flex items-center justify-center w-5 h-5 
          border-2 border-primary-light-500 rounded 
          transition-all;
  }
  ```

````
::
- Interactive states:
::code-box{header="Interactive States" type="css" copy}
```css
  .active\:animate-bounce:active {
    animation: bounce 0.3s ease-in-out;
  }

  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
````

::

::doc-topic
#title

## Accessibility Features

#description

- Clickable label area
- Visual feedback on interaction
- Clear disabled state styling
- Keyboard focusable
  ::

::doc-topic
#title

## Dependencies

#description

- `PUIcon` component for checkmark display
- Tailwind CSS for styling
- Vue 3 Composition API
  ::
