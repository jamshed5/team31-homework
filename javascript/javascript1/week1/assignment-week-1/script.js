console.log("==== Assignment 1 ====")
let yearOfBirth=1986
let yearFuture=2027
let age= yearFuture- yearOfBirth
console.log(`You will be ${age} years old in ${yearFuture}`)


console.log("==== Assignment 2 ====")
let dogYearOfBirth=2022
let dogYearFuture=2027
let dogYear=0
let shouldShowResultInDogYears=true

dogYear=dogYearFuture-dogYearOfBirth

if (shouldShowResultInDogYears){
    // dog year 
    console.log(`Your dog will be ${dogYear} years old in ${dogYearFuture}`)
}else{
    // human year 
    dogYear=dogYear * 7
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`)
}


console.log("==== Assignment 3 ====")
// peter
let FriendName='peter'
if (FriendName==='peter'){
    // logic
    let volumeInMeters=8*10*10
    let gardenSizeInM2=100
    let housePrice=2500000
    calHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    if(calHousePrice<housePrice){
        console.log(`peter paying too much e.g ${calHousePrice} < ${housePrice}`)
    }
    else{
        console.log(`peter paying too less e.g ${calHousePrice} > ${housePrice}`)
    }

}
else if(FriendName==='julia'){
    // logic
    let volumeInMeters=5*11*8
    let gardenSizeInM2=70
    let housePrice=1000000
    calHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    if(calHousePrice<housePrice){
        console.log(`julia paying too mush e.g ${calHousePrice} < ${housePrice}`)
    }
    else{
        console.log(`julia paying too less e.g ${calHousePrice} > ${housePrice}`)
    }

}


console.log("==== Assignment 4 ====")
let firstWords=[
    "Easy", "Awesome", "Innovative", 
    "Corporate", "NextGen", "Ultra", 
    "Hyper", "Smart", "Cloud", 
    "Quantum"]
let secondWords=[
    "Tech", "Solutions", "Enterprises", 
    "Hub", "Industries", "Labs", 
    "Networks", "Systems", "Ventures", 
    "AI"]

let randomFirstWord = firstWords[Math.floor(Math.random() * 10)]
// console.log(randomFirstWord)

let randomSecondWords = secondWords[Math.floor(Math.random() * 10)]
// console.log(randomSecondWords)

let startupName=randomFirstWord+" "+randomSecondWords
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`)