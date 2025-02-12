<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  headers: { key: string, label: string }[]
  rows: Record<string, string | number | boolean>[]
  sortable?: boolean
  filterable?: boolean
  perPage?: number
  hiddenColumns?: string[]
}>()

const emit = defineEmits(['update:hiddenColumns'])

const searchQuery = ref('')
const sortKey = ref<string | null>(null)
const sortOrder = ref<'asc' | 'desc'>('asc')
const currentPage = ref(1)

const filteredRows = computed(() => {
  if (!props.filterable || !searchQuery.value) return props.rows
  return props.rows.filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase()),
    ),
  )
})

const sortedRows = computed(() => {
  if (!props.sortable || !sortKey.value) return filteredRows.value
  return [...filteredRows.value].sort((a, b) => {
    const valA = a[sortKey.value!]
    const valB = b[sortKey.value!]

    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortOrder.value === 'asc' ? valA - valB : valB - valA
    }
    return sortOrder.value === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA))
  })
})

const paginatedRows = computed(() => {
  if (!props.perPage) return sortedRows.value
  const start = (currentPage.value - 1) * props.perPage
  return sortedRows.value.slice(start, start + props.perPage)
})

const totalPages = computed(() =>
  props.perPage ? Math.ceil(sortedRows.value.length / props.perPage) : 1,
)

const setSort = (key: string) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  }
  else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

const toggleColumn = (key: string) => {
  const hidden = new Set(props.hiddenColumns)
  if (hidden.has(key)) {
    hidden.delete(key)
  }
  else {
    hidden.add(key)
  }
  emit('update:hiddenColumns', Array.from(hidden))
}
</script>

<template>
  <div class="w-full">
    <div
      v-if="filterable"
      class="mb-3 flex justify-between"
    >
      <div class="w-48">
        <PUInput
          v-model="searchQuery"
          type="text"
          icon-left="search"
          placeholder="Pesquisar..."
          class="border p-2 rounded"
        />
      </div>
      <div class="flex gap-2">
        <label
          v-for="header in headers"
          :key="header.key"
          class="flex items-center gap-1"
        >
          <input
            type="checkbox"
            :checked="!hiddenColumns?.includes(header.key)"
            @change="toggleColumn(header.key)"
          >
          {{ header.label }}
        </label>
      </div>
    </div>

    <table class="w-full border-collapse border-2 border-primary-light-500 font-patrick">
      <thead>
        <tr class="bg-primary-light-500 text-white text-left">
          <th
            v-for="header in headers"
            v-show="!hiddenColumns?.includes(header.key)"
            :key="header.key"
            class="border p-2 border-primary-light-50 cursor-pointer"
            @click="sortable ? setSort(header.key) : null"
          >
            {{ header.label }}
            <span v-if="sortable && sortKey === header.key">
              <PUIcon
                v-if="sortOrder === 'asc'"
                class="inline-flex"
                name="chevron-up"
              />
              <PUIcon
                v-else
                class="inline-flex"
                name="chevron-down"
              />
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="shadow-lg shadow-primary-light-500/20">
        <tr
          v-for="(row, rowIndex) in paginatedRows"
          :key="rowIndex"
        >
          <td
            v-for="header in headers"
            v-show="!hiddenColumns?.includes(header.key)"
            :key="header.key"
            class="border p-2 border-primary-light-500"
          >
            <slot
              :name="`cell-${header.key}`"
              :row="row"
            >
              {{ row[header.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      v-if="perPage"
      class="flex justify-between mt-4"
    >
      <button
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        « Anterior
      </button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        Próximo »
      </button>
    </div>
  </div>
</template>
