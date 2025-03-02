<template>
  <div class="accordion-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <div class="w-72">
          <PUAccordion
            :items="[
              { title: 'First', content: 'Basic content' },
              { title: 'Second', content: 'More content' },
            ]"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
    <CodeBlock v-if="type === 'custom-content'">
      <template #preview>
        <div class="w-72">
          <PUAccordion :items="demoItems">
            <template #content>
              <div class="p-4 bg-gray-50 rounded dark:text-primary-light-500">
                Custom content area with additional styling
              </div>
            </template>
          </PUAccordion>
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
    <CodeBlock v-if="type === 'custom-header'">
      <template #preview>
        <div class="w-72">
          <PUAccordion
            :items="demoItems"
            class="w-full"
          >
            <template #header="{ item, isOpen }">
              <h3 :class="{ 'text-[#E12B56]': isOpen, 'text-gray-800 dark:text-white': !isOpen }">
                {{ item.title }}
              </h3>
            </template>

            <template #content="{ item }">
              <p>{{ item.content }}</p>
            </template>
          </PUAccordion>
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
const demoItems = [
  { title: 'Custom', content: 'Demo content' },
  { title: 'Items', content: 'Sample data' },
]

defineProps<{
  type: 'default' | 'custom-header' | 'custom-content'
}>()
</script>
