let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const computer = () => {
  const valchoice = ["rock", "paper", "scissor"];
  const idxran = Math.floor(Math.random() * 3);
  return valchoice[idxran];
};

const drawGame = () => {
  msg.innerText = "It's a DRAW 😗";
  msg.style.backgroundColor = "orange";
};

const showWinner = (userwin, userchoice, compchoose) => {
  if (userwin) {
    userscore++;
    uScore.innerText = userscore;
    msg.innerText = `You Won !! HURRAY 🥳🥳🥳🥳 as ${userchoice} beats ${compchoose}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    cScore.innerText = compscore;
    msg.innerText = `You Loose !! TRY AGAIN 😞😞😩😩 as ${compchoose} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const PlayGame = (userchoice) => {
  const compchoose = computer();
  if (userchoice === compchoose) {
    drawGame();
  } else {
    let userwin = true;

    if (userchoice === "rock") {
      //paper , scissor
      userwin = compchoose === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock, scissor
      userwin = compchoose === "scissor" ? false : true;
    } else {
      //rock,paper
      userwin = compchoose === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoose);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choose = choice.getAttribute("id");
    PlayGame(choose);
  });
});
