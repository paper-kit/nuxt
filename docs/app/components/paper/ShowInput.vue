<template>
  <div class="pu-input-demo font-patrick">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUInput
          v-model="demoValue"
          placeholder="Enter text..."
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'with-icons'">
      <template #preview>
        <PUInput
          v-model="searchValue"
          icon-left="search"
          icon-right="close-x-exit"
          placeholder="Search..."
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'disabled'">
      <template #preview>
        <PUInput
          v-model="disabledValue"
          placeholder="Disabled field"
          disabled
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
    <CodeBlock v-if="type === 'with-label'">
      <template #preview>
        <div class="flex flex-col w-full">
          <PULabel id="label">
            with label
          </PULabel>
          <PUInput
            id="label"
            v-model="demoValue"
            placeholder="with label"
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
import { ref } from 'vue'

defineProps<{
  type: 'default' | 'with-icons' | 'disabled' | 'with-label'
}>()

const demoValue = ref('')
const searchValue = ref('')
const disabledValue = ref('')
</script>
