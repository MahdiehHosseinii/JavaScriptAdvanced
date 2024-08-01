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

const divElems = document.querySelectorAll("div")

console.log(divElems)

divElems.forEach(function (div, index) {
    div.addEventListener("click", function (event) {
        console.log("div " + (index + 1))
        event.target.style.backgroundColor = "yellow"
    })
})









