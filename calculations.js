function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  //added y as a parameter
  x -= y;
  return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
  // console.log('x'); // console.log displays a string or variable in the console window
  // return - returns the specified value
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); //do not add third parameter
console.log(getRestAfterDivision(7000, 3));

// DECREMENT AND INCREMENT FUNCTIONS

function decr1(x) {
  x = --x;
  return x;
}
console.log(decr1(5)); // возвращаем в консоль х = 4

function decr2(x) {
  x = x--;
  return x;
}
console.log(decr2(5)); // возвращаем в консоль х = 5

function increment1(x) {
  x = ++x;
  return x;
}
console.log(increment1(5)); // возвращаем в консоль х = 6

function increment2(x) {
  x = x++;
  return x;
}
console.log(increment2(5)); // возвращаем в консоль х = 5
