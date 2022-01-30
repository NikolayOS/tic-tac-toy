const area = document.getElementById("area");
let move = 0;
let res = "";
area.addEventListener("click", e => {
    if (e.target.className = "box"){
        move % 2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML = "O";
        move++;
        
    }
check();
})
const check = () => {
const arrayValues = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const boxValue = document.getElementsByClassName("box");
for (i = 0; i < arrayValues.length; i++){
    if (
        boxValue[arrayValues[i][0]].innerHTML == "X" && boxValue[arrayValues[i][1]].innerHTML == "X" && boxValue[arrayValues[i][2]].innerHTML == "X"
    )
    {
    res = "Player X";
    }
    else if(
        boxValue[arrayValues[i][0]].innerHTML == "O" && boxValue[arrayValues[i][1]].innerHTML == "O" && boxValue[arrayValues[i][2]].innerHTML == "O"
    )
    {
    res = "Player O";
    }
}
console.log(res)
}
let restart = document.getElementById("restart");
restart.addEventListener("click",() => {
    boxValue = "";
})