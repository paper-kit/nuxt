::doc-topic
#title
PU-Video Component
#description
A fully-featured video player component with playback controls, volume adjustment, and fullscreen support
::

::doc-topic
#title
Usage
#description
Basic Usage
::
::paper-show-video{type="default"}
#code

```html
<template>
  <PUVideo src="/paper-ui.mp4" />
</template>
```

::

::doc-topic
#description

### With Poster Image

::
::paper-show-video{type="poster"}
#code

```html
<template>
  <PUVideo src="/paper-ui.mp4" poster="/bg.svg" />
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
  - 'URL of the video file'
- - 'poster'
  - 'string'
  - 'No'
  - 'undefined'
  - 'URL of the poster image'

---

::

::doc-topic
#title

## Features

#description

- Play/Pause controls
- Seek bar with current time and duration
- Volume control with mute toggle
- Fullscreen mode
- Keyboard shortcuts support
- Responsive design
  ::

::doc-topic
#title

## Styling

#description

- Base styling with Tailwind:
  ::code-box{header="Core Structure" type="css" copy}

```css
.video-container {
  @apply relative w-full max-w-xl border-2 border-primary-light-500 
          rounded-lg shadow-lg overflow-hidden;
}

.controls {
  @apply absolute -bottom-1 -left-1 w-[calc(100%+.5rem)] bg-white 
          border-2 border-primary-light-500 rounded-b-lg text-primary-light-500 
          p-2 flex items-center gap-3;
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

## Keyboard Shortcuts

#description

- **Space**: Play/Pause
- **Arrow Left/Right**: Seek backward/forward
- **Arrow Up/Down**: Adjust volume
- **F**: Toggle fullscreen
- **M**: Toggle mute
  ::

::doc-topic
#title

## Dependencies

#description

- `PUIcon` for control icons
- Tailwind CSS for styling
- Vue 3 Composition API
  ::
