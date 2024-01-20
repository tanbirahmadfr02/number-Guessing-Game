let heading = document.querySelector(".heading");
let introBox = document.querySelector(".introBox");
let pOneName = document.querySelector(".pOneName");
let next = document.querySelector(".next");
let error = document.querySelector(".error");

let playerOneBox = document.querySelector(".playerOneBox");
let pOneInput = document.querySelector(".pOneInput");
let startGame = document.querySelector(".startGame");

let playerTwoBox = document.querySelector(".playerTwoBox");
let pTwoName = document.querySelector(".pTwoName");
let letsPlay = document.querySelector(".letsPlay");

let playerTwoSecondBox = document.querySelector(".playerTwoSecondBox");
let pTwoInput = document.querySelector(".pTwoInput");
let submit = document.querySelector(".submit");

let chanceSpan = document.querySelector(".chanceSpan");
let chance = document.querySelector(".chance");
let count = 5;

let winnerDisplay = document.querySelector(".winnerDisplay");
let winner = document.querySelector(".winner");
let usedChance = document.querySelector(".usedChance");
let hurry = new Audio("hurray.mp3");
let restart = document.querySelector(".restart");

// pOneName.value.style.color = 'red'

next.addEventListener("click", function () {
  if (pOneName.value == "") {
    error.classList.remove("d-none");
    error.innerHTML = "please enter your name";
  } else {
    if (pOneName.value - 1 || pOneName.value - 1 == 0) {
      error.classList.remove("d-none");
      error.innerHTML = "please enter a valid name";
    } else {
      introBox.style.display = "none";
      playerOneBox.classList.remove("d-none");
      heading.innerHTML = `${pOneName.value} Enter a number to start the game`;
      error.classList.add("d-none");
    }
  }
});

startGame.addEventListener("click", function () {
  if (pOneInput.value == "") {
    error.classList.remove("d-none");
    error.innerHTML = "Please Enter a Number";
  } else {
    if (!(pOneInput.value - 1 || pOneInput.value - 1 == 0)) {
      error.classList.remove("d-none");
      error.innerHTML = "Please Enter a Number not any symbol or string";
    } else if (pOneInput.value < 1 || pOneInput.value >= 20) {
      error.classList.remove("d-none");
      error.innerHTML = "Please Enter a Number between 1-20";
    } else {
      playerOneBox.classList.add("d-none");
      playerTwoBox.classList.remove("d-none");
      heading.innerHTML = "You are second player, please enter your name";
      error.classList.add("d-none");
    }
  }
});

letsPlay.addEventListener("click", function () {
  if (pTwoName.value == "") {
    error.classList.remove("d-none");
    error.innerHTML = "please enter your name";
  } else {
    if (pTwoName.value - 1 || pTwoName.value - 1 == 0) {
      error.classList.remove("d-none");
      error.innerHTML = "please enter a valid name";
    } else {
      playerTwoBox.classList.add("d-none");
      playerTwoSecondBox.classList.remove("d-none");
      heading.innerHTML = "Guess a number between 1-20";
      error.classList.add("d-none");
    }
  }
});

submit.addEventListener("click", function () {
  if (count > 0) {
    chance.classList.remove("d-none");
    count--;
    chanceSpan.innerHTML = count;

    if (pTwoInput.value == "") {
      error.classList.remove("d-none");
      error.innerHTML = "please give a number";
    } else {
      if (!(pTwoInput.value - 1 || pTwoInput.value - 1 == 0)) {
        error.classList.remove("d-none");
        error.innerHTML = "please give a number not a symbol or string";
      } else if (pTwoInput.value < 1 || pTwoInput.value > 20) {
        error.classList.remove("d-none");
        error.innerHTML = "please give a number between 1-20";
      } else {
        if (pOneInput.value == pTwoInput.value) {
          winnerDisplay.classList.remove("d-none");
          winner.innerHTML = `"${pTwoName.value}" you won the game`;
          usedChance.innerHTML = `you have used "${5 - count}" chance`;
          hurry.play();
          error.classList.add("d-none");
          pOneName.value = "";
          pOneInput.value = "";
          pTwoName.value = "";
          pTwoInput.value = "";
        } else if (count == 0) {
          winnerDisplay.classList.remove("d-none");
          winner.innerHTML = `"${pOneName.value}" you won the game`;
          hurry.play();
          error.classList.add("d-none");
          pOneName.value = "";
          pOneInput.value = "";
          pTwoName.value = "";
          pTwoInput.value = "";
        }
      }
    }
  }
});

restart.addEventListener("click", function () {
  location.reload();
});
