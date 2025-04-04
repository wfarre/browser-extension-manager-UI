<script setup>
import { computed, reactive, ref } from 'vue';
import Card from './components/Card.vue';
import { useFetch } from './hooks/useFetch';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import { useTheme } from './store/theme';
import { useRoute } from 'vue-router';

const route = useRoute()
const {data, error} = useFetch('./data.json')
const themeStore = useTheme()

const filteredExtensions = computed(() => {
  switch (route.path) {
    case "/active":
      return data.value?.filter(item => item.isActive)
    case "/inactive":
      return data.value?.filter(item => !item.isActive)
    default:
      return data.value
  }
})
</script>

<template>
  <div
    class="bg-linear-to-b from-bg-start bg-bg-end text-text-main duration-800 transition-all"
    :class="`${themeStore.isDarkTheme ? 'dark' : ''}`"
  >
    <div class="max-w-[1440px] mx-auto  min-h-[100vh] pt-8">
      <Header />
      <main class="mx-32 mt-16">
        <Navbar />
        <section class="mt-9">
          <ul class="relative flex flex-wrap gap-3 justify-between">
            <TransitionGroup>
              <li
                class="w-[32.4%] flex-grow flex-shrink relative"
                v-for="(item, index) in filteredExtensions"
                :key="item.name"
              >
                <Card
                  :title="item.name"
                  :content="item.description"
                  :image="item.logo"
                  v-model="item.isActive"
                  @remove-item="(title) => data = data.filter(item => item.name !== title)"
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

.v-leave-active, .v-enter-from{
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
