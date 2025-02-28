<template>
  <div class="textarea-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUTextArea v-model="demoValue" placeholder="Enter text..." />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'disabled'">
      <template #preview>
        <PUTextArea
          v-model="disabledValue"
          placeholder="Disabled textarea"
          disabled
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'with-label'">
      <template #preview>
        <div class="flex flex-col gap-1">
          <PULabel id="demoLabel"> Description </PULabel>
          <PUTextArea
            id="demoLabel"
            v-model="labelValue"
            placeholder="Enter description..."
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps<{
  type: "default" | "disabled" | "with-label";
}>();

const demoValue = ref("");
const disabledValue = ref("");
const labelValue = ref("");
</script>
