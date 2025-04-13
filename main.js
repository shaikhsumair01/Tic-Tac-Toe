"use strict";
const game = document.querySelector("#gameboard");
const player = document.querySelector("#player");
const startcells = ["","","","","","","","",""];
player.textContent = " Player 1 goes First";
function gameElements(){
    startcells.forEach((cell,index) => {
    const cellElement = document.createElement('div')
    cellElement.classList.add("bg-white", "h-full", "rounded-lg")
    console.log(cellElement)
    const circle = document.createElement('div')
    circle.classList.add("h-9", "w-9", "rounded-full", "border-3", "border-blue-400")
    game.append(cellElement)
    cellElement.append(circle)
    });
}
gameElements();