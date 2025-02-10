<template>
  <div class="font-patrick">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUSwitch
          v-model="isChecked"
          label="Toggle me"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'mid'">
      <template #preview>
        <div class="flex flex-col gap-4">
          <PUSwitch
            v-model="isChecked"
            width="mid"
            label="Mid style"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'disabled'">
      <template #preview>
        <PUSwitch
          v-model="isChecked"
          disabled
          label="Disabled"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  type: 'default' | 'mid' | 'disabled'
}>()

const isChecked = ref(false)
</script>
