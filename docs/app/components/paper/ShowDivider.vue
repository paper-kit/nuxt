<template>
  <div class="divider-demo">
    <CodeBlock
      v-if="type === 'horizontal'"
      :compare="false"
    >
      <template #preview>
        <div class="space-y-4">
          <div>Content above</div>
          <PUDivider
            orientation="horizontal"
            style="solid"
          />
          <div>Content below</div>
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
        <div class="flex items-center h-20">
          <div>Left content</div>
          <PUDivider
            orientation="vertical"
            style="solid"
          />
          <div>Right content</div>
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'styles'"
      :compare="false"
    >
      <template #preview>
        <div class="space-y-4">
          <PUDivider style="solid" />
          <PUDivider style="dashed" />
          <PUDivider style="dotted" />
          <PUDivider style="wavy" />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'with-text'"
      :compare="false"
    >
      <template #preview>
        <PUDivider
          text="Section Title"
          style="solid"
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
        <div class="space-y-4">
          <PUDivider size="small" />
          <PUDivider size="medium" />
          <PUDivider size="large" />
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
  type: 'horizontal' | 'vertical' | 'styles' | 'with-text' | 'sizes'
}>()
</script>
