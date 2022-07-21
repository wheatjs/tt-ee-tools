<script setup lang="ts">
const props = defineProps<{ modelValue: any; placeholder?: string }>()
const value = useVModel(props)
</script>

<template>
  <div flex flex-row border="1 dark:dark-100" rounded h-10 divide="x-1 dark:dark-100">
    <div w-28 px-2 bg="dark:dark-300" flex flex-row place-items-center place-content-center space-x-2>
      <slot name="icon" />
    </div>
    <input v-model="value" :placeholder="placeholder" font-inherit type="text" bg="transparent" flex-1 outline="focus:none" px-2 ring="focus:1 blue-400" rounded-r placeholder-dark-50>
  </div>
</template>
