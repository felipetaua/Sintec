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
  },
  // Adicionando as novas questões
  {
    question: "Qual é o maior planeta do nosso sistema solar?",
    options: ["Júpiter", "Saturno", "Marte", "Terra"],
    correct: 0 // Júpiter
  },
  {
    question: "Qual é a capital do Japão?",
    options: ["Pequim", "Seul", "Tóquio", "Bangcoc"],
    correct: 2 // Tóquio
  },
  {
    question: "Quem é o autor de 'Dom Quixote'?",
    options: ["J.K. Rowling", "Miguel de Cervantes", "Shakespeare", "Mark Twain"],
    correct: 1 // Miguel de Cervantes
  },
  {
    question: "Em que ano o homem foi à Lua pela primeira vez?",
    options: ["1960", "1969", "1971", "1980"],
    correct: 1 // 1969
  },
  {
    question: "Qual é o elemento químico com o símbolo O?",
    options: ["Ouro", "Oxigênio", "Osmium", "Ósmio"],
    correct: 1 // Oxigênio
  },
  {
    question: "Quem é o fundador da Microsoft?",
    options: ["Mark Zuckerberg", "Steve Jobs", "Bill Gates", "Larry Page"],
    correct: 2 // Bill Gates
  },
  {
    question: "Qual é a capital da França?",
    options: ["Londres", "Paris", "Roma", "Berlim"],
    correct: 1 // Paris
  },
  {
    question: "Qual é o número atômico do hidrogênio?",
    options: ["1", "2", "3", "4"],
    correct: 0 // 1
  },
  {
    question: "Qual é o maior oceano do mundo?",
    options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
    correct: 2 // Pacífico
  },
  {
    question: "Qual é a fórmula da água?",
    options: ["CO2", "H2O", "O2", "H2O2"],
    correct: 1 // H2O
  },
  {
    question: "Qual é a moeda usada no Japão?",
    options: ["Yuan", "Won", "Iene", "Baht"],
    correct: 2 // Iene
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
    correct: 2 // Leonardo da Vinci
  },
  {
    question: "Qual é o continente que contém o país Brasil?",
    options: ["África", "América", "Ásia", "Europa"],
    correct: 1 // América
  },
  {
    question: "Qual é o nome do primeiro filme de Star Wars?",
    options: ["O Império Contra-Ataca", "Uma Nova Esperança", "O Retorno de Jedi", "A Ameaça Fantasma"],
    correct: 1 // Uma Nova Esperança
  },
  {
    question: "Quem foi o primeiro presidente dos Estados Unidos?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    correct: 1 // George Washington
  },
  {
    question: "Quantos continentes existem no mundo?",
    options: ["5", "6", "7", "8"],
    correct: 2 // 7
  },
  {
    question: "Qual é o maior deserto do mundo?",
    options: ["Sahara", "Gobi", "Kalahari", "Antártico"],
    correct: 3 // Antártico
  },
  {
    question: "Qual é o símbolo químico do ouro?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correct: 0 // Au
  },
  {
    question: "Em que ano a Segunda Guerra Mundial terminou?",
    options: ["1940", "1943", "1945", "1950"],
    correct: 2 // 1945
  },
  {
    question: "Qual é o nome da galáxia em que a Terra está localizada?",
    options: ["Via Láctea", "Andrômeda", "Sombrero", "Catafracto"],
    correct: 0 // Via Láctea
  },
  {
    question: "Quem foi o responsável por descobrir a penicilina?",
    options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Galileu Galilei"],
    correct: 2 // Alexander Fleming
  },
  {
    question: "Qual é a moeda oficial dos Estados Unidos?",
    options: ["Euro", "Dólar", "Libra", "Iene"],
    correct: 1 // Dólar
  },
  {
    question: "Qual é o maior animal terrestre?",
    options: ["Elefante", "Girafa", "Baleia Azul", "Rinoceronte"],
    correct: 0 // Elefante
  },
  {
    question: "Qual é o nome do físico famoso que formulou a teoria da relatividade?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"],
    correct: 1 // Albert Einstein
  },
  {
    question: "Qual é o nome do maior rio do mundo?",
    options: ["Rio Amazonas", "Rio Nilo", "Rio Yangtze", "Rio Mississippi"],
    correct: 0 // Rio Amazonas
  },
  {
    question: "Qual é a montanha mais alta do mundo?",
    options: ["Monte Everest", "K2", "Mont Blanc", "Annapurna"],
    correct: 0 // Monte Everest
  },
  {
    question: "Em que país a Torre Eiffel está localizada?",
    options: ["França", "Espanha", "Itália", "Alemanha"],
    correct: 0 // França
  },
  {
    question: "Quem escreveu 'Harry Potter'?",
    options: ["J.K. Rowling", "George R.R. Martin", "C.S. Lewis", "J.R.R. Tolkien"],
    correct: 0 // J.K. Rowling
  },
  {
    question: "Qual é a maior espécie de tubarão?",
    options: ["Tubarão Branco", "Tubarão Baleia", "Tubarão Martelo", "Tubarão Tigre"],
    correct: 1 // Tubarão Baleia
  },
  {
    question: "Qual é o nome da maior ilha do mundo?",
    options: ["Grã-Bretanha", "Borneo", "Greenland", "Nova Guiné"],
    correct: 2 // Greenland
  },
  {
    question: "Em que cidade se encontra o Coliseu?",
    options: ["Roma", "Atenas", "Paris", "Berlim"],
    correct: 0 // Roma
  },
  {
    question: "Qual é o nome da maior cidade do mundo em termos de população?",
    options: ["Tóquio", "Nova York", "Pequim", "Mumbai"],
    correct: 0 // Tóquio
  },
  {
    question: "Qual é o nome do planeta mais próximo do sol?",
    options: ["Mercúrio", "Vênus", "Terra", "Marte"],
    correct: 0 // Mercúrio
  },
  {
    question: "Qual é o maior peixe do mundo?",
    options: ["Tubarão Baleia", "Baleia Azul", "Baleia Jubarte", "Peixe-boi"],
    correct: 0 // Tubarão Baleia
  },
  {
    question: "Quantos planetas existem no nosso sistema solar?",
    options: ["7", "8", "9", "10"],
    correct: 1 // 8
  },
  {
    question: "Quem foi o cientista que formulou as leis do movimento?",
    options: ["Isaac Newton", "Galileu Galilei", "Nikola Tesla", "Michael Faraday"],
    correct: 0 // Isaac Newton
  },
  {
    question: "Quem é o atual presidente dos Estados Unidos?",
    options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
    correct: 2 // Joe Biden
  },
  {
    question: "Qual é a principal função das folhas das plantas?",
    options: ["Respiração", "Transporte de nutrientes", "Fotossíntese", "Reprodução"],
    correct: 2 // Fotossíntese
  },
  {
    question: "Qual é o símbolo químico do ferro?",
    options: ["Fe", "F", "FeO", "Fe2O3"],
    correct: 0 // Fe
  },
  {
    question: "Qual é o nome do maior vulcão do mundo?",
    options: ["Monte Etna", "Monte Fuji", "Mauna Loa", "Vesuvius"],
    correct: 2 // Mauna Loa
  },
  {
    question: "Em que continente está o deserto do Saara?",
    options: ["África", "Ásia", "América", "Oceania"],
    correct: 0 // África
  },
  {
    question: "Qual é a distância média da Terra ao Sol?",
    options: ["150 milhões de quilômetros", "100 milhões de quilômetros", "200 milhões de quilômetros", "50 milhões de quilômetros"],
    correct: 0 // 150 milhões de quilômetros
  },
  {
    question: "Qual é o país mais populoso do mundo?",
    options: ["Índia", "Estados Unidos", "China", "Brasil"],
    correct: 2 // China
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

// Embaralha as perguntas aleatoriamente
function shuffleQuestions() {
  for (let i = quizData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizData[i], quizData[j]] = [quizData[j], quizData[i]]; // Troca os elementos
  }
}

// Inicializa o quiz
shuffleQuestions();
loadQuestion();
