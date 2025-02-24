console.log("===== Assignment (Highest and Lowest) =====")

let intListofArray=[]

let high_and_low=(stringData)=>{
   listOfNumber=stringData.split(' ')
   for(value of listOfNumber){
      intListofArray.push(Number(value))  
   }
   //  use ... spread operator 
   let max=Math.max(...intListofArray)
   let min=Math.min(...intListofArray)
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