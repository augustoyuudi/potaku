<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { queryMediaById, queryPaginatedMedia } from '@/api/MediaQueries'
import fisherYatesShuffle from '@/utils/fisherYatesShuffle'
import type { Character, Media, PageInfo } from '@/types'

const animeName = ref()
const animes: Ref<Media[]> = ref([])
const hasSelectedAnime: Ref<boolean> = ref(false)
const currentPage: Ref<PageInfo | undefined> = ref()
const characters: Ref<Character[]> = ref([])
const character: Ref<number> = ref(-1)
const voiceActors: Ref<number[]> = ref([])
const selectedVA: Ref<number> = ref(-1)
const hasSubmittedVA: Ref<boolean> = ref(false)

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
</script>

<template>
  <main>
    <form class="flex items-center gap-x-2 mb-4 b b-amber-400 rounded-md px-2 h-9" action="va-quiz" @submit.prevent="searchAnime">
      <label class="i-carbon-search text-purple-800" for="searchAnime"></label>
      <input
        id="searchAnime"
        v-model="animeName"
        class="w-full h-full outline-0 appearance-none"
        type="search"
      >
    </form>
    <ul v-show="!hasSelectedAnime" class="flex flex-wrap justify-center gap-2">
      <li
        v-for="anime in animes"
        :key="anime.id"
        @click="searchAnimeById(anime.id)"
      >
        <img :src="anime.coverImage.large" :alt="anime.title.romaji">
      </li>
    </ul>
    <section v-if="character > -1" class="flex flex-wrap justify-center">
      <img class="mb-3" :src="characters[character].node.image.large" :alt="characters[character].node.name.full">
      <form class="w-full flex flex-wrap justify-center gap-2" action="va-quiz" @submit.prevent="validateVa">
        <fieldset class="flex flex-wrap justify-center gap-2 basis-full">
          <legend class="hidden">Voice Actors</legend>
          <label
            v-for="va in voiceActors"
            :key="characters[va].node.name.full"
            :class="{
              'border-6 border-indigo-800': !hasSubmittedVA && va === selectedVA,
              'border-6 border-green-600': hasSubmittedVA && (va === selectedVA && character === selectedVA),
              'border-6 border-rose-600': hasSubmittedVA && va === selectedVA && !(character === selectedVA)
            }"
            :for="characters[va].node.name.full"
          >
            <input
              :id="characters[va].node.name.full"
              class="hidden"
              type="radio"
              name="va"
              @change="selectVA(va)"
            >
            <img :src="characters[va].voiceActors[0].image.large" :alt="characters[va].voiceActors[0].name.full">
          </label>
        </fieldset>
        <button type="submit" class="bg-amber-400 text-purple-800 font-semibold px-5 py-3 rounded uppercase text-sm">
          answer
        </button>
      </form>
    </section>
  </main>
</template>
