import { defineStore } from "pinia";
import { ref } from "vue";

export const useTheme = defineStore("theme", () => {
  const isDarkTheme = ref(false);

  const toggleDarkTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
  };
  return {
    isDarkTheme,
    toggleDarkTheme,
  };
});
