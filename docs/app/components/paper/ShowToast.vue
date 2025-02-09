<template>
  <div class="toast-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUToast position="top-right" />
        <PUButton @click="showDefault">
          Show Default Toast
        </PUButton>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'positions'">
      <template #preview>
        <div>
          <PUToast position="top-left" />
          <PUToast position="top-right" />
          <PUToast position="bottom-left" />
          <PUToast position="bottom-right" />
          <PUToast position="center" />
        </div>
        <PUButton @click="showSecondary" flavor="outlined">
          Show Outlined Toast
        </PUButton>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'severity'">
      <template #preview>
        <PUToast position="top-right" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
const { add } = useToast()

defineProps<{
  type: 'default' | 'positions' | 'severity'
}>()

const showDefault = () => {
  add({
    severity: 'primary',
    summary: 'This is a demonstration',
    detail: 'This is a demonstration',
    life: 3000,
  })
}

const showSecondary = () => {
  add({
    severity: 'secondary',
    summary: 'This is a success',
    detail: 'This is a demonstration',
    life: 3000,
  })
}
</script>
