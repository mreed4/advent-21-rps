const [playerChoice, computerChoice] = getChoices();
const result = compareChoices(playerChoice, computerChoice);
const button = document.querySelector("button");

button.addEventListener("click", () => {
  playAgain(window.location);
});

window.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    playAgain(window.location);
  }
});

function playAgain(location) {
  if (location.hostname === "127.0.0.1") {
    window.location.href = "/";
  }

  if (location.hostname.includes("github")) {
    window.location.href = "/advent-21-rps/";
  }
}

function getChoices() {
  const params = new URLSearchParams(window.location.search);
  const playerChoice = params.get("playerChoice");
  const computerChoice = params.get("computerChoice");
  return [playerChoice, computerChoice];
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "you-win";
  }
  return "computer-wins";
}

(function displayResult(result) {
  const body = document.querySelector("body");

  const playerChoiceImage = document.querySelector(".your-pick img");
  playerChoiceImage.src = `./images/${playerChoice}.png`;

  const computerChoiceImage = document.querySelector(".computer-pick img");
  computerChoiceImage.src = `./images/${computerChoice}.png`;

  if (result === "draw") {
    body.classList.add("draw");
  }

  if (result === "you-win") {
    body.classList.add("you-win");
  }

  if (result === "computer-wins") {
    body.classList.add("computer-wins");
  }
})(result);
