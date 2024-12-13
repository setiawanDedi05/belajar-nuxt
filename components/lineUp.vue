<template>
  <div class="p-2" v-for="(cluster, index) in clusters" :key="index">
    <MyCarousel v-if="cluster.title === ''" v-bind="config['SLIDER']">
      <MySlide v-for="slide in cluster.cells" :key="slide.id">
        <img :src="slide.images" alt="images" class="w-full h-full object-contain" />
      </MySlide>
      <template #addons>
        <MyPagination />
      </template>
    </MyCarousel>
    <div v-else>
      <div class="flex justify-between my-3">
        <h2 class="text-white roboto-bold">{{ cluster.title }}</h2>
        <button class="flex items-center">
          <span class="text-secondary">
            Selengkapnya
          </span>
          <Icon name="uil:angle-right-b" class="text-secondary" />
        </button>
      </div>
      <MyCarousel v-bind="cluster.subtype === 'POSTER' ? config['POSTER'] : config['SNAPSHOT']">
        <MySlide v-for="slide in cluster.cells" :key="slide.id" class="rounded-lg mx-3 hover max-h-[300px]">
          <img :src="slide.images" alt="images"
            class="w-full h-full object-cover hover:scale-125 ease-in duration-150" />
        </MySlide>
        <template #addons>
          <MyNavigation />
        </template>
      </MyCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
const { clusters } = defineProps(['clusters']);
const config = {
  "SLIDER": {
    itemsToShow: 1,
    autoplay: 2000,
    wrapAround: true,
    pauseAutoplayOnHover: true
  },
  "POSTER": {
    itemsToShow: 1,
    autoplay: 2000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
    breakpointMode: 'viewport',
    breakpoints: {
      300: {
        itemsToShow: 2.3,
        snapAlign: 'center',
      },
      450: {
        itemsToShow: 3.3,
        snapAlign: 'start',
      },
      700: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
      1000: {
        itemsToShow: 8,
        snapAlign: 'center'
      }
    },
  },
  "SNAPSHOT": {
    itemsToShow: 1,
    autoplay: 2000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
    breakpointMode: 'viewport',
    breakpoints: {
      300: {
        itemsToShow: 1.3,
        snapAlign: 'center',
      },
      450: {
        itemsToShow: 2.3,
        snapAlign: 'start',
      },
      700: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
      1000: {
        itemsToShow: 3,
        snapAlign: 'center'
      }
    },
  }
};
</script>