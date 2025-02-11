<template>
  <div class="screen h-screen flex justify-center items-center relative overflow-y-auto p-20">
    <div>
      <div class="space-y-8 w-96">
        <PUDatePicker
          v-model="date2"
          locale="en-US"
          always-open
        />

        <PUDatePicker
          v-model="date2"
          locale="en-US"
        />

        <PUDatePicker
          v-model="date2"
          :disabled-dates="disabledDates"
          locale="pt-BR"
        />

        <PUDatePicker
          v-model="date2"
          :disabled-range="disabledRange"
          locale="pt-BR"
        />
      </div>
      {{ date2 }}
    </div>
    <div class="w-48 flex flex-col gap-8 h-full">
      <PUButton
        flavor="outlined"
        shape="rounded"
        @click="openToast"
      >
        Open Toast
      </PUButton>
      <div class="btn-icons flex gap-2">
        <PUButtonIcon
          name="arrow-down"
          flavor="outlined"
        />
        <PUButtonIcon
          name="info"
          flavor="ghost"
        />
      </div>
      <PUSelect
        :options="options"
        :model-value="selectedValue"
        placeholder="Select an option"
        size="large"
        :example-option="{ value: 1, label: 'Example Item' }"
        @update:model-value="handleModelValueUpdate"
      />

      <PUTooltip :positions="['top']">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias fugit
        molestiae eos, voluptatem sit quos illo
      </PUTooltip>
      <div class="">
        <PULabel id="test">
          teste
        </PULabel>
        <PUInput
          id="test"
          v-model="value"
          placeholder="Search"
          icon-left="search"
        />
      </div>
      <div class="">
        <PULabel id="test2">
          teste
        </PULabel>
        <PUTextArea
          id="test2"
          v-model="value"
          placeholder="Search"
          icon-left="search"
        />
        <div class="tags flex gap-2">
          <PUTag label="Tag 1" />
          <PUTag
            label="Tag 2"
            icon="close"
          />
          <PUTag label="Tag 3" />
        </div>
        <div class="badges flex gap-2 my-4">
          <PUBadge
            label="Badge 1"
            severity="secondary"
          />
          <PUBadge
            label="Badge 2"
            icon="close"
          />
          <PUBadge
            label="Badge 3"
            severity="ghost"
          />
        </div>
        <div class="w-72 my-8">
          <PUAccordion :items="accordionItems">
            <template #header="{ item, isOpen }">
              <h3 :class="{ 'text-[#E12B56]': isOpen, 'text-gray-800': !isOpen }">
                {{ item.title }}
              </h3>
            </template>

            <template #content="{ item }">
              <p>{{ item.content }}</p>
            </template>
          </PUAccordion>
        </div>
        <div class="w-72">
          <PUTabs :tabs="tabs">
            <template #tab="{ tab, isActive }">
              <div
                :class="{ 'text-black': isActive, 'text-gray-500': !isActive }"
                class="flex items-center gap-2"
              >
                <span>{{ tab.label }}</span>
              </div>
            </template>
            <template #content="{ tab }">
              <p class="my-4">
                {{ tab.content }}
              </p>
            </template>
          </PUTabs>
        </div>
      </div>
      <button
        class="open-modal-button absolute top-8 left-8"
        @click="showModal"
      >
        Open Modal {{ isVisible }}
      </button>
      <div class="flex flex-col gap-2">
        <PUCheckbox v-model="checked" />
        <PUSwitch
          v-model="checked"
          label="Ativar recurso"
          width="mid"
        />
        <PURadio
          v-model="checked"
          :options="[
            { label: 'Opção 1', value: true },
            { label: 'Opção 2', value: false },
          ]"
          flavor="outlined"
        />
        <PURadio
          v-model="checked"
          :options="[
            { label: 'Opção 1', value: true },
            { label: 'Opção 2', value: false },
          ]"
          flavor="normal"
        />

        <PURadio
          v-model="checked"
          :options="[
            { label: 'Opção 1', value: true },
            { label: 'Opção 2', value: false },
          ]"
          flavor="box"
        />
      </div>
    </div>

    <br>
    <PUModal />
    <PUToast
      ref="toast"
      position="top-right"
    />
  </div>
</template>

<script setup lang="ts">
const { add } = useToast()

const options = ref([
  { value: 1, label: 'Example Item' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
])

const value = ref<string | number | null>('')

const checked = ref<boolean>(false)

const { show, isVisible } = useModal()

const showModal = () => {
  show()
}

const accordionItems = [
  {
    title: 'Accordion 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Accordion 2',
    content: 'Incidunt a voluptatum reiciendis soluta est unde consectetur!',
  },
  {
    title: 'Accordion 3',
    content: 'Explicabo, odio molestias! Quaerat, ipsa fugit quasi atque.',
  },
]

const date2 = ref('2025-02-10')
const disabledDates = ref([
  new Date(2025, 1, 14).toISOString().split('T')[0],
  new Date(2025, 1, 21).toISOString().split('T')[0],
])
const disabledRange = ref({
  start: new Date(2025, 1, 10).toISOString().split('T')[0],
  end: new Date(2025, 1, 15).toISOString().split('T')[0],
})

const tabs = [
  {
    label: 'Tab 1',
    content: 'Content for Tab 1',
  },
  {
    label: 'Tab 2',
    content: 'Content for Tab 2',
  },
  {
    label: 'Tab 3',
    content: 'Content for Tab 3',
  },
]

const selectedValue = ref<string | number | null>(null)

const handleModelValueUpdate = (value: string | number | null) => {
  selectedValue.value = value
}

const openToast = () => {
  add({
    severity: 'secondary',
    summary: 'Success',
    detail: 'Action completed successfully!',
    life: 30000,
  })
}
</script>
