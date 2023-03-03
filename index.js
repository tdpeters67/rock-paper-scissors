const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn")
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")


let player
let computer
let result

playGame()

function playGame(){
    let playerPoint = 0
    let computerPoint = 0

    playRound()

    if (resultText == "You Win!"){
        playerPoint++
    }
    else if (resultText == "You Lose!"){
        computerPoint++
    }
    
    playerScore.textContent = `Player: ${playerPoint}`
    computerScore.textContent = `Computer: ${computerPoint}`
}

function playRound(){

    choiceBtns.forEach(button => button.addEventListener("click", () => {
        player = button.textContent
        computerTurn();
        playerText.textContent = `Player: ${player}`
        computerText.textContent = `Computer: ${computer}`
        resultText.textContent = checkWinner()
    }))
    }


function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1

    switch(randNum){
        case 1:
            computer = "BOULDER"
            break
        case 2:
            computer = "PARCHMENT"
            break 
        case 3:
            computer = "SHEARS"
            break     
    
    }
}

function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "BOULDER"){
      return (player == "PARCHMENT") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PARCHMENT"){
      return (player == "SHEARS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SHEARS"){
      return (player == "BOULDER") ? "You Win!" : "You Lose!"
    }
}
