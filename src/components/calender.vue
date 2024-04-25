<template>
  <div id="app">
    <div class="ranking-title-container">
      <h1 class="ranking-title">출석체크</h1>
    </div>
    <br />

    <v-calendar
      :attributes="attributes"
      @dayclick="toggleAttendance"
      :style="{ width: '100%', height: '650px' }"
    ></v-calendar>
  </div>
</template>
<script>
import { Calendar } from "v-calendar";
import axios from "axios";
export default {
  name: "AttendanceCalendar",
  components: {
    VCalendar: Calendar,
  },
  data() {
    return {
      attendance: {},
      upPoint:''
    };
  },
  computed: {
    attributes() {
      return Object.keys(this.attendance).map((date) => ({
        key: date,
        dates: date,
        highlight: {
          backgroundColor: this.attendance[date] ? "#9CCC65" : "#FF8A65",
        },
        popover: {
          label: this.attendance[date] ? "출석" : "결석",
        },
      }));
    },
  },
  methods: {
    toggleAttendance(day) {
      // 날짜 객체에서 로컬 시간대로 조정하여 정확한 날짜를 얻는 함수
      const getLocalDateStr = (date) => {
        const tzOffset = date.getTimezoneOffset() * 60000; // 타임존 오프셋을 밀리초 단위로 계산
        const localISOTime = new Date(date - tzOffset)
          .toISOString()
          .split("T")[0]; // 로컬 시간대의 날짜
        return localISOTime;
      };
      const dateString = getLocalDateStr(day.date); // 날짜를 YYYY-MM-DD 형식으로 변환
      this.attendance[dateString] = !this.attendance[dateString]; // 출석 상태 토글
      alert(
        `출석체크: ${
          this.attendance[dateString] ? "출석입니다!" : "결석입니다!"
        }`
      );
      this.getPoint();
      

    },
    async getPoint(){  // 증가할 점수 가져오기
      await axios.get("http://localhost:3000/getSystem_settings")
      .then(res =>{
        let data = res.data.data;
        this.upPoint = data[0].upPointCheck; //업데이트할 점수 보관
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
        alert("출석 포인트" +  this.upPoint + "를 획득하였습니다!")
    }

    }
  
};
</script>
<style scoped>
#app {
  width: 1200px;
  height: auto;
  margin: 40px auto;
  text-align: center;
}
::v-deep .vc-container {
  min-height: 650px;
}
::v-deep .vc-day-content {
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
::v-deep .vc-day-selected,
::v-deep .vc-day-today {
  border: 2px solid blue;
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