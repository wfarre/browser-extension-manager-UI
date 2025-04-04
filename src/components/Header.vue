<template>
  <header
    class="flex justify-between mx-4 lg:mx-32 bg-component-bg p-3 md:p-4 rounded-2xl"
  >
    <img :src="logo" height="45" alt="extensions list logo" />
    <button
      @click="store.toggleDarkTheme"
      class=" bg-btn-bg p-4 rounded-2xl cursor-pointer hover:opacity-60"
    >
      <img :src="buttonImage" :alt="buttonImageAlt" />
    </button>
  </header>
</template>

<script setup>
import iconSun from "../assets/images/icon-sun.svg"
import iconMoon from "../assets/images/icon-moon.svg"
import logoLight from "../assets/images/logo-white.svg"
import logoDark from "../assets/images/logo.svg"
import { computed } from "vue"
import { useTheme } from "../store/theme"

const store = useTheme()
const buttonImage = computed(() => store.isDarkTheme ? iconSun : iconMoon )
const buttonImageAlt = computed(() => store.isDarkTheme ? "light mode": "dark mode")
const logo = computed(() => store.isDarkTheme ? logoLight : logoDark)
</script>
