

const myNums = [1,2,3,4,5,6];

const newNums = myNums.filter((num) => {
    return num>4
})
// agar curly bresses de diye to return statement likhna hota hai 

// or can be written as 

//  const newNums = myNums.filter((num) => num>4 )


console.log(newNums);