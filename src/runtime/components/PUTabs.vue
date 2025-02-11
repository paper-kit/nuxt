<template>
  <div class="tabs relative font-patrick">
    <!-- Tabs Navigation -->
    <div class="tabs-nav relative">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        ref="tabRefs"
        class="tab-item"
        :class="{ 'active-tab': isActive(index) }"
        @click="setActiveTab(index)"
      >
        <slot
          name="tab"
          :tab="tab"
          :is-active="isActive(index)"
        >
          <div class="default-tab">
            <PUIcon :name="tab.icon || ''" />
            <span>{{ tab.label }}</span>
          </div>
        </slot>
      </div>
      <div
        class="absolute bottom-0 h-[2px] bg-primary-light-500 transition-all duration-300"
        :style="{ left: `${activeTabLeft}px`, width: `${activeTabWidth}px` }"
      />
    </div>

    <div class="tabs-content-container relative overflow-hidden">
      <div
        class="tabs-content"
        :style="{ transform: `translateX(-${activeTab * 100}%)` }"
      >
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab-panel"
        >
          <slot
            name="content"
            :tab="tab"
          >
            <p>{{ tab.content }}</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUpdated } from 'vue'

defineProps<{
  tabs: { label: string, content: string, icon?: string }[]
}>()

const tabRefs = ref<HTMLDivElement[]>([])
const activeTabLeft = ref(0)
const activeTabWidth = ref(0)
const activeTab = ref(0)

const isActive = (index: number) => activeTab.value === index

const setActiveTab = (index: number) => {
  activeTab.value = index
}

const updateIndicatorPosition = () => {
  const currentTab = tabRefs.value[activeTab.value]
  if (currentTab) {
    const { offsetLeft, offsetWidth } = currentTab
    activeTabLeft.value = offsetLeft
    activeTabWidth.value = offsetWidth
  }
}

watch(activeTab, () => nextTick(updateIndicatorPosition))
onMounted(() => nextTick(updateIndicatorPosition))
onUpdated(() => nextTick(updateIndicatorPosition))
</script>

<style scoped>
.tabs {
  @apply w-full border-b border-gray-300 ;
}

.tabs-nav {
  @apply flex gap-4 pb-2 relative;
}

.tab-item {
  @apply flex items-center gap-2 cursor-pointer p-2 text-gray-500;
  @apply transition-all duration-300;
}

.tab-item.active-tab {
  @apply text-primary-light-500 font-semibold;
}

.default-tab {
  @apply flex items-center gap-2;
}

.tab-icon {
  @apply w-5 h-5;
}

.tabs-content-container {
  @apply relative overflow-hidden w-full;
}

.tabs-content {
  @apply flex transition-transform duration-300 ease-in-out;
}

.tab-panel {
  @apply w-full flex-shrink-0;
}
</style>
