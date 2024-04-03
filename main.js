//  Day 2

// Booleans

var myBool1 = true;
console.log(myBool1, typeof myBool1)

var myBool2 = false;
console.log(myBool2, typeof myBool2);


// Negating Booleans
console.log(!true);
console.log(!false);

// Converting to Booleans
// use the Boolean() constructor
var firstName = 'Dillon';
console.log(Boolean(firstName)); // true - non empty strings evaluate to true

var emptyString = ''
console.log(Boolean(emptyString)); // false - empty strings are considered false

var someNumber = 55;
console.log(Boolean(someNumber)); // true - all non-0 numbers evaluate to true

var zeroNum = 0;
console.log(Boolean(zeroNum)); // false - all 0 numbers are false

// undefined an null will always be false
console.log(Boolean(undefined));
console.log(Boolean(null));

// Double Negation - common tactic for converting to bool
console.log(firstName);
// Use a single ! that gives us the opposite that we would get from passing into Boolean()
console.log(!firstName);
// Add a second ! to negate the original negation
console.log(!!firstName);

console.log(emptyString);
console.log(!emptyString);
console.log(!!emptyString);

// Chaining Booleans
console.log('Chaining Booleans:')
// In Python, 'and' and 'or' -- JS we use && and ||
console.log('with || or')
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('with && and')
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// Short Circuiting

function t1(){
    console.log('t1 is running');
    return true;
}

function t2(){
    console.log('t2 is running');
    return false;
}

function t3(){
    console.log('t3 is running');
    return true;
}

// When using the && operator, once an expression returns false, no following expressions are ran
// t1()&&t2()&&t3();

// When using the || operator, once an expression return true, no following expressions are ran
t1()||t2()||t3()


// Null vs Undefined

// undefined - means the variable was declared but not given a value aka undefined
// null - is a value and can be assigned to represent no value
var myUndefined1;
var myNull = null;
var myUndefined2 = undefined; // typically don't do this

console.log(myUndefined1);
console.log(myNull);
console.log('types:\n')
console.log(typeof myUndefined1); // undefined
console.log(typeof myNull); // null is an object!

console.log('Equality check:\n');
console.log(myUndefined1 == myNull); // ture
console.log(myUndefined1 === myNull); // false
console.log(myNull === null); // true

console.clear();


// Let and Const

// variables declared with var can be redeclared - can be dangerous
var myCity = 'Columbia';
console.log(myCity);

var myCity = 'New York';
console.log(myCity);

// variables declared with let cannot be redeclared - saves us from ourselves

let myState = 'Missouri'
console.log(myState);

// let myState = 'California'; // error
myState = 'California'
console.log(myState);

const myCountry = 'USA';
console.log(myCountry);

// const myCountry = 'France'; // error
// myCountry = 'France' // error
console.log(myCountry);

// let - can be undefined and can reassign a value to a variable
// const - must have value on instantiation & cannot reassign a value once it is set!
let myFavColor = 'blue';
myFavColor = 'green';
console.log(myFavColor);

const myFavAnimal = 'squirrel';
// myFavAnimal = 'cat';

// var - global scoped (function scoped if in function)
// let and const - block scoped

if (true){
    var testVar = 'test'; // var is globally scoped
    console.log('Inside block:', testVar);
}
console.log('Outside block:', testVar);

if (true){
    let testLog = 'test let'; // let is block scoped
    console.log('Inside block:', testLog);
}
// console.log('Outside block:', testLog); // Uncaught Reference Error: testLet is not defined


if (true){
    let anotherEx = 'This is my example';
    console.log('Inside Block:', anotherEx);
    if (true){
        console.log('Nested Block:', anotherEx);
    }
}

// console.log('Outside Block:', anotherEx); // Uncaught Reference Error: testLet is not defined

// const is also block-scoped
if (true) {
    const testConst = 'testing const';
    console.log('Inside:', testConst);
}

// console.log('Outside:', testConst) // Uncaught ReferenceError: testConst is not defined


// From now on, use let or const for variable declaration
console.log(myRandomVarName); // undefined due to "variable hoisting"

var myRandomVarName = 'random';

console.log(myRandomVarName);


// console.log(today); // ReferenceError: Cannot access 'today' before initialization

let today = 'Tuesday';
console.log(today);
console.clear()

// ----------------------------------------------------------------------------


// Arrays

// Declaring
let people = ["Taylor Swift", "Harry Styles", "Beyonce", "Billie Eilish"];
console.log(people);
console.log(typeof people);

// Accessing
console.log(people[0]); 

console.log(people[-1]); // undefined - negative indices do not work

// Arrays have a built in .length property
console.log(people.length);



// Array Methods

// .push(value) - add value to the end of the arr - return new length
console.log(people);

let returnVal = people.push('Lady Gaga');
console.log(people);
console.log(returnVal);

// arr.pop() - will remove the last elemtn and return that element
let popReturn = people.pop();
console.log(people);
console.log(popReturn);


const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
colors.pop();
colors.push('violet');
console.log(colors);

// arr.unshift(value) - will add the value to the beginning of the arr and return new length
console.log(people);

let unshiftReturn = people.unshift('Olivia Rodrigo');
console.log(people);
console.log(unshiftReturn);

// arr.shift() = will remove the first value from the arr and return that value
let shiftReturn = people.shift();
console.log(people);
console.log(shiftReturn);


// arr.indexOf(value) - will return the index of the value in the arr or -1 if not present
console.log(people.indexOf('Beyonce'));
console.log(people.indexOf('Bad Bunny'));

let nums = [10, 20, 15, 10, 12, 30, 20]

console.log(nums.indexOf(20));
console.log(nums.indexOf(20,2)); // after comma starts at that index

//arr.forEach(callbackFn) - execute the callback function on each element and discard the return value

people.forEach(function(element){console.log(element)});


// Array Destructuring
// JS allows us to declaremultiple variables at a time and assign them members of the array

console.log(people);

let [tswift, harry, bey, billie] = people;

console.log(tswift);
console.log(harry);
console.log(bey);
console.log(billie);


let rainbow = ['red', 'orange', 'yellow','green', 'blue', 'indigo', 'violet']

let [r, o, y1] = rainbow;

console.log(r, o, y1);

let finalFour = ['UConn', 'Purdue', 'Alabama', 'NC State'];

[team1, team2, team3, team4, team5] = finalFour;

console.log(team1);
console.log(team2);
console.log(team3);
console.log(team4);
console.log(team5);


// Rest Operator ...
console.log(rainbow);
let [red, orange, yellow, ...others] = rainbow;

console.log(others);


// arr.join(string_to_join_on)
console.log(people.join(', '));

let things = ['a', 'b', 'c'];

console.log(things.join('-'));


// Array Slicing
//Allows us to take a portion of the array by its indices. Original array not modified
// arr.slice(start, end)

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
console.log(months);
console.log(months.slice());
console.log(months.slice(3));
console.log(months.slice(1,4));
console.log(months.slice(-4));
console.log(months.slice(4,2)); // returns empty array

// Array Splicing
// arr.splice(start, deleteCount, item1, item2, ..., itemN);

let fruits = ['apple', 'banana', 'peach', 'watermelon'];
console.log(fruits);

// Insert an item at an index postition (assuming not beginning or end)
// start - 3 - start is the indice you are trying to fill
// deleteCount - 0
// item1 - 'pear'
fruits.splice(3, 0, 'pear');
console.log(fruits); // original array has been modified


// Insert an item at index position and remove item as well
// To replace 'peach' with 'orange'
// start - 2
// deleteCount - 1
// item1 - 'orange'
fruits.splice(2, 1, 'orange');
console.log(fruits);


// Insert and/or remove multiple items
// Replace 'banana', 'pear', and 'orange', with 'kiwi', 'grapes', 'mango'

fruits.splice(1, 3, 'kiwi', 'grapes', 'mango');
console.log(fruits);

fruits.splice(3, 1, 'dragon fruit', 'Gros Michele')
console.log(fruits);



/*
    Make an Array of your favorite foods. Then using the methods we have learned, add "Fried Tarantulas" to the end of the array, then add "Mokh Mchermel" to the front. Then, using a slice of the now modified array, print your original list of favorite foods without my additions.
*/


let favs = ['spaghetti', 'BBQ', 'flan']
console.log(favs);

favs.push('Fried Tarantulas');
console.log(favs);

favs.unshift('Mokh Mchermel');
console.log(favs)

console.log(favs.slice(1, 4))
console.clear()


// -------------------------------------------------------------

// Functions

// Regular Functions

/*
Syntax:

functions funcName(param1, param2, etc.){
    code to run when executed
}
*/

function addNums(){
    let num1 = 10
    let num2 = 20
    return num1 + num2
};

console.log(addNums);
console.log(typeof addNums);

// to execute - funName() or funcName(arg1, arg2, etc.)
console.log(addNums());


// Using Parameters
function addNumsAgain(num1, num2){
    return num1 + num2
};

console.log(addNumsAgain);

console.log(addNumsAgain(16, 28));

console.log(addNumsAgain(15));


function logArgs(a, b){
    console.log('A is:', a, typeof a);
    console.log('B is:', b, typeof b);
};


logArgs(22); // will not throw error for missing arg - will be undefined instead

logArgs(b=13, a='hello') // keyword arguments are not a thing in JS



/*
Create a JS Function that takes a first name and last name and returns a String that says Hello first name last name. The input would be something like:
"Bo", "Jackson"
and the output would be:
"Hello Bo Jackson"
*/

function greeting(a, b){
    return console.log(`Hello ${a} ${b}`);
};

greeting('Bo', 'Jackson');


// Arrow Functions

// The most basic arrow function

let doNothing = () => {};
console.log(doNothing);
console.log(typeof doNothing);


/*
Syntax
const funcName = (param1, param2, etc) => {
    //dostuf
    return value
}


* if only one parameter, the parenthese are optional const funcName = param1 => {
    // do stuff
    return value
}


* if you rfunction is one line returning a value, you can use the implicit return
const funName = (param1, param2, etc) => returnValue

*/


const addNums2 = (num1, num2) => {
    num1 += 10;
    num2 += 10;
    return num1 + num2
};

console.log(addNums2);
console.log(typeof addNums2);

console.log(addNums2(4, 8));

// with one param
const squareNum = num => {
    return num ** 2
};

console.log(squareNum);
console.log(typeof squareNum);

console.log(squareNum(10));
console.log(squareNum(4));


// Implicit Return
const squareNum2 = num => num ** 2;

console.log(squareNum2);
console.log(typeof squareNum2);

console.log(squareNum2(10));
console.log(squareNum2(4));


// The Spread Operator ...

// .. As a rest operator
let [x, y, ...z] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(x);
console.log(y);
console.log(z);


function useSpread(x, y, z) {
    console.log('x:', x);
    console.log('y:', y);
    console.log('z:', z);
    return x * y + z
};

let myNumArr = [11, 2, 7];

// traditionally we can call our function like this:
let myNewNum = useSpread(11, 2, 7);
console.log(myNewNum);

// Or like this
let myNewNum2 = useSpread(myNumArr[0], myNumArr[1], myNumArr[2]);
console.log(myNewNum2);


// using the spread operator
let myNewNum3 = useSpread(...myNumArr);
console.log(myNewNum3);


// We can also use the spread operator when making copies of the array

let myNumArr2 = [...myNumArr];
console.log(myNumArr2)

let myNumArr3 = ['hello', ...myNumArr, 'goodbye'];
console.log(myNumArr3);

// ------------------------------------------------------------------

// Array Methods with callback functions!

// Array.forEach(callbackFn)  -? callbackFn(element, index, arr)

let baseballTeams = ['White Sox', 'Red Sox', 'Tigers', 'Cardinals', 'Mets', 'Dodgers', 'Giants'];

function myCallBack(element, index, arr){
    console.log('Element:', element);
    console.log('Index:', index);
    console.log('Array:', arr);
};

baseballTeams.forEach(myCallBack);

baseballTeams.forEach( e=> console.log(`I like to watch the ${e} play baseball`));

baseballTeams.forEach( (e,i) => console.log(`${e} is at index ${i}`))

// Array.map(callbackFn) -- callbackFn (elemtn, index, arr)
// return a new array with the return values of callbackFn on each element

let teamLengths = baseballTeams.map( team => team.length );
console.log(teamLengths);

let teamIndex = baseballTeams.map( (el, idx) => el + idx );
console.log(teamIndex);

// Array.filter(callbackFn) - callbackFn(element, index, arr)
// return a new array withh the elements that return a truthy value when callbackFn is executed on it

function isMultiWords(teamName){
    let teamWords = teamName.split(' ')
    return teamWords.length >= 2
};

let multiMap = baseballTeams.map(isMultiWords);
console.log(multiMap);

let multiFilter = baseballTeams.filter(isMultiWords);
console.log(multiFilter);


// Array.reduce(callbackFn) - callbackFn(accumulator, currentValue)

let numbers = [2, 4, 7, 9, 6, 1, 5];

function reduceCallback(acc, current){
    console.log('Accumulator', acc);
    console.log('Current Value', current);
    console.log('Returns', acc + current);
    console.log('--------------')
    return acc + current
};

let total = numbers.reduce(reduceCallback);
console.log(total);


// Flow Control

// Review ifs

let myAge = 55;

let eligibility;
if (myAge > 35){
    eligibility = true;
} else {
    eligibility = false;
};

console.log(eligibility);

// Ternary Operator
// boolean or condition ? actionIfTrue : actionIfFalse
let val1 = 20;
let val2 = 15

let val3 = (val1 > val2) ? 'Hello' : 'Goodbye';
console.log(val3);


let birthYear = 1985;

let myGeneration;
if (birthYear >= 1946 && birthYear <= 1964){
    myGeneration = 'Boomer'
} else if (birthYear <= 1979){
    myGeneration = 'GenX'
} else if (birthYear <= 1995){
    myGeneration = 'Millenial'
} else {
    myGeneration = 'Zoomer'
};

console.log(myGeneration);

let myGeneration2 = (birthYear <= 1964) ? 'Boomer' : (birthYear <= 1979) ? 'GenX' : (birthYear <= 1995) ? 'Millenial': 'Zoomer';
console.log(myGeneration2);


// Traditions For Loop
// for (varName=startingValue; stopCondition; varName increment/decrement)

// Simple Example
for (let i=0; i < 5; i++){
    console.log(i);
};

console.log('--------------')

for (let j=10; j <= 100; j+=5){
    console.log(j);
};

console.log('-----------------')

for (let k=10; k>0; k--){
    console.log(k);
};

// use traditional for loop to loop over an array
// start = 0 to represent index
// stopCondition < arr.length
// increment by 1

console.log(baseballTeams);

for (idx=0; idx< baseballTeams.length; idx++){
    console.log(idx, baseballTeams[idx])
};


// For...of Loop -- ES6
// Loop over an iterable giving each iterable item
// Syntax: for (let element of iterable){ do something for each }

for (let team of baseballTeams){
    console.log(team);
};

// -- works with strings
let firstPresident = 'George Washington';

for (let chr of firstPresident){
    console.log(chr);
};


// For...in loop
// Will loop through the properties of an object
// an aArray is a special type of object where the indices are properties

for (let i in baseballTeams){
    console.log(i);
};

let exObj = {firstName: 'Dillon', lastName: 'Dains', city: 'Columbia'};

for (let key in exObj){
    console.log(key);
};

// while loop
// Syntax: while(condition){ code to run while condition is true}

let randomNumber = Math.floor(Math.random() * 10);
console.log('start', randomNumber);

while (randomNumber != 5){
    randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);  
};

console.log('end', randomNumber)


// do...while loop
// Syntas: do { statement } while (condition);
// The do is run AT LEAST one time

let myNum = 12;
do {
    myNum += 10;
    console.log(myNum)
} while (myNum < 100);

console.clear()
// ====================================================================================================================================



// Exercise #1
// Use map to convert an array of number from inches to feet

// 1 foot = 12 inches
let heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]

let heightsInFeet = heightsInInches.map (height => height/12)
console.log(heightsInFeet)





// Exercise #2
// Use the array of shop items provided and present the the information in the following format

// =======================================
// Name: 	 Air Max 97
// Price: 	 130
// About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes.
// Category: shoes
// =======================================
// Name: 	 Adidas NMD R1
// Price: 	 128
// About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
// Category: shoes
// =======================================
// Name: 	 Gucci Oversize T-shirt with Interlocking G
// Price: 	 580
// About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
// Category: shirts
// =======================================
// Name: 	 Nike Sportswear Club
// Price: 	 18.97
// About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
// Category: shirts
// =======================================
// Name: 	 Spanx Flare Jeans, Vintage Indigo
// Price: 	 148
// About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
// Category: pants
// =======================================
// Name: 	 Bonobos Premium Stretch Jeans
// Price: 	 69
// About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
// Category: pants

let shopItems = [
    {
        id: 1,
        name: "Air Max 97",
        price: 130.0,
        desc: "The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
        category: "shoes",
    },
    {
        id: 2,
        name: "Adidas NMD R1",
        price: 128,
        desc: "New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
        category: "shoes",
    },
    {
        id: 3,
        name: "Gucci Oversize T-shirt with Interlocking G",
        price: 580,
        desc: "The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
        category: "shirts",
    },
    {
        id: 4,
        name: "Nike Sportswear Club",
        price: 18.97,
        desc: "The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
        category: "shirts",
    },
    {
        id: 5,
        name: "Spanx Flare Jeans, Vintage Indigo",
        price: 148,
        desc: "These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
        category: "pants",
    },
    {
        id: 6,
        name: "Bonobos Premium Stretch Jeans",
        price: 69,
        desc: "Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
        category: "pants",
    },
];


for (let obj of shopItems){
    console.log('=======================================')
    console.log('Name:     ', obj.name)
    console.log('Price:    ', obj.price)
    console.log('About:    ', obj.desc)
    console.log('Category: ', obj.category)
};






// Exercise #3
// String Reversal Function:
// Write a function called reverseString that takes a string (str) as an argument and returns the reverse of that string.

let testString1 = "Hello World" // "dlroW olleH"
let testString2 = "test test 123" // "321 tset tset"

function reverseString(a_string){
    let output = "";
    for (idx=a_string.length - 1; idx >= 0; idx--){
        output += a_string[idx];
    }
    return console.log(output)
};

reverseString(testString1);
reverseString(testString2);




// Exercise #4
// Duplicate Element Remover Function:
// Write a function called removeDuplicates that takes an array (arr) as an argument and returns a new array with duplicate elements removed

let testArr1 = ['Chicago', 'New York', 'Miami', 'New York','Chicago', 'Miami', 'Chicago', 'New York', 'Chicago'] // ['Chicago', 'New York', 'Miami']

let testArr2 = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 2, 3, 4] // [1, 2, 3, 4]

function removeDuplicates(arr){
    let output = [];
    for (idx=0; idx < arr.length; idx++){
        if (output.includes(arr[idx])){} else {output.push(arr[idx])}
    };
    return console.log(output)
};

removeDuplicates(testArr1)
removeDuplicates(testArr2)
