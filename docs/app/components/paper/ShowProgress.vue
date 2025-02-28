<template>
  <div class="progress-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <div class="w-36">
          <PUProgress mode="horizontal" :progress="10" size="medium" />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'radial'">
      <template #preview>
        <PUProgress mode="radial" :progress="50" size="large" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'vertical'">
      <template #preview>
        <PUProgress mode="vertical" :progress="80" size="medium" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: "default" | "radial" | "vertical";
}>();
</script>
