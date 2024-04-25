<template>
  <div>
 
    <center>
      <div class="ranking-title-container">
        <h1 class="ranking-title">내용 상세보기</h1>
      </div>
    </center> <br>
    <div class="AddWrap">
      <form>
        <table class="tbAdd">
          <colgroup>
            <col width="15%" />
            <col width="*" />
          </colgroup>
          <tr style="height: 80px;">
            <th>제목</th>
            <td id="boardTitle">{{ title }}</td>
          </tr>
         <tr style="height: 80px;">
            <th>작성자</th>
            <td id="boardNickname">{{ nickname }}</td>
          </tr>
          <tr style="height: 80px;">
            <th>작성일자</th>
            <td id="boardData">{{ date }}</td>
          </tr>
           <tr style="height: 400px;">
            <th>내용</th>
            <td class="txt_cont" id="boardContent">{{ contents }}</td>
          </tr>
        <tr style="height: 100px;">
            <th>파일</th>
            <td class="txt_cont" id="boardName">
              <button @click="openDownloadPopup" class="download-btn">다운로드</button>
              {{ file_name }}
            </td>
          </tr>
        </table>
      </form>
    </div>
    <div class="btnWrap">
      <a href="javascript:;" @click="fnList" class="btn">목록</a>
      <a href="javascript:;" @click="Btn_like" class="btn">{{ like }}좋아요</a>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "DetailNoteBoard",
  components: {
   
  },
  data() {
    return {
      like: "",
      NoteIndex: 0,
      noteDetail: {},
      title: "",
      contents: "",
      nickname: "",
      date: "",
      down_file: "",
      file_name: "",
    };
  },
  created() {
    this.fnGetView();
  },
  methods: {
    fnList() {
      this.$router.push("/NoteBoard");
    },
    openDownloadPopup() {
      axios
        .get("http://localhost:3000/NoteBoardDetail", {
          params: { index: this.NoteIndex },
        })
        .then((res) => {
          console.log(res);
          try {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", this.file_name);
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            link.addEventListener("click", function (event) {
              event.stopPropagation();
              event.preventDefault();
            });
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          } catch (error) {
            console.error("다운로드 오류:", error);
          }
        });
    },
    Btn_like() {
      this.like++;
      axios.post(
        "http://localhost:3000/NoteBoardLikeUpdate",
        { like: this.like, index: this.NoteIndex }
      );
      axios
        .get("http://localhost:3000/NoteBoardDetail", {
          params: { index: this.NoteIndex },
        })
        .then((res) => {
          this.like = res.date.data[0].like;
        })
        .catch((error) => {
          console.error("Error fetching NoteBoardDetail:", error);
        });
    },
    fnGetView() {
      console.log("store", this.$store.getters.getNoteBoardIndex);
      this.NoteIndex = this.$store.getters.getNoteBoardIndex;
      if (this.NoteIndex == null) {
        console.log("12345");
        return;
      }
      console.log("실행1");
      axios
        .get("http://localhost:3000/NoteBoardDetail", {
          params: { index: this.NoteIndex },
        })
        .then((res) => {
          console.log(res);
          this.noteDetail = res.data;
          console.log(this.noteDetail);
          this.down_file = res.data.data[0].fileBuffer.toString();
          this.file_name = this.noteDetail.data[0].file_name;
          this.title = this.noteDetail.data[0].title;
          this.contents = this.noteDetail.data[0].contents;
          this.nickname = this.noteDetail.data[0].nickname;
          this.file_buffer = this.noteDetail.data[0].file_buffer;
          this.date = new Date(this.noteDetail.data[0].date)
              .toISOString()
              .split("T")[0];
          this.like = this.noteDetail.data[0].like;
          console.log("4");
        })
        .catch((error) => {
          console.error("Error fetching NoteBoardDetail:", error);
        });
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
.ranking-title-container {
  display: block;
  border-bottom: 3px solid #3DA142;
  margin-bottom: 20px;
}
.ranking-title {
  font-size: 32px;
  color: #333;
  margin: 0;
  padding: 10px;
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
.download-btn {
  padding: 8px 16px;
  background-color: #4D8FD6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.download-btn:hover {
  background-color: #0056B3;
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
</style>