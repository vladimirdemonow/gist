// Дан массив из чисел
const numbers = [ 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6]
const negativeNumbers = [-1, -2, -3, -4, -5, -6, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6]
const littleNumbers = [ 1, 2, 3, 4 ]


// Сделайте из него массив, состоящий из квадратов этих чисел.
function getNxN_Numbers(numbers) {
    return numbers.map(( element ) => {
        return element * element
    })
}

// !log
// console.log(getNxNnumbers(numbers));



// Верните массив, состоящий только из уникальных значений(убрать все дубликаты, число в новом массиве не должно повторяться)
function getUniqNumbers(numbers) {
    const result = new Set();

    numbers.forEach((element) => {
        result.add(element)
    })

    return Array.from(result)
}

// !log
// console.log(getUniqNumbers(numbers));



// Проверьте то, что все элементы в массиве больше нуля (результат - true/false).
function notSubZero(numbers) {
    let result = true
    let i = 0

    while (result) {
        if(!numbers[i]) {
            break
        }

        result = numbers[i] > 0;
        i++
    }

    return result
}

// !log
// console.log(notSubZero(numbers));
// console.log(notSubZero(negativeNumbers));



// Оставьте в нем только отр Yицательные числа.
function getNegativeNumbers(numbers) {
    return numbers.filter((element) => {
        return element < 0
    })
}

// console.log(getNegativeNumbers(negativeNumbers));


// Найдите сумму этих чисел
function sumNumbers(numbers) {
    return numbers.reduce((sum, element) => {
        return sum + element
    }, 0)
}

// console.log(sumNumbers(littleNumbers));



// Дан массив, в нем могут быть обычные элементы и подмассивы(например [1, 2, [3, 4], 5, {a: 7}]). Оставьте в нем только подмассивы
const array = [1, 2, [3, 4], 5, {a: 7}]


function getArrays(array) {
    return array.filter((element) => {
        return element instanceof Array
    })
}

// console.log(getArrays(array));


// Работа со строками
// - Верните количество слов в строке, длина которых больше 4 символов.
const string = 'Hello my name is Peter'

function getWordsMore4(string) {
    const stringArray = string.split(' ')

    return stringArray.reduce((sum, element) => {
        return sum + (element.length >= 4 ? 1 : 0)
    }, 0)
}

// console.log(getWordsMore4(string));


// Если в строке имеется шестизначное число(ни больше, ни меньше) - верните его, как результат функции. Число может быть не отделено от других символов пробелами. 
// Кейсы (строка - результат):
// 	 “abcd123456ef5234” - 123456
// 	“abcef12345678ghi654321klm” - 654321
// 	“abcdef” - false
// 	“abc1234567asd” - false
// 	“abc12345asd” - fasle


// Ситуации

// После шестизначного числа, идет не шестизначноее

// Нужно удалить данные из результата

const string1 = 'abcd123456ef5234'
const string2 = 'abcef12345678ghi654321klm'
const string3 = 'abc1234567asd'
const string4 = 'abcdef'
const string5 = 'abc12345asd'


function getNumberLess6(string) {
    const stringArray = string.split('')
    let array = []
    let isDone = false
    let result = false
    
    stringArray.map((element) => {
        if(!isNaN(+element) && array.length <= 6 && !isDone) {
            array.push(element)
        } else {

            if(isDone) return

            if(array.length === 6) {
                result = array
                isDone = true
                return
            }

            if (array.length > 6) {
                array = []
                isDone = false
                result = false
            }
        }
    })

    return result
}
// !log
// console.log(getNumberLess6(string1));
// console.log(getNumberLess6(string2));
// console.log(getNumberLess6(string3));
// console.log(getNumberLess6(string4));
// console.log(getNumberLess6(string5));







