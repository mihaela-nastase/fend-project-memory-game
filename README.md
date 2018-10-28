
# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Issues](#issues)
* [Contributing](#contributing)


## Instructions

This project was built using the starter code provided to Udacity students from the Front-End Web Developer Nanodegree program.

This is a complete browser-based card matching game (also known as Concentration). I converted the static, non-interactive starter code into a fully interactive application, using JavaScript, DOM selectors and Event Listeners to handle interactions such as the flipping of the cards, a correct guess, an incorrect guess, and winning the game. I used CSS to animate the cards and to make the game responsive on different sized displays.

To run the game simply open index.html in your browser.

The cards are randomly shuffled. They display a flip animation upon being clicked. When two cards are clicked, the game checks whether they match or not. If the cards match, they are locked in position, otherwise the cards close. The user wins once all cards have been successfully matched. When the user wins the game, a modal appears to congratulate them, telling the user how much time it took to win the game, the number of moves, and the star rating. The modal also asks them if they wish to play again, effectively resetting the game. The modal can be closed.

The score panel displays a star rating, a moves counter, a timer, and a reset button. 

The star rating (from 1-3) reflects the user's performance. At the beginning it displays 3 stars. After 19 moves, it changes to a 2 star rating. After 27 moves it changes to a 1 star rating. 
The displayed timer also starts when the user clicks a card. Once the user wins the game, the timer stops.
The current number of moves a user has made is displayed.
The reset button allows the user to reset the game board, the timer, the number of moves, and the star rating.

The game resizes for all view ports. 

Dependencies include:

* [Font Awesome 4.6.1 by @davegandy] (https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css)
* [Coda - Google Fonts] (https://fonts.googleapis.com/css?family=Coda)

This tutorial helped me figure out what kind of functions I needed:

* [How to Build a Memory Matching Game in JavaScript by Sandra Israel-Ovirih](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript)

## Issues

You need to actually win the game for the "play again" button to be functional because it is placed within a function that only runs when all the cards have been matched. 

(Solved with a setTimeout function) If the restart button is pressed while two cards have been selected and are in the process of being unmatched, the console will log an error:
TypeError: openedCards[0] is undefined
This is the case because the restart button removes the cards from the openedCards list just before they can be unmatched. Therefore the unmatch function cannot find them. The error does not affect the game in any way.


## Contributing

This repository is my personal project for the FEND program at Udacity. Therefore, I most likely will not accept pull requests.

This project was completed in April 2018.