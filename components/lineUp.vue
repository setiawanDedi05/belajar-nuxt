<template>
    <div class="p-2" v-for="(cluster, index) in clusters" :key="index">
      <MyCarousel v-if="index === 0" v-bind="{
        itemsToShow: 1,
        autoplay: 2000,
        wrapAround: true,
        snapAlign: 'center',
        pauseAutoplayOnHover: true
      }">
        <MySlide v-for="slide in cluster.cells" :key="slide.id">
          <img :src="slide.images" alt="images" class="w-full h-full object-contain" />
        </MySlide>
        <template #addons>
          <MyPagination />
        </template>
      </MyCarousel>
      <div v-else>
        <div class="flex justify-between my-3" v-if="cluster.title !== ''">
          <h2 class="text-white roboto-bold">{{ cluster.title }}</h2>
          <button class="flex items-center">
            <span class="text-[#07e3d0]">
              Selengkapnya
            </span>
            <Icon name="uil:angle-right-b" class="text-[#07e3d0]" />
          </button>
        </div>
        <MyCarousel v-bind="{
          itemsToShow: cluster.subtype === 'POSTER' ? 2.3 : 1.3,
          autoplay: 2000,
          itemsToScroll: 1,
          modeValue: 2,
          snapAlign: 'center',
          pauseAutoplayOnHover: true
        }">
          <MySlide v-for="slide in cluster.cells" :key="slide.id" class="rounded-lg mx-3">
            <img :src="slide.images" alt="images" class="w-full h-full object-cover" />
          </MySlide>
          <template #addons>
            <MyNavigation />
          </template>
        </MyCarousel>
      </div>
    </div>
</template>

<script setup lang="ts">
    const {clusters} = defineProps(['clusters']);
    console.log({clusters})
</script>