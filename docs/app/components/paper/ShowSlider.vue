<template>
  <div class="slider-demo">
    <CodeBlock
      v-if="type === 'basic'"
      :compare="false"
    >
      <template #preview>
        <PUSlider
          v-model="value"
          :min="0"
          :max="100"
        />
        <div class="mt-2 text-sm text-gray-600">
          Value: {{ value }}
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'with-labels'"
      :compare="false"
    >
      <template #preview>
        <PUSlider
          v-model="value2"
          :min="0"
          :max="100"
          :show-labels="true"
        />
        <div class="mt-2 text-sm text-gray-600">
          Value: {{ value2 }}
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'with-markers'"
      :compare="false"
    >
      <template #preview>
        <PUSlider
          v-model="value3"
          :min="0"
          :max="100"
          :step="25"
          :show-markers="true"
        />
        <div class="mt-2 text-sm text-gray-600">
          Value: {{ value3 }}
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
        <PUSlider
          v-model="value4"
          :min="0"
          :max="100"
          :disabled="true"
        />
        <div class="mt-2 text-sm text-gray-600">
          Value: {{ value4 }} (Disabled)
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'vertical'"
      :compare="false"
    >
      <template #preview>
        <div class="flex items-center gap-4">
          <div class="h-32">
            <PUSlider
              v-model="value5"
              :min="0"
              :max="100"
              orientation="vertical"
            />
          </div>
          <div class="text-sm text-gray-600">
            Value: {{ value5 }}
          </div>
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
  type: 'basic' | 'with-labels' | 'with-markers' | 'disabled' | 'vertical'
}>()

const value = ref(50)
const value2 = ref(30)
const value3 = ref(50)
const value4 = ref(75)
const value5 = ref(60)
</script>
