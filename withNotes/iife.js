// node 2_BASICS/iife.js
// Immediately Invoked Function Expressions (IIFE)

//An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined. It is a common design pattern used to create a private scope and avoid polluting the global namespace.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//give ; if we want to make other function run i we dont provide ; then other function will not work

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')//we pass variable inside this paranthesis