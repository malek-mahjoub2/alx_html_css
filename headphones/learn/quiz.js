function checkAnswer() {
    let correctAnswer= "4";
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const feedbackElement = document.getElementById('feedback');

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }

    } else {
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = "Please select an answer!";
    }

const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);

}