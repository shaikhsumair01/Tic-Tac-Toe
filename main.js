"use strict";
const game = document.querySelector("#gameboard");
const player = document.querySelector("#player");
const startcells = ["","","","","","","","",""];
let turn = "circle";
player.textContent = " Player 1 goes First";
function gameElements(){
    startcells.forEach((_cell,index) => {
    const cellElement = document.createElement('div')
    cellElement.classList.add("bg-white", "h-full", "rounded-lg", "border-t-orange-700","border-b-purple-700","border-l-red-600", "border-r-blue-600","border-4", "flex", "items-center", "justify-center", "box-border")
    cellElement.id= index;
    cellElement.addEventListener("click", addsymbol)
    game.append(cellElement)
    });
}
gameElements();

function addsymbol(e){
    const display = document.createElement("div");
    display.classList.add(turn)
    e.target.append(display)
    turn = turn === "circle" ? "cross": "circle";
    let current_player = turn === "circle"? " player 1's": " player 2's";
    player.textContent = "It is now" + current_player +" turn";
   
}