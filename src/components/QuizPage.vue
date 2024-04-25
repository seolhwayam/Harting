<template>
  <center>
    <br /><br />
    <div class="ranking-title-container">
      <h1 class="ranking-title">문제풀기</h1>
    </div>
    <div class="center-box">
      <div class="rounded-box">
        <div class="quiz-section">
          <br />
          <h1>{{ quiz }}</h1>
        </div>
        <div class="radio-section">
          <label>
            <input
              type="radio"
              name="kind"
              value="1"
              v-model="selectedChoice"
            />{{ answers[0] }} </label
          ><br />
          <label>
            <input
              type="radio"
              name="kind"
              value="2"
              v-model="selectedChoice"
            />{{ answers[1] }} </label
          ><br />
          <label>
            <input
              type="radio"
              name="kind"
              value="3"
              v-model="selectedChoice"
            />{{ answers[2] }} </label
          ><br />
          <label>
            <input
              type="radio"
              name="kind"
              value="4"
              v-model="selectedChoice"
            />{{ answers[3] }} </label
          ><br />
        </div>
        <div class="button-section">
          <button @click="result">제출하기</button>
          <button @click="QuizList">돌아가기</button>
        </div>
      </div>
    </div>
  </center>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "QuizPage",
  data() {
    return {
      quiz: "",
      answers: "",
      choice: "",
      selectedChoice: "",
      upScore: "",
      myScore: "",
    };
  },
  created() {
    this.getQuiz();
  },
  methods: {
    result() {
      if (this.choice === this.selectedChoice) {
        Swal.fire({
          html: "정답입니다! 점수를 획득하셨습니다★",
          icon: "success",
        }).then(() => {
          this.getScore();
        });
      } else {
        Swal.fire({
          html: "오잉..틀렸어요 <br> 다시 한번 생각해보세요.",
          icon: "error",
        });
      }
    },
    getQuiz() {
      //퀴즈 가져오기
      axios
        .get("http://localhost:3000/Quiz", {
          params: { index: this.$store.getters.getQuizIndex }, // NoteIndex를 객체 안에 넣어 전달
        })
        .then((res) => {
          console.log(res);
          let list = res.data.data;
          this.quiz = list[0].quiz;
          this.answers = list[0].answer.split(",");
          this.choice = list[0].choice;
        })
        .catch((error) => {
          console.error("Error fetching QuizList:", error);
        });
    },
    QuizList() {
      // 퀴즈리스트로 돌아가기
      this.$router.push("/QuizList");
    },
    async getScore() {
      //점수 증가
      // 증가할 점수 가져오기
      await axios
        .get("http://localhost:3000/getSystem_settings")
        .then((res) => {
          let data = res.data.data;
          this.upScore = data[0].upScore; //업데이트할 점수 보관
        });
      this.updateScore();
    },
    async updateScore() {
      // 점수 업데이트 하기
      let obj = {};
      obj.email = this.$store.getters.getKakaoUserInfo.email;
      obj.upS = this.upScore;
      await axios.post("http://localhost:3000/upScore", obj).then((res) => {
        console.log(res.data);
      });
      let oobj = {};
      oobj.email = this.$store.getters.getKakaoUserInfo.email;
      await axios
        .post("http://localhost:3000/getSelectUserPost", oobj)
        .then((res) => {
          console.log(res.data);
          let data = res.data.data;
          this.myScore = data[0].score;
        });
      let num = Number(this.myScore);
      if (num >= 0 && num <= 20) {
        this.levelUP(0); // 점수가 0부터 20 사이인 경우 0번째 레벨업 함수 호출
      } else if (num >= 21 && num <= 40) {
        this.levelUP(1); // 점수가 21부터 40 사이인 경우 1번째 레벨업 함수 호출
      } else if (num >= 41 && num <= 60) {
        this.levelUP(2); // 점수가 41부터 60 사이인 경우 2번째 레벨업 함수 호출
      }
    },
    async levelUP(r) {
      let obj = {};
      obj.email = this.$store.getters.getKakaoUserInfo.email;
      obj.rank = r;
      await axios.post("http://localhost:3000/levelUP", obj).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>


<style scoped>
.center-box {
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 100vh; /* 화면 전체 높이만큼 요소를 채우도록 설정 */
}

.rounded-box {
  width: 1400px; /* 변경된 부분: 너비를 더 크게 조정 */
  height: 800px;
  border-radius: 20px; /* 변경된 부분: 모서리를 더 둥글게 조정 */
  background-color: #a3d499;
  padding: 40px; /* 변경된 부분: 내부 여백을 더 크게 조정 */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* 변경된 부분: 그림자 효과 더 강화 */
}
.quiz-section {
  margin-bottom: 100px; /* 퀴즈 섹션과 라디오 섹션 간의 간격을 조정합니다. */
  font-size: 30px; /* 퀴즈 섹션의 글씨 크기를 조정합니다. */
}

.radio-section {
  font-size: 25px; /* 라디오 섹션의 글씨 크기를 조정합니다. */
  margin-bottom: 60px; /* 라디오 섹션과 버튼 간의 간격을 조정합니다. */
}
.radio-section label {
  display: flex; /* 라벨을 플렉스 박스로 설정하여 요소를 수평으로 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  margin-bottom: 8px; /* 각 라디오 버튼 사이의 간격 조절 */
  font-size: 25px; /* 글씨 크기를 18px로 설정 */
}

.radio-section label input[type="radio"] {
  margin-right: 8px; /* 라디오 버튼과 텍스트 사이의 간격 조절 */
  margin-left: 550px; /* 라디오 버튼을 좀 더 안쪽으로 들여쓰기 */
}

/* 라디오 버튼 스타일 */
input[type="radio"] {
  appearance: none; /* 기본 스타일 제거 */
  -webkit-appearance: none; /* Safari 및 Chrome 용 */
  -moz-appearance: none; /* Firefox 용 */
  width: 20px; /* 가로 너비 */
  height: 20px; /* 세로 높이 */
  border-radius: 50%; /* 원형 모양 */
  border: 2px solid #ccc; /* 테두리 */
  outline: none; /* 포커스시 테두리 제거 */
  cursor: pointer; /* 커서 스타일 변경 */
}

/* 라디오 버튼이 선택되었을 때의 스타일 */
input[type="radio"]:checked {
  background-color: #3dbb5e; /* 배경색 */
  border-color: #279930; /* 테두리 색상 */
}

/* 비활성 상태의 라디오 버튼 스타일 */
input[type="radio"]:not(:checked) {
  border-color: #302e2e; /* 비활성 상태의 테두리 색상 설정 */
}

.button-section button {
  margin: 10px;
  padding: 10px 20px; /* 버튼 내부 여백 조절 */
  font-size: 20px; /* 폰트 크기 조절 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리를 둥글게 만듭니다. */
  background-color: #3da142; /* 배경색 설정 */
  color: #fff; /* 텍스트 색상 설정 */
  cursor: pointer; /* 커서 스타일 변경 */
}

.button-section button:hover {
  background-color: #2c7f29; /* 마우스를 올렸을 때의 배경색 설정 */
}
.ranking-title-container {
  display: block;
  border-bottom: 3px solid #3da142; /* 언더라인 스타일 설정 */
  margin-bottom: -2px; /* 언더라인과의 간격 제거 */
  width: 2000px; /* 너비 설정 */
  text-align: left; /* 텍스트 좌측 정렬 */
}

.ranking-title {
  font-size: 48px; /* 글씨 크기를 48px로 설정 */
  color: #333; /* 글씨 색상을 어두운 회색으로 설정 */
  margin-top: 0px; /* 상단 마진 조정 */
  margin-bottom: 10px; /* 하단 마진 조정 */
  text-align: left; /* 텍스트 좌측 정렬 */
  padding-left: 80px; /* 좌측 여백 설정 */
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1); /* 글씨에 그림자 효과 추가 */
}
</style>