// Edit The Class
class User {
  constructor(username, card) {
    this.u = username;
    this.setCard(card);
  }

  setCard(cardNumber) {
    let formattedCard = String(cardNumber).replace(/[^0-9]/g, "");
    let cardArray = [];
    for (let i = 0; i < formattedCard.length; i += 4) {
      cardArray.push(formattedCard.slice(i, i + 4));
    }
    this._c = cardArray.join("-");
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this._c}`;
  }

  get c() {
    return undefined;
  }
}

// Do Not Edit Anything Below
let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
