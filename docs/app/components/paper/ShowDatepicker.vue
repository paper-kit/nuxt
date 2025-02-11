<template>
  <div class="datepicker-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUDatePicker v-model="selectedDate" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'always-open'">
      <template #preview>
        <PUDatePicker
          v-model="selectedDate"
          always-open
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'disabled-dates'">
      <template #preview>
        <PUDatePicker
          v-model="selectedDate"
          :disabled-dates="['2023-10-20', '2023-10-25']"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'disabled-range'">
      <template #preview>
        <PUDatePicker
          v-model="selectedDate"
          :disabled-range="{ start: '2023-10-10', end: '2023-10-15' }"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
const selectedDate = ref('2023-10-16')

defineProps<{
  type: 'default' | 'always-open' | 'disabled-dates' | 'disabled-range'
}>()
</script>
