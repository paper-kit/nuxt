<template>
  <div class="loading-demo">
    <CodeBlock
      v-if="type === 'circular'"
      :compare="false"
    >
      <template #preview>
        <PULoading
          type="circular"
          size="medium"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'dots'"
      :compare="false"
    >
      <template #preview>
        <PULoading
          type="dots"
          size="medium"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'skeleton'"
      :compare="false"
    >
      <template #preview>
        <div class="w-20 h-10">
          <PULoading
            type="skeleton"
            size="medium"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'with-text'"
      :compare="false"
    >
      <template #preview>
        <PULoading
          type="circular"
          size="medium"
          text="Loading..."
        />
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
        <div class="flex gap-4 items-center">
          <PULoading
            type="circular"
            size="small"
          />
          <PULoading
            type="circular"
            size="medium"
          />
          <PULoading
            type="circular"
            size="large"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'circular' | 'dots' | 'skeleton' | 'with-text' | 'sizes'
}>()
</script>
