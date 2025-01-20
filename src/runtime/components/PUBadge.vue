<template>
  <div class="pu-badge">
    <div :class="badgeClass" class="pu-badge--default">
      <span>{{ label }}</span>
      <PUIcon
        v-if="icon"
        :name="icon"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string
  icon?: string
  severity?: 'primary' | 'secondary' | 'ghost'
}>()

const severityColors = {
  primary: 'border-primary-light-500 bg-primary-light-500 text-primary-dark-50',
  secondary: 'border-primary-light-200 bg-primary-light-200 text-primary-light-500',
  ghost: 'bg-transparent text-primary-light-500',
}

const badgeClass = severityColors[props.severity || 'primary']
</script>

<style scoped>
.pu-badge--default {
  @apply w-fit text-xs p-1 rounded-lg flex justify-between gap-2 items-center border-2 ;
}
</style>
