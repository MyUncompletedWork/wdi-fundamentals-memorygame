var cards = ["Queen","Queen","King","King"];

var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
};
};

var flipCards = function(cardId){
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

if (cardsInPlay.length === 2) {
  checkForMatch();}

};

flipCards(0);
flipCards(2);
