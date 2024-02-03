<template>
  <Swiper
    :modules="modules"
    :slides-per-view="props.slidesPerView"
    :space-between="props.spaceBetween"
    :autoplay="props.autoplay"
    :grid="props.grid"
    :loop="props.loop"
    :navigation="props.navigation"
    :pagination="props.pagination"
    :breakpoints="props.breakpoints"
  >
    <slot name="slides"></slot>
  </Swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper } from 'swiper/vue'
import { Autoplay, Grid, Navigation, Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Props = SwiperOptions

const props = defineProps<Props>()

const modules = ref([Autoplay, Grid, Navigation, Pagination])

</script>