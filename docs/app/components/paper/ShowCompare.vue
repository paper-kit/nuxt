<template>
  <div class="compare-demo">
    <CodeBlock
      v-if="type === 'default'"
      :compare="false"
    >
      <template #preview>
        <PUCompare
          class="h-36"
          :with-dark-mode="false"
        >
          <template #left>
            Before
          </template>
          <template #right>
            After
          </template>
        </PUCompare>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'dark-mode'"
      :compare="false"
    >
      <template #preview>
        <PUCompare
          with-dark-mode
          class="h-36"
        >
          <span class="text-xl text-primary-light-500 dark:text-white">
            Light/Dark Comparison
          </span>
        </PUCompare>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'with-icon'"
      :compare="false"
    >
      <template #preview>
        <PUCompare
          with-icon
          class="h-36"
          with-dark-mode
        >
          <span class="text-xl text-primary-light-500 dark:text-white mt-10">
            Light/Dark Comparison
          </span>
        </PUCompare>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'default' | 'dark-mode' | 'with-icon'
}>()
</script>
