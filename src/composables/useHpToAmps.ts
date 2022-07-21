import { MaybeRef } from '@vueuse/core'
import { fullLoadAmps } from '~/data'

export function useHpToAmps() {
  const _internalRef = ref()

  return computed({
    get: () => {
      if (_internalRef.value)
        return `${_internalRef.value}A`

      return null
    },

    set: (value) => {
      _internalRef.value = value
    },
  })
}
