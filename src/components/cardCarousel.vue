<template>
  <carousel :itemsToShow="3" :wrapAround="true" :transition="500">
    <slide v-for="slide in 10" :key="slide">
      <Card/>
    </slide>

    <template #addons>
      <navigation />
      <!-- <pagination /> -->
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import Card from "../components/card.vue"
export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    // Pagination,
    Navigation,
    Card
  },
}
</script>
<style scoped>
.carousel__slide {
  padding: 5px;
   border-radius: 12px!important;
}

.carousel__viewport {
  perspective: 0px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.78);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.78);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.77);
  /* margin-left: 20px; */
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.77);
  /* margin-right: 20px; */
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(0.99);
  z-index: 9;

}
@media screen and (max-width: 800px) {
    .carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.55)!important;
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.55)!important;
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.55)!important;
  /* margin-left: 20px; */
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.55)!important;
  /* margin-right: 20px; */
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(0.65)!important;
  z-index: 9;

}
}
</style>
<style>
.carousel__prev{
    left: -44px!important;
    color: #fff!important;
}
.carousel__next{
    right: -44px!important;
     color: #fff!important;
}
</style>