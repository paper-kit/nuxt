<template>
  <div class="tag-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUTag label="Default Tag" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'with-icon'">
      <template #preview>
        <PUTag label="Tag with Icon" icon="clear-x" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: "default" | "with-icon";
}>();
</script>
