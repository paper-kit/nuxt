<template>
  <div class="border-2 border-primary-light-500 rounded-lg">
    <div class="flex border-b border-primary-light-500">
      <PUButton
        v-for="tab in tabs"
        :key="tab.label"
        flavor="ghost"
        class="px-4 py-2 font-medium transition-colors duration-200"
        :class="{
          'bg-primary-light-500 text-white': activeTab === tab.label,
          'bg-gray-100 text-gray-700': activeTab !== tab.label,
        }"
        @click="activeTab = tab.label"
      >
        {{ tab.label }}
      </PUButton>
    </div>
    <div class="p-6  rounded-xl shadow-lg h-auto">
      <div
        v-if="activeTab === 'Preview'"
        class="w-full h-full flex justify-center flex-wrap items-center gap-2 p-4 "
      >
        <slot name="preview" />
        <div
          v-if="compare"
          class="flex gap-4 flex-wrap justify-between mx-4 min-h-[200px] w-full lg:w-1/2"
        >
          <PUCompare
            with-dark-mode
            with-icon
          >
            <slot name="preview" />
          </PUCompare>
        </div>
      </div>
      <div v-else>
        <CodeBox
          type="vue"
          header="app.vue"
        >
          <slot name="code" />
        </CodeBox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps(
  {
    compare: {
      type: Boolean,
      default: true,
    },
  },
)
const tabs = [
  { label: 'Preview' },
  { label: 'Code' },
]
const activeTab = ref(tabs && tabs.length ? tabs[0].label : '')
</script>
