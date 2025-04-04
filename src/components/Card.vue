<script setup>
import { computed } from 'vue';

const emits = defineEmits(['remove-item'])

const props = defineProps({title:String, content:String, image:String})
const model = defineModel()
const imagePath = computed(() => new URL("." + props.image , import.meta.url).href);
const alt = computed(() => `${props.title}'s logo`)
</script>

<template>
  <article
    class=" p-4.5 border border-cneutral-300 rounded-3xl h-full flex flex-col justify-between bg-component-bg gap-11"
  >
    <header class="flex items-start gap-4">
      <img :src="imagePath" :alt="alt" />
      <div>
        <h2 class="text-xl font-bold mb-3 text-text-title">{{ title }}</h2>
        <p>{{ content }}</p>
      </div>
    </header>
    <footer class="flex justify-between items-center">
      <button
        class="px-4 py-3 border border-cneutral-300 rounded-full hover:bg-cred-400 not-dark:hover:text-white duration-300 cursor-pointer"
        @click="$emit('remove-item', title)"
      >
        Remove
      </button>
      <label
        :for="'isactive-'+title"
        class="group relative inline-block w-9 h-5"
      >
        <input
          class="opacity-0 w-0 h-0 "
          type="checkbox"
          :name="'isactive-'+title"
          :id="'isactive-'+title"
          v-model="model"
        />
        <span
          class="absolute duration-300 bg-cneutral-200 cursor-pointer top-0 left-0 right-0 bottom-0  durantion-300 before:absolute before:content-[''] before:h-4 before:w-4 before:bg-white before:top-0.5 before:left-0.5 before:rounded-full rounded-full before:duration-300 group-has-checked:bg-cred-700 group-has-checked:before:translate-x-4 "
        ></span>
      </label>
    </footer>
  </article>
</template>
