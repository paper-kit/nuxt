<template>
  <div class="flex flex-col w-full">
    <div
      v-if="header"
      class="w-full h-10 border-2 border-primary-light-500 rounded-t-lg flex items-center justify-between px-4 gap-2"
    >
      <div class="flex gap-2 items-center">
        <button
          tabindex="-1"
          class=" py-1.5 focus:outline-none text-gray-700 text-sm rounded-md flex items-center gap-1.5 hover:bg-gray-50"
        >
          <svg
            v-if="type == 'vue'"
            data-v-1b310ddc=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          ><path
            fill="#41b883"
            d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"
          /><path
            fill="#41b883"
            d="m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"
          /><path
            fill="#35495e"
            d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"
          /></svg>
          <svg
            v-if="type == 'npm'"
            data-v-1b310ddc=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="#cb3837"
              d="M2 10.555h28v9.335H16v1.556H9.778v-1.557H2Zm1.556 7.779h3.111v-4.668h1.555v4.667h1.556v-6.222H3.556Zm7.778-6.223v7.779h3.111v-1.556h3.111v-6.223Zm3.111 1.556H16v3.112h-1.556Zm4.667-1.556v6.223h3.111v-4.668h1.556v4.667h1.556v-4.667h1.556v4.667h1.556v-6.222Z"
            />
          </svg>
          <svg
            v-if="type == 'cmd'"
            data-v-1b310ddc=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m6.75 7.5l3 2.25l-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25"
            />
          </svg>
          <svg
            v-if="type == 'nuxt'"
            data-v-1b310ddc=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          ><path
            fill="#00DC82"
            d="M17.708 25h10.409c.33 0 .655-.088.942-.254a1.9 1.9 0 0 0 .689-.696a1.91 1.91 0 0 0 0-1.9L22.756 9.936a1.87 1.87 0 0 0-3.261 0l-1.788 3.125l-3.494-6.111a1.871 1.871 0 0 0-3.262 0l-8.7 15.2a1.91 1.91 0 0 0 .69 2.595c.286.167.61.255.941.255h6.534c2.589 0 4.498-1.147 5.811-3.385l3.19-5.572l1.708-2.982l5.127 8.957h-6.835zm-7.398-2.985l-4.56-.001l6.836-11.942l3.41 5.97l-2.283 3.992c-.873 1.452-1.864 1.981-3.403 1.981"
          /></svg>

          <span>{{ header }}</span>
        </button>
      </div>
    </div>
    <div class="w-full flex flex-col p-4 border-2 border-t-0 border-primary-light-500 shadow-lg shadow-primary-light-500/20 bg-[#1c1c1c] text-sm rounded-b-lg">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  header?: string
  type?: 'npm' | 'vue' | 'cmd' | 'nuxt'
  copy?: string
}>()
</script>
