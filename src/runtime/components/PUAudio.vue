<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

defineProps<{ src: string }>()

const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(1)
const isMuted = ref(false)

const togglePlay = () => {
  if (!audioRef.value) return
  if (audioRef.value.paused) {
    audioRef.value.play()
    isPlaying.value = true
  }
  else {
    audioRef.value.pause()
    isPlaying.value = false
  }
}

const updateTime = () => {
  if (!audioRef.value) return
  currentTime.value = audioRef.value.currentTime
  duration.value = audioRef.value.duration
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

const seek = (event: Event) => {
  if (!audioRef.value) return
  const input = event.target as HTMLInputElement
  audioRef.value.currentTime = Number.parseFloat(input.value)
}

const adjustVolume = (event: Event) => {
  if (!audioRef.value) return
  const input = event.target as HTMLInputElement
  volume.value = Number.parseFloat(input.value)
  audioRef.value.volume = volume.value
}

const toggleMute = () => {
  if (!audioRef.value) return
  isMuted.value = !isMuted.value
  audioRef.value.muted = isMuted.value
}

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.addEventListener('timeupdate', updateTime)
    audioRef.value.addEventListener('loadedmetadata', updateTime)
  }
})

watch(isMuted, (newVal) => {
  if (audioRef.value) audioRef.value.muted = newVal
})
</script>

<template>
  <div class="relative w-full max-w-lg border-2 border-primary-light-500 dark:border-white rounded-lg shadow-lg p-4 flex items-center gap-3 bg-white dark:bg-primary-light-500">
    <audio
      ref="audioRef"
      :src="src"
    />

    <!-- Play/Pause -->
    <button @click="togglePlay">
      <PUIcon
        :name="isPlaying ? 'pause' : 'play'"
        class="w-8 h-8 text-primary-light-500 dark:text-white"
      />
    </button>

    <input
      type="range"
      class="flex-1 accent-primary-light-500 dark:accent-white"
      min="0"
      :max="duration"
      :value="currentTime"
      @input="seek"
    >

    <span class="text-md font-bold text-primary-light-600 dark:text-gray-50 font-patrick">
      {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
    </span>

    <button @click="toggleMute">
      <PUIcon
        :name="isMuted ? 'volume-mute' : 'volume'"
        class="w-6 h-6 text-primary-light-500 dark:text-white"
      />
    </button>
    <input
      type="range"
      class="w-16 accent-primary-light-500 dark:accent-white"
      min="0"
      max="1"
      step="0.1"
      :value="volume"
      @input="adjustVolume"
    >
  </div>
</template>

<style scoped>
button {
  @apply transition-transform transform hover:scale-110;
}
input[type="range"] {
  @apply cursor-pointer;
}
</style>
