<template>

<center>
  <br><br>
<div class="ranking-title-container">
  <h1 class="ranking-title">나만의 족보</h1>
</div> <br>
  </center>
  <div class="board-list">
    <div class="common-buttons">
      <button type="button" class="btn btn-secondary" @click="fnWrite">등록</button>
    </div>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일시</th>
          <th>좋아요</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(li, index) in list" :key="index" @click="NoteDetail(li.studyindex)">
          <td>{{ index+1 }}</td>
          <td>{{ li.title }}</td>
          <td>{{ li.nickname }}</td>
          <td>{{ li.date.substr(0, 10) }}</td>
          <td>{{ li.like }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <nav aria-label="..." class="d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GesipanBoard',
   components: {
  },
  data() {
    return {
      requestBody: {},
      list: [], // 배열로 초기화
      no: '',
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      },
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      keyword: this.$route.query.keyword,
    }
  },
  created() {
    this.fnGetList()
  },
  methods: {
    fnGetList() {
      axios.get("http://localhost:3000/NoteBoardList")
        .then(res => {
          this.list = res.data.data;
          console.log(this.list);
        })
        .catch(error => {
          console.error('Error fetching NoteBoardList:', error);
        });
        console.log(new Date())
        
    },
    fnWrite() {
      this.$router.push('/writeNoteBoard');
    },
    NoteDetail(index) {
      this.$store.commit('setNoteIndex', index);
      this.$router.push('/DetailNoteBoard');
    }
  }
}
</script>

<style>


.board-list {
    width: 1000px;
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

.common-buttons {
    padding: 8px;
    text-align: right;
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
.pagination {
    font-size: 20px; /* 페이지네이션의 글꼴 크기 조정 */
    
}

.page-link {
    padding: 10px; /* 페이지 링크의 안쪽 여백 추가 */
}

</style>