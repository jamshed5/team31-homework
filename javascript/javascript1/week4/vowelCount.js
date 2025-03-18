console.log("===== Assignment (Vowel Count) =====")

let vowelCount=(str)=>{
   let stringList=str.toLowerCase().split('')
   let count=0
   let vowel='aeiou'
   let vowelList=vowel.split('')
   
   // nested loop and comparison one by one
   for(let i=0; i<vowelList.length; i++){
      for(let j=0; j<stringList.length; j++){
         if(vowelList[i]===stringList[j]){
            count=count+1
         }
      }   
   }
   return count
}
console.log(vowelCount("jamshed ali"))
console.log(vowelCount("i am learning js"))