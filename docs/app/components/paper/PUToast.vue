<template>
  <div
    v-for="toast in toasts"
    :key="toast.id"
    class="pu-toast-container font-patrick"
    :class="positionClass"
  >
    <transition name="toast-transition">
      <div
        v-show="toast.visible"
        class="pu-toast"
        :class="toastClass(toast.severity)"
      >
        <PUIcon
          name="check"
          :custom-class="
            toast.severity === 'primary'
              ? 'text-white'
              : 'text-primary-light-500'
          "
        />
        <div class="inline-block">
          {{ toast.summary }}
        </div>
        <PUIcon
          name="clear-x"
          class="close-icon"
          @click="toast.id ? removeToast(toast.id) : null"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { toasts, removeToast } from "../stores/toastStore";

const props = withDefaults(
  defineProps<{
    position?:
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right"
      | "center";
  }>(),
  {
    position: "top-right",
  },
);

const positionClass = {
  "top-left": "pu-toast-container--top-left",
  "top-right": "pu-toast-container--top-right",
  "bottom-left": "pu-toast-container--bottom-left",
  "bottom-right": "pu-toast-container--bottom-right",
  center: "pu-toast-container--center",
}[props.position || "top-right"];

const toastClass = (severity: string) => {
  return {
    primary: "pu-toast--primary",
    secondary: "pu-toast--secondary",
  }[severity];
};
</script>

<style lang="css" scoped>
.pu-toast-container {
  @apply fixed z-50 flex flex-col items-center gap-2;
}

.pu-toast-container--top-left {
  @apply top-4 left-4;
}

.pu-toast-container--top-right {
  @apply top-4 right-4;
}

.pu-toast-container--bottom-left {
  @apply bottom-4 left-4;
}

.pu-toast-container--bottom-right {
  @apply bottom-4 right-4;
}

.pu-toast-container--center {
  @apply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}

.pu-toast {
  @apply flex items-center justify-between p-4 gap-2 rounded-lg shadow-md transition-all duration-300 ease-in-out border opacity-100 transform scale-100;
}

.pu-toast--primary {
  @apply bg-primary-light-500 text-primary-light-50 border-transparent;
}

.pu-toast--secondary {
  @apply bg-white text-primary-light-500 border-primary-light-500 border-2;
}

.pu-toast span {
  @apply flex-1 font-medium;
}

.close-icon {
  @apply cursor-pointer hover:opacity-70;
}

.toast-transition-enter-active,
.toast-transition-leave-active {
  @apply transition-all duration-300;
}

.toast-transition-enter-from {
  @apply opacity-0 transform translate-y-4;
}

.toast-transition-leave-to {
  @apply opacity-0 transform translate-y-4;
}
</style>
