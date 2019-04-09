const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('number-checked', (evt) => {
    const checkedForPrime = evt.detail;
    this.displayResults(checkedForPrime);
  });
};

ResultView.prototype.displayResults = function(primeResult){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `Is it a prime number? ${primeResult}! Wrong again.`;
};

module.exports = ResultView;
