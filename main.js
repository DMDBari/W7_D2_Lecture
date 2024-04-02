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

let [r, o, y] = rainbow;

console.log(r, o, y);

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










