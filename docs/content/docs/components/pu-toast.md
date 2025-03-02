::doc-topic
#title
PU-Toast Component
#description
A flexible toast notification system with multiple positions and severity levels
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-toast{type="default"}
#code

```html
<template>
  <PUButton @click="showDefault"> Show Default Toast </PUButton>
  <PUToast position="top-right" />
</template>

<script setup>
  const { add } = useToast();

  const showDefault = () => {
    add({
      severity: "primary",
      summary: "This is a demonstration",
      life: 3000,
    });
  };
</script>
```

::

::doc-topic
#description

### Outlined

::
::paper-show-toast{type="positions"}
#code

```html
<template>
  <div>
    <PUButton @click="showSecondary"> Show Outlined Toast </PUButton>
    <PUToast position="top-left" />
    <PUToast position="top-right" />
    <PUToast position="bottom-left" />
    <PUToast position="bottom-right" />
    <PUToast position="center" />
  </div>
</template>

<script setup>
  const { add } = useToast();

  const showSecondary = () => {
    add({
      severity: "secondary",
      summary: "This is a success",
      life: 3000,
    });
  };
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

- - 'position'
  - 'top-left | top-right | bottom-left | bottom-right | center'
  - 'No'
  - 'top-right'
  - 'Position of toast container'

---

::

::doc-topic
#title

## Toast Store API

::
::doc-table

---

headers: ['Method', 'Parameters', 'Description']
rows:

- - 'add'
  - '{ severity: string, summary: string, detail?: string, life?: number }'
  - 'Adds a new toast notification'
- - 'remove'
  - 'id: string'
  - 'Removes a specific toast'
- - 'toasts'
  - '-'
  - 'Reactive array of active toasts'

---

::

::doc-topic
#title

## Styling

#description

- Base styling with Tailwind:
  ::code-box{header="Core Structure" type="css" copy}

```css
.pu-toast {
  @apply flex items-center justify-between p-4 gap-2;
  @apply rounded-lg shadow-md transition-all duration-300;
  @apply ease-in-out border opacity-100 transform scale-100;
}
```

::

- Severity variants:
  ::code-box{header="Severity Styles" type="css" copy}

```css
.pu-toast--primary {
  @apply bg-primary-light-500 text-primary-light-50 border-transparent;
}

.pu-toast--secondary {
  @apply bg-white text-primary-light-500 border-primary-light-500 border-2;
}
```

::

::doc-topic
#title

## Transition Effects

#description

- Smooth enter/leave animations:
  ::code-box{header="Transition Styles" type="css" copy}

```css
.toast-transition-enter-active,
.toast-transition-leave-active {
  @apply transition-all duration-300;
}

.toast-transition-enter-from {
  @apply opacity-0 transform translate-y-4;
}

.toast-transition-leave-to {
  @apply opacity-0 transform translate-y-4;
}
```

::

::doc-topic
#title

## Features

#description

- Multiple display positions
- Customizable duration
- Interactive close button
- Smooth transitions
- Severity level styling
  ::

::doc-topic
#title

## Dependencies

#description

- `toastStore` for state management
- `PUIcon` component for icons
- Tailwind CSS for styling
- Vue Transition component
  ::
