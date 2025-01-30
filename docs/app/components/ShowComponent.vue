<template>
  <div class="border-2 border-primary-light-500 rounded-lg w-72 h-48 ">
    <div class="component-example p-4 flex justify-center items-center h-36 ">
      <slot name="component" />
    </div>
    <div class="component-name text-lg font-bold flex h-12 justify-center items-center w-full border-t-2 border-primary-light-500">
      <slot name="component-name" />
    </div>
  </div>
</template>
