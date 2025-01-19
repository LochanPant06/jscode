// node controlFlow/truthy.js
   

const userName = "dcwhjbvsb";//if string is empty then else case will passed if we give any value to the string then it run first .
// "" ---> false 
// " not empty " ---> true


if(userName){
    console.log(" hey you are welcomed ")
}
else{
    console.log("hey you are not welcomed ")
}

//+++++++++++++++++++++++++++++++++++++++++++++++++

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// +++++++++++++++++++checking weather array is empty or not ++++++++++++ 


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
// +++++++++++++++++++checking weather object is empty or not  +++++++++++++++ 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//Object.keys(emptyObj) is array and we can find its length like we do in array 
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// kabhi null ya undefine  aajaye tab use mai atta hai nahi to firstvalue le leta hai 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



// +++++++++++++++++++++++++ some extra notes to remember ++++++++++++++++++++++++++++++++++
// false == 0;
// false == '';
// 0 == '';