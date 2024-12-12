<template>
  <div class="min-h-[100%] overflow-x-hidden overflow-y-hidden">
    <div class="fixed bg-[#141414] w-full h-[64px] flex items-center text-xl px-[38px] top-0 z-[100] font-normal">
      <button
        class="bg-[#6fffe9] text-[#141414] px-8 min-w-[88px] min-h-[36px] uppercase rounded-sm text-[14px] font-medium] text-center ml-auto leading-9 roboto-bold">
        Masuk/Daftar
      </button>
    </div>
    <div class="mt-16 md:fixed left-0 w-full bg-[rgba(51,51,51,.9)]">
      <div class="px-10 mg:bg-gradient-to-b md:from-[rgba(51,51,51,.9)] w-full h-16">
        <div class="h-16 flex items-center justify-between">
          <div class="flex gap-2">
            <button class="align-middle text-white text-3xl m-0 h-10 flex items-center">
              <Icon name="uil:bars" />
            </button>
            <div class="h-10 flex items-center">
              <img src="https://www.visionplus.id/webclient/img/logo_default.svg" alt="image" class="ml-[8px]">
            </div>
          </div>
          <div class="flex gap-2">
            <button class="align-middle text-white text-3xl m-0 h-10 flex items-center">
              <Icon name="uil:search" />
            </button>
            <button class="align-middle text-white text-3xl m-0 h-10 flex items-center">
              <img class="w-[28px] align-middle"
                src="https://www.visionplus.id/webclient/img/generic_default_profile.svg">
            </button>
          </div>
        </div>
      </div>
    </div>
    <MyCarousel v-bind="{
      itemsToShow: 1,
      autoplay: 2000,
      wrapAround: true,
      snapAlign: 'center',
      pauseAutoplayOnHover: true
    }">
      <MySlide v-for="slide in sliders" :key="slide.id">
        <img :src="slide.images" alt="images" class="w-full h-full object-contain" />
      </MySlide>
      <template #addons>
        <MyPagination />
      </template>
    </MyCarousel>
    <div class="p-2 mx-5" v-for="(cluster, index) in clusters" :key="index">
      <div class="flex justify-between my-3" v-if="index !== 0 && cluster.title">
        <h2 class="text-white roboto-bold">{{ cluster.title }}</h2>
        <button class="flex items-center">
          <span class="text-[#07e3d0]">
            Selengkapnya
          </span>
          <Icon name="uil:angle-right-b" class="text-[#07e3d0]" />
        </button>
      </div>
      <MyCarousel v-if="index !== 0" v-bind="{
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

<script lang="ts" setup>
const { data, error } = await useFetch("/api/line_up");
if (error) {
  console.log(error)
}
const clusters = data.value.clusters;
const sliders = clusters.filter(cluster => cluster.subtype === 'SLIDER')[0].cells;
</script>