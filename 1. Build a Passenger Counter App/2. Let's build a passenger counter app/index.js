// initialize at 0
// listen for clicks on the increment button
// increment the count variable when button is clicked

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
   count += 1 
    countEl.innerText = count
}



function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    
}

let welcomeEl = document.getElementById("welcome-el")
let fullName = "Mercy Wairimu"
let greeting = "Welcome to the Counter "
 welcomeEl.textContent = greeting + fullName

welcomeEl.innerText += " 👋🏽" 









