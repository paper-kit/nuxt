<template>
  <div>
    <div class="nav-wrapper flex justify-between px-4">
      <div class="w-full flex justify-center">
        <a
          href="/"
          class="brand-logo flex"
        ><img
          src="/logo.png"
          width="80"
          alt=""
        ><div class="text-2xl mt-5">Paper Ui</div></a>
      </div>

      <ul
        id="nav-mobile"
        class="right hide-on-med-and-down flex gap-4 mt-4"
      >
        <li><a href="/docs"><PUButton flavor="outlined">Docs</PUButton></a></li>
        <li><a href="https://github.com/paper-kit/nuxt"><PUButton flavor="outlined">Github</PUButton></a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
