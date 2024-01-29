<template>
  <main class="flex flex-col items-center justify-center p-2">
    <section class="flex flex-col items-center gap-x-2 mb-4 w-full">
      <button
        v-if="hasSelectedAnime"
        class="i-carbon-arrow-left text-xl text-purple-800"
        data-testid="reset-anime"
        @click="resetSelectedAnime"
      ></button>
      <form
        class="flex items-center gap-x-2 b b-amber-400 rounded-md px-2 py-1 h-10 mb-4"
        action="va-quiz"
      >
        <label class="i-carbon-search text-purple-800 text-2xl" for="searchAnime"></label>
        <input
          id="searchAnime"
          ref="animeSearch"
          v-model="animeName"
          class="w-full h-full outline-0 appearance-none"
          type="search"
          data-testid="search-anime"
          placeholder="eg: one piece"
          @input.prevent="debouncedSearchAnime"
          @keydown.enter.prevent
        >
        <span class="flex items-center justify-center text-purple-800 bg-amber-400 px-2 py-0.5 rounded-md uppercase">
          <span class="i-carbon-mac-command text-sm"></span>
          k
        </span>
      </form>
      <base-swiper
        v-if="popularAnimes.length"
        class="w-full"
        :slides-per-view="5"
        :space-between="10"
        :autoplay="{ delay: 3500 }"
        :grid="{ rows: 2, fill: 'row' }"
      >
        <template #slides>
          <swiper-slide
            v-for="anime in popularAnimes"
            :key="anime.title.romaji"
            class="flex flex-col items-center"
          >
            <img
              class="h-80"
              :src="anime.coverImage.default"
              :alt="`${anime.title} cover image.`"
            >
            <p class="text-center">
              {{ anime.title.romaji }}
            </p>
          </swiper-slide>
        </template>
      </base-swiper>
    </section>
    <section v-show="!hasSelectedAnime && animes.length">
      <ul class="flex flex-wrap justify-center gap-2 mb-2">
        <li
          v-for="anime in animes"
          :key="anime.id"
          class="cursor-pointer"
          @click="setupGame(anime.id)"
        >
          <img class="w-28" :src="anime.coverImage.large" :alt="anime.title.romaji">
        </li>
      </ul>
      <BasePagination :page="page" @change="searchAnime" />
    </section>
    <form
      v-if="character"
      action="va-quiz"
      class="w-full flex flex-wrap justify-center gap-2"
      @submit.prevent="validateVa"
    >
      <figure class="mb-4">
        <img
          :src="character.node.image.large"
          :alt="character.node.name.full"
          class="w-44"
          data-testid="quiz-character"
        >
        <figcaption
          class="italic text-center"
        >
          {{ character.node.name.full }}
        </figcaption>
      </figure>
      <fieldset class="flex flex-wrap justify-center gap-2 basis-full">
        <legend class="hidden">Voice Actors</legend>
        <label
          v-for="va in voiceActors"
          :key="va.name.full"
          :class="[
            validateSelectedVA(va.id),
          ]"
          class="cursor-pointer"
          :for="va.name.full"
          data-testid="quiz-va"
        >
          <input
            :id="va.name.full"
            class="hidden"
            type="radio"
            name="va"
            @change="selectVA(va.id)"
          >
          <figure>
            <img
              :src="va.image.large"
              :alt="va.name.full"
              class="w-32"
            >
            <figcaption class="italic text-center">
              {{ va.name.full }}
            </figcaption>
          </figure>
        </label>
      </fieldset>
      <button type="submit" class="bg-amber-400 text-purple-800 font-semibold px-5 py-2 rounded uppercase text-sm">
        Answer
      </button>
      <button type="button" class="b border-2 b-purple-800 text-purple-800 rounded px-5 py-2" @click="getQuizGameData()">Randomize</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import debounce from 'lodash.debounce'
import { SwiperSlide } from 'swiper/vue'
import BaseSwiper from '@/components/BaseSwiper.vue'
import BasePagination from '@/components/BasePagination.vue'
import type { Character, Media, PageInfo } from '@/types'
import { queryPaginatedMedia } from '@/api/MediaQueries'

onMounted(() => {
  window.addEventListener('keydown', shortcutListener)
  getPopularAnimes()
})

onUnmounted(() => {
  window.removeEventListener('keydown', shortcutListener)
})

const animeSearch = ref()
const animeName = ref()
const popularAnimes: Ref<Media[]> = ref([])
const animes: Ref<Media[]> = ref([])
const selectedAnime = ref()
const page: Ref<PageInfo> = ref({
  currentPage: 1,
  perPage: 10
})
const character: Ref<Character | null> = ref(null)
const voiceActors: Ref = ref(null)
const selectedVA: Ref<number> = ref(-1)
const isAnswerCorrect: Ref<boolean | null> = ref(null)
const hasSelectedAnime = computed(() => {
  return character.value && voiceActors.value
})

function shortcutListener(e: KeyboardEvent) {
  if (e.metaKey && e.key === 'k') {
    animeSearch.value.focus()
  }
}

const debouncedSearchAnime = debounce(() => searchAnime(1), 500)

async function searchAnime(searchPage = 1) {
  const variables = {
    search: animeName.value,
    page: searchPage,
    perPage: 10,
    type: 'ANIME',
  }
  const { data: { Page: { media, pageInfo } } } = await queryPaginatedMedia(variables)

  animes.value = media
  page.value = pageInfo
  resetSelectedAnime()
}

async function getPopularAnimes() {
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}/media/popular`)
  popularAnimes.value = await data.json()
}

function resetSelectedAnime() {
  character.value = null
  voiceActors.value = []
  selectedVA.value = -1
}

function setupGame(animeId: number) {
  selectedAnime.value = animeId
  getQuizGameData()
}

async function getQuizGameData(id?: number) {
  if (id === undefined || id === null) {
    id = selectedAnime.value
  }

  const data = await fetch('http://localhost:3000/game/quiz/character-va', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mediaId: id,
      sort: ['ROLE'],
      page: 1,
      perPage: 10,
      type: 'ANIME'
    })
  })

  const game = await data.json()

  character.value = game.character
  voiceActors.value = game.voiceActors
}

function selectVA(voiceActor: number) {
  selectedVA.value = voiceActor
  isAnswerCorrect.value = null
}

function validateVa() {
  isAnswerCorrect.value = selectedVA.value === character.value?.voiceActors[0].id
}

function validateSelectedVA(va: number) {
  if (selectedVA.value !== va) {
    return
  }

  if (isAnswerCorrect.value === null) {
    return 'border-6 border-indigo-800'
  }

  if (isAnswerCorrect.value === true) {
    return 'border-6 border-green-600'
  }

  if (isAnswerCorrect.value === false) {
    return 'border-6 border-rose-600'
  }
}
</script>