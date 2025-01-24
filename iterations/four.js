// node iterations/four.js

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// +++++++++++++++ note +++++++++
// maps mai FOR IN  loop work nahi karta hai 

// +++++++++++ RESON WHY FOR IN PROPERTY DONT WORK IN MAPS ++++++++++++++++++
// What Are Enumerable Properties?
// Enumerable properties are the ones that can be listed in a loop like for...in.
// Non-enumerable properties are hidden from loops but can still be accessed directly using dot notation (obj.hidden) or bracket notation (obj['hidden']).