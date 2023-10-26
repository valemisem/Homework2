const sampleData = require ('./test.json')
// console.log(sampleData[0].name) // как вывести конкретный объект массива и конкретное свойство

function first(array) { // функция массива для вывода всех имейлов
    let emailsArray = []
    array.forEach(userData => {
        // console.log(userData.email) // put to console all emailsArray of generated data
        // вывод происходил СТРОКОЙ
        emailsArray.push(userData.email) // создали МАССИВ ИМЕЙЛОВ
    });
    console.log(emailsArray) // сейчас вывод просиходит МАССИВОМ
}
first(sampleData)