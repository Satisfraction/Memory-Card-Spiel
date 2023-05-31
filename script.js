// Spielvariablen
let cards = [];
let selectedCards = [];
let moveCount = 0;
let pairCount = 0;
let gameBoard = document.querySelector('.game-board');
let moveCountSpan = document.querySelector('#move-count');
let pairCountSpan = document.querySelector('#pair-count');
let restartButton = document.querySelector('#restart-button');

// Kartenpaare definieren
const cardPairs = [
  { id: 1, value: '🐶' },
  { id: 2, value: '🐺' },
  { id: 3, value: '🐱' },
  { id: 4, value: '🐯' },
  { id: 5, value: '🐻' },
  { id: 6, value: '🐨' },
  { id: 7, value: '🐮' },
  { id: 8, value: '🐷' },
  { id: 9, value: '🐸' },
  { id: 10, value: '🦊' },
];

// Funktion zum Mischen der Karten 
function shuffleCards() {
  cards = [...cardPairs, ...cardPairs].sort(() => Math.random() - 0.5);
}

// Funktion zum Karten anzeigen
function displayCards() {
  gameBoard.innerHTML = '';
  cards.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.dataset.value = card.value;
    div.dataset.id = card.id;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.innerText = card.value;

    div.appendChild(front);
    div.appendChild(back);

    div.addEventListener('click', handleCardClick);
    gameBoard.appendChild(div);
  });
}

// Funktion zum Behandeln des Klicks auf eine Karte
function handleCardClick(e) {
  const target = e.target;
  if (
    selectedCards.length < 2 &&
    !selectedCards.includes(target) &&
    !target.classList.contains('selected')
  ) {
    target.classList.add('selected');
    target.classList.add('flipped');
    if (selectedCards.length === 1) {
      const [card1] = selectedCards;
      if (card1.dataset.value === target.dataset.value) {
        pairCount++;
        card1.removeEventListener('click', handleCardClick);
        target.removeEventListener('click', handleCardClick);
      } else {
        setTimeout(() => {
          card1.classList.remove('selected');
          card1.classList.remove('flipped');
          target.classList.remove('selected');
          target.classList.remove('flipped');
        }, 1000);
      }
      selectedCards = [];
      moveCount++;
      updateGameStats();
      if (pairCount === cardPairs.length) {
        alert('Gewonnen!');
        restartGame();
      }
    } else {
      selectedCards.push(target);
    }
  }
}

// Funktion zum Überprüfen auf Paare
function checkForPairs() {
  const [card1, card2] = selectedCards;
  if (card1.dataset.value === card2.dataset.value) {
    pairCount++;
    card1.removeEventListener('click', handleCardClick);
    card2.removeEventListener('click', handleCardClick);
  } else {
    card1.classList.remove('selected');
    card1.classList.remove('flipped');
    card2.classList.remove('selected');
    card2.classList.remove('flipped');
  }
  selectedCards = [];
  moveCount++;
  updateGameStats();
  if (pairCount === cardPairs.length) {
    alert('Gewonnen!');
    restartGame();
  }
}

// Funktion zum Aktualisieren des Spielstands
function updateGameStats() {
  moveCountSpan.innerText = moveCount;
  pairCountSpan.innerText = pairCount;
}

// Funktion zum Neustarten des Spiels
function restartGame() {
  shuffleCards();
  pairCount = 0;
  moveCount = 0;
  updateGameStats();
  displayCards();
}

// Initialisierung der Spiellogik
function initGame() {
  shuffleCards();
  displayCards();
  restartButton.addEventListener('click', restartGame);
}

// Spiel initialisieren
initGame();
