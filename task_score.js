let userName = 'Valentina'
let userNameShort = userName.slice(0, 1)
let userSurname = 'Mikhailova'

const introScore = 50 
const gitScore = 120
const jsScore = 85

let averageTotal = (introScore + gitScore + jsScore)/3

const userInfo = `${userName} has an average score of ${averageTotal}`

console.log(introScore, " ", "балл за модуль 1")
console.log(gitScore, " ", "балл за модуль 2")
console.log(jsScore, " ", "балл за модуль 3")
console.log(averageTotal, " ", "среднее значение по всем модулям")
console.log(userNameShort, ". ", userSurname)

console.log(userInfo)

