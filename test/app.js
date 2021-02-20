const quiz = [
  {
    question: '2019-20プレミアリーグの優勝チームは？',
    answers: [
      'リヴァプール',
      'マンチェスター・シティ',
      'チェルシー',
      'レスター'
    ],
    correct: 'リヴァプール'
  }, {
    question: '2018-19プレミアリーグの優勝チームは？',
    answers: [
      'リヴァプール',
      'マンチェスター・シティ',
      'チェルシー',
      'レスター'
    ],
    correct: 'マンチェスター・シティ'
  }, {
    question: '2017-18プレミアリーグの優勝チームは？',
    answers: [
      'リヴァプール',
      'マンチェスター・シティ',
      'チェルシー',
      'レスター'
    ],
    correct: 'マンチェスター・シティ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $btn = document.getElementsByTagName('button');

//クイズの問題と回答
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  for(let i = 0; i < $btn.length; i++){
    $btn[i].textContent = quiz[quizIndex].answers[i];
  };
};
setupQuiz();

//正誤判定
const checkAnswer = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    alert('正解！');
    score++;
    
  } else {
    alert('不正解！');
  };

  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    alert(`終了!あなたの正解数は${score}/${quizLength}です`);
  };
};

//イベント
for (let i = 0; i < $btn.length; i++) {
  $btn[i].addEventListener('click', (e) => {
    checkAnswer(e);
  })  
};