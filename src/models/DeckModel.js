export default class DeckModel {
  constructor(deckName, description) {
    this.deckName = deckName;
    this.description = description;
    this.cards = [];
  }

  addCard(cardFront, cardBack) {
    this.cards.push({'cardFront':cardFront, 'cardBack': cardBack});
  }

  removeCard(index) {
    if(index < this.cards.length && index >= 0) {
      this.cards.splice(index, 1);
    }
  }
}