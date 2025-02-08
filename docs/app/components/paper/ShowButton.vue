<template>
  <div class="font-patrick">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUButton>Click me</PUButton>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'with-icons'">
      <template #preview>
        <PUButton
          icon-left="arrow-down"
          icon-right="arrow-down"
        >
          Navigation
        </PUButton>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'all-variants'">
      <template #preview>
        <div class="flex flex-col gap-4">
          <!-- Flavors -->
          <div class="flex gap-2">
            <PUButton flavor="normal">
              Normal
            </PUButton>
            <PUButton flavor="outlined">
              Outlined
            </PUButton>
            <PUButton flavor="ghost">
              Ghost
            </PUButton>
          </div>

          <!-- Sizes -->
          <div class="flex gap-2 items-center">
            <PUButton size="small">
              Small
            </PUButton>
            <PUButton size="medium">
              Medium
            </PUButton>
            <PUButton size="large">
              Large
            </PUButton>
          </div>

          <!-- Shapes -->
          <div class="flex gap-2">
            <PUButton shape="rounded">
              Rounded
            </PUButton>
            <PUButton shape="circle">
              Circle
            </PUButton>
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
defineProps<{
  type: 'default' | 'with-icons' | 'all-variants'
}>()
</script>
