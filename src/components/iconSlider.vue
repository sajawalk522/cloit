<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item"><IconCard /></div>
    </Slide>

    <!-- <template #addons>
      <Navigation />
    </template> -->
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import IconCard from "../components/iconCard.vue";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "BreakPoints",
  components: {
    Carousel,
    Slide,
    IconCard,
    // Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4.5,
        snapAlign: "start",
      },
    },
  }),
});
</script>
<style scoped>
.carousel__slide {
  padding: 5px;
   border-radius: 12px!important;
   width: 100%;
}
</style>
