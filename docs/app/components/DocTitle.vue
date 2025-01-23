<template>
  <div class="flex flex-col gap-2 my-4">
    <div class="title text-4xl text-center font-patrick">
      <slot name="title" />
    </div>
    <div class="subtitle text-xl text-center ">
      <slot name="subtitle" />
    </div>
  </div>
</template>
