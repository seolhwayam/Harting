<template>

    <!-- 나머지 앱 컴포넌트 -->
    <router-view></router-view>
<center>
  <br><br>
<div class="ranking-title-container">
  <h1 class="ranking-title">정보 공유방</h1>
</div> </center> <br><br><br>
        <div class="AddWrap">
            <form>
                <table class="tbAdd">
                    <colgroup>
                        <col width="15%" />
                        <col width="*" />
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" v-model="title" /></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td><textarea v-model="contents"></textarea></td>
                    </tr>
                </table>
            </form> <br>
        </div>
        <div id="app">
        <div class="custom-file">
            <input id="customFile" type="file" @change="handleFileChange" ref="file"/>
            <label class="custom-file-label" for="customFile"></label>
        </div>
        </div>
        <div class="btnWrap">
            <a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
            <a href="javascript:;" @click="fnList" class="btnAdd btn">취소</a>
        </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'writeNoteBoard',
    components: {
    
  },
    data() {
        return {
            title: '',
            contents: '',
            nickname: this.$store.getters.getKakaoUserInfo.nickname,
            file_name: "파일을 선택하세요.",
            form: '', //form 전송 데이터
            message: "Hello, world",
            upPoint:''
        }
    },
    methods: {
        fnList() { //리스트 화면으로 이동 함수
            this.$router.push('/NoteBoard');
        },
         fnAddProc() { //등록 프로세스
        if (!this.title) { //제목이 없다면 값을 입력하라고 알려준다.
            alert("제목을 입력해 주세요");
            this.title = ''; // 제목 필드 비우기
            return;
        }
        this.form = { //backend로 전송될 POST 데이터
            board_code: this.board_code,
            title: this.title,
            contents: this.contents,
            nickname: this.nickname,
            file_name : this.file_name,
        }
        //파일 등록하기
        let form_data = new FormData();
        // form_data.append('board_code',this.board_code)
        form_data.append('title',this.title)
        form_data.append('contents',this.contents)
        form_data.append('nickname',this.nickname)
        form_data.append('file_name',this.file_name)
        let file = this.$refs.file.files[0] //자바에서 ger엘리먼츠 id와 동일한 성격의 코드임
        form_data.append('file_info',file)
        axios.post('http://localhost:3000/fileInput',form_data, {
            headers: {
                'Content-Type' : 'multipart/form-data' //상위 개념 리퀘스트 (text이외에도 보낼수 있음!!)
            }
        })
            .then((res) => {
                if (res.data.success) {
                    this.getPoint();

                    this.fnList();
                } else {
                    alert("실행중 실패했습니다.\n다시 이용해 주세요");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    },
        handleFileChange(e) {
            this.file_name = e.target.files[0].name;
        },
        async getPoint(){  // 증가할 점수 가져오기
      await axios.get("http://localhost:3000/getSystem_settings")
      .then(res =>{
        let data = res.data.data;
        this.upPoint = data[0].upPointNote; //업데이트할 점수 보관
      })
      this.updatePoint();
    },
    async updatePoint(){
        // 점수 업데이트 하기
        let obj = {};
        obj.email= this.$store.getters.getKakaoUserInfo.email;
        obj.upPoint=this.upPoint;
        await axios.post("http://localhost:3000/upPoint",obj)
        .then(res =>{
            console.log(res.data);
        })
        alert("정보 공유 포인트" +  this.upPoint + "를 획득하였습니다!")
    }

    }
}
</script>
<style scoped>
    /* 모든 내용 가운데 정렬 */
    * {
        text-align: center;
        margin: 0 auto;
    }
    .tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
    .tbAdd td{padding:10px 10px; box-sizing:border-box;}
    .tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
    .tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
    .btnWrap{text-align:center; margin:20px 0 0 0;}
    .btnWrap a{margin:0 10px;}
    .btnAdd {background:#43b984}
    .btnDelete{background:#f00;}
 .tbAdd {
    width: 60%; /* 전체 너비에 맞게 설정 */
    border-collapse: collapse; /* 셀 간 경계를 병합하여 보이지 않도록 설정 */
}
.tbAdd th, .tbAdd td {
    padding: 15px; /* 행과 셀의 패딩 조절 */
    border-bottom: 1px solid #eee; /* 하단 테두리 설정 */
}
.tbAdd {
    border: 2px solid #D7EED0; /* 표의 테두리 설정 */
    background-color: #DFEEDB; /* 표의 배경색 설정 */
}
.tbAdd td textarea {
    width: 100%;
    min-height: 500px; /* 높이를 조절하는 부분 */
    padding: 10px;
    box-sizing: border-box;
}
.btnAdd, .btnDelete {
    background: #43B984;
    padding: 15px 30px; /* 버튼의 패딩을 조절하여 크기를 키웁니다. */
    font-size: 20px; /* 버튼의 글자 크기를 조절합니다. */
    color: #fff; /* 버튼의 글자 색상을 설정합니다. */
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.btnAdd:hover, .btnDelete:hover {
    background: #3A9C76; /* 마우스를 올렸을 때의 배경색을 변경합니다. */
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