//                node basics/rough.js

let  sym1 = Symbol('first key');
const sym2 =Symbol('first key');
const object = {
    name : 'lochan',//name is key and lochan is property
    class : 12,
    [sym1]:'khushi',//using symbol in object 
    sym1 : 'lochan',
    "roll-no" : 'bt22mec006',//use when there is gap between key 

}
// console.log(object.name);
// console.log(object.class)
// console.log(object["roll-no"]);//this is how to take output of key inside object 
// console.log(object[sym1]);
console.log(typeof object[sym1]);
console.log(object);//check after printing it 
console.log(object['roll-no']);


// +++++++++++++++++++++++++++++++++++++++

//ways of declearing object :
// const tinderUser = new Object() // singleton object 
const tinderUser = {}              //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]