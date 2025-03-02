import { ref } from "vue";

export const useTabs = () => {
  const activeTab = ref(0);

  const setActiveTab = (index: number) => {
    activeTab.value = index;
  };

  const isActive = (index: number) => activeTab.value === index;

  return {
    activeTab,
    setActiveTab,
    isActive,
  };
};
