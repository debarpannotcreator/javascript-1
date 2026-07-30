// stack (premitive)--copy milta hai   , heap (nonpremitive)--- origtinal milta hai 

let myYt ="debu.com" // primitive data type h toh iska memory jayega stack memory me 

let anotherYt = myYt
anotherYt="chai and code with debu"
console.log(myYt);
console.log(anotherYt);

let user={
    email:"debu@gmail.com",
    name:"debarpandas"
}   // ye heap memeory me store hoga kyu ki ye ek nonpremitive data type hai (object) isko real data ka reference milega isiley ek ko change karenge tog dono change hoga kyu ki unka refrence same hai 

let userTwo =user;

userTwo.email="debarpannotcreator@gmaial.com"

console.log(user.email);
console.log(userTwo.email);// ab dono user and userTwo ka value change ho jayega 


