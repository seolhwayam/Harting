<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import "@/css/custom.css";
@import "@/css/bootstrap.min.css";
@import "@/font-awesome-4.7.0/css/font-awesome.min.css";
@import "@/css/aos.css";

.study-tip-container {
  display: block; /* 블록 레벨 요소로 변경 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

.study-tip {
  font-size: 24px; /* 텍스트 크기를 24px로 증가시킵니다 */
  border: none; /* 테두리를 추가하고 색상을 지정합니다 */
  border-radius: 10px; /* 테두리의 모서리를 둥글게 만듭니다 */
  padding: 10px; /* 텍스트 주위에 여백을 추가합니다 */
  background-color: #cbe7b3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과를 추가합니다 */
}

.underline {
  width: 100px; /* 밑줄의 길이 조절 */
  border-bottom: 5px solid rgb(206, 138, 49); /* 밑줄 스타일 */
  margin: 0 auto 5px;
}

.contents_title {
  font-size: 42px;
  color: #000;
  font-weight: 800;
  letter-spacing: -0.04em;
  text-align: center;
}

.contents_subtitle {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>