::doc-topic
#title
PU-Select Component
#description
A customizable select dropdown component with custom styling and v-model support
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-select{type="default"}
#code

```html
<template>
  <PUSelect
    :options="[{value: 1, label: 'Option 1'}, {value: 2, label: 'Option 2'}]"
    v-model="selectedValue"
  />
</template>
```

::

::doc-topic
#description

### With Placeholder

::
::paper-show-select{type="placeholder"}
#code

```html
<template>
  <PUSelect
    placeholder="Choose an option"
    :options="options"
    v-model="selectedValue"
  />
</template>
```

::

::doc-topic
#description

### With Label

::
::paper-show-select{type="with-label"}
#code

```html
<template>
  <div class="flex flex-col">
    <PULabel id="label"> with label </PULabel>
    <PUSelect
      placeholder="Choose an option"
      :options="options"
      v-model="selectedValue"
    />
  </div>
</template>
```

::

::doc-topic
#description

### Different Sizes

::
::paper-show-select{type="sizes"}
#code

```html
<template>
  <div class="flex flex-col gap-2">
    <PUSelect size="small" :options="options" v-model="smallValue" />
    <PUSelect size="large" :options="options" v-model="largeValue" />
  </div>
</template>
```

::

::doc-topic
#description

### Preselected Option

::
::paper-show-select{type="example-option"}
#code

```html
<template>
  <PUSelect
    :example-option="{value: 'default', label: 'Preselected'}"
    :options="options"
    v-model="preselectedValue"
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

- - 'options'
  - 'Array<{value: string | number, label: string}>'
  - 'Yes'
  - '-'
  - 'Available options in dropdown'
- - 'modelValue'
  - 'string | number | null'
  - 'Yes'
  - '-'
  - 'Selected value (v-model support)'
- - 'placeholder'
  - 'string'
  - 'No'
  - "'Select'"
  - 'Placeholder text when no option is selected'
- - 'size'
  - "'small' | 'large'"
  - 'No'
  - '-'
  - 'Control padding size'
- - 'id'
  - 'string'
  - 'No'
  - 'undefined'
  - 'HTML id attribute'
- - 'exampleOption'
  - '{value: string | number, label: string}'
  - 'No'
  - 'undefined'
  - 'Example option for documentation purposes'

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
  - 'Emits when selection changes'
  - 'string | number | null'
- - 'change'
  - 'Native select change event'
  - 'Event'

---

::

::doc-topic
#title

## Styling

#description

- Custom arrow using PUIcon component
- Focus ring styling:
  ::code-box{header="Focus State" type="css" copy}

```css
.ring-2.ring-primary-light-500 {
  @apply focus:outline-none focus:ring-2 focus:ring-primary-light-500;
}
```

::

- Hover states for options:
  ::code-box{header="Option Hover" type="css" copy}

```css
.hover\:bg-primary-light-500:hover {
  @apply bg-primary-light-500 text-white;
}
```

::

::doc-topic
#title

## Accessibility Features

#description

- Proper label association using `id` prop
- Keyboard navigation support
- Screen reader friendly markup
- Visible focus states
  ::

::doc-topic
#title

## Dependencies

#description

- `PUIcon` for custom arrow display
- Tailwind CSS for styling
- Vue 3 Composition API
  ::
