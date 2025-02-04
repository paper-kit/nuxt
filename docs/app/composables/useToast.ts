// useToast.ts
import { addToast } from '../stores/toastStore'
import type { Toast } from '../stores/toastStore'

export const useToast = () => {
  const add = (options: Toast) => {
    addToast(options)
  }

  return { add }
}
