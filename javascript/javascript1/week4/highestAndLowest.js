console.log("===== Assignment (Highest and Lowest) =====")

let high_and_low=(stringData)=>{
   listOfNumber=stringData.split(' ')
   let max=Math.max(...listOfNumber)
   let min=Math.min(...listOfNumber)
   return `"${max} ${min}"`
}

console.log(high_and_low("1 2 3 4 5"))
console.log(high_and_low("1 2 -3 4 5"))
console.log(high_and_low("1 9 3 4 -5"))



/*
// understanding about ...(spread operator)

let data=[1,2,3,4,5]
let displayWithoutSpreadOperator=(data)=>{
   for (value of data){
      console.log(value)
   }
}
let displayWithSpreadOperator=(...data)=>{
   for (value of data){
      console.log(value)
   }
}
displayWithoutSpreadOperator(data)
displayWithSpreadOperator(data)
*/