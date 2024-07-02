let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById('startBlock').style.display = 'none';
    document.getElementById('questionBlock').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    if (!questionData) {
        showFinalMessage();
        return;
    }

    const questionElement = document.getElementById('question');
    questionElement.innerHTML = `
        <div class="descriptionHeader">
            <p>${questionData.question}</p>
        </div>
        ${questionData.answers.map(answer => `
            <button class="quizButton" onclick="checkAnswer(this, '${answer}', '${questionData.correctAnswer}')">${answer}</button>
        `).join('')}
    `;
}

function checkAnswer(button, answer, correctAnswer) {
    if (answer === correctAnswer.toString()) {
        button.classList.add('correct');
        score++;
        document.getElementById('num').textContent = score;
    } else {
        button.classList.add('incorrect');
    }

    const buttons = button.parentNode.querySelectorAll('button');
    buttons.forEach(btn => {
        if (btn.textContent == correctAnswer) {
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });

    showNextButton();
}

function showNextButton() {
    const nextButton = document.getElementById('nextButton');
    nextButton.style.display = 'inline-block';
    nextButton.onclick = showNextQuestion;
}

function showNextQuestion() {
    currentQuestionIndex++;
    document.getElementById('nextButton').style.display = 'none';
    showQuestion();
}

function showFinalMessage() {
    document.getElementById('questionBlock').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'block';
    document.getElementById('final-score').textContent = score;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('num').textContent = score;

    const buttons = document.querySelectorAll('.quizButton');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
    });

    document.getElementById('finalMessage').style.display = 'none';
    document.getElementById('startBlock').style.display = 'block';
    document.getElementById('questionBlock').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
}
