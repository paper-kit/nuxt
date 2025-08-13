import { ref } from 'vue'

export const useAccordion = () => {
  const openSections = ref<Set<string>>(new Set(['Introduction']))

  const toggleSection = (sectionTitle: string) => {
    if (openSections.value.has(sectionTitle)) {
      openSections.value.delete(sectionTitle)
    }
    else {
      openSections.value.add(sectionTitle)
    }
  }

  const isSectionOpen = (sectionTitle: string) => {
    return openSections.value.has(sectionTitle)
  }

  const openAllSections = () => {
    openSections.value = new Set(['Introduction', 'Layout & Structure', 'Form Controls', 'Actions & Feedback', 'Data Display', 'Media & Content', 'Navigation & Search', 'Examples'])
  }

  const closeAllSections = () => {
    openSections.value.clear()
  }

  return {
    openSections,
    toggleSection,
    isSectionOpen,
    openAllSections,
    closeAllSections,
  }
}

