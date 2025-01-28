<template>
  <div class="border-2 border-primary-light-500 rounded-lg p-4 h-full w-56 px-8">
    <AsideMenuItems :items="items" />
  </div>
</template>

<script lang="ts" setup>
// do all items for aside menu, separated by category, getting started, layout and components
import AsideMenuItems from './AsideMenuItems.vue'

interface Items {
  title: string
  links: { name: string, link: string }[]
}

const items: Items[] = [
  {
    title: 'Getting Started',
    links: [
      { name: 'Introduction', link: '/docs' },
      { name: 'Installation', link: '/docs/installation' },
      { name: 'Configuration', link: '/docs/configuration' },
      { name: 'Components', link: '/docs/components' },
    ],
  },
  {
    title: 'Components',
    links: [
      { name: 'AsideMenu', link: '/docs/components/aside-menu' },
      { name: 'AsideMenuItems', link: '/docs/components/aside-menu-items' },
      { name: 'ContentRenderer', link: '/docs/components/content-renderer' },
      { name: 'HeaderUi', link: '/docs/components/header-ui' },
      { name: 'FooterUi', link: '/docs/components/footer-ui' },
      { name: 'AsideMenuUi', link: '/docs/components/aside-menu-ui' },
      { name: 'ContentUi', link: '/docs/components/content-ui' },
    ],
  },
]
</script>

<style>

</style>
