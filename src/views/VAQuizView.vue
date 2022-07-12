<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { queryMediaById, queryPaginatedMedia } from '@/api/MediaQueries'
import fisherYatesShuffle from '@/utils/fisherYatesShuffle'
import type { Character, Media, PageInfo } from '@/types'

onMounted(() => {
  window.addEventListener('keydown', shortcutListener)
})

onUnmounted(() => {
  window.removeEventListener('keydown', shortcutListener)
})

const animeSearch = ref()
const animeName = ref()
const animes: Ref<Media[]> = ref([])
const hasSelectedAnime: Ref<boolean> = ref(false)
const currentPage: Ref<PageInfo | undefined> = ref()
const characters: Ref<Character[]> = ref([])
const character: Ref<number> = ref(-1)
const voiceActors: Ref<number[]> = ref([])
const selectedVA: Ref<number> = ref(-1)
const hasSubmittedVA: Ref<boolean> = ref(false)

function shortcutListener(e: KeyboardEvent) {
  if (e.metaKey && e.key === 'k') {
    animeSearch.value.focus()
  }
}

async function searchAnime() {
  const variables = {
    search: animeName.value,
    page: 1,
    perPage: 10,
    type: 'ANIME',
  }
  const { data: { Page: { media, pageInfo } } } = await queryPaginatedMedia(variables)

  animes.value = media
  currentPage.value = pageInfo
  hasSelectedAnime.value = false
  characters.value = []
  character.value = -1
  voiceActors.value = []
  selectedVA.value = -1
  hasSubmittedVA.value = false
}

async function searchAnimeById(id: number) {
  const variables = {
    id,
    type: 'ANIME',
  }

  const { data: { Media: { characters: { edges } } } } = await queryMediaById(variables)
  characters.value = edges
  hasSelectedAnime.value = true
  randomize()
}

function randomize() {
  character.value = Math.floor(Math.random() * (10 - 0) + 0)
  const vas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  vas.splice(character.value, 1)
  const tempArr = fisherYatesShuffle(vas)
  const slicedArr = [...tempArr.slice(0, 4), character.value]
  voiceActors.value = fisherYatesShuffle(slicedArr)
}

function selectVA(voiceActor: number) {
  selectedVA.value = voiceActor
  hasSubmittedVA.value = false
}

function validateVa() {
  hasSubmittedVA.value = true
}

function validateSelectedVA(va: number) {
  if (va !== selectedVA.value) {
    return ''
  }

  if (!hasSubmittedVA.value) {
    return 'border-6 border-indigo-800'
  }

  if (character.value === selectedVA.value) {
    return 'border-6 border-green-600'
  }

  return 'border-6 border-rose-600'
}
</script>

<template>
  <main class="flex flex-wrap justify-center p-2">
    <form class="flex items-center gap-x-2 mb-4 b b-amber-400 rounded-md px-2 py-1 h-10 w-full max-w-xs" action="va-quiz" @submit.prevent="searchAnime">
      <label class="i-carbon-search text-purple-800 text-2xl" for="searchAnime"></label>
      <input
        id="searchAnime"
        ref="animeSearch"
        v-model="animeName"
        class="w-full h-full outline-0 appearance-none"
        type="search"
      >
      <span class="flex items-center justify-center text-purple-800 bg-amber-400 px-2 py-0.5 rounded-md uppercase">
        <span class="i-carbon-mac-command text-sm"></span>
        k
      </span>
    </form>
    <ul v-show="!hasSelectedAnime && animes.length" class="flex flex-wrap justify-center gap-2">
      <li
        v-for="anime in animes"
        :key="anime.id"
        @click="searchAnimeById(anime.id)"
      >
        <img class="w-28" :src="anime.coverImage.large" :alt="anime.title.romaji">
      </li>
    </ul>
    <form v-if="character > -1" class="w-full flex flex-wrap justify-center gap-2" action="va-quiz" @submit.prevent="validateVa">
      <img class="w-44" :src="characters[character].node.image.large" :alt="characters[character].node.name.full">
      <fieldset class="flex flex-wrap justify-center gap-2 basis-full">
        <legend class="hidden">Voice Actors</legend>
        <label
          v-for="va in voiceActors"
          :key="characters[va].node.name.full"
          :class="[
            validateSelectedVA(va),
          ]"
          :for="characters[va].node.name.full"
        >
          <input
            :id="characters[va].node.name.full"
            class="hidden"
            type="radio"
            name="va"
            @change="selectVA(va)"
          >
          <img class="w-32" :src="characters[va].voiceActors[0].image.large" :alt="characters[va].voiceActors[0].name.full">
        </label>
      </fieldset>
      <button type="submit" class="bg-amber-400 text-purple-800 font-semibold px-5 py-2 rounded uppercase text-sm">
        Answer
      </button>
      <button type="button" class="b border-2 b-purple-800 text-purple-800 rounded px-5 py-2" @click="randomize">Randomize</button>
    </form>
  </main>
</template>
