<template>

<center>
  <br><br>
<div class="ranking-title-container">
  <h1 class="ranking-title">랭킹</h1>
</div> <br>
<div class="circle">
   <div class="icon-and-time">
 <p class="datetime">{{ currentDate }} <br> {{ currentTime }}</p>
   </div>
</div>
</center>
 <table class="table table-hover" >
  <thead>
    <tr>
      <th></th>
      <th scope="col">순위</th>
      <th scope="col">이름</th>
      <th scope="col">LV</th>
      <th scope="col">점수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td><img src="@/assets/금메달.png" alt="금" class="medal-icon"></td>
      <td>{{userData[0].nickname}}</td>
      <td>Lv{{userData[0].user_rank}}</td>
      <td>{{userData[0].score}}</td>
    </tr>
    <tr>
      <td></td>
      <td><img src="@/assets/은메달.png" alt="은" class="medal-icon"></td>
      <td>{{userData[1].nickname}}</td>
      <td>Lv{{userData[1].user_rank}}</td>
      <td>{{userData[1].score}}</td>
    </tr>
    <tr>
      <td></td>
       <td><img src="@/assets/동메달.png" alt="동" class="medal-icon"></td>
      <td>{{userData[2].nickname}}</td>
      <td>Lv{{userData[2].user_rank}}</td>
      <td>{{userData[2].score}}</td>
    </tr>

    <tr>
      <td></td>
      <td>&nbsp;&nbsp;&nbsp;4</td>
      <td>{{userData[3].nickname}}</td>
      <td> Lv{{userData[3].user_rank}}</td>
      <td>{{userData[3].score}}</td>
    </tr>
    <tr>
      <td></td>
      <td>&nbsp;&nbsp;&nbsp;5</td>
      <td>{{userData[4].nickname}}</td>
      <td> Lv{{userData[4].user_rank}}</td>
      <td>{{userData[4].score}}</td>
    </tr>
    <tr>
  <td colspan="5"  style="text-align: center;">
   ............
  </td>
</tr>

   <tr>
  <td colspan="5" style="text-align: center; background-color: #ecd889;" >
   <!--나의 순위는???&nbsp;&nbsp;&nbsp;100위-->
   <img src="@/assets/변경.png" alt="동" class="medal-icon">나의 순위 {{myRank}} 위
  </td>
</tr>
  </tbody>
</table>
<center> <br><br>

</center>

</template>
<script>
 import axios from 'axios'
  export default {
  name: 'App',
  data() {
  return {
    currentDate: '',
    currentTime: '',
    myRank: '',
    userData: [{nickname:'',user_rank:'',score:''},
                {nickname:'',user_rank:'',score:''},
                {nickname:'',user_rank:'',score:''},
                {nickname:'',user_rank:'',score:''},
                {nickname:'',user_rank:'',score:''}
    ] // 빈 배열로 초기화
  }
},

  mounted() {
    this.getCurrentDateTime();
    setInterval(this.getCurrentDateTime, 1000); // 1초마다 현재 시간 업데이트
    
  },
 created(){
    this.getRangking();
    this.getMyRanking(); // 메서드를 호출하기 위해 괄호를 추가합니다
},

  methods: {
    getCurrentDateTime() {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      this.currentDate = now.toLocaleDateString('ko-KR', options);
      this.currentTime = now.toLocaleTimeString('ko-KR');
    },
    getRangking(){
        axios.post("http://localhost:3000/getRangking")
        .then(res =>{
             console.log(res.data);
             this.userData = res.data.data;
        })
    },
    getMyRanking(){
      let obj={};
      obj.email = this.$store.getters.getKakaoUserInfo.email;
       axios.post("http://localhost:3000/getMyRangking",obj)
        .then(res =>{
            console.log(res.data);
            let data = res.data.data;
            this.myRank = data[0].my_rank;
        })
    }

  }
}
</script>
<style scoped>


.table {
  max-width: 2000px; /* 테이블의 최대 너비를 960px로 설정 */
  width: 100%; /* 부모 요소에 대해 가능한 전체 너비를 사용 */
  margin: auto; /* 가운데 정렬을 위한 마진 설정 */
  font-size: 28px; /* 전체 테이블의 기본 글씨 크기를 늘림 */
}

.table thead th {
  background-color: #E9ECEF; /* 테이블 헤더의 배경색 */
  color: #495057; /* 테이블 헤더의 글자색 */
  border-bottom: 2px solid #DEE2E6; /* 테이블 헤더 하단 선의 색과 두께 */
  padding: 20px; /* 헤더 셀 내부 여백 */
  padding: 20px; /* 헤더 셀 내부 여백을 늘림 */
  font-size: 25x; /* 테이블 헤더의 글씨 크기를 늘림 */
}

.table tbody tr {
  background-color: #FFFFFF; /* 테이블 바디 행의 배경색 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* 각 행에 그림자 효과 */
   height: 80px; /* 각 행의 높이를 70픽셀로 설정 */
}

.table tbody td {
  padding: 20px; /* 바디 셀 내부 여백 */
  border-bottom: 1px solid #DEE2E6; /* 바디 셀 하단 선의 색과 두께 */
  padding: 20px; /* 바디 셀 내부 여백을 늘림 */
  font-size: 22px; /* 셀 내 글씨 크기를 늘림 */
}

.table tbody tr:last-child td {
  border-bottom: none; /* 마지막 행의 바디 셀 하단 선 제거 */
}

/* 테이블의 첫번째 컬럼 스타일링 */
.table tbody tr td:first-child {
  border-top-left-radius: 20px; /* 첫번째 셀의 왼쪽 상단 둥근 모서리 */
  border-bottom-left-radius: 20px; /* 첫번째 셀의 왼쪽 하단 둥근 모서리 */
}

/* 테이블의 마지막 컬럼 스타일링 */
.table tbody tr td:last-child {
  border-top-right-radius: 20px; /* 마지막 셀의 오른쪽 상단 둥근 모서리 */
  border-bottom-right-radius: 20px; /* 마지막 셀의 오른쪽 하단 둥근 모서리 */
}

body {
  background-color: #F5EDCD; /* 전체 화면의 배경색 */
}
.circle {   /*시간 나오는 영역 꾸미기*/
  width: 1050px;
  height: 130px;
  background: linear-gradient(to right, #56CCF2, #2F80ED); /* 파란색 그라데이션 */
  border-radius: 65px; /* 원형 모양을 위해 height의 절반 */
  border: none; /* 테두리 제거 */
  margin-top: 20px; /* 테이블과 간격 조절 */
  margin-bottom: 50px; /* 테이블과 간격 조절 */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
  line-height: 40px;
}


/* 테이블 행 호버 효과 */
.table tbody tr:hover {
  background-color: #f0f0f0; /* 마우스 오버시 배경색 변경 */
  transform: scale(1.005); /* 약간 확대 */
  transition: transform 0.3s ease-in-out; /* 부드러운 전환 효과 */
}

/* 원(circle)에 로딩 애니메이션 추가 */
@keyframes loadingAnimation {
  0% { background-position: 0 0; }
  100% { background-position: 100% 0; }
}

.icon-and-time {
  display: flex;
  align-items: center;
}

.datetime {
  color: white;
  font-size: 28px; /* 폰트 크기 조절 */
  font-weight: bold;
  margin-left: 15px; /* 아이콘과의 간격 */
  margin-top: 12px;
}
/*메달아이콘 크기 수정*/
.medal-icon {
  width: 50px; /* 이미지의 너비를 30픽셀로 설정 */
  height: auto; /* 이미지의 높이를 비율에 맞게 자동으로 설정 */
  vertical-align: middle; /* 이미지를 세로 방향으로 중앙에 위치 */
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