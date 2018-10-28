// List that holds all of the cards
const cards = [...document.getElementsByClassName("card")];
const deck = document.querySelector(".deck");

//list holding the "open" cards
let openedCards = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// set up the event listener for the cards to display them and add them to a list of "open" cards
for (card of cards) {
	card.addEventListener("click", displayCard);
	card.addEventListener("click", add2OpenedCards);
}


//If a card is clicked, display the card's symbol
function displayCard() {
	//flip the card
	this.classList.toggle("flipped");
	//prevent double clicking of the same card
	this.style.pointerEvents = "none";
}


function add2OpenedCards() {

	//if the card is clicked, add the card to a list of "open" cards
	openedCards.push(this);
}

/*  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
