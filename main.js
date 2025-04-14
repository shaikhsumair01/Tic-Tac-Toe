"use strict";
const game = document.querySelector("#gameboard");
const player = document.querySelector("#player");
const startbtn = document.querySelector("#Game_btn");
const restartbtn = document.querySelector("#Restart");
restartbtn.classList.add("hidden");
const startcells = ["","","","","","","","",""];
let turn = "circle";
startbtn.addEventListener("click", gameElements)
function gameElements(e){
    game.classList.add("gamearea")
    startcells.forEach((_cell,index) => {
    const cellElement = document.createElement('div')
    cellElement.classList.add("square")
    cellElement.id= index;
    cellElement.addEventListener("click", addsymbol)
    game.append(cellElement)
player.textContent = " Player 1 goes First";
startbtn.classList.add("hidden");
restartbtn.classList.remove("hidden");
restartbtn.addEventListener("click", restartgame)
    });
}
function restartgame(){
    window.location.reload();
}

function addsymbol(e){
    const display = document.createElement("div");
    display.classList.add(turn)
    e.target.append(display)
    turn = turn === "circle" ? "cross": "circle";
    let current_player = turn === "circle"? " player 1's": " player 2's";
    player.textContent = "It is now" + current_player +" turn";
    e.target.removeEventListener("click", addsymbol);
    checkscore();
}
function checkscore(){
    const squares = document.querySelectorAll(".square");
    const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
    winningCombos.forEach(arr=>{
        const circleWins = arr.every(cell=> squares[cell].firstChild?.classList.contains("circle"))
        const crossWins = arr.every(cell=> squares[cell].firstChild?.classList.contains("cross"))
        if(circleWins){
            player.textContent="Player 1 wins!";
            squares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
        else if(crossWins){
            player.textContent="Player 2 wins!";
            squares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    })
   
}