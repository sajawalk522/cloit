<template>
  <div>
    <div class="">
      <Header />
      <HeroImage />
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import HeroImage from "../components/hero.vue";
import Footer from "../components/footer.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    HeroImage,
    Footer
  },
};
</script>

<style></style>
