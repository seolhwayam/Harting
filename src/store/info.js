import { createStore } from 'vuex'

const store = createStore( {
    state: { 
        NoteBoardIndex : null,
        kakaoUserInfo: null, // 카카오 로그인 정보를 저장할 상태
        QuizId: null,
        upPointNote:'0',
        upPointLeverUp:'0',
        upPointCheck:'0',
        upScore:'0',
        NoticeBoardIndex: null

    },
    mutations: { 
        setNoteIndex(state, index) {
            console.log(state);
            state.NoteBoardIndex=index;
        },
        setKakaoUserInfo(state, userInfo) {
            state.kakaoUserInfo = userInfo;
          },
        setQuizIndex(state, index) {
            state.QuizId = index;
        },
        setupPointNote(state, point) {
            state.upPointNote = point;
        },
        setupPointLeverUp(state, point) {
            state.upPointLeverUp = point;
        },
        setupPointCheck(state, point) {
            state.upPointCheck = point;
        },
        setupScore(state, score) {
            state.upScore = score;
        },
        setNoticeBoardIndex(state, index) {
            state.NoticeBoardIndex = index;
        }
    },
    getters: {
        getNoteBoardIndex(state){
            return state.NoteBoardIndex;
        },
        getKakaoUserInfo(state){
            return state.kakaoUserInfo;
        },
        getQuizIndex(state){
            return state.QuizId;
        },
        getupPointNote(state){
            return state.upPointNote;
        },
        getupPointLeverUp(state){
            return state. upPointLeverUp;
        },
        getupPointCheck(state){
            return state. upPointCheck;
        },
        getupScore(state){
            return state.upScore;
        },
        getNoticeBoardIndex(state){
            return state.NoticeBoardIndex;
        }

    }
})
export default store;

