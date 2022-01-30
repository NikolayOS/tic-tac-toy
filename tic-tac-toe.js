const area = document.getElementById("area");
let move = 0;
let res = "";
area.addEventListener("click", e => {
    if (e.target.className = "box"){
        move % 2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML = "O";
        move++;
        
    }
})
