<template>
  <div id="quiz-container">
    <!-- 퀴즈 진행 중인 경우 -->
    <div v-if="!quizEnded">
      <h1>{{ currentQuestion.question }}</h1>
      <ul id="answer-buttons">
        <li v-for="(answer, index) in currentQuestion.answers" :key="index">
          <button 
            :class="{selected: selectedAnswer === index,
            correct: showResults && isCorrect(index),
            wrong: showResults && isWrong(index)}"
            @click="selectAnswer(index)">
            {{ answer.text }}
          </button>
        </li>
      </ul>
      <div id="control-buttons">
        <button id="prev-button" @click="prevQuestion" v-if="currentQuestionIndex > 0">이전 질문</button>
        <button id="submit-button" @click="submitAnswer">제출하기</button>
        <button id="next-button" @click="nextQuestion" v-if="!quizEnded">다음 질문</button>
      </div>
      <div id="result">{{ resultMessage }}</div>
    </div>

    <!-- 퀴즈 종료 메시지 -->
    <div v-else>
      <h1>퀴즈 종료!</h1>
      <p>총 {{ questions.length }}문제 중 {{ correctCount }}문제를 맞추셨습니다!</p>
    </div>
  </div>
</template>



<script>
export default {
  name: 'QuizApp',
  data() {
    return {
      currentQuestionIndex: 0,
      selectedAnswer: null,
      resultMessage: '',
      showResults: false,
      quizEnded: false, // 결과를 표시할지 결정하는 플래그
      correctCount: 0,
      
      questions: [
        {
          question: "HTML은 무엇의 약자인가요?",
          answers: [
            { text: "Hyper Trainer Marking Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Marketing Language", correct: false },
            { text: "Hyper Text Markup Leveler", correct: false }
          ]
        },
        {
          question: "CSS는 무엇의 약자인가요?",
          answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computing Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
          ]
        },
        {
          question: "JavaScript에서 'null'과 'undefined'의 차이점은 무엇인가요?",
          answers: [
            { "text": "'null'은 값이 없음을 의도적으로 표현한 것이고, 'undefined'는 값을 할당받지 않은 변수를 의미합니다.", correct: true },
            { "text": "둘 다 값이 없음을 의미합니다.", correct: false},
            { "text": "'undefined'은 값이 없음을 의도적으로 표현한 것이고, 'null'은 값을 할당받지 않은 변수를 의미합니다.", correct: false },
            { "text": "둘 다 같은 의미입니다.", correct: false}
          ]
        },
        {
          question: "Vue.js 인스턴스의 생명주기에서 created() 훅은 언제 호출됩니까?",
          answers: [
            { "text": "DOM이 마운트되기 전", correct: true },
            { "text": "DOM이 마운트된 후", correct: false },
            { "text": "데이터가 변경될 때마다", correct: false },
            { "text": "컴포넌트가 파괴될 때", correct: false }
          ]
        },
 {
          question: "JS LV 0 - 1번 변수를 선언하는 올바른 방법은?",
          answers: [
            { "text": "int value", correct: false },
            { "text": "variable value", correct: false },
            { "text": "let value", correct: true },
            { "text": "dim value", correct: false }
          ]
        },
         {
          question: "JS LV 0 - 2번 만약 변수 x의 값이 4라고 가정하자. 'document.write(x++);' 문장이 실행된다면 브라우저에 표기되는 값은 얼마인가?",
          answers: [
            { "text": "4", correct: true },
            { "text": "5", correct: false },
            { "text": "3", correct: false },
            { "text": "undefined", correct: false }
          ]
        },
         {
          question: "JS LV 1 - 1번 객체를 생성하는 키워드는?",
          answers: [
            { "text": "instance", correct: false },
            { "text": "object", correct: false },
            { "text": "new", correct: true },
            { "text": "create", correct: false }
          ]
        },
         {
          question: "JS LV 1 - 2번 객체에 존재하지 않은 속성을 꺼내려고 하면 어떤 값이 반환되는가?",
          answers: [
            { "text": "null", correct: false },
            { "text": "undefined", correct: true },
            { "text": "-1", correct: false },
            { "text": "0", correct: false }
          ]
        },
         {
          question: "JS LV 2 - 1번 웹브라우저 객체 모델인 BOM에 존재하는 객체 중에서 최상위 객체는?",
          answers: [
            { "text": "navigator", correct: false },
            { "text": "window", correct: true },
            { "text": "frame", correct: false },
            { "text": "document", correct: false }
          ]
        },
         {
          question: "JS LV 2 - 2번 어떤 함수를 1초에 한 번씩 주기적으로 호출하려고 한다. 사용해야 되는 함수는?",
          answers: [
            { "text": "onSetInterval()", correct: false },
            { "text": "setInterval()", correct: true },
            { "text": "onSetTimeout()", correct: false },
            { "text": "setTimeout()", correct: false }
          ]
        },

        {
          question: "JS LV 2 - 2번 어떤 함수를 1초에 한 번씩 주기적으로 호출하려고 한다. 사용해야 되는 함수는?",
          answers: [
            { "text": "onSetInterval()", correct: false },
            { "text": "setInterval()", correct: true },
            { "text": "onSetTimeout()", correct: false },
            { "text": "setTimeout()", correct: false }
          ]
        }

      ]
    };
  },
  computed: {
  currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
},
methods: {
  isCorrect(index) {
    return this.selectedAnswer !== null && this.currentQuestion.answers[index].correct;
  },
  isWrong(index) {
    return this.selectedAnswer !== null && !this.currentQuestion.answers[index].correct;
  },
  selectAnswer(index) {
      this.selectedAnswer = index;
  },
  submitAnswer() {
    if (this.selectedAnswer !== null) {
      const isCorrect = this.isCorrect(this.selectedAnswer);
      this.resultMessage = isCorrect ? "정답입니다!" : "오답입니다!";
      this.showResults = true;
      if (isCorrect) {
        this.correctCount++;
      }
    } else {
      alert("답변을 선택해주세요.");
    }
  },
  // 나머지 메소드..

  nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.resetQuiz();
      } else {
        this.quizEnded = true;
      }
    },

    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.resetQuiz();
      }
    },
    resetQuiz() {
      this.selectedAnswer = null;
      this.showResults = false;
      this.resultMessage = '';
    }
  }
}
</script>



<style>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #e9ecef;
}

#quiz-container {
    background: white;
    padding: 60px;
    border-radius: 20px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 1200px;
    min-height: 600px;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#answer-buttons button {
    display: block;
    width: 100%;
    margin: 15px 0;
    padding: 20px;
    font-size: 24px;
    background-color: #f8f9fa;
    color: #333;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

#answer-buttons button:hover {
    background-color: #e2e6ea;
}

#answer-buttons button.selected {
    background-color: #d1e7dd;
    border-color: #badbcc;
}

#control-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

#prev-button, #next-button, #submit-button {
    padding: 20px 40px;
    font-size: 22px;
    background-color: #0d6efd;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

#submit-button {
    background-color: #28a745;  /* Submit button with a distinct color */
}

#result {
    margin-top: 30px;
    font-size: 32px;
    color: #198754;
    transition: color 0.5s ease;
}

#answer-buttons button.correct {
    background-color: #28a745;
    color: white;
    transition-delay: 0.5s;
}

#answer-buttons button.wrong {
    background-color: #dc3545;
    color: white;
    transition-delay: 0.5s;
}
</style>

