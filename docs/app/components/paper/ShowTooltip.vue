<template>
  <div class="pu-tooltip-demo font-patrick">
    <!-- Top Variations -->
    <CodeBlock v-if="type === 'top'">
      <template #preview>
        <PUTooltip :positions="['top']"> Top </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'top-left'">
      <template #preview>
        <PUTooltip :positions="['top-left']"> Top Left </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'top-right'">
      <template #preview>
        <PUTooltip :positions="['top-right']"> Top Right </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <!-- Bottom Variations -->
    <CodeBlock v-if="type === 'bottom'">
      <template #preview>
        <PUTooltip :positions="['bottom']"> Bottom </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'bottom-left'">
      <template #preview>
        <PUTooltip :positions="['bottom-left']"> Bottom Left </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'bottom-right'">
      <template #preview>
        <PUTooltip :positions="['bottom-right']"> Bottom Right </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <!-- Left Variations -->
    <CodeBlock v-if="type === 'left'">
      <template #preview>
        <PUTooltip :positions="['left']"> Left </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'left-top'">
      <template #preview>
        <PUTooltip :positions="['left-top']"> Left Top </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'left-bottom'">
      <template #preview>
        <PUTooltip :positions="['left-bottom']"> Left Bottom </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <!-- Right Variations -->
    <CodeBlock v-if="type === 'right'">
      <template #preview>
        <PUTooltip :positions="['right']"> Right </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'right-top'">
      <template #preview>
        <PUTooltip :positions="['right-top']"> Right Top </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'right-bottom'">
      <template #preview>
        <PUTooltip :positions="['right-bottom']"> Right Bottom </PUTooltip>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type:
    | "top"
    | "top-left"
    | "top-right"
    | "bottom"
    | "bottom-left"
    | "bottom-right"
    | "left"
    | "left-top"
    | "left-bottom"
    | "right"
    | "right-top"
    | "right-bottom";
}>();
</script>
