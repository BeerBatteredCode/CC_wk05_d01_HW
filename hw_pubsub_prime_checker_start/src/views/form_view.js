const PubSub = require('../helpers/pub_sub.js')

const FormView = function(){

};

FormView.prototype.bindEvents = function(){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const inputtedNumber = evt.target.number.value;

    PubSub.publish('number-typed', inputtedNumber)
  });
};


module.exports = FormView;
