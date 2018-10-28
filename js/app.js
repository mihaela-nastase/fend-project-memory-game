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

	//if the list has two cards, check to see if the two cards match
	if (openedCards.length === 2) {	

		//loop through the cards to disable the event listener to prevent the clicking of more than 2 cards
		for (card of cards) {
			card.style.pointerEvents = "none";
		}
		//compare the symbols
		const firstCard = openedCards[0].querySelector(".fa");
		const secondCard = openedCards[1].querySelector(".fa");	
		if (firstCard.getAttribute("class") === secondCard.getAttribute("class")) {
			//the cards match
			matched();
		}
		else {
			//the cards do not match
			unmatched();
		}
	}
}

function matched() {
	//if the cards do match, lock the cards in the open position
	this.removeEventListener("click", displayCard);
	this.removeEventListener("click", add2OpenedCards);
	openedCards[0].classList.add("matched");
	openedCards[1].classList.add("matched");
	//clear the list of "open" cards
	openedCards = [];
	//re-enable the clicking of cards
	for (card of cards) {
		if (card.classList.contains("matched")===false){
			card.style.pointerEvents = "auto";
		}
	}
}

function unmatched() {
	//if the cards do not match, remove the cards from the list and hide the card's symbol

	setTimeout (function() {
		//temporarily change the cards' style
		openedCards[0].classList.add("unmatched");
		openedCards[1].classList.add("unmatched");
	}, 550);

	setTimeout (function() {
		//return to the base style
		openedCards[0].classList.remove("unmatched");
		openedCards[1].classList.remove("unmatched");

		//close the open cards
		openedCards[0].classList.toggle("flipped");
		openedCards[1].classList.toggle("flipped");

		//clear the "open" cards list
		openedCards = [];
		//re-enable the clicking of cards
		for (card of cards) {
			if (card.classList.contains("matched")===false){
				card.style.pointerEvents = "auto";
			}
		}
	}, 1500);
}		


/*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
