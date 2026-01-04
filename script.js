let words = [
  { word: "Happy", meaning: "आनंदी" },
  { word: "Fast", meaning: "जलद" },
  { word: "Strong", meaning: "मजबूत" }
];

let quiz = [
  {
    q: "Fast means?",
    options: ["जलद", "हळू"],
    correct: 0
  },
  {
    q: "Strong means?",
    options: ["कमकुवत", "मजबूत"],
    correct: 1
  }
];

let wordIndex = 0;
let quizIndex = 0;

// Load word
function loadWord() {
  document.getElementById("word").innerText = words[wordIndex].word;
  document.getElementById("meaning").innerText = words[wordIndex].meaning;
}

// Next word ONLY changes word
function nextWord() {
  wordIndex = (wordIndex + 1) % words.length;
  loadWord();
}

// Load quiz
function loadQuiz() {
  document.getElementById("question").innerText = quiz[quizIndex].q;
  document.getElementById("opt1").innerText = quiz[quizIndex].options[0];
  document.getElementById("opt2").innerText = quiz[quizIndex].options[1];
}

function checkAnswer(ans) {
  if (ans === quiz[quizIndex].correct) {
    alert("Correct ✅");
  } else {
    alert("Wrong ❌");
  }
  quizIndex = (quizIndex + 1) % quiz.length;
  loadQuiz();
}

// Initial load
loadWord();
loadQuiz();