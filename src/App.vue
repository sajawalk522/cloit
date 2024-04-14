<template>
  <q-layout view="lHh Lpr lFf">
    <HomePage />
    <q-page-container> </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import HomePage from "./views/index.vue";

export default {
  name: "LayoutDefault",

  components: {
    HomePage,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
<style lang="scss">
@import "./styles/quasar.scss";
</style>
