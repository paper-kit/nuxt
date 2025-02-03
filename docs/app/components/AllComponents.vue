<template>
  <div class="flex gap-4 flex-wrap mx-4">
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
            name="arrow-down"
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
            icon-left="search"
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
                :class="{ 'text-black': isActive, 'text-gray-500': !isActive }"
                class="flex items-center gap-2"
              >
                <span>{{ tab.label }}</span>
              </div>
            </template>

            <!-- Content Customization -->
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
            flavor="box"
          />
        </div>
      </template>
      <template #component-name>
        <a href="/docs/components/pu-radio">PURadio</a>
      </template>
    </ShowComponent>
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

const value = ref<string | number | null>(null)

const { show } = useModal()

const showModal = () => {
  show()
}

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

const openToast = () => {
  add({
    severity: 'secondary',
    summary: 'Success',
    detail: 'Action completed successfully!',
    life: 30000,
  })
}
</script>
