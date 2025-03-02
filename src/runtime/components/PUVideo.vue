<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

defineProps<{ src: string; poster?: string }>();

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const volume = ref(1);
const isMuted = ref(false);
const isFullscreen = ref(false);

const togglePlay = () => {
  if (!videoRef.value) return;
  if (videoRef.value.paused) {
    videoRef.value.play();
    isPlaying.value = true;
  } else {
    videoRef.value.pause();
    isPlaying.value = false;
  }
};

const updateTime = () => {
  if (!videoRef.value) return;
  currentTime.value = videoRef.value.currentTime;
  duration.value = videoRef.value.duration;
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const seek = (event: Event) => {
  if (!videoRef.value) return;
  const input = event.target as HTMLInputElement;
  videoRef.value.currentTime = Number.parseFloat(input.value);
};

const adjustVolume = (event: Event) => {
  if (!videoRef.value) return;
  const input = event.target as HTMLInputElement;
  volume.value = Number.parseFloat(input.value);
  videoRef.value.volume = volume.value;
};

const toggleMute = () => {
  if (!videoRef.value) return;
  isMuted.value = !isMuted.value;
  videoRef.value.muted = isMuted.value;
};

const toggleFullscreen = () => {
  if (!videoRef.value) return;
  if (!isFullscreen.value) {
    videoRef.value.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
  isFullscreen.value = !isFullscreen.value;
};

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.addEventListener("timeupdate", updateTime);
    videoRef.value.addEventListener("loadedmetadata", updateTime);
  }
});

watch(isMuted, (newVal) => {
  if (videoRef.value) videoRef.value.muted = newVal;
});
</script>

<template>
  <div
    class="relative w-full max-w-xl border-2 border-primary-light-500 rounded-lg shadow-lg overflow-hidden"
  >
    <video
      ref="videoRef"
      :src="src"
      :poster="poster"
      class="w-full aspect-video bg-white"
    />

    <div
      class="absolute -bottom-1 -left-1 w-[calc(100%+.5rem)] bg-white border-2 border-primary-light-500 rounded-b-lg text-primary-light-500 p-2 flex items-center gap-3"
    >
      <button @click="togglePlay">
        <PUIcon :name="isPlaying ? 'pause' : 'play'" class="w-6 h-6" />
      </button>

      <input
        type="range"
        class="flex-1 accent-primary-light-500"
        min="0"
        :max="duration"
        :value="currentTime"
        @input="seek"
      />

      <span class="text-sm font-bold font-patrick"
        >{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span
      >

      <button @click="toggleMute">
        <PUIcon :name="isMuted ? 'volume-mute' : 'volume'" class="w-5 h-5" />
      </button>
      <input
        type="range"
        class="w-16 accent-primary-light-500"
        min="0"
        max="1"
        step="0.1"
        :value="volume"
        @input="adjustVolume"
      />

      <button @click="toggleFullscreen">
        <PUIcon name="focus" class="w-5 h-5" />
      </button>
    </div>
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
