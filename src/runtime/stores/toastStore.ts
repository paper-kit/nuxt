export interface Toast {
  id?: number
  severity: 'primary' | 'secondary'
  summary: string
  detail?: string
  visible?: boolean
  life?: number
}

export type Toasts = Toast[]

export const toasts = ref<Toasts>([])

export const addToast = ({ severity, summary, detail, life }: Toast) => {
  const id = Date.now()
  const toast = {
    id,
    severity,
    summary,
    detail,
    visible: true,
  } as Toast
  toasts.value.push(toast)

  setTimeout(() => {
    removeToast(id)
  }, life || 3000)
}

export const removeToast = (id: number) => {
  const index = toasts.value.findIndex((toast: Toast) => toast.id === id)
  if (index !== -1) toasts.value.splice(index, 1)
}
