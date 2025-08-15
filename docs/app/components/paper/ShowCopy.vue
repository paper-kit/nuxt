<template>
  <div class="copy-demo">
    <CodeBlock
      v-if="type === 'basic'"
      :compare="false"
    >
      <template #preview>
        <PUCopyToClipboard value="Hello, World!" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'sizes'"
      :compare="false"
    >
      <template #preview>
        <div class="space-y-2">
          <PUCopyToClipboard
            value="Small copy"
            size="small"
          />
          <PUCopyToClipboard
            value="Medium copy"
            size="medium"
          />
          <PUCopyToClipboard
            value="Large copy"
            size="large"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'custom-text'"
      :compare="false"
    >
      <template #preview>
        <PUCopyToClipboard
          value="Custom text to copy"
          text="Copy Code"
          success-text="Code Copied!"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'disabled'"
      :compare="false"
    >
      <template #preview>
        <PUCopyToClipboard
          value="Disabled copy"
          :disabled="true"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'basic' | 'sizes' | 'custom-text' | 'disabled'
}>()
</script>
