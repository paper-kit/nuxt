<template>
  <div class="checkbox-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUCheckbox v-model="demoChecked" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'with-label'">
      <template #preview>
        <PUCheckbox v-model="labelChecked" label="Sample Label" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'strike'">
      <template #preview>
        <PUCheckbox
          v-model="strikeChecked"
          label="Strike Example"
          strike-on-false
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'flavors'">
      <template #preview>
        <div class="flex flex-col gap-2">
          <PUCheckbox v-model="normalChecked" label="Normal" />
          <PUCheckbox
            v-model="outlinedChecked"
            label="Outlined"
            flavor="outlined"
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
defineProps<{
  type: "default" | "with-label" | "strike" | "flavors";
}>();

const demoChecked = ref(false);
const labelChecked = ref(true);
const strikeChecked = ref(false);
const normalChecked = ref(true);
const outlinedChecked = ref(false);
</script>
