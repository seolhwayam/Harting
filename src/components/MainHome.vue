<template>

    <!-- Banner Section -->
    <div
      class="jumbotron jumbotron-fluid"
      id="banner"
      style="background-image: url('/banner-bk.jpg')"
    >
      <div class="container text-center text-md-left">
        <header>
          <div class="row justify-content-between">
            <div class="col-2">
              <img src="@/assets/logo.png" alt="logo" />
            </div>
          </div>
        </header>
        <h1
          class="display-3 text-white font-weight-bold my-5"
          style="text-align: left"
        >
          코딩마스터<br />
          별별스터디와 함께
        </h1>
        <p class="lead text-white my-4" style="text-align: left">
          별별스터디에서 뻔한 공부를 Fun하게 해보세요!
          <br />
          노력은 여러분을 배신하지 않아요.
        </p>
      </div>
    </div>

  <!-- Study Tip Section -->
    <div class="container my-5 py-2">
      <div class="underline"></div>
      <p class="contents_title">오늘의 동기부여</p>
      <div class="study-tip-container">
        <p class="study-tip">{{ randomTip }}</p>
      </div>
      <br /><br />

      <!-- Feature Section (Skew Background) -->
      <div class="jumbotron jumbotron-fluid feature" id="feature-first">
        <div class="container my-5">
          <div class="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              class="col-md-6"
            >
              <h2 class="font-weight-bold">코딩문제</h2>
              <p class="my-4">
                나의 실력에 맞는 레벨을 선택해서 문제를 풀어보세요.
                <br />한단계씩 성장하는 나를 보게 될거예요!
              </p>
              <button type="button" class="btn btn-outline-success" @click="goQuizList">
                문제풀러가기
              </button>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              class="col-md-6 align-self-center"
            >
              <img
                src="@/assets/feature-1.png"
                alt="Take a look inside"
                class="mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Section (Green Background) -->
      <div class="jumbotron jumbotron-fluid feature" id="feature-last">
        <div class="container">
          <div class="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              class="col-md-6 flex-md-last"
            >
              <h2 class="font-weight-bold">교육영상</h2>
              <p class="my-4">
                기초가 탄탄해지는 그러면서 재미를 곁들인 강의를 들어보세요.
                <br />
                큭큭 거리다보면 어느새 완강!
              </p>
              <a href="https://www.youtube.com/@MasterNKS" target="_blank">
          <button type="button" class="btn btn-outline-success">
            영상보러가기
          </button>
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              class="col-md-6 align-self-center flex-md-first"
            >
              <img
                src="@/assets/feature-2.png"
                alt="Safe and reliable"
                class="mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <br /><br />
      <br /><br />
      <div class="underline"></div>
      <p class="contents_title">Service</p>
      <p class="contents_subtitle">별별스터디 즐기는 방법</p>
      <br /><br />
      <div class="row">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-once="true"
          class="col-md-4 text-center"
        >
          <img
            src="https://www.quizn.show/webdata/images/s_icon01.png"
            alt="Anti-spam"
            class="mx-auto"
          /> <br>
          <h4>Sign up</h4>
          <p>무료로 회원가입 후 언제든지 이용해보세요.</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="true"
          class="col-md-4 text-center"
        >
          <img
            src="https://www.quizn.show/webdata/images/s_icon02.png"
            alt="Phishing Detect"
            class="mx-auto"
          /> <br>
          <h4>Play</h4>
          <p>코딩을 게임처럼 퀴즈로 즐겨보세요.</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-once="true"
          class="col-md-4 text-center"
        >
          <img
            src="https://www.quizn.show/webdata/images/s_icon03.png"
            alt="Smart Scan"
            class="mx-auto"
          /> <br>
          <h4>Share</h4>
          <p>별별스터디를 친구에게 공유해보세요.</p>
        </div>
      </div>
      <br /><br />
      <br /><br />
      <br /><br />
      <div class="underline"></div>
      <p class="contents_title">Content</p>
      <p class="contents_subtitle">별별스터디 알차게 즐기기</p>
      <div class="card-container">
        <div class="row justify-content-center">
          <div class="col-md-4" data-aos="fade-up">
            <div class="card card-height" style="width: 18rem">
              <img src="@/assets/공지사항.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">공지사항</h5>
                <p class="card-text">중요한 내용 공지</p>
                <button type="button" class="btn btn-outline-success" @click="goNoticeBoard">
                  공지사항보기
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card card-height" style="width: 18rem">
              <img src="@/assets/랭킹.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">나의 랭킹</h5>
                <p class="card-text">지금 나의 위치는?</p>
                <button type="button" class="btn btn-outline-success" @click="goRanking">
                  랭킹보러가기
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card card-height" style="width: 18rem">
              <img src="@/assets/족보.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">나만의 족보</h5>
                <p class="card-text">나만알기 아쉬운 꿀팁공유</p>
                <button type="button" class="btn btn-outline-success" @click="goNoteBoard">
                  족보보러가기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br />
      <br /><br />
      <br /><br />
      <div class="underline"></div>
      <p class="contents_title">Event</p>
      <p class="contents_subtitle">놓칠 수 없는 이벤트</p>
      <br /><br />
      <div class="row">
        <!-- 출석체크 -->
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-once="true"
          class="col-md-6 text-center"
        >
         <img
            src="https://www.quizn.show/webdata/images/f_icon06.png"
            alt="Anti-spam"
            class="mx-auto"
            style="width: 60px; height: auto;"
          >
          <h2 class="font-weight-bold">출석체크</h2>
          <p class="my-4">매일매일 출석체크하고 포인트 챙기기!</p>
          <button type="button" class="btn btn-outline-success" @click="goCalender">
            출석체크하기
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-once="true"
          class="col-md-6 text-center"
        >
         <img
            src="https://www.quizn.show/webdata/images/f_icon03.png"
            alt="Anti-spam"
            class="mx-auto"
            style="width: 100px; height: auto;"
          /><br>
          <h2 class="font-weight-bold">오늘의 운세</h2>
          <p class="my-4">머리식힐겸 나의 운세 확인하기!</p>
          <a href="https://www.unsin.co.kr/unse/free/todayline/form?linenum=01&sid=tunse" target="_blank">
          <button type="button" class="btn btn-outline-success">
            운세보러가기
          </button>
          </a>
        </div>
      </div>
    </div>

    <!-- Client Section -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="@/assets/client-1.png" class="mx-auto d-block" />
          </div>
          <div class="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="@/assets/client-2.png" class="mx-auto d-block" />
          </div>
          <div class="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="@/assets/client-3.png" class="mx-auto d-block" />
          </div>
          <div class="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="@/assets/client-4.png" class="mx-auto d-block" />
          </div>
          <div class="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="@/assets/client-5.png" class="mx-auto d-block" />
          </div>
          <div class="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="@/assets/client-6.png" class="mx-auto d-block" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import "aos/dist/aos.css";
import "aos";


export default {
  name:'MainHome',
  components: {
  
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
    };
  },
  mounted() {
    this.initAOS();
    this.getRandomTip(); // 컴포넌트가 마운트될 때마다 랜덤한 텍스트를 설정합니다.
  },
  methods: {
    goNoteBoard(){
       if(this.$store.getters.getKakaoUserInfo == null){
            alert("로그인 후 이용가능한 서비스 입니다.")
        }else{
             this.$router.push('/NoteBoard');
        }
    },
    goRanking(){
      if(this.$store.getters.getKakaoUserInfo == null){
            alert("로그인 후 이용가능한 서비스 입니다.")
        }else{
             this.$router.push('/Ranking');
        }
    },
    goNoticeBoard(){
      if(this.$store.getters.getKakaoUserInfo == null){
          alert("로그인 후 이용가능한 서비스 입니다.")
        }else{
          this.$router.push('/NoticeBoard');}
    },
    goCalender(){
      if(this.$store.getters.getKakaoUserInfo == null){
            alert("로그인 후 이용가능한 서비스 입니다.")
        }else{
      this.$router.push('/calender');}
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
    goQuizList(){
      if(this.$store.getters.getKakaoUserInfo == null){
            alert("로그인 후 이용가능한 서비스 입니다.")
        }else{
      this.$router.push('QuizList');
    }
  },
}
}
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