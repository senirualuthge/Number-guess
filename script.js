"use strict";

const form = document.querySelector("#guess-form");
const input = document.querySelector("#guess-input");
const message = document.querySelector("#message");
const attemptsEl = document.querySelector("#attempts");
const restartButton = document.querySelector("#restart");

let secret;
let attempts;

function startGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsEl.textContent = attempts;
  message.textContent = "";
  input.value = "";
  input.disabled = false;
  input.focus();
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const guess = Number(input.value);

  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    message.textContent = "Enter a whole number from 1 to 100.";
    return;
  }

  attempts++;
  attemptsEl.textContent = attempts;

  if (guess === secret) {
    message.textContent = `Correct! You got it in ${attempts} ${attempts === 1 ? "attempt" : "attempts"}.`;
    input.disabled = true;
  } else {
    message.textContent = guess < secret ? "Too low. Try higher." : "Too high. Try lower.";
    input.value = "";
    input.focus();
  }
});

restartButton.addEventListener("click", startGame);

startGame();
