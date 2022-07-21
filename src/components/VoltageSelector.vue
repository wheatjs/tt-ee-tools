<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'

const props = defineProps<{ modelValue: string }>()
const value = useVModel(props)

const options = [
  { value: 115, label: '115' },
  { value: 200, label: '200' },
  { value: 208, label: '208' },
  { value: 230, label: '230' },
  { value: 460, label: '460' },
  { value: 575, label: '575' },
  { value: 2300, label: '2300' },
]
</script>

<template>
  <Listbox v-model="value">
    <div flex flex-row border="1 dark:dark-100" rounded h-10 relative>
      <ListboxButton flex flex-row place-items-center flex-1 place-content-center bg="dark:dark-300" divide="x-1 dark:dark-100" w-full w-28 flex-shrink-0 relative>
        <div flex flex-row place-items-center place-content-center bg="dark:dark-300" px-2 w-28>
          <i i-twemoji-high-voltage block h-4 w-4 mr-1 />
          <span>Voltage</span>
        </div>
        <div
          px-4 cursor-pointer h-full flex-1 flex place-content-center place-items-center outline="focus:none"
        >
          {{ value }}v
        </div>
        <div h-full flex place-items-center px-2>
          <i i-carbon-chevron-down w-5 h-5 block />
        </div>
      </ListboxButton>
      <ListboxOptions absolute top="38px" text-right right-9 rounded-b left-28 bg="dark:dark-300" border="1 dark:dark-100">
        <ListboxOption v-for="option in options" :key="option.value" v-slot="{ active, selected }" :value="option.value">
          <div
            py-2 font-mono px-4 cursor-pointer :class="{
              'text-blue-300 bg-blue-500/10': selected,
              'z-5 ring-1 ring-blue-400 bg-blue-500/10 rounded': active,
            }"
          >
            {{ option.label }}v
          </div>
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>
