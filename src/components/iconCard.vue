<template>
  <div class="icon-slider">
    <div class="inner-slider">
      <img src="../assets/icon-1.png" />
      <p>해외 마케팅</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.icon-slider{
    width: 100%;
}
.icon-slider .inner-slider {
  display: flex;
  align-items: center;
  padding: 10px;
  background: #ffffff33;
  border-radius: 12px;
  min-width: 250px;
}
.icon-slider .inner-slider img {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}
.icon-slider .inner-slider p {
  margin: 0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 27px;
}
</style>
