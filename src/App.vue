<template>
  <div>
    <NavigationBar />
    <!-- 나머지 앱 컴포넌트 -->
    <router-view></router-view>
    
  <div class="new-underline"></div>
  
      <!-- Contact Section -->
    <div
      class="jumbotron jumbotron-fluid"
      id="contact"
      style="background-image: url('/contact-bk.jpg')"
    >
      <div class="container my-5">
        <div class="row justify-content-between">
          <div class="col-md-6 text-white">
            <h2 class="font-weight-bold">Contact Us</h2>
            <p class="my-4">
              문의사항이나 개선사항이 있으신가요?
              <br />
              언제든지 말씀해주세요. 별별스터디의 귀는 언제나 열려있습니다.
            </p>
            <ul class="list-unstyled">
              <li>이메일: starstar-study@google.com</li>
              <li>전화: 1588-9999</li>
              <li>주소: 서울 서초구 서초대로 74길 33</li>
            </ul>
          </div>
          <div class="col-md-6">
            <form>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">이름</label>
                  <input type="name" class="form-control" id="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="Email">이메일</label>
                  <input type="email" class="form-control" id="Email" />
                </div>
              </div>
              <div class="form-group">
                <label for="message">문의/개선내용</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-outline-success"
                @click="sendEmail">
                보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- Copyright Section -->
    <div class="jumbotron jumbotron-fluid" id="copyright">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="col-md-6 text-white align-self-center text-center text-md-left my-2"
          >
            Copyright © 2024 Harting.
          </div>
          <div
            class="col-md-6 align-self-center text-center text-md-right my-2"
            id="social-media"
          >
            <a href="#" class="d-inline-block text-center ml-2">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" class="d-inline-block text-center ml-2">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" class="d-inline-block text-center ml-2">
              <i class="fa fa-medium" aria-hidden="true"></i>
            </a>
            <a href="#" class="d-inline-block text-center ml-2">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import "aos/dist/aos.css";
import "aos";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name:'App',
  components: {
   NavigationBar
    },
  data() {
    return {
      tips: [
        "무한불성 - 땀을 흘리지 않고는 어떤 일도 이룰 수 없다",
        "일취월장: 나날이 자라거나 발전한다",
        "초지일관: 처음에 세운 뜻을 이루려고 끝까지 밀고 나간다",
        "학이시습: ‘배우고 때로 익힌다.’는 뜻으로, 배운 것을 항상 복습하고 연습하면 그 참 뜻을 알게 된다",
        // 원하는 만큼 랜덤 텍스트를 추가할 수 있습니다.
      ],
      randomTip: "", // 랜덤한 텍스트를 저장할 변수
      urlName: ''
    };
  },

  mounted() {
    this.initAOS();
    this.getRandomTip(); // 컴포넌트가 마운트될 때마다 랜덤한 텍스트를 설정합니다.
  },
  methods: {
    sendEmail() {
    window.location = `mailto:test@example.com?subject=Subject&body=Message`;
  },
    goNoticeBoard(){
      this.$router.push('/NoticeBoard');
    },
    initAOS() {
      import("aos").then((AOS) => {
        AOS.init();
      });
    },
    getRandomTip() {
      // tips 배열에서 랜덤한 인덱스를 선택합니다.
      const randomIndex = Math.floor(Math.random() * this.tips.length);
      // 선택된 랜덤한 텍스트를 randomTip 데이터에 저장합니다.
      this.randomTip = this.tips[randomIndex];
    },
  },
};
</script>

<style>
@import "@/css/custom.css";
@import "@/css/bootstrap.min.css";
@import "@/font-awesome-4.7.0/css/font-awesome.min.css";
@import "@/css/aos.css";

.study-tip-container {
  display: block; /* 블록 레벨 요소로 변경 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

.study-tip {
  font-size: 24px; /* 텍스트 크기를 24px로 증가시킵니다 */
  border: none; /* 테두리를 추가하고 색상을 지정합니다 */
  border-radius: 10px; /* 테두리의 모서리를 둥글게 만듭니다 */
  padding: 10px; /* 텍스트 주위에 여백을 추가합니다 */
  background-color: #cbe7b3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과를 추가합니다 */
}

.underline {
  width: 100px; /* 밑줄의 길이 조절 */
  border-bottom: 5px solid rgb(206, 138, 49); /* 밑줄 스타일 */
  margin: 0 auto 5px;
}

.contents_title {
  font-size: 42px;
  color: #000;
  font-weight: 800;
  letter-spacing: -0.04em;
  text-align: center;
}

.contents_subtitle {
  text-align: center;
  font-size: 18px;
  color: #999;
  font-weight: 600;
}

.card-container {
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  margin-top: 100px !important; /* 카드 간 간격을 위한 여백 추가 */
}
.card {
  width: calc(25% - 40px); /* 카드가 컨테이너의 절반을 차지하도록 설정합니다 */
  margin-bottom: 20px; /* 아래 여백을 추가합니다 */
}

.card:last-child {
  margin-left: 0; /* 마지막 카드에는 간격을 주지 않습니다 */
}
.card-img-top {
  height: 300px; /* 원하는 높이로 조정하세요 */
  width: auto; /* 가로 길이 자동 조정 */
}
</style>