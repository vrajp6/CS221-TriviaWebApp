let questions = [
    // Adding questions with categories here
    { 
        category: "sports",
        question: "The Olympics are held every how many years ?",
        answers: [
            { text: "2 Years", correct: false },
            { text: "4 Years", correct: true },
            { text: "6 Years", correct: false },
            { text: "8 Years", correct: false },
        ]
    },

    { 
        category: "sports",
        question: "What team won the very first NBA game in 1946 ?",
        answers: [
            { text: "New York Knicks", correct: true },
            { text: "Los Angeles Lakers", correct: false },
            { text: "Golden State Warriors", correct: false },
            { text: "Denver Nuggets", correct: false },
        ]
    },

    { 
        category: "science",
        question: "How many elements are listed in the periodic table ?",
        answers: [
            { text: "45", correct: false },
            { text: "102", correct: false },
            { text: "64", correct: false },
            { text: "118", correct: true },
        ]
    },

    { 
        category: "music",
        question: "What singer has had a Billboard No. 1 hit in each of the last four decades ?",
        answers: [
            { text: "Mariah Carey", correct: true },
            { text: "Kelly Clarkson", correct: false },
            { text: "Taylor Swift", correct: false },
            { text: "Beyonce", correct: false },
        ]
    },

    { 
        category: "history",
        question: "The United States bought Alaska from which country ?",
        answers: [
            { text: "India", correct: false },
            { text: "Japan", correct: false },
            { text: "Russia", correct: true },
            { text: "Africa", correct: false },
        ]
    },
];

let currentQuestionIndex;
let score = 0;
let timer;
let timeLeft = 15; // 15 seconds for each question
let selectedCategory;

document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedCategory = this.dataset.category;
        startGame();
    });
});

function startGame() {
    currentQuestionIndex = 0;
    score = 0;

    let filteredQuestions = questions.filter(q => q.category === selectedCategory);
    shuffleArray(filteredQuestions); // Shuffle questions
    currentQuestionIndex = 0;
    
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('category-container').style.display = 'none'; // Hide category selection
    updateScoreDisplay();
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    resetState();
    let filteredQuestions = questions.filter(q => q.category === selectedCategory);
    if (currentQuestionIndex < filteredQuestions.length) {
        let question = filteredQuestions[currentQuestionIndex];
        let questionElement = document.getElementById('question-text');
        questionElement.innerText = question.question;

        question.answers.forEach(answer => {
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
    console.log("Category complete! Your score: " + score);
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
    
    Array.from(document.getElementsByClassName('btn')).forEach(button => {
        button.disabled = true;
        setColor(button, button.dataset.correct === 'true');
    });

    if (correct) {
        console.log("Correct Answer!");
        score++;
    } else {
        console.log("Wrong Answer!");
    }

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
