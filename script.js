let questions = [
  // Adding questions with categories here
  {
    category: 'sports',
    question: 'The Olympics are held every how many years ?',
    answers: [
      { text: '2 Years', correct: false },
      { text: '4 Years', correct: true },
      { text: '6 Years', correct: false },
      { text: '8 Years', correct: false },
    ],
  },

  {
    category: 'sports',
    question: 'What team won the very first NBA game in 1946 ?',
    answers: [
      { text: 'New York Knicks', correct: true },
      { text: 'Los Angeles Lakers', correct: false },
      { text: 'Golden State Warriors', correct: false },
      { text: 'Denver Nuggets', correct: false },
    ],
  },

  {
    category: 'sports',
    question: 'Who won the 2022 FIFA World Cup ?',
    answers: [
      { text: 'Brazil', correct: false },
      { text: 'France', correct: false },
      { text: 'Argentina', correct: true },
      { text: 'Italy', correct: false },
    ],
  },

  {
    category: 'sports',
    question: 'Which female tennis player won the most Grand Slam singles titles in the 2010s ?',
    answers: [
      { text: 'Serena Williams', correct: true },
      { text: 'Maria Sharapova', correct: false },
      { text: 'Simona Halep', correct: false },
      { text: 'Naomi Osaka', correct: false },
    ],
  },

  {
    category: 'sports',
    question: 'Which team won the Super Bowl in 2021 ?',
    answers: [
      { text: 'New England Patriots', correct: false },
      { text: 'Tampa Bay Buccaneers', correct: true },
      { text: 'Kansas City Chiefs', correct: false },
      { text: 'San Francisco 49ers', correct: false },
    ],
  },

  {
    category: 'science',
    question: 'How many elements are listed in the periodic table ?',
    answers: [
      { text: '45', correct: false },
      { text: '102', correct: false },
      { text: '64', correct: false },
      { text: '118', correct: true },
    ],
  },

  {
    category: 'science',
    question: 'Who developed the theory of general relativity ?',
    answers: [
      { text: 'Isaac Newton', correct: false },
      { text: 'Albert Einstein', correct: true },
      { text: 'Nikola Tesla', correct: false },
      { text: 'Stephen Hawking', correct: false },
    ],
  },

  {
    category: 'science',
    question: 'What type of animal is a dolphin ?',
    answers: [
      { text: 'Fish', correct: false },
      { text: 'Amphibian', correct: false },
      { text: 'Reptile', correct: false },
      { text: 'Mammal', correct: true },
    ],
  },

  {
    category: 'science',
    question: "What is the most abundant gas in the Earth's atmosphere ?",
    answers: [
      { text: 'Oxygen', correct: false },
      { text: 'Carbon Dioxide', correct: false },
      { text: 'Nitrogen', correct: true },
      { text: 'Hydrogen', correct: false },
    ],
  },

  {
    category: 'science',
    question: 'What is the chemical symbol for gold ?',
    answers: [
      { text: 'Au', correct: true },
      { text: 'Ag', correct: false },
      { text: 'Go', correct: false },
      { text: 'Gd', correct: false },
    ],
  },

  {
    category: 'music',
    question:
      'What singer has had a Billboard No. 1 hit in each of the last four decades ?',
    answers: [
      { text: 'Mariah Carey', correct: true },
      { text: 'Kelly Clarkson', correct: false },
      { text: 'Taylor Swift', correct: false },
      { text: 'Beyonce', correct: false },
    ],
  },

  {
    category: 'music',
    question:
      'Which artist is known for the hit song "Shape of You" ?',
    answers: [
      { text: 'Ed Sheeran', correct: true },
      { text: 'Justin Bieber', correct: false },
      { text: 'Shawn Mendes', correct: false },
      { text: 'Harry Styles', correct: false },
    ],
  },

  {
    category: 'music',
    question:
      'Which band wrote and performed "Bohemian Rhapsody" ?',
    answers: [
      { text: 'The Beatles', correct: false },
      { text: 'Pink Floyd', correct: false },
      { text: 'Queen', correct: true },
      { text: 'Led Zeppelin', correct: false },
    ],
  },

  {
    category: 'music',
    question:
      'What genre of music did artists like Duke Ellington and Louis Armstrong popularize ?',
    answers: [
      { text: 'Rock', correct: false },
      { text: 'Jazz', correct: true },
      { text: 'Blues', correct: false },
      { text: 'Pop', correct: false },
    ],
  },

  {
    category: 'music',
    question:
      'Who is known for the hit single "Old Town Road" ?',
    answers: [
      { text: 'Drake', correct: false },
      { text: 'Travis Scott', correct: false },
      { text: 'Lil Nas X', correct: true },
      { text: 'Post Malone', correct: false },
    ],
  },

  {
    category: 'history',
    question: 'The United States bought Alaska from which country ?',
    answers: [
      { text: 'India', correct: false },
      { text: 'Japan', correct: false },
      { text: 'Russia', correct: true },
      { text: 'Africa', correct: false },
    ],
  },

  {
    category: 'history',
    question: 'Which empire was ruled by emperors such as Julius Caesar and Augustus ?',
    answers: [
      { text: 'British Empire', correct: false },
      { text: 'Ottoman Empire', correct: false },
      { text: 'Roman Empire', correct: true },
      { text: 'Mongol Empire', correct: false },
    ],
  },

  {
    category: 'history',
    question: 'In what year did the Titanic sink ?',
    answers: [
      { text: '1905', correct: false },
      { text: '1912', correct: true },
      { text: '1920', correct: false },
      { text: '1931', correct: false },
    ],
  },

  {
    category: 'history',
    question: 'What event began on July 28, 1914, and lasted until November 11, 1918 ?',
    answers: [
      { text: 'The American Civil War', correct: false },
      { text: 'The Russian Revolution', correct: false },
      { text: 'The Great Depression', correct: false },
      { text: 'World War I', correct: true },
    ],
  },

  {
    category: 'history',
    question: 'What was the main reason for the construction of the Berlin Wall ?',
    answers: [
      { text: 'To protect against invasions', correct: false },
      { text: 'To prevent the spread of communism', correct: false },
      { text: 'To separate East and West Berlin', correct: true },
      { text: 'To create a tourist attraction', correct: false },
    ],
  },
];

let currentQuestionIndex;
let score = 0;
let timer;
let timeLeft = 15; // 15 seconds for each question
let selectedCategory;

document.querySelectorAll('.category-btn').forEach((button) => {
  button.addEventListener('click', function () {
    selectedCategory = this.dataset.category;
    startGame();
  });
});

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('score-container').style.display = 'block';
  document.getElementById('category-container').style.display = 'none'; // Hide category selection
  updateScoreDisplay();
  showQuestion();
}

function showQuestion() {
  resetState();
  let filteredQuestions = questions.filter(
    (q) => q.category === selectedCategory
  );
  if (currentQuestionIndex < filteredQuestions.length) {
    let question = filteredQuestions[currentQuestionIndex];
    let questionElement = document.getElementById('question-text');
    questionElement.innerText = question.question;

    question.answers.forEach((answer) => {
      let button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.dataset.correct = answer.correct;
      button.addEventListener('click', selectAnswer);
      document.getElementById('answer-buttons').appendChild(button);
    });

    startTimer();
  } else {
    endGame();
  }
}

function endGame() {
  console.log('Category complete! Your score: ' + score);
  // Hide the question and timer display
  document.getElementById('question-text').innerText = '';
  document.getElementById('timer').innerText = '';

  // Reset and show the category selection again
  document.getElementById('score-container').style.display = 'none';
  document.getElementById('category-container').style.display = 'block';

  // Reset the score display and other game state variables
  score = 0;
  currentQuestionIndex = 0;
  updateScoreDisplay();
}

function selectAnswer(e) {
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct === 'true';

    // Disable all buttons to prevent multiple answers
    Array.from(document.getElementsByClassName('btn')).forEach(button => {
        button.disabled = true;
    });

    if (correct) {
        selectedButton.classList.add('btn-correct');
        score++;
    } else {
        selectedButton.classList.add('btn-incorrect');
    }

    setTimeout(() => {
        selectedButton.classList.remove('btn-correct', 'btn-incorrect');
        // Re-enable buttons here if needed
    }, 2000);
  updateScoreDisplay();
  setTimeout(() => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      endGame();
    }
  }, 1000);
}

function updateScoreDisplay() {
  let scoreElement = document.getElementById('score');
  scoreElement.innerText = score;
}

function startTimer() {
  let timerElement = document.getElementById('timer');
  timerElement.innerText = `Time Left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeOut();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timeLeft = 15;
}

function handleTimeOut() {
  console.log("Time's up!");
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    endGame();
  }
}

function resetState() {
  document.getElementById('answer-buttons').innerHTML = '';
  stopTimer();
  timeLeft = 15;
  document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;
}

function setColor(element, correct) {
  if (correct) {
    element.classList.add('btn-correct');
  } else {
    element.classList.add('btn-incorrect');
  }
}
