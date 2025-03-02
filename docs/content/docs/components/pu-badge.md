::doc-topic
#title
PU-Badge Component
#description
A customizable badge component with support for icons and different severity styles.
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-badge{type="default"}
#code

```html
<template>
  <PUBadge label="New Feature" />
</template>
```

::
::doc-topic
#description

### With Icon

::

::paper-show-badge{type="icon"}
#code

```html
<template>
  <PUBadge label="With Icon" icon="close" />
</template>
```

::

::doc-topic
#description
All Variants
::
::paper-show-badge{type="all"}
#code

```html
<template>
  <div class="flex gap-2">
    <PUBadge label="Primary" severity="primary" />
    <PUBadge label="Secondary" severity="secondary" />
    <PUBadge label="Ghost" severity="ghost" />
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

headers: ['Prop', 'Type', 'Required', 'Description']
rows:

- - 'label'
  - 'string'
  - 'Yes'
  - 'Text displayed inside the badge'
- - 'icon'
  - 'string'
  - 'No'
  - 'Icon name (requires PUIcon component)'
- - 'severity'
  - 'primary | secondary | ghost'
  - 'No'
  - 'Badge color variant (default: primary)'

---

::
::doc-topic
#title

## Severity Variants

::
::doc-table

---

headers: ['Variant', 'Classes', 'Description']
rows:

- - 'Primary'
  - 'border-primary-light-500 bg-primary-light-500 text-primary-dark-50'
  - 'Solid badge with primary colors (Default)'
- - 'Secondary'
  - 'border-primary-light-200 bg-primary-light-200 text-primary-light-500'
  - 'Subtle badge with secondary colors'
- - 'Ghost'
  - 'bg-transparent text-primary-light-500'
  - 'Transparent background with text and border'

---

::

::doc-topic
#title

## Styling

#description

- Uses font-patrick font family class
- Base styles applied with Tailwind-like utilities:
  ::code-box{header="Advanced Customization Example" type="css" copy}

```css
.pu-badge--default {
  @apply w-fit text-xs p-1 rounded-lg flex justify-between gap-2 items-center border-2;
}
```

::
::
::doc-topic
#description

- Colors are dynamically applied based on severity prop
- Customizable through CSS variables or overriding the style classes
  ::doc-topic
  #title

## Dependencies

#description

- Requires `PUIcon` component for icon display
- Uses Tailwind CSS (or compatible utility framework) for styling
  ::
