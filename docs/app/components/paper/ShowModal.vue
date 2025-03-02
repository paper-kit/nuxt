<template>
  <div class="modal-demo">
    <CodeBlock
      v-if="type === 'default'"
      :compare="false"
    >
      <template #preview>
        <PUButton @click="show">
          show
        </PUButton>
        <PUModal>
          <template #header>
            <h2 class="text-xl font-bold">
              Demo Modal
            </h2>
          </template>

          <template #content>
            <p>Modal content preview with interactive demo</p>
          </template>

          <template #footer>
            <PUButton @click="hide">
              Close Preview
            </PUButton>
          </template>
        </PUModal>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
    <CodeBlock
      v-else
      :compare="false"
    >
      <template #preview>
        <PUButton @click="show">
          show
        </PUButton>
        <PUModal v-if="isVisible">
          <template #header>
            <h2 class="text-2xl">
              Custom Header
            </h2>
          </template>

          <template #content>
            <div class="custom-content">
              <PUIcon name="info" />
              <p>Custom modal content here</p>
            </div>
          </template>

          <template #footer>
            <div class="flex gap-2">
              <PUButton @click="hide">
                Confirm
              </PUButton>
              <PUButton
                flavor="ghost"
                @click="hide"
              >
                Cancel
              </PUButton>
            </div>
          </template>
        </PUModal>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'default' | 'custom'
}>()

const { show, hide, isVisible } = useModal()
</script>
