<template>
  <div class="font-patrick">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PURadio
          v-model="selectedValue"
          :value="'option1'"
          label="Option 1"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'with-options'">
      <template #preview>
        <PURadio
          v-model="selectedValue"
          :options="[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'all-variants'">
      <template #preview>
        <div class="flex flex-col gap-4">
          <!-- Flavors -->
          <div class="flex flex-col gap-2">
            <PURadio
              v-model="selectedValue"
              :value="'normal'"
              flavor="normal"
              label="Normal"
            />
            <PURadio
              v-model="selectedValue"
              :value="'outlined'"
              flavor="outlined"
              label="Outlined"
            />
            <PURadio
              v-model="selectedValue"
              :value="'box'"
              flavor="box"
              label="Box"
            />
          </div>

          <!-- Disabled State -->
          <div class="flex flex-col gap-2">
            <PURadio
              v-model="selectedValue"
              :value="'disabled'"
              label="Disabled"
              disabled
            />
          </div>
        </div>
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
  type: 'default' | 'with-options' | 'all-variants'
}>()

const selectedValue = ref('option1')
</script>
