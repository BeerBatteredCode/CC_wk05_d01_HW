const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function() {

};

PrimeChecker.prototype.bindEvents = function(){
  PubSub.subscribe('number-typed', (evt) => {
    const inputtedNumber = evt.detail;
    const checkIfPrime = this.isPrime(inputtedNumber);
    console.log(checkIfPrime);
    PubSub.publish('number-checked', checkIfPrime);
  });
};

PrimeChecker.prototype.isPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
