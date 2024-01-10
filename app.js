const choices = ["rock", "paper", "scissors"];
const playerChoiceButtons = document.querySelectorAll(".pick-one button");

playerChoiceButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    getWinner(button.parentElement.dataset.choice);
  });
});

window.addEventListener("keyup", (event) => {
  let playerChoice;

  event.preventDefault();
  event.key.toLowerCase();

  if (event.key === "r") {
    playerChoice = "rock";
  }

  if (event.key === "p") {
    playerChoice = "paper";
  }

  if (event.key === "s") {
    playerChoice = "scissors";
  }

  if (["r", "p", "s"].includes(event.key)) {
    getWinner(playerChoice);
  }
});

function getWinner(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const params = [`playerChoice=${playerChoice}`, `computerChoice=${computerChoice}`];

  if (window.location.pathname === "/advent-21-rps/") {
    window.location.href = `./advent-21-rps/winner.html?${params.join("&")}`;
  }

  if (window.location.pathname === "/") {
    window.location.href = `./winner.html?${params.join("&")}`;
  }
}
