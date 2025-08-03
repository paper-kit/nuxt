<template>
  <div class="border-2 border-primary-light-500 rounded-lg p-4 h-full w-56 px-8">
    <AsideMenuItems :items="items" />
  </div>
</template>

<script lang="ts" setup>
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
    ],
  },
  {
    title: 'Layout & Structure',
    links: [
      { name: 'PUGrid', link: '/docs/components/pu-grid', new: true },
      { name: 'PUGridItem', link: '/docs/components/pu-grid-item', new: true },
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
</script>

<style>

</style>
