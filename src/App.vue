<script setup>
import { computed, reactive, ref } from 'vue';
import Card from './components/Card.vue';
import { useFetch } from './hooks/useFetch';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';


// const isDarkMode = reactive({value:false})
const isDarkMode = ref(false)
const currentFilter = ref('all')
const {data, error} = useFetch('./data.json')

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}


const filteredExtensions = computed(() => {
  switch (currentFilter.value) {
    case "active":
      return data.value.filter(item => item.isActive)
    case "inactive":
      return data.value.filter(item => !item.isActive)
    default:
      return data.value
  }
})
</script>

<template>
  <div
    class="bg-linear-to-b from-bg-start bg-bg-end text-text-main duration-800 transition-all"
    :class="`${isDarkMode ? 'dark' : ''}`"
  >
    <div class="max-w-[1440px] mx-auto  min-h-[100vh] pt-8">
      <Header :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      <main class="mx-32 mt-16">
        <Navbar
          :currentFilter="currentFilter"
          @setToAll="()=>currentFilter = 'all'"
          @setToActive="()=>currentFilter = 'active'"
          @setToInactive="()=>currentFilter = 'inactive'"
        />
        <section class="mt-9">
          <ul class="flex flex-wrap gap-3 justify-between">
            <li
              class="w-[32.4%] flex-grow flex-shrink"
              v-for="(item, index) in filteredExtensions"
              :key="index"
            >
              <Card
                :title="item.name"
                :content="item.description"
                :image="item.logo"
                v-model="item.isActive"
                @remove-item="(title) => data = data.filter(item => item.name !== title)"
              />
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
