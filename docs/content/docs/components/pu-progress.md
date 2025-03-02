::doc-topic
#title
PU-Progress Component
#description
A versatile progress indicator component with multiple display modes and size options
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-progress{type="default"}
#code

```html
<template>
  <div class="w-36">
    <PUProgress mode="horizontal" :progress="10" size="medium" />
  </div>
</template>
```

::

::doc-topic
#description

### Radial Mode

::
::paper-show-progress{type="radial"}
#code

```html
<template>
  <PUProgress mode="radial" :progress="50" size="large" />
</template>
```

::

::doc-topic
#description

### Vertical Mode

::
::paper-show-progress{type="vertical"}
#code

```html
<template>
  <PUProgress mode="vertical" :progress="25" size="medium" />
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

- - 'mode'
  - 'radial | horizontal | vertical'
  - 'Yes'
  - '-'
  - 'Display mode of the progress indicator'
- - 'progress'
  - 'number'
  - 'Yes'
  - '-'
  - 'Progress value (0 to 100)'
- - 'size'
  - 'small | medium | large'
  - 'No'
  - 'medium'
  - 'Size of the progress indicator'

---

::

::doc-topic
#title

## Styling

#description

- Base styling with Tailwind:
  ::code-box{header="Core Structure" type="css" copy}

```css
/* Radial Mode */
.radial-progress {
  @apply transform -rotate-90;
}

/* Horizontal Mode */
.horizontal-progress {
  @apply w-full bg-gray-200 rounded-lg overflow-hidden;
}

/* Vertical Mode */
.vertical-progress {
  @apply bg-gray-200 rounded-lg overflow-hidden;
}
```

::

- Progress bar colors:
  ::code-box{header="Progress Colors" type="css" copy}

```css
.progress-bar {
  @apply bg-primary-light-500 transition-all duration-300;
}
```

::

::doc-topic
#title

## Features

#description

- Three display modes: radial, horizontal, and vertical
- Smooth progress transitions
- Multiple size options
- Accessible markup
- Customizable styling
  ::

::doc-topic
#title

## Dependencies

#description

- Tailwind CSS for styling
  ::
