var cards = [
  {
    rank:"queen",
    suit:"hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank:"queen",
    suit:"diamond",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank:"king",
    suit:"hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank:"king",
    suit:"diamond",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
};
};

var flipCards = function(cardId){
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].suit);
  console.log("User flipped " + cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);

if (cardsInPlay.length === 2) {
  checkForMatch();}

};

flipCards(0);
flipCards(2);
