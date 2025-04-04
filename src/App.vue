<script setup>
import { computed, reactive, ref } from "vue";
import Card from "./components/Card.vue";
import { useFetch } from "./hooks/useFetch";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import { useTheme } from "./store/theme";
import { useRoute } from "vue-router";

const route = useRoute();
const { data, error } = useFetch("./data.json");
const themeStore = useTheme();

const filteredExtensions = computed(() => {
  switch (route.path) {
    case "/active":
      return data.value?.filter((item) => item.isActive);
    case "/inactive":
      return data.value?.filter((item) => !item.isActive);
    default:
      return data.value;
  }
});
</script>

<template>
  <div
    class="from-bg-start bg-bg-end text-text-main bg-linear-to-b transition-all duration-800"
    :class="`${themeStore.isDarkTheme ? 'dark' : ''}`"
  >
    <div class="mx-auto min-h-[100vh] max-w-[1440px] pt-8">
      <Header />
      <main class="mx-4 mt-9 md:mt-16 lg:mx-32">
        <Navbar />
        <section class="mt-9 pb-12">
          <p v-if="error">{{ error }}</p>
          <ul v-if="data" class="relative flex flex-wrap justify-between gap-3">
            <TransitionGroup>
              <li
                class="relative flex-shrink flex-grow md:w-[32.4%]"
                v-for="(item, index) in filteredExtensions"
                :key="item.name"
              >
                <Card
                  :title="item.name"
                  :content="item.description"
                  :image="item.logo"
                  v-model="item.isActive"
                  @remove-item="
                    (title) =>
                      (data = data.filter((item) => item.name !== title))
                  "
                />
              </li>
            </TransitionGroup>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-leave-active,
.v-enter-from {
  position: absolute;
}

.v-enter-from,
.v-leave-to {
  transform: scale(0);
}

.v-move {
  transition: transform 0.3s ease;
}
</style>
