<script setup lang="ts">
import { convertHpToAmps } from '~/utils'
import { fullLoadAmpsVoltageIndex } from '~/data'

const phase = ref<1 | 3>(3)
const voltage = ref('460')
const hp = ref()
const amps = ref(0)

watch([hp, voltage], () => {
  if (hp.value) {
    const calculatedAmps = convertHpToAmps(hp.value)

    if (calculatedAmps) {
      const calculatedVoltageIndex = fullLoadAmpsVoltageIndex.indexOf(parseInt(voltage.value))
      const actualAmps = calculatedAmps[calculatedVoltageIndex]

      if (actualAmps)
        amps.value = actualAmps
    }
  }
})
</script>

<template>
  <Surface space-y-4>
    <div font-medium mb="-2">
      Power Options
    </div>
    <PhaseSelector v-model="phase" />
    <VoltageSelector v-model="voltage" />
    <Textfield v-model="hp" placeholder="Optional">
      <template #icon>
        <div i-tabler-engine />
        <span>HP</span>
      </template>
    </Textfield>
    <Textfield v-model="amps">
      <template #icon>
        <div i-mdi-current-ac />
        <span>AMPs</span>
      </template>
    </Textfield>
    <div flex flex-row divide="x-1 dark-100">
      <div flex-1 flex flex-col items-center>
        <span text-2xl>{{ phase }}#8</span>
        <span text-sm text="light-900/50">Conductors</span>
      </div>
      <div flex-1 flex flex-col items-center>
        <span text-2xl>#12G</span>
        <span text-sm text="light-900/50">Ground</span>
      </div>
    </div>
  </Surface>
</template>
