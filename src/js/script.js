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

let testNumber = 100
function pow(num1, num2) {
    testNumber = 1000
    return Math.random() * num1 * num2
    return num1 ** num2
}

console.log(pow(2, 3))
console.log(testNumber)











