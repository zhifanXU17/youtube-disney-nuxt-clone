<template>
  <main class="relative min-h-screen pt-20">
    <div
      class="bg-image h-full bg-top bg-cover bg-no-repeat absolute top-0 right-0 left-0"
    />

    <carousel
      class="mt-5 h-96"
      :wrap-around="true"
      :items-to-show="1.5"
      :autoplay="8000"
    >
      <slide
        v-for="slide in sliderImgs"
        :key="slide"
        class="px-4 h-96"
      >
        <img
          :src="slide"
          class="h-full object-contain rounded-lg hover:cursor-pointer"
        />
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </main>
</template>

<script lang="ts" setup>
import slider1 from "@/assets/img/slider-badag.jpg";
import slider2 from "@/assets/img/slider-badging.jpg";
import slider3 from "@/assets/img/slider-scale.jpg";
import slider4 from "@/assets/img/slider-scales.jpg";

const sliderImgs = ref([
  slider1,
  slider2,
  slider3,
  slider4,
]);
</script>

<style lang="scss" scoped>
.bg-image {
  background-image: url("@/assets/img/home-background.png");
  z-index: -1;
}
</style>
