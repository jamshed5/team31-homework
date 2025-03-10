console.log("===== Assignment (Square Every Digit) =====")

let squareDigit = (num) => {
   let numString = ""
   for (let value of String(num)) {
      numString += value * value
   }
   return Number(numString)
}

let num = 765
let result = squareDigit(num)
console.log(result)
