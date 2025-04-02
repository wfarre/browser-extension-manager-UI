<template>
  <header class="flex justify-between mx-32 bg-component-bg p-4 rounded-2xl">
    <img src="../assets/images/logo.svg" height="45" alt="extensions" />
    <button
      @click="$emit('toggle-dark-mode')"
      class=" bg-btn-bg p-4 rounded-2xl cursor-pointer hover:opacity-60"
    >
      <img :src="buttonImage" :alt="buttonImageAlt" />
    </button>
  </header>
</template>

<script setup>
import iconSun from "../assets/images/icon-sun.svg"
import iconMoon from "../assets/images/icon-moon.svg"
import { computed } from "vue"

const props = defineProps({
    isDarkMode: {value: Boolean}
})


const buttonImage = computed(() => {
  return props.isDarkMode.value ? iconSun : iconMoon })
const buttonImageAlt = computed(() => props.isDarkMode.value ? "light mode": "dark mode")
</script>
