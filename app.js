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

  if (window.location.hostname === "127.0.0.1") {
    window.location.href = `./winner.html?${params.join("&")}`;
  }

  if (window.location.hostname.includes("github")) {
    window.location.href = `/advent-21-rps/winner.html?${params.join("&")}`;
  }
}
