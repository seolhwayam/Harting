<template>
  <div class="custom-navbar">
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <!-- 토글 버튼 -->
        <button
          class="btn btn-outline-dark toggle-btn"
          type="button"
          @click="toggleSidebar"
          :class="{ 'hide-toggle': isSidebarVisible }"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- 로고 -->
        <a class="navbar-brand" href="#" @click="goMainHome">
          <img
            src="@/assets/logo.png"
            alt="별별스터디 로고"
            width="60"
            height="80"
            class="d-inline-block align-text-top"
            style="margin-top: -10px"
          />
          <h2 class="font-weight-bold">별별스터디</h2>
        </a>

        <!-- 네비게이션 링크 -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- 나머지 네비게이션 링크들 -->
        </div>

        
        <!-- 로그인 및 로그아웃 버튼 -->
        <div>
          <button v-if="!user.nickname" @click="kakaoLogin()" class="btn btn-outline-success">로그인하기</button>
          <button v-else @click="kakaoLogout()" class="btn btn-outline-success">로그아웃</button>
          
          <!-- 설정 버튼, 모달 열기 -->
          <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#settingsModal">
            <i class="fas fa-cog"></i> 설정
          </button>
        </div>
      </div>

      <!-- 모달 -->
      <div class="modal fade" id="settingsModal" tabindex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="settingsModalLabel">설정</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              화면모드 <br>
              <input type="radio" id="darkMode" value="dark" name="mode" v-model="mode"> Dark 모드
              <input type="radio" id="lightMode" value="light" name="mode" v-model="mode"> Light 모드
              <br>
              음악설정 <br>
              <input type="radio" id="musicOn" value="on" name="music" v-model="music"> On
              <input type="radio" id="musicOff" value="off" name="music" v-model="music"> Off
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
              <button type="button" class="btn btn-primary" @click="applySettings">변경하기</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 오버레이 -->
      <div
        class="overlay"
        v-show="isSidebarVisible"
        @click="toggleSidebar"
      ></div>
      <!-- 사이드바 컨텐츠 -->
      <div :class="{ sidebar: true, show: isSidebarVisible }">
        <!-- 닫기 버튼 -->
        <button class="close-btn" @click="toggleSidebar">&times;</button>
        <!-- 사이드바 내부 섹션 -->
        <div class="sidebar-section">
          <h3>전체 메뉴</h3>
          <div class="sidebar-item" @click="goMainHome('home')">
            <!--메서드 구현필요-->
            <i class="fas fa-home icon-spacing"></i> <span>홈화면</span>
          </div>
          <div class="sidebar-item" @click="goQuizList('test')">
            <!--메서드 구현필요-->
           <i class="fas fa-graduation-cap icon-spacing"></i> <span>코딩문제</span>
          </div>
          <a href="https://www.youtube.com/@MasterNKS" target="_blank" class="no-style">
          <div class="sidebar-item" @click="toggleSection('video')">
            <!--메서드 구현필요-->
           <i class="fas fa-video icon-spacing"></i><span>교육영상</span>
          </div> </a>
          <div class="sidebar-item" @click="goNoticeBoard('notice')">
            <!--메서드 구현필요-->
           <i class="fas fa-bullhorn icon-spacing"></i> <span>공지사항</span>
          </div>
          <div class="sidebar-item" @click="goRanking('rank')">
            <!--메서드 구현필요-->
            <i class="fas fa-trophy icon-spacing"></i> <span>나의랭킹</span>
          </div>
          <div class="sidebar-item icon-spacing" @click="goNoteBoard('tip')">
            <!--메서드 구현필요-->
           <i class="fas fa-book icon-spacing"></i> <span>나만의족보</span>
          </div>
          <div class="sidebar-item" @click="goCalender('check')">
            <!--메서드 구현필요-->
            <i class="fas fa-check icon-spacing"></i> <span>출석체크</span>
          </div>
          <a href="https://www.unsin.co.kr/unse/free/todayline/form?linenum=01&sid=tunse" target="_blank" class="no-style">
          <div class="sidebar-item" @click="toggleSection('luck')">
            <!--메서드 구현필요-->
          <i class="fas fa-magic icon-spacing"></i><span>오늘의 운세</span>
          </div> </a>
          <div class="sidebar-item" @click="goquizNext('test')">
            <!--메서드 구현필요-->
          <i class="fas fa-star icon-spacing"></i><span>실험실</span>
          </div>
         </div>
         <!--회원 정보-->
         <div v-if="user.nickname && user.email!= 'oo5450@naver.com'" > 
            <br>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{nickname}}</h3><br>
            <h3> &nbsp;&nbsp;&nbsp;&nbsp; LV : {{level}} </h3><br>
            <h3> &nbsp;&nbsp;&nbsp;&nbsp; 포인트 : {{point}} </h3><br>
            <h3> &nbsp;&nbsp;&nbsp;&nbsp; 점수 : {{score}}</h3>
         </div>
         <!--회원 정보-->
         <!--관리자-->
        <div class="sidebar-item" @click="goAdmin('test')" v-if="user.email == 'oo5450@naver.com'">
            <!--메서드 구현필요-->
          <span>관리자 화면 가기</span>
        </div>
          <!--관리자-->
      </div>      
    </nav>
  </div>
</template>


<script>
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const getKakaoToken = async (code) => {
  try {
    const data = {
      grant_type: "authorization_code",
      client_id: "9fa381a957d03440e1eb215d79f4814f", // REST API 키
      redirect_uri: "http://localhost:8080",
      code: code,
    };

    const queryString = Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");
    //console.log(queryString);

    const result = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      queryString,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};
const getKakaoUserInfo = async () => {
  let data = "";
  await window.Kakao.API.request({
    url: "/v2/user/me",
  })
    .then(function (response) {
      console.log(response);
      data = response;
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("카카오 계정 정보", data);
  return data;
};

export default {
  name: 'CustomNavbar',
  data() {
    return {
      user: {}, //현재 유저 정보
      userInfo:{}, //db에서 가져온 유저 정보
      mode: 'light', // 'dark' 또는 'light'
      music: 'off', // 'on' 또는 'off'
      audio: new Audio('/calm.mp3'),
      isSidebarVisible: false, // 사이드바 표시 상태
      info: false,
      nickname:'',
      level:'',
      point:"",
      score:'',
      ccehck:''

    };
  },
   created() {
    const urlParams = new URLSearchParams(window.location.search);
    // code가 있는 경우 토큰 발급 요청
    if (urlParams.has("code")) {
      const code = urlParams.get("code");
      console.log("code: ", code);
      this.setKakaoToken(code);
    }
  },
  methods: {
    goAdmin(){
         this.$router.push('/admin');
    },
    goQuizList(){
         if(this.$store.getters.getKakaoUserInfo.email == "oo5450@naver.com"){
            alert("회원 로그인 후 이용 바랍니다.")
        }else{
              this.$router.push('/QuizList');
        }
    },
    goRanking(){
        if(this.$store.getters.getKakaoUserInfo.email == "oo5450@naver.com"){
            alert("회원 로그인 후 이용 바랍니다.")
        }else{
              this.$router.push('/Ranking');
        }
    },
    goNoteBoard(){
         if(this.$store.getters.getKakaoUserInfo.email == "oo5450@naver.com"){
            alert("회원 로그인 후 이용 바랍니다.")
        }else{
      this.$router.push('/NoteBoard');}
    },
    goquizNext(){
         if(this.$store.getters.getKakaoUserInfo.email == "oo5450@naver.com"){
            alert("회원 로그인 후 이용 바랍니다.")
        }else{
       this.$router.push('/quizNext');}
    },
    goMainHome(){
      this.$router.push('/');
    },
    gomode(){
      this.$router.push('/mode');
    },
    goNoticeBoard(){
         this.$router.push('/NoticeBoard');
    },
    goCalender(){
         if(this.$store.getters.getKakaoUserInfo.email == "oo5450@naver.com"){
            alert("회원 로그인 후 이용 바랍니다.")
        }else{
        this.$router.push('/calender');}
    },





    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    toggleSection(section) {
      if (section === "home") {
        this.showHomeSection = !this.showHomeSection;
      } else if (section === "contents") {
        // 콘텐츠 섹션 토글 기능 추가
        this.showContentsSubmenu = !this.showContentsSubmenu;
      } else if (section === "event") {
        // 이벤트 섹션 토글 기능 추가
        this.showEventSubmenu = !this.showEventSubmenu;
      } else if (section === "setting") {
        this.showSettingSection = !this.showSettingSection;
      }
    },
     // 1. 인가 코드 얻기
    // https://developers.kakao.com/docs/latest/ko/kakaologin/js#login
    kakaoLogin() {
      window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:8080",
      });
    },

    // 2. 토큰 조회
    // https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-token
    async setKakaoToken(code) {
      const { data } = await getKakaoToken(code);
      if (data.error) {
        console.log(data.error);
        return;
      }
      console.log(data);
      window.Kakao.Auth.setAccessToken(data.access_token);
      await this.setUserInfo();
      this.$router.push({ path: "/" });
    },

    // 3. 사용자 정보 조회
    // https://developers.kakao.com/docs/latest/ko/kakaologin/js#req-user-info
    async setUserInfo() {
      const res = await getKakaoUserInfo();
      const userInfo = {
        nickname: res.kakao_account.profile.nickname,
        email: res.kakao_account.email,
        profileImg: res.properties.profile_image
      };
      this.user = userInfo;
      this.userCheck();
      this.login_log();
      this.$store.commit('setKakaoUserInfo', userInfo); // store에 유저정보 넣기

    },

    // 로그아웃
    kakaoLogout() {
      this.user = {};
      this.$store.commit('setKakaoUserInfo', null); // 로그아웃 시 스토어 리셋
      window.Kakao.Auth.logout()
        .then(function (response) {
          console.log(window.Kakao.Auth.getAccessToken()); 
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
          this.$router.push('/');
    },
     async  login_log() {
      this.form = {
        email : this.user.email,
      };
      await axios.post('http://localhost:3000/LoginLog', this.form)
        .then((res) => {

          if (res.data.success) {
            if(this.ccehck=='false' || this.ccehck==false){
               this.userInsert();
            }  
            if(this.user.email == "oo5450@naver.com"){
              this.$router.push('/admin');
            }
             this.getMyINFO(); 
             alert('로그인 되었습니다.');
            this.fnList();
                 
            this.userMsg();
            this.$router.push('/');
          } else {
            alert("로그인에 실패하였습니다.");
          }
          
          
        })
        .catch((err) => {
          console.log(err);
        });
        await axios.get("http://localhost:3000/getSystem_settings")
        .then(res =>{
             let settings = res.data.data;
             this.$store.commit('setupPointNote', settings[0].upPointNote); //정보넣기
             this.$store.commit('setupPointLeverUp', settings[0].upPointLevelUp); //정보넣기
             this.$store.commit('setupPointCheck', settings[0].upPointCheck); //정보넣기
             this.$store.commit('setupScore', settings[0].upScore); //정보넣기
             this.msg = settings[0].msg;

        })
    },
    async userInsert(){ 
        let obj = {};
        obj.nickname= this.user.nickname;
        obj.email=this.user.email;
        obj.profileImg=this.user.profileImg;
        await axios.post("http://localhost:3000/userInsert",obj)
        .then(res =>{
             console.log(res.data);
        })
    },
    async userCheck(){
      let obj = {} ;
      obj.email = this.user.email;
      await  axios.post('http://localhost:3000/isUser',obj)
        .then(res => {
            console.log(res);
            this.ccehck = res.data.result;
        });
        
    },
      applySettings() {
      if (this.mode === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      if (this.music === 'on') {
        this.audio.play();
      } else {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
    },
    async getMyINFO(){
        let obj={};
        obj.email = this.$store.getters.getKakaoUserInfo.email;
        await axios.post("http://localhost:3000/getSelectUserPost",obj)
        .then(res =>{
            console.log(res.data)
            let data = res.data.data;
            this.$store.commit('setMyData', data); //나의 정보 넣기
        })
        this.nickname =this.$store.getters.getMyData[0].nickname;
        this.score= this.$store.getters.getMyData[0].score;
        this.point =this.$store.getters.getMyData[0].point;
        this.level = this.$store.getters.getMyData[0].user_rank;
    }
  }
};
</script>

<style>
/* @import "@/font-awesome-4.7.0/css/font-awesome.min.css"; */

.custom-navbar .navbar {
  background-color: #aae9d5; /* 내비게이션바 배경색 */
  display: flex;
  align-items: center;
  height: 90px; /* 높이 설정 */
}

.custom-navbar .toggle-btn {
  font-size: 18px; /* 토글 버튼의 아이콘 크기 조정 */
}

.custom-navbar .hide-toggle {
  display: none; /* 사이드바가 보일 때 토글 버튼 숨김 */
}

.custom-navbar .navbar-brand {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center; /* 아이콘과 텍스트를 수직 정렬 */
  text-align: center; /* 로고를 중앙에 위치시킴 */
}
.custom-navbar .btn-outline-dark {
  margin-left: auto; /* 로그인 버튼을 오른쪽 끝으로 정렬 */
}

.custom-navbar .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px; /* 사이드바의 너비 설정 */
  height: 100%; /* 사이드바의 높이를 전체로 설정 */
  background-color: rgb(207, 230, 192); /* 사이드바 배경색 설정 */
  transform: translateX(-100%); /* 기본 상태에서는 왼쪽으로 숨겨져 있음 */
  transition: transform 0.3s ease-in-out; /* 부드러운 전환 효과 */
  z-index: 1040; /* z-index로 다른 요소 위에 표시 */
}

.custom-navbar .sidebar.show {
  transform: translateX(0); /* 사이드바가 보여질 때 위치 조정 */
}

.custom-navbar .overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* 오버레이를 전체 화면으로 설정 */
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은색 배경 */
  z-index: 1030; /* 사이드바보다 조금 낮은 z-index */
}

.custom-navbar .close-btn {
  position: absolute;
  top: 10px;
  right: 10px; /* 우측 상단에 위치 */
  border: none;
  background: none;
  font-size: 30px; /* 크기 조정 */
  cursor: pointer; /* 커서 모양 변경 */
  color: #333; /* 버튼 색상 */
}

.custom-navbar .sidebar-section {
  background-color: #fff; /* 섹션의 배경색 */
  padding: 15px; /* 섹션 내부의 패딩 */
  margin-bottom: 10px; /* 섹션 간의 여백 */
}

.custom-navbar .sidebar-item {
  display: flex; /* 아이템을 가로로 배열 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 10px 0; /* 아이템의 상하 패딩 */
}

.custom-navbar .icon-example {
  margin-right: 10px; /* 아이콘과 텍스트 사이의 여백 */
}

.custom-navbar .sidebar-section > h3 {
  color: #333; /* 섹션 제목 색상 */
  margin-bottom: 10px; /* 제목과 아이템 사이의 여백 */
}

.custom-navbar .container-fluid {
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: space-between; /* 좌우 여백으로 요소 분포 정렬 */
  height: 90px; /* 부모 요소의 높이를 버튼과 로고의 높이와 일치시킵니다. */
}

.custom-navbar .sidebar-submenu {
  display: none; /* 기본적으로 하위 메뉴 숨김 */
}

.custom-navbar .sidebar-submenu.show-submenu {
  display: block; /* 하위 메뉴 표시 */
}
.custom-navbar .sidebar-item {
  display: flex;
  align-items: center;
  padding: 15px 0; /* 패딩 조정으로 더 넓은 간격 제공 */
  font-size: 20px; /* 글씨 크기를 18px로 증가 */
}

.custom-navbar .icon-example {
  font-size: 24px; /* 아이콘 크기도 조금 더 크게 조정 */
  margin-right: 15px; /* 아이콘과 텍스트 사이의 여백 증가 */
}

.custom-navbar .sidebar-section > h3 {
  /*사이드바 전체메뉴 부분 css수정*/
  font-size: 25px; /* 섹션 제목 글씨 크기 증가 */
  font-weight: bold;
  color: #333;
  margin-bottom: 20px; /* 제목과 아이템 사이의 여백 증가 */
}

.icon-spacing { /*사이드바 아이콘과 문구사이 간격*/
  margin-right: 8px; /* 오른쪽에 8px의 여백 추가 */
}

a.no-style {
  text-decoration: none; /* 밑줄 제거 */
  color: inherit; /* 부모 요소의 글자색 상속 */
}

a.no-style:hover {
  text-decoration: none; /* 호버 시 밑줄 제거 */
  color: inherit; /* 호버 시 글자색 상속 */
}

.dark-mode, .dark-mode * {
  background-color: #121212;
  color: white;
}

</style>
