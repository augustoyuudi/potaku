<script setup lang="ts">
import { computed } from 'vue'
import type { PageInfo } from '@/types'

const props = defineProps<{
  page: PageInfo
}>()

const emit = defineEmits<{
  (e: 'change', page: number): void
}>()

const currentPage = computed(() => {
  return props.page.currentPage
})
const nextPage = computed(() => {
  return props.page.currentPage + 1
})
const previousPage = computed(() => {
  return props.page.currentPage > 1 ? props.page.currentPage - 1 : 1
})
const lastPage = computed(() => {
  return props.page.lastPage || 1
})

function changePage(page: number) {
  emit('change', page)
}
</script>

<template>
  <ol class="flex items-end justify-center gap-3 cursor-pointer">
    <li v-if="page.currentPage > 1" class="text-purple-800 bg-amber-400 px-2 py-1">
      <button @click="changePage(previousPage)">{{ previousPage }}</button>
    </li>
    <li class="text-purple-800 bg-amber-500 px-2 py-1 rounded-sm">
      <button>{{ currentPage }}</button>
    </li>
    <li v-if="page?.hasNextPage" class="text-purple-800 bg-amber-400 px-2 py-1 rounded-sm">
      <button @click="changePage(nextPage)">{{ nextPage }}</button>
    </li>
    <li v-if="page?.lastPage" class="text-purple-800">
      <p>...</p>
    </li>
    <li v-if="page?.lastPage" class="text-purple-800 bg-amber-400 px-2 py-1 rounded-sm">
      <button @click="changePage(lastPage)">{{ lastPage }}</button>
    </li>
  </ol>
</template>