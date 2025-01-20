<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-section"
    >
      <div
        class="accordion-header"
        @click="toggle(index)"
      >
        <slot
          name="header"
          :item="item"
          :is-open="isOpen(index)"
        >
          <h3 class="default-header">
            {{ item.title }}
          </h3>
        </slot>
        <PUIcon
          name="arrow-down"
          class="icon"
          :class="{ 'rotate-180': isOpen(index) }"
        />
      </div>

      <!-- Content -->
      <transition name="accordion">
        <div
          v-if="isOpen(index)"
          class="accordion-content"
        >
          <slot
            name="content"
            :item="item"
          >
            <p>{{ item.content }}</p>
          </slot>
        </div>
      </transition>

      <hr
        v-if="index !== items.length - 1"
        class="divider"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAccordion } from '../composables/useAccordion'
import PUIcon from './PUIcon.vue'

defineProps<{
  items: { title: string, content: string }[]
}>()

const { isOpen, toggleSection } = useAccordion()

const toggle = (index: number) => {
  toggleSection(index)
}
</script>

<style scoped>
.accordion {
  @apply p-4 bg-white shadow-sm;
  @apply border-2 border-primary-light-500 rounded-lg;
  @apply text-base;
}

.accordion-section {
  @apply mb-4 last:mb-0;
}

.accordion-header {
  @apply flex justify-between items-center cursor-pointer p-2 font-bold;
}

.default-header {
  @apply text-gray-800 text-lg;
}

.icon {
  @apply transform transition-transform duration-200;
}

.accordion-content {
  @apply p-2 text-gray-700 text-base;
}

.divider {
  @apply border-t border-primary-light-500/10 my-2;
}

/* Transitions */
.accordion-enter-active,
.accordion-leave-active {
  @apply transition-all duration-300;
}

.accordion-enter-from,
.accordion-leave-to {
  @apply max-h-0 opacity-0;
}

.accordion-enter-to,
.accordion-leave-from {
  @apply max-h-screen opacity-100;
}
</style>
