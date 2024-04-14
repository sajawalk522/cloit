<template>
  <div class="hero-container">
    <div class="container">
      <div class="row header-row">
        <div class="col-6">
          <div class="content">
            <h1>
              최고의 실력을 가진<br />
              외국인 인재를 찾고 계신가요?
            </h1>
            <p>
              법률 및 인사관리 부담없이 <br />
              1주일 이내에 원격으로 채용해보세요.
            </p>
            <a href="">개발자가 필요하신가요?</a>
            <div class="q-flex inner-content">
              <div>
                <h6>평균 월 120만원</h6>
                <p>임금을 해당 국가를 기준으로 계산합니다.</p>
              </div>
              <div>
                <h6>최대 3회 인력교체</h6>
                <p>막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
              </div>
              <div>
                <h6>평균 3일, 최대 10일</h6>
                <p>급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <CardCarousel />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <IconSlider />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from "./cardCarousel.vue";
import IconSlider from "./iconSlider.vue";
export default {
  name: "HeroSection",
  components: {
    CardCarousel,
    IconSlider,
  },
};
</script>

<style>
.hero-container {
  background-image: url("../assets/hero-img.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  width: 100%;
  padding: 100px 0;
  position: relative;
  top: -81px;
}
.hero-container .content h1 {
  margin: 0;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  line-height: 62px;
}
.hero-container .content p {
  margin: 0;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  line-height: 34px;
  padding: 10px 0;
}
.hero-container .content a {
  margin: 0;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  line-height: 34px;
}
.hero-container .content .inner-content {
  display: flex;
  justify-content: space-between;
  padding: 50px 40px 20px 0;
}
.hero-container .content .inner-content > div {
  width: 28%;
}
.hero-container .content .inner-content h6 {
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0 5px 0;
  line-height: 27px;
  border-top: 2px solid #eee;
}
.hero-container .content .inner-content p {
  margin: 0;
  color: #fff;
  font-size: 14px;
  line-height: 27px;
}
</style>
