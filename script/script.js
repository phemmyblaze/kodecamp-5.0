// const name = "Allen" //// Lowercase
// const firstName = "Allen" ///camelCase
// const FirstName= "Allen" ///Pascalcase
// const $firstName = 'Allen'
// console.log(name)

// let surname = 'olagunju'
// console.log(surname)

// name = "George"
// console.log(name)

// surname = "Allen"
// console.log(surname)

// const _class = ""
// console.log(_class)

////Object Data type
let me = {
    name: "sunday",
    age: 22,
    job: "Solution Engineer",
    state: "Lagos"
}

console.log(me)


//////Primitive Data type
// const name = "Allen" //string
// const age = 22 // number
// const canDrive =  true /// boolean
// const job = "" /// undefined
// const state = null ///null
// const symbol = $
// const number = BigInt859993988484993903003094858493



////BASIC OPERators

const now = 2025

const ageAllen = now - 2002
const ageCecila = now - 1998
const add = now + 25
console.log(ageAllen * 2)
console.log(ageAllen / 10)



////Assignment Operators

let x = 10 + 5 //15
x+= 10 /// x =  x+10 = //25

x*= 4 

x++ 
x--
console.log(x)



////comparison operators
console.log(ageAllen, ageCecila)
console.log(ageAllen <= ageCecila)


const massAllen = 68;
const heightAllen = 5.7
const massCecila = 63
const heightCecila = 5.9


const BmiAllen = massAllen / heightAllen**2
const BmiCecila = massCecila / (heightCecila * heightCecila)

console.log(BmiAllen, BmiCecila)

const higherBmi = BmiAllen > BmiCecila
console.log(higherBmi)


const firstName = "Akinbobla"
const job = "Solution Engineer"
// const age = 2025 - 2002
const martialStatus = "single"
const club = "Chelsea"


// const Akin = "I'm" +  firstName  + 'a' + age + 'year old' + job + 'currently' + martialStatus + 'and i support the best team in world' + club
// console.log(Akin)

// const AkinNew = `I'm ${firstName} a ${age} year old ${job} currently ${martialStatus} and i support the best team in the world ${club}`
// console.log(AkinNew) 



////TAKING DECISION IF/ ELSE STATEMENT

const age = 25;

if (age >= 18) {
    console.log(`Allen can get a drivers License and can also own a car`)
} else {
    const yearsLeft = 18 - age
    console.log(`Allen is too young to own a car and have drivers license wait another ${yearsLeft} years`)
}

