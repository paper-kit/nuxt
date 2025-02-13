::doc-topic
#title
PU-Audio Component
#description
A customizable audio player component with playback controls and volume management
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-audio{type="default"}
#code
```html
<template>
  <PUAudio src="/paper-ui.mp3" />
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
  - - 'src'
    - 'string'
    - 'Yes'
    - '-'
    - 'URL of the audio file'
---
::

::doc-topic
#title
## Features
#description
- Play/Pause controls
- Seek bar with time tracking
- Volume control with mute toggle
- Responsive design
- Smooth animations
::

::doc-topic
#title
## Styling
#description
- Base styling with Tailwind:
::code-box{header="Core Structure" type="css" copy}
```css
  .audio-container {
    @apply relative w-full max-w-lg border-2 border-primary-light-500 
          rounded-lg shadow-lg p-4 flex items-center gap-3 bg-white;
  }

  .controls {
    @apply flex items-center gap-3;
  }
```
::
- Interactive elements:
::code-box{header="Interactive Styles" type="css" copy}
```css
  button {
    @apply transition-transform transform hover:scale-110;
  }

  input[type="range"] {
    @apply cursor-pointer accent-primary-light-500;
  }
```
::

::doc-topic
#title
## Dependencies
#description
- `PUIcon` for control icons
- Tailwind CSS for styling
- Vue 3 Composition API
::
