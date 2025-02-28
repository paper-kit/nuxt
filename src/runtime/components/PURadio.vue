<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string | number | boolean;
    options?: Array<{ label: string; value: string | number | boolean }>;
    label?: string;
    value?: string | number | boolean;
    disabled?: boolean;
    flavor?: "normal" | "outlined" | "box";
    name?: string;
  }>(),
  {
    disabled: false,
    flavor: "normal",
    name: "radio-group",
    options: undefined,
    label: "",
    value: undefined,
  },
);

const emit = defineEmits(["update:modelValue"]);

const isActive = computed(() => {
  // Correção: Sempre compara modelValue com value (para uso sem options)
  return props.modelValue === props.value;
});

const updateValue = (value: string | number | boolean) => {
  if (!props.disabled && value !== undefined) {
    emit("update:modelValue", value);
  }
};

const getRadioClasses = (active: boolean) => {
  const classes = ["flex items-center gap-2 group transition-all"];

  if (props.disabled) {
    classes.push("cursor-not-allowed opacity-50");
  } else {
    classes.push("cursor-pointer");
  }

  if (["outlined", "box"].includes(props.flavor)) {
    classes.push("p-2 rounded-lg border-2");

    if (active) {
      classes.push("border-primary-light-600");
      if (props.flavor === "outlined") classes.push("font-bold");
      if (props.flavor === "box") classes.push("font-bold");
    } else {
      classes.push("border-primary-light-300 hover:border-primary-light-400");
    }
  }

  return classes;
};

const getRadioCircleClasses = (active: boolean) => {
  const classes = [
    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
  ];

  if (props.flavor === "outlined") {
    classes.push(
      active
        ? "border-primary-light-600 bg-primary-light-100"
        : "border-primary-light-300",
    );
  } else if (props.flavor === "normal") {
    classes.push(
      active
        ? "border-primary-light-600 bg-primary-light-600"
        : "border-primary-light-300 bg-white",
    );
  }

  if (props.disabled) {
    classes.push("border-primary-light-200");
    if (props.flavor === "normal") classes.push("bg-gray-100");
  }

  return classes;
};

const getDotClasses = computed(() => {
  return props.flavor === "outlined"
    ? "w-2 h-2 rounded-full bg-primary-light-600"
    : "w-2 h-2 rounded-full bg-white";
});
</script>

<template>
  <div v-if="options" class="flex gap-2 font-patrick">
    <div
      v-for="option in options"
      :key="String(option.value)"
      :class="getRadioClasses(modelValue === option.value)"
      @click="updateValue(option.value)"
    >
      <div
        v-if="flavor !== 'box'"
        class="relative shrink-0"
        :class="getRadioCircleClasses(modelValue === option.value)"
      >
        <div v-if="modelValue === option.value" :class="getDotClasses" />
      </div>
      <span
        class="text-primary-light-600 select-none"
        :class="{
          'font-bold': modelValue === option.value,
          'group-hover:opacity-80': !disabled,
        }"
      >
        {{ option.label }}
      </span>
    </div>
  </div>

  <div
    v-else
    :class="getRadioClasses(isActive)"
    @click="() => props.value !== undefined && updateValue(props.value)"
  >
    <div
      v-if="flavor !== 'box'"
      class="relative shrink-0"
      :class="getRadioCircleClasses(isActive)"
    >
      <div v-if="isActive" :class="getDotClasses" />
    </div>
    <span
      v-if="label"
      class="text-primary-light-600 select-none"
      :class="{
        'font-bold': isActive,
        'group-hover:opacity-80': !disabled,
      }"
    >
      {{ label }}
    </span>
  </div>
</template>
