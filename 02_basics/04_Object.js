// const InstaUser = new Object()
const InstaUser = {}

InstaUser.id = "123abc"
InstaUser.name = "Sammy"
InstaUser.isLoggedIn = false

 console.log(InstaUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rudransh",
            lastname: "Dubey"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname);   //  Accessing nested object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);

 const obj3 = Object.assign({}, obj1, obj2, obj4) // Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
 console.log(obj3);

//const obj3 = {...obj1, ...obj2}  // You can also use the spread operator to merge objects.
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
// console.log(InstaUser);
// console.log(Object.keys(InstaUser));
// console.log(Object.values(InstaUser));
// console.log(Object.entries(InstaUser));

// console.log(InstaUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "welcome to js",
    price: "free",
    courseInstructor: "My Github repo :p"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // Destructuring the object

// console.log(courseInstructor);
console.log(instructor);   


//Array of objects
[
    {},
    {},
    {}
] 
