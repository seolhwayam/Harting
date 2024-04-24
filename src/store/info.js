import { createStore } from 'vuex'

const store = createStore( {
    state: { 
        NoteBoardIndex : null,
        kakaoUserInfo: null // 카카오 로그인 정보를 저장할 상태
    },
    mutations: { 
        setNoteIndex(state, index) {
            console.log(state);
            state.NoteBoardIndex=index;
        },
        setKakaoUserInfo(state, userInfo) {
            state.kakaoUserInfo = userInfo;
          }
    },
    getters: {
        getNoteBoardIndex(state){
            return state.NoteBoardㅊIndex;
        },
        getKakaoUserInfo(state){
            return state.kakaoUserInfo;
        }

    }
})
export default store;

