//primitive

// 7 types: string, number , boolean,null,undefiened,symbol,bigInt

let id=Symbol('123')
let anotherid=Symbol('123')
console.log(id===anotherid)// false because even we provides the same value but symbol type make it unique 
// reference type ( non premitive datatype)
console.log(typeof(id));
console.log(typeof(anotherid)); // symbol it self is a type 

let bigNumber=34456667788999252676n // my typing n in last it automaticaly converts it to bigint type
console.log(typeof(bigNumber));



// array,objects,functions


const heros=['shaktiman','krish']; //aray

let myObj={
    name:"debarpan das",
    age:19,
    id:2501445
}

const myFn=function(){
    console.log("helloworld");
    
}

console.log(typeof(null)); // note: type of null is a object 
console.log(typeof myFn); //function's datatype is function only




