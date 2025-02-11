<template>
  <transition name="fade-modal">
    <div
      v-if="isVisible"
      class="modal-overlay"
      @click="closeOnBackdrop"
    >
      <div
        class="modal-container"
        @click.stop
      >
        <slot name="header">
          <h3 class="modal-title">
            Default Title
          </h3>
        </slot>
        <slot name="content">
          <p class="modal-content">
            Default content goes here...
          </p>
        </slot>
        <slot name="footer">
          <button
            class="modal-button"
            @click="close"
          >
            Close
          </button>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useModal } from '../composables/useModal'

const { isVisible, hide } = useModal()

const close = () => {
  hide()
}

const closeOnBackdrop = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    close()
  }
}
</script>

<style scoped>
*{
  font-family: 'Patrick Hand', cursive;
}

.modal-overlay {
  @apply fixed inset-0 flex items-center justify-center bg-white/75 z-50 bg-blend-color-burn;
}

.modal-container {
  @apply bg-white rounded-xl p-6 shadow-lg w-full max-w-md relative border-2 border-primary-light-500;
}

.modal-title {
  @apply font-bold text-xl mb-4;
}

.modal-content {
  @apply text-gray-700 mb-6;
}

.modal-button {
  @apply bg-primary-light-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700;
}

.fade-modal-enter-active,
.fade-modal-leave-active {
  @apply transition-opacity duration-300;
}

.fade-modal-enter-from,
.fade-modal-leave-to {
  @apply opacity-0;
}
</style>
