const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];
cardsInPlay.push(cards[0], cards[2])

function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
	}
};

function flipCard(cardId) { 
	console.log("User flipped " + cards[cardId]);
};
	flipCard(0);
	flipCard(2); 
	checkForMatch();








	






