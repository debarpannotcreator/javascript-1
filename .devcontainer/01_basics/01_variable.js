const accountId=144553  // isko change nhi kia ja skta 
let accountEmail="deb@gmail.com"
var accountPass="123456"  // var me block scope and functional scope ka dikkat hota hai isiley ajkal koi var use nhi karta sab let use karte hai 
/*
prefer not to use var
*/
accountCity="bhubaneshwar" // reserve kar skta hai lakin isko bilkul use nhi karna hai 
let accountState;  // ye undefined hoga kyu ki declare karke chor diya maine bas 

//accountId=5// nhi hoga change 
accountEmail="d@gmail.com"
accountPass="111111"
accountCity="jhatsuguda"
//console.log(accountId);  
console.table([accountId,accountEmail,accountPass,accountCity,accountState])