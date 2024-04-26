<template>
<br>
 <center>
      <div class="ranking-title-container">
        <h1 class="ranking-title">공지사항 내용 상세보기</h1>
      </div>
    </center> <br>
  <div class="AddWrap">
    <!-- <div>를 <form> 요소 밖으로 이동 -->
    <form>
      <table class="tbAdd">
        <colgroup>
          <col width="15%" />
          <col width="*" />
        </colgroup>
        <tr>
          <th>제목</th>
          <td id="boardTitle">{{title}}</td>
          <!-- noteDetail 객체를 바탕으로 데이터 바인딩 -->
        </tr>
        <tr>
          <th>작성일자</th>
          <td id="boardData">{{ date }}</td>
          <!-- noteDetail 객체를 바탕으로 데이터 바인딩 -->
        </tr>
        <tr>
          <th>내용</th>
          <td class="txt_cont" id="boardContent">{{ contents }}</td>
          <!-- noteDetail 객체를 바탕으로 데이터 바인딩 -->
        </tr>
      </table>
    </form>
  </div>
  <div class="btnWrap">
    <a href="javascript:;" @click="fnList" class="btn">목록</a>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "DetailNoteBoard",
  data() {
    return {
      like: "",
      NoticeIndex: 0,
      noticeDetail: {}, // noteDetail 객체 초기화
      title: "",
      contents: "",
      date: "",
    };
  },
  created() {
    this.fnGetView();
  },
  mounted() {},
  methods: {
    fnList() {
      this.$router.push("/NoticeBoard");
    },
    //상세 페이지 불러오기
    fnGetView() {
      this.NoticeIndex = this.$store.getters.getNoticeBoardIndex;
      if (this.NoticeIndex == null) {
        console.log("12345");
        return;
      }
      axios
        .get("http://localhost:3000/NoticeBoardDetail", {
          params: { index: this.NoticeIndex }, // NoteIndex를 객체 안에 넣어 전달
        })
        .then((res) => {
          console.log(res);
          this.noticeDetail = res.data;
          this.title = this.noticeDetail.data[0].title;
          this.contents = this.noticeDetail.data[0].contents;
          this.date = this.formatDateToLocal(this.noticeDetail.data[0].date); // 수정: date 변수를 로컬 시간대로 변환하여 저장
        })
        .catch((error) => {
          console.error("Error fetching NoteBoardDetail:", error);
        });
    },
    formatDateToLocal(dateStr) { // 추가: dateStr을 로컬 시간대의 날짜 문자열로 변환하는 함수
      const date = new Date(dateStr);
      const userTimezoneOffset = date.getTimezoneOffset() * 60000;
      return new Date(date.getTime() - userTimezoneOffset).toISOString().split("T")[0];
    },
  },
};
</script>
<style scoped>
.AddWrap {
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px;
}
.tbAdd {
  width: 100%;
  border-collapse: collapse;
}
.tbAdd th,
.tbAdd td {
  border: 1px solid #ddd;
  padding: 12px; /* 셀 내부 여백 조절 */
  text-align: center;
   font-size: 20px;
}
.tbAdd td.txt_cont {
  height: 300px;
  vertical-align: top;
}
.btnWrap {
  text-align: center;
  margin: 20px 0 0 0;
}
.btnWrap a {
  margin: 0 10px;
}
.btnAdd {
  background: #43B984;
}
.btnDelete {
  background: #f00;
}
.ranking-title-container {
    display: block;
    border-bottom: 3px solid #3DA142; /* 언더라인 스타일 설정 */
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
.btnWrap {
  text-align: center;
}
.btnWrap .btn {
  margin: 10px;
  padding: 10px 20px;
  background-color: #3DA142;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
   font-size: 20px; /* 글꼴 크기를 24px로 조정 */
}
.btnWrap .btn:hover {
  background-color: #2C7F29;
}
</style>