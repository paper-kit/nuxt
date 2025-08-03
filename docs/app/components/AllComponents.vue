<template>
  <div class="flex gap-4 flex-wrap mx-4">
    <ShowComponent is-new>
      <template #component>
        <div class="w-64 h-32">
          <PUGrid
            :cols="2"
            gap="small"
          >
            <PUGridItem>
              <div class="p-2 text-center text-xs bg-blue-50 dark:bg-blue-900/20 rounded">
                Item 1
              </div>
            </PUGridItem>
            <PUGridItem>
              <div class="p-2 text-center text-xs bg-green-50 dark:bg-green-900/20 rounded">
                Item 2
              </div>
            </PUGridItem>
            <PUGridItem>
              <div class="p-2 text-center text-xs bg-yellow-50 dark:bg-yellow-900/20 rounded">
                Item 3
              </div>
            </PUGridItem>
            <PUGridItem>
              <div class="p-2 text-center text-xs bg-purple-50 dark:bg-purple-900/20 rounded">
                Item 4
              </div>
            </PUGridItem>
          </PUGrid>
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-grid">PUGrid</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64">
          <PUCard
            variant="simple"
            size="small"
          >
            <h3 class="text-md font-bold mb-1">
              Card
            </h3>
            <p class="text-xs text-gray-600">
              Hand-drawn style
            </p>
          </PUCard>
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-card">PUCard</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64">
          <PUDivider
            text="Section"
            style="dashed"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-divider">PUDivider</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64">
          <PULoading
            type="circular"
            size="medium"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-loading">PULoading</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64">
          <PUSlider
            v-model="sliderValue"
            :min="0"
            :max="100"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-slider">PUSlider</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64">
          <PURating v-model="ratingValue" />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-rating">PURating</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64">
          <PUCounter v-model="counterValue" />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-counter">PUCounter</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64">
          <PUDropdown
            v-model="dropdownValue"
            :options="dropdownOptions"
            placeholder="Select..."
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-dropdown">PUDropdown</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64">
          <PUCopyToClipboard value="Copy this text" />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-copy">PUCopyToClipboard</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64">
          <PUSearch placeholder="Search..." />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-search">PUSearch</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="w-64 h-32 relative">
          <PUConfetti
            :active="true"
            :width="256"
            :height="128"
            class="absolute inset-0"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-confetti">PUConfetti</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="flex w-48 relative">
          <div class="flex gap-4 flex-wrap mx-4 w-full h-24">
            <PUCompare with-dark-mode>
              <PUButton
                flavor="normal"
                shape="rounded"
              >
                Click me!
              </PUButton>
            </PUCompare>
          </div>
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-compare">PUCompare</a>
      </template>
    </ShowComponent>

    <ShowComponent is-new>
      <template #component>
        <div class="flex w-48 relative">
          <PUVideo
            src=""
            poster=""
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-audio">PUAudio</a>
      </template>
    </ShowComponent>
    <ShowComponent is-new>
      <template #component>
        <div class="flex w-48 relative">
          <PUVideo
            src=""
            poster=""
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-video">PUVideo</a>
      </template>
    </ShowComponent>
    <ShowComponent is-new>
      <template #component>
        <div class="flex w-72 relative">
          <PUDatePicker
            v-model="date2"
            locale="en-US"
            class="absolute"
            disabled
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-datepicker">PUDatePicker</a>
      </template>
    </ShowComponent>
    <ShowComponent is-new>
      <template #component>
        <div class="w-56">
          <PUProgress
            :progress="63"
            mode="horizontal"
            size="medium"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-progress">PUProgress</a>
      </template>
    </ShowComponent>
    <ShowComponent is-new>
      <template #component>
        <div class="flex gap-2">
          <PUAvatar
            src="/avatar.svg"
            size="small"
          />
          <PUAvatar
            src="/avatar.svg"
            size="medium"
          />
          <PUAvatar
            src="/avatar.svg"
            size="large"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-avatar">PUAvatar</a>
      </template>
    </ShowComponent>
    <ShowComponent is-new>
      <template #component>
        <div class="flex gap-2">
          <PUTable
            :headers="[
              { key: 'name', label: 'Name' },
              { key: 'age', label: 'Age' },
            ]"
            :rows="[
              { name: 'John Doe', age: 28 },
            ]"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-table">PUtable</a>
      </template>
    </ShowComponent>
    <PUModal />
    <PUToast
      ref="toast"
      position="top-right"
    />
    <ShowComponent>
      <template #component>
        <PUButton flavor="outlined">
          Click me!
        </PUButton>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-button">PUButton</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <PUSelect
          :options="options"
          :model-value="selectedValue"
          placeholder="Select an option"
          size="large"
          :example-option="{ value: 1, label: 'Example Item' }"
          @update:model-value="handleModelValueUpdate"
        />
      </template>
      <template #component-name>
        <a href="/docs/components/pu-select">PUSelect</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <div class="flex">
          <PUButtonIcon
            name="chevron-down"
            flavor="outlined"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-button-icon">PUButtonIcon</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <div class="">
          <PULabel id="test">
            teste
          </PULabel>
          <PUInput
            id="test"
            v-model="value"
            placeholder="Search"
            icon-left="search-plus"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-input">PUInput</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <div class="">
          <PULabel id="test2">
            teste
          </PULabel>
          <PUTextArea
            id="test2"
            v-model="value"
            placeholder="Type"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-textarea">PUTextArea</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <div class="tags flex gap-2">
          <PUTag label="Tag 1" />
          <PUTag
            label="Tag 2"
            icon="close"
          />
          <PUTag label="Tag 3" />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-tag">PUTag</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <div class="tags flex gap-2">
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
      </template>
      <template #component-name>
        <a href="/docs/components/pu-badge">PUBadge</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <div class="w-72">
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
      </template>
      <template #component-name>
        <a href="/docs/components/pu-accordion">PUAccordion</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <div class="w-72">
          <PUTabs :tabs="tabs">
            <template #tab="{ tab, isActive }">
              <div
                :class="{ 'text-primary-light-500': isActive, 'text-gray-500': !isActive }"
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
      </template>
      <template #component-name>
        <a href="/docs/components/pu-tabs">PUTabs</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <PUButton
          flavor="normal"
          shape="rounded"
          @click="openToast"
        >
          Open Toast
        </PUButton>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-toast">PUToast</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <PUButton
          flavor="normal"
          shape="rounded"
          @click="showModal()"
        >
          Open Modal
        </PUButton>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-modal">PUModal</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <PUTooltip :positions="['bottom-right']">
          Hello World!
        </PUTooltip>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-tooltip">PUTooltip</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <div class="flex gap-2 items-center">
          <PUCheckbox v-model="checked" />
          <PUCheckbox
            v-model="checked"
            flavor="outlined"
            label="checked"
            strike-on-false
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-checkbox">PUCheckbox</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <PUSwitch
          v-model="checked"
          label="Switch?"
          width="mid"
        />
      </template>
      <template #component-name>
        <a href="/docs/components/pu-switch">PUSwitch</a>
      </template>
    </ShowComponent>
    <ShowComponent>
      <template #component>
        <div class="flex">
          <PURadio
            v-model="checked"
            :options="[
              { label: 'True', value: true },
              { label: 'False', value: false },
            ]"
            flavor="normal"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-radio">PURadio</a>
      </template>
    </ShowComponent>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { add } = useToast()

const options = ref([
  { value: 1, label: 'Example Item' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
])

const value = ref<string | number | null>(null)

const { show } = useModal()

const showModal = () => {
  show()
}

const date2 = ref('2025-02-10')

const accordionItems = [
  {
    title: 'Accordion 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

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

const checked = ref<boolean>(false)

const sliderValue = ref(50)
const ratingValue = ref(3)
const counterValue = ref(5)
const dropdownValue = ref('')
const dropdownOptions = ref([
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
])

const openToast = () => {
  add({
    severity: 'secondary',
    summary: 'Success',
    detail: 'Action completed successfully!',
    life: 30000,
  })
}
</script>
