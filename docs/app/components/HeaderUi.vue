<template>
  <div class="w-full">
    <div class="nav-wrapper flex justify-between px-4 w-full">
      <div class="flex justify-center items-center gap-2 mt-5">
        <img
          src="/logo.svg"
          width="32"
          alt="Paper UI Logo"
        >
        <NuxtLink
          to="/"
          class="brand-logo flex"
        >
          <div class="text-2xl font-patrick">Paper Ui</div>
        </NuxtLink>
        <PUBadge
          label="v2.0"
          size="large"
          severity="ghost"
        />
      </div>

      <ul
        id="nav-mobile"
        class="right hide-on-med-and-down flex gap-4 mt-4"
      >
        <li>
          <NuxtLink to="/docs">
            <PUButton
              flavor="outlined"
              icon-right="file-alt"
            >
              docs
            </PUButton>
          </NuxtLink>
        </li>
        <li>
          <a href="https://github.com/paper-kit/nuxt" target="_blank" rel="noopener noreferrer">
            <PUButton
              flavor="outlined"
              icon-right="github-alt"
            >
              github
            </PUButton>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>

<style scoped>
/* Component styles here if needed */
</style>
