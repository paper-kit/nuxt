<template>
  <div class="button-icon-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUButtonIcon name="home" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'flavors'">
      <template #preview>
        <div class="flex gap-2">
          <PUButtonIcon
            name="star"
            flavor="normal"
          />
          <PUButtonIcon
            name="star"
            flavor="outlined"
          />
          <PUButtonIcon
            name="star"
            flavor="ghost"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'sizes'">
      <template #preview>
        <div class="flex items-center gap-2">
          <PUButtonIcon
            name="cog"
            size="small"
          />
          <PUButtonIcon
            name="cog"
            size="medium"
          />
          <PUButtonIcon
            name="cog"
            size="large"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'shapes'">
      <template #preview>
        <div class="flex gap-2">
          <PUButtonIcon
            name="user-circle"
            shape="circle"
          />
          <PUButtonIcon
            name="user-circle"
            shape="rounded"
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
  type: 'default' | 'flavors' | 'sizes' | 'shapes'
}>()
</script>
