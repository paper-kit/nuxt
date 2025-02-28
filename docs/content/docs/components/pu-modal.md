::doc-topic
#title
PU-Modal Component
#description
A flexible modal dialog component with transition effects and slot-based content
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-modal{type="default"}
#code

```html
<template>
  <PUButton @click="show"> show </PUButton>
  <PUModal />
</template>

<script lang="ts" setup>
  const { show, isVisible } = useModal();
</script>
```

::

::doc-topic
#description

### Custom Content

::
::paper-show-modal{type="custom"}
#code

```html
<template>
  <PUModal>
    <template #header>
      <h2 class="text-2xl">Custom Header</h2>
    </template>

    <template #content>
      <div class="custom-content">
        <PUIcon name="info" />
        <p>Custom modal content here</p>
      </div>
    </template>

    <template #footer>
      <div class="flex gap-2">
        <PUButton @click="hide">Confirm</PUButton>
        <PUButton flavor="ghost" @click="hide">Cancel</PUButton>
      </div>
    </template>
  </PUModal>
</template>

<script lang="ts" setup>
  const { show, hide, isVisible } = useModal();
</script>
```

::

::doc-topic
#title

## Composable API

::
::doc-table

---

headers: ['Method/State', 'Type', 'Description']
rows:

- - 'show()'
  - 'function'
  - 'Opens the modal'
- - 'hide()'
  - 'function'
  - 'Closes the modal'
- - 'isVisible'
  - 'boolean (ref)'
  - 'Reactive visibility state'

---

::

::doc-topic
#title

## Slots

::
::doc-table

---

headers: ['Slot', 'Description', 'Default Content']
rows:

- - 'header'
  - 'Modal header section'
  - 'Default Title text'
- - 'content'
  - 'Main modal content'
  - 'Default content text'
- - 'footer'
  - 'Modal footer section'
  - 'Close button'

---

::

::doc-topic
#title

## Styling

#description

- Base styling with Tailwind:
  ::code-box{header="Core Structure" type="css" copy}

```css
.modal-overlay {
  @apply fixed inset-0 flex items-center justify-center bg-white/75 z-50;
}

.modal-container {
  @apply bg-white rounded-xl p-6 shadow-lg max-w-md border-2 border-primary-light-500;
}
```

::

- Transition effects:
  ::code-box{header="Fade Animation" type="css" copy}

```css
.fade-modal-enter-active,
.fade-modal-leave-active {
  @apply transition-opacity duration-300;
}

.fade-modal-enter-from,
.fade-modal-leave-to {
  @apply opacity-0;
}
```

::

::doc-topic
#title

## Interaction Features

#description

- Click outside to close (backdrop click)
- Default close button in footer
- Escape key support (if implemented)
- Smooth fade transitions
  ::

::doc-topic
#title

## Dependencies

#description

- `useModal()` composable for state management
  ::
