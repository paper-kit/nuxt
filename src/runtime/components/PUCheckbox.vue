<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    disabled?: boolean;
    label?: string;
    flavor?: "normal" | "outlined";
    strikeOnFalse?: boolean;
  }>(),
  {
    disabled: false,
    label: "",
    flavor: "normal",
    strikeOnFalse: false,
  },
);

const emit = defineEmits(["update:modelValue", "checked", "unchecked"]);

const toggleState = () => {
  if (props.disabled) return;
  if (props.modelValue) {
    emit("unchecked");
  } else {
    emit("checked");
  }
  emit("update:modelValue", !props.modelValue);
};

const currentState = computed(() => {
  return props.modelValue
    ? { icon: "check", style: "bg-primary-light-500 text-white" }
    : { icon: "", style: "border-primary-light-500" };
});

const checkboxStyle = computed(() => {
  if (props.flavor === "outlined") {
    return "bg-transparent border-primary-light-500";
  }
  return props.disabled
    ? "bg-primary-light-100 border-primary-light-300 text-primary-light-400"
    : currentState.value.style;
});
</script>

<template>
  <div class="inline-flex font-patrick">
    <div
      v-if="label"
      class="flex items-center gap-2 group"
      :class="{ 'cursor-pointer': !disabled, 'cursor-not-allowed': disabled }"
      @click="toggleState"
    >
      <div
        class="flex items-center justify-center w-5 h-5 border-2 border-primary-light-500 rounded transition-all"
        :class="[
          checkboxStyle,
          {
            'active:animate-bounce': !disabled,
            'border-primary-light-300': disabled,
          },
        ]"
      >
        <PUIcon v-if="currentState.icon" :name="currentState.icon" />
      </div>
      <span
        class="transition-opacity text-primary-light-500 select-none"
        :class="{
          'text-primary-light-400': disabled,
          'line-through': strikeOnFalse && !modelValue,
          'group-hover:opacity-80': !disabled,
          'font-bold': modelValue,
        }"
      >
        {{ label }}
      </span>
    </div>
    <div
      v-else
      class="flex items-center justify-center w-5 h-5 border-2 border-primary-light-500 rounded transition-all"
      :class="[
        checkboxStyle,
        {
          'cursor-pointer active:animate-bounce': !disabled,
          'cursor-not-allowed': disabled,
          'border-primary-light-300': disabled,
        },
      ]"
      @click="toggleState"
    >
      <PUIcon
        v-if="currentState.icon"
        :name="currentState.icon"
        class="text-sm"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.active\:animate-bounce:active {
  animation: bounce 0.3s ease-in-out;
}
</style>
