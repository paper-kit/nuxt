<template>
  <div class="relative font-patrick">
    <div class="relative min-w-full">
      <input
        v-if="!alwaysOpen"
        type="text"
        :value="formattedDate"
        readonly
        class="datepicker-input w-full border-2 border-black rounded-lg pl-10 py-2"
        @focus="isOpen = true"
      >
      <PUIcon
        v-if="!alwaysOpen"
        name="calender"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-black cursor-pointer"
        @click="isOpen = true"
      />
    </div>
    <PUTooltip
      v-if="isOpen || alwaysOpen"
      :positions="alwaysOpen ? [] : ['top-left']"
      class="datepicker-container w-full p-4 "
    >
      <div class="datepicker-header min-w-full">
        <button @click="prevMonth">
          <PUIcon name="chevron-left" />
        </button>
        <span>{{ monthNames[locale][currentMonth] }} {{ currentYear }}</span>
        <button @click="nextMonth">
          <PUIcon name="chevron-right" />
        </button>
      </div>
      <div class="datepicker-weekdays ">
        <span
          v-for="day in weekDays[locale]"
          :key="day"
          class=""
        >{{ day }}</span>
      </div>
      <div class="datepicker-days">
        <span
          v-for="n in startOffset"
          :key="'empty-' + n"
          class="empty bg-primary-light-50"
        />
        <button
          v-for="day in daysInMonth"
          :key="day"
          :class="{ selected: isSelected(day), disabled: isDisabled(day) }"
          class="hover:bg-primary-light-100"
          @click="selectDate(day)"
        >
          {{ day }}
        </button>
      </div>
    </PUTooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type Locale = 'en-US' | 'pt-BR'

const props = defineProps<{
  modelValue: string | null
  alwaysOpen?: boolean
  locale?: Locale
  disabledDates?: string[]
  disabledRange?: { start: string, end: string }
}>()
const emit = defineEmits(['update:modelValue'])

const locale = computed(() => props.locale || 'en-US')
const isOpen = ref(false)
const today = new Date()
const currentMonth = ref(props.modelValue ? new Date(props.modelValue).getMonth() : today.getMonth())
const currentYear = ref(props.modelValue ? new Date(props.modelValue).getFullYear() : today.getFullYear())

const monthNames = {
  'en-US': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  'pt-BR': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
}

const weekDays = {
  'en-US': ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'],
  'pt-BR': ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
}

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

const startOffset = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay()
})

const formattedDate = computed(() => {
  if (!props.modelValue) return ''

  const [year, month, day] = props.modelValue.split('-')

  const date = new Date(Number(year), Number(month) - 1, Number(day))

  return `${date.getDate()} ${monthNames[locale.value][date.getMonth()]} ${date.getFullYear()}`
})

const isSelected = (day: number) => {
  if (!props.modelValue) return false

  const [year, month, dayOfMonth] = props.modelValue.split('-')

  const date = new Date(Number(year), Number(month) - 1, Number(dayOfMonth))

  return (
    date.getDate() === day
    && date.getMonth() === currentMonth.value
    && date.getFullYear() === currentYear.value
  )
}

const isDisabled = (day: number) => {
  const dateStr = `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  if (props.disabledDates?.includes(dateStr)) return true
  if (props.disabledRange) {
    const date = new Date(`${currentYear.value}-${currentMonth.value + 1}-${day}`)
    const start = new Date(props.disabledRange.start)
    const end = new Date(props.disabledRange.end)
    return date >= start && date <= end
  }
  return false
}

const selectDate = (day: number) => {
  console.log('selectDate', day)
  if (isDisabled(day)) return

  const selectedDate = new Date(currentYear.value, currentMonth.value, day)

  const formatted = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`

  emit('update:modelValue', formatted)

  if (!props.alwaysOpen) isOpen.value = false

  console.log('formatted', formatted)
}

const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  }
  else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  }
  else {
    currentMonth.value++
  }
}
</script>

<style scoped>
.datepicker-header {
  @apply flex justify-between items-center font-bold mb-2;
}

.datepicker-weekdays,
.datepicker-days {
  @apply grid grid-cols-7 text-center gap-1;
}

.datepicker-days button {
  @apply p-1 cursor-pointer rounded-sm;
}

.datepicker-days button.selected {
  @apply bg-black text-white;
}

.datepicker-days button.disabled {
  @apply text-gray-400 cursor-not-allowed;
}

.datepicker-input {
  @apply w-full rounded-md cursor-pointer;
}
</style>
