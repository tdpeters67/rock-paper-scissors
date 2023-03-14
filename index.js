const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn")
const choices = ["BOULDER", "PARCHMENT", "SHEARS"]
const winnerText = document.querySelector("#winnerText")

const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const roundNumber = document.querySelector("#roundNumber")


let player
let computer
let result
let playerPoint
let computerPoint
let round

playGame()

function playGame(){
    playerPoint = 0
    computerPoint = 0
    round = 0

   playRound()



}

function playRound(){

    choiceBtns.forEach(button => button.addEventListener("click", () => {
        player = button.textContent
        computerTurn()
        playerText.textContent = `Player: ${player}`
        computerText.textContent = `Computer: ${computer}`
        checkWinner()
        updateScore()
        round++
        roundNumber.textContent = `Round: ${round}`
        
        if((playerPoint == 5) && (playerPoint > computerPoint)){
            alert( "You win the game!")
            button.addEventListener("click", window.location.reload())
        }else if((computerPoint == 5) && (playerPoint < computerPoint)){
            alert("You lost the game")
            button.addEventListener("click", window.location.reload())

        }
        
        
    }))
    }


function computerTurn(){
    const randNum = Math.floor(Math.random() * 3)
    computer = choices[randNum]
    }


function checkWinner(){
    if((player == 'BOULDER' && computer == 'SHEARS') ||
    (player == 'PARCHMENT' && computer == 'BOULDER') ||
    (player == 'SHEARS' && computer == 'PARCHMENT')){
       resultText.textContent = "You win the round"
       return
      }
    else if(player == computer){
        resultText.textContent = "It is a tie"
        return
    }
    else{
        resultText.textContent = "You lose the round"
        return
    }

    
        
}
function updateScore(){
    if (resultText.textContent == "You win the round"){
        playerPoint++
    }else if(resultText.textContent == "It is a tie"){
        playerPoint = playerPoint
    }else{
        computerPoint++
    }
    playerScore.textContent = `Player: ${playerPoint}`
    computerScore.textContent = `Computer: ${computerPoint}`

}