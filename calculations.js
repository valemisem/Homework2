function increaseBalance(x, y) {
  x = x + y;
  return x;
}

function decreaseBalance(x, y) { //added y as a parameter 
x = x - y;
return x;
}

function divideBalanceByAccounts(x, y) {
  x = x / y;
  return x;
  // console.log('x'); // console.log displays a string or variable in the console window
  // return - returns the specified value
}

function getRestAfterDivision(x, y) {
  x = x % y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); //do not add third parameter
console.log(getRestAfterDivision(7000, 3));
