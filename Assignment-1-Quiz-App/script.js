const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');

const questions = [
  {
    question: "Which is the largest mammal on Earth?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "What is the capital city of Canada?",
    options: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
    answer: "Ottawa"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Hg", "Fe"],
    answer: "Au"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "South Korea"],
    answer: "Japan"
  },
  { 
    question: "Who is the HOD of IT Department?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Goyal", "Dr. Vinay Kumar Saini"],
    answer: "Dr. Pooja Gupta"
  },
  { 
    question: "Who is the HOD of AIDS Department?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Goyal", "Dr. Vinay Kumar Saini"],
    answer: "Dr. Vinay Kumar Saini"
  },
  { 
    question: "Who is the HOD of CSE Department?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Gupta", "Dr. Vinay Kumar Saini"],
    answer: "Dr. Namita Gupta"
  },
  { 
    question: "Who is the Placement Officer of MAIT?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Goyal", "Amit Gautam"],
    answer: "Amit Gautam"
  },
  { 
    question: "How many libraries are there in MAIT?",
    options: ["1", "2", "4", "3"],
    answer: "1"
  },
];

const totalQuestions = questions.length;
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;

  optionsEl.innerHTML = '';
  question.options.forEach(option => {
    const optionBtn = document.createElement('button');
    optionBtn.textContent = option;
    optionBtn.classList.add('option');
    optionBtn.addEventListener('click', () => checkAnswer(option));
    optionsEl.appendChild(optionBtn);
  });

  // Update progress bar
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  progressBar.style.width = progress + '%';
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    score++;
    resultEl.textContent = "Correct!";
  } else {
    resultEl.textContent = "Incorrect!";
  }
  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    loadQuestion();
  } else {
    quizContainer.style.display = 'none';
    resultEl.textContent = `Quiz completed! Your final score is ${score}/${totalQuestions}`;
  }
}

loadQuestion();

submitBtn.addEventListener('click', () => {

});
