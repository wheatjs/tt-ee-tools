<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'

const props = defineProps<{ modelValue: 1 | 3 }>()
const value = useVModel(props)

const options = [
  { value: 1, label: 'Single' },
  { value: 3, label: 'Three' },
]
</script>

<template>
  <RadioGroup v-model="value" flex flex-row border="1 dark:dark-100" rounded h-10 divide="x-1 dark:dark-100">
    <div flex flex-row place-items-center place-content-center bg="dark:dark-300" px-2 w-28>
      <i i-fad-phase block h-7 w-7 />
      <span>Insulation</span>
    </div>
    <RadioGroupOption v-for="option in options" v-slot="{ checked, active }" :key="option.value" as="template" :value="option.value">
      <div
        px-4 text-center cursor-pointer h-full flex-1 flex place-content-center place-items-center outline="focus:none"
        :class="{ 'text-blue-300 bg-blue-500/10': checked, 'z-5 ring-1 ring-blue-400 rounded': active }"
      >
        {{ option.label }}
      </div>
    </RadioGroupOption>
  </RadioGroup>
</template>
