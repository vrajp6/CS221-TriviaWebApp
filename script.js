let questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1910", correct: false },
            { text: "1914", correct: false },
            { text: "1916", correct: false }
        ]
    }
];

let currentQuestionIndex;
let score = 0;
let timer;
let timeLeft = 15; // 15 seconds for each question

document.getElementById('start-btn').addEventListener('click', startGame);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    updateScoreDisplay();
    document.getElementById('start-btn').style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    let questionElement = document.getElementById('question-text');
    questionElement.innerText = question.question;

    let answersElement = document.getElementById('answer-buttons');
    answersElement.innerHTML = ''; // Clear previous buttons
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersElement.appendChild(button);
    });

    startTimer();
}

function selectAnswer(e) {
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct;

    stopTimer(); // Stop the timer

    if (correct) {
        console.log("Correct Answer!");
        score++;
        updateScoreDisplay();
    } else {
        console.log("Wrong Answer!");
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(() => showQuestion(questions[currentQuestionIndex]), 500); // Wait a bit before next question
    } else {
        endGame();
    }
}

function updateScoreDisplay() {
    let scoreElement = document.getElementById('score');
    scoreElement.innerText = score;
}

function endGame() {
    console.log("Game Over! Your score: " + score);
    document.getElementById('start-btn').innerText = "Restart Game";
    document.getElementById('start-btn').style.display = 'block';
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
    timeLeft = 15; // Reset time for the next question
}

function handleTimeOut() {
    console.log("Time's up!");
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(() => showQuestion(questions[currentQuestionIndex]), 500); // Wait a bit before next question
    } else {
        endGame();
    }
}

// Add more functionality as needed

