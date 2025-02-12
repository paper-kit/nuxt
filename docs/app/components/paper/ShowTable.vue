<template>
  <div class="table-demo">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUTable
          :headers="[
            { key: 'name', label: 'Name' },
            { key: 'age', label: 'Age' },
            { key: 'email', label: 'Email' },
          ]"
          :rows="[
            { name: 'John Doe', age: 28, email: 'john@example.com' },
            { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
          ]"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'sorting'">
      <template #preview> 
        <PUTable
          :headers="[
            { key: 'name', label: 'Name' },
            { key: 'age', label: 'Age' },
            { key: 'email', label: 'Email' },
          ]"
          :rows="[
            { name: 'John Doe', age: 28, email: 'john@example.com' },
            { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
          ]"
          sortable
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'filtering'">
      <template #preview>
        <PUTable
          :headers="[
            { key: 'name', label: 'Name' },
            { key: 'age', label: 'Age' },
            { key: 'email', label: 'Email' },
          ]"
          :rows="[
            { name: 'John Doe', age: 28, email: 'john@example.com' },
            { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
          ]"
          filterable
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'pagination'">
      <template #preview>
        <PUTable
          :headers="[
            { key: 'name', label: 'Name' },
            { key: 'age', label: 'Age' },
            { key: 'email', label: 'Email' },
          ]"
          :rows="[
            { name: 'John Doe', age: 28, email: 'john@example.com' },
            { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
          ]"
          :per-page="1"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'default' | 'sorting' | 'filtering' | 'pagination'
}>()
</script>
