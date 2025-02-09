console.log("==== Assignment 1 ====")
const yearOfBirth=1986
const yearFuture=2027
const age= yearFuture- yearOfBirth
console.log(`You will be ${age} years old in ${yearFuture}`)


console.log("==== Assignment 2 ====")
const dogYearOfBirth=2022
const dogYearFuture=2027
let dogYear=0
const shouldShowResultInDogYears=true

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
    const width=8, height=10, depth=10
    let volumeInMeters=width*height*depth

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
    const volumeInMeters=5*11*8
    const gardenSizeInM2=70
    const housePrice=1000000
    calHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    if(calHousePrice<housePrice){
        console.log(`julia paying too mush e.g ${calHousePrice} < ${housePrice}`)
    }
    else{
        console.log(`julia paying too less e.g ${calHousePrice} > ${housePrice}`)
    }

}


console.log("==== Assignment 4 ====")
const firstWords=[
    "Easy", "Awesome", "Innovative", 
    "Corporate", "NextGen", "Ultra", 
    "Hyper", "Smart", "Cloud", 
    "Quantum"]
const secondWords=[
    "Tech", "Solutions", "Enterprises", 
    "Hub", "Industries", "Labs", 
    "Networks", "Systems", "Ventures", 
    "AI"]

let startupName=firstWords[Math.floor(Math.random() * 10)]+" "+secondWords[Math.floor(Math.random() * 10)]
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`)