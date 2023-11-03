// function logUserName(userName) {
//   userName = userName + " privet";
//   console.log(userName);
// }

// let userName = "Ivan";

// logUserName(userName);

// function calculateLength (text) {
//     return text.length
// }
//  let a = calculateLength ('Valentina')
//  console.log(a) //changes

//  let result = calculateLength('bbfffbbbbb')
//  console.log(result)

// from the second video:

let respPositive200 = {   // объект, который и является респонсом
  code: 200,
  body: {
    text: 'some positive message'
  }
}
let respRedirect300 = { // объект второй, тоже респонс
  code: 300,
  body: {
    text: 'redirect'
  }
}

let isResponseOk = (code, expectedCode) => {   // мы используем эти наши два объекта для проверки функции ("скармиливаем" объекты функции)
  if (code === expectedCode) {  // цель: чтобы функция получила текстовое сообющение которое находится внутри объекта
    return true
  } else {
    return false
  }
}

function getInfoFromResponse (response, codeValidation, expectedCode) {
  let text = response.body.text
  if (!codeValidation(response.code, expectedCode)) {
    console.log(`Not a ${expectedCode}`)
  }
  let info = {}
  info.text = text
  info.code = response.code
  
  return info

}

console.log(getInfoFromResponse(respPositive200, isResponseOk, 200))

let someArrowFunction = () => {return 55}
console.log(someArrowFunction())

let isValid = (code) => code == 200 // boolean true false, стрелочная функция для сокращения кода
console.log(isValid(200))