<template>
  <nav
    class="flex flex-col md:flex-row justify-between flex-wrap gap-6 items-center"
  >
    <h1 class=" text-3xl font-bold text-text-title">Extensions List</h1>
    <ul class="flex gap-3">
      <li>
        <RouterLink
          to="/"
          class="px-4.5 py-2.5 bg-btn-bg rounded-3xl capitalize text-text-title cursor-pointer hover:opacity-60"
          activeClass="bg-cred-400  not-dark:text-cneutral-0 dark:text-cneutral-900"
        >
          All
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/active"
          class="px-4.5 py-2.5 bg-btn-bg rounded-3xl capitalize text-text-title cursor-pointer hover:opacity-60"
          activeClass="bg-cred-400  not-dark:text-cneutral-0 dark:text-cneutral-900"
        >
          Active
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/inactive"
          class="px-4.5 py-2.5 bg-btn-bg rounded-3xl capitalize text-text-title cursor-pointer hover:opacity-60"
          activeClass="bg-cred-400  not-dark:text-cneutral-0 dark:text-cneutral-900"
        >
          Inactive
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
