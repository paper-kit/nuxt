<template>
  <div class="menu-items-container">
    <div
      v-for="list, index in items"
      :key="index"
      class="menu-section"
    >
      <div
        class="section-header"
        @click="toggleSection(list.title)"
      >
        <div class="section-title">
          {{ list.title }}
        </div>
        <div class="section-toggle">
          <div
            class="toggle-icon"
            :class="{ rotated: isSectionOpen(list.title) }"
          >
            <PUIcon
              name="chevron-down"
              size="small"
            />
          </div>
        </div>
      </div>
      <Transition
        name="accordion"
        @enter="onEnter"
        @leave="onLeave"
      >
        <div
          v-show="isSectionOpen(list.title)"
          class="section-content"
        >
          <div class="section-links">
            <div
              v-for="item in list.links"
              :key="item.name"
              class="menu-link-item group"
            >
              <a
                :href="item.link"
                class="menu-link"
              >{{ item.name }}</a>
              <PUBadge
                v-if="item.new"
                label="new"
                class="new-badge"
              />
            </div>
          </div>
        </div>
      </Transition>
      <div
        v-if="index !== items.length - 1"
        class="section-separator"
      >
        <div class="separator-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAccordion } from '../composables/useAccordion'

defineProps<{
  items: {
    title: string
    links: { name: string, link: string, new?: boolean }[]
  }[]
}>()

const { toggleSection, isSectionOpen } = useAccordion()

const onEnter = (el: Element) => {
  const target = el as HTMLElement
  target.style.height = '0px'
  target.style.height = `${target.scrollHeight}px`
}

const onLeave = (el: Element) => {
  const target = el as HTMLElement
  target.style.height = `${target.scrollHeight}px`
  target.style.height = '0px'
}
</script>

<style scoped>
.menu-items-container {
  @apply flex flex-col h-full overflow-y-auto p-6 space-y-4;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.menu-items-container::-webkit-scrollbar {
  width: 6px;
}

.menu-items-container::-webkit-scrollbar-track {
  background: transparent;
}

.menu-items-container::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.menu-items-container::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.menu-section {
  @apply space-y-2;
}

.section-header {
  @apply flex justify-between items-center cursor-pointer p-2 rounded-lg transition-all duration-200;
  background: linear-gradient(135deg, rgba(241, 245, 249, 0.5) 0%, rgba(226, 232, 240, 0.5) 100%);
}

.section-header:hover {
  background: linear-gradient(135deg, rgba(241, 245, 249, 0.8) 0%, rgba(226, 232, 240, 0.8) 100%);
  transform: translateX(2px);
}

.section-title {
  @apply font-bold text-lg text-primary-light-600 dark:text-primary-dark-400;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
  transform: rotate(-0.5deg);
  position: relative;
}


.section-toggle {
  @apply flex items-center justify-center w-6 h-6;
}

.toggle-icon {
  @apply text-primary-light-500 text-sm font-bold transition-transform duration-300;
  transform: rotate(0deg);
}

.toggle-icon.rotated {
  transform: rotate(180deg);
}

.section-content {
  @apply overflow-hidden;
  transition: height 0.3s ease;
}

.section-links {
  @apply space-y-2 ml-2 mt-2;
}

.menu-link-item {
  @apply flex justify-between items-center;
  transition: all 0.2s ease;
}

.menu-link-item:hover {
  transform: translateX(4px);
}

.menu-link {
  @apply text-sm text-primary-light-700 dark:text-primary-dark-300 transition-all duration-200;
  position: relative;
  padding: 4px 8px;
  border-radius: 6px;
  background: transparent;
  transition: all 0.2s ease;
}

.menu-link:hover {
  @apply text-primary-light-500 dark:text-primary-dark-200;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 100%);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
  transform: scale(1.02);
}

.menu-link::before {
  content: '';
  @apply absolute left-0 top-1/2 w-0 h-0.5 bg-primary-light-500 rounded-full;
  transform: translateY(-50%);
  transition: width 0.2s ease;
}

.menu-link:hover::before {
  width: 100%;
}

.new-badge {
  transform: scale(0.8) rotate(5deg);
  transition: all 0.2s ease;
}

.menu-link-item:hover .new-badge {
  transform: scale(0.9) rotate(0deg);
}

.section-separator {
  @apply py-2;
}

.separator-line {
  @apply h-px bg-gradient-to-r from-transparent via-primary-light-500/30 to-transparent;
  position: relative;
}

.separator-line::before {
  content: '';
  @apply absolute top-0 left-1/2 w-2 h-px bg-primary-light-500;
  transform: translateX(-50%);
}

.separator-line::after {
  content: '';
  @apply absolute top-0 left-1/2 w-1 h-px bg-primary-light-500;
  transform: translateX(-50%);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (prefers-color-scheme: dark) {
  .section-header {
    background: linear-gradient(135deg, rgba(51, 65, 85, 0.5) 0%, rgba(71, 85, 105, 0.5) 100%);
  }

  .section-header:hover {
    background: linear-gradient(135deg, rgba(51, 65, 85, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%);
  }

  .section-title {
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  }

  .menu-link:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.2) 100%);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.25);
  }
}
</style>
