const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed




accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


//++++++++++++
//note
// console.log(+42);           // 42 (number remains unchanged)
// console.log(+"123");        // 123 (string converted to number)
// console.log(+"123abc");     // NaN (invalid numeric string)
// console.log(+null);         // 0 (null converts to 0)
// console.log(+undefined);    // NaN (undefined cannot be converted)
// console.log(+false);        // 0
// console.log(+true);         // 1