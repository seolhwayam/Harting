<template>

  <div id="notice-container">
    <h1> 공지사항 </h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>내용</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item">
          <td>{{ index + 1 }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.contents }}</td>
          <td>{{ item.date }}</td>
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
    axios.get("http://localhost:3000/NoticeBoard") // 서버 연결 (이름 바꾸기)
      .then(res => {
        this.list = res.data.data; // 서버로부터 받은 데이터의 data 프로퍼티에 목록이 들어있을 것으로 예상됩니다.
        console.log(this.list); // 받아온 데이터를 확인해 보세요.
      })
      .catch(error => {
        console.error('Error fetching NoticeBoard:', error);
      });
  },
  }
}
</script>

<style>
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
</style>
