<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-header class="header container">
    <q-toolbar class="text-white q-my-md">
      <a href="/" class="logo">
        <q-img src="../assets/logo.png" />
      </a>

      <q-space />
      <div class="head-list">
        <q-btn-dropdown stretch flat label="채용">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>채용</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>해외 개발자 원격 채용</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>외국인 원격 채용 (비개발 직군)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>한국어 가능 외국인 채용</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn stretch flat label="해외 개발자 활용 서비스" />
      </div>
      <q-space />
      <q-btn color="white" class="btn-color" label="문의하기" />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  methods: {
    onItemClick() {
      // console.log('Clicked on an Item')
    },
  },
};
</script>

<style>
.header {
  background: transparent !important;
  position: relative!important;
}
.header .q-btn {
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
}
.logo {
  width: 170px;
}
.btn-color.text-white {
  color: #4a77ff !important;
}
</style>
