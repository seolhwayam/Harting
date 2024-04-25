<template>
  <div id="app">
    
    <div class="home-container">
      <div class="study-tip-container">
      </div>
      <p style="font-size: 30px"> 24년 하반기 오픈 예정 서비스 입니다~ 조금만 기다려주세요 </p>
      <div class="cards-container">
        <!-- v-for를 사용하여 각 과목에 대한 카드를 생성 -->
        <div class="card" v-for="subject in subjects" :key="subject.name">
          <!-- 과목 이미지를 표시 -->
          <img
            :src="subject.imgUrl"
            :alt="subject.name"
            class="subject-image"
          />
          <!-- 과목 이름을 표시 -->
          <div class="subject-name">{{ subject.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data() {
    return {
      subjects: [
        { name: "한국사 공부하기", imgUrl: require("@/assets/한국사퀴즈.png") },
        { name: "영단어 공부하기", imgUrl: require("@/assets/영단어.png") },
        { name: "맞춤법 공부하기", imgUrl: require("@/assets/맞춤법.png") },
        { name: "엑셀 공부하기", imgUrl: require("@/assets/코딩.png") },
      ],
    };
  },
};
</script>

<style>
body {
  font-family: "KCC-Hanbit" !important;
}
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 중앙 정렬 */
  height: 100vh; /* 화면의 전체 높이에 맞춤 */
}

.study-tip-container {
  display: block; /* 블록 레벨 요소로 변경 */
  text-align: center; /* 텍스트 중앙 정렬 */
  margin-top: -200px; /* 네비게이션 바와의 간격 조정 */
  margin-bottom: 20px; /* 카드 영역과의 간격 조정 */
  /* 여기에 추가 스타일링을 적용할 수 있습니다. */
}

.study-tip {
  font-size: 24px; /* 텍스트 크기를 24px로 증가시킵니다 */
  border: 2px solid #ffcc00; /* 테두리를 추가하고 색상을 지정합니다 */
  border-radius: 10px; /* 테두리의 모서리를 둥글게 만듭니다 */
  padding: 10px; /* 텍스트 주위에 여백을 추가합니다 */
  background-color: #fffae6; /* 배경색을 옅은 노란색으로 지정합니다 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과를 추가합니다 */
}

.cards-container {
  display: flex;
  flex-wrap: wrap; /* 여러 줄로 카드를 배치하기 위해 */
  justify-content: center; /* 카드를 수평 중앙에 위치시킴 */
  gap: 50px;
  margin-bottom: 20px;
}

.card {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  font-size: 18px; /* 적절한 폰트 크기 */
  width: 350px; /* 카드의 너비 */
  height: 400px; /* 카드의 높이를 설정 */
  display: flex; /* Flexbox를 사용하여 내용을 중앙에 배치 */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  flex-direction: column; /* 세로 방향으로 내용을 쌓습니다 */
  justify-content: flex-start; /* 상단 정렬 */
  margin-top: 80px;
}
.subject-image {
  width: 100%; /* 이미지 너비를 카드 너비에 맞춥니다 */
  height: auto; /* 이미지 높이를 비율에 맞게 자동 조정합니다 */
  border-radius: 8px 8px 0 0; /* 위쪽 모서리에만 border-radius를 적용합니다 */
}
.subject-name {
  margin-top: 10px; /* 텍스트와 이미지 사이의 간격을 조정합니다 */
}
.card:hover {
  transform: translateY(-5px) scale(1.05);
  width: 360px;
  background-color: #e2e2e2; /* 호버 시 배경 색 변경 */
}
.auth-buttons {
  display: flex;
  gap: 10px;
}
.login-btn,
.signup-btn {
  padding: 15px 25px; /* 로그인/회원가입 버튼 패딩 조정 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px; /* 로그인/회원가입 폰트 크기 조정 */
}
.login-btn {
  background-color: #4caf50;
  color: white;
}
.signup-btn {
  background-color: #2196f3;
  color: white;
}
.subject-image {
  width: 100%; /* 이미지 너비를 카드 너비에 맞춥니다 */
  height: 350px; /* 고정된 이미지 높이를 설정합니다 */
  object-fit: cover; /* 이미지가 요소를 꽉 채우면서 콘텐츠 비율을 유지하도록 합니다 */
  border-radius: 8px 8px 0 0; /* 상단 모서리에만 border-radius를 적용합니다 */
}
</style>
