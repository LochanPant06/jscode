//+++++++++++++++++++++++++++++++++++++++++++++//
console.log(+42);           // 42 (number remains unchanged)
console.log(+"123");        // 123 (string converted to number)
console.log(+"123abc");     // NaN (invalid numeric string)
console.log(+null);         // 0 (null converts to 0)
console.log(+undefined);    // NaN (undefined cannot be converted)
console.log(+false);        // 0
console.log(+true);         // 1

// ++++++++++++++++++++++++++++++++++++++++++++//