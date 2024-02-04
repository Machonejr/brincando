const questions = [
  {
    question: "Qual é a capital de Moçambique?",
    answers: ["Maputo", "Beira", "Nampula"],
    correctIndex: 0
  },
  
     {
    question: "2 Qual é a capital de Moçambique?",
    answers: ["Maputo", "Beira", "Nampula"],
    correctIndex: 0
  },
     {
    question: "3Qual é a capital de Moçambique?",
    answers: ["Maputo", "Beira", "Nampula"],
    correctIndex: 0
  },
    // Add more questions here...
];

let currentQuestion = 0;
let timer;

function startQuiz() {
  displayQuestion();
}

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");

  questionElement.textContent = questions[currentQuestion].question;
  answersElement.innerHTML = "";

  questions[currentQuestion].answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.textContent = answer;
    li.onclick = () => checkAnswer(index);
    answersElement.appendChild(li);
  });

  nextBtn.style.display = "none";
  startTimer();
}

function startTimer() {
  let seconds = 5;
  const timerElement = document.getElementById("timer");

  timer = setInterval(() => {
    timerElement.textContent = `Tempo restante: ${seconds}s`;

    if (seconds === 0) {
      clearInterval(timer);
      showNextButton();
    }

    seconds--;
  }, 1000);
}

function checkAnswer(selectedIndex) {
  clearInterval(timer);

  if (selectedIndex === questions[currentQuestion].correctIndex) {
    alert("Resposta correta!");
  } else {
    alert("Resposta incorreta!");
  }

  showNextButton();
}

function showNextButton() {
  const nextBtn = document.getElementById("next-btn");
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    alert("Parabéns! Você concluiu o quiz.");
  }
}

// Start the quiz when the page loads
startQuiz();
