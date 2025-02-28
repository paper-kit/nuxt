<template>
  <div class="video-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUVideo src="/paper-ui.mp4" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'poster'">
      <template #preview>
        <PUVideo src="/paper-ui.mp4" poster="/bg.svg" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: "default" | "poster";
}>();
</script>
