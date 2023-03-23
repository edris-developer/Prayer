






let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
console.log(saveEl)

function increment() {
 
  count = count + 1 
  countEl.textContent = count
 
}
function save() {
  let countStr = count + " | "
  
  saveEl.innerHTML += countStr
  countEl.textContent = 0 
  count = 0
  }





// let firstName = "EDRIS"
// let lastName = "AHMADY"

// let fullName = firstName +  " "  + lastName

// console.log(fullName)


// let firstName = "EDRIS"
// let hälsa = "tjenare"

// function hälsaEdris(){
//     console.log(hälsa +  " " + firstName + "!!") 
// }

// hälsaEdris()

// let myPoints = 3

// function add3Points(){
//     myPoints += 3
// }

// function remove1Points(){
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()


// console.log(myPoints)


//  console.log("2" + 2)  //
//  console.log(11 + 7)  //
// // // console.log(6 + "5")//
// // // console.log("My points:" + 5 + 9)
// // // console.log(2 + 2) //
// // // console.log("11" + "14" )



//ERROR WARNING MESSAGE

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase(){
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again later"
// }







// let age = 20

// console.log(age)


// if(age === 21){
//   console.log("Welcome!")
// } else (age < 21){
//   console.log("you can not enter the club")
// }




//LOOPS
// for (let count = 10; count < 21; count += 1){
//   console.log(count)
// }

// for (let count = 10; count <101; count +=10){
//   console.log(count)
// }



// let card = [5, 7, 8]

// for (let count = 0; count < card.length){
//   console.log(card[count])
// }


//ARRAYS


// let experience  = ["Edris Ahmady", "almost stupid", "loves programming"]

// let per = ["Edris", 17, true]

// let cards = [7, 4]

// cards.push(5)

// console.log(cards)

// let messages = [
//   "HEY HUR MÅR DU",
//   "fin väder idag eller?",
//   "meow"
// ]

// let newMessages = "same here!"

// messages.push(newMessages)

// console.log(messages)

// messages.pop()
// console.log(messages)


// console.log(isAlive)
// console.log(hasBlackJack)


// let player1Time = 102
// let player2Time = 105

// function getFastestRacerTime(){
//     if(player1Time < player2Time){
//       return player1Time
      
//     }  else if (player2Time < player1Time){
//       return player2Time

//     } else {
//        return player1Time
//     }
// }  

// // let fastestRace = getFastestRacerTime()
// //   console.log(fastestRace)

// function getTotalRaceTIme(){
//   return player1Time + player2Time
// }

// let totaltime = getTotalRaceTIme()
// console.log(totaltime)


// let randomNumber  = Math.random() * 6 

// console.log(randomNumber)

let flooredNumber = Math.floor(Math.random() * 6 )
console.log(flooredNumber)

