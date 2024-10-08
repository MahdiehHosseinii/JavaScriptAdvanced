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


// let nums = [2, 4, 1]
//
// function sum(a, b, c) {
//     console.log("a: ", a)
//     console.log("b: ", b)
//     console.log("c: ", c)
//     return a + b + c
// }
//
// console.log(sum(2, 4, 1))
//
// console.log(sum(...nums))
//
// let user = {
//     id: 1,
//     name: "amir",
//     age: 23
// }
//
// let newUser = {...user}
//
// newUser.age = 24
//
// console.log("user: ", user)
// console.log("new user: ", newUser)


// function sum  (a, b, c) {
// console.log("a", a)
// console.log("b", b)
// console.log("c", c)
//
// console.log(arguments)
//
//     let sumAllArgs = 0
//
//     Array.from(arguments).forEach(item => sumAllArgs += item)
//
//     return sumAllArgs
// }
//
// console.log(sum(2, 1, 4, 5, 2, 10))


// const sum = (...args) => {
//     console.log("args", args)
//
//     let sumAllArgs = 0
//
//     args.forEach(item => sumAllArgs += item)
//
//     return sumAllArgs
// }
//
// console.log(sum(2, 1, 4, 5, 2, 10))


// let user = [1, "ali", 12]
//
// let userId = user[0]
// let userName = user[1]
// let userAge = user[2]
//
// let [userId, userName, userAge] = user
//
// console.log("userId", userId)
// console.log("userName", userName)
// console.log("userAge", userAge)
//
// const showNumbers = () => [1, 3, 4, 2, 7, 8]
//
// let [firstNum, , , secondNum, thirdNum] = showNumbers()
//
// console.log(firstNum)
// console.log(secondNum)
// console.log(thirdNum)


// let user = [1 , "ali" , 21 , "tehran"]
//
// let [userId , userName , userAge, userCity = "abhar"] = user
//
// console.log(userId)
// console.log(userName)
// console.log(userAge)
// console.log(userCity)

// let user = {
//     id:1 ,
//     name:"amir" ,
//     age: 22
// }
//
// let id = user.id
// let name = user.name
// let age = user.age
//
// let {id: id , name , age} = user
// let {id: userId , name = "amin" , age} = user
//
// console.log(userId)
// console.log(name)
// console.log(age)
//
// let users = [
//     {id: 1, name: "ali", age: 22, email: "ali@gmail.com"},
//     {id: 2, name: "amir", age: 23, email: "amir@gmail.com"},
//     {id: 3, name: "amin", age: 27, email: "amin@gmail.com"},
//     {id: 4, name: "babak", age: 20, email: "babak@gmail.com"}
// ]
// const getUser = userId => {
//
//     let mainUser = users.find(user => user.id == userId)
//
//     return mainUser
// }
//
// console.log(getUser(3))
//
// let {name: userName , email: userEmail} = getUser(2)
//
// console.log("username: " , userName)
// console.log("user email: " , userEmail)
//
// let userIdInput = document.getElementById("user-id")
//
// userIdInput.addEventListener("keypress", event => {
//     let {keyCode, target: input} = event
//
//     if (keyCode === 13) {
//         let {name, email} = getUser(input.value)
//         console.log("username: ", name)
//         console.log("user email: ", email)
//     }
// })


// let type = "fake"
// let txt = "lorem epsom is " + type
//
// console.log(txt)

// let type = "fake"
// let txt = `lorem epsom is ${type} => ${Math.pow(5 , 2)}`
// let names = `ali
// amir
// amin`
//
// console.log(names)


// let numbers = [1, 3, 2, 5, 4]
// let userName = "sabzlearn.ir"
// let user = {
//     name: "amir",
//     age: 23,
// }

// for (let property of user) {
//     console.log(property)
// }

// function sum() {
//     console.log(arguments)
//
//     let allArgSum = 0
//
//     for (let arg of arguments) {
//         allArgSum += arg
//     }
//     return allArgSum
// }
//
// console.log("Sum: ", sum(1, 2, 3, 4))
//
// let liElems = document.getElementsByTagName("li")
//
// for (let li of liElems) {
//     console.log(li)
//     li.addEventListener("click", e => e.target.remove())
// }
//
// console.log(liElems)


// let user = {
//     id: 1,
//     name: "amir",
//     age: 23
// }
//
// for (let item in user) {
//     console.log(`user.${item}: ${user[item]}`)
// }


// let username = "amir"
//
// console.log(username.padStart(10, "-"))
//
// let size = "5"
//
// console.log(size.padStart(2, "0"))
//
// let phoneNumber = "09352509942"
// let last4Digits = phoneNumber.slice(-4)
// let finalPhoneNumber = last4Digits.padStart(phoneNumber.length, "*")
//
// console.log(finalPhoneNumber)


// let productPrice = 7_000_000
// let postCost = 5_000
//
// console.log("total price: ", productPrice + postCost)


// let userAge = 14
//
// if (userAge > 18) {
//     alert("you logged in successfully :)")
// }
//
// userAge > 18 && alert("you logged in successfully :)")
//
// userAge < 18 && console.log("you are not regestered")


// let userAge = 18
//
// userAge !== 18 || alert("fake")
//
// let userType = "admin"
// let userToken = userType || "user"
//
// console.log(userToken)


// import {isLogin, userRegister, usersCount as usersLength} from './func.js'
//
//
// let newUserName = prompt('Enter User Name: ')
// let newUserAge = prompt('Enter User Age: ')
//
// console.log('Users Count:', usersLength);
//
// // console.log(userRegister(newUserName, newUserAge));
//
// console.log(isLogin(41));


// import mohammad from "./func.js"
//
// console.log("users count: ", mohammad)


// let userAge = Number(prompt("Enter Your Age: ", 18))
//
// console.log("User Age: ", userAge)
// console.log("User Age Type: ", typeof userAge)


// let $ = document
// const registerForm = $.querySelector('.register-form')
// const nameInput = $.querySelector('.name-input')
// const passwordInput = $.querySelector('.password-input')
// const emailInput = $.querySelector('.email-input')
// const usersTableElem = $.querySelector('table')
//
// let db = null
// let objectStore = null
//
// window.addEventListener('load', () => {
//
//     let DBOpenReq = indexedDB.open('SabzLearn', 18)
//
//     DBOpenReq.addEventListener('error', (err) => {
//         console.warn('Error', err);
//     })
//
//     DBOpenReq.addEventListener('success', (event) => {
//         db = event.target.result
//         getUsers()
//         console.log('Success', event.target.result);
//     })
//
//     DBOpenReq.addEventListener('upgradeneeded', (event) => {
//
//         db = event.target.result
//
//         console.log('Old V:', event.oldVersion);
//         console.log('New V:', event.newVersion);
//
//         if (!db.objectStoreNames.contains('users')) {
//             objectStore = db.createObjectStore('users', {
//                 keyPath: 'userID'
//             })
//         }
//
//         if (db.objectStoreNames.contains('courses')) {
//             db.deleteObjectStore('courses')
//         }
//
//         // db.createObjectStore('courses')
//
//         console.log('upgrade', db.objectStoreNames);
//
//     })
// })
//
// registerForm.addEventListener('submit', event => {
//     event.preventDefault()
//
//     let newUser = {
//         userID: Math.floor(Math.random() * 9999),
//         name: nameInput.value,
//         password: passwordInput.value,
//         email: emailInput.value,
//     }
//
//     let tx = createTX('users', 'readwrite')
//
//     tx.addEventListener('complete', (event) => {
//         console.log('Tx', event)
//     })
//
//     let store = tx.objectStore('users')
//     let request = store.add(newUser)
//
//     request.addEventListener('error', (err) => {
//         console.warn('Request Error:', err)
//     })
//
//     request.addEventListener('success', (event) => {
//
//         console.log('Request', event)
//         clearInputs()
//         getUsers()
//     })
//
//
// })
//
// function clearInputs() {
//     nameInput.value = ''
//     passwordInput.value = ''
//     emailInput.value = ''
// }
//
// function getUsers() {
//
//     let tx = createTX('users', 'readonly')
//
//     tx.addEventListener('complete', (event) => {
//         console.log('Tx', event)
//     })
//
//     let store = tx.objectStore('users')
//     let request = store.getAll()
//
//     request.addEventListener('error', (err) => {
//         console.warn('Get Request Error:', err)
//     })
//
//     request.addEventListener('success', (event) => {
//
//         let allUsers = event.target.result
//
//         usersTableElem.innerHTML = `<tr>
//                                         <th>ID</th>
//                                         <th>Name</th>
//                                         <th>Password</th>
//                                         <th>Email</th>
//                                         <th>actions</th>
//                                     </tr>`
//
//         usersTableElem.innerHTML += allUsers.map(user => {
//             return `<tr>
//                         <td>${user.userID}</td>
//                         <td>${user.name}</td>
//                         <td>${user.password}</td>
//                         <td>${user.email}</td>
//                         <td><a href="#" onclick="removeUser(${user.userID})">remove</a></td>
//                     </tr>`
//         }).join('')
//
//         // console.log(usersTemplateArray);
//
//     })
//
// }
//
// function removeUser(userID) {
//
//     event.preventDefault()
//
//     let tx = createTX("users", "readwrite")
//
//     tx.addEventListener('complete', (event) => {
//         console.log('delete Tx', event)
//     })
//
//     let store = tx.objectStore('users')
//     let request = store.delete(userID)
//
//     request.addEventListener('error', (err) => {
//         console.warn('delete Request Error:', err)
//     })
//
//     request.addEventListener('success', (event) => {
//
//         console.log('delet Request success', event)
//
//         getUsers()
//     })
// }
//
// function createTX(storeName, mode) {
//     let tx = db.transaction(storeName, mode)
//
//     tx.addEventListener('error', (err) => {
//         console.warn('Tx Error:', err)
//     })
//
//     return tx
// }


//  let regexCode = /a.m/
// let regexCode = /a.+n/
// let text = "i am mohammad amin , web developer"
//
// console.log(regexCode.test(text))


// let emailRegEx = /.+@.+.com/
// let userEmail = prompt("please Enter your email: ")
//
// console.log(emailRegEx.test(userEmail))


// function removeListItem(el) {
//
//     el.remove()
//
//     console.log(el)
// }
//
// function sumNumbers() {
//
//     let sum = 0
//
//     for (let arg of arguments) {
//         sum += arg
//     }
//
//     console.log("this is in function", this)
//
//     return sum
// }
//
// console.log(sumNumbers(2, 5, 3))
//
// let user = {
//     id: 1,
//     name: "amir",
//     age: 23,
//
//     walk: function () {
//         console.log("user walked")
//     },
//
//     showThis: function () {
//         console.log(this)
//     },
//
//     setName: function (newName) {
//         this.name = newName
//     },
//
//     setAge: function (newAge) {
//         this.age = newAge
//     }
// }
//
// user.setAge(25)
//
// console.log(user)


// let user = {
//     id: 1,
//     name: "amir",
//     age: 23
// }
//
// let user2 = {
//     id: 2,
//     name: "amin",
//     age: 19
// }
//
// function showUser(score, city) {
//     console.log(this.name + " is " + this.age + " years old => score: ", score, "city: " + city)
// }
//
// showUser.call(user, 20, "tehran")
// showUser.call(user2, 15, "shomal")
//
// showUser.apply(user, [20, "tehran"])
// showUser.apply(user2, [15, "shomal"])
//
// showUser()


// let user = {
//     id: 1,
//     name: "amir",
//     age: 23,
//
//     walk: function () {
//         console.log(this.name + " is walking")
//     },
//     aboutUser: function () {
//         setTimeout(function () {
//             console.log(this.name, " is ", this.age + " years old")
//         }.bind(user), 3000)
//
//     }
//
//     aboutUser: function () {
//         setTimeout(() => {
//             console.log(this.name, " is ", this.age + " years old")
//         }, 3000)
//
//     }
// }
//
// let user2 = {
//     id: 2,
//     name: "amin",
//     age: 18,
// }
//
// user.aboutUser()


// function Animal() {
//     this.name = "dog"
//     this.color = "brown"
//     this.canFly = false
//     this.footsCount = 4
// }
//
// let dogAnimal = new Animal()
//
// console.log(dogAnimal)
//
// function person(personId, personUserName, personAge, personJob, personType) {
//     this.id = personId
//     this.username = personUserName
//     this.age = personAge
//     this.job = personJob
//     this.type = personType
//
// }
//
// let userAli = new person(1, "ali", 25, "JS developer", "user")
// let userAmir = new person(2, "amir", 23, "manager", "admin")
//
// console.log(userAmir)


function User(username, userAge, userJob) {
    this.name = username
    this.age = userAge
    this.job = userJob

    this.getName = function () {
        return this.name
    }

    this.getAge = function () {
        return this.age
    }

    this.getJob = function () {
        return this.job
    }

    this.setName = function (newName) {
        this.name = newName
    }

    this.setAge = function (newAge) {
        this.age = newAge
    }

    this.setJob = function (newJob) {
        this.job = newJob
    }
}

let userAli = new User("ali", 24, "JS developer")

userAli.setAge(34)

console.log(userAli.getAge())




















