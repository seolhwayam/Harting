<template>
 <h1>다크 다크 모드 모드</h1>
<span>화이트</span>
  <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      모달 열기
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">설정</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div class="modal-body">
            화면모드 <br>
            <input type="radio" id="darkMode" value="dark" name="mode" v-model="mode">dark 모드
            <input type="radio" id="lightMode" value="light" name="mode" v-model="mode">light 모드
            <br>
            <br>
            음악설정 <br>
            <input type="radio" id="musicOn" value="on" name="music" v-model="music">on
            <input type="radio" id="musicOff" value="off" name="music" v-model="music">off
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary" @click="applySettings">변경하기</button>
            </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: 'App',
  data() {
    return {
      mode: 'light', // 'dark' 또는 'light' 값을 가질 수 있는 모드 상태
      music: 'off', // 'on' 또는 'off' 값을 가질 수 있는 음악 상태
      audio: new Audio('/calm.mp3'), // 프로젝트의 public 폴더 안에 calm.mp3 파일이 있다고 가정합니다. 보안상 public 폴더 상대경로
    };
  },
 methods: {
    applySettings() {
      this.applyMode();
      this.applyMusic();
    },
    applyMode() {
      if (this.mode === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
    applyMusic() {
      if (this.music === 'on') {
        this.audio.play(); // 음악 재생
      } else {
        this.audio.pause(); // 음악 정지
        this.audio.currentTime = 0; // 음악 위치를 시작으로 초기화
      }
    },
  },
};
</script>

<style> 
.dark-mode, .dark-mode * {
  background-color: #121212; 
  color: white
}

</style>
