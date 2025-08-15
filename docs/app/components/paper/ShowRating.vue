<template>
  <div class="rating-demo">
    <CodeBlock
      v-if="type === 'basic'"
      :compare="false"
    >
      <template #preview>
        <PURating v-model="value" />
        <div class="mt-2 text-sm text-gray-600">
          Rating: {{ value }}/5
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'with-value'"
      :compare="false"
    >
      <template #preview>
        <PURating
          v-model="value2"
          :show-value="true"
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
        <div class=" flex flex-col gap-2">
          <PURating
            v-model="value3"
            size="small"
          />
          <PURating
            v-model="value3"
            size="medium"
          />
          <PURating
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
      v-if="type === 'readonly'"
      :compare="false"
    >
      <template #preview>
        <PURating
          v-model="value4"
          :readonly="true"
          :show-value="true"
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
        <PURating
          v-model="value5"
          :disabled="true"
          :show-value="true"
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
  type: 'basic' | 'with-value' | 'sizes' | 'readonly' | 'disabled'
}>()

const value = ref(3)
const value2 = ref(4)
const value3 = ref(3)
const value4 = ref(4)
const value5 = ref(2)
</script>
