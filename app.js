function toggleAnswer(puzzleNumber) {
    const answerElement = document.getElementById(`answer${puzzleNumber}`);
    const buttonElement = document.querySelector(`[onclick="toggleAnswer(${puzzleNumber})"]`);

    if (answerElement.style.display === 'none') {
        answerElement.style.display = 'block';
        buttonElement.textContent = 'Скрыть ответ';
    } else {
        answerElement.style.display = 'none';
        buttonElement.textContent = 'Показать ответ';
    }
}
