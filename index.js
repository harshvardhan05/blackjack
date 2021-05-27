
const messageEl = document.querySelector("#message-el")
const cardEl = document.querySelector("#card-el")
const sumEl = document.querySelector("#sum-el")
const startBtnEl = document.querySelector("#start-btn")
const newCardBtnEl = document.querySelector("#new-card-btn") 
const rejectBtnEl = document.querySelector("#reject-withdraw-btn") 


let firstCard = 10
let secondCard = 5
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard + secondCard 

function rejectWithdraw(){
    console.log("no card withdraw")
}

function getRandomCard(){
    let x = Math.random()
    // Math.floor(x)
    console.log(x)
}
getRandomCard()


function startGame(){
    renderGame()
}
function newCard(){
    // console.log("new card withdraw")
    let newCard = 2
    sum += newCard
    cards.push(newCard)
    console.log(cards)
    
    // sumEl.textContent = "Sum: " + sum
    // cardEl.textContent += "-" + thirdCard
    renderGame()
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum
//    cardEl.textContent = "Cards: " + cards[0] + "-" + cards[1] 
    cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
    cardEl.textContent +=  cards[i] + " - "
    }
    // for(let card of cards){
    // cardEl.textContent ="Cards: " + cards.join(" - ") 
    // }
    if(sum <= 20){
        message = "Do you want to draw a new card?"
        startBtnEl.style.display = "none"
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true       
        newCardBtnEl.style.display = "none"
        rejectBtnEl.style.display = "none"
        startBtnEl.style.display = ""
    }else {
        message = "You're out of the game!"
        isAlive = false
        newCardBtnEl.style.display = "none"
        rejectBtnEl.style.display = "none"
        startBtnEl.style.display = ""
        this.startGame()
    }   
    messageEl.textContent = message
}






