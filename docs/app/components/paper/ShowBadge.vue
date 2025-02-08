<template>
  <div class="pu-badge font-patrick">
    <CodeBlock v-if="type == 'default'">
      <template #preview>
        <PUBadge label="New Feature" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
    <CodeBlock v-if="type == 'icon'">
      <template #preview>
        <PUBadge
          label="With Icon"
          icon="close"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
    <CodeBlock v-if="type == 'all'">
      <template #preview>
        <div class="flex gap-2">
          <PUBadge
            label="Primary"
            severity="primary"
          />
          <PUBadge
            label="Secondary"
            severity="secondary"
          />
          <PUBadge
            label="Ghost"
            severity="ghost"
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
  type: 'default' | 'all' | 'icon'
}>()
</script>
