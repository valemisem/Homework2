function calculateExpenses (food, restaurants, utilities, school){
    return food + restaurants + utilities + school
}

function calculateSavings (expenses = calculateExpenses(20, 40, 500, 500), salary = 5770){ 
    return salary - expenses // parameter has a function on default
}

// console.log(calculateSavings(5000, 10000))

// console.log(calculateSavings(calculateExpenses(20, 40, 500, 500), 10000))

console.log(calculateSavings(10, 400))


// signature
function doSmth (Ar1, Ar2){ // параметром функции может быть ФУНКЦИЯ 
    let x = Ar1 + Ar2()
    return x
}

let result = doSmth(3, function(){
    return 6+10
} )

console.log(result)

// comparisson
x = 5
y = 7
z = '5'
console.log(x == y) // != - НЕравно
console.log(x == z)
console.log(x === z) // строгое равенство



