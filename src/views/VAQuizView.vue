<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { queryMediaById, queryPaginatedMedia } from '@/api/MediaQueries'
import fisherYatesShuffle from '@/utils/fisherYatesShuffle'
import type { Character, Media, PageInfo } from '@/types'

const animeName = ref()
const animes: Ref<Media[]> = ref([])
const currentPage: Ref<PageInfo | undefined> = ref()

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
}

const characters: Ref<Character[]> = ref([])
const character: Ref<number> = ref(-1)
const voiceActors: Ref<number[]> = ref([])

async function searchAnimeById(id: number) {
  const variables = {
    id,
    type: 'ANIME',
  }

  const { data: { Media: { characters: { edges } } } } = await queryMediaById(variables)
  characters.value = edges
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

const selectedVA: Ref<number> = ref(-1)
function selectVA(voiceActor: number) {
  selectedVA.value = voiceActor
}

function validateVa() {
  if (selectedVA.value === character.value) {
    console.log('correto')
    return
  }
  console.log('incorreto')
}
</script>

<template>
  <main>
    <form class="mb-4" action="va-quiz" @submit.prevent="searchAnime">
      <label class="mr-3" for="searchAnime">Search Anime</label>
      <input
        id="searchAnime"
        v-model="animeName"
        class="b b-black"
        type="text"
      >
    </form>
    <ul class="flex flex-col items-start">
      <li
        v-for="anime in animes"
        :key="anime.id"
        class="flex items-center mb-2"
        @click="searchAnimeById(anime.id)"
      >
        <img class="mr-2" :src="anime.coverImage.medium" alt="teste">
        <p>{{ anime.title.native }}</p>
      </li>
    </ul>
    <section v-if="character > -1" class="flex flex-wrap justify-center">
      <img class="mb-3" :src="characters[character].node.image.large" alt="">
      <form class="w-full flex flex-wrap justify-center gap-2" action="va-quiz" @submit.prevent="validateVa">

        <label
          v-for="va in voiceActors"
          :key="characters[va].node.name.full"
          :class="{'border-2 border-indigo-800': va === selectedVA}"
          :for="characters[va].node.name.full"
        >
          <input
            :id="characters[va].node.name.full"
            class="hidden"
            type="radio"
            name="va"
            @change="selectVA(va)"
          >
          <img :src="characters[va].voiceActors[0].image.large" alt="">
        </label>
        <button type="submit" class="w-full">
          answer
        </button>
      </form>
    </section>
  </main>
</template>
