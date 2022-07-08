<script setup lang="ts">
</script>

<template>
  <main class="w-screen h-screen">
    <h1 class="block uppercase my-8 text-center text-4xl">potaku</h1>
    <ul class="block text-center">
      <li class="overflow-hidden">
        <router-link
          to="va-quiz"
          class="text-pink-500 uppercase text-2xl font-bold relative after:content-none after:absolute after:left-0 after:bg-pink-100 after:w-full after:h-full after:-z-10 after:transition-transform after:duration-300 after:translate-x-2 after:translate-y-3.5 hover:after:translate-x-0 hover:after:translate-y-0"
        >
            Guess the voice actor
          </router-link>
      </li>
    </ul>
  </main>
</template>
