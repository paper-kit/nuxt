<template>
  <button
    :disabled="disabled"
    class="pu-button font-patrick"
    :class="[buttonClass, disabled ? 'pu-button--disabled' : '']"
  >
    <PUIcon
      v-if="iconLeft"
      :name="iconLeft"
      :custom-class="
        flavor == 'outlined' || flavor == 'ghost'
          ? 'text-primary-light-500'
          : 'text-white'
      "
    />
    <slot />
    <PUIcon
      v-if="iconRight"
      :name="iconRight"
      :custom-class="
        flavor == 'outlined' || flavor == 'ghost'
          ? 'text-primary-light-500'
          : 'text-white'
      "
    />
  </button>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    flavor?: "normal" | "outlined" | "ghost";
    shape?: "rounded" | "circle";
    size?: "small" | "medium" | "large";
    customClass?: string;
    iconLeft?: string;
    iconRight?: string;
  }>(),
  {
    disabled: false,
    flavor: "normal",
    shape: "rounded",
    size: "medium",
    customClass: "",
  },
);

const buttonClass = ref<string[]>(["pu-button"]);

const flavorClasses = ref({
  normal: "pu-button--normal",
  outlined: "pu-button--outlined",
  ghost: "pu-button--ghost",
});

buttonClass.value.push(
  flavorClasses.value[props.flavor],
  `pu-button--${props.size}`,
  `pu-button--${props.shape}`,
  props.customClass,
);
</script>

<style lang="css" scoped>
.pu-button {
  @apply py-2 shadow-md transition duration-200 ease-in-out flex justify-center items-center gap-1;
}

.pu-button:not(:disabled):hover {
  @apply shadow-primary-light-500/50 font-bold;
}

.pu-button.pu-button--disabled {
  @apply opacity-50 cursor-not-allowed;
}

.pu-button.pu-button--normal {
  @apply bg-primary-light-500 rounded-lg  text-primary-light-50;
}

.pu-button.pu-button--outlined {
  @apply bg-transparent border-2 border-primary-light-500 text-primary-light-500;
}

.pu-button.pu-button--ghost {
  @apply bg-transparent text-primary-light-500 border-transparent shadow-none;
}

.pu-button.pu-button--small {
  @apply px-2 py-1;
}

.pu-button.pu-button--medium {
  @apply px-4 py-2;
}

.pu-button.pu-button--large {
  @apply px-6 py-3;
}

.pu-button.pu-button--circle {
  @apply rounded-full;
}

.pu-button.pu-button--rounded {
  @apply rounded-lg;
}

.pu-button.pu-button--flat {
  @apply rounded-none;
}

.pu-button.pu-button--disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
