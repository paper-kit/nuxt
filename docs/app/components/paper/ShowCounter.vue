<template>
  <div class="counter-demo">
    <CodeBlock
      v-if="type === 'basic'"
      :compare="false"
    >
      <template #preview>
        <PUCounter v-model="value" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'with-suffix'"
      :compare="false"
    >
      <template #preview>
        <PUCounter
          v-model="value2"
          suffix="items"
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
          <PUCounter
            v-model="value3"
            size="small"
          />
          <PUCounter
            v-model="value3"
            size="medium"
          />
          <PUCounter
            v-model="value3"
            size="large"
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
        <PUCounter
          v-model="value4"
          :disabled="true"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'no-controls'"
      :compare="false"
    >
      <template #preview>
        <PUCounter
          v-model="value5"
          :show-controls="false"
          suffix="views"
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
  type: 'basic' | 'with-suffix' | 'sizes' | 'disabled' | 'no-controls'
}>()

const value = ref(5)
const value2 = ref(12)
const value3 = ref(8)
const value4 = ref(3)
const value5 = ref(42)
</script>
