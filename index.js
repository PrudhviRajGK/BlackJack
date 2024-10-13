let player = {
     name: "Per",
     chips: 145
}
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [];
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""




let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame () {
    isAlive = true;
    hasBlackjack = false;
    cards = [];
    sum = 0;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
    
    
    
}

function renderGame() {
    
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card? 😀";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackjack = true;
    } else {  
        message = "You're out of the game! 😭";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {

    
    if(isAlive === true && hasBlackjack === false){
    let card = getRandomCard(

    )
    
    sum += card

    cards.push(card)
    
    renderGame()
}
}