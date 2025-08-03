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
            divider-style="solid"
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
            divider-style="solid"
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
          <div>content</div>
          <PUDivider divider-style="solid" />
          <div>content</div>
          <PUDivider divider-style="dashed" />
          <div>content</div>
          <PUDivider divider-style="dotted" />
          <div>content</div>
          <PUDivider divider-style="wavy" />
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
          divider-style="solid"
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
          <div>content</div>
          <PUDivider size="small" />
          <div>content</div>
          <PUDivider size="medium" />
          <div>content</div>
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
