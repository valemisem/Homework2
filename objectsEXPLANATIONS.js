let testUser = new Object() //created object through the command NEW
testUser.name = "Valya" // так задавать объекты сложнее для восприятия
testUser.age = 26
console.log(testUser)

let testUserSimple = {
    name: "Valya",
    age: 16,
    city: "Barcelona"
}
console.log(testUserSimple)

// testUserSimple.car = "Ford"
// console.log(testUserSimple)

let newProp = 'car'
let value = true
testUserSimple[newProp] = value // можем задать проперти через квадратные скобки
console.log(testUserSimple)

if(testUserSimple.age > 30 && testUserSimple.car == true) { // example how to do a condition 
    console.log('we can offer a credit')
} else {
    console.log('you are too young')
}


let anotherTestUser = testUserSimple // объект в объекте
anotherTestUser.name = 'Lena'
console.log(anotherTestUser)

let calculation = {
    april: 550,
    may: 531,
    march: 455,
    calculateAverage: function() {
        let average = (calculation.april + calculation.may + calculation.march)/3
        console.log(`average for ${calculation.april}, ${calculation.may}, ${calculation.march} is ${average}`)
    }
}

calculation.calculateAverage() // взяли объест и вызвали у него МЕТОД



