let player = {
  name: 'Player',
  chips: 200,
}
let playerIsAlive = false
let dealerIsAlive = false
let playerCards = []
let dealerCards = []
let playerSum = 0
let dealerSum = 0
let hasBlackJack = false
let message = ''
let messageEl = document.getElementById('message-el')
let playerSumEl = document.getElementById('player-sum-el')
let dealerSumEl = document.getElementById('dealer-sum-el')
let playerCardsEl = document.getElementById('player-cards-el')
let dealerCardsEl = document.getElementById('dealer-cards-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = `${player.name}: $${player.chips}`

/* random number function */
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

/* start game function */
function startGame() {
  playerIsAlive = true
  dealerIsAlive = true
  let playerFirstCard = getRandomCard()
  let dealerFirstCard = getRandomCard()
  let playerSecondCard = getRandomCard()
  let dealerSecondCard = getRandomCard()
  playerCards = [playerFirstCard, playerSecondCard]
  dealerCards = [dealerFirstCard, dealerSecondCard]
  playerSum = playerFirstCard + playerSecondCard
  dealerSum = dealerFirstCard + dealerSecondCard
  renderGame()
}

/* game function */
function renderGame() {
  playerCardsEl.textContent = 'Player Cards: '
  dealerCardsEl.textContent = 'Dealer Cards: '
  for (let i = 0; i < playerCards.length; i++) {
    playerCardsEl.textContent += playerCards[i] + ' '
  }
  for (let i = 0; i < dealerCards.length; i++) {
    dealerCardsEl.textContent += dealerCards[i] + ' '
  }

  playerSumEl.textContent = 'Player Sum: ' + playerSum
  dealerSumEl.textContent = 'Dealer Sum: ' + dealerSum

  /* player sum */
  if (playerSum <= 20 && dealerSum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (playerSum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    playerIsAlive = false
  }
  messageEl.textContent = message
}

/* new card function */
function newCard() {
  if (playerIsAlive === true && hasBlackJack === false) {
    let playerCard = getRandomCard()
    let dealerCard = getRandomCard()
    playerSum += playerCard
    dealerSum += dealerCard
    playerCards.push(playerCard)
    dealerCards.push(dealerCard)
    renderGame()
  }
}

/* hold function */
function hold() {
  // if hold is clicked
  // draw new card for dealer
  // then compare both sums
  if (playerSum > dealerSum && playerIsAlive == true) {
    message = 'You win!'
  } else if (playerSum < dealerSum || playerIsAlive == false) {
    message = 'You lose!'
    playerIsAlive = false
  }
  messageEl.textContent = message
}

// if playersum is greater than dealer sum and player is playerIsAlive
// dealer draw one more newCard
if (playerSum > dealerSum && playerIsAlive === true) {
  let dealerCard = getRandomCard()
  dealerSum += dealerCard
  dealerCards.push(dealerCard)
  renderGame()
}
// if player sum is great than dealer sum and dealer is alive is true
// then player win
// else if dealer

/* NOTES */

// SETTING THE STAGE
/* const player = "Justin"
const opponent = "Dealer"
const game = "Blackjack"

let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
} */
