::doc-topic
#title
PU-Button Component
#description
A customizable button component with multiple variants, icons, and interactive states.
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-button{type="default"}
#code

```html
<template>
  <PUButton>Click me</PUButton>
</template>
```

::
::doc-topic
#description

### With Icons

::
::paper-show-button{type="with-icons"}
#code

```html
<template>
  <PUButton icon-left="arrow-left" icon-right="arrow-right">
    Navigation
  </PUButton>
</template>
```

::
::doc-topic
#description
All Variants
::
::paper-show-button{type="all-variants"}
#code

```html
<template>
  <div class="flex flex-col gap-4">
    <!-- Flavors -->
    <PUButton flavor="normal">Normal</PUButton>
    <PUButton flavor="outlined">Outlined</PUButton>
    <PUButton flavor="ghost">Ghost</PUButton>

    <!-- Sizes -->
    <PUButton size="small">Small</PUButton>
    <PUButton size="medium">Medium</PUButton>
    <PUButton size="large">Large</PUButton>

    <!-- Shapes -->
    <PUButton shape="rounded">Rounded</PUButton>
    <PUButton shape="circle">Circle</PUButton>
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

- - 'disabled'
  - 'boolean'
  - 'No'
  - 'false'
  - 'Disables interactive state'
- - 'flavor'
  - 'normal | outlined | ghost'
  - 'No'
  - 'normal'
  - 'Visual style variant'
- - 'shape'
  - 'rounded | circle'
  - 'No'
  - 'rounded'
  - 'Border radius style'
- - 'size'
  - 'small | medium | large'
  - 'No'
  - 'medium'
  - 'Button dimensions'
- - 'customClass'
  - 'string'
  - 'No'
  - "''"
  - 'Additional CSS classes'
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

## Flavor Variants

::
::doc-table

---

headers: ['Variant', 'Classes', 'Description']
rows:

- - 'normal'
  - '`pu-button--normal`'
  - 'Solid background with white text (Default)'
- - 'outlined'
  - '`pu-button--outlined`'
  - 'Transparent background with border'
- - 'ghost'
  - '`pu-button--ghost`'
  - 'Minimal style with no background/border'

---

::

::doc-topic
#title

## Size Variants

::
::doc-table

---

headers: ['Size', 'Classes', 'Description']
rows:

- - 'small'
  - '`pu-button--small`'
  - 'Compact padding: px-2 py-1'
- - 'medium'
  - '`pu-button--medium`'
  - 'Standard padding: px-4 py-2 (Default)'
- - 'large'
  - '`pu-button--large`'
  - 'Large padding: px-6 py-3'

---

::

::doc-topic
#title

## Shape Variants

::
::doc-table

---

headers: ['Shape', 'Classes', 'Description']
rows:

- - 'rounded'
  - '`pu-button--rounded`'
  - 'Standard border radius (Default)'
- - 'circle'
  - '`pu-button--circle`'
  - 'Fully rounded edges'

---

::

::doc-topic
#title

## Styling

#description

- Uses `font-patrick` font family class
- Base styles applied with utility-first CSS:
  ::code-box{header="Base Styles" type="css" copy=""}

```css
.pu-button {
  @apply py-2 shadow-md transition duration-200 ease-in-out flex justify-center gap-1;
}
.pu-button:not(:disabled):hover {
  @apply shadow-primary-light-500/50 font-bold;
}
```

::
::
::doc-topic
#description

- Icon colors adapt automatically to flavor
- State management for disabled/hover states
- Customizable through CSS classes or style overrides

::doc-topic
#title

## Dependencies

#description

- Requires `PUIcon` component for icon support
- Built with Tailwind CSS utility classes
  ::
