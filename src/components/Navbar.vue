<template>
  <nav
    class="flex flex-col flex-wrap items-center justify-between gap-6 md:flex-row"
  >
    <h1 class="text-text-title font-main text-3xl font-bold">
      Extensions List
    </h1>
    <ul class="flex gap-3">
      <li>
        <RouterLink
          to="/"
          class="bg-btn-bg text-text-title outline-toggle-bg cursor-pointer rounded-3xl px-4.5 py-2.5 capitalize hover:opacity-60"
          activeClass="dark:bg-cred-400 not-dark:bg-cred-700  not-dark:text-white dark:text-cneutral-900"
        >
          All
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/active"
          class="bg-btn-bg text-text-title outline-toggle-bg cursor-pointer rounded-3xl px-4.5 py-2.5 capitalize hover:opacity-60"
          activeClass="dark:bg-cred-400 not-dark:bg-cred-700  not-dark:text-cneutral-0 dark:text-cneutral-900"
        >
          Active
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/inactive"
          class="bg-btn-bg text-text-title outline-toggle-bg cursor-pointer rounded-3xl px-4.5 py-2.5 capitalize hover:opacity-60"
          activeClass="dark:bg-cred-400 not-dark:bg-cred-700  not-dark:text-cneutral-0 dark:text-cneutral-900"
        >
          Inactive
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
