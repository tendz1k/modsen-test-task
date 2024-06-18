let score = 0;
let currentQuestion = 1;

function startQuiz() {
    document.getElementById('block0').style.display = 'none';
    document.getElementById('block1').style.display = 'block';
    document.getElementById('question1').style.display = 'block';
}

function checkAnswer(button, answer, questionId) {
    const correctAnswers = {
        'question1': 8,
        'question2': 0,
        'question3':'Amazon',
        'question4': 46,
        'question5': 'Ron Weasley',
        'question6': 'Ottawa',
        'question7': 'Hanukkah'
    };
    
    const correctAnswer = correctAnswers[questionId];

    // Подсвечиваем правильный и неправильный ответы
    if (answer === correctAnswer) {
        button.classList.add('correct');
        score++;
        document.getElementById('num').textContent = score;
    } else {
        button.classList.add('incorrect');
    }

    // Отключаем все кнопки после ответа
    const buttons = button.parentNode.querySelectorAll('button');
    buttons.forEach(btn => {
        if (btn.textContent == correctAnswer) {
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });

    // Показать кнопку для перехода к следующему вопросу или завершения
    showNextButton(questionId);
}

function showNextButton(currentQuestionId) {
    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'inline-block';
    nextButton.onclick = function() {
        showNextQuestion(currentQuestionId);
    };
}

function showNextQuestion(currentQuestionId) {
    const currentQuestionElement = document.getElementById(currentQuestionId);
    currentQuestionElement.style.display = 'none';
    currentQuestion++;
    const nextQuestionId = 'question' + currentQuestion;
    const nextQuestionElement = document.getElementById(nextQuestionId);
    if (nextQuestionElement) {
        nextQuestionElement.style.display = 'block';
        document.getElementById('next-button').style.display = 'none';
    } else {
        // Завершение викторины
        showFinalMessage();
    }
}

function showFinalMessage() {
    document.getElementById('block1').style.display = 'none';
    document.getElementById('final-message').style.display = 'block';
    document.getElementById('final-score').textContent = score;
}

function restartQuiz() {
    score = 0;
    currentQuestion = 1;
    document.getElementById('num').textContent = score;

    // Сбросить все вопросы и кнопки
    const buttons = document.querySelectorAll('.quiz-button');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
    });

    // Скрыть все вопросы
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.display = 'none';
    });

    // Скрыть итоговое сообщение
    document.getElementById('final-message').style.display = 'none';

    // Показать начальный блок
    document.getElementById('block0').style.display = 'block';
    document.getElementById('block1').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
}
