// let textElem = document.getElementsByClassName("text")[0]
// let titleElem = document.getElementById("title")
// console.log(content)

// let $ = document
// let autoCompleteWrapper = $.querySelector(".search-input")
// let searchInputElem = $.querySelector("input")
// let autoCompleteBox = $.querySelector(".autocom-box")
//
// searchInputElem.addEventListener("keyup", function () {
//     let searchValue = searchInputElem.value
//
//     if (searchValue) {
//         autoCompleteWrapper.classList.add("active")
//
//         let filteredWords = suggestions.filter(function (word) {
//             return word.toLowerCase().startsWith(searchValue.toLowerCase())
//         })
//
//         suggestionWordsGenerator(filteredWords)
//
//     } else {
//         autoCompleteWrapper.classList.remove("active")
//     }
// })
//
// function suggestionWordsGenerator(wordsArray) {
//     let listItemsArray = wordsArray.map(function (word) {
//         return "<li>" + word + "</li>"
//     })
//
//     let customListItem
//     if (!listItemsArray.length) {
//         customListItem = "<li>" + searchInputElem.value + "</li>"
//     } else {
//         customListItem = listItemsArray.join("")
//     }
//
//     autoCompleteBox.innerHTML = customListItem
//
//     select()
// }
//
// function select() {
//     let allListItems = autoCompleteBox.querySelectorAll("li")
//     allListItems.forEach(function (wordItem) {
//         wordItem.addEventListener("click", function (event) {
//             searchInputElem.value = event.target.textContent
//             autoCompleteWrapper.classList.remove("active")
//         })
//     })
// }

// const btn = document.querySelector("button")
//
// btn.addEventListener("click" , function () {
//     console.log("Click shod:)")
// } , {once: true})

// const divElems = document.querySelectorAll("div")
//
// console.log(divElems)
//
// divElems.forEach(function (div, index) {
//     div.addEventListener("click", function (event) {
//         console.log("div " + (index + 1))
//         event.target.style.backgroundColor = "yellow"
//     } , {capture: true})
// })

// const divElems = document.querySelectorAll("div")
//
// console.log(divElems)
//
// divElems.forEach(function (div, index) {
//     div.addEventListener("click", function (event) {
//         event.stopPropagation()
//         console.log("div " + (index + 1))
//         event.target.style.backgroundColor = "yellow"
//     })
// })

// const listItems = document.querySelectorAll("li")
// const inputElem = document.querySelector("input")
// const languagesContainer = document.querySelector(".list")

// listItems.forEach(function (listItem) {
//     listItem.addEventListener("click" , function (event) {
//         console.log(event.target)
//         event.target.remove()
//     })
// })

// languagesContainer.addEventListener("click", function (event) {
//     if (event.target.tagName === "LI") {
//         event.target.remove()
//     }
// })
//
// inputElem.addEventListener("keypress", function (event) {
//     if (event.keyCode === 13) {
//         let newLanguageLi = document.createElement("li")
//
//         newLanguageLi.innerHTML = event.target.value
//
//         languagesContainer.append(newLanguageLi)
//
//         inputElem.value = ""
//     }
// })

// let $ = document
//
// const inputElem = $.querySelector('#input-field')
// const btnSaveElem = $.querySelector('#btn-save')
// const btnDeleteElem = $.querySelector('#btn-delete')
// const colorsBox = $.querySelectorAll('.color-box')
// const notesContainer = $.querySelector('#listed')
//
// notesContainer.addEventListener('click', function (event) {
//     if (event.target.tagName === 'P') {
//         event.target.parentElement.remove()
//     }
// })
//
// colorsBox.forEach(function (colorBox) {
//     colorBox.addEventListener('click', function (event) {
//         let mainColor = event.target.style.backgroundColor
//         inputElem.style.backgroundColor = mainColor
//     })
// })
//
// function generateNewNote() {
//     let newNoteDivElem = $.createElement('div')
//     newNoteDivElem.className = 'card shadow-sm rounded'
//     let inputBg = inputElem.style.backgroundColor
//     newNoteDivElem.style.backgroundColor = inputBg
//
//     let newNotePElem = $.createElement('p')
//     newNotePElem.className = 'card-text p-3'
//     newNotePElem.innerHTML = inputElem.value
//
//     newNoteDivElem.append(newNotePElem)
//
//     notesContainer.append(newNoteDivElem)
//
//     inputElem.value = ''
//     inputElem.style.backgroundColor = '#fff'
// }
//
// btnDeleteElem.addEventListener('click', function () {
//     inputElem.value = ''
//     inputElem.style.backgroundColor = '#fff'
// })
//
// inputElem.addEventListener('keydown', function (event) {
//     if (event.keyCode === 13) {
//         if (inputElem.value) { // 'dsv' '' ' '
//             generateNewNote()
//         }
//
//     }
// })
//
// btnSaveElem.addEventListener('click', generateNewNote)

// const btn = document.querySelector("button")
//
// function logger(callbackFunc) {
//     console.log("logged (1)")
//     callbackFunc()
// }
//
// function logger2() {
//     console.log("logged (2)")
// }
//
// logger(logger2)
//
// function clickHandler() {
//     console.log("clicked")
// }
//
// btn.addEventListener("click", clickHandler)
// let numbers = [1, 2, 3, 4, 5, 6]
//
// numbers.map(function (item) {
//     console.log(item)
// })

// console.log(1)
// console.log(2)
// setTimeout(function () {
//     console.log(3)
// }, 3000)
//
// console.log(4)
// console.log(5)

// function firstLogs() {
//     console.log(1)
//     console.log(2)
// }
//
// function middleLog(callback) {
//     setTimeout(function () {
//         console.log(3)
//         callback()
//     }, 3000)
// }
//
// function lastLogs() {
//     console.log(4)
//     console.log(5)
// }
//
// firstLogs()
// middleLog(lastLogs)

// let books = [
//     {id: 1, name: "Bi Shouri", price: 95000},
//     {id: 2, name: "Shahname", price: 120000},
//     {id: 3, name: "Boostan", price: 50000}
// ]
//
// function addBooks(name, price, callback) {
//     let newBooks = {
//         id: books.length + 1,
//         name: name,
//         price: price
//     }
//     setTimeout(function () {
//         books.push(newBooks)
//         callback()
//     }, 4000)
// }
//
// function logBooks() {
//     console.log(books)
// }
//
// addBooks("Golestan", "60000", logBooks)

// let testNumber = 100
// function pow(num1, num2) {
//     testNumber = 1000
//     return Math.random() * num1 * num2
//     return num1 ** num2
// }
//
// console.log(pow(2, 3))
// console.log(testNumber)

// let todoInputElem = document.querySelector(".todo-input")
// let todolist = document.querySelector(".todo-list")
//
// function trim(val) {
//     return val.trim()
// }
//
// function toLowerCase(val) {
//     return val.toLowerCase()
// }
//
// function insertToLi(todoVal) {
//     return "<li>" + todoVal + "</li>"
// }
//
// function addTodo(event) {
//     if (event.charCode === 13) {
//         todolist.insertAdjacentHTML("beforeend", insertToLi(toLowerCase(trim(todoInputElem.value))))
//         todoInputElem.value = ""
//     }
// }
//
// todoInputElem.addEventListener("keypress", addTodo)


// let number = 37
//
// function showNumber() {
//     let number = 20
//
//     console.log("in function", number)
// }
//
// console.log("out of function", number)
//
// showNumber()

// function addNewBook(callbackFunc) {
//     codes
// }
//
// function hofExp() {
//     return function () {
//         console.log("i am inner function :)")
//     }
// }
//
// hofExp()()
//
// let hofInner = hofExp()
//
// hofInner()
//
// let numbers = [1, 2, 3, 4, 5]
//
// numbers.map(function () {
//     codes
// })


// "use strict"
//
// number = 12
//
// console.log(number)
//
// function showValue(a, a) {
//     //codes
// }
//
// NaN = 20
// undefind = 78
//
// console.log(010 + 020)
//
// let eval = 12
//
// let username = "amir"
//
// delete username

// function showValue() {
//     "use strict"
//     numberVal = 44
// }
//
// showValue()

// const sum = (num1, num2) => {
//     let addNumbers = num1 + num2
//     return addNumbers
// }
// console.log(sum(8, 12))
//
// const pow = (num1, num2) => num1 ** num2
//
// console.log(pow(2, 3))
//
// const logger = val => console.log(val)
//
// logger("test text")
//
// const generateUser = (id, name, age = 18) => {
//     return {id: id, name: name, age: age}
// }
// console.log(generateUser(1, "amir", 23))

// let numbers = [1, 60, 43, 39, 78, 90, 24, 5]
//
// // numbers.forEach(number => console.log(number))
//
// let mapDatas = numbers.map(number => number * 2)
//
// console.log(mapDatas)
//
// let btn = document.querySelector(".btn")
//
// btn.addEventListener("click", () => {
//     btn.style.backgroundColor = "red"
// })

// let numbers = [1, 2, 3, 5, 7, 18]
//
// console.log(numbers[1] , numbers[3])
// numbers.forEach(number => console.log(number))
//
// let copyNumbers = numbers
//
// copyNumbers.push(90)
//
// console.log("numbers:", numbers)
// console.log("copy numbers:", copyNumbers)
//
// console.log(...numbers)
//
// let copyNumbers = [...numbers]
//
// console.log(copyNumbers)
//
// copyNumbers.push(90)
//
// console.log("numbers:", numbers)
// console.log("copy numbers:", copyNumbers)
//
// let nums1 = [1, 2, 3, 4]
// let nums2 = [5, 6, 7, 8]
//
// let allNumbers = [...nums1, 100, ...nums2]
//
// console.log(allNumbers)


let nums = [2, 4, 1]

function sum(a, b, c) {
    console.log("a: ", a)
    console.log("b: ", b)
    console.log("c: ", c)
    return a + b + c
}

console.log(sum(2, 4, 1))

console.log(sum(...nums))

let user = {
    id: 1,
    name: "amir",
    age: 23
}

let newUser = {...user}

newUser.age = 24

console.log("user: ", user)
console.log("new user: ", newUser)




