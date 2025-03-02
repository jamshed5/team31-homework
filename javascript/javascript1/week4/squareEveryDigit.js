console.log("===== Assignment (Square Every Digit) =====")

let squareArray=[]
let squareDigit=(num)=>{
   num=String(num)
   for(value of num){
    let intValue=parseInt(value)
    squareArray.push(intValue*intValue)
   }
   let numString=""
   for(let i=0; i<squareArray.length; i++){
    numString=numString+squareArray[i]
   }
   return Number(numString)
}

let num=765 
let result=squareDigit(num)
console.log(result)
console.log(typeof(result))