# Assignment operators

**An assignment operator assigns a value to its left operand based on the value of its right operand.**

|Operator|Example|Same As|
|:-|:-:|-:|
|=|x = y|x = y|
|+=|x += y|x = x + y|
|-=|x -= y|x = x - y|
|*=|x *= y|x = x * y|
|/=|x /= y|x = x / y|
|%=|x %= y|x = x % y|
|**=|x **= y|x = x ** y|


## Increment and a decrement operator in JavaScript

### 1. Increment(+ +)

**JavaScript increment(+ +) operator is used to increase the value of the variable by one.**

The value returned from the operand depends on whether the increment operator was on the left(prefix increment) or right(postfix increment). 

If the operator is used _before the operand_ then the value is **increased by one and then returned** but if the operator is _after the operand_ then the value is **first returned and then incremented.**

```js
let x = 10; 
console.log(x++); 
console.log(x);
```

**Output:**
>10
>11

```js
let x = 10; 
console.log(++x); 
console.log(x);
```

**Output:**
>11
>11
