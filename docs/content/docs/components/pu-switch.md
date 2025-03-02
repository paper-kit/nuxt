::doc-topic
#title
PUSwitch Component
#description
A customizable switch (toggle) component with multiple variants, disabled states, and different widths.
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-switch{type="default"}
#code

```html
<template>
  <PUSwitch v-model="isActive" label="Enable feature" />
</template>
```

::

::doc-topic
#description

### Mid Variant

::
::paper-show-switch{type="mid"}
#code

```html
<template>
  <PUSwitch v-model="isActive" width="mid" label="Mid style" />
</template>
```

::

::doc-topic
#description

### Disabled State

::
::paper-show-switch{type="disabled"}
#code

```html
<template>
  <PUSwitch v-model="isActive" disabled label="Disabled switch" />
</template>
```

::

::doc-topic
#description

### Different Widths

::
::paper-show-switch{type="width-options"}
#code

```html
<template>
  <div class="flex flex-col gap-4">
    <PUSwitch v-model="isActive" width="full" label="Full width" />
    <PUSwitch v-model="isActive" width="mid" label="Mid width" />
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
  - 'The current state of the switch (on/off)'
- - 'disabled'
  - 'boolean'
  - 'No'
  - 'false'
  - 'Disables interaction with the switch'
- - 'label'
  - 'string'
  - 'No'
  - "''"
  - 'Text label displayed next to the switch'
- - 'flavor'
  - 'normal | outlined'
  - 'No'
  - 'normal'
  - 'Defines the styling variant of the switch'
- - 'width'
  - 'full | mid'
  - 'No'
  - 'full'
  - 'Defines the width of the switch'

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
  - '`pu-switch--normal`'
  - 'Standard filled switch (Default)'
- - 'outlined'
  - '`pu-switch--outlined`'
  - 'Switch with a border and transparent inactive state'

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
.pu-switch {
  @apply rounded-full transition-colors duration-300;
}
.pu-switch-thumb {
  @apply absolute bg-white rounded-full shadow-sm transform transition-transform;
}
```

::
::
::doc-topic
#description

- Hover effects apply when not disabled
- Borders and backgrounds adjust dynamically based on the active state
- Fully customizable through CSS classes
  ::

::doc-topic
#title

## Dependencies

#description

- Built with Tailwind CSS utility classes
- Fully compatible with Vue's `v-model`
  ::
