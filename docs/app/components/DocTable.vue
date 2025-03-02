<template>
  <div class="overflow-x-auto">
    <table
      class="min-w-full divide-y divide-gray-200 border-2 border-primary-light-500 rounded-lg"
    >
      <thead class="bg-gray-50 rounded-lg border-2 border-primary-light-500">
        <tr>
          <th
            v-for="(header, index) in cleanedHeaders"
            :key="index"
            class="px-4 py-2 text-left text-xs text-primary-light-500 font-bold uppercase tracking-wider"
          >
            {{ cleanText(header) }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-primary-light-500">
        <tr v-for="(row, rowIndex) in cleanedRows" :key="rowIndex">
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="px-4 py-2 whitespace-nowrap text-sm text-primary-light-500"
          >
            {{ cleanText(cell) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  headers: string[];
  rows: Array<Array<string | number>>;
}>();

const cleanedHeaders = computed(() =>
  Array.isArray(props.headers) ? props.headers : [],
);
const cleanedRows = computed(() =>
  Array.isArray(props.rows) ? props.rows.map((row) => row.map(cleanText)) : [],
);

const cleanText = (text: string | number): string => {
  if (typeof text !== "string") return String(text);
  return text.normalize("NFC").replace(/\s+/g, " ").trim();
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
th,
td {
  padding: 8px;
  @apply border-2 border-primary-light-500;
}
th {
  background-color: #f9f9f9;
  text-align: left;
}
</style>
