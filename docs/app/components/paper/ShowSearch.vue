<template>
  <div class="search-demo">
    <CodeBlock
      v-if="type === 'basic'"
      :compare="false"
    >
      <template #preview>
        <PUSearch
          v-model="searchValue"
          placeholder="Search components..."
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'with-suggestions'"
      :compare="false"
    >
      <template #preview>
        <PUSearch
          v-model="searchValue2"
          :suggestions="suggestions"
          placeholder="Search with suggestions..."
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'loading'"
      :compare="false"
    >
      <template #preview>
        <PUSearch
          v-model="searchValue3"
          :loading="true"
          placeholder="Loading search..."
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
        <div class="space-y-2">
          <PUSearch
            v-model="searchValue4"
            size="small"
            placeholder="Small search"
          />
          <PUSearch
            v-model="searchValue4"
            size="medium"
            placeholder="Medium search"
          />
          <PUSearch
            v-model="searchValue4"
            size="large"
            placeholder="Large search"
          />
        </div>
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
        <PUSearch
          v-model="searchValue5"
          :disabled="true"
          placeholder="Disabled search"
        />
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
  type: 'basic' | 'with-suggestions' | 'loading' | 'sizes' | 'disabled'
}>()

const searchValue = ref('')
const searchValue2 = ref('')
const searchValue3 = ref('')
const searchValue4 = ref('')
const searchValue5 = ref('')

const suggestions = [
  { text: 'PUButton', value: 'button' },
  { text: 'PUInput', value: 'input' },
  { text: 'PUCard', value: 'card' },
  { text: 'PUGrid', value: 'grid' },
]
</script>
