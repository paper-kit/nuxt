::doc-topic
#title
PUIcon Component
#description
A comprehensive icon library with over 200+ icons for your application needs
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::code-box{header="Basic Icon Usage" type="html" copy}

```html
<template>
  <PUIcon name="home" />
</template>
```

::

::doc-topic
#description

### With Custom Classes

::
::code-box{header="Custom Styling" type="html" copy}

```html
<template>
  <PUIcon name="heart" custom-class="text-red-500 text-3xl" />
</template>
```

::

::doc-topic
#description

### In Buttons

::
::code-box{header="Icon in Button" type="html" copy}

```html
<template>
  <PUButton>
    <PUIcon name="download" />
    Download
  </PUButton>
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

- - 'name'
  - 'string'
  - 'Yes'
  - '-'
  - 'Name of the icon to display'
- - 'custom-class'
  - 'string'
  - 'No'
  - "''"
  - 'Additional CSS classes for custom styling'

---

::

### Full Icon List

For a complete list of all available icons, use the interactive icon explorer component below:

::doc-topic
#title

## Icon Explorer

#description
Search and preview all available icons
::

::paper-show-icons
::

::doc-topic
#title

## Styling

#description

- Default size matches parent text size
- Use Tailwind classes for customization:
  ::code-box{header="Size Examples" type="html" copy}

```html
<PUIcon name="star" class="text-sm" />
<!-- Small -->
<PUIcon name="star" class="text-xl" />
<!-- Large -->
<PUIcon name="star" class="w-8 h-8" />
<!-- Fixed size -->
```

::

- Color customization:
  ::code-box{header="Color Examples" type="html" copy}

```html
<PUIcon name="heart" class="text-red-500" />
<PUIcon name="sun" class="text-yellow-400" />
<PUIcon name="cloud" class="text-blue-300" />
```

::

::doc-topic
#title

## Best Practices

#description

1. **Accessibility**: Always provide context when using standalone icons
2. **Consistency**: Maintain consistent icon sizes within components
3. **Feedback**: Use hover states and transitions for interactive icons
4. **Semantics**: Choose icons that clearly represent their function
5. **Performance**: Import only the icons you need in production
   ::
