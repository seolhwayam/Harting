<template>

<center>
  <br><br>
<div class="ranking-title-container">
  <h1 class="ranking-title">문제 풀이방</h1>
</div> </center> <br><br><br>

  <div id="quiz-container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>난이도</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item" @click="quizPage(item.quiz_id)">
          <td>{{ index + 1 }}</td>
          <td>{{ item.quiz }}</td>
          <td>Lv.{{ item.quizlevel }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'QuizBoard',
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getQuizList();
  },
  methods: {
     getQuizList() {
    axios.get("http://localhost:3000/QuizList") // 서버 연결 (이름 바꾸기)
      .then(res => {
        this.list = res.data.data; // 서버로부터 받은 데이터의 data 프로퍼티에 목록이 들어있을 것으로 예상됩니다.
        console.log(this.list); // 받아온 데이터를 확인해 보세요.
      })
      .catch(error => {
        console.error('Error fetching QuizList:', error);
      });
  },
  quizPage(index){
    this.$store.commit('setQuizIndex', index);
    this.$router.push('/QuizPage');
  }
  }
}
</script>
<style>
.table {
  width: 100%;
  margin-top: 20px;
  table-layout: fixed;
}

#quiz-container {
  width: 80%;
  margin: auto;
}

/* 테이블 행 사이의 간격을 늘리고 글꼴 크기를 키웁니다. */
.table tbody tr {
  height: 70px; /* 행 높이를 늘립니다. */
}

.table tbody tr td {
  font-size: 18px; /* 글꼴 크기를 키웁니다. */
  vertical-align: middle; 
}

.table th {
  font-size: 20px;
  background-color: #f0f0f0; /* 배경색을 변경하여 강조합니다. */
  border-bottom: 2px solid #333; /* 아래쪽 테두리를 추가하여 강조합니다. */
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