function primeCheck(num) {
​
 if (num === 1){
  return false;
 }
 for (let i=2;i < num; i++){
  if (num % i != 0){
   return true
  } else {
   return false
  }
 }
​
​
}
​
console.log(primeCheck(21));
