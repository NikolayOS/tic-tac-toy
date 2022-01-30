const area = document.getElementById("area");
let move = 0;
let winnerIs = "";

area.addEventListener("click", (e) => {
  if ((e.target.className = "box")) {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
    move++;
  }
  check();
});

const check = () => {
  const winStateValues = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const boxValue = document.getElementsByClassName("box");
  for (i = 0; i < winStateValues.length; i++) {
    if (
      boxValue[winStateValues[i][0]].innerHTML == "X" &&
      boxValue[winStateValues[i][1]].innerHTML == "X" &&
      boxValue[winStateValues[i][2]].innerHTML == "X"
    ) {
      winnerIs = "Player X";
    } else if (
      boxValue[winStateValues[i][0]].innerHTML == "O" &&
      boxValue[winStateValues[i][1]].innerHTML == "O" &&
      boxValue[winStateValues[i][2]].innerHTML == "O"
    ) {
      winnerIs = "Player O";
    }
  }
  console.log(winnerIs);
<<<<<<< Updated upstream
=======
  resaltCalc();

>>>>>>> Stashed changes
};
let x = 0;
let o = 0;
function resaltCalc(){
  let Xplayer = document.getElementById("Xplayer");
  let Oplayer = document.getElementById("Oplayer");
 
if (winnerIs == "Player X"){
  x++;
  Xplayer.innerHTML = "Player_X : " + x;
 }
 else if (winnerIs == "Player O"){
   o++;
   Oplayer.innerHTML = "Player_O : " + o;
   }
  };

let restart = document.getElementById("restart");

restart.addEventListener("click", () => {
<<<<<<< Updated upstream
  boxValue = "";
});
=======
  for (let i = 0; i < boxValue.length;i++){
  boxValue[i].innerHTML = "";
  }
  winnerIs = "";
  });
  
  let newGame = document.getElementById("newGame");

  newGame.addEventListener("click", () => {
    x = 0;
    o = 0;
    Xplayer.innerHTML = "Player_X : " + 0;
    Oplayer.innerHTML = "Player_O : " + 0;
  });
>>>>>>> Stashed changes
