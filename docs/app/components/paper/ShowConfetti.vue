<template>
  <div class="confetti-demo">
    <CodeBlock
      v-if="type === 'basic'"
      :compare="false"
    >
      <template #preview>
        <div class="relative">
          <PUButton @click="triggerConfetti">
            Trigger Confetti
          </PUButton>
          <PUConfetti
            :active="isActive"
            :width="400"
            :height="200"
            class="absolute inset-0 pointer-events-none"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'custom-colors'"
      :compare="false"
    >
      <template #preview>
        <div class="relative">
          <PUButton @click="triggerCustomConfetti">
            Custom Colors
          </PUButton>
          <PUConfetti
            :active="isActive2"
            :colors="customColors"
            :particle-count="80"
            :width="400"
            :height="200"
            class="absolute inset-0 pointer-events-none"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'long-duration'"
      :compare="false"
    >
      <template #preview>
        <div class="relative">
          <PUButton @click="triggerLongConfetti">
            Long Duration
          </PUButton>
          <PUConfetti
            :active="isActive3"
            :duration="5000"
            :particle-count="100"
            :width="400"
            :height="200"
            class="absolute inset-0 pointer-events-none"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  type: 'basic' | 'custom-colors' | 'long-duration'
}>()

const isActive = ref(false)
const isActive2 = ref(false)
const isActive3 = ref(false)

const customColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#FF8C42', '#8B5CF6']

const triggerConfetti = () => {
  isActive.value = true
  setTimeout(() => {
    isActive.value = false
  }, 100)
}

const triggerCustomConfetti = () => {
  isActive2.value = true
  setTimeout(() => {
    isActive2.value = false
  }, 100)
}

const triggerLongConfetti = () => {
  isActive3.value = true
  setTimeout(() => {
    isActive3.value = false
  }, 100)
}
</script>
