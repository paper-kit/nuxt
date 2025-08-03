::doc-topic
#title
PUDivider Component
#description
A hand-drawn style divider component for creating visual separations with various styles and orientations
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-divider{type="horizontal"}
#code
```html
<template>
  <div>Content above</div>
  <PUDivider orientation="horizontal" divider-style="solid" />
  <div>Content below</div>
</template>
```
::

::doc-topic
#description
Vertical Divider
::
::paper-show-divider{type="vertical"}
#code
```html
<template>
  <div class="flex items-center">
    <div>Left content</div>
    <PUDivider orientation="vertical" divider-style="solid" />
    <div>Right content</div>
  </div>
</template>
```
::

::doc-topic
#description
Different Styles
::
::paper-show-divider{type="styles"}
#code
```html
<template>
  <PUDivider divider-style="solid" />
  <PUDivider divider-style="dashed" />
  <PUDivider divider-style="dotted" />
  <PUDivider divider-style="wavy" />
</template>
```
::

::doc-topic
#description
With Text
::
::paper-show-divider{type="with-text"}
#code
```html
<template>
  <PUDivider text="Section Title" divider-style="solid" />
</template>
```
::

::doc-topic
#description
Different Sizes
::
::paper-show-divider{type="sizes"}
#code
```html
<template>
  <PUDivider size="small" />
  <PUDivider size="medium" />
  <PUDivider size="large" />
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
  - - 'orientation'
    - 'horizontal | vertical'
    - 'No'
    - 'horizontal'
    - 'Divider orientation'
  - - 'dividerStyle'
    - 'solid | dashed | dotted | wavy'
    - 'No'
    - 'solid'
    - 'Divider line style'
  - - 'text'
    - 'string'
    - 'No'
    - "''"
    - 'Text to display in the divider'
  - - 'size'
    - 'small | medium | large'
    - 'No'
    - 'medium'
    - 'Divider thickness'
  - - 'customClass'
    - 'string'
    - 'No'
    - "''"
    - 'Custom CSS classes'
---
::

::doc-topic
#title
Features
#description
- Hand-drawn style visual effects
- Multiple orientations: horizontal and vertical
- Various line styles: solid, dashed, dotted, wavy
- Text support with background masking
- Different sizes for thickness control
- Dark mode support
- Responsive design
::

::doc-topic
#title
Dependencies
#description
- Tailwind CSS for styling
- Vue 3 Composition API
:: 
