::doc-topic
#title
PU-Tooltip Component
#description
Customizable tooltip component with precise positioning and directional arrows
::

::doc-topic
#title
Usage
#description
### Top Positions
::
::paper-show-tooltip{type="top"}
#code
```html
<template>
  <PUTooltip :positions="['top']">
    Top Center
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Top-Left Position
::
::paper-show-tooltip{type="top-left"}
#code
```html
<template>
  <PUTooltip :positions="['top-left']">
    Top Left
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Top-Right Position
::
::paper-show-tooltip{type="top-right"}
#code
```html
<template>
  <PUTooltip :positions="['top-right']">
    Top Right
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Bottom Positions
::
::paper-show-tooltip{type="bottom"}
#code
```html
<template>
  <PUTooltip :positions="['bottom']">
    Bottom Center
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Bottom-Left Position
::
::paper-show-tooltip{type="bottom-left"}
#code
```html
<template>
  <PUTooltip :positions="['bottom-left']">
    Bottom Left
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Bottom-Right Position
::
::paper-show-tooltip{type="bottom-right"}
#code
```html
<template>
  <PUTooltip :positions="['bottom-right']">
    Bottom Right
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Left Positions
::
::paper-show-tooltip{type="left"}
#code
```html
<template>
  <PUTooltip :positions="['left']">
    Left Center
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Left-Top Position
::
::paper-show-tooltip{type="left-top"}
#code
```html
<template>
  <PUTooltip :positions="['left-top']">
    Left Top
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Left-Bottom Position
::
::paper-show-tooltip{type="left-bottom"}
#code
```html
<template>
  <PUTooltip :positions="['left-bottom']">
    Left Bottom
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Right Positions
::
::paper-show-tooltip{type="right"}
#code
```html
<template>
  <PUTooltip :positions="['right']">
    Right Center
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Right-Top Position
::
::paper-show-tooltip{type="right-top"}
#code
```html
<template>
  <PUTooltip :positions="['right-top']">
    Right Top
  </PUTooltip>
</template>
```
::

::doc-topic
#description
### Right-Bottom Position
::
::paper-show-tooltip{type="right-bottom"}
#code
```html
<template>
  <PUTooltip :positions="['right-bottom']">
    Right Bottom
  </PUTooltip>
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
  - - 'positions'
    - 'Array<Position>'
    - 'Yes'
    - '-'
    - 'Array of arrow positions (see Position Types)'
---
::

::doc-topic
#title
## Position Types
::
::doc-table
---
headers: ['Position', 'Description', 'CSS Rotation']
rows:
  - - 'top'
    - 'Top-center arrow'
    - '-135deg'
  - - 'top-left'
    - 'Top-left aligned arrow'
    - '-135deg'
  - - 'top-right'
    - 'Top-right aligned arrow'
    - '-135deg'
  - - 'bottom'
    - 'Bottom-center arrow'
    - '45deg'
  - - 'bottom-left'
    - 'Bottom-left aligned arrow'
    - '45deg'
  - - 'bottom-right'
    - 'Bottom-right aligned arrow'
    - '45deg'
  - - 'left'
    - 'Left-center arrow'
    - '135deg'
  - - 'left-top'
    - 'Left-top aligned arrow'
    - '135deg'
  - - 'left-bottom'
    - 'Left-bottom aligned arrow'
    - '135deg'
  - - 'right'
    - 'Right-center arrow'
    - '-45deg'
  - - 'right-top'
    - 'Right-top aligned arrow'
    - '-45deg'
  - - 'right-bottom'
    - 'Right-bottom aligned arrow'
    - '-45deg'
---
::

::doc-topic
#title
## Styling
#description
- Base styling with Tailwind:
::code-box{header="Core Styles" type="css" copy}
```css
  .pu-tooltip {
    @apply relative border-2 border-primary-light-500 bg-white 
          rounded-lg text-center p-4 shadow-lg shadow-black/20;
  }

  .tooltip-arrow {
    @apply absolute w-6 h-6 bg-white transform z-10 rounded-sm;
    border: 2px solid inherit;
  }
```
::
::

::doc-topic
#title
## Technical Implementation
#description
### Arrow Positioning System
- Dynamic CSS transforms based on position
- Precision placement using Tailwind spacing utilities
- Inherits border color from parent container

### CSS Clip-Path Technique
::code-box{header="Core Styles" type="css" copy}
```css
.tooltip-arrow::before {
  content: '';
  clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
  @apply absolute w-[39px] h-[39px] bg-white rotate-[135deg];
}
```
::
::


::doc-topic
#title
## Props
::
::doc-table
---
headers: ['Prop', 'Type', 'Description']
rows:
  - - 'type'
    - 'TooltipPosition'
    - 'Specific position variant to display'
---
::

::doc-topic
#title
## Type Definition
#description
::code-box{header="Type Definition" type="ts" copy}
```ts
type TooltipPosition = 
  | 'top' | 'top-left' | 'top-right'
  | 'bottom' | 'bottom-left' | 'bottom-right'
  | 'left' | 'left-top' | 'left-bottom'
  | 'right' | 'right-top' | 'right-bottom'
```
::
