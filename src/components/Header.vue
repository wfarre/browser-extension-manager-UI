<template>
  <header
    class="bg-component-bg mx-4 flex items-center justify-between rounded-2xl p-3 md:p-4 lg:mx-32"
  >
    <img
      :src="logo"
      class="h-10 w-auto"
      height="40"
      width="200"
      alt="extensions list logo"
    />
    <button
      aria-label="toggle-btn"
      @click="store.toggleDarkTheme"
      class="bg-btn-bg outline-toggle-bg cursor-pointer rounded-2xl p-4 hover:opacity-60"
    >
      <img :src="buttonImage" :alt="buttonImageAlt" />
    </button>
  </header>
</template>

<script setup>
import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";
import logoLight from "../assets/images/logo-white.svg";
import logoDark from "../assets/images/logo.svg";
import { computed } from "vue";
import { useTheme } from "../store/theme";

const store = useTheme();
const buttonImage = computed(() => (store.isDarkTheme ? iconSun : iconMoon));
const buttonImageAlt = computed(() =>
  store.isDarkTheme ? "light mode" : "dark mode",
);
const logo = computed(() => (store.isDarkTheme ? logoLight : logoDark));
</script>
