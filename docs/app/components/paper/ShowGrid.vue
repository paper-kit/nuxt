<template>
  <div class="grid-demo">
    <CodeBlock v-if="type === 'basic'" :compare="false">
      <template #preview>
        <PUGrid :cols="3" gap="medium">
          <PUGridItem>
            Item 1
          </PUGridItem>
          <PUGridItem>
            Item 2
          </PUGridItem>
          <PUGridItem>
            Item 3
          </PUGridItem>
        </PUGrid>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'responsive'" :compare="false">
      <template #preview>
        <PUGrid :responsive="true" gap="large">
          <PUGridItem v-for="i in 4" :key="i">
            Item {{ i }}
          </PUGridItem>
        </PUGrid>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'span'" :compare="false">
      <template #preview>
        <PUGrid :cols="4" gap="medium">
          <PUGridItem :col-span="2">
            Large item (2 columns)
          </PUGridItem>
          <PUGridItem>
            Small item
          </PUGridItem>
          <PUGridItem>
            Small item
          </PUGridItem>
          <PUGridItem :col-span="4">
            Full width item (4 columns)
          </PUGridItem>
        </PUGrid>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'alignment'" :compare="false">
      <template #preview>
        <PUGrid :cols="3" gap="medium" alignment="center" justify="space-between">
          <PUGridItem alignment="start">
            Top aligned
          </PUGridItem>
          <PUGridItem alignment="center">
            Centered
          </PUGridItem>
          <PUGridItem alignment="end">
            Bottom aligned
          </PUGridItem>
        </PUGrid>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'complex'" :compare="false">
      <template #preview>
        <PUGrid :cols="6" :rows="4" gap="large">
          <PUGridItem :col-span="2" :row-span="2">
            Header
          </PUGridItem>
          <PUGridItem :col-span="4">
            Menu
          </PUGridItem>
          <PUGridItem>
            Sidebar
          </PUGridItem>
          <PUGridItem :col-span="3">
            Content
          </PUGridItem>
          <PUGridItem :col-span="2">
            Widget
          </PUGridItem>
          <PUGridItem :col-span="6">
            Footer
          </PUGridItem>
        </PUGrid>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'masonry'" :compare="false">
      <template #preview>
        <PUGrid cols="repeat(auto-fill, minmax(250px, 1fr))" gap="medium">
          <PUGridItem
            v-for="i in 6"
            :key="i"
            :row-span="i % 2 === 0 ? 2 : 1"
          >
            Item {{ i }}
          </PUGridItem>
        </PUGrid>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'gaps'" :compare="false">
      <template #preview>
        <div class="space-y-4">
          <PUGrid :cols="4" gap="small">
            <PUGridItem v-for="i in 4" :key="'small-' + i">
              Item {{ i }}
            </PUGridItem>
          </PUGrid>
          <PUGrid :cols="4" gap="medium">
            <PUGridItem v-for="i in 4" :key="'medium-' + i">
              Item {{ i }}
            </PUGridItem>
          </PUGrid>
          <PUGrid :cols="4" gap="large">
            <PUGridItem v-for="i in 4" :key="'large-' + i">
              Item {{ i }}
            </PUGridItem>
          </PUGrid>
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'basic' | 'responsive' | 'span' | 'alignment' | 'complex' | 'masonry' | 'gaps'
}>()
</script>

<style scoped>
.grid-demo {
  @apply space-y-8;
}
</style>
