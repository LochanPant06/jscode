
// +++++++++++++++++++++++ FOR OF LOOP +++++++++++++++++++++

// ++++++++++++++ syntex ++++++++++++

//for (const num of object ) { // here num is a varible and object wo cheez hai jispe ye loop lagana hai
    //console.log(num);
//}



// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // 
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// +++++++++++++++++++++++++Maps+++++++++++++++++++++++
// maps store unique value and in order vise

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// map to print ho jate hai with the help of FOR OF loop but OBJECT print nahi ho pate hai 

// ++++++++++++++++++++++++ Why Object is Not Iterable +++++++++++++++++++

// Plain objects do not have a Symbol.iterator method by default, so they cannot be directly used with for...of. However, you can iterate over their properties using:

// for...in: Loops through enumerable keys of an object.
// Object.keys(): Gets an array of the object's keys.
// Object.entries(): Gets an array of the object's key-value pairs

// +++++++++++++++ 1st ++++++++++++++++ 

// for (const [key] of map){
//console.log(key)};

// +++++++++++++++ 2nd ++++++++++++++++ 

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// +++++++++++++++ 3rd ++++++++++++++++ 

// for (const key of map){
//     console.log(key)};

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }