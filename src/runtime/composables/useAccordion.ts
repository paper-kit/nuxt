export const useAccordion = () => {
  const openSections = ref<Set<number>>(new Set())

  const toggleSection = (index: number) => {
    if (openSections.value.has(index)) {
      openSections.value.delete(index)
    }
    else {
      openSections.value.add(index)
    }
  }

  const isOpen = (index: number) => openSections.value.has(index)

  return {
    openSections,
    toggleSection,
    isOpen,
  }
}
