const choices = ["rock", "paper", "scissors"];
const playerChoiceButtons = document.querySelectorAll(".pick-one button");

playerChoiceButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerChoice = button.parentElement.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    window.location.href = `/winner.html?playerChoice=${playerChoice}&computerChoice=${computerChoice}`;
  });
});
