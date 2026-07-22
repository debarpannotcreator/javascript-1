let score =33
console.log(typeof(score))

let score2="33"
console.log(typeof(score2))

let valueInNumber=Number(score2)
console.log(typeof(valueInNumber))    // is atatement me string to number convert hua dhyan rahe yaha Number me N capital hai ... Lakin what if data type kuch aisa ho "33abc" .. lets see 

let score3="33abc"

let valueInNumber2=Number(score3)  // yaha par number me toh convert hogya lakin jab maine uska value print kia toh wo NaN bataya means "not a number".. toh ye thoda sa dikkat hai aise datas ko bhe js number me convert kar deta hai .
console.log(typeof(valueInNumber2))  
console.log(valueInNumber2) //NaN output

let score4=null
console.log(typeof(score4)) //null is a object 
let convertNull=Number(score4)
console.log(convertNull) // 0

let score5=undefined //ye khud he ek type hai
console.log(typeof(score5)) 
let convertUndefined=Number(score5)
console.log(convertUndefined)

// true convert hota hai 1 me 
// false convert hota hai 0 me 
// string me convert karna hoga toh same type se convert hga bas string me s capital hoga same boolean me karne ke liye bhe boolean me b capital 

//boolean conversion me 1 convert hota hai true me aur koi string nhr convert hota hai boolean me bur empty space or 0 par false me convert ho jata hai 

