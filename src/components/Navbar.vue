<template>
  <nav class="flex justify-between">
    <h1 class=" text-3xl font-bold text-text-title">Extensions List</h1>
    <ul class="flex gap-3">
      <li>
        <button
          class="px-4.5 py-2.5 bg-btn-bg rounded-3xl capitalize text-text-title cursor-pointer hover:opacity-60"
          :class="`${currentFilter === 'all' && 'bg-cred-400  not-dark:text-cneutral-0 dark:text-cneutral-900'}`"
          @click="$emit('setToAll')"
        >
          All
        </button>
      </li>
      <li>
        <button
          class="px-4.5 py-2.5 bg-btn-bg rounded-3xl capitalize text-text-title cursor-pointer hover:opacity-60"
          :class="`${currentFilter === 'active' && 'bg-cred-400 not-dark:text-cneutral-0 dark:text-cneutral-900'}`"
          @click="$emit('setToActive')"
        >
          Active
        </button>
      </li>
      <li>
        <button
          class="px-4.5 py-2.5 bg-btn-bg rounded-3xl capitalize text-text-title cursor-pointer hover:opacity-60"
          :class="`${currentFilter === 'inactive' && 'bg-cred-400  not-dark:text-cneutral-0 dark:text-cneutral-900'}`"
          @click="$emit('setToInactive')"
        >
          Inactive
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({currentFilter:String})
const emits = defineEmits(['setToActive', 'setToInactive', 'setToAll'])
</script>
