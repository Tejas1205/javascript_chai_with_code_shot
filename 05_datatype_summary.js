//primitive

//type -7 = string, null ,undefined,symbol
        // number , bigInt,boolean

const score=100
const scorevalue=100.3

const isLoggedIn=false
const outSideTemp=null
let userEmail; 
let userName=undefined
let id=Symbol("123")
let anotherId=Symbol('123')

console.log(anotherId===Symbol('123'));//FALSE

const bigInterger=616161616161616464646464646n
console.log(typeof bigInterger);//bigint


        //reference  (non primitive)
        // array, Object, Function

//Array
const furit=["apple","mango","banana"]//object

//object

const location={ //datatype object
    city:"pune",
    road:"hadapsar"
}

//function

const myfun =function(){ // datatype - function
    console.log("helloo world");
    
}
console.log(typeof location);
console.log(typeof furit);

// ======================================

let myYoutubename="hiteshchoudhrydotcom"

let anothername= myYoutubename

anothername="chaiwithcode"

console.log(myYoutubename);
console.log(anothername);


let userOne={
    email :"username@gmail.com",
    city:"pune"
}

let userTwo=userOne

userTwo.email="tejas@gmail.com"

console.log(userOne);
console.log(userTwo);




