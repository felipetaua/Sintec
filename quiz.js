const quizData = [
  {
    question: "Qual empresa foi a primeira a lançar um smartphone?",
    options: ["Apple", "IBM", "Nokia", "Samsung"],
    correct: 1 // IBM
  },
  {
    question: "Qual linguagem de programação é conhecida como 'a linguagem da web'?",
    options: ["Python", "JavaScript", "C++", "Ruby"],
    correct: 1 // JavaScript
  },
  {
    question: "Qual é o sistema operacional mais utilizado no mundo?",
    options: ["Linux", "Windows", "macOS", "Android"],
    correct: 1 // Windows
  },
  {
    question: "Em que ano o primeiro computador foi inventado?",
    options: ["1943", "1950", "1936", "1965"],
    correct: 2 // 1936
  },
  {
    question: "O que significa HTTP?",
    options: [
      "HyperText Transfer Protocol",
      "HyperTransfer Text Protocol",
      "High Text Transmission Protocol",
      "High Transfer Text Protocol"
    ],
    correct: 0 // HyperText Transfer Protocol
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextButton = document.getElementById("next");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  current.options.forEach((option, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    li.appendChild(button);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].correct;
  if (selected === correct) {
    score++;
    resultEl.textContent = "Correto!";
    resultEl.style.color = "#28a745";
  } else {
    resultEl.textContent = "Errado!";
    resultEl.style.color = "#dc3545";
  }
  resultEl.style.display = "block";
  nextButton.style.display = "inline-block";
}

nextButton.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    resultEl.style.display = "none";
    nextButton.style.display = "none";
    loadQuestion();
  } else {
    showFinalScore();
  }
};

function showFinalScore() {
  questionEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
  optionsEl.innerHTML = "";
  nextButton.style.display = "none";
  resultEl.style.display = "none";
}

loadQuestion();

