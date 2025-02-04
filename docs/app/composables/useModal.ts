import { useState } from 'nuxt/app'

export const useModal = () => {
  const isVisible = useState<boolean>('modalVisible', () => false)

  const show = () => {
    isVisible.value = true
  }

  const hide = () => {
    isVisible.value = false
  }

  return { isVisible, show, hide }
}
