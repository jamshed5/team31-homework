console.log("=== Assignment 1 ===")
function getFullname(firstname,surname, useFormalName, isFemale){
    // check empty
    if (!firstname && !surname){   
        return `please provide complete name`
    }
    let title=""
    if (useFormalName){
        if(isFemale){
            return "Lady"+" "+firstname+" "+surname
        }
        else{
            return "Lord"+" "+firstname+" "+surname
        }
    }
    else{
        // trim (rm extra space)
        return (firstname+" "+surname).trim()
    }
}

// useFormalName (true, false)
// for male use Load
// for female use Lady
fullname1 =getFullname("Benjamin" ,"Hughes", true)
fullname2 =getFullname("" ,"") // empty 
fullname3 =getFullname("John" ,"Smith", false) 
fullname4 = getFullname("Sana", "bloach", true, true) // female
fullname5=getFullname("Sana", "Khan", true, false) //male
fullname6=getFullname("", "ali")
fullname7=getFullname("ahmed","")
console.log(fullname1)
console.log(fullname2)
console.log(fullname3)
console.log(fullname4)
console.log(fullname5)
console.log(fullname6)
console.log(fullname7)



console.log("=== Assignment 2 ===")
function userWear(temperature){
    if (temperature <0){
        return "jacket and a gloves"
    }
    else{
        return "shorts and a t-shirt"
    }
}

const clothesToWear = userWear(18)
console.log(clothesToWear)



console.log("=== Assignment 3 ===")
const class07Students = [];
function addStudentToClass(studentName) {
    //added queen (special case)
    if(studentName==="Queen"){
        class07Students.push(studentName) 
    }
    // class should have 6 students
    if (class07Students.length<6){
            if(class07Students.includes(studentName)){
                    console.log(`Student ${studentName} is already in the class`)
                }
            else{
                if(!studentName){
                    console.log("You cannot add an empty string to a class")
                }
                else{
                    class07Students.push(studentName)
                }
            }
    }
    else{
        console.log("Cannot add more students to class 07")
    }
}

function getNumberOfStudents() {
    return class07Students.length
}

addStudentToClass('')
addStudentToClass('Ali')
addStudentToClass('Asad')
addStudentToClass('John')
addStudentToClass('Khan')
// checking repetation
addStudentToClass('Adam') 
addStudentToClass('Adam')

addStudentToClass('Bilal')
// queen
addStudentToClass('Queen')

console.log(class07Students)
console.log("Total number of Students",getNumberOfStudents())



console.log("=== Assignment 4 ===")
let boughtCandyPrices =[]
let addCandy=(candyType , weight )=>{
    // price per gram (key value pair (object))
    const candyPrice={
        sweet:0.5,
        chocolate:0.7,
        toffee:1.1,
        chewing_gum:0.03
    }
    // check existance of candy
    if(candyPrice[candyType]!==undefined){
        // calculate price
        const price= candyPrice[candyType]*weight
        boughtCandyPrices.push(price)
    }
    else{
        console.log("candy type does not exist or invalid")
    }
}

let amountToSpend =Math.floor(Math.random() * 100)
// tricky bcz amountToSpend change at reload
console.log("Balance amount: ",amountToSpend)
let canBuyMoreCandy=()=>{
        let total_cost=0
        let i=0
        while(i<boughtCandyPrices.length){
            total_cost=total_cost+boughtCandyPrices[i]
            i++
        }
        console.log("Balance amount (after purchasing)",amountToSpend-total_cost)
        // check
        if (total_cost<amountToSpend){
            console.log("you can buy more")
        }
        else{
            console.log("you cannot buy more")
        }

}

addCandy("sweet", 20)
addCandy("toffee", 20)
addCandy("toffee", 20)
canBuyMoreCandy()


