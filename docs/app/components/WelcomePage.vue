<template>
  <div class="flex h-full relative font-patrick overflow-hidden">
    <div
      class="text-5xl h-full font-bold md:py-0 py-16 md:text-7xl text-primary-light-500 text-center w-full md:w-1/2 items-center flex justify-center tracking-wider leading-loose uppercase relative z-10"
    >
      <div
        class="w-full flex items-end justify-end h-auto flex-col leading-loose"
      >
        <div class="text-4xl h-[80vh] mb-8">
          <div class=" h-1/2 mb-8">
            <NuxtImg
              src="/paper.svg"
              alt="paper with me"
              class="w-full h-full ml-10"
            />
          </div>
          <slot />
        </div>
        <div class="text-lg absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col gap-4 w-80 items-center">
          <a href="/docs/getting-started">
            <PUButton flavor="outlined">Get Started</PUButton>
          </a>
          <div class="hidden md:block">
            <NuxtImg
              src="/arrow-up.svg"
              alt="arrow-up"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="z-0 inset-0 hidden md:block w-1/2 relative">
      <div class="slides-container">
        <div class="slide-column slide-up">
          <img
            v-for="i in 7"
            :key="`pet-${i}`"
            :src="`/mobile/pet/${i}.png`"
            :alt="`Pet ${i}`"
            class="slide-image"
          >
        </div>
        <div class="slide-column slide-middle">
          <img
            v-for="i in 7"
            :key="`shoes-${i}`"
            :src="`/mobile/shoes/${i}.png`"
            :alt="`Shoes ${i}`"
            class="slide-image"
          >
        </div>
        <div class="slide-column slide-down">
          <img
            v-for="i in 9"
            :key="`home-${i}`"
            :src="`/mobile/add-spot/${i}.png`"
            :alt="`Home ${i}`"
            class="slide-image"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.slides-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 1;
}

.slide-column {
  width: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: max-content;
}

.slide-up {
  top: 0;
  left: 10%;
  opacity: 0.90;
  animation: slideUp 50s linear infinite;
}

.slide-middle {
  top: 0;
  left: 50%;
  opacity: 0.95;
  transform: translateX(-50%);
  animation: slideMiddle 100s linear infinite;
}

.slide-down {
  top: 0;
  right: 10%;
  animation: slideDown 150s linear infinite;
}

.slide-image {

  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: opacity 0.3s ease;
}

.slide-image:hover {
  opacity: 1;
}

@keyframes slideUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100vh);
  }
}

@keyframes slideMiddle {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  100% {
    transform: translateX(-50%) translateY(-100vh);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-300vh);
  }
  100% {
    transform: translateY(100vh);
  }
}

@media (max-width: 768px) {
  .slide-image {
    width: 80px;
    height: 80px;
  }

  .slide-up {
    top: -15%;
    left: 5%;
  }

  .slide-middle {
    top: -15%;
    left: 50%;
  }

  .slide-down {
    top: -15%;
    right: 5%;
  }
}
</style>
