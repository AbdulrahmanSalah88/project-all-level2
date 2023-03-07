// Calculate to Function

// const calc = document.getElementById("calc")
// const input = document.querySelector(".input")


// const num = (ahsb) => {
//  let circle =  3.14 * (ahsb**2)
//   calc.innerText = ` Area=> ${circle}`
// }



// input.addEventListener("click" , (eo) => {
//   num(input.value)
// })

// input.addEventListener("change" , (eo) => {
//   num(input.value)
// })






// (calculate to Return)

// const input = document.querySelector(".input")
// const calc = document.getElementById("calc")




// The socend way work=> (return)
// const area = () => {
//   return Math.PI * (input.value**2)
// }


// input.addEventListener("click" , (eo) => {
//   calc.innerText = `Area = ${area().toFixed(2)}   ` 
// })



// The first way work=> (Named Function)
const area = (s) => {
    const cc = Math.PI * (s**2)
    calc.innerText = `Area => ${Math.trunc(cc)}`
}


const input = document.querySelector(".input")
input.addEventListener("change" , (eo) => {
 area(input.value)  
})





