function calculateExpenses (food, restaurants, utilities, school){
    return food + restaurants + utilities + school
}

function calculateSavings (expenses = calculateExpenses(20, 40, 500, 500), salary = 5770){ 
    return salary - expenses // parameter has a function on default
}

// console.log(calculateSavings(5000, 10000))

// console.log(calculateSavings(calculateExpenses(20, 40, 500, 500), 10000))

console.log(calculateSavings(10, 400))