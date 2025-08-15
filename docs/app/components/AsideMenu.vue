<template>
  <div class="aside-menu-container">
    <div class="aside-menu-content">
      <div class="menu-header">
        <div class="menu-title">
          Menu
        </div>
        <div class="menu-controls">
          <button
            class="expand-all-btn"
            :title="isAllExpanded ? 'Colapsar tudo' : 'Expandir tudo'"
            @click="toggleAllSections"
          >
            {{ isAllExpanded ? '⊖' : '⊕' }}
          </button>
        </div>
      </div>
      <AsideMenuItems :items="items" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAccordion } from '../composables/useAccordion'
import AsideMenuItems from './AsideMenuItems.vue'

interface Items {
  title: string
  links: { name: string, link: string, new?: boolean }[]
}

const items: Items[] = [
  {
    title: 'Introduction',
    links: [
      { name: 'Getting Started', link: '/docs/getting-started' },
      { name: 'All Components', link: '/docs' },
      { name: 'Icons', link: '/docs/icons' },
      { name: 'Changelog v2.0', link: '/docs/v2', new: true },
    ],
  },
  {
    title: 'Layout & Structure',
    links: [
      { name: 'PUGrid', link: '/docs/components/pu-grid', new: true },
      { name: 'PUCard', link: '/docs/components/pu-card', new: true },
      { name: 'PUDivider', link: '/docs/components/pu-divider', new: true },
      { name: 'PUTabs', link: '/docs/components/pu-tabs' },
      { name: 'PUAccordion', link: '/docs/components/pu-accordion' },
      { name: 'PUModal', link: '/docs/components/pu-modal' },
    ],
  },
  {
    title: 'Form Controls',
    links: [
      { name: 'PUInput', link: '/docs/components/pu-input' },
      { name: 'PUTextArea', link: '/docs/components/pu-textarea' },
      { name: 'PUCheckbox', link: '/docs/components/pu-checkbox' },
      { name: 'PURadio', link: '/docs/components/pu-radio' },
      { name: 'PUSwitch', link: '/docs/components/pu-switch' },
      { name: 'PUSelect', link: '/docs/components/pu-select' },
      { name: 'PUDropdown', link: '/docs/components/pu-dropdown', new: true },
      { name: 'PUSlider', link: '/docs/components/pu-slider', new: true },
      { name: 'PURating', link: '/docs/components/pu-rating', new: true },
      { name: 'PUDatePicker', link: '/docs/components/pu-datepicker', new: true },
      { name: 'PUCounter', link: '/docs/components/pu-counter', new: true },
    ],
  },
  {
    title: 'Actions & Feedback',
    links: [
      { name: 'PUButton', link: '/docs/components/pu-button' },
      { name: 'PUButtonIcon', link: '/docs/components/pu-button-icon' },
      { name: 'PUCopyToClipboard', link: '/docs/components/pu-copy', new: true },
      { name: 'PUConfetti', link: '/docs/components/pu-confetti', new: true },
      { name: 'PUToast', link: '/docs/components/pu-toast' },
      { name: 'PULoading', link: '/docs/components/pu-loading', new: true },
      { name: 'PUProgress', link: '/docs/components/pu-progress', new: true },
    ],
  },
  {
    title: 'Data Display',
    links: [
      { name: 'PUTable', link: '/docs/components/pu-table', new: true },
      { name: 'PUBadge', link: '/docs/components/pu-badge' },
      { name: 'PUTag', link: '/docs/components/pu-tag' },
      { name: 'PUAvatar', link: '/docs/components/pu-avatar', new: true },
      { name: 'PUCompare', link: '/docs/components/pu-compare', new: true },
    ],
  },
  {
    title: 'Media & Content',
    links: [
      { name: 'PUAudio', link: '/docs/components/pu-audio', new: true },
      { name: 'PUvideo', link: '/docs/components/pu-video', new: true },
    ],
  },
  {
    title: 'Navigation & Search',
    links: [
      { name: 'PUSearch', link: '/docs/components/pu-search', new: true },
      { name: 'PUTooltip', link: '/docs/components/pu-tooltip' },
    ],
  },
]

const { openSections, openAllSections, closeAllSections } = useAccordion()

const isAllExpanded = computed(() => {
  return openSections.value.size === items.length
})

const toggleAllSections = () => {
  if (isAllExpanded.value) {
    closeAllSections()
  }
  else {
    openAllSections()
  }
}
</script>

<style scoped>
.aside-menu-container {
  @apply relative w-72 h-full;
}

.aside-menu-content {
  @apply relative h-full bg-white dark:bg-primary-light-800 rounded-2xl border-2 border-primary-light-500 shadow-lg;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: rotate(-0.5deg);
  transition: all 0.3s ease;
  margin: 8px;
}

.aside-menu-content:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.15),
    0 6px 20px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.menu-header {
  @apply relative p-6 pb-4 border-b-2 border-primary-light-500/20 flex justify-between items-center;
  border-radius: 14px 14px 0 0;
}

.menu-title {
  @apply text-2xl font-bold text-primary-light-600 dark:text-primary-dark-400;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8);
  transform: rotate(-1deg);
}

.menu-controls {
  @apply flex items-center;
}

.expand-all-btn {
  @apply w-8 h-8 rounded-full bg-primary-light-500 text-white text-lg font-bold flex items-center justify-center transition-all duration-200;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  transform: rotate(0deg);
}

.expand-all-btn:hover {
  @apply bg-primary-light-600;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  transform: scale(1.1) rotate(5deg);
}

@media (prefers-color-scheme: dark) {
  .aside-menu-content {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 4px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .menu-title {
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  }
}
</style>
