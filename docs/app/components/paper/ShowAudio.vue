<template>
  <div class="audio-demo">
    <CodeBlock>
      <template #preview>
        <PUAudio src="/paper-ui.mp3" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type?: "default";
}>();
</script>
