<template>
  <section class="footer">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="footer-list">
            <img src="../assets/footer-logo.png" />
            <ul>
              <li>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</li>
              <li>010-0000-0000</li>
              <li>aaaaa@naver.com</li>
            </ul>
          </div>
        </div>
        <div class="col-8">
          <div class="footer-main">
            <div class="footer-card">
              <img src="../assets/f-icon-1.png" />
              <h6>해외 개발자 원격 채용</h6>
              <p>바로가기</p>
            </div>
            <div class="footer-card">
              <img src="../assets/f-icon-2.png" />
              <h6>외국인 원격 채용 (비개발)</h6>
              <p>바로가기</p>
            </div>
            <div class="footer-card">
              <img src="../assets/f-icon-3.png" />
              <h6>한국어 가능 외국인 채용</h6>
              <p>바로가기</p>
            </div>
            <div class="footer-card">
              <img src="../assets/f-icon-4.png" />
              <h6>해외 개발자 활용 서비스</h6>
              <p>바로가기</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row q-mt-xl">
        <div class="col-3 footer-col">
          <h6>상호명</h6>
          <ul>
            <li>하이퍼하이어</li>
            <li>Hyperhire India Private Limited</li>
          </ul>
        </div>
        <div class="col-2 footer-col">
          <h6>대표 CEO</h6>
          <ul>
            <li>김주현</li>
            <li>Juhyun Kim</li>
          </ul>
        </div>
        <div class="col-2 footer-col">
          <h6>사업자등록번호 CIN</h6>
          <ul>
            <li>427-86-01187</li>
            <li>U74110DL2016PTC290812</li>
          </ul>
        </div>
        <div class="col-5 footer-col">
          <h6>주소 ADDRESS</h6>
          <ul>
            <li>서울특별시 강남대로 479, 지하 1층 238호</li>
            <li>
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053
              India
            </li>
          </ul>
        </div>
      </div>
      <div class="row q-mt-xl">
        <div class="col-5 footer-col">
          <h6>ⓒ 2023 Hyperhire</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
.footer {
  padding: 50px 0;
  background: #fbfbfb;
  position: relative;
  top: -80px;
}
.footer-list {
  width: 250px;
}
.footer-list img {
  width: 170px;
}
.footer-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-list ul li {
  padding: 5px 0;
  color: #000;
  font-size: 16px;
  font-weight: bold;
}
.footer-main {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.footer-card {
  padding: 15px;
  background: #fff;
  border-radius: 12px;
  margin: 8px;
}
.footer-card img {
  width: 35px;
}
.footer-card h6 {
  font-size: 14px;
  font-weight: bold;
  color: #343741;
  line-height: 21px;
  margin: 0;
  padding: 5px 0 10px 0;
}
.footer-card p {
  font-size: 14px;
  color: #343741;
  line-height: 21px;
  margin: 0;
}
.footer-col h6 {
  font-size: 14px;
  font-weight: bold;
  color: #343741;
  line-height: 21px;
  margin: 0;
  padding: 5px 0 10px 0;
}
.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-col ul li {
  padding: 4px 0;
  color: #000;
  font-size: 14px;
  font-weight: bold;
}
</style>
