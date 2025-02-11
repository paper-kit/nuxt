<template>
  <div class="avatar-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUAvatar src="/avatar.svg" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'sizes'">
      <template #preview>
        <div class="flex items-center gap-2">
          <PUAvatar
            src="/avatar.svg"
            size="small"
          />
          <PUAvatar
            src="/avatar.svg"
            size="medium"
          />
          <PUAvatar
            src="/avatar.svg"
            size="large"
          />
          <PUAvatar
            src="/avatar.svg"
            size="xlarge"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'shapes'">
      <template #preview>
        <div class="flex items-center gap-2">
          <PUAvatar
            src="/avatar.svg"
            shape="circular"
          />
          <PUAvatar
            src="/avatar.svg"
            shape="rounded"
          />
          <PUAvatar
            src="/avatar.svg"
            shape="square"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'fallback'">
      <template #preview>
        <PUAvatar />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'default' | 'sizes' | 'shapes' | 'fallback'
}>()
</script>
