let currentQuestion = 0;

function fetchRandomQuestions() {
    // Replace this array with an API call to fetch random questions dynamically
    return [
        {
            question: "Cite 3 cidades de Moçambique.",
            correctAnswer: ["Maputo", "Beira", "Nampula"],
        },
        // Add more questions as needed
    ];
}

function displayRandomQuestion() {
    const questions = fetchRandomQuestions();
    const questionElement = document.getElementById("question");
    const answerInput = document.getElementById("answer-input");
    const resultElement = document.getElementById("result");

    questionElement.textContent = questions[currentQuestion].question;
    answerInput.value = "";
    resultElement.textContent = "";
}

function checkAnswer() {
    const resultElement = document.getElementById("result");
    const userAnswer = document.getElementById("answer-input").value.trim().split(',').map(item => item.trim());
    const correctAnswer = fetchRandomQuestions()[currentQuestion].correctAnswer;

    const isCorrect = correctAnswer.every((item, index) => userAnswer[index] && item.toLowerCase() === userAnswer[index].toLowerCase());

    if (isCorrect) {
        resultElement.textContent = "Correto!";
    } else {
        resultElement.textContent = `Errado! A resposta correta é: ${correctAnswer.join(", ")}.`;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < fetchRandomQuestions().length) {
        displayRandomQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "<h2>Quiz Concluído!</h2>";
    }
}

// Initialize the quiz
displayRandomQuestion();