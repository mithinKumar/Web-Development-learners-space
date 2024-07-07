// script.js

document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.createElement("div");
    quizContainer.innerHTML = `
        <h3>Game Quiz</h3>
        <p>What is the name of the main character in the game?</p>
        <input type="text" id="quiz-answer" placeholder="Your answer">
        <button id="submit-answer">Submit</button>
        <p id="quiz-result"></p>
    `;

    document.querySelector("#interactive").appendChild(quizContainer);

    document.querySelector("#submit-answer").addEventListener("click", function() {
        const answer = document.querySelector("#quiz-answer").value.trim().toLowerCase();
        const result = document.querySelector("#quiz-result");

        if (answer === "correct answer") {  // Replace with actual correct answer
            result.textContent = "Correct! Well done.";
            result.style.color = "green";
        } else {
            result.textContent = "Incorrect. Try again.";
            result.style.color = "red";
        }
    });
});
