let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEL = document.querySelector("#player-el")

let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""

let Player = {
    name: "Player(YOU): ",
    chip: "200"
}

playerEL.textContent = Player.name + "$" + Player.chip

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    hasBlackjack = false

    renderGame()
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! you have got a blackjack"
        hasBlackjack = true
    } else {
        message = "Oh Sorry! You lost"
        isAlive = false
    }

    messageEl.textContent = message

}



function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)

        renderGame()

    }

    renderGame()


}





// fade-in logo
const logo = document.getElementById('introLogo');
logo.classList.add('fade-in');

// After 2.5s, fade it out
setTimeout(() => {
    logo.classList.remove('fade-in');
    logo.classList.add('fade-out');
}, 2500);

// After 4.5s total, hide intro and show main
setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main').classList.remove('hidden');
}, 4500);






