<script setup>
import { computed } from "vue";

const emits = defineEmits(["remove-item"]);

const props = defineProps({ title: String, content: String, image: String });
const model = defineModel();
const imagePath = computed(
  () => new URL("." + props.image, import.meta.url).href,
);
const alt = computed(() => `${props.title}'s logo`);
</script>

<template>
  <article
    class="border-cneutral-300 bg-component-bg flex h-full flex-col justify-between gap-11 rounded-3xl border p-4.5"
  >
    <header class="flex items-start gap-4">
      <img :src="imagePath" height="60" width="60" :alt="alt" lazy />
      <div>
        <h2 class="text-text-title mb-3 text-xl font-bold">{{ title }}</h2>
        <p class="text-sm">{{ content }}</p>
      </div>
    </header>
    <footer class="flex items-center justify-between">
      <button
        class="border-cneutral-300 hover:bg-cred-400 outline-toggle-bg cursor-pointer rounded-full border px-4 py-3 duration-300 not-dark:hover:text-white"
        @click="$emit('remove-item', title)"
      >
        Remove
      </button>
      <label
        :for="'isactive-' + title"
        class="group focus-within:border-toggle-bg relative inline-block h-5 w-9 rounded-full border-2 border-transparent"
      >
        <span class="absolute top-0 left-0 scale-0 opacity-0">Active:</span>
        <input
          class="h-0 w-0 opacity-0"
          type="checkbox"
          :name="'isactive-' + title"
          :id="'isactive-' + title"
          v-model="model"
          aria-label="toggle"
          aria-labelledby="Active"
        />
        <span
          class="bg-cneutral-200 durantion-300 group-has-checked:bg-cred-700 absolute top-0 right-0 bottom-0 left-0 cursor-pointer rounded-full duration-300 before:absolute before:top-0.5 before:left-0.5 before:h-3 before:w-3 before:rounded-full before:bg-white before:duration-300 before:content-[''] group-has-checked:before:translate-x-4"
        ></span>
      </label>
    </footer>
  </article>
</template>
