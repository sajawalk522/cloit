<template>
  <div class="card-main">
    <q-card class="my-card">
      <div class="card-image">
        <q-avatar size="120px">
          <img src="../assets/avatar.png" />
        </q-avatar>
      </div>
      <q-card-section>
        <div class="text-h6">Abhishek Gupta</div>
        <div class="text-subtitle2">마케팅 · 2y+</div>
      </q-card-section>

      <div class="text-buttons">
        <q-card-section class="q-pt-none">
          <div><q-btn color="white" text-color="black" label="마케팅 콘텐츠 제작" /></div>
          <!-- <br /> -->
          <div>
            <q-btn color="white" text-color="black" label="인스타그램 관리" />
          </div>
          <div class="flex-btn">
            <q-btn color="white" text-color="black" label="트위터 관리" />
            <q-btn color="white" text-color="black" label="블로그 글 작성" />
          </div>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>

<style>
.card-main{
     border-radius: 12px!important;
}
.my-card {
  width: 270px;
  padding:20px 5px;
  border-radius: 12px!important;
}
.my-card .text-h6 {
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  line-height: 36px;
}
.my-card .text-subtitle2 {
  text-align: center;
  font-weight: bold;
  color: #4A77FF;
  line-height: 24px;
}
.card-image {
  width: 100%;
  display: flex;
  justify-content: center;
}
.text-buttons {
  display: flex;
  justify-content: center;
}
.text-buttons .q-card__section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-buttons .q-card__section .q-btn{
  border-radius: 6px;
  margin: 4px;
  color: #5E626F;
  font-size: 12px;
  font-weight: bold;
}
.flex-btn{
 display: flex;
}
</style>
