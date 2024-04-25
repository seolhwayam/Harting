<template>

<center>
  <br><br>
<div class="ranking-title-container">
  <h1 class="ranking-title">공지사항</h1>
</div> </center> <br><br><br>

 
<div class="board-list">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item"  @click="NoticeDetail(item.id)">
          <td>{{ index + 1 }}</td>
          <td>{{ item.title }}</td>
            <!-- 아래 코드에서 날짜 포맷을 변환하여 출력 -->
          <td>{{ formatLocalDate(item.date) }}</td>
        </tr>
      </tbody>
    </table>
</div>
 

</template>

<script>
import axios from 'axios';
export default {
  name: 'NoticeBoard',
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getNoticeBoard();
  },
    methods: {
    getNoticeBoard() {
      axios.get("http://localhost:3000/NoticeBoard")
      .then(res => {
        this.list = res.data.data.map(item => {
          return {
            ...item,
            date: this.formatLocalDate(item.date) // 날짜를 로컬 시간대로 변환
          };
        });
        console.log(this.list);
      })
      .catch(error => {
        console.error('Error fetching NoticeBoard:', error);
      });
    },
    formatLocalDate(dateStr) {
      const date = new Date(dateStr);
      const tzOffset = date.getTimezoneOffset() * 60000;
      return new Date(date - tzOffset).toISOString().split("T")[0];
    },
    NoticeDetail(index){
      this.$store.commit('setNoticeBoardIndex', index);
      this.$router.push("/NoticeBoardDetail");
    }
  }
}
</script>

<style>

.board-list {
    width: 1500px;
    margin: auto;
      font-size: 20px; /* 테이블 내부 텍스트 크기 조정 */
}

.board-detail {
    width: 768px;
    margin: auto;
    text-align: left;
}

.board-contents {
    padding: 12px 8px;
    border-bottom: 1px solid #eee;
}

#quiz-container {
  width: 768px;
  margin: auto;
}
.table {
  width: 100%;
  margin-top: 20px;
}
.common-buttons {
  text-align: right;
  margin-bottom: 20px;
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
