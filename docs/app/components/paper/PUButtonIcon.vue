<template>
  <button
    :disabled="disabled"
    class="pu-button-icon font-patrick"
    :class="buttonIconClass"
  >
    <PUIcon :name="name" />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    disabled?: boolean
    flavor?: 'normal' | 'outlined' | 'ghost'
    shape?: 'rounded' | 'circle'
    size?: 'small' | 'medium' | 'large'
    customClass?: string
    name: string
  }>(),
  {
    disabled: false,
    flavor: 'normal',
    shape: 'circle',
    size: 'medium',
    customClass: '',
  },
)

const buttonIconClass: string[] = ['pu-button-icon']

const flavorClasses = {
  normal: 'pu-button-icon--normal',
  outlined: 'pu-button-icon--outlined',
  ghost: 'pu-button-icon--ghost',
}

buttonIconClass.push(
  flavorClasses[props.flavor],
  `pu-button-icon--${props.size}`,
  `pu-button-icon--${props.shape}`,
  props.disabled ? 'pu-button-icon--disabled' : '',
  props.customClass,
)
</script>

<style lang="css" scoped>
.pu-button-icon {
  @apply p-2 shadow-md transition duration-200 ease-in-out flex justify-center items-center;
}

.pu-button-icon:not(:disabled):hover {
  @apply shadow-black/50 font-bold;
}

.pu-button-icon.pu-button-icon--disabled {
  @apply opacity-50 cursor-not-allowed;
}

.pu-button-icon.pu-button-icon--normal {
  @apply bg-primary-light-500 border-2 rounded-lg  text-primary-light-50;
}

.pu-button-icon.pu-button-icon--outlined {
  @apply bg-transparent border-2 border-primary-light-500 text-primary-light-500;
}

.pu-button-icon.pu-button-icon--ghost {
  @apply bg-transparent border-2 text-primary-light-500 border-transparent;
}

.pu-button-icon.pu-button-icon--small {
  @apply text-sm;
}

.pu-button-icon.pu-button-icon--medium {
  @apply text-base;
}

.pu-button-icon.pu-button-icon--large {
  @apply text-lg;
}

.pu-button-icon.pu-button-icon--circle {
  @apply rounded-full;
}

.pu-button-icon.pu-button-icon--rounded {
  @apply rounded-lg;
}

.pu-button-icon.pu-button-icon--flat {
  @apply rounded-none;
}

.pu-button-icon.pu-button-icon--disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
