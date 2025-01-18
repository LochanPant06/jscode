
console.log(this);
//+++++++++++++++++++ 1. this in the Global Scope++++++++++++++
// In the Browser (window)
// In the global scope, this refers to the window object.

// ++++++++++++++++++ 2. In Node.js   ++++++++++++++++++++++++
// In Node.js, the global object is called global, but in the top-level global scope, this does not refer to global. Instead, it refers to an empty object ({}) in a module context.