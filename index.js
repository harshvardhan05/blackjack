
const messageEl = document.querySelector("#message-el")
const cardEl = document.querySelector("#card-el")
const sumEl = document.querySelector("#sum-el")
const startBtnEl = document.querySelector("#start-btn")
const newCardBtnEl = document.querySelector("#new-card-btn")  
const rejectBtnEl = document.querySelector("#reject-withdraw-btn") 
const playerEl = document.querySelector("#player-el")

let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0
let player = {
    name: "Harsh",
    chips: Math.floor( Math.random()*100 ) + 10
}
playerEl.textContent = player.name +": $"+ player.chips
// console.log(cards)

// function rejectWithdraw(){
//     console.log("no card withdraw")
// }

function getRandomCard(){
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
//   let randomNumber = Math.ceil( Math.random() * 11)
//     return randomNumber
}


    function startGame(){
        if(player.chips >= 10){
            isAlive = true
            let firstCard = getRandomCard()
            let secondCard = getRandomCard()
            cards = [firstCard, secondCard]
            sum = cards[0] + cards[1]
            renderGame()
    } else{
        messageEl.textContent = "You don't have enoughs chips"
    }
}
function newCard(){
    // console.log("new card withdraw")
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
    else{
        messageEl.textContent = "Start the Game first"
    }
    // sumEl.textContent = "Sum: " + sum
    // cardEl.textContent += "-" + thirdCard
    
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
//    cardEl.textContent = "Cards: " + cards[0] + "-" + cards[1] 
    cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
    cardEl.textContent +=  cards[i] + " "
    }
    // for(let card of cards){
    // cardEl.textContent ="Cards: " + cards.join(" - ") 
    // }
    if(sum <= 20){
        message = "Do you want to draw a new card?"
        startBtnEl.style.display = "none"
        newCardBtnEl.style.display = ""
    }else if(sum === 21){
        player.chips +=10;
        playerEl.textContent = player.name +": $"+ player.chips
        message = "You've got Blackjack!"   
        newCardBtnEl.style.display = "none"
        startBtnEl.style.display = ""
    }else {
        player.chips -=10;
        playerEl.textContent = player.name +": $"+ player.chips
        message = "You're out of the game!"
        isAlive = false
        hasBlackJack = false
        newCardBtnEl.style.display = "none"
        startBtnEl.style.display = ""
        
    }   
    messageEl.textContent = message
}






