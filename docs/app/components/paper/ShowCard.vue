<template>
  <div class="card-demo">
    <CodeBlock
      v-if="type === 'simple'"
      :compare="false"
    >
      <template #preview>
        <PUCard
          variant="simple"
          size="medium"
        >
          <h3 class="text-lg font-bold mb-2">
            Simple Card
          </h3>
          <p class="text-sm text-gray-600">
            This is a simple card with basic content.
          </p>
        </PUCard>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'image'"
      :compare="false"
    >
      <template #preview>
        <PUCard
          variant="image"
          size="medium"
          image="/avatar.svg"
          image-alt="Avatar"
        >
          <h3 class="text-lg font-bold mb-2">
            Card with Image
          </h3>
          <p class="text-sm text-gray-600">
            This card includes an image at the top.
          </p>
        </PUCard>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'actions'"
      :compare="false"
    >
      <template #preview>
        <PUCard
          variant="actions"
          size="medium"
        >
          <h3 class="text-lg font-bold mb-2">
            Card with Actions
          </h3>
          <p class="text-sm text-gray-600">
            This card includes action buttons.
          </p>
          <template #actions>
            <PUButton
              size="small"
              flavor="outlined"
            >
              Cancel
            </PUButton>
            <PUButton size="small">
              Save
            </PUButton>
          </template>
        </PUCard>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'sizes'"
      :compare="false"
    >
      <template #preview>
        <div class="space-y-4">
          <PUCard
            variant="simple"
            size="small"
          >
            <h3 class="text-md font-bold mb-1">
              Small Card
            </h3>
            <p class="text-xs text-gray-600">
              Small size card.
            </p>
          </PUCard>
          <PUCard
            variant="simple"
            size="medium"
          >
            <h3 class="text-lg font-bold mb-2">
              Medium Card
            </h3>
            <p class="text-sm text-gray-600">
              Medium size card.
            </p>
          </PUCard>
          <PUCard
            variant="simple"
            size="large"
          >
            <h3 class="text-xl font-bold mb-2">
              Large Card
            </h3>
            <p class="text-base text-gray-600">
              Large size card.
            </p>
          </PUCard>
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: 'simple' | 'image' | 'actions' | 'sizes'
}>()
</script>
