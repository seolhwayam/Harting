<template>
  <div class="ranking-title-container">
    <br /><br />
    <h1 class="ranking-title">관리자 화면</h1>
    <br />
  </div>
  <br />



  <div class="cards-container">
    <div class="row">
      <!-- 공지사항 -->
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img src="@/assets/공지.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div style="text-align: center">
              <h5 class="card-title">공지사항 등록하기</h5>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#Notice"
              >
                등록하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 퀴즈 추가하기 -->
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img src="@/assets/시험.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div style="text-align: center">
              <h5 class="card-title">퀴즈 등록하기</h5>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#Quiz"
              >
                등록하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 점수 체계 변경하기 -->
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img src="@/assets/점수.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div style="text-align: center">
              <h5 class="card-title">점수체계 변경하기</h5>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#SystemSetting"
              >
                변경하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- 환영인사 -->
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img src="@/assets/인사.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div style="text-align: center">
              <h5 class="card-title">회원 인사문구 변경</h5>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#hiMSG"
              >
                변경하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 방문자 수 조회 -->
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img src="@/assets/방문자.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div style="text-align: center">
              <h5 class="card-title">방문자 수 조회</h5>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#count"
              >
                조회하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 회원 조회 -->
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img src="@/assets/회원조회.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div style="text-align: center">
              <h5 class="card-title">회원 조회</h5>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#userSelect"
              >
                조회하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 공지사항 모달창 -->
  <div
    class="modal fade"
    id="Notice"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <!-- modal-dialog-centered 클래스를 추가하여 가운데 정렬 및 modal-lg 클래스를 추가하여 크기 설정 -->
      <div class="modal-content">
        <div class="modal-header">
          <!-- 모달 제목 -->
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            공지사항 등록하기
          </h1>
          <!-- 닫기 버튼 -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 제목 입력란 -->
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >제목</label
            >
            <input
              type="text"
              class="form-control"
              id="NoticeTitle"
              v-model="NoticeTitle"
            />
          </div>
          <!-- 내용 입력란 -->
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >내용</label
            >
            <textarea
              class="form-control"
              id="NoticeContents"
              rows="6"
              v-model="NoticeContents"
            ></textarea>
            <!-- rows를 조절하여 텍스트 영역의 높이를 조정 -->
          </div>
        </div>
        <div class="modal-footer">
          <!-- 닫기 버튼 -->
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
          <!-- 등록 버튼 -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="NoticeRegister"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 퀴즈 모달창 -->
  <div
    class="modal fade"
    id="Quiz"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <!-- modal-dialog-centered 클래스를 추가하여 모달을 화면 중앙에 위치시킵니다. -->
      <div class="modal-content">
        <div class="modal-header">
          <!-- 모달 제목 -->
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            퀴즈 등록하기
          </h1>
          <!-- 닫기 버튼 -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 언어 설정과 난이도 설정 -->
          <div class="mb-3">
            <span>언어 설정 </span>
            <select
              name="language"
              v-model="selectedLanguage"
              class="form-select mb-2"
            >
              <!-- form-select 클래스를 추가하여 선택 리스트를 스타일링합니다. -->
              <option value="JS">JS</option>
              <option value="JAVA">JAVA</option>
              <option value="SQL">SQL</option>
            </select>
            <span>난이도 설정</span>
            <select
              name="LEVEL"
              v-model="selectedLEVEL"
              class="form-select mb-2"
            >
              <!-- form-select 클래스를 추가하여 선택 리스트를 스타일링합니다. -->
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <!-- 문제 입력란 -->
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >문제</label
            >
            <input type="text" class="form-control" id="Quiz" v-model="Quiz" />
          </div>
          <!-- 선택지 입력란 -->
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >선택지</label
            >
            <input
              type="text"
              class="form-control mb-2"
              rows="3"
              v-model="answer1"
            />
            <!-- mb-2 클래스를 추가하여 아래 여백을 조정합니다. -->
            <input
              type="text"
              class="form-control mb-2"
              rows="3"
              v-model="answer2"
            />
            <!-- mb-2 클래스를 추가하여 아래 여백을 조정합니다. -->
            <input
              type="text"
              class="form-control mb-2"
              rows="3"
              v-model="answer3"
            />
            <!-- mb-2 클래스를 추가하여 아래 여백을 조정합니다. -->
            <input
              type="text"
              class="form-control mb-2"
              rows="3"
              v-model="answer4"
            />
            <!-- mb-2 클래스를 추가하여 아래 여백을 조정합니다. -->
          </div>
          <!-- 해답 설정 -->
          <div class="mb-3">
            <span>정답 설정</span>
            <select name="choice" v-model="selecteChoice" class="form-select">
              <!-- form-select 클래스를 추가하여 선택 리스트를 스타일링합니다. -->
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <!-- 닫기 버튼 -->
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
          <!-- 등록 버튼 -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="QuizRegister"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 점수 체계 변경 모달창 -->
  <div
    class="modal fade"
    id="SystemSetting"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <!-- 모달을 화면 중앙에 위치시키기 위해 modal-dialog-centered 클래스 추가 -->
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            점수체계 변경하기
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 변경할 설정 -->
          <div class="mb-3">
            <label for="systemSettingSelect" class="form-label"
              >변경할 점수체계</label
            >
            <!-- 레이블 추가 -->
            <select
              id="systemSettingSelect"
              class="form-select"
              v-model="selectSystem"
            >
              <!-- 아이디 추가 및 클래스 변경 -->
              <option value="upPointNote">정보 공유 게시글 포인트</option>
              <option value="upPointLevelUp">레벨업 포인트</option>
              <option value="upPointCheck">출석체크 포인트</option>
              <option value="upScore">퀴즈 해답 점수</option>
            </select>
          </div>
          <!-- 설정 값 입력 -->
          <div class="mb-3">
            <label for="systemSettingValue" class="form-label">변경할 값</label>
            <!-- 레이블 추가 -->
            <input
              type="number"
              id="systemSettingValue"
              class="form-control"
              v-model="up"
            />
            <!-- 아이디 추가 및 클래스 변경 -->
          </div>
        </div>

        <div class="modal-footer">
          <!-- 닫기 버튼 -->
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
          <!-- 등록 버튼 -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="SystemRegister"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 환영인사 모달창 -->
  <div
    class="modal fade"
    id="hiMSG"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            회원 인사문구 변경
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="greetingMessageInput" class="form-label"
              >변경할 인사 문구</label
            >
            <input
              type="text"
              id="greetingMessageInput"
              class="form-control"
              v-model="msg"
            />
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="MsgRegister"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 방문자 수 조회 모달창 -->
  <div
    class="modal fade"
    id="count"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <!-- 모달을 화면 중앙에 위치시키기 위해 modal-dialog-centered 클래스 추가 -->
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            방문자 수 조회
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 날짜 선택 -->
          <div class="mb-3">
            <label for="selectedDate" class="form-label">조회할 날짜</label>
            <!-- 레이블 추가 -->
            <select
              id="selectedDate"
              name="system"
              v-model="selctedDate"
              class="form-select"
            >
              <!-- 아이디 추가 및 form-select 클래스 추가 -->
              <option value="2024-04-22">2024-04-22</option>
              <option value="2024-04-23">2024-04-23</option>
              <option value="2024-04-24">2024-04-24</option>
              <option value="2024-04-25">2024-04-25</option>
              <option value="2024-04-26">2024-04-26</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <!-- 닫기 버튼 -->
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
          <!-- 조회 버튼 -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="dateCount"
          >
            조회
          </button>
          <!-- "등록"에서 "조회"로 텍스트 변경 -->
        </div>
      </div>
    </div>
  </div>

  <!-- 회원 조회 모달창 -->
  <div
    class="modal fade"
    id="userSelect"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <!-- 모달을 화면 중앙에 위치시키기 위해 modal-dialog-centered 클래스 추가 -->
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            회원 조회하기
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 이메일 입력 -->
          <div class="mb-3">
            <label for="userEmail" class="form-label">회원 이메일</label>
            <!-- 레이블 추가 -->
            <input
              type="text"
              id="userEmail"
              class="form-control"
              v-model="selectedUser"
            />
            <!-- 아이디 추가 -->
          </div>
        </div>
        <div class="modal-footer">
          <!-- 닫기 버튼 -->
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
          <!-- 조회 버튼 -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="UserSelect"
          >
            조회
          </button>
          <!-- "등록"에서 "조회"로 텍스트 변경 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "App",
  data() {
    return {
      NoticeContents: "",
      NoticeTitle: "",
      selectedLanguage: "",
      selectedLEVEL: "",
      Quiz: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      selecteChoice: "",
      answers: "",
      selectSystem: "",
      up: "",
      msg: "",
      selctedDate: "",
      count: "",
      selectedUser: "",
      list: {},
    };
  },
  methods: {
    kakaoLogout() {
      this.$store.commit("setKakaoUserInfo", null); // 로그아웃 시 스토어 리셋
      alert(this.$store.getters.getKakaoUserInfo);
      window.Kakao.Auth.logout()
        .then(function (response) {
          console.log(window.Kakao.Auth.getAccessToken());
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$router.push("/kakaoLogin");
    },
    NoticeRegister() {
      // 공지사항 등록하기
      let obj = {};
      obj.title = this.NoticeContents;
      obj.contents = this.NoticeTitle;
      axios
        .post("http://localhost:3000/NoticeRegister", obj)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            // SweetAlert2를 사용하여 메시지를 표시합니다.
            icon: "success",
            title: "등록 성공",
            text: "공지사항이 성공적으로 등록되었습니다.",
          });
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            icon: "error",
            title: "등록 실패",
            text: "공지사항 등록에 실패했습니다. 다시 시도해주세요.",
          });
        });
    },
    QuizRegister() {
      // 퀴즈 등록하기
      this.answers =
        this.answer1 +
        "," +
        this.answer2 +
        "," +
        this.answer3 +
        "," +
        this.answer4;
      let obj = {};
      obj.selectedLanguage = this.selectedLanguage;
      obj.selectedLEVEL = this.selectedLEVEL;
      obj.Quiz = this.Quiz;
      obj.answers = this.answers;
      obj.selecteChoice = this.selecteChoice;

      axios
        .post("http://localhost:3000/QuizRegister", obj)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "성공적으로 등록되었습니다.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500, // 알럿이 자동으로 사라지도록 타이머 설정
          });
        })
        .catch((error) => {
          console.error("퀴즈 등록 중 오류 발생:", error);
          Swal.fire({
            title: "오류",
            text: "퀴즈 등록 중 오류가 발생했습니다. 다시 시도해주세요.",
            icon: "error",
            confirmButtonText: "확인",
          });
        });
    },
    MsgRegister() {
      // 메세지 변경
      let obj = {};
      obj.msg = this.msg;
      axios
        .post("http://localhost:3000/MsgRegister", obj)
        .then((res) => {
          console.log(res.data);
          // 성공적으로 응답을 받았을 때
          Swal.fire({
            title: "성공적으로 등록되었습니다.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500, // 알럿이 자동으로 사라지도록 타이머 설정
          });
        })
        .catch((error) => {
          // 서버에서 오류 응답을 받았을 때
          console.error("서버 오류:", error);
          Swal.fire({
            title: "오류 발생",
            text: "서버 오류로 인해 등록에 실패했습니다.",
            icon: "error",
            showConfirmButton: true,
          });
        });
    },
    dateCount() {
      //방문자수 조회
      let obj = {};
      obj.selctedDate = this.selctedDate;
      axios.post("http://localhost:3000/dateCount", obj).then((res) => {
        this.count = res.data.data[0].count;
        this.$swal("방문자 수:" + " " + this.count);
      });
    },
    UserSelect() {
      // 회원 조회
      let obj = {};
      obj.email = this.selectedUser;

      // 이메일 확인을 위한 알림 표시
      Swal.fire({
        title: "이메일 확인",
        text: obj.email + " 회원 정보를 조회합니다.",
        icon: "info",
        confirmButtonText: "확인",
      });

      axios
        .post("http://localhost:3000/getSelectUserPost", obj)
        .then((res) => {
          if (res.data && res.data.data && res.data.data.length > 0) {
            // 회원 정보 조회 성공
            this.list.nickname = res.data.data[0].nickname;
            this.list.score = res.data.data[0].score;
            this.list.user_rank = res.data.data[0].user_rank;
            this.list.point = res.data.data[0].point;

            // 조회 결과를 알림으로 표시
            Swal.fire({
              title: "회원 정보",
              html: `
            <p><strong>닉네임:</strong> ${this.list.nickname}</p>
            <p><strong>점수:</strong> ${this.list.score}</p>
            <p><strong>회원 레벨:</strong> ${this.list.user_rank}</p>
            <p><strong>포인트:</strong> ${this.list.point}</p>
          `,
              icon: "success",
              confirmButtonText: "확인",
            });
          } else {
            // 회원 정보가 없는 경우
            Swal.fire({
              title: "회원 정보 없음",
              text: "해당하는 회원 정보가 없습니다.",
              icon: "warning",
              confirmButtonText: "확인",
            });
          }
        })
        .catch((error) => {
          // 요청 실패 처리
          console.error("회원 조회 요청 실패:", error);
          Swal.fire({
            title: "오류",
            text: "회원 정보를 조회하는 도중 오류가 발생했습니다.",
            icon: "error",
            confirmButtonText: "확인",
          });
        });
    },
    SystemRegister() {
      let obj = {};
      obj.selectSystem = this.selectSystem;
      obj.up = this.up;

      axios
        .post("http://localhost:3000/SystemRegister", obj)
        .then((res) => {
          console.log(res.data);
          // 성공적으로 등록되었다는 SweetAlert2 알림 메시지 표시
          Swal.fire({
            title: "등록 성공",
            text: "시스템이 성공적으로 등록되었습니다.",
            icon: "success",
            confirmButtonText: "확인",
          });
        })
        .catch((error) => {
          console.error("시스템 등록 중 오류 발생:", error);
          // 오류 발생 시 SweetAlert2로 오류 메시지 표시
          Swal.fire({
            title: "오류",
            text: "시스템을 등록하는 중 오류가 발생했습니다. 다시 시도해주세요.",
            icon: "error",
            confirmButtonText: "확인",
          });
        });
    },
  },
  components: {},
};
</script>
<style scoped>
body {
  background-image: url("@/assets/관리자.png") !important;
  background-size: cover;
  background-position: center;
}

body {
  background-color: rgb(222, 241, 209);
}

.cards-container {
  display: flex;
  flex-wrap: wrap; /* 여러 줄로 카드를 배치하기 위해 */
  justify-content: center; /* 카드를 수평 중앙에 위치시킴 */
  margin: 20px auto; /* 위아래 여백을 20px로 설정하고 좌우 여백은 자동으로 설정하여 가운데 정렬 */
  max-width: 2000px; /* 카드 컨테이너 최대 폭 설정 */
}

.card {
  width: 350px !important; /* 카드의 너비 */
  margin-bottom: 80px; /* 카드 간의 아래쪽 여백을 30px로 설정 */
  margin-right: 100px;
}

.card-body {
  padding: 20px; /* 카드 본문의 패딩을 20px로 설정 */
}

.card-img-top {
  width: 100%; /* 이미지의 너비를 100%로 설정하여 카드의 가로폭에 맞게 조정 */
  height: 300px; /* 이미지의 높이를 자동으로 설정하여 가로세로 비율을 유지 */
}

.ranking-title-container {
  display: block;
  text-align: center; /* 언더라인을 중앙 정렬하기 위해 텍스트를 중앙 정렬 */
}

.ranking-title {
  font-size: 48px; /* 글씨 크기를 48px로 설정 */
  color: #333; /* 글씨 색상을 어두운 회색으로 설정 */
  margin-top: 0px; /* 상단 마진 조정 */
  margin-bottom: 10px; /* 하단 마진 조정 */
  text-align: left; /* 텍스트를 다시 좌측 정렬로 설정 */
  padding-left: 200px; /* 좌측 여백 설정 */
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1); /* 글씨에 그림자 효과 추가 */
  position: relative; /* 상대 위치 설정 */
}

.ranking-title::after {
  content: ""; /* 가상 요소를 생성 */
  display: block;
  width: 90%; /* 언더라인의 너비를 조정하여 중앙 정렬 */
  height: 3px; /* 언더라인의 두께 설정 */
  background-color: #3da142; /* 언더라인 색상 설정 */
  position: absolute; /* 절대 위치 설정 */
  bottom: -2px; /* 아래쪽 여백 조정 */
  left: 5%; /* 가운데 정렬을 위해 왼쪽 위치 조정 */
}
</style>